/**
 * Panel de cuentas: Google + correo/contraseña (Firebase Auth)
 * y registro de intentos en Firestore.
 *
 * Si FIREBASE_CONFIG es null (ver js/firebase-config.js), el panel no se
 * muestra y el simulador funciona en modo invitado, igual que siempre.
 */
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {
    getAuth, onAuthStateChanged, GoogleAuthProvider,
    signInWithPopup, signInWithRedirect, getRedirectResult,
    createUserWithEmailAndPassword, signInWithEmailAndPassword,
    sendPasswordResetEmail, signOut, updateProfile
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js';
import {
    getFirestore, collection, addDoc, serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const $ = (id) => document.getElementById(id);

const authScreen = $('auth-screen');
const modeScreen = $('mode-screen');
const userBar = $('user-bar');

// ---- Sin configuración: modo invitado clásico ----
if (typeof FIREBASE_CONFIG === 'undefined' || !FIREBASE_CONFIG) {
    authScreen.style.display = 'none';
    modeScreen.style.display = 'block';
    window.simulatorOnGraded = () => {};
} else {
    initAuth();
}

function initAuth() {
    const app = initializeApp(FIREBASE_CONFIG);
    const auth = getAuth(app);
    const db = getFirestore(app);
    let currentUser = null;
    let isGuest = false;

    // Mientras Firebase resuelve la sesión, no mostramos nada "brincando"
    modeScreen.style.display = 'none';
    authScreen.style.display = 'none';

    const ERRORES = {
        'auth/invalid-email': 'El correo no tiene un formato válido.',
        'auth/user-not-found': 'No existe una cuenta con ese correo. ¿Quieres crearla?',
        'auth/wrong-password': 'Contraseña incorrecta.',
        'auth/invalid-credential': 'Correo o contraseña incorrectos.',
        'auth/email-already-in-use': 'Ya existe una cuenta con ese correo. Usa "Iniciar sesión".',
        'auth/weak-password': 'La contraseña debe tener al menos 6 caracteres.',
        'auth/too-many-requests': 'Demasiados intentos. Espera unos minutos e inténtalo de nuevo.',
        'auth/popup-closed-by-user': 'Cerraste la ventana de Google antes de terminar.',
        'auth/network-request-failed': 'Sin conexión. Revisa tu internet e inténtalo de nuevo.'
    };
    const msgError = (err) => ERRORES[err.code] || ('Ocurrió un error: ' + (err.code || err.message));

    function showError(text) {
        const el = $('auth-error');
        el.innerText = text;
        el.style.display = text ? 'block' : 'none';
    }
    function showInfo(text) {
        const el = $('auth-info');
        el.innerText = text;
        el.style.display = text ? 'block' : 'none';
    }

    function renderState(user) {
        currentUser = user;
        if (user || isGuest) {
            authScreen.style.display = 'none';
            modeScreen.style.display = 'block';
            if (user) {
                userBar.style.display = 'flex';
                $('user-label').innerText = user.displayName || user.email;
            } else {
                userBar.style.display = 'none';
            }
        } else {
            authScreen.style.display = 'block';
            modeScreen.style.display = 'none';
            userBar.style.display = 'none';
        }
    }

    onAuthStateChanged(auth, (user) => renderState(user));
    getRedirectResult(auth).catch((err) => showError(msgError(err)));

    // ---- Alternar pestañas Iniciar sesión / Crear cuenta ----
    let mode = 'login';
    function setMode(m) {
        mode = m;
        showError(''); showInfo('');
        $('tab-login').classList.toggle('active', m === 'login');
        $('tab-register').classList.toggle('active', m === 'register');
        $('auth-name-row').style.display = m === 'register' ? 'block' : 'none';
        $('auth-submit').innerText = m === 'login' ? 'Iniciar sesión' : 'Crear cuenta';
        $('auth-forgot').style.display = m === 'login' ? 'inline' : 'none';
    }
    $('tab-login').onclick = () => setMode('login');
    $('tab-register').onclick = () => setMode('register');

    // ---- Google ----
    $('btn-google').onclick = async () => {
        showError('');
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (err) {
            if (err.code === 'auth/popup-blocked' || err.code === 'auth/operation-not-supported-in-this-environment') {
                try { await signInWithRedirect(auth, provider); }
                catch (e2) { showError(msgError(e2)); }
            } else {
                showError(msgError(err));
            }
        }
    };

    // ---- Correo / contraseña ----
    $('auth-form').onsubmit = async (ev) => {
        ev.preventDefault();
        showError(''); showInfo('');
        const email = $('auth-email').value.trim();
        const pass = $('auth-pass').value;
        const name = $('auth-name').value.trim();
        const btn = $('auth-submit');
        btn.disabled = true;
        try {
            if (mode === 'register') {
                if (!name) { showError('Escribe tu nombre completo.'); btn.disabled = false; return; }
                const cred = await createUserWithEmailAndPassword(auth, email, pass);
                await updateProfile(cred.user, { displayName: name });
                renderState(auth.currentUser);
            } else {
                await signInWithEmailAndPassword(auth, email, pass);
            }
        } catch (err) {
            showError(msgError(err));
        }
        btn.disabled = false;
    };

    // ---- Olvidé mi contraseña ----
    $('auth-forgot').onclick = async (ev) => {
        ev.preventDefault();
        showError(''); showInfo('');
        const email = $('auth-email').value.trim();
        if (!email) { showError('Escribe tu correo arriba y vuelve a pulsar "¿Olvidaste tu contraseña?".'); return; }
        try {
            await sendPasswordResetEmail(auth, email);
            showInfo('Te enviamos un correo para restablecer tu contraseña.');
        } catch (err) {
            showError(msgError(err));
        }
    };

    // ---- Invitado ----
    $('btn-guest').onclick = (ev) => {
        ev.preventDefault();
        isGuest = true;
        renderState(null);
    };

    // ---- Cerrar sesión ----
    $('btn-logout').onclick = async () => {
        isGuest = false;
        await signOut(auth);
        location.reload();
    };

    // ---- Guardar intento calificado (lo llama app.js al calificar) ----
    window.simulatorOnGraded = async (result) => {
        if (!currentUser) return;
        try {
            await addDoc(collection(db, 'attempts'), {
                uid: currentUser.uid,
                email: currentUser.email,
                nombre: currentUser.displayName || null,
                fecha: serverTimestamp(),
                modulos: result.modules,
                porModulo: result.perModule,
                aciertos: result.score,
                totalPreguntas: result.total,
                porcentaje: result.percentage
            });
        } catch (err) {
            console.warn('No se pudo guardar el intento:', err);
        }
    };
}

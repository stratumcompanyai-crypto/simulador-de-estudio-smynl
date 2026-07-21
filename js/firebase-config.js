/**
 * Configuración de Firebase (Autenticación + Base de datos)
 *
 * ⚠️ Mientras este valor sea `null`, el simulador funciona SIN cuentas
 * (modo invitado, como siempre). Para activar el panel de cuentas:
 *
 * 1. Entra a https://console.firebase.google.com y crea un proyecto
 *    (ej. "simulador-cedula-a1"). No necesitas Google Analytics.
 * 2. En "Compilación → Authentication → Comenzar → Sign-in method" habilita:
 *      - Google  (un clic, elige tu correo de soporte)
 *      - Correo electrónico/contraseña
 * 3. En "Authentication → Settings → Dominios autorizados" agrega:
 *      simulador-de-estudio-smynl.vercel.app
 * 4. En "Compilación → Firestore Database → Crear base de datos"
 *    (modo producción) y en la pestaña "Reglas" pega las reglas que
 *    están al final de este archivo.
 * 5. En "Configuración del proyecto (⚙️) → Tus apps → Web (</>)" registra
 *    la app y copia el objeto firebaseConfig aquí abajo, reemplazando null.
 * 6. Guarda, haz commit y push — el deploy activa el panel automáticamente.
 */
const FIREBASE_CONFIG = null;
/* Ejemplo de cómo debe quedar:
const FIREBASE_CONFIG = {
    apiKey: "AIza...",
    authDomain: "simulador-cedula-a1.firebaseapp.com",
    projectId: "simulador-cedula-a1",
    storageBucket: "simulador-cedula-a1.appspot.com",
    messagingSenderId: "1234567890",
    appId: "1:1234567890:web:abc123"
};
*/

/* Reglas de Firestore (pégalas en Firestore Database → Reglas):

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /attempts/{doc} {
      allow create: if request.auth != null
                    && request.resource.data.uid == request.auth.uid;
      allow read:   if request.auth != null
                    && resource.data.uid == request.auth.uid;
      allow update, delete: if false;
    }
  }
}
*/

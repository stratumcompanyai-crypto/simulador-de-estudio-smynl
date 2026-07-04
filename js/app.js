/**
 * Simulador Examen Cédula A1
 * Lógica principal del simulador
 */

// ========================================
// State
// ========================================
let currentModule = 1;
let timerInterval = null;
let isGraded = false;

// Timer durations in seconds per module
const MODULE_TIMES = {
    1: 40 * 60,  // 40 minutes
    2: 60 * 60,  // 60 minutes
    3: 32 * 60   // 32 minutes
};

// Remaining time per module (persisted across tab switches)
let moduleTimeRemaining = {
    1: MODULE_TIMES[1],
    2: MODULE_TIMES[2],
    3: MODULE_TIMES[3]
};

// ========================================
// Timer
// ========================================
function startTimer() {
    clearInterval(timerInterval);

    if (isGraded) return;

    const timerEl = document.getElementById('timer');

    timerInterval = setInterval(() => {
        moduleTimeRemaining[currentModule]--;
        const remaining = moduleTimeRemaining[currentModule];

        if (remaining <= 0) {
            clearInterval(timerInterval);
            moduleTimeRemaining[currentModule] = 0;
            updateTimerDisplay(0);

            // Lock the current module tab
            document.getElementById(`tab-btn-${currentModule}`).classList.add('locked');

            // Auto-advance to next unlocked module
            const nextModule = findNextUnlockedModule();
            if (nextModule) {
                switchTab(nextModule);
            } else {
                // All modules exhausted, auto-grade
                gradeQuiz(true);
            }
            return;
        }

        updateTimerDisplay(remaining);

        // Visual warnings
        if (remaining <= 60) {
            timerEl.classList.add('danger');
            timerEl.classList.remove('warning');
        } else if (remaining <= 300) {
            timerEl.classList.add('warning');
            timerEl.classList.remove('danger');
        } else {
            timerEl.classList.remove('warning', 'danger');
        }
    }, 1000);
}

function updateTimerDisplay(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    document.getElementById('timer').innerText =
        `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function findNextUnlockedModule() {
    for (let m = 1; m <= 3; m++) {
        if (m !== currentModule && moduleTimeRemaining[m] > 0) {
            return m;
        }
    }
    return null;
}

// ========================================
// Tab Navigation
// ========================================
function switchTab(modNum) {
    if (isGraded) return;

    // Pause current timer
    clearInterval(timerInterval);

    currentModule = modNum;

    // Update tab content visibility
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(`tab-${modNum}`).classList.add('active');
    document.getElementById(`tab-btn-${modNum}`).classList.add('active');

    // Update timer label
    document.getElementById('module-label-timer').innerText = `Módulo ${modNum}`;

    // Update timer display immediately
    updateTimerDisplay(moduleTimeRemaining[modNum]);

    // Reset timer visual state
    const timerEl = document.getElementById('timer');
    timerEl.classList.remove('warning', 'danger');

    // Start timer for new module
    startTimer();

    // Update progress bar
    updateProgress();
}

// ========================================
// Progress Tracking
// ========================================
function updateProgress() {
    const moduleQuestions = qData.filter(q => q.m === currentModule);
    let answered = 0;

    moduleQuestions.forEach((_, i) => {
        const globalIndex = qData.indexOf(moduleQuestions[i]);
        const selected = document.querySelector(`input[name="q${globalIndex}"]:checked`);
        if (selected) answered++;
    });

    const percentage = moduleQuestions.length > 0
        ? (answered / moduleQuestions.length) * 100
        : 0;

    const progressBar = document.getElementById('progress-fill');
    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    const progressText = document.getElementById('progress-text');
    if (progressText) {
        progressText.innerText = `${answered} / ${moduleQuestions.length} respondidas`;
    }
}

// ========================================
// Render Questions
// ========================================
function renderQuestions() {
    let m1HTML = '', m2HTML = '', m3HTML = '';

    qData.forEach((item, index) => {
        let html = `
        <div class="card" id="card-${index}">
            <div class="q-header">
                <div class="q-num">${index + 1}</div>
                <div class="q-text">${item.q}</div>
            </div>
            <div class="options">
        `;

        item.options.forEach((opt, optIndex) => {
            html += `
                <label class="option-label" id="label-q${index}-o${optIndex}">
                    <input type="radio" name="q${index}" value="${optIndex}" onchange="updateProgress()">
                    ${opt}
                </label>
            `;
        });

        html += `
            </div>
            <div class="explanation" id="exp-${index}">
                <strong>Explicación (${item.t}):</strong> ${item.e}
            </div>
        </div>`;

        if (item.m === 1) m1HTML += html;
        else if (item.m === 2) m2HTML += html;
        else if (item.m === 3) m3HTML += html;
    });

    document.getElementById('tab-1').innerHTML = m1HTML;
    document.getElementById('tab-2').innerHTML = m2HTML;
    document.getElementById('tab-3').innerHTML = m3HTML;
}

// ========================================
// Grading
// ========================================
function gradeQuiz(force = false) {
    if (!force) {
        if (!confirm("¿Estás seguro de finalizar el examen? Asegúrate de haber respondido los 3 módulos.")) {
            return;
        }
    }

    isGraded = true;
    clearInterval(timerInterval);
    document.getElementById('timer-bar').style.display = 'none';

    // Hide submit button
    document.getElementById('submit-btn').style.display = 'none';

    let score = 0;
    let m1Score = 0, m2Score = 0, m3Score = 0;
    let m1Total = 0, m2Total = 0, m3Total = 0;
    let failedTopics = new Set();

    qData.forEach((item, i) => {
        if (item.m === 1) m1Total++;
        else if (item.m === 2) m2Total++;
        else if (item.m === 3) m3Total++;

        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const val = selected ? parseInt(selected.value) : -1;

        // Disable all inputs
        document.querySelectorAll(`input[name="q${i}"]`).forEach(inp => {
            inp.disabled = true;
            inp.parentElement.classList.add('disabled');
        });

        const correctLabel = document.getElementById(`label-q${i}-o${item.c}`);
        const exp = document.getElementById(`exp-${i}`);

        if (val === item.c) {
            score++;
            if (item.m === 1) m1Score++;
            if (item.m === 2) m2Score++;
            if (item.m === 3) m3Score++;
            correctLabel.classList.add('correct');
        } else {
            if (val !== -1) {
                document.getElementById(`label-q${i}-o${val}`).classList.add('incorrect');
            }
            correctLabel.classList.add('correct');
            exp.classList.add('show');

            // Add topic to failed list
            if (item.t) failedTopics.add(item.t);
        }
    });

    const percentage = (score / qData.length) * 100;

    // Update score display
    document.getElementById('score-text').innerHTML =
        `Obtuviste <strong>${score} de ${qData.length}</strong> respuestas correctas (<strong>${percentage.toFixed(1)}%</strong>).` +
        (percentage >= 80
            ? '<br><span style="color: var(--accent-success);">🎉 ¡Felicidades! Aprobaste con más de 80 puntos.</span>'
            : percentage >= 60
                ? '<br><span style="color: var(--accent-warning);">⚠️ Aprobaste, pero necesitas más de 80 para exentar el próximo examen.</span>'
                : '<br><span style="color: var(--accent-danger);">❌ No alcanzaste la calificación mínima. Sigue preparándote.</span>');

    document.getElementById('m1-res').innerText =
        `${m1Score}/${m1Total} (${((m1Score / m1Total) * 100).toFixed(1)}%)`;
    document.getElementById('m2-res').innerText =
        `${m2Score}/${m2Total} (${((m2Score / m2Total) * 100).toFixed(1)}%)`;
    document.getElementById('m3-res').innerText =
        `${m3Score}/${m3Total} (${((m3Score / m3Total) * 100).toFixed(1)}%)`;

    // Render failed topics
    if (failedTopics.size > 0) {
        document.getElementById('feedback-topics').style.display = 'block';
        const ul = document.getElementById('topics-ul');
        ul.innerHTML = '';
        failedTopics.forEach(topic => {
            ul.innerHTML += `<li>${topic}</li>`;
        });
    }

    // Show all tabs for review
    document.querySelectorAll('.tab-content').forEach(el => el.style.display = 'block');
    document.querySelector('.tabs').style.display = 'none';

    // Show score board
    const sb = document.getElementById('score-board');
    sb.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    renderQuestions();
    updateTimerDisplay(moduleTimeRemaining[1]);
    startTimer();
});

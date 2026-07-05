/**
 * Simulador Examen Cédula A1
 * Lógica principal del simulador
 */

// ========================================
// State
// ========================================
let selectedModules = [];
let currentModule = 1;
let timerInterval = null;
let isGraded = false;
let activeQuestions = []; // The actual shuffled questions presented

// Timer durations in seconds per module
const MODULE_TIMES = {
    1: 40 * 60,
    2: 60 * 60,
    3: 32 * 60
};

let moduleTimeRemaining = {};

// ========================================
// Utilities
// ========================================
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}

// ========================================
// Exam Initialization
// ========================================
function startExam(modules) {
    selectedModules = modules;
    isGraded = false;
    
    // Hide mode screen, show exam screen
    document.getElementById('mode-screen').style.display = 'none';
    document.getElementById('exam-screen').style.display = 'block';

    // Prepare modules and timers
    moduleTimeRemaining = {};
    modules.forEach(m => {
        moduleTimeRemaining[m] = MODULE_TIMES[m];
    });

    // Handle Tabs UI
    const tabsContainer = document.getElementById('tabs-container');
    if (modules.length === 1) {
        tabsContainer.style.display = 'none';
        currentModule = modules[0];
        document.getElementById(`tab-${currentModule}`).classList.add('active');
    } else {
        tabsContainer.style.display = 'flex';
        // Hide unused tabs
        [1, 2, 3].forEach(m => {
            const btn = document.getElementById(`tab-btn-${m}`);
            if (modules.includes(m)) {
                btn.style.display = 'block';
            } else {
                btn.style.display = 'none';
            }
        });
        currentModule = modules[0]; // Start with the first selected module
    }

    // Prepare Questions
    prepareQuestions();
    
    // Render Questions
    renderQuestions();
    
    // Initialize Timer & Tabs
    if (modules.length > 1) {
        switchTab(currentModule); // Will also start timer
    } else {
        document.getElementById('module-label-timer').innerText = `Módulo ${currentModule}`;
        updateTimerDisplay(moduleTimeRemaining[currentModule]);
        startTimer();
    }
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prepareQuestions() {
    activeQuestions = [];
    
    // For each selected module, get its questions, pick a variant, shuffle options
    selectedModules.forEach(modNum => {
        let modQuestions = qData.filter(q => q.m === modNum);
        
        // Shuffle questions within the module
        modQuestions = shuffleArray([...modQuestions]);
        
        modQuestions.forEach(qItem => {
            // Pick a random variant
            const variantIndex = Math.floor(Math.random() * qItem.variants.length);
            const variant = qItem.variants[variantIndex];
            
            // Prepare options tracking
            let optionsObj = variant.options.map((optText, idx) => ({
                text: optText,
                isCorrect: idx === variant.c
            }));
            
            // Shuffle options
            optionsObj = shuffleArray(optionsObj);
            
            // Find new correct index
            const newCorrectIndex = optionsObj.findIndex(o => o.isCorrect);
            
            activeQuestions.push({
                m: qItem.m,
                t: qItem.t,
                q: variant.q,
                options: optionsObj.map(o => o.text),
                c: newCorrectIndex,
                e: qItem.e
            });
        });
    });
}

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

            if (selectedModules.length > 1) {
                document.getElementById(`tab-btn-${currentModule}`).classList.add('locked');
            }

            const nextModule = findNextUnlockedModule();
            if (nextModule) {
                switchTab(nextModule);
            } else {
                gradeQuiz(true);
            }
            return;
        }

        updateTimerDisplay(remaining);

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
    for (let i = 0; i < selectedModules.length; i++) {
        const m = selectedModules[i];
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
    if (!selectedModules.includes(modNum)) return;

    clearInterval(timerInterval);
    currentModule = modNum;

    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(`tab-${modNum}`).classList.add('active');
    
    if (selectedModules.length > 1) {
        document.getElementById(`tab-btn-${modNum}`).classList.add('active');
    }

    document.getElementById('module-label-timer').innerText = `Módulo ${modNum}`;
    updateTimerDisplay(moduleTimeRemaining[modNum]);

    const timerEl = document.getElementById('timer');
    timerEl.classList.remove('warning', 'danger');

    startTimer();
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================================
// Progress Tracking
// ========================================
function updateProgress() {
    const moduleQuestions = activeQuestions.filter(q => q.m === currentModule);
    let answered = 0;

    moduleQuestions.forEach(qItem => {
        const globalIndex = activeQuestions.indexOf(qItem);
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
}

// ========================================
// Render Questions
// ========================================
function renderQuestions() {
    let htmlContent = { 1: '', 2: '', 3: '' };

    activeQuestions.forEach((item, index) => {
        // Module specific numbering
        const modQuestions = activeQuestions.filter(q => q.m === item.m);
        const moduleIndex = modQuestions.indexOf(item) + 1;

        let html = `
        <div class="card" id="card-${index}">
            <div class="q-header">
                <div class="q-num">${moduleIndex}</div>
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

        htmlContent[item.m] += html;
    });

    document.getElementById('tab-1').innerHTML = htmlContent[1];
    document.getElementById('tab-2').innerHTML = htmlContent[2];
    document.getElementById('tab-3').innerHTML = htmlContent[3];
    
    // Hide unused tabs content
    [1, 2, 3].forEach(m => {
        if (!selectedModules.includes(m)) {
            document.getElementById(`tab-${m}`).style.display = 'none';
        }
    });
}

// ========================================
// Grading
// ========================================
function gradeQuiz(force = false) {
    // Validation: ensure all questions are answered
    if (!force) {
        let allAnswered = true;
        let unansweredCount = 0;
        
        activeQuestions.forEach((item, i) => {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (!selected) {
                allAnswered = false;
                unansweredCount++;
            }
        });

        if (!allAnswered) {
            alert(`No puedes finalizar el examen aún. Te faltan ${unansweredCount} pregunta(s) por responder.`);
            return;
        }

        if (!confirm("¿Estás seguro de finalizar el examen y ver tu calificación?")) {
            return;
        }
    }

    isGraded = true;
    clearInterval(timerInterval);
    document.getElementById('timer-bar').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';

    let score = 0;
    let scoresByModule = { 1: 0, 2: 0, 3: 0 };
    let totalsByModule = { 1: 0, 2: 0, 3: 0 };
    let failedTopics = new Set();

    activeQuestions.forEach((item, i) => {
        totalsByModule[item.m]++;

        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        const val = selected ? parseInt(selected.value) : -1;

        document.querySelectorAll(`input[name="q${i}"]`).forEach(inp => {
            inp.disabled = true;
            inp.parentElement.classList.add('disabled');
        });

        const correctLabel = document.getElementById(`label-q${i}-o${item.c}`);
        const exp = document.getElementById(`exp-${i}`);

        if (val === item.c) {
            score++;
            scoresByModule[item.m]++;
            correctLabel.classList.add('correct');
        } else {
            if (val !== -1) {
                document.getElementById(`label-q${i}-o${val}`).classList.add('incorrect');
            }
            correctLabel.classList.add('correct');
            exp.classList.add('show');
            if (item.t) failedTopics.add(item.t);
        }
    });

    const totalQuestions = activeQuestions.length;
    const percentage = (score / totalQuestions) * 100;

    document.getElementById('score-text').innerHTML =
        `Obtuviste <strong>${score} de ${totalQuestions}</strong> respuestas correctas (<strong>${percentage.toFixed(1)}%</strong>).` +
        (percentage >= 80
            ? '<br><span style="color: var(--accent-success);">🎉 ¡Felicidades! Aprobaste con más de 80 puntos.</span>'
            : percentage >= 60
                ? '<br><span style="color: var(--accent-warning);">⚠️ Aprobaste, pero necesitas más de 80 para exentar el próximo examen.</span>'
                : '<br><span style="color: var(--accent-danger);">❌ No alcanzaste la calificación mínima. Sigue preparándote.</span>');

    // Dynamically build module score cards
    const moduleScoresContainer = document.getElementById('module-scores-container');
    moduleScoresContainer.innerHTML = '';
    
    selectedModules.forEach(m => {
        const p = ((scoresByModule[m] / totalsByModule[m]) * 100).toFixed(1);
        moduleScoresContainer.innerHTML += `
            <div class="module-score-card">
                <h3>Módulo ${m}</h3>
                <p>${scoresByModule[m]}/${totalsByModule[m]} (${p}%)</p>
            </div>
        `;
    });

    if (failedTopics.size > 0) {
        document.getElementById('feedback-topics').style.display = 'block';
        const ul = document.getElementById('topics-ul');
        ul.innerHTML = '';
        failedTopics.forEach(topic => {
            ul.innerHTML += `<li>${topic}</li>`;
        });
    }

    // Show all presented tabs for review
    selectedModules.forEach(m => {
        document.getElementById(`tab-${m}`).style.display = 'block';
    });
    
    if (selectedModules.length > 1) {
        document.querySelector('.tabs').style.display = 'none';
    }

    document.getElementById('score-board').style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

let currentQ = 0;
let selectedOptions = [];

let userAnswers = {};
let flaggedQuestions = new Set();
let activeQuestions = [...questions];

// Taymer o'zgaruvchilari
let selectedMinutes = 30;
let timeLeft = 0;
let timerInterval = null;

// Start tugmasi bosilganda ishlaydigan funksiya
function startQuiz() {
  const select = document.getElementById("timer-select");
  selectedMinutes = parseInt(select.value, 10);

  // Ekranni almashtirish
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("quiz-area").style.display = "block";

  if (selectedMinutes === 0) {
    document.getElementById("timer-text").innerText = "⏱️ Vaqtsiz";
  } else {
    timeLeft = selectedMinutes * 60;
    startTimer();
  }

  renderQuestion();
}

function startTimer() {
  clearInterval(timerInterval);
  if (selectedMinutes === 0) return;

  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert("Vaqt tugadi!");
      showAnalytics();
      return;
    }
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById("timer-text").innerText = `⏱️ ${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
  }, 1000);
}

function updateProgressBar() {
  const answeredCount = Object.keys(userAnswers).length;
  const totalCount = activeQuestions.length;
  const percentage = Math.round((answeredCount / totalCount) * 100) || 0;

  document.getElementById("progress-bar").style.width = `${percentage}%`;
  document.getElementById(
    "progress-text"
  ).innerText = `Bajarildi: ${percentage}% (${answeredCount}/${totalCount})`;
}

function renderQuestion() {
  const q = activeQuestions[currentQ];
  const container = document.getElementById("quiz-container");

  document.getElementById("feedback").style.display = "none";
  document.getElementById("result-container").style.display = "none";

  updateProgressBar();

  const flagBtn = document.getElementById("btn-flag");
  if (flaggedQuestions.has(q.id)) {
    flagBtn.style.background = "#fef08a";
    flagBtn.innerText = "🚩 Belgilangan";
  } else {
    flagBtn.style.background = "transparent";
    flagBtn.innerText = "📌 Keyinroq ko'rish";
  }

  let html = `<div class="q-title">Savol ${currentQ + 1} / ${
    activeQuestions.length
  }: ${q.question}</div>`;

  if (
    q.type === "checkbox" ||
    q.type === "single" ||
    q.type === "single_choice" ||
    q.type === "multiple_choice"
  ) {
    const opts = q.options || [];
    opts.forEach((opt, idx) => {
      const isSelected = selectedOptions.includes(idx) ? "selected" : "";
      html += `<button class="option-btn ${isSelected}" onclick="toggleSelect(${idx})" id="opt-${idx}">${opt}</button>`;
    });
  } else if (q.type === "true_false") {
    html += `<table style="width:100%; margin-top:10px; border-collapse:collapse;">
      <tr><th style="text-align:left;">Tasdiq</th><th>True</th><th>False</th></tr>`;
    q.statements.forEach((st, idx) => {
      html += `<tr style="border-bottom:1px solid #e2e8f0;">
        <td style="padding:8px 0;">${st.text}</td>
        <td style="text-align:center"><input type="radio" name="tf-${idx}" value="True" class="tf-radio"></td>
        <td style="text-align:center"><input type="radio" name="tf-${idx}" value="False" class="tf-radio"></td>
      </tr>`;
    });
    html += `</table>`;
  } else if (q.type === "matching") {
    html += `<div style="font-size:14px; margin-bottom:10px; color:#64748b;">Mos variantlarni tanlang:</div>`;
    const list = q.mappings || q.items || [];
    const allTerms = list.map((item) => item.term || item.def);

    list.forEach((item, idx) => {
      const desc = item.activity || item.def || item.term;
      html += `<div style="margin-bottom:10px; padding:10px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px;">
        <div style="font-size:14px; margin-bottom:6px;">${desc}</div>
        <select id="match-select-${idx}" style="width:100%; padding:6px; border-radius:4px; border:1px solid #cbd5e1;">
          <option value="">-- Tanlang --</option>
          ${allTerms.map((t) => `<option value="${t}">${t}</option>`).join("")}
        </select>
      </div>`;
    });
  }

  container.innerHTML = html;
  renderQuestionGrid();
}

function toggleFlag() {
  const qId = activeQuestions[currentQ].id;
  if (flaggedQuestions.has(qId)) {
    flaggedQuestions.delete(qId);
  } else {
    flaggedQuestions.add(qId);
  }
  renderQuestion();
}

function renderQuestionGrid() {
  const gridContainer = document.getElementById("question-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  activeQuestions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.innerText = idx + 1;

    btn.style.cssText = `
      width: 36px; height: 36px; border-radius: 6px; border: 1px solid #cbd5e1;
      font-weight: bold; cursor: pointer; display: flex; align-items: center;
      justify-content: center; transition: all 0.2s;
    `;

    if (idx === currentQ) {
      btn.style.backgroundColor = "#2563eb";
      btn.style.color = "#ffffff";
      btn.style.border = "2px solid #1d4ed8";
    } else if (userAnswers[q.id]) {
      btn.style.backgroundColor = "#22c55e";
      btn.style.color = "#ffffff";
    } else if (flaggedQuestions.has(q.id)) {
      btn.style.backgroundColor = "#eab308";
      btn.style.color = "#ffffff";
    } else {
      btn.style.backgroundColor = "#f1f5f9";
      btn.style.color = "#475569";
    }

    btn.onclick = () => jumpToQuestion(idx);
    gridContainer.appendChild(btn);
  });
}

function jumpToQuestion(index) {
  currentQ = index;
  selectedOptions = [];
  renderQuestion();
}

function toggleSelect(idx) {
  const qType = activeQuestions[currentQ].type;
  const btn = document.getElementById(`opt-${idx}`);

  if (qType === "single" || qType === "single_choice") {
    selectedOptions = [idx];
    document
      .querySelectorAll(".option-btn")
      .forEach((b) => b.classList.remove("selected"));
    btn.classList.add("selected");
    return;
  }

  if (selectedOptions.includes(idx)) {
    selectedOptions = selectedOptions.filter((i) => i !== idx);
    btn.classList.remove("selected");
  } else {
    selectedOptions.push(idx);
    btn.classList.add("selected");
  }
}

function checkAnswer() {
  const q = activeQuestions[currentQ];
  const feedback = document.getElementById("feedback");
  let isCorrect = true;

  if (
    q.type === "checkbox" ||
    q.type === "single" ||
    q.type === "single_choice" ||
    q.type === "multiple_choice"
  ) {
    const correctAns = Array.isArray(q.correct || q.answer)
      ? q.correct || q.answer
      : [q.correct || q.answer];

    if (
      selectedOptions.length !== correctAns.length ||
      !selectedOptions.every((val) => correctAns.includes(val))
    ) {
      isCorrect = false;
    }
  } else if (q.type === "true_false") {
    q.statements.forEach((st, idx) => {
      const checked = document.querySelector(`input[name="tf-${idx}"]:checked`);
      if (!checked || checked.value !== (st.correct || st.answer)) {
        isCorrect = false;
      }
    });
  } else if (q.type === "matching") {
    const list = q.mappings || q.items || [];
    list.forEach((item, idx) => {
      const select = document.getElementById(`match-select-${idx}`);
      const expected = item.term || item.def;
      if (!select || select.value !== expected) {
        isCorrect = false;
      }
    });
  }

  userAnswers[q.id] = { isCorrect: isCorrect, question: q };

  feedback.style.display = "block";
  if (isCorrect) {
    feedback.className = "feedback correct";
    feedback.innerText = "To'g'ri javob! Barakalla!";
  } else {
    feedback.className = "feedback incorrect";
    feedback.innerText =
      "Noto'g'ri javob. Qayta urinib ko'ring yoki to'g'ri javoblarni yodda saqlang!";
  }

  updateProgressBar();
  renderQuestionGrid();
}

function nextQuestion() {
  if (currentQ < activeQuestions.length - 1) {
    currentQ++;
    selectedOptions = [];
    renderQuestion();
  } else {
    showAnalytics();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    selectedOptions = [];
    renderQuestion();
  }
}

function showAnalytics() {
  clearInterval(timerInterval);
  document.getElementById("quiz-area").style.display = "none";

  const resultContainer = document.getElementById("result-container");
  const statsSummary = document.getElementById("stats-summary");
  const btnRetryWrong = document.getElementById("btn-retry-wrong");

  let correctCount = 0;
  let wrongCount = 0;

  Object.values(userAnswers).forEach((ans) => {
    if (ans.isCorrect) correctCount++;
    else wrongCount++;
  });

  const total = activeQuestions.length;
  const percentage = Math.round((correctCount / total) * 100) || 0;

  statsSummary.innerHTML = `
    <div style="padding:15px; background:#f1f5f9; border-radius:8px;">
      <p>Jami savollar: <strong>${total} ta</strong></p>
      <p style="color:#16a34a;">To'g'ri javoblar: <strong>${correctCount} ta</strong></p>
      <p style="color:#dc2626;">Noto'g'ri javoblar: <strong>${wrongCount} ta</strong></p>
      <p style="font-size: 22px; font-weight: bold; margin-top: 10px;">Natija: ${percentage}%</p>
    </div>
  `;

  if (wrongCount > 0) {
    btnRetryWrong.style.display = "inline-block";
  } else {
    btnRetryWrong.style.display = "none";
  }

  resultContainer.style.display = "block";
}

function restartQuiz(onlyWrong = false) {
  if (onlyWrong) {
    activeQuestions = activeQuestions.filter(
      (q) => userAnswers[q.id] && !userAnswers[q.id].isCorrect
    );
  } else {
    activeQuestions = [...questions];
  }

  document.getElementById("result-container").style.display = "none";
  document.getElementById("start-screen").style.display = "block";

  currentQ = 0;
  selectedOptions = [];
  userAnswers = {};
  flaggedQuestions.clear();
  clearInterval(timerInterval);
}

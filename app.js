let currentQ = 0;
let selectedOptions = [];

let userAnswers = {};
let flaggedQuestions = new Set(); // 3-QISM: Belgilangan (bayroqcha) savollar ID lari
let activeQuestions = [...questions];

function renderQuestion() {
  const q = activeQuestions[currentQ];
  const container = document.getElementById("quiz-container");

  document.getElementById("feedback").style.display = "none";
  document.getElementById("result-container").style.display = "none";

  // Bayroqcha tugmasi holatini yangilash
  const flagBtn = document.getElementById("btn-flag");
  if (flaggedQuestions.has(q.id)) {
    flagBtn.style.background = "#fef08a"; // Sariq
    flagBtn.innerText = "🚩 Belgilangan";
  } else {
    flagBtn.style.background = "transparent";
    flagBtn.innerText = "📌 Keyinroq ko'rish";
  }

  let html = `<div class="q-title">Savol ${currentQ + 1} / ${
    activeQuestions.length
  }: ${q.question}</div>`;

  if (q.type === "checkbox" || q.type === "single") {
    q.options.forEach((opt, idx) => {
      const isSelected = selectedOptions.includes(idx) ? "selected" : "";
      html += `<button class="option-btn ${isSelected}" onclick="toggleSelect(${idx})" id="opt-${idx}">${opt}</button>`;
    });
  } else if (q.type === "true_false") {
    html += `<table><tr><th>Tasdiq</th><th>True</th><th>False</th></tr>`;
    q.statements.forEach((st, idx) => {
      html += `<tr>
        <td>${st.text}</td>
        <td style="text-align:center"><input type="radio" name="tf-${idx}" value="True" class="tf-radio"></td>
        <td style="text-align:center"><input type="radio" name="tf-${idx}" value="False" class="tf-radio"></td>
      </tr>`;
    });
    html += `</table>`;
  } else if (q.type === "matching") {
    html += `<div style="font-size:14px; margin-bottom:10px; color:#64748b;">Aramash elementlarni moslang:</div>`;
    q.items.forEach((item) => {
      html += `<div style="margin-bottom:8px; padding:8px; background:#f8fafc; border:1px solid #cbd5e1; border-radius:6px;">
        <strong>${item.term}:</strong> ${item.def}
      </div>`;
    });
  }

  container.innerHTML = html;

  // 3-QISM: Savollar xaritasini qayta chizish
  renderQuestionGrid();
}

// 3-QISM: Savolni bayroqcha bilan belgilash / olib tashlash
function toggleFlag() {
  const qId = activeQuestions[currentQ].id;
  if (flaggedQuestions.has(qId)) {
    flaggedQuestions.delete(qId);
  } else {
    flaggedQuestions.add(qId);
  }
  renderQuestion();
}

// 3-QISM: Savollar xaritasini (Grid) render qilish
function renderQuestionGrid() {
  const gridContainer = document.getElementById("question-grid");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  activeQuestions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.innerText = idx + 1;

    // Asosiy uslub (Style)
    btn.style.cssText = `
      width: 36px; height: 36px; border-radius: 6px; border: 1px solid #cbd5e1;
      font-weight: bold; cursor: pointer; display: flex; align-items: center;
      justify-content: center; transition: all 0.2s;
    `;

    // Ranglarni belgilash
    if (idx === currentQ) {
      btn.style.backgroundColor = "#2563eb"; // Joriy savol (Ko'k)
      btn.style.color = "#ffffff";
      btn.style.border = "2px solid #1d4ed8";
    } else if (userAnswers[q.id]) {
      btn.style.backgroundColor = "#22c55e"; // Javob berilgan (Yashil)
      btn.style.color = "#ffffff";
    } else if (flaggedQuestions.has(q.id)) {
      btn.style.backgroundColor = "#eab308"; // Bayroqcha qo'yilgan (Sariq)
      btn.style.color = "#ffffff";
    } else {
      btn.style.backgroundColor = "#f1f5f9"; // Oddiy (Kulrang)
      btn.style.color = "#475569";
    }

    btn.onclick = () => jumpToQuestion(idx);
    gridContainer.appendChild(btn);
  });
}

// 3-QISM: Xaritalar ro'yxatidan belgilangan savolga birdaniga o'tish
function jumpToQuestion(index) {
  currentQ = index;
  selectedOptions = [];
  renderQuestion();
}

function toggleSelect(idx) {
  const btn = document.getElementById(`opt-${idx}`);

  if (activeQuestions[currentQ].type === "single") {
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

  if (q.type === "checkbox" || q.type === "single") {
    if (
      selectedOptions.length !== q.correct.length ||
      !selectedOptions.every((val) => q.correct.includes(val))
    ) {
      isCorrect = false;
    }
  } else if (q.type === "true_false") {
    q.statements.forEach((st, idx) => {
      const checked = document.querySelector(`input[name="tf-${idx}"]:checked`);
      if (!checked || checked.value !== st.correct) {
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

  renderQuestionGrid(); // Javob berilgach xaritani yangilash
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
  document.getElementById("quiz-container").innerHTML = "";
  document.getElementById("feedback").style.display = "none";

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

  currentQ = 0;
  selectedOptions = [];
  userAnswers = {};
  flaggedQuestions.clear();
  renderQuestion();
}

window.onload = function () {
  renderQuestion();
};

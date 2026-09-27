// app.js
let currentQ = 0;
let selectedOptions = [];

function renderQuestion() {
  const q = questions[currentQ];
  const container = document.getElementById("quiz-container");
  document.getElementById("feedback").style.display = "none";
  let html = `<div class="q-title">${q.question}</div>`;

  if (q.type === "checkbox" || q.type === "single") {
    q.options.forEach((opt, idx) => {
      html += `<button class="option-btn" onclick="toggleSelect(${idx})" id="opt-${idx}">${opt}</button>`;
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
}

function toggleSelect(idx) {
  const btn = document.getElementById(`opt-${idx}`);
  if (selectedOptions.includes(idx)) {
    selectedOptions = selectedOptions.filter((i) => i !== idx);
    btn.classList.remove("selected");
  } else {
    selectedOptions.push(idx);
    btn.classList.add("selected");
  }
}

function checkAnswer() {
  const q = questions[currentQ];
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

  feedback.style.display = "block";
  if (isCorrect) {
    feedback.className = "feedback correct";
    feedback.innerText = "To'g'ri javob! Barakalla!";
  } else {
    feedback.className = "feedback incorrect";
    feedback.innerText =
      "Noto'g'ri javob. Qayta urinib ko'ring yoki to'g'ri javoblarni yodda saqlang!";
  }
}

function nextQuestion() {
  if (currentQ < questions.length - 1) {
    currentQ++;
    selectedOptions = [];
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    selectedOptions = [];
    renderQuestion();
  }
}

// Dastur yuklanishi bilan birinchi savolni chiqaradi
window.onload = function () {
  renderQuestion();
};

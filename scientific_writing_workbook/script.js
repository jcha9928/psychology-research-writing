/*
 * Shared JavaScript for the scientific writing workbook website. Provides
 * simple quiz rendering and answer reveal functionality.
 */

/**
 * Render a multiple-choice quiz into a specified container. Each quiz object
 * should include a question, an array of options, and the index of the correct
 * answer. This function will generate radio buttons for each option and a
 * submit button that displays the user’s score.
 *
 * @param {Array} quizData Array of quiz question objects
 * @param {string} containerId The ID of the container element
 */
function renderQuiz(quizData, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  quizData.forEach((q, idx) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    const qP = document.createElement('p');
    qP.innerText = `${idx + 1}. ${q.question}`;
    qDiv.appendChild(qP);
    q.options.forEach((opt, optIdx) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `${containerId}_q${idx}`;
      input.value = optIdx.toString();
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + opt));
      qDiv.appendChild(label);
    });
    container.appendChild(qDiv);
  });
  const submitBtn = document.createElement('button');
  submitBtn.className = 'quiz-submit';
  submitBtn.innerText = 'Submit';
  submitBtn.addEventListener('click', () => {
    let score = 0;
    quizData.forEach((q, idx) => {
      const selected = container.querySelector(
        `input[name="${containerId}_q${idx}"]:checked`
      );
      if (selected && parseInt(selected.value, 10) === q.answer) {
        score++;
      }
    });
    alert(`You answered ${score} out of ${quizData.length} questions correctly.`);
  });
  container.appendChild(submitBtn);
}

// Show sample answers when buttons are clicked
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.show-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const ans = document.getElementById(targetId);
      if (ans) {
        ans.style.display = 'block';
        btn.disabled = true;
      }
    });
  });
});
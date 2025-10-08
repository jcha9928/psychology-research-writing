/*
 * Common JavaScript functions for the Seoul National University psychological science writing course.
 * Provides quiz rendering and sample answer reveal functionality.
 */

/**
 * Render a multiple-choice quiz inside the element with the given container ID.
 * The quiz array should contain objects with question, options and answer index.
 *
 * @param {Array} quiz An array of quiz objects
 * @param {String} containerId The id of the container where the quiz will appear
 */
function renderQuiz(quiz, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  quiz.forEach((q, index) => {
    const qDiv = document.createElement('div');
    qDiv.className = 'quiz-question';
    const qP = document.createElement('p');
    qP.innerText = (index + 1) + '. ' + q.question;
    qDiv.appendChild(qP);
    q.options.forEach((opt, i) => {
      const label = document.createElement('label');
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = containerId + '_q' + index;
      input.value = i.toString();
      label.appendChild(input);
      label.appendChild(document.createTextNode(' ' + opt));
      qDiv.appendChild(label);
    });
    container.appendChild(qDiv);
  });
  const btn = document.createElement('button');
  btn.innerText = 'Submit';
  btn.addEventListener('click', () => {
    let score = 0;
    quiz.forEach((q, index) => {
      const selected = container.querySelector('input[name="' + containerId + '_q' + index + '"]:checked');
      if (selected && parseInt(selected.value, 10) === q.answer) {
        score++;
      }
    });
    alert('You answered ' + score + ' out of ' + quiz.length + ' questions correctly.');
  });
  container.appendChild(btn);
}

// reveal sample answers on click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.show-answer').forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const answer = document.getElementById(targetId);
      if (answer) {
        answer.style.display = 'block';
        btn.disabled = true;
      }
    });
  });
});
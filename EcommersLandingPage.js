
const buttons = document.querySelectorAll('.project-btn');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    alert(`Opening ${btn.textContent}...`);
  });
});

const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = 'Toggle Theme';
document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
});
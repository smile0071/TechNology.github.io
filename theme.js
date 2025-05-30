document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  const darkClass = 'dark-theme';
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('theme');
  const isDark = savedTheme === 'dark';
  html.classList.toggle(darkClass, isDark);
  toggle.checked = isDark;

  toggle.addEventListener('change', () => {
    const isDark = toggle.checked;
    html.classList.toggle(darkClass, isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
});

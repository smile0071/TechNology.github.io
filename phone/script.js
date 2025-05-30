function highlightCard(el) {
  document.querySelectorAll('.card.active').forEach(card => {
    card.classList.remove('active');
    card.setAttribute('aria-pressed', 'false');
  });

  el.classList.add('active');
  el.setAttribute('aria-pressed', 'true');
}

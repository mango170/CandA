(() => {
  const track = document.querySelector('#review-track');
  if (!track) return;
  const cards = [...track.querySelectorAll('.review-card')];
  const toggle = document.querySelector('#review-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches;
  let hovered = false;
  let visible = false;
  let index = 0;
  let frame = 0;
  const positions = () => cards.map(card => card.getBoundingClientRect().left - track.getBoundingClientRect().left + track.scrollLeft);
  const update = () => {
    frame = 0;
    const left = track.scrollLeft;
    index = positions().reduce((best, value, i, all) => Math.abs(value - left) < Math.abs(all[best] - left) ? i : best, 0);
    document.querySelector('#review-count').textContent = (index + 1) + ' / ' + cards.length;
  };
  const label = () => { toggle.textContent = paused ? 'Play rotation' : 'Pause rotation'; };
  const move = direction => {
    const max = track.scrollWidth - track.clientWidth;
    let next = index + direction;
    if (direction > 0 && track.scrollLeft >= max - 4) next = 0;
    if (next < 0) next = cards.length - 1;
    track.scrollTo({ left: positions()[next % cards.length], behavior: reduced.matches ? 'instant' : 'smooth' });
  };
  toggle.addEventListener('click', () => { paused = !paused; label(); });
  for (const [id, direction] of [['review-prev', -1], ['review-next', 1]]) {
    document.getElementById(id).addEventListener('click', () => { paused = true; label(); move(direction); });
  }
  track.addEventListener('mouseenter', () => { hovered = true; });
  track.addEventListener('mouseleave', () => { hovered = false; });
  const pause = () => { paused = true; label(); };
  track.addEventListener('focusin', pause);
  track.addEventListener('pointerdown', pause);
  track.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault(); pause(); move(event.key === 'ArrowLeft' ? -1 : 1);
    }
  });
  track.addEventListener('scroll', () => { if (!frame) frame = requestAnimationFrame(update); }, { passive: true });
  reduced.addEventListener('change', () => { if (reduced.matches) pause(); });
  new IntersectionObserver(entries => { visible = entries[0].isIntersecting; }, { threshold: 0.25 }).observe(track);
  setInterval(() => { if (!paused && !hovered && visible && !document.hidden) move(1); }, 7000);
  window.addEventListener('resize', update);
  document.querySelector('.review-controls').hidden = false;
  label();
  update();
})();

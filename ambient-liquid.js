/* Nieris v12.9: a single, lightweight liquid motion mouse follower.
   Keeps the v12.8 pages, styling, glitch and music player untouched. */
(() => {
  'use strict';
  const grain = document.createElement('div');
  grain.className = 'grain-film';
  grain.setAttribute('aria-hidden', 'true');
  document.body.prepend(grain);

  // On touch devices and with reduced motion, keep grain but don't animate a follower.
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (!fine.matches || reduced.matches) return;

  const liquid = document.createElement('div');
  liquid.className = 'liquid-follow';
  liquid.setAttribute('aria-hidden', 'true');
  document.body.insertBefore(liquid, grain);

  let x = innerWidth * .5;
  let y = innerHeight * .48;
  let tx = x;
  let ty = y;
  let frame = 0;
  let active = true;

  const position = () => {
    liquid.style.transform = `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0) translate3d(-50%, -50%, 0)`;
  };
  position();

  // Request frames ONLY when moving. Animation updates one compositor transform.
  const follow = () => {
    frame = 0;
    if (!active || document.hidden) return;
    const dx = tx - x;
    const dy = ty - y;
    x += dx * .105;
    y += dy * .105;
    position();
    if (Math.abs(dx) + Math.abs(dy) > .7) frame = requestAnimationFrame(follow);
  };
  const queue = () => { if (!frame && active && !document.hidden) frame = requestAnimationFrame(follow); };
  const pointer = (event) => {
    if (event.pointerType === 'touch') return;
    tx = event.clientX;
    ty = event.clientY;
    queue();
  };
  window.addEventListener('pointermove', pointer, {passive: true});
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && frame) { cancelAnimationFrame(frame); frame = 0; }
    else if (!document.hidden) queue();
  });
  reduced.addEventListener('change', () => {
    active = !reduced.matches && fine.matches;
    liquid.hidden = !active;
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    if (active) queue();
  });
  fine.addEventListener('change', () => {
    active = !reduced.matches && fine.matches;
    liquid.hidden = !active;
    if (frame) { cancelAnimationFrame(frame); frame = 0; }
    if (active) queue();
  });
})();

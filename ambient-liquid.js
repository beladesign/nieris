/* Nieris v12.7: visual-only enhancement. Does not touch the original UI logic.
   Deliberately never included on music.html. */
(() => {
  'use strict';
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  const scene = document.createElement('div');
  scene.className = 'liquid-scene';
  scene.setAttribute('aria-hidden', 'true');
  scene.innerHTML = '<span class="liquid-scene__halo"></span>' +
    '<span class="liquid-scene__blob liquid-scene__blob--pink"></span>' +
    '<span class="liquid-scene__blob liquid-scene__blob--violet"></span>' +
    '<span class="liquid-scene__blob liquid-scene__blob--pearl"></span>';
  const grain = document.createElement('div');
  grain.className = 'grain-film';
  grain.setAttribute('aria-hidden','true');
  document.body.insertBefore(grain, document.body.firstChild);
  document.body.insertBefore(scene, document.body.firstChild);

  // Smooth delayed motion produces a liquid response, not a hard cursor spotlight.
  let x=innerWidth*.5, y=innerHeight*.48, targetX=x, targetY=y, raf=0;
  const animate=()=>{
    raf=0;
    x+=(targetX-x)*.065;
    y+=(targetY-y)*.065;
    scene.style.setProperty('--follow-x',x.toFixed(2)+'px');
    scene.style.setProperty('--follow-y',y.toFixed(2)+'px');
    if(Math.abs(targetX-x)+Math.abs(targetY-y)>.5) raf=requestAnimationFrame(animate);
  };
  const schedule=()=>{if(!raf) raf=requestAnimationFrame(animate)};
  const handlePointer=(ev)=>{
    if(motion.matches || !finePointer.matches) return;
    targetX=ev.clientX;
    targetY=ev.clientY;
    schedule();
  };
  window.addEventListener('pointermove',handlePointer,{passive:true});
  window.addEventListener('resize',()=>{
    if(!finePointer.matches){
      x=targetX=innerWidth/2;
      y=targetY=innerHeight*.48;
      schedule();
    }
  },{passive:true});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden && raf){cancelAnimationFrame(raf);raf=0}
  });

  // Track the pointer locally for an extremely soft highlight on original cards.
  if(finePointer.matches && !motion.matches){
    document.querySelectorAll('.credit-card').forEach(card=>{
      card.addEventListener('pointermove',ev=>{
        const r=card.getBoundingClientRect();
        card.style.setProperty('--card-x',((ev.clientX-r.left)/r.width*100).toFixed(1)+'%');
        card.style.setProperty('--card-y',((ev.clientY-r.top)/r.height*100).toFixed(1)+'%');
      },{passive:true});
    });
  }
})();

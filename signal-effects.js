/* Nieris v12.8: supplemental interactions. Original script.js is unchanged. */
(() => {
  'use strict';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const titles = Array.from(document.querySelectorAll('h1, .lore-chapter h2'));
  const activeTimers = new WeakMap();
  const updateText = () => titles.forEach(el => el.dataset.glitchText = el.textContent.trim());
  titles.forEach(el => {
    el.classList.add('signal-glitch-title');
    el.addEventListener('mouseenter', () => pulse(el));
  });
  updateText();
  document.addEventListener('nieris-language-changed', updateText);

  function pulse(el){
    if(reduced.matches || document.hidden || !el.getClientRects().length) return;
    clearTimeout(activeTimers.get(el));
    el.classList.remove('is-signal-glitch');
    // Force a style update to restart on consecutive user hover.
    void el.offsetWidth;
    el.classList.add('is-signal-glitch');
    activeTimers.set(el,setTimeout(() => el.classList.remove('is-signal-glitch'),710));
  }
  if (!reduced.matches) {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => entries.forEach(entry => {
        if(entry.isIntersecting){
          setTimeout(() => pulse(entry.target),400);
          observer.unobserve(entry.target);
        }
      }),{threshold:.2});
      titles.forEach(el => observer.observe(el));
    } else {setTimeout(() => titles[0] && pulse(titles[0]),1000)}
    // A rare ambient reappearance, rather than aggressive constant glitching.
    setInterval(() => {
      if(document.hidden) return;
      const first=titles.find(el => {
        const r=el.getBoundingClientRect();
        return r.width>0 && r.height>0 && r.top<innerHeight*.8 && r.bottom>0;
      });
      if(first)pulse(first);
    },8100);
  }

  // Keep original lore rail layout; wrap only its existing two-digit prefixes.
  document.querySelectorAll('.lore-progress li').forEach(li => {
    const node=Array.from(li.childNodes).find(n => n.nodeType===Node.TEXT_NODE && /\d{2}/.test(n.nodeValue));
    if(!node) return;
    const match=node.nodeValue.match(/^(\s*)(\d{2})([\s\S]*)$/);
    if(!match)return;
    const num=document.createElement('span'); num.className='signal-number';num.textContent=match[2];
    node.nodeValue=match[1];node.after(num,document.createTextNode(match[3]));
  });
  const pageNumbers={lore:'01',credits:'02',fanarts:'03',moderation:'04',nabis:'05',music:'06'};
  for(const [key,num] of Object.entries(pageNumbers)){
    if(document.body.classList.contains('page-'+key)){
      document.querySelector('.page-system-label')?.setAttribute('data-signal-number',num);
      break;
    }
  }

  // Compact status lamp: live audio state, not a simulated timer or toggle.
  const audio = document.querySelector('[data-main-audio]');
  const kicker = document.querySelector('.page-music .music-intro .eyebrow');
  if(audio && kicker){
    const signal = document.createElement('span');
    signal.className='music-signal';
    signal.dataset.state='paused';
    signal.setAttribute('role','status');
    signal.setAttribute('aria-live','polite');
    const lamp=document.createElement('span');lamp.className='music-signal__lamp';lamp.setAttribute('aria-hidden','true');
    const statusText=document.createElement('span');statusText.className='music-signal__text';
    signal.append(lamp,statusText);
    kicker.appendChild(signal);
    const text=signal.querySelector('.music-signal__text');
    const sync=()=>{
      const playing=!audio.paused && !audio.ended && !audio.error && !audio.seeking && audio.readyState>=2;
      signal.dataset.state=playing?'playing':'paused';
      const english=document.documentElement.lang?.toLowerCase().startsWith('en');
      text.textContent=playing?(english?'PLAYING':'TOCANDO'):(english?'PAUSED':'PAUSADO');
      signal.title=playing?(english?'Music is playing':'Música em reprodução'):(english?'Music is not playing':'Música pausada');
    };
    for(const event of ['play','playing','pause','ended','emptied','waiting','canplay','seeked','seeking','error','stalled'])audio.addEventListener(event,sync);
    document.addEventListener('nieris-language-changed',sync);
    sync();
  }
})();

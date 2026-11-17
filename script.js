(() => {
  const translations = {
    'pt-BR': {
      'nav.home':'Home','nav.lore':'Lore','nav.music':'Músicas','nav.credits':'Créditos','nav.fanarts':'Fanarts','nav.nabis':'Nabis','nav.moderation':'Moderação','nav.livepix':'LivePix',
      'home.kicker':'entre sonhos & pesadelos','home.hero_line':'Sempre que Nieris adormece, ela desperta dentro de algum sonho. Entre Nabis e pesadelos, atravessa mundos que nunca pertencem a ela enquanto procura o caminho para o único lugar que ainda não encontrou: o próprio sonho.','home.cta_artists':'Conheça os artistas','home.cta_lore':'Leia a lore','home.cta_music':'Ouça os ecos',
      'lore.kicker':'entre sonhos & pesadelos','lore.intro':'Sempre que Nieris adormece, ela desperta dentro de algum sonho. Entre Nabis, pesadelos e caminhos instáveis, ela procura uma saída antes que tudo ao redor seja consumido.','lore.rail.official':'lore oficial','lore.rail.elements':'elementos','lore.rail.mystery':'mistério','lore.rail.summary':'resumo',
      'music.kicker':'ecos entre mundos','music.title':'Músicas','music.intro':'Músicas originais de Nieris.','music.main_theme':'tema principal da lore','music.now_playing':'tocando agora','music.cover_placeholder':'capa em breve','music.category_nightmare_note':'entre mundos que não param de mudar','music.category_dream_note':'um sonho bonito demais para ser simples',
      'credits.kicker':'quem ajudou a dar forma ao sonho','credits.title':'Créditos','credits.intro':'Artistas e profissionais que criaram partes oficiais do universo da Nieris.','credits.role.character':'Personagem & Modelo','credits.role.rigging':'Rigging','credits.role.gato':'Sub Badges','credits.role.chat':'Chat','credits.role.stream_art':'Arte para stream','credits.role.logo':'Logo Design','credits.role.reactive':'Discord Reactive','credits.role.kiwi':'Icon Headshot','credits.role.kein':'Logo Redesign & Animation','credits.role.kasumi':'Arte & Referência','credits.role.community_contribution':'Contribuição da comunidade','credits.desc.eve':'Character design / arte do modelo Live2D','credits.desc.rigger_tbd':'Artista de rigging a definir','credits.desc.eudora':'Design do chat','credits.desc.gato':'Criação dos Sub Badges','credits.desc.lady':'Painéis, chat pet e ilustração offline','credits.desc.equidna':'Logo da Nieris','credits.desc.kiwi':'Icon headshot','credits.desc.kein':'Refazer a logo e a animação da logo','credits.desc.rubyfilia':'Discord Reactive e Fall Critters YCH','credits.desc.kasumi':'Starting/Ending Screen Art e Image Reference','credits.desc.infinity':'Discord Reactive: contribuição feita para o projeto','credits.role.tomato':"Icon 90's",'credits.desc.tomato':'Ícone em estilo anos 90','credits.role.mimaine':'Editora de vídeos curtos','credits.desc.mimaine':'Edição de vídeos curtos','credits.desc.sugary':'Ref Sheet Chibi','credits.desc.yui':'Ref Sheet completa','credits.desc.adus':'Animação do pet do chat','credits.desc.mokua':'Rigger', 'credits.work.icon_90s':"Icon 90's",'credits.work.character_design':'Character Design','credits.work.live2d_art':'Live2D Model Artwork','credits.work.live2d_rigging':'Live2D Rigging','credits.work.panels':'Painéis','credits.work.chat_pet':'Chat Pet','credits.work.offline':'Ilustração Offline','credits.work.chat':'Chat','credits.work.logo':'Logo Design','credits.work.icon_headshot':'Icon Headshot','credits.work.logo_redesign':'Logo Redesign','credits.work.logo_animation':'Logo Animation','credits.work.discord_reactive':'Discord Reactive','credits.work.fall_critters':'Fall Critters YCH','credits.work.fall_critters_showcase':'Fall Critters Nie Showcase','credits.work.pet_animation_gif':'Nieriss Pet Animation GIF','credits.work.sub_badges':'Sub Badges','credits.work.starting_ending':'Starting / Ending Screen Art',
      'fanarts.kicker':'arte feita pela comunidade','fanarts.intro':'Um espaço para celebrar as artes que a comunidade cria para Nieris, sempre com destaque e crédito para quem fez.','fanarts.first_type':'Fanart · Chibi',
      'nabis.kicker':'a comunidade ao redor do sonho','nabis.intro':'Um canto mais acolhedor para os Nabis e para tudo o que a comunidade construir ao redor da Nieris.','nabis.community':'comunidade','nabis.naming':'Cada pessoa da comunidade é um Nabi.','nabis.place':'Um lugar para os Nabis','nabis.place_desc':'Atividades, hashtags, destaques e projetos da comunidade poderão viver aqui conforme esse universo crescer.','nabis.later':'Em breve','nabis.later_desc':'Este espaço cresce junto com a comunidade e só recebe conteúdo quando houver algo real para compartilhar.',
      'moderation.title':'Moderação','moderation.empty':'Esta área ainda está vazia.','moderation.intro':'Conheça quem cuida do chat e as diretrizes para manter nossa comunidade acolhedora.','moderation.team.title':'Equipe de moderação','moderation.team.intro':'As pessoas que ajudam a cuidar dos Mings e da conversa durante as lives.','moderation.team.role':'Moderador(a)','moderation.rules.title':'Diretrizes da comunidade','moderation.rules.intro':'Pequenos cuidados fazem toda a diferença. Clique em cada regra para conhecer os detalhes.','moderation.fun.title':'Divirta-se! ✨','moderation.fun.desc':'Aproveite a live, converse e faça novos amigos!','moderation.rule.respect.title':'Respeito acima de tudo','moderation.rule.respect.desc':'Ofensas, preconceito, assédio e brigas não serão tolerados. Trate todas as pessoas do chat com respeito, mesmo quando houver opiniões diferentes.','moderation.rule.spoilers.title':'Sem spoilers ou backseat gaming','moderation.rule.spoilers.desc':'Não antecipe acontecimentos, revele soluções ou diga como jogar. Dicas e orientações só são bem-vindas quando Nieris pedir ajuda.','moderation.rule.spam.title':'Evite spam, flood e caixa alta','moderation.rule.spam.desc':'Não repita mensagens, envie textos em excesso ou use letras maiúsculas de forma exagerada. Assim, todo mundo consegue acompanhar a conversa.','moderation.rule.promotion.title':'Sem autopromoção','moderation.rule.promotion.desc':'Não divulgue links ou canais e evite promover seus próprios conteúdos no chat. Vamos manter a conversa focada na live e na comunidade.','moderation.rule.topics.title':'Mantenha o clima agradável','moderation.rule.topics.desc':'Evite assuntos pesados ou polêmicos que possam deixar outras pessoas desconfortáveis. Prefira conversas leves e acolhedoras.','moderation.rule.mods.title':'Respeite a moderação','moderation.rule.mods.desc':'Siga as orientações da equipe e respeite as outras pessoas do chat. A moderação está aqui para ajudar a manter um ambiente bom para todos.','footer.rights':'© 2026 Nieris. Todos os direitos reservados.'
    },
    'en-US': {
      'nav.home':'Home','nav.lore':'Lore','nav.music':'Songs','nav.credits':'Credits','nav.fanarts':'Fanarts','nav.nabis':'Nabis','nav.moderation':'Moderation','nav.livepix':'LivePix',
      'home.kicker':'between dreams & nightmares','home.hero_line':'Whenever Nieris falls asleep, she awakens somewhere inside a dream. Among Nabis and nightmares, she crosses worlds that never belong to her while searching for the path to the only place she has never found: her own dream.','home.cta_artists':'Meet the artists','home.cta_lore':'Read the lore','home.cta_music':'Listen to the echoes',
      'lore.kicker':'between dreams & nightmares','lore.intro':'Whenever Nieris falls asleep, she awakens somewhere inside a dream. Among Nabis, nightmares and unstable paths, she searches for a way out before everything around her is consumed.','lore.rail.official':'official lore','lore.rail.elements':'elements','lore.rail.mystery':'mystery','lore.rail.summary':'summary',
      'music.kicker':'echoes between worlds','music.title':'Songs','music.intro':'Nieris’ original songs.','music.main_theme':'main lore theme','music.now_playing':'now playing','music.cover_placeholder':'cover coming soon','music.category_nightmare_note':'between worlds that never stop changing','music.category_dream_note':'a dream too beautiful to be simple',
      'credits.kicker':'the people who shaped the dream','credits.title':'Credits','credits.intro':'Artists and professionals who created official parts of Nieris’ universe.','credits.role.character':'Character & Model','credits.role.rigging':'Rigging','credits.role.gato':'Sub Badges','credits.role.chat':'Chat','credits.role.stream_art':'Stream Art','credits.role.logo':'Logo Design','credits.role.reactive':'Discord Reactive','credits.role.kiwi':'Icon Headshot','credits.role.kein':'Logo Redesign & Animation','credits.role.kasumi':'Art & Reference','credits.role.community_contribution':'Community Contribution','credits.desc.eve':'Character design / Live2D model artwork','credits.desc.rigger_tbd':'Live2D rigging artist to be confirmed','credits.desc.eudora':'Chat design','credits.desc.gato':'Subscription badges artwork','credits.desc.lady':'Twitch panels, chat pet and offline illustration','credits.desc.equidna':'Nieris logo','credits.desc.kiwi':'Icon headshot','credits.desc.kein':'Logo redesign and logo animation','credits.desc.rubyfilia':'Discord Reactive and Fall Critters YCH','credits.desc.kasumi':'Starting/Ending Screen Art and Image Reference','credits.desc.infinity':'Discord Reactive: contribution made for the project','credits.role.tomato':"90s Icon",'credits.desc.tomato':'90s-style icon artwork','credits.role.mimaine':'Short-form video editor','credits.desc.mimaine':'Short-form video editing','credits.desc.sugary':'Chibi reference sheet','credits.desc.yui':'Full reference sheet','credits.desc.adus':'Chat pet animation','credits.desc.mokua':'Live2D rigger', 'credits.work.icon_90s':"90s Icon",'credits.work.character_design':'Character Design','credits.work.live2d_art':'Live2D Model Artwork','credits.work.live2d_rigging':'Live2D Rigging','credits.work.panels':'Panels','credits.work.chat_pet':'Chat Pet','credits.work.offline':'Offline Illustration','credits.work.chat':'Chat','credits.work.logo':'Logo Design','credits.work.icon_headshot':'Icon Headshot','credits.work.logo_redesign':'Logo Redesign','credits.work.logo_animation':'Logo Animation','credits.work.discord_reactive':'Discord Reactive','credits.work.fall_critters':'Fall Critters YCH','credits.work.fall_critters_showcase':'Fall Critters Nie Showcase','credits.work.pet_animation_gif':'Nieriss Pet Animation GIF','credits.work.sub_badges':'Sub Badges','credits.work.starting_ending':'Starting / Ending Screen Art',
      'fanarts.kicker':'art made by the community','fanarts.intro':'A place to celebrate the art the community creates for Nieris, always giving the artist clear visibility and credit.','fanarts.first_type':'Fanart · Chibi',
      'nabis.kicker':'the community around the dream','nabis.intro':'A warmer corner for the Nabis and everything the community builds around Nieris.','nabis.community':'community','nabis.naming':'Each person in the community is a Nabi.','nabis.place':'A place for Nabis','nabis.place_desc':'Activities, hashtags, highlights and community projects can live here as this universe grows.','nabis.later':'Coming later','nabis.later_desc':'This space grows with the community and only gains content when there is something real to share.',
      'moderation.title':'Moderation','moderation.empty':'This area is still empty.','moderation.intro':'Meet the people looking after the chat and the guidelines that keep our community welcoming.','moderation.team.title':'Moderation team','moderation.team.intro':'The people helping look after the Mings and the conversation during streams.','moderation.team.role':'Moderator','moderation.rules.title':'Community guidelines','moderation.rules.intro':'The little things make a big difference. Select a rule to read more.','moderation.fun.title':'Have fun! ✨','moderation.fun.desc':'Enjoy the stream, chat, and make new friends!','moderation.rule.respect.title':'Respect comes first','moderation.rule.respect.desc':'Insults, discrimination, harassment, and fighting will not be tolerated. Treat everyone in chat with respect, even when you disagree.','moderation.rule.spoilers.title':'No spoilers or backseat gaming','moderation.rule.spoilers.desc':'Do not reveal plot points, solutions, or tell Nieris how to play. Tips and guidance are welcome only when she asks for help.','moderation.rule.spam.title':'Avoid spam, flooding, and excessive caps','moderation.rule.spam.desc':'Do not repeat messages, overwhelm the chat, or overuse capital letters. Help everyone follow the conversation.','moderation.rule.promotion.title':'No self-promotion','moderation.rule.promotion.desc':'Do not share links or promote channels or your own content in chat. Keep the conversation focused on the stream and the community.','moderation.rule.topics.title':'Keep the atmosphere comfortable','moderation.rule.topics.desc':'Avoid heavy or controversial subjects that may make others uncomfortable. Choose friendly and welcoming conversations.','moderation.rule.mods.title':'Respect the moderation team','moderation.rule.mods.desc':'Follow the team’s guidance and respect everyone else in chat. The moderators are here to keep things welcoming for all.','footer.rights':'© 2026 Nieris. All rights reserved.'
    }
  };
  const qs=(s,r=document)=>r.querySelector(s), qsa=(s,r=document)=>[...r.querySelectorAll(s)];
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Lightweight first-view loader, modeled after progressive experience loaders.
  if(!sessionStorage.getItem('nieris-loaded')){
    document.body.classList.add('is-loading');
    const loader=document.createElement('div'); loader.className='site-loader';
    // Build the fixed loader with safe DOM APIs rather than an HTML injection sink.
    const loaderInner=document.createElement('div'); loaderInner.className='loader-inner';
    const loaderMark=document.createElement('div'); loaderMark.className='loader-mark'; loaderMark.textContent='Nieris.';
    const loaderMeta=document.createElement('div'); loaderMeta.className='loader-meta';
    const loaderDescription=document.createElement('span'); loaderDescription.textContent='dream interface';
    const loaderPercent=document.createElement('span'); loaderPercent.className='loader-percent'; loaderPercent.textContent='000%';
    loaderMeta.append(loaderDescription,loaderPercent);
    const loaderTrack=document.createElement('div'); loaderTrack.className='loader-track';
    const loaderFill=document.createElement('i'); loaderFill.className='loader-fill'; loaderTrack.append(loaderFill);
    loaderInner.append(loaderMark,loaderMeta,loaderTrack); loader.append(loaderInner);
    document.body.prepend(loader); const fill=qs('.loader-fill',loader),pct=qs('.loader-percent',loader); let p=0;
    const tick=setInterval(()=>{p=Math.min(92,p+Math.max(1,Math.round((94-p)*.11)));fill.style.transform=`scaleX(${p/100})`;pct.textContent=String(p).padStart(3,'0')+'%';},55);
    const finish=()=>{clearInterval(tick);fill.style.transform='scaleX(1)';pct.textContent='100%';setTimeout(()=>{loader.classList.add('is-done');document.body.classList.remove('is-loading');sessionStorage.setItem('nieris-loaded','1');setTimeout(()=>loader.remove(),650)},180)};
    document.readyState==='complete'?finish():addEventListener('load',finish,{once:true});
  }

  // Fixed structural grid; visual only.
  const grid=document.createElement('div');grid.className='motion-grid';grid.setAttribute('aria-hidden','true');grid.append(...Array.from({length:12},()=>document.createElement('span')));document.body.prepend(grid);

  // Header state: hide on scroll down, reveal on up, activate surface after leaving top.
  const header=qs('.site-header'); let lastY=scrollY,ticking=false;
  const syncHeader=()=>{const y=scrollY;header?.classList.toggle('header-active',y>16);if(y>90&&y>lastY+5)header?.classList.add('header-hidden');else if(y<lastY-4||y<50)header?.classList.remove('header-hidden');lastY=y;ticking=false};
  addEventListener('scroll',()=>{if(!ticking){requestAnimationFrame(syncHeader);ticking=true}},{passive:true});syncHeader();

  // Mobile navigation.
  const menu=qs('.menu-button'),nav=qs('.main-nav');
  menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
  qsa('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));

  // Language.
  const langButtons=qsa('[data-language-button]');
  function applyLanguage(lang){lang=lang==='en-US'?'en-US':'pt-BR';const dict=translations[lang];qsa('[data-i18n]').forEach(el=>{const v=dict[el.dataset.i18n];if(typeof v==='string')el.textContent=v});qsa('[data-lang]').forEach(el=>el.classList.toggle('active',el.dataset.lang===lang));langButtons.forEach(b=>{const active=b.dataset.languageButton===lang;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});document.documentElement.lang=lang;localStorage.setItem('nieris-site-language',lang);document.dispatchEvent(new CustomEvent('nieris-language-changed',{detail:lang}))}
  applyLanguage(localStorage.getItem('nieris-site-language')||'pt-BR');langButtons.forEach(b=>b.addEventListener('click',()=>applyLanguage(b.dataset.languageButton)));

  // Consistent entrance motion.
  qsa('.page-intro,.credit-card,.fan-piece,.community-grid article,.lore-chapter,.player-bar').forEach(el=>el.classList.add('reveal'));
  const reveals=qsa('.reveal');if('IntersectionObserver'in window&&!reduce){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -40px'});reveals.forEach(el=>io.observe(el))}else reveals.forEach(el=>el.classList.add('is-visible'));

  // Lore progress.
  const steps=qsa('.lore-progress li'),progressBar=qs('.lore-progress-line i');
  if(steps.length&&'IntersectionObserver'in window){const chapterIo=new IntersectionObserver(es=>{const visible=es.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;const active=qsa('.lore-language-panel.active .lore-chapter');const idx=active.indexOf(visible.target);if(idx<0)return;steps.forEach((s,i)=>s.classList.toggle('is-active',i===idx));if(progressBar)progressBar.style.transform=`translateY(${idx*100}%)`},{rootMargin:'-28% 0px -55% 0px',threshold:[0,.1,.4,.7]});qsa('.lore-chapter').forEach(ch=>chapterIo.observe(ch));document.addEventListener('nieris-language-changed',()=>{steps.forEach((s,i)=>s.classList.toggle('is-active',i===0));if(progressBar)progressBar.style.transform='translateY(0)'})}

  // Music — animated three-card coverflow.
  const audio=qs('[data-main-audio]'), cards=qsa('[data-track-card]');
  if(audio&&cards.length){
    const toggle=qs('[data-player-toggle]'),prev=qs('[data-player-prev]'),next=qs('[data-player-next]'),range=qs('[data-player-progress]'),current=qs('[data-player-current]'),duration=qs('[data-player-duration]'),volume=qs('[data-player-volume]'),volumeValue=qs('[data-player-volume-value]');
    let index=0;
    const format=s=>{if(!Number.isFinite(s))return'00:00';const m=Math.floor(s/60),ss=Math.floor(s%60);return`${String(m).padStart(2,'0')}:${String(ss).padStart(2,'0')}`};
    const positionCards=()=>{
      const n=cards.length;
      cards.forEach((card,i)=>{
        const d=(i-index+n)%n;
        let x=0,rot=0,scale=1.06,blur=0,opacity=1,z=5;
        if(d===1){x=92;rot=-19;scale=.82;blur=4.4;opacity=.46;z=2}
        else if(d===n-1){x=-92;rot=19;scale=.82;blur=4.4;opacity=.46;z=2}
        else if(d!==0){x=d<n/2?138:-138;rot=d<n/2?-23:23;scale=.72;blur=6;opacity=.12;z=1}
        card.style.transform=`translate(-50%,-50%) translateX(${x}%) rotateY(${rot}deg) scale(${scale})`;
        card.style.filter=blur?`blur(${blur}px) saturate(.72)`:'none';
        card.style.opacity=opacity;
        card.style.zIndex=z;
        card.classList.toggle('is-active',d===0);
        card.setAttribute('aria-current',d===0?'true':'false');
      });
    };
    const load=(i,autoplay=false)=>{
      index=(i+cards.length)%cards.length;
      const c=cards[index];
      positionCards();
      audio.src=c.dataset.src;
      audio.load();
      if(duration) duration.textContent=c.dataset.duration||'00:00';
      if(range){range.value=0;range.style.setProperty('--progress','0%')}
      if(current) current.textContent='00:00';
      if(autoplay) audio.play().catch(()=>{});
    };
    cards.forEach((c,i)=>c.addEventListener('click',()=>{ if(i!==index) load(i,true); else if(audio.paused) audio.play().catch(()=>{}); }));
    toggle?.addEventListener('click',()=>audio.paused?audio.play().catch(()=>{}):audio.pause());
    prev?.addEventListener('click',()=>load(index-1,true));
    next?.addEventListener('click',()=>load(index+1,true));
    audio.addEventListener('play',()=>document.body.classList.add('music-playing'));
    audio.addEventListener('pause',()=>document.body.classList.remove('music-playing'));
    audio.addEventListener('ended',()=>load(index+1,true));
    audio.addEventListener('loadedmetadata',()=>{if(duration)duration.textContent=format(audio.duration)});
    audio.addEventListener('timeupdate',()=>{
      if(current)current.textContent=format(audio.currentTime);
      if(audio.duration&&range){const p=audio.currentTime/audio.duration*100;range.value=Math.round(p*10);range.style.setProperty('--progress',`${p}%`)}
    });
    range?.addEventListener('input',()=>{if(audio.duration){const p=Number(range.value)/1000;audio.currentTime=p*audio.duration;range.style.setProperty('--progress',`${p*100}%`)}});
    volume?.addEventListener('input',()=>{const v=Number(volume.value);audio.volume=v/100;volume.style.setProperty('--progress',`${v}%`);if(volumeValue)volumeValue.textContent=`${v}%`});
    if(volume){audio.volume=.82;volume.style.setProperty('--progress','82%')}
    positionCards();
    let touchX=null;
    qs('[data-coverflow]')?.addEventListener('touchstart',e=>touchX=e.touches[0].clientX,{passive:true});
    qs('[data-coverflow]')?.addEventListener('touchend',e=>{if(touchX==null)return;const d=e.changedTouches[0].clientX-touchX;touchX=null;if(Math.abs(d)>45)load(index+(d<0?1:-1),true)},{passive:true});
  }

  // Credits filters and synchronized meta panel, inspired by active project metadata.
  const filters=qsa('[data-credit-filter]'),creditCards=qsa('[data-credit-category]');filters.forEach(btn=>btn.addEventListener('click',()=>{const f=btn.dataset.creditFilter;filters.forEach(b=>b.classList.toggle('is-active',b===btn));creditCards.forEach(c=>c.classList.toggle('is-filtered',f!=='all'&&c.dataset.creditCategory!==f))}));
  if(creditCards.length){const dl=document.createElement('dl');dl.className='credits-live-info';for(const [name,attr] of [['ARTIST','data-ci-artist'],['ROLE','data-ci-role'],['WORKS','data-ci-works']]){
    const dt=document.createElement('dt');dt.textContent=name;
    const dd=document.createElement('dd');dd.setAttribute(attr,'');dd.textContent='—';
    dl.append(dt,dd);
  }document.body.appendChild(dl);const sync=c=>{qs('[data-ci-artist]',dl).textContent=qs('h2',c)?.textContent||'—';qs('[data-ci-role]',dl).textContent=qs('.role',c)?.textContent||'—';qs('[data-ci-works]',dl).textContent=qsa('.work-tile span',c).map(x=>x.textContent.trim()).join(' / ')||'—'};creditCards.forEach(c=>{c.addEventListener('mouseenter',()=>sync(c));c.addEventListener('focusin',()=>sync(c))});sync(creditCards[0])}

  // Credits gallery.
  const modal=qs('[data-gallery-modal]'),items=qsa('[data-gallery-item]');if(modal&&items.length){const media=qs('[data-gallery-media]',modal),video=qs('[data-gallery-video]',modal),artist=qs('[data-gallery-artist]',modal),label=qs('[data-gallery-label]',modal),count=qs('[data-gallery-count]',modal),prev=qs('[data-gallery-prev]',modal),next=qs('[data-gallery-next]',modal);let group=[],gi=0,last=null;const render=()=>{const item=group[gi],isVideo=item.dataset.galleryType==='video';if(video){video.pause();video.removeAttribute('src');video.hidden=!isVideo;}media.hidden=isVideo;if(isVideo&&video){media.removeAttribute('src');video.src=item.dataset.gallerySrc;video.load();if(modal.classList.contains('is-open'))video.play().catch(()=>{});}else{media.src=item.dataset.gallerySrc;media.alt=`${item.dataset.galleryArtist} — ${item.dataset.galleryLabel}`;}artist.textContent=item.dataset.galleryArtist;const key=item.dataset.galleryLabel;label.textContent=translations[localStorage.getItem('nieris-site-language')||'pt-BR'][key]||key;count.textContent=`${String(gi+1).padStart(2,'0')} / ${String(group.length).padStart(2,'0')}`;prev.hidden=next.hidden=group.length<2};const open=item=>{group=items.filter(x=>x.dataset.galleryArtist===item.dataset.galleryArtist);gi=group.indexOf(item);last=item;render();modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');if(item.dataset.galleryType==='video'&&video)video.play().catch(()=>{});document.body.style.overflow='hidden'};const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';media.removeAttribute('src');if(video){video.pause();video.removeAttribute('src');video.hidden=true;}last?.focus()};items.forEach(i=>i.addEventListener('click',()=>open(i)));qsa('[data-gallery-close]',modal).forEach(b=>b.addEventListener('click',close));prev.addEventListener('click',()=>{gi=(gi-1+group.length)%group.length;render()});next.addEventListener('click',()=>{gi=(gi+1)%group.length;render()});document.addEventListener('keydown',e=>{if(!modal.classList.contains('is-open'))return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')prev.click();if(e.key==='ArrowRight')next.click()})}

  // Fanart dialog: all gallery pieces share one accessible image viewer.
  const fan=qs('[data-fan-dialog]');
  if(fan){
    const fanFull=qs('img',fan),fanCredit=qs('p strong',fan),fanType=qs('p span',fan);
    qsa('[data-fan-open]').forEach(btn=>btn.addEventListener('click',()=>{
      const picture=qs('img',btn),fig=btn.closest('figure');
      if(!picture||!fig)return;
      fanFull.src=picture.src;fanFull.alt=picture.alt;
      fanCredit.textContent=qs('figcaption strong',fig)?.textContent||'';
      fanType.textContent=qs('figcaption span',fig)?.textContent||'Fanart';
      fan.showModal();
    }));
    qs('[data-fan-close]')?.addEventListener('click',()=>fan.close());
    fan.addEventListener('click',e=>{if(e.target===fan)fan.close()});
  }

  // Low-friction media save deterrence.
  qsa('img').forEach(img=>img.draggable=false);document.addEventListener('dragstart',e=>{if(e.target.closest?.('img'))e.preventDefault()});document.addEventListener('contextmenu',e=>{if(e.target.closest?.('img,.work-tile'))e.preventDefault()});
})();

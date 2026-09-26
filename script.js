/* ---- SVG assets ---- */
function catSVG(){
  return `<svg viewBox="0 0 140 130" xmlns="http://www.w3.org/2000/svg">
    <path class="tail" d="M108,88 C132,84 136,58 118,46" fill="none" stroke="#8a5a3c" stroke-width="9" stroke-linecap="round"/>
    <path d="M70,18 C40,18 20,42 20,70 C20,100 42,120 70,120 C98,120 120,100 120,70 C120,42 100,18 70,18 Z" fill="#fffaf2" stroke="#8a5a3c" stroke-width="3"/>
    <path d="M33,32 C28,16 46,10 56,24 C50,32 40,35 33,32 Z" fill="#fffaf2" stroke="#8a5a3c" stroke-width="3"/>
    <path d="M38,27 C36,18 46,15 51,23 C47,27 42,29 38,27 Z" fill="#ffc2d1"/>
    <path d="M107,32 C112,16 94,10 84,24 C90,32 100,35 107,32 Z" fill="#fffaf2" stroke="#8a5a3c" stroke-width="3"/>
    <path d="M102,27 C104,18 94,15 89,23 C93,27 98,29 102,27 Z" fill="#ffc2d1"/>
    <ellipse cx="54" cy="64" rx="5.5" ry="7.5" fill="#2e2018"/>
    <ellipse cx="86" cy="64" rx="5.5" ry="7.5" fill="#2e2018"/>
    <circle cx="56.5" cy="60" r="1.7" fill="#fff"/>
    <circle cx="88.5" cy="60" r="1.7" fill="#fff"/>
    <ellipse cx="40" cy="78" rx="9" ry="6" fill="#ffc2d1" opacity=".85"/>
    <ellipse cx="100" cy="78" rx="9" ry="6" fill="#ffc2d1" opacity=".85"/>
    <path d="M67,76 L73,76 L70,81 Z" fill="#ffb0be"/>
    <path d="M70,81 Q62,90 53,84" fill="none" stroke="#8a5a3c" stroke-width="3" stroke-linecap="round"/>
    <path d="M70,81 Q78,90 87,84" fill="none" stroke="#8a5a3c" stroke-width="3" stroke-linecap="round"/>
    <g stroke="#c9b8a8" stroke-width="1.5" stroke-linecap="round">
      <line x1="22" y1="68" x2="4" y2="63"/>
      <line x1="22" y1="74" x2="4" y2="76"/>
      <line x1="118" y1="68" x2="136" y2="63"/>
      <line x1="118" y1="74" x2="136" y2="76"/>
    </g>
    <ellipse class="paw fl" cx="52" cy="116" rx="12" ry="10" fill="#fffaf2" stroke="#8a5a3c" stroke-width="3"/>
    <ellipse class="paw br" cx="88" cy="116" rx="12" ry="10" fill="#fffaf2" stroke="#8a5a3c" stroke-width="3"/>
  </svg>`;
}
function cakeSVG(){
  return `<svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="60" cy="90" rx="46" ry="8" fill="#f2f0ec" stroke="#d8d3c9" stroke-width="2"/>
    <rect x="26" y="52" width="68" height="32" rx="8" fill="url(#spongeGrad)" stroke="#c98b3a" stroke-width="2"/>
    <path d="M22,52 C30,38 38,58 48,44 C58,32 66,56 76,42 C86,30 94,52 98,46 L98,58 L22,58 Z" fill="#fff8ea" stroke="#e7d3ad" stroke-width="2"/>
    <circle cx="60" cy="32" r="8" fill="#ff5d7a" stroke="#c23a54" stroke-width="1.5"/>
    <circle cx="57" cy="29" r="2.2" fill="#ffb6c6"/>
    <path d="M60,24 Q64,16 62,10" fill="none" stroke="#6b8f3a" stroke-width="2" stroke-linecap="round"/>
    <defs><linearGradient id="spongeGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffe9ad"/><stop offset="1" stop-color="#ffcf6b"/>
    </linearGradient></defs>
  </svg>`;
}
function coinSVG(){
  return `<svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
    <circle cx="20" cy="20" r="17" fill="#ffd54a" stroke="#c9891a" stroke-width="2.5"/>
    <circle cx="20" cy="20" r="11" fill="none" stroke="#c9891a" stroke-width="2"/>
    <text x="20" y="26" font-size="15" font-weight="bold" text-anchor="middle" fill="#c9891a" font-family="Arial,sans-serif">$</text>
  </svg>`;
}
document.querySelectorAll('.catWrap').forEach(el=> el.innerHTML = catSVG());
document.querySelectorAll('.cakeWrap').forEach(el=> el.innerHTML = cakeSVG());

/* random stars & clouds */
const game = document.getElementById('game');
for(let i=0;i<22;i++){
  const s=document.createElement('div'); s.className='star';
  const size=1+Math.random()*2;
  s.style.width=size+'px'; s.style.height=size+'px';
  s.style.left=Math.random()*100+'%'; s.style.top=(Math.random()*45)+'%';
  s.style.animationDelay=(Math.random()*2)+'s';
  game.appendChild(s);
}
for(let i=0;i<4;i++){
  const c=document.createElement('div'); c.className='cloud';
  const w=60+Math.random()*70, h=w*0.35;
  c.style.width=w+'px'; c.style.height=h+'px';
  c.style.top=(8+Math.random()*22)+'%'; c.style.left=(100+Math.random()*40)+'%';
  c.style.animationDuration=(30+Math.random()*20)+'s';
  c.style.animationDelay=(Math.random()*-20)+'s';
  game.appendChild(c);
}

/* ---- intro logic ---- */
const intro = document.getElementById('intro');
const boxwrap = document.getElementById('boxwrap');
const cakeIntro = document.getElementById('cakeIntro');
const catIntro = document.getElementById('catIntro');
const hint = document.getElementById('hint');
const scoreEl = document.getElementById('score');
const winscreen = document.getElementById('winscreen');
const runner = document.getElementById('runner');
document.getElementById('catbigwrap').innerHTML = catSVG();

let opened=false, catGrabbed=false, started=false;

boxwrap.addEventListener('mouseenter', ()=>{ if(!opened) boxwrap.classList.add('shake'); });
boxwrap.addEventListener('mouseleave', ()=> boxwrap.classList.remove('shake'));
// На телефоне нет наведения курсором — трясём подарок по касанию и меняем текст подсказки
const isTouch = !window.matchMedia('(hover:hover)').matches;
if(isTouch) hint.textContent = 'Нажми на подарок';
boxwrap.addEventListener('touchstart', ()=>{ if(!opened) boxwrap.classList.add('shake'); }, {passive:true});
boxwrap.addEventListener('click', ()=>{
  if(opened) return;
  opened=true;
  boxwrap.classList.remove('shake');
  boxwrap.classList.add('open');
  setTimeout(()=> cakeIntro.classList.add('fly'), 150);
  setTimeout(()=> hint.textContent = isTouch ? 'Свайпни вверх ↑' : 'Прокрути колёсико мыши ↓', 500);
});

window.addEventListener('wheel', ()=>{ if(opened && !catGrabbed) grabAndRun(); }, {passive:true});
let touchY=null;
window.addEventListener('touchstart', e=>{touchY=e.touches[0].clientY;});
window.addEventListener('touchmove', e=>{
  if(opened && !catGrabbed && touchY!==null && touchY-e.touches[0].clientY>40) grabAndRun();
});

// Кот подбегает к коробке, "забирает" торт (подменяем DOM-элемент) и убегает за край экрана
function grabAndRun(){
  catGrabbed=true;
  hint.textContent='';
  catIntro.classList.add('running');
  const boxRect = boxwrap.getBoundingClientRect();
  catIntro.style.transition='left 1.1s cubic-bezier(.3,.6,.4,1)';
  catIntro.style.left=(boxRect.left-170)+'px';
  requestAnimationFrame(()=>{ catIntro.style.left=(boxRect.left-20)+'px'; });
  setTimeout(()=>{
    cakeIntro.style.transition='opacity .2s';
    cakeIntro.style.opacity='0';
    const held=document.createElement('div');
    held.className='heldCakeWrap cakeWrap';
    held.innerHTML=cakeSVG();
    catIntro.appendChild(held);
    catIntro.style.transition+=', left 1.4s ease-in';
    catIntro.style.left=(window.innerWidth+60)+'px';
  }, 900);
  setTimeout(()=>{
    intro.style.opacity=0;
    setTimeout(()=> intro.classList.add('hidden'), 500);
    startGame();
  }, 2000);
}

function startGame(){
  started=true;
  game.classList.add('active');
  const groundBottom=56;
  let vy=0, isJump=false, jumpBottom=groundBottom;
  const gravity=1500, jumpV=620;
  const runnerCat = document.getElementById('catRunner');
  runnerCat.classList.add('running');

  function jump(){ if(isJump) return; isJump=true; vy=jumpV; }
  window.addEventListener('keydown', e=>{
    if(e.code==='Space'||e.key==='ArrowUp'){ e.preventDefault(); jump(); }
  });
  game.addEventListener('touchstart', jump);
  game.addEventListener('mousedown', jump);

  // Простая гравитация: прыжок = начальная скорость вверх, каждый кадр гасится gravity
  let last=performance.now();
  function physics(t){
    const dt=Math.min(.032,(t-last)/1000); last=t;
    if(isJump){
      vy-=gravity*dt; jumpBottom+=vy*dt;
      if(jumpBottom<=groundBottom){ jumpBottom=groundBottom; isJump=false; vy=0; }
      runner.style.bottom=jumpBottom+'px';
    }
    if(started) requestAnimationFrame(physics);
  }
  requestAnimationFrame(physics);

  let score=0; const total=18; let coins=[]; const speed=260;
  function spawnCoin(){
    const el=document.createElement('div');
    el.className='coin'; el.innerHTML=coinSVG();
    const air=Math.random()<0.55;
    const bottom = air ? groundBottom+70+Math.random()*30 : groundBottom+8;
    el.style.bottom=bottom+'px';
    el.style.left=(window.innerWidth+30)+'px';
    game.appendChild(el);
    coins.push({el,bottom,air,x:window.innerWidth+30,collected:false});
  }
  for(let i=0;i<3;i++) setTimeout(spawnCoin, i*500);

  let lastCoin=performance.now(), lastMove=performance.now();
  function loop(t){
    if(!started) return;
    const dt=Math.min(.032,(t-lastMove)/1000); lastMove=t;
    const runnerRect=runner.getBoundingClientRect();
    for(let i=coins.length-1;i>=0;i--){
      const c=coins[i];
      c.x-=speed*dt; c.el.style.left=c.x+'px';
      if(c.x<-40){ c.el.remove(); coins.splice(i,1); continue; }
      if(!c.collected){
        const catX=runnerRect.left+runnerRect.width/2;
        if(Math.abs(c.x-catX)<30){
          // Монету на земле ловим всегда, "воздушную" — только если кот сейчас в прыжке
          const catHigh = jumpBottom>groundBottom+30;
          if(!c.air || c.air===catHigh){
            c.collected=true;
            c.el.style.transition='transform .2s,opacity .2s';
            c.el.style.transform='scale(1.6)'; c.el.style.opacity='0';
            setTimeout(()=>c.el.remove(),200);
            coins.splice(i,1);
            score++;
            scoreEl.textContent=`Монеты: ${score} / ${total}`;
            if(score>=total){ winGame(); return; }
          }
        }
      }
    }
    if(t-lastCoin>(700+Math.random()*400) && coins.length<4){ spawnCoin(); lastCoin=t; }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  // Достигли 18 монет: прячем игру, показываем крупного кота + надпись + конфетти
  function winGame(){
    started=false;
    coins.forEach(c=>c.el.remove());
    runner.classList.add('hidden');
    winscreen.classList.add('show');
    for(let i=0;i<24;i++){
      const c=document.createElement('div');
      c.className='confetti';
      c.textContent=['🎉','🎈','💖','✨','🎂'][Math.floor(Math.random()*5)];
      c.style.left=Math.random()*100+'%';
      c.style.animationDuration=(2.5+Math.random()*2)+'s';
      c.style.animationDelay=(Math.random()*1.5)+'s';
      winscreen.appendChild(c);
    }
  }
}

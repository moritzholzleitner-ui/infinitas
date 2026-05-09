
// Map JS SVG keys to actual filenames in media/
const SVG_MAP = {
  'Element_1Ritualkarte_Verlauf': 'Element 1Ritualkarte_Verlauf_2.svg',
  'Ritual_Grafiken-08': 'Ritual Grafiken-08.svg',
  'Ritual_Grafiken-09': 'Ritual Grafiken-09.svg',
  'Ritual_Grafiken-10': 'Ritual Grafiken-10.svg',
  'Ritual_Grafiken-11': 'Ritual Grafiken-11.svg',
  'Ritual_Grafiken-12': 'Ritual Grafiken-12.svg',
  'Ritual_Grafiken-13': 'Ritual Grafiken-13.svg',
  'Ritual_Grafiken-15': 'Ritual Grafiken-15.svg',
  'Ritual_Grafiken-16': 'Ritual Grafiken-16.svg',
  'Ritual_Grafiken-17': 'Ritual Grafiken-17.svg',
  'Ritual_Grafiken-19': 'Ritual Grafiken-19.svg',
  'Ritual_Grafiken-21': 'Ritual Grafiken-21.svg',
  'Ritual_Grafiken-22': 'Ritual Grafiken-22.svg',
  'Ritual_Grafiken-23': 'Ritual Grafiken-23.svg',
  'Ritual_Grafiken-24': 'Ritual Grafiken-24.svg',
  'Ritual_Grafiken-25': 'Ritual Grafiken-25.svg',
  'Ritual_Grafiken-26': 'Ritual Grafiken-26.svg',
  'Ritual_Grafiken_Final': 'Ritual Grafiken_Final.svg',
  'Ritual_Grafiken_Natur___Entspannug_Kopie_2': 'Ritual Grafiken_Natur & Entspannug Kopie 2.svg',
  'Ritual_Grafiken_Natur___Entspannug_Kopie_3': 'Ritual Grafiken_Natur & Entspannug Kopie 3.svg',
};

function g(key) {
  const file = SVG_MAP[key];
  if (!file) return '';
  return `<div class="graphic"><img src="media/${encodeURIComponent(file)}" alt=""></div>`;
}

function gcS(key) {
  const file = SVG_MAP[key];
  if (!file) return '';
  return `<div class="graphic"><img src="media/${encodeURIComponent(file)}" alt=""></div>`;
}

function gc(key, caption) {
  const file = SVG_MAP[key];
  if (!file) return '';
  return `<div class="graphic"><img src="media/${encodeURIComponent(file)}" alt="${caption||''}">` + (caption ? `<p class="graphic-caption">${caption}</p>` : '') + `</div>`;
}


const chapters = {
  einführung:{
    eyebrow:'Kapitel 01', titel:'Spiel', sub:'Einführung',
    sections:[{
      label:'Einführung',
      lead:'Der Alltag besteht aus kleinen Momenten. Manche laufen einfach nebenbei, andere bringen uns aus dem Gleichgewicht.',
      body:['Ein verpasster Bus, ein unerwarteter Anruf oder ein leerer Akku – oft sind es genau diese Kleinigkeiten, die unseren Tag bestimmen. Gleichzeitig gibt es Momente, die uns guttun und uns wieder in Balance bringen.','Dieses Spiel greift genau diese Situationen auf. Es macht sie sichtbar, überspitzt sie und lädt ein, sie mit etwas Abstand zu betrachten.'],
      extra: gc('Ritual_Grafiken_Natur___Entspannug_Kopie_3', 'Infinitas – Alles halb so wild?!')
    }]
  },
  übersicht:{
    eyebrow:'Kapitel 02', titel:'Spiel', sub:'Übersicht',
    sections:[
      {label:'Spielinformationen', lead:'Infinitas kombiniert Alltagssituationen, Entscheidungen und kleine Herausforderungen zu einem gemeinsamen Spielerlebnis.',
       extra:`<div class="mini-stats"><div class="ms"><span class="ms-v">2–6</span><span class="ms-l">Spieler</span></div><div class="ms"><span class="ms-v">12+</span><span class="ms-l">Jahre</span></div><div class="ms"><span class="ms-v">30–60'</span><span class="ms-l">Dauer</span></div><div class="ms"><span class="ms-v">v1.0</span><span class="ms-l">Version</span></div></div>`
      },
      {label:'Spielziel', lead:'Ziel des Spiels ist es, möglichst viele Harmoniepunkte (Harmoniejetons) zu sammeln und dabei nicht ins Burnout zu geraten.',
       body:['Unterschiedliche Karten, Ereignisse und Entscheidungen beeinflussen den Spielverlauf.']},
      {label:'Spielinhalt',
       extra:`
        <div class="dt"><div class="dt-head">① Spielbrett</div>
          <div class="dt-row"><span>Ablageschienen</span><span class="dt-badge">8×</span></div>
          <div class="dt-row"><span>Kurventeile groß</span><span class="dt-badge">4×</span></div>
          <div class="dt-row"><span>Kurventeile klein</span><span class="dt-badge">4×</span></div>
          <div class="dt-row"><span>Brettteile</span><span class="dt-badge">4×</span></div>
        </div>
        <div class="dt"><div class="dt-head">② Spielzubehör</div>
          <div class="dt-row"><span>Spielfiguren</span><span class="dt-badge">6×</span></div>
          <div class="dt-row"><span>Sanduhr</span><span class="dt-badge">1×</span></div>
          <div class="dt-row"><span>Würfel</span><span class="dt-badge">1×</span></div>
          <div class="dt-row"><span>Harmoniejetons</span><span class="dt-badge">150×</span></div>
        </div>
        <div class="dt"><div class="dt-head">③ Spielkarten</div>
          <div class="dt-row"><span>Personakarten</span><span class="dt-badge">8×</span></div>
          <div class="dt-row"><span>Ritualkarten</span><span class="dt-badge">52×</span></div>
          <div class="dt-row"><span>Harmonie- & Ärgerniskarten</span><span class="dt-badge">52×</span></div>
          <div class="dt-row"><span>Bonuskarten</span><span class="dt-badge">12×</span></div>
        </div>
        <div class="tag-row">
          <span class="tag tag-ice">Hellblau = Harmonie</span>
          <span class="tag tag-red">Rot-Orange = Ärgernis</span>
          <span class="tag tag-nvy">Dunkel = Hardcore</span>
        </div>` +
        gc('Ritual_Grafiken-09', 'Personakarte') +
        gc('Ritual_Grafiken-10', 'Ritualkarte')
      }
    ]
  },
  aufbau:{
    eyebrow:'Kapitel 03', titel:'Spiel', sub:'Aufbau',
    sections:[
      {label:'Spielfeld aufbauen', lead:'Das Spielfeld besteht aus mehreren Elementen und wird vor dem Spielbeginn zusammengesetzt.',
       extra:`
        <div class="step-row"><div class="step-c">①</div><div class="step-t"><strong>Anordnung der Teile</strong> — Lege die vier nummerierten Kartonteile auf die Tischfläche.</div></div>
        <div class="step-row"><div class="step-c">②</div><div class="step-t"><strong>Verbindung herstellen</strong> — Kunststoffteile mit Stützen verbinden bis der Infinity-Loop steht.</div></div>
        <div class="step-row"><div class="step-c">③</div><div class="step-t"><strong>Spielfeld einsetzen</strong> — Säulen rasten magnetisch ein.</div></div>` +
        gc('Ritual_Grafiken-24', 'Magnetische Verbindung') +
        gc('Ritual_Grafiken-25', 'Spielfeld Übersicht')
      },
      {label:'Karten platzieren', lead:'Die verschiedenen Kartentypen werden an festgelegten Positionen rund um das Spielfeld platziert.',
       extra:`
        <div class="step-row"><div class="step-c">①</div><div class="step-t"><strong>Ritualkarten</strong> — in den blauen Bereich der Acht.</div></div>
        <div class="step-row"><div class="step-c">②</div><div class="step-t"><strong>Harmonie- & Ärgerniskarten</strong> — gemischter Stapel in den roten Bereich.</div></div>
        <div class="step-row"><div class="step-c">③</div><div class="step-t"><strong>Personakarte</strong> — jeder Spieler zieht eine, behält sie vor sich.</div></div>
        <div class="step-row"><div class="step-c">④</div><div class="step-t"><strong>Bonuskarte</strong> — jeder Spieler zieht eine zu Beginn.</div></div>` +
        gc('Ritual_Grafiken-11', 'Personakarte & Bonuskarte')
      }
    ]
  },
  mechanik:{
    eyebrow:'Kapitel 04', titel:'Spiel', sub:'Mechanik',
    sections:[
      {label:'Spielfeld', ey:'Spielfeld', ttl:'Struktur',
       lead:'Das Spielfeld bildet die Grundlage des Spiels und führt dich durch die verschiedenen Bereiche des Alltags.',
       img:'Grafik_Spielfeld Struktur.png',
       caption:'Spielbahn<br>Infinity-Loop',
       body:[
         {head:'Aufbau & Bewegung', text:'Das Spielfeld besteht aus 60 Feldern und ist in Form einer Unendlichkeitsschleife aufgebaut. Gestartet wird im Kreuzungspunkt der Schleife. Von dort aus bewegst du deine Spielfigur entlang der gekennzeichneten Richtung.'},
         {head:'Zonen & Felder', text:'Im Zentrum befindet sich der Ruhepol — vier neutrale Felder ohne Karten oder Ereignisse. Außerhalb befinden sich unterschiedliche Feldtypen, die den Spielverlauf bestimmen.'}
       ]
      },
      {label:'Harmonie & Ärgernis', ey:'Kartenfeld', ttl:'Harmonie & Ärgernis',
       lead:'Harmonie- und Ärgerniskarten bilden den Kern des Spiels. Sie spiegeln alltägliche Situationen wider und beeinflussen deine Harmoniepunkte.',
       img:'Grafik_Kartenfeld Harmonie.png',
       steps:[
         {n:'①',t:'Feld betreten'},
         {n:'②',t:'Karte ziehen — Punkte sofort verrechnen. Betrifft sie deine Persona nicht, wird sie weitergegeben.'},
         {n:'③',t:'Hardcore-Karten werden nach dem Ziehen aus dem Spiel entfernt.'}
       ],
       body:[
         {head:'Ziehen & Wirkung', text:'Landest du auf einem dieser Felder, ziehst du eine Karte vom gemischten Stapel. Je nach Karte erhältst oder verlierst du Harmoniepunkte, die sofort verrechnet werden.'},
         {head:'Besonderheiten', text:'Betrifft die Karte deine Persona nicht, wird sie im Uhrzeigersinn weitergegeben. Hardcore-Karten werden nach dem Ziehen aus dem Spiel entfernt.'}
       ]
      },
      {label:'Ritual', ey:'Kartenfeld', ttl:'Ritual',
       lead:'Ritualkarten bringen Bewegung ins Spiel — Aufgaben alleine, zu zweit oder in der Gruppe.',
       img:'Grafik_Kartenfeld Ritual.png',
       steps:[
         {n:'①',t:'Feld betreten'},
         {n:'②',t:'Ritualkarte ziehen — Aufgabe alleine, zu zweit oder in der Gruppe ausführen.'},
         {n:'③',t:'Bei zeitlich begrenzten Aufgaben läuft die <strong>Sanduhr</strong>. Alle erfolgreichen Spieler erhalten Punkte.'}
       ],
       body:[
         {head:'Ablauf', text:'Bei zeitlich begrenzten Aufgaben läuft die Sanduhr. Alle Spieler, die die Aufgabe erfolgreich abschließen, erhalten Harmoniepunkte.'}
       ]
      },
      {label:'Bonus', ey:'Kartenfeld', ttl:'Bonus',
       lead:'Bonuskarten erweitern deine Möglichkeiten — optional für 5 Harmoniepunkte zu erwerben.',
       img:'Grafiken_Kartenfeld Bonus.png',
       steps:[
         {n:'①',t:'Feld betreten'},
         {n:'②',t:'Bonuskarte für <strong>5 Harmoniepunkte</strong> kaufen (optional).'},
         {n:'③',t:'Vorteil nutzen. Im <strong>Risikomodus inaktiv</strong>.'}
       ],
       body:[
         {head:'Hinweis', text:'Im Risikomodus sind Bonuskarten inaktiv. Sind keine Karten mehr im Stapel, wird dieser neu gemischt.'}
       ]
      },
      {label:'Ereignis', ey:'Spielfeld', ttl:'Ereignis',
       lead:'Ereignisfelder verändern deine Bewegung, nicht deine Harmoniepunkte.',
       img:'Grafiken_Spielfeld Ereignis.png',
       body:[
         {head:'Wirkung', text:'Ereignisfelder lösen besondere Situationen aus, die deine nächsten Züge beeinflussen — ohne direkte Auswirkung auf deine Harmoniepunkte.'}
       ]
      },
      {label:'Risikomodus', ey:'Spielfeld', ttl:'Risikomodus',
       lead:'Der Risikomodus verdoppelt alle Karteneffekte — positiv wie negativ.',
       steps:[
         {n:'①',t:'Risikolinie überqueren und Modus wählen.'},
         {n:'②',t:'Alle Karten werden <strong>doppelt gewertet</strong> bis zur Endlinie.'}
       ],
       warn:'Bonuskarten sind im Risikomodus inaktiv!',
       body:[
         {head:'Einsatz & Risiko', text:'Wer den Risikomodus wählt, kann mehr gewinnen — aber auch mehr verlieren. Bonuskarten sind in dieser Zone deaktiviert.'}
       ]
      },
      {label:'Burnout', ey:'Spielfeld', ttl:'Burnout',
       lead:'Burnout unterbricht deinen Spielfluss — eine Auszeit, bevor du neu startest.',
       steps:[
         {n:'①',t:'Harmoniejetons aufgebraucht → Burnout ausgelöst.'},
         {n:'②',t:'Zur <strong>Burnout-Zone</strong> im Zentrum — eine Runde aussetzen.'},
         {n:'③',t:'Neustart beim Startfeld mit <strong>2 Harmoniejetons</strong>.'}
       ],
       body:[
         {head:'Neustart', text:'Nach dem Burnout startest du mit 2 Harmoniejetons neu. Die Burnout-Zone liegt im Zentrum des Spielfelds — dem Ruhepol.'}
       ]
      }
    ]
  }
};

const searchIndex=[];
Object.entries(chapters).forEach(([k,ch])=>{
  ch.sections.forEach((s,i)=>searchIndex.push({chapter:k,label:ch.titel+' '+ch.sub,title:s.label,idx:i}));
});

const sinput=document.getElementById('searchInput');
const sresults=document.getElementById('searchResults');
sinput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  sresults.innerHTML='';
  if(q.length<2){sresults.classList.remove('visible');return;}
  const hits=searchIndex.filter(x=>x.title.toLowerCase().includes(q)||x.label.toLowerCase().includes(q)).slice(0,5);
  if(!hits.length){sresults.classList.remove('visible');return;}
  hits.forEach(h=>{
    const d=document.createElement('div');d.className='sri';
    d.innerHTML=`<span class="sri-ch">${h.label}</span><span class="sri-t">${h.title}</span>`;
    d.onclick=()=>{sresults.classList.remove('visible');sinput.value='';openChapter(h.chapter,h.idx);};
    sresults.appendChild(d);
  });
  sresults.classList.add('visible');
});
document.addEventListener('click',e=>{if(!e.target.closest('.search-wrap'))sresults.classList.remove('visible');});

function renderSection(s,i){
  let html=`<div class="cv-section" id="cvs-${i}"><div class="cv-sec-label">${s.label}</div>`;
  if(s.lead) html+=`<p class="cv-lead">${s.lead}</p>`;
  if(s.body) s.body.forEach(b=>html+=`<p class="cv-body-t">${b}</p>`);
  if(s.extra) html+=s.extra;
  html+='</div>';
  return html;
}

let _mechIdx=0;
let _scrollPos=0;

function buildMechCard(s){
  let html='';
  if(s.steps) s.steps.forEach(st=>html+=`<div class="step-row"><div class="step-c">${st.n}</div><div class="step-t">${st.t}</div></div>`);
  if(s.warn) html+=`<div class="warn">${s.warn}</div>`;
  if(s.img) html+=`<img src="media/${encodeURIComponent(s.img)}" alt="${s.ttl||s.label}">`;
  if(s.caption) html+=`<p class="mech-img-caption">${s.caption}</p>`;
  return html;
}

function buildMechBody(s){
  if(!s.body||!s.body.length)return'';
  return s.body.map(b=>`<p class="mech-body-head">${b.head}</p><p class="cv-body-t">${b.text}</p>`).join('');
}

function openMechanik(startIdx){
  const ch=chapters['mechanik'];
  const n=ch.sections.length;
  const s0=ch.sections[0];
  const dots=Array.from({length:n},(_,i)=>`<span class="mech-dot${i===0?' active':''}" onclick="mechSelect(${i})"></span>`).join('');
  const html=`<div class="mech-view">
    <div class="mech-header">
      <img class="mech-header-img" src="media/Verlauf%20Unterseiten.png" alt="">
      <button class="mech-back-btn" onclick="closeChapter()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <span class="mech-cat-vert"><span class="cat-regular">Spiel </span><span class="cat-bold">Mechanik</span></span>
    </div>
    <div class="mech-title-area">
      <p class="mech-ey" id="mechEy">${s0.ey}</p>
      <h1 class="mech-ttl" id="mechTtl">${s0.ttl}</h1>
      <p class="mech-lead-txt" id="mechLead">${s0.lead}</p>
    </div>
    <div class="mech-nav">
      <div class="mech-dots" id="mechDots">${dots}</div>
      <span class="mech-nav-hint">Auf die Punkte tippen um die Seite zu wechseln</span>
    </div>
    <div class="mech-white-zone">
      <div class="mech-img-wrap mech-fade" id="mechCard">${buildMechCard(s0)}</div>
      <div class="mech-body mech-fade" id="mechBody">${buildMechBody(s0)}</div>
      <div class="mech-imp-wrap">
        <img class="mech-imp-bg" src="media/Verlauf%20Impressum.png" alt="">
      </div>
      <div class="mech-imp-text">
        <p>© 2026 Infinitas</p>
        <p>Spielkonzept, Gestaltung und Spielsystem: Holzleitner Moritz</p>
        <p>Infinitas ist ein fiktives Spielkonzept im Rahmen eines Designprojekts. Die Ereignisse auf den Karten basieren auf einer Umfrage während des Entstehungsprozesses und wurden teilweise überarbeitet oder fiktiv erweitert.<br>Texte mit Unterstützung von ChatGPT überarbeitet.</p>
        <p>Alle Rechte vorbehalten. Nachdruck, Vervielfältigung oder Veröffentlichung – auch auszugsweise – nur mit schriftlicher Genehmigung.</p>
        <p>Bitte bewahren Sie diese Informationen zum späteren Nachschlagen auf. Farb- und Inhaltsänderungen vorbehalten.</p>
        <p>Version 1.0 – INF-01-2026</p>
      </div>
    </div>
  </div>`;
  _scrollPos=window.scrollY;
  document.getElementById('cvContent').innerHTML=html;
  document.getElementById('chapterView').classList.add('open','mech-open');
  document.getElementById('main').style.display='none';
  document.body.classList.add('mech-page');
  window.scrollTo(0,0);
  _mechIdx=startIdx||0;
  if(_mechIdx>0)mechSelect(_mechIdx);
}

function mechSelect(idx){
  const sections=chapters['mechanik'].sections;
  if(idx<0||idx>=sections.length)return;
  _mechIdx=idx;
  const s=sections[idx];
  const ey=document.getElementById('mechEy');
  const ttl=document.getElementById('mechTtl');
  const lead=document.getElementById('mechLead');
  if(ey)ey.textContent=s.ey||s.label;
  if(ttl)ttl.textContent=s.ttl||s.label;
  if(lead)lead.textContent=s.lead;
  document.querySelectorAll('.mech-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  const btn=document.getElementById('mechNext');
  if(btn)btn.disabled=idx===sections.length-1;
  const card=document.getElementById('mechCard');
  if(card){card.classList.remove('mech-fade');void card.offsetWidth;card.innerHTML=buildMechCard(s);card.classList.add('mech-fade');}
  const body=document.getElementById('mechBody');
  if(body){body.classList.remove('mech-fade');void body.offsetWidth;body.innerHTML=buildMechBody(s);if(s.body&&s.body.length)body.classList.add('mech-fade');}
}

function mechNav(dir){mechSelect(_mechIdx+dir);}

function openChapter(id,scrollTo){
  if(id==='mechanik'){openMechanik(scrollTo);return;}
  const ch=chapters[id];
  document.getElementById('cvBackLbl').textContent=ch.titel+' '+ch.sub;
  let html=`<div class="cv-banner">
    <svg class="cv-banner-bg" viewBox="0 0 430 220" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <radialGradient id="b1" cx="72%" cy="28%" r="52%"><stop offset="0%" stop-color="#5a80c0" stop-opacity="0.4"/><stop offset="100%" stop-color="#141d4a" stop-opacity="0"/></radialGradient>
        <radialGradient id="b2" cx="18%" cy="78%" r="46%"><stop offset="0%" stop-color="#8aaad8" stop-opacity="0.28"/><stop offset="100%" stop-color="#141d4a" stop-opacity="0"/></radialGradient>
      </defs>
      <ellipse cx="310" cy="62" rx="175" ry="125" fill="url(#b1)"/>
      <ellipse cx="78" cy="172" rx="155" ry="115" fill="url(#b2)"/>
      <path d="M360 0 C360 0 430 55 295 135 C160 215 55 185 55 250" stroke="rgba(160,195,235,0.1)" stroke-width="60" fill="none" stroke-linecap="round"/>
    </svg>
    <div class="cv-banner-inner">
      <div class="cv-brace"></div>
      <div>
        <p class="cv-eyebrow">${ch.eyebrow}</p>
        <p class="cv-h1-titel">${ch.titel}</p>
        <p class="cv-h1-sub">${ch.sub}</p>
      </div>
    </div>
  </div><div class="cv-body">`;
  ch.sections.forEach((s,i)=>html+=renderSection(s,i));
  html+='</div>';
  _scrollPos=window.scrollY;
  document.getElementById('cvContent').innerHTML=html;
  document.getElementById('chapterView').classList.add('open');
  document.getElementById('main').style.display='none';
  window.scrollTo(0,0);
  if(scrollTo!==undefined){
    setTimeout(()=>{const el=document.getElementById('cvs-'+scrollTo);if(el)el.scrollIntoView({behavior:'smooth',block:'start'});},80);
  }
}

function closeChapter(){
  document.getElementById('chapterView').classList.remove('open','mech-open');
  document.getElementById('main').style.display='';
  document.body.classList.remove('mech-page');
  window.scrollTo(0,_scrollPos);
}

// INTRO
const intro=document.getElementById('intro');
const eight=document.getElementById('introEight');
const mainEl=document.getElementById('main');
setTimeout(()=>{
  eight.classList.add('zoom');
  setTimeout(()=>{
    intro.classList.add('fade-out');
    mainEl.classList.add('visible');
    setTimeout(()=>{
      intro.style.display='none';
      document.getElementById('heroLogo')?.classList.add('show');
      document.getElementById('searchWrap')?.classList.add('show');
      document.getElementById('quickNav')?.classList.add('show');
      document.getElementById('scrollHint')?.classList.add('show');
    },650);
  },850);
},1400);

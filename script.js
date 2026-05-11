
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
  übersicht:{
    eyebrow:'Kapitel 02', titel:'Spiel', sub:'Übersicht',
    sections:[{
      label:'Übersicht', ey:'Spiel', ttl:'Übersicht',
      lead:'Infinitas verbindet Alltag, Entscheidungen und kleine Herausforderungen zu einem gemeinsamen Spielerlebnis.',
      img:'Grafik_Anleitung_inventar.png',
      extra:`<div class="mini-stats"><div class="ms"><span class="ms-v">2–6</span><span class="ms-l">Spieler</span></div><div class="ms"><span class="ms-v">12+</span><span class="ms-l">Jahre</span></div><div class="ms"><span class="ms-v">30–60'</span><span class="ms-l">Dauer</span></div><div class="ms"><span class="ms-v">v1.0</span><span class="ms-l">Version</span></div></div>`,
      body:[
        {head:'Spielinformationen', text:'Das Spiel ist für 2–6 Spieler ausgelegt, empfohlen ab 12 Jahren und dauert etwa 30 bis 60 Minuten pro Runde.'},
        {head:'Spielziel', text:'Ziel des Spiels ist es, möglichst viele Harmoniepunkte (Harmoniejetons) zu sammeln und dabei nicht ins Burnout zu geraten. Unterschiedliche Karten, Ereignisse und Entscheidungen beeinflussen dabei den Spielverlauf der Spieler.'},
        {head:'Spielinhalt', text:'Das Spiel enthält verschiedene Kartenarten, Harmoniejetons, Spielfiguren sowie weiteres Spielzubehör wie Würfel und Sanduhr.'},
        {head:'', text:'Die 52 Harmonie- & Ärgerniskarten sind in positive und negative Ereignisse unterteilt. Positive Karten sind hellblau, negative Karten rot-orange gekennzeichnet. Zusätzlich befinden sich sechs Hardcorekarten mit dunklem Erscheinungsbild im Kartenstapel.'}
      ]
    }]
  },
  aufbau:{
    eyebrow:'Kapitel 03', titel:'Spiel', sub:'Aufbau',
    sections:[
      {label:'Vorbereitung', ey:'Spiel', ttl:'Vorbereitung',
       lead:'Das Spielfeld besteht aus mehreren Elementen und wird vor dem Spielbeginn zusammengesetzt.',
       img:'Grafik_Anleitung_Spiel-vorbereitung.png',
       body:[
         {head:'Anordnung der Teile', text:'Lege die vier Kartonteile in der richtigen Reihenfolge auf eine Tischfläche. Die Teile sind nummeriert und lassen sich so einfach zusammensetzen.'},
         {head:'Verbindung herstellen', text:'Verbinde die Kunststoffteile anschließend mit den Stützen, sodass jeweils zwei Elemente miteinander verbunden werden. Wiederhole diesen Schritt, bis sich der vollständige Loop bildet. Achte darauf, dass die Stützen vollständig in den Kunststoffteilen einrasten.'},
         {head:'Spielfeld einsetzen', text:'Setze die fertige, „schwebende" Spielbahn, den Infinity-Loop anschließend ungefähr mittig auf das vierteilige Spielbrett. Die Säulen rasten magnetisch an der richtigen Position ein und verbinden alle vier Spielbrettteile miteinander.'}
       ]
      },
      {label:'Karten', ey:'Positionierung', ttl:'Karten',
       lead:'Die verschiedenen Kartentypen werden an festgelegten Positionen rund um das Spielfeld platziert.',
       img:'Grafik_Anleitung_Karten-Positionierung.png',
       body:[
         {head:'Ritualkarten', text:'Die Ritualkarten werden in den blauen Bereich der Acht, in die gekennzeichnete Fläche gelegt.'},
         {head:'Harmonie- & Ärgerniskarten', text:'Der gemischte Kartenstapel aus Harmonie- und Ärgerniskarten wird in den roten Bereich der Acht, in die gekennzeichnete Fläche gelegt.'},
         {head:'Personakarten', text:'Jeder Spieler zieht zu Beginn eine der acht Personakarten und legt diese für das gesamte Spiel vor sich auf den Tisch.'},
         {head:'Bonuskarten', text:'Zu Beginn zieht jeder Spieler eine der zwölf Bonuskarten und legt sie neben der Personakarte vor sich ab.'}
       ]
      }
    ]
  },
  mechanik:{
    eyebrow:'Kapitel 04', titel:'Spiel', sub:'Mechanik',
    sections:[
      {label:'Spielfeld', ey:'Spielfeld', ttl:'Struktur',
       lead:'Das Spielfeld bildet die Grundlage des Spiels und führt dich durch die verschiedenen Bereiche des Alltags.',
       img:'Grafik_Anleitung_Spielfeld-struktur.png',
       caption:'Spielbahn<br>Infinity-Loop',
       body:[
         {head:'Aufbau & Bewegung', text:'Das Spielfeld besteht aus 40 Feldern und ist in Form einer Unendlichkeitsschleife aufgebaut. Gestartet wird im Kreuzungspunkt der Schleife. Von dort aus bewegst du deine Spielfigur entlang der gekennzeichneten Richtung über die erhöhte Spielbahn.'},
         {head:'Zonen & Felder', text:'Im Zentrum befindet sich der sogenannte Ruhepol. Die vier inneren Felder bilden eine neutrale Zone. Hier werden keine Karten gezogen, es gelten keine Rituale und es treten auch keine Ereignisse auf.'},
         {head:'', text:'Außerhalb des Ruhepols befinden sich unterschiedliche Feldtypen, die den Spielverlauf bestimmen. Je nachdem, auf welchem Spielfeld du landest, ergeben sich unterschiedliche Aktionen und Effekte.'}
       ]
      },
      {label:'Harmonie & Ärgernis Karte', ey:'Kartenfeld', ttl:'Harmonie & Ärgernis',
       lead:'Harmonie- und Ärgerniskarten bilden den Kern des Spiels. Sie spiegeln alltägliche Situationen wieder und beeinflussen deine Harmoniepunkte.',
       img:'Grafik_Anleitung_Harmonie.png',
       body:[
         {head:'Ziehen & Wirkung', text:'Landest du auf einem dieser Felder, ziehst du eine Karte vom gemischten Stapel. Je nach Karte erhältst oder verlierst du Harmoniepunkte (Harmoniejetons), die sofort verrechnet werden.'},
         {head:'', text:'Betrifft die gezogene Karte deine Persona nicht, wird sie im Uhrzeigersinn an den nächsten passenden Spieler weitergegeben (z.B. wenn deine Persona kein Auto fährt)'},
         {head:'', text:'Im Kartenstapel befinden sich auch Hardcore-Ärgerniskarten mit besonders starken Auswirkungen. Diese werden nach dem Ziehen aus dem Spiel entfernt.'},
         {head:'Besonderheiten', text:'Nachdem die Karte angewendet wurde, wird sie abgelegt. Sind keine Karten mehr im Stapel, wird dieser neu gemischt.'}
       ]
      },
      {label:'Ritual Karte', ey:'Kartenfeld', ttl:'Ritual',
       lead:'Ritualkarten bringen Bewegung ins Spiel und fordern dich und die Mitspieler auf unterschiedliche Weise heraus.',
       img:'Grafik_Anleitung_Ritualfeld.png',
       caption:'Achte auf die Zeit!',
       body:[
         {head:'Ziehen & Ausführen', text:'Landest du auf einem Ritualkartenfeld, ziehst du eine Ritualkarte und führst die darauf beschriebene Aufgabe aus. Die Aufgaben müssen je nach Karte alleine, zu zweit oder in der Gruppe durchgeführt werden.'},
         {head:'', text:'Einige Aufgaben sind zeitlich begrenzt. In diesem Fall läuft die Sanduhr. Schaffst du die Aufgabe innerhalb der Zeit, erhältst du die entsprechenden Harmoniepunkte, andernfalls gehst du leer aus.'},
         {head:'Besonderheiten', text:'Bei Gruppenaufgaben erhalten alle Spieler Punkte, vorausgesetzt die Aufgabe wurde erfolgreich erfüllt – unabhängig davon, wer die Karte gezogen hat. Achte dabei auf die Hinweise auf den Karten.'}
       ]
      },
      {label:'Bonus Karte', ey:'Kartenfeld', ttl:'Bonus',
       lead:'Bonuskarten erweitern deine Möglichkeiten im Spiel und geben deiner gezogenen Persona Vorteile in bestimmten Situationen.',
       img:'Grafik_Anleitung_Bonusfeld.png',
       body:[
         {head:'Erwerb & Nutzung', text:'Landest du auf einem Bonusfeld, kannst du eine zusätzliche Bonuskarte erwerben. Dafür gibst du fünf Harmoniepunkte ab. Du entscheidest selbst, ob du die Karte kaufen möchtest oder ohne Kauf weiterspielst.'},
         {head:'', text:'Ziehst du eine Bonuskarte, behältst du sie vor dir. Sie gibt deiner Persona Vorteile in bestimmten Kategorien, erkennbar an den Symbolen auf den Karten. Ziehst du später eine passende Harmonie- oder Ärgerniskarte, wird der Punktewert deiner Bonuskarte entsprechend dazu gezählt oder abgezogen.'},
         {head:'Besitz & Notfall', text:'Du kannst während des Spielverlaufs mehrere Bonuskarten besitzen. Während des Risikomodus sind Bonuskarten inaktiv.'},
         {head:'', text:'Gerätst du ins Burnout, kannst du eine Bonuskarte an einen Mitspieler verkaufen und erhältst fünf Punkte zum Ausgleich. Findet sich kein Käufer, kannst du die Karte ablegen und erhältst als Gegenleistung ebenfalls fünf Harmoniejetons.'}
       ]
      },
      {label:'Ereignis', ey:'Spielfeld', ttl:'Ereignis',
       lead:'Ereignisfelder bringen Abwechslung ins Spiel und beeinflussen deine Bewegung auf dem Spielfeld. Sie zeigen typische Alltagssituationen, die je nach Persona unterschiedlich wirken.',
       img:'Grafik_Anleitung_Ereignisfeld.png',
       body:[
         {head:'Auslösen & Wirkung', text:'Landest du auf einem Ereignisfeld, wird das Ereignis direkt auf dem Spielfeld ausgelöst. Es wird keine Karte gezogen.'},
         {head:'', text:'Ereignisse verändern keine Harmoniepunkte, sondern beeinflussen deine Bewegung auf dem Spielfeld. Ob du vorwärts gehst, zurück musst oder am Feld stehen bleibst, hängt von den Eigenschaften deiner Persona ab.'},
         {head:'Beispiel', text:'Plötzlich beginnt es stark zu regnen. Nutzt deine Persona ein Fahrrad oder ist zu Fuß unterwegs, musst du Felder zurückgehen. Befindest du dich im Auto, hat das Ereignis keine Auswirkung.'}
       ]
      },
      {label:'Risikomodus', ey:'Modus', ttl:'Risiko',
       lead:'Der Risikomodus verändert den Spielverlauf und stellt dich vor eine bewusste Entscheidung zwischen Sicherheit und Risiko.',
       img:'Grafik_Anleitung_Risikozone.png',
       body:[
         {head:'Aktivierung & Wirkung', text:'Überquerst du die Risikolinie, entscheidest du dich, ob du den risikoreichen Modus aktivierst oder im normalen Spielmodus bleibst. Diese Entscheidung gilt bis zur markierten Endlinie.'},
         {head:'', text:'Im Risikomodus werden alle gezogenen Karten doppelt gewertet, sowohl positive als auch negative Effekte.'},
         {head:'Besonderheiten', text:'Der Risikomodus gilt auch für Aufgaben, die durch Ritualkarten ausgelöst werden. Dies gilt ebenfalls für Gruppenaufgaben, die von Mitspielern ausgelöst werden.'}
       ]
      },
      {label:'Burnout', ey:'Modus', ttl:'Burnout',
       lead:'Burnout unterbricht deinen Spielfluss und bringt dich kurz aus der Balance, bevor du erneut ins Spiel zurückkehrst.',
       img:'Grafik_Anleitung_Burnout.png',
       body:[
         {head:'Auslösen & Wirkung', text:'Sind deine Harmoniejetons während des Spiels aufgebraucht, gerätst du ins Burnout. Bevor es dazu kommt, kannst du Bonuskarten zum Ausgleich einsetzen oder verkaufen.'},
         {head:'', text:'Im Burnout kehrst du sofort zum Burnoutfeld im Zentrum des Spielfelds zurück und setzt eine Runde aus.'},
         {head:'', text:'Anschließend kehrst du zum Startfeld zurück und erhältst zwei Harmoniejetons, um wieder ins Spiel einzusteigen.'},
         {head:'Besonderheiten', text:'Auch im Burnout kannst du weiterhin an Gruppenaufgaben teilnehmen, wenn diese durch Ritualkarten ausgelöst werden. So bleibst du trotz Pause in das Spielgeschehen eingebunden.'}
       ]
      },
    ]
  },
  ablauf:{
    eyebrow:'Kapitel 05', titel:'Spiel', sub:'Ablauf',
    sections:[
      {label:'Spielbeginn', ey:'Spiel', ttl:'Beginn',
       lead:'Nachdem alle Spieler vorbereitet wurden, beginnt das Spiel mit der ersten gemeinsamen Runde.',
       img:'Grafik_Anleitung_Spiel-beginn.png',
       body:[
         {head:'Runden festlegen', text:'Legt vor dem Spielbeginn gemeinsam fest, wie viele Runden gespielt werden. Eine Runde entspricht einer vollständigen Umrundung der Unendlichkeitsschleife.'},
         {head:'Harmoniepunkte vorbereiten', text:'Anschließend nimmt sich jeder Spieler entsprechend seiner Personakarte die vorgegebene Anzahl an Harmoniejetons. Die Jetons werden in der persönlichen Ablageschiene vor dem Spieler abgelegt.'},
         {head:'Startposition', text:'Zu Beginn befinden sich alle Spielfiguren im Kreuzungspunkt in der Mitte des Spielfelds. Dieser Bereich wird im weiteren Verlauf zur Burnout-Zone umgewandelt.'},
         {head:'', text:'Das Feld mit der Kennzeichnung „Start" gilt als erstes Feld und gibt die Laufrichtung vor.'}
       ]
      },
      {label:'Erster Zug', ey:'Erster', ttl:'Spielzug',
       lead:'Jeder Spielzug folgt einem Ablauf der sich immer wiederholt und bestimmt, wie du dich durch das Spielfeld bewegst.',
       img:'Grafik_Anleitung_Erster-Zug.png',
       body:[
         {head:'Bewegen', text:'Das Spiel verläuft reihum im Uhrzeigersinn. Jeder Spielzug folgt dabei dem gleichen Ablauf. Zuerst würfelst du und bewegst danach deine Spielfigur entsprechend der Zahl auf dem Würfel entlang der vorgegebenen Laufrichtung auf dem Spielfeld.'},
         {head:'Feldaktion ausführen', text:'Anschließend führst du die Aktion des Feldes aus, auf dem du gelandet bist. Je nach Feld ziehst du eine Karte, führst ein Ritual aus oder löst ein Ereignis aus.'},
         {head:'Ruhepol erreichen', text:'Das Spiel läuft so lange weiter, bis die zuvor festgelegte Rundenzahl beendet wurde und der erste Spieler den Ruhepol erreicht hat. Um den Ruhepol zu erreichen, ist keine exakte Würfelzahl erforderlich. Sobald du das letzte Feld vor dem Startfeld erreichst oder überschreitest, gilt diese Spielrunde für dich als abgeschlossen.'},
         {head:'', text:'Anschließend stellst du deine Spielfigur zurück in den Kreuzungspunkt in der Mitte des Spielfelds und wartest dort auf die übrigen Mitspieler.'}
       ]
      },
      {label:'Spiel Ende', ey:'Spiel', ttl:'Ende',
       lead:'Das Spiel endet, sobald die festgelegte Rundenzahl abgeschlossen wurde und die ersten Spieler den Ruhepol erreicht haben.',
       img:'Grafik_Anleitung_Spiel-Ende.png',
       body:[
         {head:'Ruhepol erreichen', text:'Sobald der erste Spieler den Ruhepol erreicht, bleibt seine Spielfigur im Zentrum des Spielfelds stehen und er erhält als Bonus zwei zusätzliche Harmoniepunkte.'},
         {head:'', text:'Die Runde läuft weiter, bis auch der zweite Spieler den Ruhepol erreicht hat. Erst danach endet das Spiel.'},
         {head:'Punkte zählen', text:'Nach dem Spielende zählen alle Spieler ihre verbleibenden Harmoniejetons. Zusätzlich dürfen Bonuskarten mitgezählt werden. Jede Bonuskarte entspricht dabei fünf zusätzlichen Harmoniepunkten.'},
         {head:'', text:'Gewonnen hat der Spieler mit den meisten Harmoniepunkten. Bei Gleichstand endet das Spiel mit einem gemeinsamen Sieg.'}
       ]
      }
    ]
  }
};

// Volltext-Suchindex
function _txt(v){
  if(!v)return'';
  if(Array.isArray(v))return v.map(b=>typeof b==='string'?b:(b.text||'')+' '+(b.head||'')).join(' ');
  return String(v);
}
function _strip(html){return html.replace(/<[^>]*>/g,' ').replace(/\s+/g,' ').trim();}

const searchIndex=[];
Object.entries(chapters).forEach(([k,ch])=>{
  ch.sections.forEach((s,i)=>{
    const stepsText=(s.steps||[]).map(st=>_strip(st.t||'')).join(' ');
    const bodyText=_txt(s.body);
    const fullText=[s.label,s.ttl,s.ey,s.lead,bodyText,stepsText,s.warn||'',_strip(s.extra||'')].join(' ');
    searchIndex.push({
      chapter:k,
      chLabel:ch.titel+' '+ch.sub,
      sectionTitle:(s.ttl&&s.ey)?s.ey+' '+s.ttl:s.label,
      full:fullText.toLowerCase(),
      idx:i
    });
  });
});

function _snippet(full,q){
  const pos=full.indexOf(q);
  if(pos<0)return'';
  const start=Math.max(0,pos-28);
  const end=Math.min(full.length,pos+q.length+40);
  let snip=full.slice(start,end).trim();
  if(start>0)snip='…'+snip;
  if(end<full.length)snip+=snip+'…';
  const safe=snip.replace(/</g,'&lt;');
  const re=new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'),'gi');
  return safe.replace(re,m=>`<mark>${m}</mark>`);
}

const sinput=document.getElementById('searchInput');
const sresults=document.getElementById('searchResults');
const squickNav=document.getElementById('quickNav');
const swrap=document.getElementById('searchWrap');
function _clearSearch(){
  sresults.classList.remove('visible');
  swrap&&swrap.classList.remove('has-results');
  squickNav&&squickNav.classList.remove('search-hidden');
}
sinput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  sresults.innerHTML='';
  if(q.length<2){_clearSearch();return;}
  const hits=searchIndex.filter(x=>x.full.includes(q)).slice(0,6);
  if(!hits.length){_clearSearch();return;}
  hits.forEach(h=>{
    const d=document.createElement('div');d.className='sri';
    d.innerHTML=`<span class="sri-ch">${h.chLabel}</span><span class="sri-t">${h.sectionTitle}</span>`;
    d.onclick=()=>{sinput.value='';_clearSearch();openChapter(h.chapter,h.idx);};
    sresults.appendChild(d);
  });
  sresults.classList.add('visible');
  swrap&&swrap.classList.add('has-results');
  squickNav&&squickNav.classList.add('search-hidden');
});
document.addEventListener('click',e=>{
  if(!e.target.closest('.search-wrap')){_clearSearch();}
});

let _chId='';
let _mechIdx=0;
let _scrollPos=0;
let _chapterOpen=false;

function buildChapterCard(s){
  let html='';
  if(s.steps) s.steps.forEach(st=>html+=`<div class="step-row"><div class="step-c">${st.n}</div><div class="step-t">${st.t}</div></div>`);
  if(s.warn) html+=`<div class="warn">${s.warn}</div>`;
  if(s.img) html+=`<img src="media/${encodeURIComponent(s.img)}" alt="${s.ttl||s.label}">`;
  if(s.caption) html+=`<p class="mech-img-caption">${s.caption}</p>`;
  return html;
}

function buildChapterBody(s){
  if(!s.body||!s.body.length)return'';
  if(typeof s.body[0]==='string'){
    return s.body.map(b=>`<p class="cv-body-t">${b}</p>`).join('');
  }
  return s.body.map(b=>`${b.head?`<p class="mech-body-head">${b.head}</p>`:''}<p class="cv-body-t">${b.text}</p>`).join('');
}

function chSelect(id,idx){
  const ch=chapters[id];
  const sections=ch.sections;
  if(idx<0||idx>=sections.length)return;
  _chId=id;_mechIdx=idx;
  const s=sections[idx];
  const ey=document.getElementById('mechEy');
  const ttl=document.getElementById('mechTtl');
  const lead=document.getElementById('mechLead');
  if(ey)ey.textContent=s.ey||ch.eyebrow;
  if(ttl)ttl.textContent=s.ttl||s.label;
  if(lead){lead.textContent=s.lead||'';lead.style.display=s.lead?'':'none';}
  document.querySelectorAll('.mech-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  const extraEl=document.getElementById('mechExtra');
  if(extraEl){
    if(s.extra){extraEl.style.display='';extraEl.classList.remove('mech-fade');void extraEl.offsetWidth;extraEl.innerHTML=s.extra;extraEl.classList.add('mech-fade');}
    else extraEl.style.display='none';
  }
  const cardHtml=buildChapterCard(s);
  const card=document.getElementById('mechCard');
  if(card){
    if(cardHtml){card.style.display='';card.classList.remove('mech-fade');void card.offsetWidth;card.innerHTML=cardHtml;card.classList.add('mech-fade');}
    else card.style.display='none';
  }
  const bodyHtml=buildChapterBody(s);
  const body=document.getElementById('mechBody');
  if(body){
    if(bodyHtml){body.style.display='';body.classList.remove('mech-fade');void body.offsetWidth;body.innerHTML=bodyHtml;body.classList.add('mech-fade');}
    else body.style.display='none';
  }
  const wz=document.querySelector('.mech-white-zone');
  if(wz)wz.classList.toggle('no-card',!cardHtml);
}

function openChapter(id,startIdx){
  const _wasOpen=_chapterOpen;
  const cvContent=document.getElementById('cvContent');
  if(_wasOpen)cvContent.classList.add('cv-switching');
  const ch=chapters[id];
  const n=ch.sections.length;
  const si=startIdx||0;
  const s0=ch.sections[si];
  const cardHtml=buildChapterCard(s0);
  const bodyHtml=buildChapterBody(s0);
  const dots=n>1?Array.from({length:n},(_,i)=>
    `<span class="mech-dot${i===si?' active':''}" onclick="chSelect('${id}',${i})"></span>`
  ).join(''):'';
  const html=`<div class="mech-view">
    <div class="mech-header">
      <img class="mech-header-img" src="media/Verlauf%20Unterseiten.png" alt="">
      <button class="mech-back-btn" onclick="closeChapter()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><path d="M15 18l-6-6 6-6"/></svg>
      </button>
      <button class="mech-burger-btn" onclick="toggleShMenu()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="16" height="16"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="13" x2="21" y2="13"/><line x1="3" y1="19" x2="21" y2="19"/></svg>
      </button>
      <span class="mech-cat-vert"><span class="cat-regular">${ch.titel} </span><span class="cat-bold">${ch.sub}</span></span>
    </div>
    <div class="mech-title-area">
      <p class="mech-ey" id="mechEy">${s0.ey||ch.eyebrow}</p>
      <h1 class="mech-ttl" id="mechTtl">${s0.ttl||s0.label}</h1>
      <p class="mech-lead-txt" id="mechLead"${!s0.lead?' style="display:none"':''}>${s0.lead||''}</p>
    </div>
    ${n>1?`<div class="mech-nav">
      <div class="mech-dots" id="mechDots">${dots}</div>
      <span class="mech-nav-hint">Auf die Punkte tippen um die Seite zu wechseln</span>
    </div>`:''}
    <div class="mech-white-zone${!cardHtml?' no-card':''}">
      <div class="ch-extra mech-fade" id="mechExtra"${!s0.extra?' style="display:none"':''}>${s0.extra||''}</div>
      <div class="mech-img-wrap mech-fade" id="mechCard"${!cardHtml?' style="display:none"':''}>${cardHtml}</div>
      <div class="mech-body mech-fade" id="mechBody"${!bodyHtml?' style="display:none"':''}>${bodyHtml}</div>
      <div class="mech-imp-wrap">
        <img class="mech-imp-bg" src="media/Verlauf%20Impressum.png" alt="">
      </div>
      <div class="mech-imp-text">
        <p>© 2026 Infinitas</p>
        <p>Spielkonzept, Gestaltung und Spielsystem: Holzleitner Moritz</p>
        <p>Infinitas ist ein fiktives Spielkonzept im Rahmen eines Designprojekts. Die Ereignisse auf den Karten basieren auf einer Umfrage während des Entstehungsprozesses und wurden teilweise überarbeitet oder fiktiv erweitert. Texte mit Unterstützung von ChatGPT überarbeitet.</p>
        <p>Alle Rechte vorbehalten. Nachdruck, Vervielfältigung oder Veröffentlichung – auch auszugsweise – nur mit schriftlicher Genehmigung.</p>

        <p>Version 1.0 – INF-01-2026</p>
      </div>
    </div>
  </div>`;
  _scrollPos=window.scrollY;
  _chId=id;
  _mechIdx=si;
  // Erst alle DOM-/Color-Änderungen, dann pushState:
  // So sieht iOS beim pushState-Snapshot bereits den hellen Hintergrund
  _hideScrollHeader(true);
  document.body.classList.add('mech-page');
  document.querySelector('meta[name="theme-color"]').content='#E2EAF6';
  document.querySelector('meta[name="color-scheme"]').content='light';
  document.documentElement.classList.add('mech-page-html');
  const _guard=document.getElementById('mechChromeGuard');
  _guard.style.background='var(--mech-bg)';
  _guard.style.display='block';
  if(window.innerWidth<600){const _tb=document.getElementById('chapterTopBar');if(_tb)_tb.style.display='block';}
  history.pushState({chapter:id},'','#'+id);
  cvContent.innerHTML=html;
  requestAnimationFrame(()=>requestAnimationFrame(()=>cvContent.classList.remove('cv-switching')));
  document.getElementById('chapterView').classList.add('open','mech-open');
  document.getElementById('main').style.display='none';
  if(_shTitle)_shTitle.textContent=ch.titel+' '+ch.sub;
  _chapterOpen=true;
  _shLastY=0;
  _cvEl.scrollTop=0;
  window.scrollTo(0,0);
  let _swipeX=0,_swipeY=0;
  const _view=document.querySelector('.mech-view');
  if(_view){
    _view.addEventListener('touchstart',e=>{
      _swipeX=e.touches[0].clientX;
      _swipeY=e.touches[0].clientY;
    },{passive:true});
    _view.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-_swipeX;
      const dy=e.changedTouches[0].clientY-_swipeY;
      if(Math.abs(dx)<Math.abs(dy))return; // vertikales scrollen ignorieren
      if(dx>60&&_swipeX<60){closeChapter();return;} // edge-swipe → zurück
      if(Math.abs(dx)>44)chSelect(_chId,_mechIdx+(dx<0?1:-1));
    },{passive:true});
  }
}

let _skipPopstate=false;
function closeChapter(fromPopstate=false){
  if(!_chapterOpen)return;
  _chapterOpen=false;
  _hideScrollHeader(true); // sofort, kein 0.32s-Slide der hellblauen Leiste
  document.querySelector('meta[name="theme-color"]').content='#38396D';
  document.querySelector('meta[name="color-scheme"]').content='dark';
  document.documentElement.classList.remove('mech-page-html');
  document.body.classList.remove('mech-page');
  const _g=document.getElementById('mechChromeGuard');
  const _tb=document.getElementById('chapterTopBar');
  if(_tb)_tb.style.display='none';
  if(window.innerWidth<600){_g.style.background='var(--navy-deep)';}
  else{_g.style.display='none';}
  // rAF: Browser soll erst den dunklen State compositen, bevor history.back() den Snapshot nimmt
  if(!fromPopstate){
    requestAnimationFrame(()=>{_skipPopstate=true;history.back();});
  }else{history.replaceState(null,'',location.pathname);}
  const cv=document.getElementById('chapterView');
  if(window.innerWidth<600){
    // Mobile: sofort schließen, damit iOS den dunklen Hintergrund sofort liest
    cv.classList.remove('open','mech-open');
    // Frame 1: Kapitel weg, main noch hidden → nur body/guard (dunkel) sichtbar → iOS liest dunkel
    requestAnimationFrame(()=>{
      document.getElementById('main').style.display='';
      document.documentElement.style.scrollBehavior='auto';
      window.scrollTo(0,_scrollPos);
      // Frame 2+: Scroll-Event als weiterer Trigger
      requestAnimationFrame(()=>{
        window.scrollBy(0,1);
        requestAnimationFrame(()=>{
          window.scrollBy(0,-1);
          requestAnimationFrame(()=>{ document.documentElement.style.scrollBehavior=''; });
        });
      });
    });
  }else{
    cv.style.animation='cvClose 0.3s ease-in forwards';
    cv.style.pointerEvents='none';
    setTimeout(()=>{
      cv.style.animation='';
      cv.style.pointerEvents='';
      cv.classList.remove('open','mech-open');
      document.getElementById('main').style.display='';
      window.scrollTo(0,_scrollPos);
    },300);
  }
}
window.addEventListener('popstate',()=>{
  if(_skipPopstate){_skipPopstate=false;return;}
  if(_chapterOpen)closeChapter(true);
});

// ── SCROLL HEADER ──
const _sh=document.getElementById('cvScrollHeader');
const _shTitle=document.getElementById('cvScrollTitle');
const _cvEl=document.getElementById('chapterView');
let _shLastY=0;
let _menuExpandedCh=null,_menuSearchQuery='';

function _hideScrollHeader(instant=false){
  if(_sh){
    if(instant){
      // display:none zerstört den GPU-Compositing-Layer dauerhaft
      // (keine sofortige Wiederherstellung – wird erst beim nächsten Einblenden restored)
      _sh.style.display='none';
      _sh.style.transition='';
      _sh.style.transform='';
      _sh.classList.remove('sh-visible','sh-menu-open','sh-no-back');
    }else{
      _sh.classList.remove('sh-visible','sh-menu-open','sh-no-back');
    }
  }
  _menuSearchQuery='';
}
function _showScrollHeader(){
  if(_sh){
    _sh.style.display='';
  }
}

function _buildChapterNav(){
  const isHome=!_chapterOpen;
  let html=`<button class="cv-sh-item" onclick="${isHome?'closeShMenu()':'shGoHome()'}"><span class="cv-sh-home-lbl">Startseite</span></button>`;
  const order=['übersicht','aufbau','ablauf','mechanik'];
  order.forEach(key=>{
    const ch=chapters[key];
    const isActiveCh=key===_chId;
    const isExpanded=key===_menuExpandedCh;
    const hasSub=ch.sections.length>1;
    const arr=hasSub?`<svg class="cv-sh-ch-arr${isExpanded?' expanded':''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M9 18l6-6-6-6"/></svg>`:'';
    html+=`<button class="cv-sh-item" onclick="shMenuChClick('${key}')"><span class="cv-sh-item-lbl">${ch.sub}</span>${arr}</button>`;
    if(hasSub&&isExpanded){
      ch.sections.forEach((s,i)=>{
        const cur=isActiveCh&&i===_mechIdx;
        html+=`<button class="cv-sh-sec-item${cur?' sh-item-active':''}" onclick="shSecSelect('${key}',${i})"><span class="cv-sh-sec-dot"></span><span class="cv-sh-sec-lbl">${s.label}</span></button>`;
      });
    }
  });
  return html;
}

function _buildSearchResults(q){
  const ql=q.toLowerCase();
  let html='';
  ['übersicht','aufbau','ablauf','mechanik'].forEach(key=>{
    const ch=chapters[key];
    ch.sections.forEach((s,i)=>{
      if([(s.label||''),(s.ttl||''),(s.lead||'')].some(t=>t.toLowerCase().includes(ql))){
        const cur=key===_chId&&i===_mechIdx;
        html+=`<button class="cv-sh-sec-item${cur?' sh-item-active':''}" onclick="shSecSelect('${key}',${i})"><span class="cv-sh-sec-dot"></span><div><span class="cv-sh-sec-lbl">${s.label||s.ttl}</span><span class="cv-sh-sec-ch">Spiel ${ch.sub}</span></div></button>`;
      }
    });
  });
  return html||`<p class="cv-sh-no-results">Keine Ergebnisse</p>`;
}

function _renderShMenu(){
  const menu=document.getElementById('cvShMenu');
  if(!menu)return;
  const q=_menuSearchQuery;
  menu.innerHTML=`<div class="cv-sh-search-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="14" height="14"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35"/></svg><input class="cv-sh-search-input" id="cvShSearchInput" type="text" placeholder="Suchen …" autocomplete="off" oninput="onShSearch(this.value)" value="${q.replace(/"/g,'&quot;')}"></div><div id="cvShNavContent">${q?_buildSearchResults(q):_buildChapterNav()}</div>`;
}

function onShSearch(q){
  _menuSearchQuery=q;
  const nav=document.getElementById('cvShNavContent');
  if(nav)nav.innerHTML=q?_buildSearchResults(q):_buildChapterNav();
}

function toggleShMenu(){
  const open=_sh.classList.toggle('sh-menu-open');
  if(!open){
    _menuSearchQuery='';
    _menuExpandedCh=null;
    // Auf Startseite oder wenn nicht gescrollt: komplett aus dem Compositing-Tree
    if(!_chapterOpen||(window.scrollY||_cvEl.scrollTop)<60)_hideScrollHeader(true);
    return;
  }
  _showScrollHeader();_sh.classList.add('sh-visible');
  if(!_chapterOpen){if(_shTitle)_shTitle.textContent='Spiel Einführung';_sh.classList.add('sh-no-back');}else{_sh.classList.remove('sh-no-back');}
  
  _menuExpandedCh=null;
  _menuSearchQuery='';
  _renderShMenu();
}

function closeShMenu(){
  _sh.classList.remove('sh-menu-open');
  _menuSearchQuery='';
  _menuExpandedCh=null;

  if(!_chapterOpen||(window.scrollY||_cvEl.scrollTop)<60)_hideScrollHeader(true);
}

function handleBackBtn(){
  if(_chapterOpen){closeChapter();}else{closeShMenu();}
}

function shMenuChClick(id){
  if(chapters[id].sections.length<=1){shMenuSelect(id);return;}
  _menuExpandedCh=(_menuExpandedCh===id)?null:id;
  const nav=document.getElementById('cvShNavContent');
  if(nav)nav.innerHTML=_buildChapterNav();
}

function shMenuSelect(id){
  closeShMenu();
  openChapter(id);
}

function shGoHome(){
  closeShMenu();
  closeChapter();
}

function shSecSelect(chId,idx){
  closeShMenu();
  if(chId===_chId){chSelect(chId,idx);}else{openChapter(chId,idx);}
}
function _onChapterScroll(){
  if(!_chapterOpen)return;
  const y=window.scrollY||_cvEl.scrollTop;
  if(_sh&&_sh.classList.contains('sh-menu-open')&&y>_shLastY){
    _sh.classList.remove('sh-menu-open');
    _menuExpandedCh=null;_menuSearchQuery='';

  }
  if(y>80){if(_sh){_showScrollHeader();_sh.classList.add('sh-visible');}}
  else if(y<60)_hideScrollHeader(true);
  _shLastY=y;
}
_cvEl.addEventListener('scroll',_onChapterScroll,{passive:true});
window.addEventListener('scroll',_onChapterScroll,{passive:true});

// Close menu when tapping outside the scroll header
function _isOutsideMenu(t){if(!t.isConnected)return false;return _sh&&!_sh.contains(t)&&!t.closest('#mainBurger,.mech-burger-btn');}
document.addEventListener('touchstart',e=>{if(_sh&&_sh.classList.contains('sh-menu-open')&&_isOutsideMenu(e.target))closeShMenu();},{passive:true});
document.addEventListener('click',e=>{if(_sh&&_sh.classList.contains('sh-menu-open')&&_isOutsideMenu(e.target))closeShMenu();});

// INTRO
const intro=document.getElementById('intro');
const eight=document.getElementById('introEight');
const mainEl=document.getElementById('main');
const _initHash=decodeURIComponent(location.hash.slice(1));

function _showMainInstant(){
  intro.style.display='none';
  mainEl.classList.add('visible');
  ['heroLogo','searchWrap','quickNav','scrollHint'].forEach(id=>document.getElementById(id)?.classList.add('show'));
}

// Auf Mobile: Guard immer sichtbar (dunkelblau) damit iOS 26 Glass-Farbe korrekt liest
if(window.innerWidth<600){
  const _mg=document.getElementById('mechChromeGuard');
  _mg.style.background='var(--navy-deep)';
  _mg.style.display='block';
}

// BFCache restore (Safari back-swipe that hits the cache)
window.addEventListener('pageshow',e=>{if(e.persisted)_showMainInstant();});

const _introSeen=sessionStorage.getItem('introSeen');
if(_initHash&&chapters[_initHash]){
  _showMainInstant();
  history.replaceState(null,'',location.pathname);
  openChapter(_initHash);
}else if(_introSeen){
  // already played once this session — skip straight to main
  _showMainInstant();
}else{
  sessionStorage.setItem('introSeen','1');
  setTimeout(()=>{
    eight.classList.add('zoom');
    setTimeout(()=>{
      intro.classList.add('fade-out');
      mainEl.classList.add('visible');
      setTimeout(()=>{
        intro.style.display='none';
        ['heroLogo','searchWrap','quickNav','scrollHint'].forEach(id=>document.getElementById(id)?.classList.add('show'));
      },650);
    },850);
  },1400);
}

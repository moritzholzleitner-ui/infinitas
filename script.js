
let _arOpen=false;
let _personaOpen=false;

// ── PERSONAS DATA ──
let _personaIdx=0;

const personas=[
  {
    id:'alle',
    eyebrow:'Wir. Alle. Du.',
    role:'Wir. Alle.',
    name:'Du.',
    menuLabel:'Die Top Acht!',
    lead:'Verschiedene Leben, verschiedene Wege<br>und doch stehen wir alle im selben Aufzug.',
    portrait:'Alle Perona.png',
    desc:'<span class="persona-desc-h">Acht Menschen. Acht Alltage.</span>Fritz hat endlich Zeit. Tony zählt seine Schritte. Gottfried hat drei Meetings zu viel. Hildegard denkt an ihre Pflanzen. Gertrude kennt jede Wohnung in der Stadt. Elfriede weiß noch nicht was sie will. Herbert zählt die Stunden bis Feierabend. Und Roswitha atmet einfach tief durch.<span class="persona-desc-h">Unendlich viele Momente.</span>Platte Reifen, herzlose Busfahrer, warmes Brot vom Bäcker, ein zufälliges Wiedersehen auf der Straße. Die kleinen Dinge des Alltags die uns alle verbinden – egal wer wir sind, wo wir wohnen oder was wir machen.<span class="persona-desc-h">Einer von uns.</span>Irgendwo zwischen Ärgernis und Harmonie steckst auch du. Vielleicht bist du ein Fritz. Vielleicht ein Tony. Vielleicht ein bisschen von allem.<span class="persona-desc-h">Infinitas – weil der Alltag<br>uns alle verbindet.</span>',
    stats:[],
    events:[]
  },
  {
    id:'fritz',
    eyebrow:'Persona 01',
    role:'Pensionist',
    name:'Fritz',
    lead:'Er hat endlich Zeit für alles –<br>außer für Stress.',
    portrait:'fritz Illustrationen-09.png',
    desc:'Er hat endlich Zeit. Für alles. Den Kaffee, die Zeitung, den Nachbarn der eigentlich nur kurz vorbeikommen wollte. Fritz ärgert sich selten – und wenn, dann nur kurz. Er hat schließlich gelernt, dass das Leben zu kurz ist um sich über platte Reifen aufzuregen. Meistens zumindest.',
    stats:[
      {label:'Basis Harmonie',value:'7'},
      {label:'Alter',value:'74'},
      {label:'Lebenssituation',value:'Verheiratet'},
      {label:'Fortbewegung',value:'Fahrrad'}
    ],
    events:[
      {type:'img', src:'fritz Illustrationen-01.jpg'},
      {type:'text', title:'Wecker<br>Schlummern', lead:'Das Bett lässt Fritz einfach nicht los.\nDer Morgen beginnt entspannt,\nbis er merkt, dass er keine Zeit mehr\nfür Frühstück und Kaffee hat.', body:'Egal, ich bin sowieso in der Pension!'},
      {type:'img', src:'fritz Illustrationen-02.jpg', label:'Fritz am Weg!'},
      {type:'img', src:'fritz Illustrationen-03.jpg'},
      {type:'text', title:'Warmes<br>Brot', lead:'Fritz kauft frisches Brot beim Bäcker\nund merkt gleich, dass es noch warm ist.\nEr träumt schon vom Butterbrot\nmit frischer Kresse.'},
      {type:'img', src:'fritz Illustrationen-04.jpg'},
      {type:'text', title:'Platter<br>Reifen', lead:'Fritz will entspannt zum Einkaufen durch die Stadt\nund merkt plötzlich, dass nicht nur\nihm die Luft ausgeht, sondern\nauch seinem Reifen.'},
      {type:'img', src:'fritz Illustrationen-05.jpg'},
      {type:'text', title:'Zufälliges<br>Wiedersehen', lead:'Fritz trifft zufällig eine guten alte Freundin\nund plötzlich bleibt die Zeit stehen.\nManchmal braucht es eben nur ein\nbekanntes Gesicht um den Tag\nwieder besser zu machen.'},
      {type:'img', src:'fritz Illustrationen-06.jpg'},
      {type:'text', title:'Endlose<br>Kassenschlange', lead:'Fritz will nur schnell was im Supermarkt holen,\nund es ist Primetime in der Stadt.\nDie Schlange an der Kassa\ngeht bis zum Mond.'},
      {type:'img', src:'fritz Illustrationen-07.jpg'},
      {type:'text', title:'Kassa<br>Moment', lead:'Fritz hat nur wenige Sachen\nin der Hand. Die Person vor ihm\nlässt ihn ohne zu zögern vor.\nFritz freut sich über die kleine Geste.'},
      {type:'img', src:'fritz Illustrationen-08.jpg'},
      {type:'text', title:'Frisches<br>Bett', lead:'Fritz legt sich in sein frisch überzogenes Bett.\nAlles ist sauber und gemütlich.\nFritz schläft sofort tief und fest ein.'},
      {type:'img', src:'fritz Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Fritz!', lead:'Höhen und Tiefen – ganz normal.\nVerschlafen, platten Reifen,\nendlose Schlangen.\nAber auch warmes Brot,\nalte Freunde und frische Bettwäsche.\nFritz nimmt\'s gelassen.\nVielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'hildegard', eyebrow:'Persona 02', role:'Floristin', name:'Hildegard',
    lead:'Sie spricht lieber mit Pflanzen –<br>die hören wenigstens zu.',
    portrait:'hildegard Illustrationen-09.png',
    desc:'Sie redet lieber mit ihren Pflanzen als mit Menschen. Die Pflanzen hören zu, wachsen und beschweren sich nicht über den Preis. Ihre Rosen sind makellos. Ihr Geduldsfaden auch – solange niemand eine Tulpe als Lilie bezeichnet.',
    stats:[{label:'Basis Harmonie',value:'5'},{label:'Alter',value:'56'},{label:'Lebenssituation',value:'Verwitwet'},{label:'Fortbewegung',value:'Öffentlicher Verkehr'}],
    events:[
      {type:'img', src:'hildegard Illustrationen-01.jpg'},
      {type:'text', title:'Überfüllter<br>Zug', lead:'Hildegard steigt in den Zug, der wieder so voll ist, dass sie überlegt beim nächsten Mal einfach ihren eigenen Stuhl mitzunehmen.'},
      {type:'img', src:'hildegard Illustrationen-02.jpg'},
      {type:'text', title:'Pflanzen<br>Freude', lead:'Hildegard öffnet die Werkstatttür. Die Pflanzen haben den Winter überlebt. Alle. Sogar die schwierige Orchidee.', body:'Hildegard spricht kurz mit ihr. Nur zur Sicherheit.'},
      {type:'img', src:'hildegard Illustrationen-03.jpg'},
      {type:'text', title:'Drängel<br>Chaos', lead:'Hildegard will aus der U-Bahn aussteigen, aber beim Aussteigen drängen schon alle hinein, als gäbe es drinnen Gold zu gewinnen.', body:'Hildegard atmet tief durch. Die Pflanzen würden das nicht tun.'},
      {type:'img', src:'hildegard Illustrationen-04.jpg'},
      {type:'text', title:'Überraschungs<br>Blumen', lead:'Ein Kunde betritt das Geschäft und legt einen Strauß auf den Tresen – einfach so, als Dankeschön.', body:'Hildegard ist sprachlos. Das passiert selten.'},
      {type:'img', src:'hildegard Illustrationen-05.jpg'},
      {type:'text', title:'Cent<br>Zählung', lead:'Hildegard steht an der Kassa. Die Person vor ihr zählt jede einzelne Münze ab.', body:'Hildegard lernt Geduld auf eine ganz neue Art.'},
      {type:'img', src:'hildegard Illustrationen-06.jpg'},
      {type:'text', title:'Sonniger<br>Bahnsteig', lead:'Der Zug hat Verspätung. Hildegard stellt ihre Tasche ab und dreht einfach ihr Gesicht in die Sonne.', body:'Manchmal ist Warten gar nicht so schlimm.'},
      {type:'img', src:'hildegard Illustrationen-07.jpg'},
      {type:'text', title:'Schlüssel<br>Chaos', lead:'Hildegard steht vor ihrer Haustür und sucht ihren Schlüssel überall, nur nicht dort wo sie ihn „ganz sicher" hingelegt hat.'},
      {type:'img', src:'hildegard Illustrationen-08.jpg'},
      {type:'text', title:'Gemütlicher<br>Abend', lead:'Hildegard sitzt in ihrem Sessel. Draußen regnet es, drinnen ist es warm. Kaffee in der Hand, Buch auf dem Schoß.', body:'Kein Mensch. Keine Pflanze. Nur Ruhe.'},
      {type:'img', src:'hildegard Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Hildegard!', lead:'Überfüllte Züge, drängende Mitfahrer, verlegte Schlüssel. Aber auch blühende Orchideen, unerwartete Blumensträuße und ein stiller Abend im Sessel. Hildegard nimmt\'s gelassen. Vielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'tony', eyebrow:'Persona 03', role:'Fitnesstrainer', name:'Tony',
    lead:'Er joggt sogar zum Bäcker –<br>natürlich nur zum Aufwärmen.',
    portrait:'tony Illustrationen-09.png',
    desc:'Er joggt zum Bäcker. Zum Aufwärmen. Er trinkt keinen Kaffee, er optimiert seine Energiezufuhr. Er schläft nicht, er regeneriert. Tony ist eigentlich ganz nett – solange man nicht fragt warum er keinen Zucker isst.',
    stats:[{label:'Basis Harmonie',value:'6'},{label:'Alter',value:'29'},{label:'Lebenssituation',value:'Single'},{label:'Fortbewegung',value:'Fahrrad'}],
    events:[
      {type:'img', src:'tony Illustrationen-01.jpg'},
      {type:'text', title:'Knie<br>Schmerz', lead:'Beim Laufen bekommt Tony plötzlich Schmerzen\nund darf den Heimweg mit dem Bus antreten.', body:'Auch wir Fitnesstrainer sind nur Menschen.'},
      {type:'img', src:'tony Illustrationen-02.jpg', label:'Mist ... der Bus!'},
      {type:'img', src:'tony Illustrationen-03.jpg'},
      {type:'text', title:'Herzloser<br>Busfahrer', lead:'Tony sprintet zum Bus wie in einem schlechten Actionfilm,\nnur damit der Fahrer ihm direkt vor der Nase davonfährt.', body:'Perfektes Timing. Wieder mal.'},
      {type:'img', src:'tony Illustrationen-04.jpg'},
      {type:'text', title:'Musik<br>Moment', lead:'Tony steckt die Kopfhörer rein und lässt\nden herzlosen Busfahrer einfach hinter sich.\nManchmal ist der Fußweg nach Hause die beste Therapie.'},
      {type:'img', src:'tony Illustrationen-05.jpg'},
      {type:'text', title:'Bluetooth<br>Problem', lead:'Tony tritt nun den Heimweg zu Fuß an,\ner will gemütlich Musik hören und plötzlich ist es still,\ndas Handy war gerade noch verbunden,\naber jetzt will es einfach nicht mehr funktionieren.', body:'Natürlich.'},
      {type:'img', src:'tony Illustrationen-06.jpg'},
      {type:'text', title:'Terrassen<br>Kaffee', lead:'Tony sitzt draußen in der Sonne, Kaffee in der Hand,\nseine Freundin ihm gegenüber – sie reden und lachen,\ndie Zeit vergeht wie im Flug.', body:'Nach dem Tag hat Tony sich das verdient.'},
      {type:'img', src:'tony Illustrationen-07.jpg'},
      {type:'text', title:'Akku<br>Pech', lead:'Tony wollte sein Handy nehmen, aber das Kabel\nwar anscheinend nicht richtig eingesteckt.\nSchick angezogen, Date in zehn Minuten –\nund das Handy zeigt einen leeren Bildschirm.', body:'Natürlich.'},
      {type:'img', src:'tony Illustrationen-08.jpg'},
      {type:'text', title:'Serien<br>Abend', lead:'Tag geschafft. Couch verdient.\nSnacks bereit, Serie läuft, der Rest kann warten.', body:'Tony nimmt\'s gelassen.'},
      {type:'img', src:'tony Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Tony!', lead:'Höhen und Tiefen – auch im Training.\nVerpasste Busse, leere Akkus, schmerzende Knie.\nAber auch Kaffeepausen, entspannte Serienabende\nund kleine Erfolge zwischendurch.\nTony nimmt\'s gelassen. Vielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'gertrude', eyebrow:'Persona 04', role:'Maklerin', name:'Gertrude',
    lead:'Sie kennt jede Wohnung –<br>rein zufällig natürlich.',
    portrait:'gertrude Illustrationen-09.png',
    desc:'Sie kennt jede Wohnung in der Stadt. Zufällig natürlich. Sie lächelt immer, auch wenn sie innerlich schreit. Besonders wenn der Kunde zum siebten Mal fragt ob die Küche wirklich neu ist. Sie ist neu. Das Lächeln auch.',
    stats:[{label:'Basis Harmonie',value:'6'},{label:'Alter',value:'44'},{label:'Lebenssituation',value:'Geschieden'},{label:'Fortbewegung',value:'Auto'}],
    events:[
      {type:'img', src:'gertrude Illustrationen-01.jpg'},
      {type:'text', title:'Mopedauto<br>Schicksal', lead:'Gertrude ist auf dem Weg zur Besichtigung und fährt seit fünf Minuten hinter einem Mopedauto her.', body:'Sie fragt sich langsam ob sie zu Fuß schneller wäre.'},
      {type:'img', src:'gertrude Illustrationen-02.jpg'},
      {type:'text', title:'Sonnen<br>Moment', lead:'Gertrude hält kurz an, setzt ihre Sonnenbrille auf und dreht das Gesicht in die Sonne.', body:'Sie fühlt sich sofort wie im Urlaub.'},
      {type:'img', src:'gertrude Illustrationen-03.jpg'},
      {type:'text', title:'Regen<br>Schauer', lead:'Gertrude kommt aus der Besichtigung. Strahlender Sonnenschein beim Reingehen, Sintflut beim Rauskommen.', body:'Regenschirm natürlich im Auto.'},
      {type:'img', src:'gertrude Illustrationen-04.jpg'},
      {type:'text', title:'Vertrags<br>Abschluss', lead:'Gertrude legt den Stift auf den Tisch. Unterschrift. Handschlag. Fertig. Die Wohnung ist verkauft.', body:'Sie lächelt. Diesmal ehrlich.'},
      {type:'img', src:'gertrude Illustrationen-05.jpg'},
      {type:'text', title:'Unbekannter<br>Anrufer', lead:'Gertrudes Handy klingelt. Eine unbekannte Nummer. Sie hebt ab, niemand sagt etwas.', body:'Scheinbar ein sehr schüchterner Betrüger.'},
      {type:'img', src:'gertrude Illustrationen-06.jpg'},
      {type:'text', title:'Freundliches<br>Kompliment', lead:'Gertrude geht die Straße entlang und ein fremder Mensch macht ihr ein ehrliches Kompliment.', body:'Der ganze Tag fühlt sich sofort besser an.'},
      {type:'img', src:'gertrude Illustrationen-07.jpg'},
      {type:'text', title:'Cabrio<br>Regen', lead:'Gertrude hat das Verdeck offen gelassen. Es sah nach gutem Wetter aus.', body:'Es war kein gutes Wetter. Die Sitze sind komplett durchnässt.'},
      {type:'img', src:'gertrude Illustrationen-08.jpg'},
      {type:'text', title:'Musik<br>Moment', lead:'Gertrude sitzt im Auto. Lieblingssong im Radio, Lautstärke voll aufgedreht.', body:'Den Rest des Tages einfach vergessen.'},
      {type:'img', src:'gertrude Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Gertrude!', lead:'Mopedautos, Regenschauer und schüchterne Betrüger. Aber auch Sonnenbrillen-Momente, ehrliche Komplimente und der perfekte Song im Radio. Gertrude nimmt\'s gelassen. Vielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'gottfried', eyebrow:'Persona 05', role:'Berater', name:'Gottfried',
    lead:'Er hat für alles einen Termin –<br>sogar für seine Termine.',
    portrait:'gottfried Illustrationen-09.png',
    desc:'Sein Kalender ist sein Heiligtum. Er hat Termine für seine Termine und eine Erinnerung für seine Erinnerungen. Irgendwo zwischen Meeting und Deadline vergisst er manchmal zu atmen. Aber keine Sorge – das hat er auch eingeplant.',
    stats:[{label:'Basis Harmonie',value:'5'},{label:'Alter',value:'39'},{label:'Lebenssituation',value:'Verheiratet'},{label:'Fortbewegung',value:'Auto'}],
    events:[
      {type:'img', src:'gottfried Illustrationen-01.jpg'},
      {type:'text', title:'Ewige<br>Baustelle', lead:'Gottfried sitzt im Auto und schaut auf die Uhr, noch drei Minuten bis zum Meeting – die Baustelle sieht das offenbar anders.', body:'Sie existiert gefühlt schon länger als manche Beziehungen.'},
      {type:'img', src:'gottfried Illustrationen-02.jpg'},
      {type:'text', title:'Gutes<br>Feedback', lead:'Gottfried hat alles gegeben, die Präsentation sitzt perfekt und die Kollegen klatschen.', body:'Manchmal läuft es einfach.'},
      {type:'img', src:'gottfried Illustrationen-03.jpg'},
      {type:'text', title:'Parkplatz<br>Mythos', lead:'Gottfried fährt jetzt zum fünften Mal um den Block – der freie Parkplatz scheint eine urbane Legende zu sein.', body:'Er hat dafür extra früher aufgehört.'},
      {type:'img', src:'gottfried Illustrationen-04.jpg'},
      {type:'text', title:'Produktiver<br>Tag', lead:'Gottfried lehnt sich zurück – alles erledigt, alles auf der Liste abgehakt.', body:'Das Gefühl kennt er selten. Aber wenn, dann ist es gut.'},
      {type:'img', src:'gottfried Illustrationen-05.jpg'},
      {type:'text', title:'Update<br>Zeitpunkt', lead:'Gottfried wollte nur schnell etwas erledigen, da entscheidet sein Laptop, ausgerechnet jetzt ein Update zu starten.', body:'In fünf Minuten beginnt das nächste Meeting.'},
      {type:'img', src:'gottfried Illustrationen-06.jpg'},
      {type:'text', title:'Früher<br>Feierabend', lead:'Der letzte Termin fällt aus, Gottfried schaut ungläubig auf seine Uhr – plötzlich hat er Zeit.', body:'Er weiß kurz nicht, was er damit anfangen soll.'},
      {type:'img', src:'gottfried Illustrationen-07.jpg'},
      {type:'text', title:'Beobachtende<br>Blicke', lead:'Gottfried hat den Parkplatz endlich gefunden und natürlich schauen alle genau jetzt zu.', body:'Ausgerechnet heute läuft das Einparken überhaupt nicht gut.'},
      {type:'img', src:'gottfried Illustrationen-08.jpg'},
      {type:'text', title:'Feierabend<br>Getränk', lead:'Gottfried hält sein Glas Wein in der Hand – der Stau, das Update, die Blicke, alles ist auf einmal vergessen.', body:'Manchmal reicht ein einziger Moment, um den ganzen Tag zu retten.'},
      {type:'img', src:'gottfried Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Gottfried!', lead:'Höhen und Tiefen – auch im Büro. Ewige Baustellen, volle Kalender, kein Parkplatz in Sicht. Aber auch gutes Feedback, ein früher Feierabend und ein Glas Wein, das alles wieder gut macht. Gottfried nimmt\'s gelassen. Vielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'roswitha', eyebrow:'Persona 06', role:'Yogalehrerin', name:'Roswitha',
    lead:'Sie bleibt ruhig und nimmt<br>alles, wie es kommt.',
    portrait:'roswitha Illustrationen-09.png',
    desc:'Sie nimmt alles wie es kommt. Den Stau, den Regen, den Schüler der seit drei Monaten die Krieger-Pose falsch macht. Sie atmet tief durch. Immer. Manchmal fragt man sich ob sie überhaupt jemals gestresst ist. Sie ist es. Aber sehr entspannt dabei.',
    stats:[{label:'Basis Harmonie',value:'6'},{label:'Alter',value:'42'},{label:'Lebenssituation',value:'Lebt alleine'},{label:'Fortbewegung',value:'Zu Fuß / Auto'}],
    events:[
      {type:'img', src:'roswitha Illustrationen-01.jpg'},
      {type:'text', title:'Spaziergang<br>Falle', lead:'Roswitha ist mit ihrem Hund unterwegs, alles läuft entspannt – bis zu dem Moment wo sie merkt dass kein Sackerl in der Tasche ist.', body:'Roswitha atmet tief durch. Sehr tief.'},
      {type:'img', src:'roswitha Illustrationen-02.jpg'},
      {type:'text', title:'Frühlings<br>Luft', lead:'Roswitha tritt vor die Tür. Die warme Luft trifft sie sofort. Erster richtiger Frühlingstag.', body:'Sie schließt kurz die Augen und genießt jeden Atemzug.'},
      {type:'img', src:'roswitha Illustrationen-03.jpg'},
      {type:'text', title:'Ahnungsloser<br>Sprachassistent', lead:'Roswitha hat Teig an den Händen und will nur schnell einen Timer stellen. Der Sprachassistent versteht: „Spiele 80er Hits."', body:'Roswitha backt jetzt zu Bonnie Tyler.'},
      {type:'img', src:'roswitha Illustrationen-04.jpg', label:'Einfach mal nichts.', labelStyle:'left:50%;transform:translate(calc(-50% + 30px),-50%)'},
      {type:'text', title:'Kuschel<br>Teppich', lead:'Roswitha legt sich auf ihren Lieblingsteppich. Einfach so. Auf den Boden. Decke über sich, Augen zu.', body:'Der Rest kann warten.'},
      {type:'img', src:'roswitha Illustrationen-05.jpg'},
      {type:'text', title:'Ruhezone<br>Fehlanzeige', lead:'Roswitha setzt sich bewusst in die Ruhezone. Jemand telefoniert lautstark und tratscht ohne Ende.', body:'Roswitha atmet tief durch. Wieder mal.'},
      {type:'img', src:'roswitha Illustrationen-06.jpg'},
      {type:'text', title:'Hunde<br>Freund', lead:'Roswitha kommt nach Hause. Ihr Hund wartet schon an der Tür, wedelt, springt, freut sich unbändig.', body:'Nach diesem Tag genau das Richtige.'},
      {type:'img', src:'roswitha Illustrationen-07.jpg'},
      {type:'text', title:'Yoga im<br>Garten', lead:'Roswitha rollt ihre Matte aus. Sonne, Ruhe, perfekte Bedingungen. Sie kommt in die erste Pose –', body:'und dann fängt es an zu regnen.'},
      {type:'img', src:'roswitha Illustrationen-08.jpg'},
      {type:'text', title:'Wellness<br>Abend', lead:'Roswitha lässt das Wasser einlaufen. Schaumbad, ruhige Musik, Kerzenlicht. Der Hund sitzt vor der Tür und wartet.', body:'Roswitha genießt jeden einzelnen Moment.'},
      {type:'img', src:'roswitha Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Roswitha!', lead:'Fehlende Sackerl, laute Ruhezonen und Regen mitten im Yoga. Aber auch Frühlingsluft, ein wedelnder Hund und ein perfekter Wellnessabend. Roswitha atmet tief durch. Vielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'herbert', eyebrow:'Persona 07', role:'Büroangestellter', name:'Herbert',
    lead:'Er arbeitet viel und zählt<br>die Stunden bis Feierabend.',
    portrait:'herbert Illustrationen-09.png',
    desc:'Er zählt die Stunden bis Feierabend. Nicht weil er seinen Job hasst – er mag ihn sogar irgendwie. Aber Feierabend ist Feierabend. Er kommt pünktlich, geht pünktlich und trinkt dabei mehr Kaffee als medizinisch empfohlen.',
    stats:[{label:'Basis Harmonie',value:'5'},{label:'Alter',value:'31'},{label:'Lebenssituation',value:'In Beziehung'},{label:'Fortbewegung',value:'Zu Fuß / Fahrrad'}],
    events:[
      {type:'img', src:'herbert Illustrationen-01.jpg'},
      {type:'text', title:'Chef<br>Lob', lead:'Herbert hat alles gegeben, das Projekt sitzt perfekt. Sein Chef sagt kurz nüchtern „Danke" und geht weiter.', body:'Herbert schaut ihm nach. Lange.'},
      {type:'img', src:'herbert Illustrationen-02.jpg'},
      {type:'text', title:'Ruhiger<br>Kaffee', lead:'Herbert sitzt alleine am Tisch. Kein Handy, kein Laptop, kein Chef. Nur er und sein Kaffee.', body:'So soll der Tag immer anfangen.'},
      {type:'img', src:'herbert Illustrationen-03.jpg'},
      {type:'text', title:'Kaffee<br>Experiment', lead:'Herbert schaut ungläubig zu, wie sein Chef die Kaffeebohnen in den Wassertank füllt.', body:'Herbert ist gespannt was heute dabei rauskommt.'},
      {type:'img', src:'herbert Illustrationen-04.jpg'},
      {type:'text', title:'Krapfen<br>Pause', lead:'Ein Kollege betritt das Büro. In der Hand: eine Schachtel Krapfen. Herberts Gesicht leuchtet auf.', body:'Der Nachmittag ist gerettet.'},
      {type:'img', src:'herbert Illustrationen-05.jpg'},
      {type:'text', title:'Paket<br>Versuch', lead:'Herbert steht vor der Post. Geschlossen. Natürlich. Er wollte nur schnell ein Paket aufgeben.', body:'Die Post sieht das anders.'},
      {type:'img', src:'herbert Illustrationen-06.jpg'},
      {type:'text', title:'Langes<br>Gespräch', lead:'Herberts Handy klingelt. Ein alter Freund, nach Monaten. Sie reden stundenlang über alles.', body:'Herbert merkt gar nicht wie spät es wird.'},
      {type:'img', src:'herbert Illustrationen-07.jpg'},
      {type:'text', title:'Technischer<br>Defekt', lead:'Herbert ist gerade eingestiegen, kaum sitzt er kommt die Durchsage: Technischer Defekt auf der Strecke, bitte alle aussteigen.', body:'Natürlich.'},
      {type:'img', src:'herbert Illustrationen-08.jpg'},
      {type:'text', title:'Lauter<br>Abend', lead:'Herbert ist alleine zuhause, Lautstärke voll aufgedreht. Er singt und tanzt einfach drauf los.', body:'Niemand schaut zu. Perfekt.'},
      {type:'img', src:'herbert Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Herbert!', lead:'Nüchternes Chef-Lob, geschlossene Postämter und technische Defekte. Aber auch ruhige Kaffeepausen, Krapfen zur rechten Zeit und Abende wo niemand zuschaut. Herbert nimmt\'s gelassen. Vielleicht sollten wir das auch.', logo:true},
    ]
  },
  {
    id:'moritz', eyebrow:'Persona 08', role:'Designer', name:'Moritz',
    lead:'Er plant alles bis ins Detail –<br>und wackelt trotzdem.',
    portrait:'moritz Illustrationen-09.png',
    desc:'Er plant alles. Bis ins kleinste Detail. Der Drucker läuft, die Liste ist abgehakt, das Zuhause ist aufgeräumt. Und trotzdem wackelt das Möbelstück. Moritz ist Perfektionist – aber er weiß mittlerweile, dass auch Perfektion manchmal eine Pause braucht.',
    stats:[{label:'Basis Harmonie',value:'5'},{label:'Alter',value:'26'},{label:'Lebenssituation',value:'Single'},{label:'Fortbewegung',value:'Öffentlicher Verkehr'}],
    events:[
      {type:'img', src:'moritz Illustrationen-01.jpg'},
      {type:'text', title:'Möbel<br>Anleitung', lead:'Moritz hat alles genau geplant, die Anleitung liegt daneben. Das Möbelstück steht schief und wackelt bedenklich.', body:'Der Perfektionist in ihm weint leise.'},
      {type:'img', src:'moritz Illustrationen-02.jpg'},
      {type:'text', title:'Perfekter<br>3D Druck', lead:'Moritz nimmt das Teil vom Drucker. Perfekte Schichten, perfekte Kanten, perfektes Ergebnis.', body:'Er dreht es einmal in der Hand und lächelt zufrieden vor sich hin.'},
      {type:'img', src:'moritz Illustrationen-03.jpg'},
      {type:'text', title:'Bluetooth<br>Problem', lead:'Moritz will Musik hören. Der Lautsprecher war gestern noch verbunden, heute kennt er sein Handy anscheinend nicht mehr.', body:'Moritz – Technik Nerd – kämpft gegen Bluetooth.'},
      {type:'img', src:'moritz Illustrationen-04.jpg'},
      {type:'text', title:'Aufgeräumtes<br>Zuhause', lead:'Moritz räumt auf. Alles hat seinen Platz, alles ist sauber. Er lässt sich auf die Couch fallen.', body:'Und genießt die Perfektion seines Zuhauses.'},
      {type:'img', src:'moritz Illustrationen-05.jpg'},
      {type:'text', title:'Paket<br>Flut', lead:'Moritz bekommt ständig SMS dass sein Paket nicht zugestellt werden konnte.', body:'Spannend – er hat gar nichts bestellt. Dreimal. An einem Tag.'},
      {type:'img', src:'moritz Illustrationen-06.jpg'},
      {type:'text', title:'Frühes<br>Paket', lead:'Moritz öffnet die Tür. Das neue Technik-Produkt, früher als erwartet. Er reißt die Verpackung auf wie ein Kind an Weihnachten.', body:'Der Perfektionist macht kurz Pause.'},
      {type:'img', src:'moritz Illustrationen-07.jpg'},
      {type:'text', title:'Geschirrspüler<br>Defekt', lead:'Moritz öffnet die Spülmaschine. Sie läuft nicht. Sie hat nie angefangen. Ein Berg voller Geschirr wartet auf ihn.', body:'Von Hand. Heute Abend.'},
      {type:'img', src:'moritz Illustrationen-08.jpg'},
      {type:'text', title:'Spiele<br>Abend', lead:'Moritz sitzt mit Freunden am Tisch. Lachen, Chaos, schlechte Witze. Der Perfektionist verliert zum dritten Mal –', body:'und es ist ihm völlig egal.'},
      {type:'img', src:'moritz Illustrationen-09.png'},
      {type:'text', title:'Sei wie<br>Moritz!', lead:'Wackelnde Möbel, streikende Spülmaschinen und verwirrtes Bluetooth. Aber auch perfekte 3D-Drucke, frühe Pakete und Spieleabende wo Verlieren Spaß macht. Moritz nimmt\'s gelassen. Vielleicht sollten wir das auch.', logo:true},
    ]
  }
];
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
      label:'Übersicht', ey:'Spiel', ttl:'Prinzip',
      lead:'Infinitas verbindet alltägliche Situationen, kleine Ärgernisse und spontane Entscheidungen zu einem gemeinsamen Spielerlebnis.<br><br>Zwischen Glück, Pech und Schadenfreude entstehen laufend neue Wendungen, die den normalen Alltag plötzlich zum Spiel machen.',
      img:'Grafik_Anleitung_inventar.png',
      extra:`<img src="media/Grafik_Anleitung_Alter-Spieler.png" alt="Alter &amp; Spieleranzahl" style="width:80%;max-width:280px;height:auto;display:block;margin:0 auto 52px 13%;">`,
      body:[]
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
    const fullText=[ch.titel,ch.sub,ch.eyebrow||'',s.label,s.ttl,s.ey,s.lead,bodyText,stepsText,s.warn||'',_strip(s.extra||'')].join(' ');
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
const _scrollHintEl=document.getElementById('scrollHint');
if(_scrollHintEl){
  _scrollHintEl.style.cursor='pointer';
  _scrollHintEl.addEventListener('click',()=>{
    const target=document.querySelector('.page-titel')||document.querySelector('.page');
    if(target)target.scrollIntoView({behavior:'smooth',block:'center'});
  });
}
function _clearSearch(clearInput=false){
  sresults.classList.remove('visible');
  swrap&&swrap.classList.remove('has-results');
  squickNav&&squickNav.classList.remove('search-hidden');
  if(_scrollHintEl)_scrollHintEl.style.opacity='';
  if(clearInput)sinput.value='';
}
sinput.addEventListener('input',function(){
  const q=this.value.trim().toLowerCase();
  sresults.innerHTML='';
  if(q.length<2){_clearSearch();return;}
  const hits=searchIndex.filter(x=>x.full.includes(q)).slice(0,6);
  if(!hits.length){
    sresults.innerHTML='<div class="sri sri-empty">Keine Ergebnisse gefunden</div>';
    sresults.classList.add('visible');
    swrap&&swrap.classList.add('has-results');
    squickNav&&squickNav.classList.add('search-hidden');
    return;
  }
  hits.forEach(h=>{
    const d=document.createElement('div');d.className='sri';
    const snip=_snippet(h.full,q);
    d.innerHTML=`<span class="sri-ch">${h.chLabel}</span><span class="sri-t">${h.sectionTitle}</span>${snip?`<span class="sri-snip">${snip}</span>`:''}`;
    d.onclick=()=>{_pendingHighlight=q;sinput.value='';_clearSearch();openChapter(h.chapter,h.idx);};
    sresults.appendChild(d);
  });
  sresults.classList.add('visible');
  swrap&&swrap.classList.add('has-results');
  squickNav&&squickNav.classList.add('search-hidden');
  if(_scrollHintEl)_scrollHintEl.style.opacity='0';
});
document.addEventListener('click',e=>{
  if(!e.target.closest('.search-wrap')){_clearSearch(true);}
});

let _chId='';
let _mechIdx=0;
let _scrollPos=0;
let _chapterOpen=false;
let _pendingHighlight='';

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
  if(lead){lead.innerHTML=s.lead||'';lead.style.display=s.lead?'':'none';}
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
        <img class="burger-wave-icon" src="media/Grafik_Burger%20Icon.svg" alt="" width="22" height="17">
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
  if(_pendingHighlight){
    const _hl=_pendingHighlight;_pendingHighlight='';
    requestAnimationFrame(()=>{
      const walker=document.createTreeWalker(cvContent,NodeFilter.SHOW_TEXT);
      let node;
      while((node=walker.nextNode())){
        if(node.textContent.toLowerCase().includes(_hl.toLowerCase())){
          const el=node.parentElement;
          setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'center'}),120);
          break;
        }
      }
    });
  }
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
  _chId='';
  _hideScrollHeader(true); // sofort, kein 0.32s-Slide der hellblauen Leiste
  document.querySelector('meta[name="theme-color"]').content='#4a8abf';
  document.querySelector('meta[name="color-scheme"]').content='light';
  document.documentElement.classList.remove('mech-page-html');
  document.body.classList.remove('mech-page');
  const _g=document.getElementById('mechChromeGuard');
  const _tb=document.getElementById('chapterTopBar');
  if(_tb)_tb.style.display='none';
  _g.style.display='none';
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
  if(_arOpen){closeArViewer(true);return;}
  if(_fritzOpen){closeFritzAlltag(true);return;}
  if(_personaOpen){closePersonaPage(true);return;}
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
  const _mb=document.querySelector('.mech-burger-btn');
  if(_mb)_mb.style.opacity='';
}
function _showScrollHeader(){
  if(_sh){_sh.style.display='';}
  const _mb=document.querySelector('.mech-burger-btn');
  if(_mb)_mb.style.opacity='0';
}

function _buildChapterNav(){
  const isHome=!_chapterOpen&&!_personaOpen;
  const _arr=`<svg class="cv-sh-ch-arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M9 18l6-6-6-6"/></svg>`;
  let html=`<button class="cv-sh-item" onclick="${isHome?'closeShMenu()':'shGoHome()'}"><span class="cv-sh-home-lbl">Startseite</span>${_arr}</button>`;
  const order=['übersicht','aufbau','ablauf','mechanik'];

  order.forEach(key=>{
    const ch=chapters[key];
    const isActiveCh=key===_chId;
    const isExpanded=key===_menuExpandedCh;
    const hasSub=ch.sections.length>1;
    const arr=`<svg class="cv-sh-ch-arr${isExpanded&&hasSub?' expanded':''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M9 18l6-6-6-6"/></svg>`;
    html+=`<button class="cv-sh-item" onclick="shMenuChClick('${key}')"><span class="cv-sh-item-lbl">${ch.sub}</span>${arr}</button>`;
    if(hasSub&&isExpanded){
      ch.sections.forEach((s,i)=>{
        const cur=isActiveCh&&i===_mechIdx;
        html+=`<button class="cv-sh-sec-item${cur?' sh-item-active':''}" onclick="shSecSelect('${key}',${i})"><span class="cv-sh-sec-dot"></span><span class="cv-sh-sec-lbl">${s.label}</span></button>`;
      });
    }
  });
  const personaExpanded=_menuExpandedCh==='personas';
  const personaArr=`<svg class="cv-sh-ch-arr${personaExpanded?' expanded':''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="13" height="13"><path d="M9 18l6-6-6-6"/></svg>`;
  html+=`<button class="cv-sh-item" onclick="shMenuPersonaClick()"><span class="cv-sh-item-lbl">Persona Storys</span>${personaArr}</button>`;
  if(personaExpanded){
    personas.forEach((p,i)=>{
      const cur=_personaOpen&&i===_personaIdx;
      const menuLbl=(p.menuLabel||p.name).replace(/<br>/g,' ');
      html+=`<button class="cv-sh-sec-item${cur?' sh-item-active':''}" onclick="shOpenPersonaAt(${i})"><span class="cv-sh-sec-dot"></span><span class="cv-sh-sec-lbl">${menuLbl}</span></button>`;
    });
  }
  if(isHome)html+=`<button class="cv-sh-item" onclick="closeShMenu();openArViewer()"><span class="cv-sh-item-lbl">3D Spielansicht</span>${_arr}</button>`;
  return html;
}

function _buildSearchResults(q){
  const ql=q.toLowerCase();
  let html='';
  ['übersicht','aufbau','ablauf','mechanik'].forEach(key=>{
    const ch=chapters[key];
    ch.sections.forEach((s,i)=>{
      const stepsText=(s.steps||[]).map(st=>_strip(st.t||'')).join(' ');
      const full=[ch.titel,ch.sub,s.label,s.ttl,s.ey,s.lead,_txt(s.body),stepsText,s.warn||'',_strip(s.extra||'')].join(' ').toLowerCase();
      if(full.includes(ql)){
        const cur=key===_chId&&i===_mechIdx;
        const snip=_snippet(full,ql);
        html+=`<button class="cv-sh-sri${cur?' sh-item-active':''}" onclick="shSecSelect('${key}',${i})"><span class="cv-sh-sri-ch">Spiel ${ch.sub}</span><span class="cv-sh-sri-lbl">${s.label||s.ttl}</span>${snip?`<span class="cv-sh-sri-snip">${snip}</span>`:''}</button>`;
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
    if(!_chapterOpen&&!_personaOpen||(window.scrollY||_cvEl.scrollTop)<60)_hideScrollHeader(true);
    return;
  }
  _showScrollHeader();_sh.classList.add('sh-visible');
  if(!_chapterOpen&&!_personaOpen){if(_shTitle)_shTitle.textContent='Startseite';_sh.classList.add('sh-no-back');}else{_sh.classList.remove('sh-no-back');}
  
  _menuExpandedCh=null;
  _menuSearchQuery='';
  _renderShMenu();
}

function closeShMenu(){
  _sh.classList.remove('sh-menu-open');
  _menuSearchQuery='';
  _menuExpandedCh=null;

  if(!_chapterOpen&&!_personaOpen||(window.scrollY||_cvEl.scrollTop)<60)_hideScrollHeader(true);
}

function handleBackBtn(){
  if(_arOpen){closeArViewer();}else if(_personaOpen){closePersonaPage();}else if(_chapterOpen){closeChapter();}else{closeShMenu();}
}

function shMenuChClick(id){
  if(chapters[id].sections.length<=1){shMenuSelect(id);return;}
  _menuExpandedCh=(_menuExpandedCh===id)?null:id;
  const nav=document.getElementById('cvShNavContent');
  if(nav)nav.innerHTML=_buildChapterNav();
}

function shMenuSelect(id){
  closeShMenu();
  if(_personaOpen){_closePersonaClean();history.replaceState(null,'',location.pathname);}
  openChapter(id);
}

function shMenuPersonaClick(){
  _menuExpandedCh=(_menuExpandedCh==='personas')?null:'personas';
  const nav=document.getElementById('cvShNavContent');
  if(nav)nav.innerHTML=_buildChapterNav();
}
function shOpenPersonaAt(idx){
  closeShMenu();
  if(_chapterOpen){_chapterOpen=false;document.getElementById('chapterView').classList.remove('open','mech-open');document.body.classList.remove('mech-page');document.documentElement.classList.remove('mech-page-html');document.getElementById('mechChromeGuard').style.display='none';history.replaceState(null,'',location.pathname);}
  if(_personaOpen){switchPersona(idx);}
  else{openPersonaPage();requestAnimationFrame(()=>switchPersona(idx));}
}
function shOpenPersona(){
  closeShMenu();
  if(_chapterOpen){_chapterOpen=false;document.getElementById('chapterView').classList.remove('open','mech-open');document.body.classList.remove('mech-page');document.documentElement.classList.remove('mech-page-html');document.getElementById('mechChromeGuard').style.display='none';history.replaceState(null,'',location.pathname);}
  openPersonaPage();
}
function shGoHome(){
  closeShMenu();
  // Fritz' Alltag liegt als Overlay über der Persona-Seite – beim Sprung zur Startseite
  // muss es zuerst sauber geschlossen werden, sonst bleibt es sichtbar über der
  // Startseite hängen UND sein '#fritz-alltag'-History-Eintrag bleibt in der URL stehen.
  if(_fritzOpen)closeFritzAlltag(true);
  if(_personaOpen){_closePersonaClean();history.replaceState(null,'',location.pathname);}
  else closeChapter();
}

function shSecSelect(chId,idx){
  if(_menuSearchQuery)_pendingHighlight=_menuSearchQuery;
  closeShMenu();
  if(_personaOpen){_closePersonaClean();history.replaceState(null,'',location.pathname);}
  if(_chapterOpen&&chId===_chId){chSelect(chId,idx);}else{openChapter(chId,idx);}
}
function _onChapterScroll(){
  if(!_chapterOpen)return;
  const y=window.scrollY||_cvEl.scrollTop;
  if(y>80){if(_sh){_showScrollHeader();_sh.classList.add('sh-visible');}}
  else if(y<60&&!(_sh&&_sh.classList.contains('sh-menu-open')))_hideScrollHeader(true);
  _shLastY=y;
}
_cvEl.addEventListener('scroll',_onChapterScroll,{passive:true});
window.addEventListener('scroll',_onChapterScroll,{passive:true});

// Close menu when tapping outside the scroll header
function _isOutsideMenu(t){if(!t.isConnected)return false;return _sh&&!_sh.contains(t)&&!t.closest('#mainBurger,.mech-burger-btn,.ar-sh-bar');}
document.addEventListener('touchstart',e=>{if(_sh&&_sh.classList.contains('sh-menu-open')&&_isOutsideMenu(e.target))closeShMenu();},{passive:true});
document.addEventListener('click',e=>{if(_sh&&_sh.classList.contains('sh-menu-open')&&_isOutsideMenu(e.target))closeShMenu();});

// INTRO
const intro=document.getElementById('intro');
const eight=document.getElementById('introEight');
const mainEl=document.getElementById('main');
// Force GIF restart on every load (Safari caches last frame)
if(eight&&eight.tagName==='IMG'){const s=eight.src.split('?')[0];eight.src='';eight.src=s+'?t='+Date.now();}
const _initHash=decodeURIComponent(location.hash.slice(1));

function _showMainInstant(){
  intro.style.display='none';
  mainEl.classList.add('visible');
  ['heroLogo','searchWrap','quickNav','scrollHint'].forEach(id=>document.getElementById(id)?.classList.add('show'));
}

// Auf Mobile: Guard auf Startseite ausblenden – Verlauf-Bild läuft bis ganz oben durch

// BFCache restore (Safari back-swipe that hits the cache)
window.addEventListener('pageshow',e=>{if(e.persisted)_showMainInstant();});

const _introSeen=sessionStorage.getItem('introSeen');
if(_initHash==='ar'){
  _showMainInstant();
  openArViewer();
}else if(_initHash==='personas'){
  _showMainInstant();
  openPersonaPage();
}else if(_initHash&&chapters[_initHash]){
  _showMainInstant();
  history.replaceState(null,'',location.pathname);
  openChapter(_initHash);
}else if(_introSeen&&false){
  // already played once this session — skip straight to main (disabled during dev)
  _showMainInstant();
}else{
  sessionStorage.setItem('introSeen','1');
  // GIF 24 frames × 50ms = 1200ms pro Durchlauf, 2× = 2400ms
  // Fade bei 2150ms → kurz vor Ende 2. Durchlauf, bevor 3. startet
  setTimeout(()=>{
    intro.classList.add('fade-out');
    mainEl.classList.add('visible');
    setTimeout(()=>{
      intro.style.display='none';
      ['heroLogo','searchWrap','quickNav','scrollHint'].forEach(id=>document.getElementById(id)?.classList.add('show'));
    },300);
  },2150);
}

// ── STARTSEITE BILD-SCROLL PILLE ──
(function(){
  const scroll=document.getElementById('pageImgScroll');
  const track=document.getElementById('pageImgTrack');
  const pill=document.getElementById('pageImgPill');
  if(!scroll||!track||!pill)return;

  function update(){
    const max=scroll.scrollWidth-scroll.clientWidth;
    if(max<=0){pill.style.left='0px';return;}
    const progress=scroll.scrollLeft/max;
    const maxLeft=track.offsetWidth-pill.offsetWidth;
    pill.style.left=(progress*maxLeft)+'px';
  }
  scroll.addEventListener('scroll',update,{passive:true});

  // Draggable pill
  let _dragging=false,_startX=0,_startLeft=0;
  function onDragStart(e){
    _dragging=true;
    _startX=e.touches?e.touches[0].clientX:e.clientX;
    _startLeft=parseFloat(pill.style.left)||0;
    pill.style.transition='none';
    e.preventDefault();
  }
  function onDragMove(e){
    if(!_dragging)return;
    const x=e.touches?e.touches[0].clientX:e.clientX;
    const dx=x-_startX;
    const maxLeft=track.offsetWidth-pill.offsetWidth;
    const newLeft=Math.max(0,Math.min(maxLeft,_startLeft+dx));
    pill.style.left=newLeft+'px';
    const max=scroll.scrollWidth-scroll.clientWidth;
    scroll.scrollLeft=(newLeft/maxLeft)*max;
  }
  function onDragEnd(){
    _dragging=false;
    pill.style.transition='';
  }
  // Click on track jumps to position
  track.addEventListener('click',e=>{
    if(e.target===pill)return;
    const rect=track.getBoundingClientRect();
    const x=e.clientX-rect.left-pill.offsetWidth/2;
    const maxLeft=track.offsetWidth-pill.offsetWidth;
    const newLeft=Math.max(0,Math.min(maxLeft,x));
    const max=scroll.scrollWidth-scroll.clientWidth;
    scroll.scrollLeft=(newLeft/maxLeft)*max;
  });
  pill.addEventListener('mousedown',onDragStart);
  pill.addEventListener('touchstart',onDragStart,{passive:false});
  document.addEventListener('mousemove',onDragMove);
  document.addEventListener('touchmove',onDragMove,{passive:false});
  document.addEventListener('mouseup',onDragEnd);
  document.addEventListener('touchend',onDragEnd);

  // Scroll-Position zurücksetzen wenn Startseite wieder sichtbar wird
  window.addEventListener('popstate',()=>{
    requestAnimationFrame(()=>{
      scroll.scrollLeft=0;
      pill.style.left='0px';
    });
  });
})();

// ── PERSONA PAGE ──
function openPersonaPage(){
  const pv=document.getElementById('personaView');
  if(!pv)return;
  _personaOpen=true;
  _scrollPos=window.scrollY;
  _hideScrollHeader(true);
  document.getElementById('main').style.display='none';
  document.body.classList.add('mech-page');
  document.querySelector('meta[name="theme-color"]').content='#E2EAF6';
  document.querySelector('meta[name="color-scheme"]').content='light';
  document.documentElement.classList.add('mech-page-html');
  const _guard=document.getElementById('mechChromeGuard');
  _guard.style.background='var(--mech-bg)';_guard.style.display='block';
  if(window.innerWidth<600){const _tb=document.getElementById('chapterTopBar');if(_tb)_tb.style.display='block';}
  pv.classList.add('open');
  pv.scrollTop=0;
  window.scrollTo(0,0);
  if(_sh){_sh.style.zIndex='210';}
  if(_shTitle)_shTitle.textContent=(personas[0].menuLabel||personas[0].name).replace(/<br>/g,' ');
  if(!pv._scrollBound){
    pv._scrollBound=true;
    const _pvScroll=()=>{
      if(!_personaOpen)return;
      const y=pv.scrollTop||window.scrollY;
      if(y>80){_showScrollHeader();_sh.classList.add('sh-visible');_sh.classList.remove('sh-no-back');}
      else if(y<60)_hideScrollHeader(true);
    };
    pv.addEventListener('scroll',_pvScroll,{passive:true});
    window.addEventListener('scroll',_pvScroll,{passive:true});
  }
  _personaIdx=0;
  const p0=personas[0];
  const p0HasStats=p0.stats&&p0.stats.length;
  const p0HasDesc=!!p0.desc;
  const p0HasEvents=p0.events&&p0.events.length;
  const dots=personas.map((_,i)=>`<span class="mech-dot${i===0?' active':''}" onclick="switchPersona(${i})"></span>`).join('');
  document.getElementById('pvContent').innerHTML=`
    <div class="mech-view">
      <div class="mech-header">
        <img class="mech-header-img" src="media/Verlauf%20Unterseiten.png" alt="">
        <button class="mech-back-btn" onclick="closePersonaPage()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="15" height="15"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        <button class="mech-burger-btn" onclick="toggleShMenu()">
          <img class="burger-wave-icon" src="media/Grafik_Burger%20Icon.svg" alt="" width="22" height="17">
        </button>
        <span class="mech-cat-vert"><span class="cat-regular">Persona </span><span class="cat-bold">Storys</span></span>
      </div>
      <div class="mech-title-area" style="margin-top:-160px;padding-top:28px">
        <p class="mech-ey" id="pvEy">${personas[0].role}</p>
        <h1 class="mech-ttl" id="pvName">${personas[0].name}</h1>
        <p class="mech-lead-txt" id="pvLead">${personas[0].lead}</p>
      </div>
      <div class="mech-nav" id="pvNav">
        <div class="mech-dots" id="pvDots">${dots}</div>
        <span class="mech-nav-hint">Auf die Punkte tippen um die Persona zu wechseln</span>
      </div>
      <div id="pvPortraitWrap" class="persona-portrait-wrap"${p0HasEvents?' onclick="openFritzAlltag()" style="cursor:pointer"':''}>
        <img src="media/${encodeURIComponent(personas[0].portrait)}" class="persona-portrait" alt="${personas[0].role} ${personas[0].name}">
      </div>
      <span class="mech-nav-hint" id="pvPortraitHint" style="display:${p0HasEvents?'block':'none'};margin-top:16px">Tippe auf das Bild oder den Button um den Alltag anzusehen</span>
      <div style="display:${p0HasEvents?'flex':'none'};justify-content:center;padding:36px 28px 24px" id="pvBtn">
        ${p0HasEvents?`<button class="persona-cta-btn" onclick="openFritzAlltag()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="17" height="17" style="flex-shrink:0"><path d="M9 18l6-6-6-6"/></svg>
          ${p0.name}' Alltag ansehen
        </button>`:''}
      </div>
      <div class="persona-stats" id="pvStats" style="${p0HasStats?'':'display:none'}">${p0HasStats?p0.stats.map(s=>`<div><span class="persona-stat-lbl">${s.label}</span><span class="persona-stat-val">${s.value}</span></div>`).join(''):''}</div>
      <p class="persona-desc" id="pvDesc" style="${p0HasDesc?'':'display:none'}">${p0.desc||''}</p>
      <div class="persona-imp">
        <img class="persona-imp-bg" src="media/Verlauf%20Impressum_persona.png" alt="">
        <div class="persona-imp-inner">
          <p class="persona-imp-p">© 2026 Infinitas</p>
          <p class="persona-imp-p">Spielkonzept, Gestaltung und Spielsystem: Holzleitner Moritz</p>
          <p class="persona-imp-p">Infinitas ist ein fiktives Spielkonzept im Rahmen eines Designprojekts. Die Ereignisse auf den Karten basieren auf einer Umfrage während des Entstehungsprozesses und wurden teilweise überarbeitet oder fiktiv erweitert. Texte mit Unterstützung von ChatGPT überarbeitet.</p>
          <p class="persona-imp-p">Alle Rechte vorbehalten. Nachdruck, Vervielfältigung oder Veröffentlichung – auch auszugsweise – nur mit schriftlicher Genehmigung.</p>
          <p class="persona-imp-p">Version 1.0 – INF-01-2026</p>
        </div>
      </div>
    </div>`;
  history.pushState({persona:true},'','#personas');
  // Swipe between personas
  if(!pv._swipeBound){
    pv._swipeBound=true;
    let _sx=0,_sy=0;
    pv.addEventListener('touchstart',e=>{_sx=e.touches[0].clientX;_sy=e.touches[0].clientY;},{passive:true});
    pv.addEventListener('touchend',e=>{
      const dx=e.changedTouches[0].clientX-_sx;
      const dy=e.changedTouches[0].clientY-_sy;
      if(Math.abs(dx)<Math.abs(dy))return;
      if(Math.abs(dx)>44)switchPersona(_personaIdx+(dx<0?1:-1));
    },{passive:true});
  }
}

function switchPersona(idx){
  idx=(idx+personas.length)%personas.length;
  _personaIdx=idx;
  const p=personas[idx];
  document.querySelectorAll('#pvDots .mech-dot').forEach((d,i)=>d.classList.toggle('active',i===idx));
  document.getElementById('pvEy').textContent=p.role;
  document.getElementById('pvName').innerHTML=p.name;
  document.getElementById('pvLead').innerHTML=p.lead;
  const statsEl=document.getElementById('pvStats');
  if(statsEl){
    if(p.stats&&p.stats.length){statsEl.style.display='flex';statsEl.innerHTML=p.stats.map(s=>`<div><span class="persona-stat-lbl">${s.label}</span><span class="persona-stat-val">${s.value}</span></div>`).join('');}
    else{statsEl.style.display='none';statsEl.innerHTML='';}
  }
  const descEl=document.getElementById('pvDesc');
  if(descEl){
    if(p.desc){descEl.style.display='block';descEl.innerHTML=p.desc;}
    else{descEl.style.display='none';descEl.innerHTML='';}
  }
  const wrap=document.getElementById('pvPortraitWrap');
  if(wrap){
    const hasEv=p.events&&p.events.length;
    wrap.onclick=hasEv?openFritzAlltag:null;
    wrap.style.cursor=hasEv?'pointer':'';
    if(p.portrait){wrap.innerHTML=`<img src="media/${encodeURIComponent(p.portrait)}" class="persona-portrait" alt="${p.role} ${p.name}">`;}
    else{wrap.innerHTML=`<div class="persona-portrait-placeholder"><span>${p.name[0]}</span></div>`;}
    const hint=document.getElementById('pvPortraitHint');
    if(hint)hint.style.display=hasEv?'block':'none';
  }
  const btn=document.getElementById('pvBtn');
  if(btn){
    if(p.events&&p.events.length){btn.style.display='flex';btn.innerHTML=`<button class="persona-cta-btn" onclick="openFritzAlltag()"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" width="17" height="17" style="flex-shrink:0"><path d="M9 18l6-6-6-6"/></svg>${p.name}' Alltag ansehen</button>`;}
    else{btn.style.display='none';}
  }
  if(_shTitle)_shTitle.textContent=(p.menuLabel||p.name).replace(/<br>/g,' ');
}
function _closePersonaClean(){
  if(!_personaOpen)return;
  _personaOpen=false;
  document.getElementById('personaView').classList.remove('open');
  _hideScrollHeader(true);
  if(_sh){_sh.style.zIndex='';}
  document.getElementById('main').style.display='';
  document.body.classList.remove('mech-page');
  document.querySelector('meta[name="theme-color"]').content='#4a8abf';
  document.querySelector('meta[name="color-scheme"]').content='light';
  document.documentElement.classList.remove('mech-page-html');
  document.getElementById('mechChromeGuard').style.display='none';
  const _tb=document.getElementById('chapterTopBar');
  if(_tb)_tb.style.display='none';
  requestAnimationFrame(()=>window.scrollTo(0,_scrollPos));
}
function closePersonaPage(fromPopstate=false){
  if(!_personaOpen)return;
  _closePersonaClean();
  if(!fromPopstate)requestAnimationFrame(()=>{_skipPopstate=true;history.back();});
  else history.replaceState(null,'',location.pathname);
  window.scrollTo(0,_scrollPos);
}

function personaScrollNext(){
  const strip=document.getElementById('personaScroll');
  if(strip)strip.scrollIntoView({behavior:'smooth',block:'nearest'});
}

// ── FRITZ ALLTAG OVERLAY ──
let _fritzOpen=false;
function openFritzAlltag(){
  const ov=document.getElementById('fritzAlltag');
  if(!ov)return;
  _fritzOpen=true;
  const p=personas[_personaIdx];
  const faTitle=document.getElementById('faTitle');
  if(faTitle)faTitle.textContent=p.name+'\' Alltag';
  const scroll=document.getElementById('faScroll');
  // Die manuellen Zeilenumbrüche (\n) in den Texten sind auf die schmalen Mobile-Karten
  // (~350px) abgestimmt. Auf breiteren Desktop-Karten (~520px) erzwingen sie unschön kurze,
  // mitten-im-Satz-umbrechende Zeilen statt natürlich zu fließen. Ab 600px daher \n→Leerzeichen,
  // damit der Text den verfügbaren Platz selbst ausnutzt und sauber umbricht.
  const _faNl=window.innerWidth>=600?' ':'<br>';
  scroll.innerHTML=p.events.map(e=>{
    if(e.type==='text') return `<div class="fa-text-card"><h1 class="mech-ttl">${e.title}</h1><p class="mech-lead-txt fa-lead">${e.lead.replace(/\n/g,_faNl)}</p>${e.body?`<p class="fa-body-sm">${e.body.replace(/\n/g,_faNl)}</p>`:''}${e.logo?`<div class="fa-wordmark"><div class="fa-wm-title">Infini<span class="alt-t">t</span>as</div><div class="fa-wm-subtitle">Alles halb so wild?!</div></div>`:''}</div>`;
    // width/height = echte Pixelmaße der Datei → Browser kennt das Seitenverhältnis sofort
    // und berechnet die finale Kartenbreite (CSS: height:68vh;width:auto), bevor das Bild
    // überhaupt geladen ist. Ohne das ändert sich die Kartenbreite erst nach dem Laden,
    // wodurch die drei geklonten Karussell-Kopien unterschiedlich breit sind und die
    // Loop-Korrektur (die scrollWidth/3 als Kopie-Breite annimmt) an der falschen Stelle landet.
    const _portraitDims={fritz:[4913,7176],tony:[4913,7533]};
    const [iw,ih]=/-09\./.test(e.src)?(_portraitDims[p.id]||[4913,7176]):[2400,1813];
    return `<div class="fa-img-card${e.label?' fa-no-gap':''}"${e.label?' style="position:relative"':''}>
      <img data-src="media/${encodeURIComponent(e.src)}" class="fa-lazy" alt="" width="${iw}" height="${ih}">
      ${e.label?`<div class="fa-img-label"${e.labelStyle?` style="${e.labelStyle}"`:''}}>${e.label}</div>`:''}
    </div>`;
  }).join('');
  ov.classList.add('open');
  _initFaLoop(scroll);
  _initFaLazy(scroll);
  _initFaPill();
  history.pushState({fritzAlltag:true},'','#fritz-alltag');
}
function _initFaLoop(scroll){
  // Reset von einem evtl. vorherigen Open (innerHTML wird neu gesetzt, Listener am scroll-Element
  // und an einzelnen <img>s bleiben sonst hängen und überlagern sich mit dem neuen Lauf)
  if(scroll._loopFn){scroll.removeEventListener(scroll._loopEvt,scroll._loopFn);clearTimeout(scroll._loopTimer);}

  const originals=Array.from(scroll.children);
  const firstChild=scroll.firstChild;
  originals.forEach(el=>scroll.insertBefore(el.cloneNode(true),firstChild));
  originals.forEach(el=>scroll.appendChild(el.cloneNode(true)));

  // Startkarte = "Sei wie Fritz!" (letzte Karte, Logo) – Teaser/Abschluss-Slide direkt beim Öffnen.
  const startEl=originals[originals.length-1];

  // Dank fester width/height-Attribute auf den <img>s steht die Kartenbreite (und damit
  // scrollWidth) sofort fest – kein Nachjustieren beim Laden mehr nötig, ein einziges
  // Einrasten reicht. Startkarte mittig zentrieren (sie ist schmaler als der Viewport),
  // sonst schaut die Nachbarkarte rechts rein.
  scroll.scrollLeft=startEl.offsetLeft-(scroll.clientWidth-startEl.offsetWidth)/2;

  // Die Pille soll bei "Sei wie Fritz!" (= unsere Startkarte, NICHT die erste Karte in
  // originals[]) auf "Anfang" stehen. Referenzwert merken, damit _initFaPill die Position
  // relativ zur Startkarte statt relativ zu originals[0] berechnen kann.
  scroll._faPillRef=scroll.scrollLeft%(scroll.scrollWidth/3);

  // ── Loop-Korrektur ──
  // Läuft von Anfang an mit; landet man (durch Scrollen) zu nah an einem Rand der
  // dreifach geklonten Reihe, wird um genau eine Kopie-Breite zurück in die Mitte gesprungen.
  const settle=()=>{
    const one=scroll.scrollWidth/3;
    if(scroll.scrollLeft<one*0.5)scroll.scrollLeft+=one;
    else if(scroll.scrollLeft>=one*1.5)scroll.scrollLeft-=one;
  };
  if('onscrollend' in window){
    scroll._loopEvt='scrollend';
    scroll._loopFn=settle;
  }else{
    scroll._loopEvt='scroll';
    scroll._loopFn=()=>{
      clearTimeout(scroll._loopTimer);
      scroll._loopTimer=setTimeout(settle,120);
    };
  }
  scroll.addEventListener(scroll._loopEvt,scroll._loopFn,{passive:true});
}
function _initFaLazy(scroll){
  if(scroll._lazyIo)scroll._lazyIo.disconnect();
  const io=new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(!en.isIntersecting)return;
      const img=en.target;
      img.addEventListener('load',()=>{
        const label=img.parentElement.querySelector('.fa-img-label');
        if(label)label.classList.add('visible');
      },{once:true});
      img.src=img.dataset.src;
      img.removeAttribute('data-src');
      io.unobserve(img);
    });
  },{root:scroll,rootMargin:'0px 200% 0px 200%'});
  scroll._lazyIo=io;
  scroll.querySelectorAll('.fa-lazy').forEach(img=>io.observe(img));
}
function closeFritzAlltag(fromPopstate=false){
  if(!_fritzOpen)return;
  _fritzOpen=false;
  const ov=document.getElementById('fritzAlltag');
  ov.classList.remove('open');
  const scroll=document.getElementById('faScroll');
  if(scroll&&scroll._lazyIo){scroll._lazyIo.disconnect();scroll._lazyIo=null;}
  if(!fromPopstate)requestAnimationFrame(()=>{_skipPopstate=true;history.back();});
}
function _initFaPill(){
  const scroll=document.getElementById('faScroll');
  const track=document.getElementById('faPillTrack');
  const pill=document.getElementById('faPill');
  if(!scroll||!track||!pill)return;
  scroll.removeEventListener('scroll',scroll._pillFn||null);
  scroll._pillFn=function(){
    const one=scroll.scrollWidth/3;
    const ref=scroll._faPillRef||0;
    // Position relativ zur Startkarte ("Sei wie Fritz!"), nicht zu originals[0] – sonst
    // würde die Pille beim Öffnen fälschlich "Ende" statt "Anfang" anzeigen, weil die
    // Startkarte die letzte in originals[] ist.
    let pos=(scroll.scrollLeft%one-ref+one)%one;
    // Rundungsdifferenzen zwischen offsetLeft (gerundet) und scrollWidth/3 (Float) lassen
    // den Wert an der Kopiergrenze hauchdünn unter "one" statt bei 0 landen → Pille würde
    // fälschlich ans Ende springen. Werte nahe der Grenze auf 0 klemmen.
    if(pos>one-2)pos=0;
    const max=one-scroll.clientWidth;
    if(max<=0){pill.style.left='0px';return;}
    const maxLeft=track.offsetWidth-pill.offsetWidth;
    pill.style.left=((pos/max)*maxLeft)+'px';
  };
  scroll.addEventListener('scroll',scroll._pillFn,{passive:true});
  scroll._pillFn();
  // Draggable pill
  let _dragging=false,_startX=0,_startScrollLeft=0;
  function onDragStart(e){
    _dragging=true;
    _startX=e.touches?e.touches[0].clientX:e.clientX;
    _startScrollLeft=scroll.scrollLeft;
    pill.style.transition='none';
    e.preventDefault();
  }
  function onDragMove(e){
    if(!_dragging)return;
    const x=e.touches?e.touches[0].clientX:e.clientX;
    const dx=x-_startX;
    const maxLeft=track.offsetWidth-pill.offsetWidth;
    const one=scroll.scrollWidth/3;
    const max=one-scroll.clientWidth;
    scroll.scrollLeft=_startScrollLeft+(dx/maxLeft)*max;
  }
  function onDragEnd(){_dragging=false;pill.style.transition='';}
  pill.addEventListener('mousedown',onDragStart);
  pill.addEventListener('touchstart',onDragStart,{passive:false});
  document.addEventListener('mousemove',onDragMove);
  document.addEventListener('touchmove',onDragMove,{passive:false});
  document.addEventListener('mouseup',onDragEnd);
  document.addEventListener('touchend',onDragEnd);
}

// ── AR / 3D VIEWER ──
function openArViewer(){
  const ov=document.getElementById('arOverlay');
  if(!ov)return;
  _arOpen=true;
  ov.classList.add('ar-open');
  document.body.style.overflow='hidden';
  document.getElementById('main').style.display='none';
  document.querySelector('meta[name="theme-color"]').content='#0d1b3e';
  if(_sh){ _sh.classList.add('sh-no-back','ar-mode'); _sh.style.zIndex='400'; }
  history.pushState({ar:true},'','#ar');
}
function closeArViewer(fromPopstate=false){
  const ov=document.getElementById('arOverlay');
  if(!ov||!_arOpen)return;
  _arOpen=false;
  ov.classList.remove('ar-open');
  document.body.style.overflow='';
  document.getElementById('main').style.display='';
  document.querySelector('meta[name="theme-color"]').content='#4a8abf';
  if(_sh){ _sh.classList.remove('sh-no-back','ar-mode','sh-visible','sh-menu-open'); _sh.style.zIndex=''; }
  if(!fromPopstate) requestAnimationFrame(()=>{ _skipPopstate=true; history.back(); });
}
function _initArProgress(){
  const mv=document.getElementById('arModelViewer');
  const pill=document.getElementById('arLoadingPill');
  const track=document.getElementById('arLoadingTrack');
  const btn=document.getElementById('arBtnAr');
  if(!mv||!pill||!track||!btn)return;
  if(mv._progressBound)return;
  mv._progressBound=true;
  mv.addEventListener('progress',(e)=>{
    pill.style.width=Math.round(e.detail.totalProgress*100)+'%';
  });
  mv.addEventListener('load',()=>{
    pill.style.width='100%';
    setTimeout(()=>{
      track.style.display='none';
      btn.style.display='';
    },300);
  });
}
customElements.whenDefined('model-viewer').then(_initArProgress);

function activateAR(){
  const mv=document.getElementById('arModelViewer');
  if(!mv||!mv.canActivateAR)return;
  mv.activateAR();
}

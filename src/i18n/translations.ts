export type Lang = 'en' | 'cs';

export const t = {
  en: {
    nav: {
      research:     'Research',
      publications: 'Publications',
      consulting:   'Consulting',
      blog:         'Blog',
      contact:      'Contact',
    },
    hero: {
      eyebrow:     'PhD Researcher · Nanofibers in Cosmetics',
      title:       'Engineering beauty at the <em>nanoscale.</em>',
      description: 'Research at the intersection of centrifugal and electrospinning, nanotechnology, and cosmetic science — creating next-generation delivery systems for skincare actives.',
      cta_primary: 'Explore research',
      cta_ghost:   'Get in touch',
      stat_labels: ['Publications', 'Years research', 'Industry projects'],
      pub_label:   'Latest publication',
    },
    expertise: [
      { num: '01', title: 'Centrifugal and electro spinning',    desc: 'Nanofiber fabrication for cosmetic and pharmaceutical delivery applications.' },
      { num: '02', title: 'Active Delivery',    desc: 'Encapsulation and controlled release of skincare actives at the cellular level.' },
      { num: '03', title: 'Biomaterial Design', desc: 'Biocompatible polymer systems for skin-contact applications.' },
      { num: '04', title: 'Consulting',         desc: 'R&D advisory for cosmetic companies exploring nanotechnology.' },
    ],
    about: {
      label:             'About',
      headline:          'Science that<br/>touches <em>skin.</em>',
      body: [
        'I am a PhD researcher specialising in the application of <strong>electrospun nanofibers</strong> to cosmetic formulation science. My work bridges fundamental polymer chemistry with real-world cosmetic product innovation.',
        'Alongside my academic research, I work with cosmetic brands and ingredient companies as a <strong>scientific consultant</strong>, helping translate laboratory findings into viable product concepts.',
      ],
      institution_label: 'Institution',
      location_label:    'Location',
      field_label:       'Field',
    },
    blog: {
      section_title: 'From the research log',
      all_articles:  'All articles',
      back:          'All articles',
      by:            'By',
      read_more:     'Back to all articles',
      get_in_touch:  'Get in touch',
      page_title:    'All articles',
      page_desc:     'Scientific perspectives on nanofibers, electrospinning, and cosmetic innovation.',
    },
    publications: {
      page_title:    'Publications',
      page_desc:     'Peer-reviewed articles, conference papers, and other scientific output.',
      eyebrow:       'Scientific output',
      headline:      'Publications & <em>Research.</em>',
      subhead:       'A full record of peer-reviewed articles, conference contributions, and other scientific outputs.',
      all_label:     'All',
      doi_label:     'DOI',
      abstract_show: 'Abstract',
      abstract_hide: 'Hide',
      external_link: 'View publication →',
      no_doi:        'No DOI',
    },
    consulting: {
      page_title: 'Consulting — Martina Říhová',
      page_desc:  'Scientific consulting and R&D advisory services for cosmetic companies exploring nanofiber technology.',
      eyebrow:    'Work with me',
      headline:   'Turning science into <em>products.</em>',
      intro:      'I work with cosmetic brands, ingredient companies, and startups as a scientific consultant — helping teams navigate the technical complexity of nanofiber formulation from early concept through to prototype.',
      services: [
        {
          num:   '01',
          title: 'R&D Advisory',
          desc:  'Expert guidance on electrospinning processes, polymer selection, and formulation design. Ideal for teams building new delivery systems or optimising existing ones.',
        },
        {
          num:   '02',
          title: 'Technical Reports',
          desc:  'Comprehensive literature reviews, feasibility assessments, and white papers on nanofiber cosmetics topics. Suitable for internal strategy or regulatory submission support.',
        },
        {
          num:   '03',
          title: 'Workshop & Training',
          desc:  'Hands-on or remote sessions for R&D teams. Topics range from electrospinning fundamentals to advanced characterisation techniques for cosmetic-grade fibers.',
        },
        {
          num:   '04',
          title: 'Advisory Board',
          desc:  'Ongoing scientific advisory relationship. Monthly consultations, literature monitoring, and strategic input on innovation roadmaps.',
        },
      ],
      ideal_title:  'Ideal for',
      ideal_list:   [
        'Cosmetic brands exploring active delivery innovation',
        'Ingredient suppliers developing nanofiber raw materials',
        'Biotech and femtech startups in the skincare space',
        'Investors needing scientific due diligence',
      ],
      cta_title:   'Start a conversation',
      cta_desc:    'Tell me about your project and I will get back to you within 48 hours.',
      cta_button:  'Send a message',
    },
    contact: {
      page_title:  'Contact — Martina Říhová',
      page_desc:   'Get in touch for collaboration, consulting inquiries, or press.',
      eyebrow:     'Get in touch',
      headline:    'Let\'s <em>collaborate.</em>',
      intro:       'Whether you\'re interested in a consulting project, a research collaboration, an advisory role, or just want to talk nanofibers — I\'d love to hear from you.',
      form: {
        name:        'Your name',
        email:       'Email address',
        subject:     'Subject',
        subject_opts: ['Consulting inquiry', 'Research collaboration', 'Advisory role', 'Press & media', 'Other'],
        message:     'Message',
        send:        'Send message',
        sending:     'Sending…',
        success:     'Message sent — I\'ll be in touch within 48 hours.',
        error:       'Something went wrong. Please email me directly.',
      },
      direct_title: 'Direct contact',
      linkedin:     'LinkedIn',
      scholar:      'Google Scholar',
      orcid:        'ORCID',
      researchgate: 'ResearchGate',
    },
    location: {
      label:   'Location',
      headline:'Based in<br/><em>{city}, {country}.</em><br/>Collaborating globally.',
      blurb:   'Open to remote consulting, international conference invitations, and collaboration with research groups worldwide.',
      cta:     'Send a collaboration request',
    },
    footer: {
      links: [
        { label: 'LinkedIn',       href: 'https://linkedin.com' },
        { label: 'ResearchGate',   href: 'https://researchgate.net' },
        { label: 'Google Scholar', href: 'https://scholar.google.com' },
        { label: 'ORCID',          href: 'https://orcid.org' },
      ],
    },
    meta: {
      site_title: 'Martina Říhová — Nanofiber Research',
      site_desc:  'PhD researcher specialising in electrospun nanofibers for cosmetic applications.',
      blog_title: 'Blog — Martina Říhová',
      blog_desc:  'Research insights, technical guides, and industry perspectives on nanofibers in cosmetics.',
    },
  },

  cs: {
    nav: {
      research:     'Výzkum',
      publications: 'Publikace',
      consulting:   'Spolupráce',
      blog:         'Blog',
      contact:      'Kontakt',
    },
    hero: {
      eyebrow:     'PhD výzkumnice · Nanovlákna v kosmetice',
      title:       'Věda krásy na <em>nanoúrovni.</em>',
      description: 'Výzkum na průsečíku odstředivého a elektrostatického zvlákňování, nanotechnologií a kosmetické vědy — vytváření systémů nové generace pro doručování aktivních látek do pleti.',
      cta_primary: 'Prozkoumat výzkum',
      cta_ghost:   'Kontaktovat',
      stat_labels: ['Publikace', 'Roky výzkumu', 'Průmyslové projekty'],
      pub_label:   'Nejnovější publikace',
    },
    expertise: [
      { num: '01', title: 'Odstředivé a elektrostatické zvlákňování', desc: 'Výroba nanovláken pro kosmetické a farmaceutické aplikace.' },
      { num: '02', title: 'Doručování látek',            desc: 'Enkapsulace a řízené uvolňování aktivních složek kosmetiky.' },
      { num: '03', title: 'Návrh biomaterálů',           desc: 'Biokompatibilní polymerní systémy pro aplikace v kontaktu s kůží.' },
      { num: '04', title: 'Průmyslová spolupráce',       desc: 'Vědecké poradenství pro kosmetické firmy zaměřené na nanotechnologie.' },
    ],
    about: {
      label:             'O mně',
      headline:          'Věda, která<br/>dotýká se <em>kůže.</em>',
      body: [
        'Jsem PhD výzkumnice specializující se na aplikaci <strong>elektrostaticky zvlákněných nanovláken</strong> v kosmetické formulační vědě. Moje práce propojuje základní chemii polymerů s reálnými inovacemi kosmetických produktů.',
        'Vedle akademického výzkumu spolupracuji s kosmetickými značkami a výrobci surovin jako <strong>vědecká konzultantka</strong> — pomáhám převádět laboratorní poznatky do realizovatelných produktových konceptů.',
      ],
      institution_label: 'Instituce',
      location_label:    'Místo',
      field_label:       'Obor',
    },
    blog: {
      section_title: 'Z výzkumného deníku',
      all_articles:  'Všechny články',
      back:          'Všechny články',
      by:            'Autor',
      read_more:     'Zpět na všechny články',
      get_in_touch:  'Kontaktovat',
      page_title:    'Všechny články',
      page_desc:     'Vědecké pohledy na nanovlákna, elektrostatické zvlákňování a inovace v kosmetice.',
    },
    publications: {
      page_title:    'Publikace',
      page_desc:     'Recenzované články, konferenční příspěvky a další vědecké výstupy.',
      eyebrow:       'Vědecké výstupy',
      headline:      'Publikace & <em>výzkum.</em>',
      subhead:       'Úplný přehled recenzovaných článků, konferenčních příspěvků a dalších vědeckých výstupů.',
      all_label:     'Vše',
      doi_label:     'DOI',
      abstract_show: 'Abstrakt',
      abstract_hide: 'Skrýt',
      external_link: 'Zobrazit publikaci →',
      no_doi:        'Bez DOI',
    },
    consulting: {
      page_title: 'Spolupráce — Martina Říhová',
      page_desc:  'Vědecké poradenství a R&D konzultace pro kosmetické firmy zaměřené na nanovláknové technologie.',
      eyebrow:    'Spolupracujme',
      headline:   'Věda, která se stává <em>produktem.</em>',
      intro:      'Spolupracuji s kosmetickými značkami, výrobci surovin a startupÿ jako vědecká konzultantka — pomáhám týmům orientovat se v technické složitosti formulací na bázi nanovláken od prvotního konceptu až po prototyp.',
      services: [
        {
          num:   '01',
          title: 'R&D poradenství',
          desc:  'Odborné vedení při výběru elektrostatického zvlákňování, polymerů a návrhu formulací. Ideální pro týmy vyvíjející nové systémy doručování nebo optimalizující stávající.',
        },
        {
          num:   '02',
          title: 'Technické zprávy',
          desc:  'Komplexní literární rešerše, hodnocení proveditelnosti a white papers na témata kosmetiky s nanovlákny. Vhodné pro interní strategii nebo podporu regulatorních podání.',
        },
        {
          num:   '03',
          title: 'Workshopy a školení',
          desc:  'Prezenční nebo vzdálené semináře pro R&D týmy. Témata sahají od základů elektrostatického zvlákňování po pokročilé charakterizační techniky pro vlákna kosmetické kvality.',
        },
        {
          num:   '04',
          title: 'Poradní sbor',
          desc:  'Průběžný vědecký poradní vztah. Měsíční konzultace, sledování literatury a strategický vstup do inovačních plánů.',
        },
      ],
      ideal_title:  'Vhodné pro',
      ideal_list:   [
        'Kosmetické značky zkoumající inovace v oblasti doručování aktivních látek',
        'Dodavatele surovin vyvíjející nanovláknové suroviny',
        'Biotech a femtech startupy v oblasti péče o pleť',
        'Investory potřebující vědeckou due diligence',
      ],
      cta_title:   'Začněme konverzaci',
      cta_desc:    'Napište mi o svém projektu a ozveme se do 48 hodin.',
      cta_button:  'Napsat zprávu',
    },
    contact: {
      page_title:  'Kontakt — Martina Říhová',
      page_desc:   'Kontaktujte mě pro spolupráci, konzultace nebo média.',
      eyebrow:     'Spojte se se mnou',
      headline:    'Pojďme <em>spolupracovat.</em>',
      intro:       'Ať vás zajímá konzultační projekt, výzkumná spolupráce, poradní role nebo jen chcete mluvit o nanovláknech — ráda si od vás přečtu.',
      form: {
        name:         'Vaše jméno',
        email:        'E-mailová adresa',
        subject:      'Předmět',
        subject_opts: ['Konzultační poptávka', 'Výzkumná spolupráce', 'Poradní role', 'Média a tisk', 'Jiné'],
        message:      'Zpráva',
        send:         'Odeslat zprávu',
        sending:      'Odesílání…',
        success:      'Zpráva odeslána — ozveme se do 48 hodin.',
        error:        'Něco se pokazilo. Napište mi prosím přímo.',
      },
      direct_title: 'Přímý kontakt',
      linkedin:     'LinkedIn',
      scholar:      'Google Scholar',
      orcid:        'ORCID',
      researchgate: 'ResearchGate',
    },
    location: {
      label:    'Poloha',
      headline: 'Sídlím v<br/><em>{city}, {country}.</em><br/>Spolupracuji globálně.',
      blurb:    'Otevřená vzdálené konzultaci, pozvánkám na mezinárodní konference a spolupráci s výzkumnými skupinami po celém světě.',
      cta:      'Napsat ohledně spolupráce',
    },
    footer: {
      links: [
        { label: 'LinkedIn',       href: 'https://linkedin.com' },
        { label: 'ResearchGate',   href: 'https://researchgate.net' },
        { label: 'Google Scholar', href: 'https://scholar.google.com' },
        { label: 'ORCID',          href: 'https://orcid.org' },
      ],
    },
    meta: {
      site_title: 'Martina Říhová — Výzkum nanovláken',
      site_desc:  'PhD výzkumnice specializující se na elektrostaticky zvlákněná nanovlákna pro kosmetické aplikace.',
      blog_title: 'Blog — Martina Říhová',
      blog_desc:  'Vědecké pohledy na nanovlákna, elektrostatické zvlákňování a inovace v kosmetice.',
    },
  },
} as const;

export function useT(lang: Lang) { return t[lang]; }

export function alternatePath(pathname: string, currentLang: Lang): string {
  const other = currentLang === 'en' ? 'cs' : 'en';
  // Anchored replace: only swap the /en or /cs at the very start of the path
  return pathname.replace(new RegExp(`^/(${currentLang})(/|$)`), `/${other}$2`);
}

export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function formatDateShort(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-GB', { year: 'numeric', month: 'long' });
}

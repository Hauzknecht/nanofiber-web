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
      eyebrow:     'PhD Researchers · Nanofibers in Cosmetics',
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
        'We are specialists in <strong>fiber</strong> application in cosmetic science. Our work bridges fundamental polymer chemistry with real-world innovation in cosmetic products. Alongside academic research, we offer <strong>collaboration</strong> with cosmetic brands and raw material suppliers as scientific consultants.',
        'Our goal is to help translate laboratory findings into viable products and concepts that truly work in practice. We have extensive experience not only in fiber preparation, but also in their application and the incorporation of additives into final formulations. We thrive on challenges that sit at the intersection of science and industry and that is where we find the most exciting solutions.',
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
      page_title: 'Consulting',
      page_desc:  'Scientific consulting and R&D advisory services for cosmetic companies exploring nanofiber technology.',
      eyebrow:    'Work with me',
      headline:   'Turning science into <em>products.</em>',
      intro:      'We offer collaboration with cosmetic brands, raw material suppliers and startups as scientific consultants. We help teams navigate the technical complexity of nanofiber-based formulations from initial concept to prototype.',
      services: [
        {
          num:   '01',
          title: 'R&D Consulting',
          desc:  'Not sure where to start? Whether you are looking for the right polymer, deciding on a spinning method, or troubleshooting a formulation that is not performing as expected, we are here to help. Our expertise is rooted in centrifugal spinning, but the principles we have built over the years translate well into electrospinning too. We offer expert consultations and tailored guidance for teams developing new active delivery systems or optimising existing ones.',
        },
        {
          num:   '02',
          title: 'Collaboration and Joint Projects',
          desc:  'Do you have a research idea but lack fiber expertise? Or are you looking for an academic partner for an industry project? We are open to joint projects, grant applications and long-term research collaboration. The best things happen when the right people come together.',
        },
        {
          num:   '03',
          title: 'Workshop & Training',
          desc:  'In-person or remote seminars for R&D teams. Topics range from the fundamentals of electrospinning to advanced characterisation techniques for cosmetic-grade fibers.',
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
      page_title:  'Contact',
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
      site_title: 'Nanofiber Research',
      site_desc:  'PhD researchers specialising in centrifugal and electrospun nanofibers for cosmetic applications.',
      blog_title: 'Blog',
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
      eyebrow:     'PhD výzkumníci · Nanovlákna v kosmetice',
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
      label:             'O nás',
      headline:          'Věda, která<br/>dotýká se <em>kůže.</em>',
      body: [
        'Jsme specialisté na aplikaci <strong>vláken</strong> v kosmetické vědě. Naše práce propojuje základní chemii polymerů s reálnými inovacemi v oblasti kosmetických produktů. Vedle akademického výzkumu nabízíme <strong>spolupráci</strong> kosmetickým značkám a výrobcům surovin jako vědečtí konzultanti.',
        'Pomáhat převádět laboratorní poznatky do realizovatelných produktových konceptů, které skutečně fungují v praxi. Máme bohaté zkušenosti nejen s přípravou vláken, ale také s jejich aplikací a začleňováním aditiv do finálních formulací. Baví nás výzvy, které stojí na pomezí vědy a průmyslu, a právě tam nacházíme ta nejzajímavější řešení.',
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
      page_title: 'Spolupráce',
      page_desc:  'Vědecké poradenství a R&D konzultace pro kosmetické firmy zaměřené na nanovláknové technologie.',
      eyebrow:    'Spolupracujme',
      headline:   'Věda, která se stává <em>produktem.</em>',
      intro:      'Nabízíme spolupráci s kosmetickými značkami, výrobci surovin a startupy jako vědečtí konzultanti. Pomáháme týmům orientovat se v technické složitosti formulací na bázi nanovláken od prvotního konceptu až po prototyp.',
      services: [
        {
          num:   '01',
          title: 'R&D poradenství',
          desc:  'Nevíte, kde začít? Ať už hledáte správný polymer, řešíte výběr metody zvlákňování nebo ladíte formulaci, která nefunguje tak, jak má, rádi vám pomůžeme. Naše expertiza stojí na centrifugálním zvlákňování, ale principy, které jsme za ta léta získali, jsou přenositelné i do oblasti elektrostatického zvlákňování. Nabízíme odborné konzultace a vedení na míru pro týmy, které vyvíjejí nové systémy doručování účinných látek nebo optimalizují ty stávající.',
        },
        {
          num:   '02',
          title: 'Spolupráce a společné projekty',
          desc:  'Máte výzkumný nápad, ale chybí vám expertise v oblasti vláken? Nebo hledáte akademického partnera pro průmyslový projekt? Jsme otevřeni společným projektům, grantovým přihláškám i dlouhodobé výzkumné spolupráci. Nejlepší věci totiž vznikají, když se spojí správní lidé.',
        },
        {
          num:   '03',
          title: 'Workshopy a školení',
          desc:  'Prezenční nebo vzdálené semináře pro R&D týmy. Témata od základů elektrostatického zvlákňování po pokročilé charakterizační techniky pro vlákna kosmetické kvality.',
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
      page_title:  'Kontakt',
      page_desc:   'Kontaktujte nás pro spolupráci, konzultace nebo média.',
      eyebrow:     'Spojte se s námi',
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
      headline: 'Sídlím v<br/><em>{city}, {country}.</em><br/>Spolupracujeme globálně.',
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
      site_title: 'Výzkum nanovláken',
      site_desc:  'PhD výzkumníci specializující se na odstředivě a elektrostaticky zvlákněná nanovlákna pro kosmetické aplikace.',
      blog_title: 'Blog',
      blog_desc:  'Vědecké pohledy na nanovlákna, elektrostatické a odstředivé zvlákňování a inovace v kosmetice.',
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

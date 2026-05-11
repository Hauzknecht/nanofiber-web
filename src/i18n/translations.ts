export type Lang = 'en' | 'cs';

// ─── All UI strings in one place ─────────────────────────────
export const t = {
  en: {
    // Nav
    nav: {
      research:     'Research',
      publications: 'Publications',
      consulting:   'Consulting',
      blog:         'Blog',
      contact:      'Contact',
    },
    // Hero
    hero: {
      eyebrow:     'PhD Researcher · Nanofibers in Cosmetics',
      title:       'Engineering beauty at the <em>nanoscale.</em>',
      description: 'Research at the intersection of electrospinning, nanotechnology, and cosmetic science — creating next-generation delivery systems for skincare actives.',
      cta_primary: 'Explore research',
      cta_ghost:   'Get in touch',
      stat_labels: ['Publications', 'Years research', 'Industry projects'],
      pub_label:   'Latest publication',
    },
    // Expertise
    expertise: [
      { num: '01', title: 'Electrospinning',    desc: 'Nanofiber fabrication for cosmetic and pharmaceutical delivery applications.' },
      { num: '02', title: 'Active Delivery',    desc: 'Encapsulation and controlled release of skincare actives at the cellular level.' },
      { num: '03', title: 'Biomaterial Design', desc: 'Biocompatible polymer systems for skin-contact applications.' },
      { num: '04', title: 'Consulting',         desc: 'R&D advisory for cosmetic companies exploring nanotechnology.' },
    ],
    // About
    about: {
      label:     'About',
      headline:  'Science that<br/>touches <em>skin.</em>',
      body: [
        'I am a PhD researcher specialising in the application of <strong>electrospun nanofibers</strong> to cosmetic formulation science. My work bridges fundamental polymer chemistry with real-world cosmetic product innovation.',
        'Alongside my academic research, I work with cosmetic brands and ingredient companies as a <strong>scientific consultant</strong>, helping translate laboratory findings into viable product concepts.',
      ],
      institution_label: 'Institution',
      location_label:    'Location',
      field_label:       'Field',
    },
    // Blog
    blog: {
      section_title: 'From the research log',
      all_articles:  'All articles',
      back:          'All articles',
      by:            'By',
      read_more:     'Back to all articles',
      get_in_touch:  'Get in touch',
      page_title:    'All articles',
      page_desc:     'Scientific perspectives on nanofibers, electrospinning, and cosmetic innovation.',
      draft_hidden:  '(draft — not visible on site)',
    },
    // Location
    location: {
      label:   'Location',
      headline:'Based in<br/><em>{city}, {country}.</em><br/>Collaborating globally.',
      blurb:   'Open to remote consulting, international conference invitations, and collaboration with research groups worldwide.',
      cta:     'Send a collaboration request',
    },
    // Footer
    footer: {
      links: [
        { label: 'LinkedIn',       href: 'https://linkedin.com' },
        { label: 'ResearchGate',   href: 'https://researchgate.net' },
        { label: 'Google Scholar', href: 'https://scholar.google.com' },
        { label: 'ORCID',          href: 'https://orcid.org' },
      ],
    },
    // Meta
    meta: {
      site_title: 'Jana Nováková — Nanofiber Research',
      site_desc:  'PhD researcher specialising in electrospun nanofibers for cosmetic applications. Scientific consulting, publications and industry collaboration.',
      blog_title: 'Blog — Jana Nováková',
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
      description: 'Výzkum na průsečíku elektrostatického zvlákňování, nanotechnologií a kosmetické vědy — vytváření systémů nové generace pro doručování aktivních látek do pleti.',
      cta_primary: 'Prozkoumat výzkum',
      cta_ghost:   'Kontaktovat',
      stat_labels: ['Publikace', 'Roky výzkumu', 'Průmyslové projekty'],
      pub_label:   'Nejnovější publikace',
    },
    expertise: [
      { num: '01', title: 'Elektrostatické zvlákňování', desc: 'Výroba nanovláken pro kosmetické a farmaceutické aplikace.' },
      { num: '02', title: 'Doručování látek',            desc: 'Enkapsulace a řízené uvolňování aktivních složek kosmetiky.' },
      { num: '03', title: 'Návrh biomaterálů',           desc: 'Biokompatibilní polymerní systémy pro aplikace v kontaktu s kůží.' },
      { num: '04', title: 'Průmyslová spolupráce',       desc: 'Vědecké poradenství pro kosmetické firmy zaměřené na nanotechnologie.' },
    ],
    about: {
      label:     'O mně',
      headline:  'Věda, která<br/>dotýká se <em>kůže.</em>',
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
      draft_hidden:  '(koncept — na webu není vidět)',
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
      site_title: 'Jana Nováková — Výzkum nanovláken',
      site_desc:  'PhD výzkumnice specializující se na elektrostaticky zvlákněná nanovlákna pro kosmetické aplikace. Vědecké poradenství, publikace a průmyslová spolupráce.',
      blog_title: 'Blog — Jana Nováková',
      blog_desc:  'Vědecké pohledy na nanovlákna, elektrostatické zvlákňování a inovace v kosmetice.',
    },
  },
} as const;

// ─── Helpers ─────────────────────────────────────────────────

/** Get the translation object for a given lang */
export function useT(lang: Lang) {
  return t[lang];
}

/** Given the current URL pathname, return the alternate-language path */
export function alternatePath(pathname: string, currentLang: Lang): string {
  const other = currentLang === 'en' ? 'cs' : 'en';
  return pathname.replace(`/${currentLang}/`, `/${other}/`)
                 .replace(`/${currentLang}`, `/${other}`);
}

/** Format a date according to locale */
export function formatDate(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-GB', {
    year: 'numeric', month: 'long', day: 'numeric',
  });
}

export function formatDateShort(date: Date, lang: Lang): string {
  return date.toLocaleDateString(lang === 'cs' ? 'cs-CZ' : 'en-GB', {
    year: 'numeric', month: 'long',
  });
}

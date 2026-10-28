export const bookPhotos = [
  {
    id: "2026-10-21-09-17-26",
    src: "/book/2026-10-21-09-17-26.jpeg",
    featured: true,
    alt: {
      en: "Evergreen book photograph",
      rw: "Ifoto y’igitabo cya Evergreen",
    },
    caption: {
      en: "Evergreen Book — Photo 01",
      rw: "Igitabo cya Evergreen — Ifoto 01",
    },
  },
  {
    id: "2026-10-21-09-17-28",
    src: "/book/2026-10-21-09-17-28.jpeg",
    featured: true,
    alt: {
      en: "Evergreen book photograph",
      rw: "Ifoto y’igitabo cya Evergreen",
    },
    caption: {
      en: "Evergreen Book — Photo 02",
      rw: "Igitabo cya Evergreen — Ifoto 02",
    },
  },
  {
    id: "43014",
    src: "/book/43014.jpg",
    featured: false,
    alt: {
      en: "Evergreen book photograph 43014",
      rw: "Ifoto y’igitabo cya Evergreen 43014",
    },
    caption: {
      en: "Evergreen Book — Photo 43014",
      rw: "Igitabo cya Evergreen — Ifoto 43014",
    },
  },
];

export const bookSummaries = [
  {
    id: "learning-through-doing",
    title: {
      rw: "Kwiga binyuze mu bikorwa",
      en: "Learning through action",
    },
    description: {
      rw: "Igitabo gitanga urugero rw’uko ibikorwa bifatika, kuganira no kwisuzuma bishobora gufasha urubyiruko kwiga no guhindura ibyo rwize ibikorwa byiza.",
      en: "The book shows how practical activities, conversation, and reflection can help young people learn and turn new ideas into positive action.",
    },
  },
  {
    id: "self-awareness",
    title: {
      rw: "Kwisobanukirwa no kwiyobora",
      en: "Self-awareness and self-management",
    },
    description: {
      rw: "Imyitozo yo kwitegereza ibitekerezo n’amarangamutima ifasha umuntu kumenya uko yiyumva, kumva abandi no guhitamo uko yakwitwara.",
      en: "Activities about noticing thoughts and feelings help people understand themselves, listen to others, and choose how to respond.",
    },
  },
  {
    id: "gratitude",
    title: {
      rw: "Gushimira no kubona ibyiza",
      en: "Gratitude and noticing what is good",
    },
    description: {
      rw: "Gutekereza ku byo dushima, ku bantu badufasha no ku byiza bidukikije bidutoza kubibona no kubigaragaza mu buzima bwa buri munsi.",
      en: "Reflecting on what we value, the people who help us, and the good around us builds a habit of noticing and expressing gratitude.",
    },
  },
  {
    id: "communication",
    title: {
      rw: "Kuganira no kumvikana",
      en: "Communication and understanding",
    },
    description: {
      rw: "Imikino n’ibiganiro byo mu gitabo byibutsa akamaro ko gutega amatwi, gusobanura ibitekerezo no kuganira mu bwubahane.",
      en: "The book’s activities highlight the value of listening, explaining ideas clearly, and speaking with respect.",
    },
  },
  {
    id: "perspective-taking",
    title: {
      rw: "Kureba ibintu mu buryo butandukanye",
      en: "Seeing different perspectives",
    },
    description: {
      rw: "Imyitozo yo kwitegereza no kuganira itera abitabiriye gutekereza ko abantu bashobora kubona ikibazo kimwe mu buryo butandukanye.",
      en: "Observation and discussion activities encourage participants to consider that people may see the same situation in different ways.",
    },
  },
  {
    id: "decisions",
    title: {
      rw: "Gufata ibyemezo no gukemura ibibazo",
      en: "Making decisions and solving problems",
    },
    description: {
      rw: "Ibibazo n’ingero zo mu buzima busanzwe bifasha kugereranya amahitamo, gutekereza ku ngaruka no gushaka igisubizo gifasha itsinda.",
      en: "Everyday situations help learners compare options, consider consequences, and look for solutions that work for the group.",
    },
  },
  {
    id: "teamwork",
    title: {
      rw: "Ubufatanye n’amasezerano y’itsinda",
      en: "Teamwork and group agreements",
    },
    description: {
      rw: "Gukorera hamwe, kumvikana ku mategeko no gusangira inshingano bituma buri wese agira uruhare mu ntego ihuriweho.",
      en: "Working together, agreeing on shared rules, and dividing responsibilities help everyone contribute to a common goal.",
    },
  },
  {
    id: "wellbeing",
    title: {
      rw: "Kwita ku marangamutima n’imibereho myiza",
      en: "Emotional wellbeing and self-care",
    },
    description: {
      rw: "Ibitabo byibutsa ko kumenya uko umuntu yiyumva no gushaka ubufasha ari ingenzi mu guhangana n’ibibazo no kwirinda kwiheba.",
      en: "The lessons emphasize that recognizing how we feel and seeking support can help us handle difficulties and protect our wellbeing.",
    },
  },
  {
    id: "empathy",
    title: {
      rw: "Impuhwe no kwita ku bandi",
      en: "Empathy and care for others",
    },
    description: {
      rw: "Ingero z’abantu n’inyamaswa zigaragaza ko kwitegereza, kwishyira mu mwanya w’undi no kumwitaho ari ingenzi mu mibanire.",
      en: "Stories about people and animals show how observation, perspective-taking, and care can strengthen relationships.",
    },
  },
  {
    id: "animals-and-nature",
    title: {
      rw: "Kwiga ku nyamaswa no ku bidukikije",
      en: "Learning from animals and nature",
    },
    description: {
      rw: "Inkuru zivuga ku ngagi, inguge, octopus, imbwa n’inzovu zitanga uburyo bwo kuganira ku mibanire, ubuhanga n’impuhwe, ndetse no ku kubungabunga ibinyabuzima.",
      en: "Stories about gorillas, chimpanzees, octopuses, dogs, and elephants open conversations about relationships, abilities, empathy, and protecting wildlife.",
    },
  },
  {
    id: "play",
    title: {
      rw: "Akamaro ko gukina",
      en: "The value of play",
    },
    description: {
      rw: "Gukina bishobora gutuma abantu bishimana, bagirana ubusabane kandi bakitoza gukorana no gukemura ibibazo.",
      en: "Play can help people enjoy time together, build relationships, and practice cooperation and problem-solving.",
    },
  },
];

export function getBookPhotos(language = "en") {
  const lang = language === "rw" ? "rw" : "en";

  return bookPhotos.map((photo) => ({
    id: photo.id,
    src: photo.src,
    featured: photo.featured ?? false,
    alt: photo.alt[lang] ?? photo.alt.en,
    caption: photo.caption[lang] ?? photo.caption.en,
  }));
}

export function getBookSummaries(language = "en") {
  const lang = language === "rw" ? "rw" : "en";

  return bookSummaries.map((summary) => ({
    id: summary.id,
    title: summary.title[lang],
    description: summary.description[lang],
  }));
}

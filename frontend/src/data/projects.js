const images = {
  planting: "/projects/tree-planting.jpg",
  wildlife: "/projects/wildlife-protection.jpg",
  waste: "/projects/clean-environment.jpg",
  learning: "/projects/eco-education.jpg",
  water: "/projects/water-guardians.jpg",
  recycling: "/projects/recycling.jpg",
  community: "/projects/green-communities.jpg",
};

const rootsAndShootsGallery = Array.from(
  { length: 46 },
  (_, index) => `/projects/roots-and-shoots/roots-and-shoots-${String(index + 1).padStart(2, "0")}.jpeg`,
);

const rootsAndShootsPhotoStories = [
  {
    en: ["Gathering to grow", "Students and volunteers come together to begin a school garden activity."],
    rw: ["Iteraniro ryo kwiga no guhinga", "Abanyeshuri n’abakorerabushake bahuriye hamwe batangira igikorwa cy’ubusitani bwo ku ishuri."],
  },
  {
    en: ["A lesson shared by all", "Students listen together during an environmental learning session."],
    rw: ["Isomo rihuje abanyeshuri", "Abanyeshuri bateze amatwi mu isomo ryo kwiga ku bidukikije."],
  },
  {
    en: ["Learning side by side", "A facilitator leads a lesson with students gathered around."],
    rw: ["Kwiga bafatanyije", "Umufashamyumvire ayobora isomo, abanyeshuri bamuteze amatwi."],
  },
  {
    en: ["Preparing a place to plant", "Young gardeners work together to prepare soil for the garden."],
    rw: ["Gutegura aho guhinga", "Abanyeshuri bakorana bategura ubutaka buzaterwamo ibimera."],
  },
  {
    en: ["Hands in the soil", "Students help fill and arrange the garden growing beds."],
    rw: ["Amaboko mu butaka", "Abanyeshuri bafatanya kuzuza no gutunganya ibice byo guhingamo."],
  },
  {
    en: ["Building the garden together", "Learners take part in preparing a shared growing space."],
    rw: ["Kubaka ubusitani bafatanyije", "Abanyeshuri bagira uruhare mu gutegura ahantu ho guhingira hamwe."],
  },
  {
    en: ["Teamwork makes a garden", "Students cooperate as they shape and fill the planting beds."],
    rw: ["Ubufatanye bwubaka ubusitani", "Abanyeshuri bafatanya gutunganya no kuzuza ibice byo guhingamo."],
  },
  {
    en: ["The first garden beds", "Circular raised beds begin to take shape in the schoolyard."],
    rw: ["Ibyiciro bya mbere by’ubusitani", "Ibyiciro by’ubusitani bizamuye bitangira kubakwa mu kibuga cy’ishuri."],
  },
  {
    en: ["Shaping a growing space", "The garden beds are arranged and prepared for planting."],
    rw: ["Gutegura ahazakura ibimera", "Ibyiciro by’ubusitani biratunganywa bitegurirwa guterwamo."],
  },
  {
    en: ["A garden taking shape", "New circular beds create a dedicated space for school gardening."],
    rw: ["Ubusitani burimo kubakwa", "Ibyiciro bishya bizengurutse bitegura ahantu ho guhinga ku ishuri."],
  },
  {
    en: ["Proud of what we are growing", "Students gather beside the garden they helped prepare."],
    rw: ["Bishimiye ibyo bahinga", "Abanyeshuri bahuriye iruhande rw’ubusitani bafashije gutegura."],
  },
  {
    en: ["Planning the next steps", "Participants share ideas during a garden and environmental discussion."],
    rw: ["Gutegura intambwe ikurikira", "Abitabiriye basangira ibitekerezo mu kiganiro ku busitani n’ibidukikije."],
  },
  {
    en: ["A sign for shared action", "Students stand with the Roots & Shoots garden sign."],
    rw: ["Icyapa cy’igikorwa gihuriweho", "Abanyeshuri bahagaze ku cyapa cy’ubusitani bwa Roots & Shoots."],
  },
  {
    en: ["Our Roots & Shoots garden", "The school garden brings students together around a common project."],
    rw: ["Ubusitani bwacu bwa Roots & Shoots", "Ubusitani bwo ku ishuri buhuriza abanyeshuri ku mushinga umwe."],
  },
  {
    en: ["A school community in action", "Students gather outdoors as they take part in the garden project."],
    rw: ["Abanyeshuri bakorera hamwe", "Abanyeshuri bahuriye hanze bagira uruhare mu mushinga w’ubusitani."],
  },
  {
    en: ["Growing greener together", "A group of students celebrates their shared garden activity."],
    rw: ["Guhinga icyatsi bafatanyije", "Itsinda ry’abanyeshuri ryishimira igikorwa cy’ubusitani bakoze hamwe."],
  },
  {
    en: ["Students beside the garden", "The school garden becomes a place for students to learn together."],
    rw: ["Abanyeshuri iruhande rw’ubusitani", "Ubusitani bwo ku ishuri buba ahantu abanyeshuri bigira hamwe."],
  },
  {
    en: ["A garden made by many hands", "Students and volunteers gather around the newly prepared beds."],
    rw: ["Ubusitani bwakozwe n’amaboko menshi", "Abanyeshuri n’abakorerabushake bahuriye hafi y’ibice by’ubusitani byateguwe."],
  },
  {
    en: ["A shared place to learn", "The garden sign marks a space for hands-on environmental learning."],
    rw: ["Ahantu ho kwigira hamwe", "Icyapa cy’ubusitani kigaragaza ahantu ho kwigira ku bidukikije hakoreshejwe ibikorwa."],
  },
  {
    en: ["Learning around the garden", "Students gather close to observe and discuss the growing beds."],
    rw: ["Kwiga bakikije ubusitani", "Abanyeshuri begereye ubusitani kugira ngo babwitegereze kandi babuganireho."],
  },
  {
    en: ["Discovering how gardens grow", "Learners observe the soil and share ideas about caring for plants."],
    rw: ["Kumenya uko ubusitani bukura", "Abanyeshuri bitegereza ubutaka kandi bagasangira ibitekerezo byo kwita ku bimera."],
  },
  {
    en: ["Working together in the garden", "Students take part in a practical activity around the planting beds."],
    rw: ["Gukorera hamwe mu busitani", "Abanyeshuri bagira uruhare mu gikorwa gifatika hafi y’ibice byo guhingamo."],
  },
  {
    en: ["The garden brings learners together", "Students gather beside the project sign to learn and participate."],
    rw: ["Ubusitani buhuza abanyeshuri", "Abanyeshuri bahuriye ku cyapa cy’umushinga kugira ngo bige kandi bawugiremo uruhare."],
  },
  {
    en: ["Sharing skills through practice", "A volunteer guides students as they work with the garden soil."],
    rw: ["Gusangira ubumenyi mu bikorwa", "Umukorerabushake ayobora abanyeshuri mu gihe bakorana n’ubutaka bw’ubusitani."],
  },
  {
    en: ["Caring for the growing beds", "Students and volunteers work together to prepare the garden."],
    rw: ["Kwita ku byiciro by’ubusitani", "Abanyeshuri n’abakorerabushake bafatanya gutegura ubusitani."],
  },
  {
    en: ["Learning by doing", "Young people practice caring for the garden as a team."],
    rw: ["Kwiga bakora", "Urubyiruko rwitoza kwita ku busitani ruri hamwe."],
  },
  {
    en: ["A garden built as a community", "Students come together beside the shared school garden."],
    rw: ["Ubusitani bwubatswe n’abagize ishuri", "Abanyeshuri bahuriye iruhande rw’ubusitani basangiye ku ishuri."],
  },
  {
    en: ["The garden at the heart of the school", "Students gather around the raised beds and garden sign."],
    rw: ["Ubusitani hagati mu ishuri", "Abanyeshuri bahuriye hafi y’ibice by’ubusitani n’icyapa cyabwo."],
  },
  {
    en: ["A shared garden, a shared purpose", "Students and volunteers gather around the Roots & Shoots sign."],
    rw: ["Ubusitani n’intego bihuriweho", "Abanyeshuri n’abakorerabushake bahuriye ku cyapa cya Roots & Shoots."],
  },
  {
    en: ["Growing knowledge together", "The school community gathers to learn about its garden project."],
    rw: ["Gukuza ubumenyi bafatanyije", "Abagize ishuri bahuriye hamwe kugira ngo bige ku mushinga w’ubusitani."],
  },
  {
    en: ["A school garden in progress", "Students gather beside the planting beds as the project takes shape."],
    rw: ["Ubusitani bwo ku ishuri burimo kubakwa", "Abanyeshuri bahuriye iruhande rw’ibice byo guhingamo uko umushinga utera imbere."],
  },
  {
    en: ["Listening, learning, and growing", "Students join a learning session beside the garden."],
    rw: ["Gutega amatwi, kwiga no gukura", "Abanyeshuri bitabira isomo hafi y’ubusitani."],
  },
  {
    en: ["A lesson beside the garden", "Students and a facilitator share an outdoor learning moment."],
    rw: ["Isomo hafi y’ubusitani", "Abanyeshuri n’umufashamyumvire basangira umwanya wo kwiga bari hanze."],
  },
  {
    en: ["Preparing the beds for planting", "Students help arrange the soil and materials for the garden."],
    rw: ["Gutegura ibice byo guhingamo", "Abanyeshuri bafasha gutunganya ubutaka n’ibikoresho by’ubusitani."],
  },
  {
    en: ["Every learner can take part", "Students work hands-on to prepare the school garden."],
    rw: ["Buri munyeshuri ashobora kugira uruhare", "Abanyeshuri bakora ibikorwa bifatika byo gutegura ubusitani bwo ku ishuri."],
  },
  {
    en: ["Making room for new growth", "The garden space is prepared together, one task at a time."],
    rw: ["Gutegura ahazamera ibimera bishya", "Abanyeshuri bategura ahazaba ubusitani bafatanyije, umurimo ku wundi."],
  },
  {
    en: ["Many hands prepare the garden", "Students and volunteers shape the beds and ready the soil."],
    rw: ["Amaboko menshi ategura ubusitani", "Abanyeshuri n’abakorerabushake batunganya ibice byo guhingamo n’ubutaka."],
  },
  {
    en: ["Working side by side", "The school community shares the work of building its garden."],
    rw: ["Gukorana umurimo ku wundi", "Abagize ishuri basangira umurimo wo kubaka ubusitani bwabo."],
  },
  {
    en: ["Learning to care for the earth", "Students take part in preparing soil and garden beds."],
    rw: ["Kwiga kwita ku butaka", "Abanyeshuri bagira uruhare mu gutegura ubutaka n’ibice by’ubusitani."],
  },
  {
    en: ["Young gardeners at work", "Students help organize and prepare their school growing space."],
    rw: ["Abahinzi bato bari mu murimo", "Abanyeshuri bafasha gutunganya ahantu ho guhingira ku ishuri."],
  },
  {
    en: ["Growing a garden together", "Learners work as a team to prepare a place for plants."],
    rw: ["Guhinga ubusitani bafatanyije", "Abanyeshuri bakorera hamwe bategura ahantu hazaterwa ibimera."],
  },
  {
    en: ["A team effort takes root", "Students and volunteers share the work around the garden beds."],
    rw: ["Ubufatanye burashinga imizi", "Abanyeshuri n’abakorerabushake basangira imirimo ikorerwa mu busitani."],
  },
  {
    en: ["Building healthy growing spaces", "The group prepares garden beds for future planting."],
    rw: ["Gutegura ahantu heza ho guhingira", "Itsinda ritegura ibice by’ubusitani bizaterwamo ibimera."],
  },
  {
    en: ["Learning from the garden", "Students gather around a garden bed during a practical activity."],
    rw: ["Kwiga hifashishijwe ubusitani", "Abanyeshuri bahuriye ku gice cy’ubusitani mu gikorwa gifatika."],
  },
  {
    en: ["Ready for the next planting", "A prepared garden bed awaits the next step in the school project."],
    rw: ["Biteguye igikorwa cyo gutera", "Igice cy’ubusitani cyateguwe gitegereje intambwe ikurikira y’umushinga w’ishuri."],
  },
  {
    en: ["Making a strong garden bed", "Students and volunteers work together to build a sturdy growing bed."],
    rw: ["Kubaka igice gikomeye cyo guhingamo", "Abanyeshuri n’abakorerabushake bafatanya kubaka igice gikomeye cy’ubusitani."],
  },
  {
    en: ["Ideas that grow", "Students look at a learning display together during the garden activity."],
    rw: ["Ibitekerezo bikura", "Abanyeshuri bitegereza hamwe icyapa cy’inyigisho mu gikorwa cy’ubusitani."],
  },
];

export const evergreenProjects = [
  {
    id: "evergreen-tree-planting",
    slug: "evergreen-tree-planting",
    icon: "🌳",
    image: images.planting,
    en: {
      title: "Evergreen Tree Planting",
      category: "Tree planting",
      description:
        "Planting trees in schools, villages, and erosion-prone areas to expand forests and fight climate change.",
    },
    rw: {
      title: "Gutera Ibiti kwa Evergreen",
      category: "Guhinga ibiti",
      description:
        "Gutera ibiti mu mashuri, mu midugudu no ahantu hangijwe n'isuri, hagamijwe kongera amashyamba no kurwanya imihindagurikire y'ikirere.",
    },
  },
  {
    id: "evergreen-wildlife-protection",
    slug: "evergreen-wildlife-protection",
    icon: "🐾",
    image: images.wildlife,
    en: {
      title: "Evergreen Wildlife Protection",
      category: "Wildlife protection",
      description:
        "Protecting wildlife, conserving the places they live, and teaching people about their value in our ecosystems.",
    },
    rw: {
      title: "Kurinda Inyamaswa kwa Evergreen",
      category: "Kurinda inyamaswa",
      description:
        "Kurinda inyamaswa, kubungabunga aho ziba no kwigisha abantu akamaro kazo mu bidukikije.",
    },
  },
  {
    id: "evergreen-clean-environment",
    slug: "evergreen-clean-environment",
    icon: "🧹",
    image: images.waste,
    en: {
      title: "Evergreen Clean Environment",
      category: "Clean environment",
      description:
        "Mobilizing communities to collect waste, clean the places they live, and reduce the use of plastic.",
    },
    rw: {
      title: "Ibidukikije Bisukuye kwa Evergreen",
      category: "Ibidukikije bisukuye",
      description:
        "Gukangurira abaturage gukusanya imyanda, gusukura aho batuye no kugabanya ikoreshwa rya pulasitiki.",
    },
  },
  {
    id: "evergreen-eco-education",
    slug: "evergreen-eco-education",
    icon: "📚",
    image: images.learning,
    en: {
      title: "Evergreen Eco-Education",
      category: "Eco-education",
      description:
        "Teaching children and young people to protect the environment through lessons, videos, games, and school activities.",
    },
    rw: {
      title: "Uburezi bw'Ibidukikije kwa Evergreen",
      category: "Uburezi bw'ibidukikije",
      description:
        "Gutoza abana n'urubyiruko kubungabunga ibidukikije binyuze mu masomo, amashusho, imikino n'ibikorwa byo mu mashuri.",
    },
  },
  {
    id: "evergreen-water-guardians",
    slug: "evergreen-water-guardians",
    icon: "💧",
    image: images.water,
    en: {
      title: "Evergreen Water Guardians",
      category: "Water protection",
      description:
        "Protecting rivers, lakes, and water sources, and encouraging people to stop dumping waste into them.",
    },
    rw: {
      title: "Abarinzi b'Amazi ba Evergreen",
      category: "Kurinda amazi",
      description:
        "Kurinda imigezi, ibiyaga n'amasoko y'amazi, no gukangurira abantu kwirinda kuyajugunyamo imyanda.",
    },
  },
  {
    id: "evergreen-recycling",
    slug: "evergreen-recycling",
    icon: "♻️",
    image: images.recycling,
    en: {
      title: "Evergreen Recycling",
      category: "Recycling",
      description:
        "Helping communities sort waste, reuse materials, and create goods from waste that can be used again.",
    },
    rw: {
      title: "Gusubiramo Imyanda kwa Evergreen",
      category: "Gusubiramo imyanda",
      description:
        "Gufasha abaturage gutandukanya imyanda, kongera gukoresha ibikoresho no guhanga ibikomoka ku myanda ishobora kongera gukoreshwa.",
    },
  },
  {
    id: "evergreen-green-communities",
    slug: "evergreen-green-communities",
    icon: "🌿",
    image: images.community,
    en: {
      title: "Evergreen Green Communities",
      category: "Green communities",
      description:
        "Supporting soil-friendly farming, community gardens, and actions that make villages and neighborhoods greener.",
    },
    rw: {
      title: "Imidugudu Icyatsi ya Evergreen",
      category: "Imidugudu icyatsi",
      description:
        "Gushyigikira ubuhinzi burengera ubutaka, ubusitani bw'abaturage n'ibikorwa bituma imidugudu irushaho kuba icyatsi.",
    },
  },
  {
    id: "evergreen-roots-and-shoots",
    slug: "evergreen-roots-and-shoots",
    icon: "🌱",
    image: rootsAndShootsGallery[27],
    galleryImages: rootsAndShootsGallery
      .map((src, index) => ({
        src,
        number: index + 1,
        title: rootsAndShootsPhotoStories[index],
      }))
      .filter((_, index) => index !== 27),
    en: {
      title: "Roots & Shoots School Garden",
      category: "School gardening",
      description:
        "Students and Evergreen volunteers work together to build a school garden, plant seedlings, and learn by caring for the environment.",
    },
    rw: {
      title: "Ubusitani bw’Ishuri bwa Roots & Shoots",
      category: "Ubusitani bwo ku ishuri",
      description:
        "Abanyeshuri n’abakorerabushake ba Evergreen bafatanya kubaka ubusitani bwo ku ishuri, gutera imbuto no kwiga bitaye ku bidukikije.",
    },
  },
];

export function getEvergreenProjects(language = "en") {
  const lang = language === "rw" ? "rw" : "en";

  return evergreenProjects.map((project) => ({
    id: project.id,
    slug: project.slug,
    icon: project.icon,
    image: project.image,
    galleryImages: (project.galleryImages ?? []).map((photo) => ({
      src: photo.src,
      number: photo.number,
      title: photo.title
        ? photo.title[lang][0]
        : lang === "rw"
          ? `Ifoto ${photo.number} y’ubusitani bw’ishuri bwa Roots & Shoots`
          : `Roots & Shoots school garden photo ${photo.number}`,
      description: photo.title ? photo.title[lang][1] : "",
    })),
    title: project[lang].title,
    category: project[lang].category,
    description: project[lang].description,
    featuresTitle: project[lang].featuresTitle,
    features: project[lang].features ?? [],
  }));
}

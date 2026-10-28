import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      mission: "Our mission",
      whatWeDo: "What we do",
      projects: "Projects",
      news: "News",
      team: "Team",
      book: "Book",
      contact: "Contact",
      menu: "Menu",
      close: "Close",
      getInvolved: "Get involved",
      joinTeam: "Join our volunteer team",
      sendMessage: "Send us a message",
      explore: "Explore",
    },
    hero: {
      tagline: "Rooted in nature. Growing together.",
      title: "Building a greener future,",
      titleAccent: "together.",
      description:
        "We bring people and nature together to build healthier, more sustainable communities across Rwanda.",
      discover: "Explore Evergreen",
      getInvolved: "Get involved",
      sharedHome: "Nature is our shared home",
    },
    about: {
      eyebrow: "A little about us",
      title: "A living planet starts with all of us.",
      description:
        "Evergreen is a community-driven platform dedicated to protecting nature, supporting people, and inspiring action for a greener future.",
      intro:
        "We believe lasting change grows when local knowledge, shared purpose, and care for the environment come together. From planting a tree to protecting a habitat, every action matters.",
      discover: "Discover who we are",
      homeLabel: "Our home",
      location: "Rwanda, East Africa",
    },
    overview: {
      eyebrow: "Evergreen at a glance",
      title: "What Evergreen is all about.",
      description:
        "Evergreen brings communities, volunteers, schools, and organizations together to protect nature and build a cleaner future.",
      tableHeader: "Area",
      tableSummary: "Overview",
      rowOneTitle: "Mission",
      rowOneValue: "To inspire sustainable action and protect the environment for future generations.",
      rowTwoTitle: "Core focus",
      rowTwoValue: "Environmental conservation, wildlife protection, tree planting, waste management, and education.",
      rowThreeTitle: "Who we work with",
      rowThreeValue: "Communities, volunteers, schools, and organizations working for a healthier planet.",
      rowFourTitle: "Impact",
      rowFourValue: "Cleaner neighborhoods, safer habitats, and stronger communities built on shared care for nature.",
    },
    environment: {
      eyebrow: "Why it matters",
      title: "A healthy environment is the foundation of life.",
      description:
        "Healthy forests, clean water, rich biodiversity, and safe communities are essential for people, animals, and future generations.",
      facts: {
        oneTitle: "Clean air",
        oneDescription: "Trees and healthy ecosystems filter pollution and help communities breathe cleaner air.",
        twoTitle: "Biodiversity",
        twoDescription: "Protecting wildlife and habitats keeps ecosystems balanced and resilient.",
        threeTitle: "Water security",
        threeDescription: "Healthy rivers, wetlands, and soils help protect freshwater and reduce the risk of shortages.",
        fourTitle: "Climate resilience",
        fourDescription: "Nature-based solutions help communities adapt to climate change and build lasting resilience.",
      },
    },
    mission: {
      eyebrow: "Our mission",
      title: "We protect nature by growing community action.",
      description:
        "Evergreen exists to bring people, schools, and local leaders together to restore ecosystems, protect wildlife, and build healthier communities.",
      intro: "We believe every tree planted, every waste stream improved, and every young person inspired becomes a foundation for a greener future.",
      learning: {
        eyebrow: "Learning and growing together",
        title: "Life skills and care for all living things.",
        description:
          "The learning materials combine reflection, discussion, stories about animals, and practical activities. They encourage young people to understand themselves, care for others, make thoughtful choices, and take responsibility for the natural world.",
        topics: {
          awareness: {
            title: "Understand yourself",
            description:
              "Build self-awareness, recognize and manage emotions, and practice making considered decisions.",
          },
          relationships: {
            title: "Build caring relationships",
            description:
              "Listen, communicate, show empathy, work through disagreements, and treat people with respect.",
          },
          animals: {
            title: "Learn from animals",
            description:
              "Explore animal behavior, families, communication, and habitats—from gorillas and chimpanzees to elephants and octopuses.",
          },
          action: {
            title: "Turn learning into action",
            description:
              "Use questions, teamwork, and gratitude to solve problems and care for people, animals, and the environment.",
          },
        },
      },
      cards: {
        protect: {
          title: "Protect ecosystems",
          description: "We restore habitats, care for forests, and help communities use nature responsibly.",
        },
        empower: {
          title: "Empower communities",
          description: "We support volunteers, schools, and local leaders to turn care for nature into action.",
        },
        educate: {
          title: "Educate and inspire",
          description: "We equip people with practical knowledge to protect wildlife, water, and air.",
        },
      },
      ctaTitle: "Take action today",
      ctaDescription: "Volunteer with us, support a campaign, or help bring nature back to your neighborhood.",
      primaryAction: "Plant with us",
      secondaryAction: "Get involved",
    },
    natureProtection: {
      eyebrow: "How we protect nature",
      title: "A practical path to healthy ecosystems.",
      description:
        "Our approach turns local knowledge and collective action into lasting environmental change.",
      steps: {
        assess: {
          title: "Assess",
          description: "We identify the environmental needs, risks, and opportunities in each community.",
        },
        restore: {
          title: "Restore",
          description: "We plant trees, protect habitats, and support natural regeneration work on the ground.",
        },
        educate: {
          title: "Educate",
          description: "We build awareness through community workshops, youth engagement, and local learning.",
        },
        act: {
          title: "Act",
          description: "We turn learning into action through cleanups, conservation projects, and volunteer support.",
        },
      },
    },
    focus: {
      eyebrow: "What we do",
      title: "Care for nature. Invest in people.",
      description:
        "Our work focuses on practical, community-led action that helps both people and the planet thrive.",
      approach: "Our approach",
      areas: {
        treePlanting: {
          title: "Tree Planting",
          description: "Growing greener neighborhoods and helping communities care for trees.",
        },
        conservation: {
          title: "Environmental Conservation",
          description: "Protecting ecosystems and encouraging the sustainable use of natural resources.",
        },
        wildlife: {
          title: "Wildlife Protection",
          description: "Supporting wildlife and protecting the habitats that help it thrive.",
        },
        waste: {
          title: "Waste Management",
          description: "Building cleaner communities through recycling and responsible waste practices.",
        },
        water: {
          title: "Water Protection",
          description: "Caring for rivers, lakes, wetlands, and the water our communities depend on.",
        },
        education: {
          title: "Environmental Education",
          description: "Giving young people and communities the knowledge to protect our planet.",
        },
      },
    },
    impact: {
      eyebrow: "Our impact",
      title: "Small actions. A lasting difference.",
      description: "Together with our communities, we're growing a movement for a healthier environment.",
      stats: {
        trees: "Trees planted",
        people: "People reached",
        projects: "Projects",
        communities: "Communities",
      },
    },
    projects: {
      eyebrow: "On the ground",
      title: "Creating real change, together.",
      description: "Meet some of the community-led work helping Rwanda grow greener every day.",
      allProjects: "All projects",
      communityAction: "Community action",
      loading: "Loading projects...",
      error: "Unable to load projects",
      empty: "There are no projects to show yet.",
      evergreenEyebrow: "Our projects",
      evergreenTitle: "Eight initiatives for a greener Rwanda.",
      evergreenDescription:
        "The programmes Evergreen is focusing on to conserve the environment, protect wildlife, and help communities take part in building a greener future.",
      note: "These projects are proposals for what Evergreen could do. Before launching them, it is best to start with what is feasible and connect with partners.",
      featuresTitle: "What the platform will include",
      learnMore: "Learn more",
      detail: {
        title: "Community project",
        description: "A community-led effort to care for nature and build a greener future.",
        back: "Back to all projects",
        gallery: "Project photos",
        galleryDescription: "A closer look at students and volunteers building a school garden and learning together.",
        notFound: "This project could not be found.",
        loadError: "We couldn't load this project. Please check your connection and try again.",
      },
      localProject: {
        badge: "Saved on this device",
        loadError: "Could not read saved project photos from this browser.",
      },
    },
    gallery: {
      eyebrow: "Moments that matter",
      title: "A closer look at our shared home.",
      description: "Every photograph tells a story of people showing up for nature and for each other.",
      exploreWork: "Explore our work",
      wasteAlt: "Color-coded recycling bins for community waste sorting",
      learningAlt: "Students learning together in a classroom",
      waterAlt: "Clear river flowing through a green forest",
      captions: {
        planting: "Planting a greener tomorrow",
        community: "Communities growing together",
        seedling: "New life taking root",
        waste: "Cleaner streets, cleaner rivers",
        learning: "Learning to protect nature",
        water: "Keeping our water healthy",
      },
    },
    stories: {
      eyebrow: "From Evergreen",
      title: "Stories for a greener tomorrow.",
      description: "Ideas, updates, and inspiration from people making a difference for our planet.",
      tag: "From Evergreen",
      readMore: "Read the story",
      loading: "Loading news...",
      error: "Unable to load news",
      empty: "There are no news stories to show yet.",
    },
    join: {
      eyebrow: "Your next step starts here",
      title: "The future grows when we grow it together.",
      description: "Bring your time, ideas, or support. Every action can help make our communities greener.",
      volunteer: "Join as a volunteer",
      message: "Send us a message",
    },
    footer: {
      future: "Building a greener future, together.",
      explore: "Explore",
      about: "About",
      whatWeDo: "What we do",
      projects: "Projects",
      news: "News",
      team: "Team",
      book: "Book",
      sayHello: "Contact",
      followUs: "Follow Us",
      getInvolved: "Want to get involved?",
      involvementText: " send our team a message.",
      message: "Send us a message",
      rights: "© {year} Evergreen. Growing a greener future together.",
      madeWithCare: "Made with care for our shared home.",
    },
    getInvolved: {
      eyebrow: "Let's grow together",
      title: "Join us or send a message.",
      description:
        "Become part of our volunteer community, or tell us how we can help. Our team would love to hear from you.",
      volunteer: "Join as a volunteer",
      message: "Send us a message",
      volunteerSectionTitle: "Join our volunteer team",
      volunteerSectionDescription: "Share your details and interests, and we will be in touch.",
      contactTag: "Contact Evergreen",
      contactSectionTitle: "Send us a message",
      contactSectionDescription: "Have a question or an idea? Write to us and our team will get back to you.",
      footer: "© {year} Evergreen. Growing a greener future together.",
    },
    team: {
      eyebrow: "The people behind Evergreen",
      title: "Meet our team.",
      description: "We work together with our communities to care for nature and grow a greener future.",
      evergreen: "Evergreen",
      ourTeam: "Our team",
      footer: "© {year} Evergreen. Growing a greener future together.",
    },
    book: {
      eyebrow: "Learning resources",
      title: "Explore the Evergreen learning book.",
      description:
        "Explore short, original summaries of the themes and activities shown in the shared book pages.",
      summariesTitle: "What the pages explore",
      summariesDescription:
        "These summaries highlight the main ideas in the photos you shared; they are not a full transcription of the book.",
      galleryLabel: "Evergreen book photographs",
      featured: "Featured",
      empty: "There are no book photographs to show yet.",
      footer: "© {year} Evergreen. Growing a greener future together.",
    },
    forms: {
      fullName: "Full name",
      name: "Name",
      email: "Email",
      interests: "Interests",
      message: "Message",
      placeholderName: "Your name",
      placeholderEmail: "you@example.com",
      placeholderInterests: "Tell us how you would like to help",
      placeholderMessage: "How can we help?",
      sending: "Sending...",
      submitVolunteer: "Join as a volunteer",
      submitMessage: "Send message",
      successVolunteer: "Your volunteer signup was emailed to Evergreen.",
      successMessage: "Your message was emailed to Evergreen.",
      helpText: "We will be in touch.",
    },
    common: {
      language: "Language",
      english: "English",
      kinyarwanda: "Kinyarwanda",
      backHome: "Back to home",
    },
  },
  rw: {
    nav: {
      home: "Ahabanza",
      about: "Ibyerekeye",
      mission: "Intego yacu",
      whatWeDo: "Iduko dukora",
      projects: "Imishinga",
      news: "Amakuru",
      team: "Itsinda",
      book: "Igitabo",
      contact: "Tuvugane",
      menu: "Ibikubiyemo",
      close: "Gufunga",
      getInvolved: "Tugire uruhare",
      joinTeam: "Jya mu itsinda ry’abadadaya",
      sendMessage: "Twandikire",
      explore: "Gushakisha",
    },
    hero: {
      tagline: "Dushingiye ku bidukikije. Turema hamwe.",
      title: "Kubaka ejo hazaza heza,",
      titleAccent: "hamwe.",
      description:
        "Tuzanira abantu n’ibidukikije hamwe kugirango dushyireho imibereho myiza, ihamye kandi iboneye mu Rwanda.",
      discover: "Sura Evergreen",
      getInvolved: "Tugire uruhare",
      sharedHome: "Ubuzima bwacu ni aho dutuye",
    },
    about: {
      eyebrow: "Ibyo duhamagarira",
      title: "Isi ibaho iyo dufatanyije.",
      description:
        "Evergreen ni urubuga rukorerwa mu muryango ugamije kurengera ibidukikije, gufasha abantu, no guhugura ibikorwa byo kubaka ejo hazaza heza.",
      intro:
        "Twizera ko impinduka zihoraho ziva ku bumenyi bw’abaturage, intego zo gufatanya, no kubaha ibidukikije. Guhingaho igiti cyangwa kurinda ibidukikije, buri kintu gifite akamaro.",
      discover: "Menya ibyinshi ku buntu bwacu",
      homeLabel: "Ahantu dutuye",
      location: "Rwanda, Afurika y’Iburasirazuba",
    },
    overview: {
      eyebrow: "Evergreen yihariye",
      title: "Ikibazo Evergreen ikora cyose.",
      description:
        "Evergreen ihuriza hamwe abaturage, abadaharanira, amashuri, n’imiryango kugira ngo ibereko ibidukikije no kubaka ejo hazaza heza.",
      tableHeader: "Ijambo",
      tableSummary: "Incamake",
      rowOneTitle: "Intego",
      rowOneValue: "Gushishikariza ibikorwa byubaka ubuzima bwiza kandi kurengera ibidukikije ku baturage b’ejo.",
      rowTwoTitle: "Ibibandwaho",
      rowTwoValue: "Kurinda ibidukikije, kurinda inyamanswa, guhinga ibiti, gucunga imyanda, no guhindura uburere.",
      rowThreeTitle: "Abafatanya",
      rowThreeValue: "Abaturage, abadafite mushyigikiye, amashuri, n’imiryango bakorana kubaka isi nziza.",
      rowFourTitle: "Ingaruka",
      rowFourValue: "Midugudu ihumura, ibidukikije birinda, n’imiryango ikomeza kubaka ku bwiyunge bw’abaturage.",
    },
    environment: {
      eyebrow: "Ibyateza imbere",
      title: "Ibidukikije bifite akamaro kanini ku buzima bwacu.",
      description:
        "Ibiti byiza, amazi meza, ibinyabuzima bitandukanye, n’imiryango ihumura ni iby’ingenzi ku bantu, inyamanswa, n’ejo hazaza.",
      facts: {
        oneTitle: "Umwuka mwiza",
        oneDescription: "Ibiti n’ibidukikije bifasha kuyungurura umwuka no kurinda abaturage kutahumuka n’umwotsi.",
        twoTitle: "Ubwoko bw’ibinyabuzima",
        twoDescription: "Kurinda inyamanswa n’ahantu ibamo biguma ibidukikije bihumura kandi bifite imbaraga.",
        threeTitle: "Amazi meza",
        threeDescription: "Imigezi, ibidukikije by’amazi, n’ubutaka bifasha kurinda amazi yo kunywa no gukumira ibibazo by’amazi.",
        fourTitle: "Kugera ku bidukikije",
        fourDescription: "Ibikorwa bihamye ku bidukikije bifasha abaturage guhangana n’ihindagurika ry’ikirere no kubaka ubuzima bwiza.",
      },
    },
    mission: {
      eyebrow: "Intego yacu",
      title: "Turinda ibidukikije dukoresha ibikorwa by’abaturage.",
      description:
        "Evergreen ihagazeho kugira ngo ihurize abantu, amashuri, n’abayobozi b’aho batuye kugira ngo basubize ibidukikije, barinde inyamanswa, no kubaka imiryango ihumura.",
      intro: "Twizera ko igiti icyo ari cyo cyose cyahingwa, imyanda igororwa, n’urubyiruko rutozwamo rukora bigira uruhare mu ejo hazaza heza.",
      learning: {
        eyebrow: "Kwiga no gukurana",
        title: "Ubumenyi bw’imibereho no kwita ku binyabuzima.",
        description:
          "Izi nyandiko zihuza kwitekerezaho, ibiganiro, inkuru z’inyamaswa n’ibikorwa bifatika. Zifasha urubyiruko kwisobanukirwa, kwita ku bandi, gufata ibyemezo biboneye no kugira uruhare mu kurengera ibidukikije.",
        topics: {
          awareness: {
            title: "Kwisobanukirwa",
            description:
              "Kumenya amarangamutima, kuyagenzura no gutekereza ku ngaruka z’ibyemezo dufata.",
          },
          relationships: {
            title: "Kubaka imibanire myiza",
            description:
              "Kumva abandi, kuganira neza, kubabarirana, gukemura amakimbirane no kubahana.",
          },
          animals: {
            title: "Kwiga ku nyamaswa",
            description:
              "Gusobanukirwa imyitwarire, imiryango, itumanaho n’aho inyamaswa ziba, harimo ingagi, inguge, inzovu n’udusimba two mu mazi.",
          },
          action: {
            title: "Gushyira ubumenyi mu bikorwa",
            description:
              "Gukoresha ibibazo, gukorera hamwe no gushimira kugira ngo dukemure ibibazo kandi twite ku bantu, inyamaswa n’ibidukikije.",
          },
        },
      },
      cards: {
        protect: {
          title: "Kurinda ibidukikije",
          description: "Dusubiza ibidukikije, dukurira ibiti, no gufasha abaturage gukoresha ibidukikije mu buryo bwiza.",
        },
        empower: {
          title: "Gushyigikira abaturage",
          description: "Dushyigikira abadafite, amashuri, n’abayobozi b’ubutaka kugira ngo bakore ibikorwa by’ingenzi ku bidukikije.",
        },
        educate: {
          title: "Guhuza no guhindura uburere",
          description: "Duhugura abantu ubumenyi bukenewe kugira ngo barinde amazi, umwuka, n’inyamanswa.",
        },
      },
      ctaTitle: "Fata intambwe uyikore uyu munsi",
      ctaDescription: "Jya mu itsinda ry’abadadaya, ushyigikire ikoranabuhanga, cyangwa ufashe abaturage ku rwego rwabo.",
      primaryAction: "Tunganya igiti",
      secondaryAction: "Tugire uruhare",
    },
    natureProtection: {
      eyebrow: "Uburyo dukoresha kurinda ibidukikije",
      title: "Uburyo bufatika bwo kubaka ibidukikije bifite ubuzima.",
      description:
        "Uburyo bwacu buhuza ubumenyi bw’abaturage n’ibikorwa by’abaturage kugira ngo bigere ku mpinduka zihoraho.",
      steps: {
        assess: {
          title: "Gusuzuma",
          description: "Dusuzuma ibibazo by’ibidukikije, ibyago, n’ubushobozi buri murwego.",
        },
        restore: {
          title: "Gusubiza",
          description: "Dutera ibiti, turinda ahantu h’inyamanswa, tugafasha gutangiza ibidukikije byiza.",
        },
        educate: {
          title: "Guhugura",
          description: "Duhugura abaturage binyuze mu biganiro, urubyiruko, no kwigisha mu muryango.",
        },
        act: {
          title: "Gukora",
          description: "Dukora ibikorwa byo gukusanya imyanda, kurinda ibidukikije, no gufasha abadafite.",
        },
      },
    },
    focus: {
      eyebrow: "Iduko dukora",
      title: "Kurinda ibidukikije. Gushyigikira abantu.",
      description:
        "Akazi kacu kagamije ibikorwa bifatika, by’ubutumwa bushingiye ku muryango, bifasha abantu n’ibidukikije gutera imbere.",
      approach: "Uburyo dukoresha",
      areas: {
        treePlanting: {
          title: "Guhingwa kw’ibiti",
          description: "Gukomeza ibidukikije mu midugudu no gufasha abaturage kubyitaho.",
        },
        conservation: {
          title: "Kurinda ibidukikije",
          description: "Kurinda ibidukikije no guharanira ko ibikoresho by’umuco bikoreshwa mu buryo bwihuse.",
        },
        wildlife: {
          title: "Kurinda inyamanswa",
          description: "Gufasha inyamanswa no kurinda ahantu ibamo.",
        },
        waste: {
          title: "Gucunga imyanda",
          description: "Kurema imidugudu ihumura binyuze mu gusubiramo no kubungabunga imyanda.",
        },
        water: {
          title: "Kurinda amazi",
          description: "Gufata neza imigezi, ibiyaga, ibidukikije by’amazi n’amazi abaturage bakenera.",
        },
        education: {
          title: "Uburezi bw’ibidukikije",
          description: "Gutera urubyiruko n’imiryango ubumenyi bwo kurengera isi.",
        },
      },
    },
    impact: {
      eyebrow: "Ingaruka zacu",
      title: "Ibikorwa bito. Impinduka zihoraho.",
      description: "Tufatanyije n’abaturage, turakora ikintu cy’ingenzi ku bidukikije.",
      stats: {
        trees: "Ibiti byahingwe",
        people: "Abantu babashije",
        projects: "Imishinga",
        communities: "Imiryango",
      },
    },
    projects: {
      eyebrow: "Mu bibuga",
      title: "Kubaka impinduka nyayo, hamwe.",
      description: "Menya ibikorwa by’abaturage bifasha Rwanda gukura ibidukikije buri munsi.",
      allProjects: "Imishinga yose",
      communityAction: "Ibikorwa by’abaturage",
      loading: "Itangira kureba imishinga...",
      error: "Ntibyashobotse gutwara imishinga",
      empty: "Nta mishinga ihari kugeza ubu.",
      evergreenEyebrow: "Imishinga yacu",
      evergreenTitle: "Imishinga umunani ku Rwanda icyatsi.",
      evergreenDescription:
        "Gari ya mishinga Evergreen yibandaho mu kubungabunga ibidukikije, kurengera inyamaswa no gufasha abaturage kugira uruhare mu kubaka ejo hazaza heza.",
      proposed: "Umushinga w'icyifuzo",
      note: "Iyi mishinga ni ibyifuzo by'ibyo Evergreen yakora; mbere yo kuyitangiza, byaba byiza dutangiye n'ibishoboka kandi tukabihuza n'abafatanyabikorwa.",
      featuresTitle: "Ibyo urubuga ruzaba birimo",
      learnMore: "Soma ibindi",
      detail: {
        title: "Umushinga w’abaturage",
        description: "Igikorwa gikorwa n’abaturage kigamije kwita ku bidukikije no kubaka ejo hazaza heza.",
        back: "Garuka ku mishinga yose",
        gallery: "Amafoto y’umushinga",
        galleryDescription: "Reba hafi ibikorwa abanyeshuri n’abakorerabushake bakorera hamwe mu kubaka ubusitani no kwigira hamwe.",
        notFound: "Uyu mushinga ntushoboye kuboneka.",
        loadError: "Ntitwabashije gufungura uyu mushinga. Reba internet wongere ugerageze.",
      },
      localProject: {
        badge: "Byabitswe kuri iki gikoresho",
        loadError: "Amafoto y’imishinga yabitswe ntiyasomwe muri iyi browser.",
      },
    },
    gallery: {
      eyebrow: "Amasaha y’ingenzi",
      title: "Ibyo duheruka kureba ku mutima.",
      description: "Buri ifoto igira inkuru y’abantu bafatanya kurera ibidukikije.",
      exploreWork: "Sura akazi kacu",
      wasteAlt: "Ibikoresho bitandukanye byo gutoranyirizamo imyanda",
      learningAlt: "Abanyeshuri bigira hamwe mu ishuri",
      waterAlt: "Umugezi ufite amazi meza unyura mu ishyamba",
      captions: {
        planting: "Guhinga ejo hazaza heza",
        community: "Abaturage bakura hamwe",
        seedling: "Ubuzima bushya bukura",
        waste: "Imihanda isukuye, imigezi isukuye",
        learning: "Kwigira kurinda ibidukikije",
        water: "Kurinda amazi yacu",
      },
    },
    stories: {
      eyebrow: "Kuva kuri Evergreen",
      title: "Inkuru z’ejo hazaza heza.",
      description: "Ibitekerezo, amakuru, n’inkunga z’abantu bagira uruhare ku isi.",
      tag: "Kuva kuri Evergreen",
      readMore: "Soma inkuru",
      loading: "Itangira amakuru...",
      error: "Ntibyashobotse gutwala amakuru",
      empty: "Nta nkuru zigaragara kugeza ubu.",
    },
    join: {
      eyebrow: "Intambwe yawe ikurikira irahari",
      title: "Ejo hazaza kiraboneka iyo twazihingira hamwe.",
      description: "Shyira umwanya, ibitekerezo, cyangwa inkunga. Buri kintu gishobora gufasha imiryango yacu guhinduka iboroheye.",
      volunteer: "Jya kuba umuvugizi",
      message: "Twandikire",
    },
    footer: {
      future: "Kubaka ejo hazaza heza, hamwe.",
      explore: "Gushakisha",
      about: "Ibyerekeye",
      whatWeDo: "Iduko dukora",
      projects: "Imishinga",
      news: "Amakuru",
      team: "Itsinda",
      book: "Igitabo",
      sayHello: "Twandikire",
      followUs: "Dukurikire",
      getInvolved: "Waba ushaka kugira uruhare?",
      involvementText: "ohereze ubutumwa.",
      message: "Twandikire",
      rights: "© {year} Evergreen. Kubaka ejo hazaza heza hamwe.",
      madeWithCare: "Yakozwe witonze ku kibazo cyacu gituruka.",
    },
    getInvolved: {
      eyebrow: "Reka dukureho",
      title: "Tuzanire hamwe cyangwa utwandikire.",
      description:
        "Jya mu muryango wacu w’abadadaya, cyangwa utubwire uko dushobora gufasha. Itsinda ryacu ryishimira kwakira ubitekerezo bwawe.",
      volunteer: "Jya kuba umuvugizi",
      message: "Twandikire",
      volunteerSectionTitle: "Jya mu itsinda ry’abadadaya",
      volunteerSectionDescription: "Shyira amakuru yawe n’inyungu, kandi tuzaguha ibisubizo.",
      contactTag: "Tuvugane na Evergreen",
      contactSectionTitle: "Twandikire",
      contactSectionDescription: "Ufite ikibazo cyangwa igitekerezo? Andika natwe, itsinda ryacu rizagusubiza.",
      footer: "© {year} Evergreen. Kubaka ejo hazaza heza hamwe.",
    },
    team: {
      eyebrow: "Abantu b’inyuma ya Evergreen",
      title: "Mumenye itsinda ryacu.",
      description: "Tukorana n’abaturage kugira ngo turinde ibidukikije no kubaka ejo hazaza heza.",
      evergreen: "Evergreen",
      ourTeam: "Itsinda ryacu",
      footer: "© {year} Evergreen. Kubaka ejo hazaza heza hamwe.",
    },
    book: {
      eyebrow: "Ibikoresho byo kwiga",
      title: "Menya igitabo cy’imyitozo cya Evergreen.",
      description:
        "Iyingiyo ry’amafoto yakiriwe mu ibikorwa bya Evergreen mu midugudu, mu ishyamba no mu mashuri hose mu Rwanda.",
      summariesTitle: "Ibyo aya mapaji yigisha",
      summariesDescription: "Izi ncamake zigaragaza ibitekerezo by’ingenzi biri mu mafoto mwatanze; si inyandiko yuzuye y’igitabo.",
      galleryLabel: "Amafoto y’igitabo cya Evergreen",
      featured: "Byatoranyijwe",
      empty: "Nta mafoto y’igitabo ahari kugeza ubu.",
      footer: "© {year} Evergreen. Kubaka ejo hazaza heza hamwe.",
    },
    forms: {
      fullName: "Izina ryuzuye",
      name: "Izina",
      email: "Imeyili",
      interests: "Ibyo ukunda",
      message: "Ubutumwa",
      placeholderName: "Izina ryawe",
      placeholderEmail: "uri@example.com",
      placeholderInterests: "Tubwire uko wifuza gufasha",
      placeholderMessage: "Twabafasha gute?",
      sending: "Iherezo...",
      submitVolunteer: "Jya kuba umuvugizi",
      submitMessage: "Ohereza ubutumwa",
      successVolunteer: "Ubutumwa bwawe bwo kwiyandikisha bwoherejwe kuri Evergreen.",
      successMessage: "Ubutumwa bwawe bwoherejwe kuri Evergreen.",
      helpText: "Tuzagusubiza vuba.",
    },
    common: {
      language: "Ururimi",
      english: "Icyongereza",
      kinyarwanda: "Kinyarwanda",
      backHome: "Garuka ahabanza",
    },
  },
};

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    const saved = window.localStorage.getItem("evergreen-language");
    return saved === "rw" ? "rw" : "en";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("evergreen-language", language);
      document.documentElement.lang = language === "rw" ? "rw" : "en";
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key, fallback) => {
        const path = key.split(".");
        const currentTranslations = translations[language] ?? translations.en;
        let value = currentTranslations;

        for (const segment of path) {
          value = value?.[segment];
          if (value === undefined) {
            break;
          }
        }

        if (value === undefined || value === null) {
          const fallbackTranslations = translations.en;
          let fallbackValue = fallbackTranslations;
          for (const segment of path) {
            fallbackValue = fallbackValue?.[segment];
            if (fallbackValue === undefined) {
              break;
            }
          }
          return fallbackValue ?? fallback ?? key;
        }

        return value;
      },
    }),
    [language],
  );

  return React.createElement(LanguageContext.Provider, { value }, children);
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}

const images = {
  planting:
    "/news/tree-planting.jpg",
  water:
    "https://images.unsplash.com/photo-1437482078695-73f5ca6c96e2?auto=format&fit=crop&w=1000&q=85",
  seedling:
    "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=85",
  waste:
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1000&q=85",
  learning:
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
  wildlife:
    "https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1000&q=85",
};

export const newsEn = [
  {
    id: "en-1",
    tag: "Tree planting",
    title: "Thousands of trees take root across Rwanda",
    summary:
      "Communities and schools planted native trees to restore hillsides and shade, turning barren slopes green again.",
    image: images.planting,
    published_at: "2026-09-12",
  },
  {
    id: "en-2",
    tag: "Clean water",
    title: "Restored wetlands protect the water we drink",
    summary:
      "Volunteers cleared invasive plants and replanted riverbanks so rivers and lakes stay healthy for everyone.",
    image: images.water,
    published_at: "2026-08-28",
  },
  {
    id: "en-3",
    tag: "Kitchen gardens",
    title: "Family kitchen gardens grow healthier meals",
    summary:
      "Households built small kitchen gardens that provide fresh vegetables while caring for the soil.",
    image: images.seedling,
    published_at: "2026-08-10",
  },
  {
    id: "en-4",
    tag: "Waste",
    title: "Community clean-up keeps neighborhoods green",
    summary:
      "Neighbors sorted and recycled waste together, cutting plastic pollution in streets and waterways.",
    image: images.waste,
    published_at: "2026-07-22",
  },
  {
    id: "en-5",
    tag: "Education",
    title: "Youth lead environmental clubs in schools",
    summary:
      "Students formed clubs to plant trees, save water, and teach their families about protecting nature.",
    image: images.learning,
    published_at: "2026-07-05",
  },
  {
    id: "en-6",
    tag: "Wildlife",
    title: "Safe habitats grow for birds and wildlife",
    summary:
      "New conservation areas give wildlife a safe home while communities enjoy healthier forests.",
    image: images.wildlife,
    published_at: "2026-06-18",
  },
];

export const newsRw = [
  {
    id: "rw-1",
    tag: "Guhinga ibiti",
    title: "Ibiti ibihumbi bihingwa mu Rwanda hose",
    summary:
      "Abaturage n'amashuri bahinze ibiti kavukire kugira ngo bagarukize imisozi n'igicucu, bahindure ahantu h'ubutayu ho hatozwa.",
    image: images.planting,
    published_at: "2026-09-12",
  },
  {
    id: "rw-2",
    tag: "Amazi meza",
    title: "Ibidukikije by'amazi bisubijweho kurinda amazi twanywa",
    summary:
      "Abadaharanira bakuyemo ibimera byangiza, bahingaho ibiti ku nkombe z'imigezi kugira ngo imigezi n'ibiyaga bigume byiza kuri bose.",
    image: images.water,
    published_at: "2026-08-28",
  },
  {
    id: "rw-3",
    tag: "Akarima kigikoni",
    title: "Akarima kigikoni k'imiryango katuma turya neza",
    summary:
      "Ingo zubatse uturima duto tugikoni dutanga imboga nshya mu gihe twita ku butaka.",
    image: images.seedling,
    published_at: "2026-08-10",
  },
  {
    id: "rw-4",
    tag: "Imyanda",
    title: "Ibikorwa byo gukuraho imyanda bigumana imidugudu isukuye",
    summary:
      "Abaturanyi batoranyije kandi bagasubiramo imyanda, bagabanya ihumana ry'plastiki mu mihanda no mu mazi.",
    image: images.waste,
    published_at: "2026-07-22",
  },
  {
    id: "rw-5",
    tag: "Uburezi",
    title: "Urubyiruko ruyobora amaklubu y'ibidukikije mu mashuri",
    summary:
      "Abanyeshuri bashizeho amaklubu yo guhinga ibiti, kuzigama amazi, no kwigisha imiryango yabo kurinda ibidukikije.",
    image: images.learning,
    published_at: "2026-07-05",
  },
  {
    id: "rw-6",
    tag: "Inyamanswa",
    title: "Ahantu heza h'inyamanswa harushaho kwaguka",
    summary:
      "Ahantu hashya ho kubungabunga inyamanswa haha inyamanswa icumbi ryiza mu gihe abaturage baryoherwa n'ishyamba ryiza.",
    image: images.wildlife,
    published_at: "2026-06-18",
  },
];

export const news = newsEn;

const REF = "/Refrence%20photo%20from%20orignal%20website";

export type ProductTone = "silver" | "obsidian" | "crimson" | "noir" | "bundle";
export type ProductGender = "him" | "her" | "both" | "bundle";

export type Product = {
  slug: string;
  name: string;
  subtitle: string;
  tagline: string;
  badge: string;
  price: number;
  compareAt: number;
  rating: number;
  reviews: number;
  gender: ProductGender;
  video: string;
  poster: string;
  image2?: string;
  notes: string[];
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  description: string;
  benefits: string[];
  tone: ProductTone;
  new?: boolean;
  hero?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    slug: "liquid-silver",
    name: "Liquid Silver",
    subtitle: "Holy Grail Edition",
    tagline: "The Holy Grail of Attraction.",
    badge: "Bestseller",
    price: 180,
    compareAt: 220,
    rating: 4.9,
    reviews: 8421,
    gender: "him",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Liquid_Silver_Holy_Grail_Edition.webp`,
    image2: `${REF}/Liquid_Silver_Holy_Grail_Edition_2.webp`,
    notes: ["Sharp citrus", "Black pepper", "Amber", "Leather"],
    topNotes: ["Bergamot", "Lemon verbena", "Pink pepper"],
    heartNotes: ["Black pepper", "Orris root", "Vetiver"],
    baseNotes: ["Amber", "Leather", "Musk", "Sandalwood"],
    description:
      "The scent that built the reputation. Liquid Silver is engineered around a proprietary androstenone-to-copulin ratio that triggers social dominance cues before you say a word. Worn by 100,000+ who refuse to go unnoticed.",
    benefits: [
      "Androstenone-forward formula for social dominance",
      "8–12 hour wear time, third-party tested",
      "Works in close proximity and across a room",
      "Verified pheromone concentration in every batch",
    ],
    tone: "silver",
  },
  {
    slug: "enchantress",
    name: "Enchantress",
    subtitle: "Pheromone Eau De Parfum",
    tagline: "His & Hers. Dangerously intimate.",
    badge: "His & Hers",
    price: 210,
    compareAt: 260,
    rating: 4.8,
    reviews: 4102,
    gender: "both",
    video: "/video/enchantress.mp4",
    poster: `${REF}/Enchantress_For_Women.webp`,
    image2: `${REF}/Enchantress_For_Women_attract_Men.webp`,
    notes: ["Bergamot", "Rose absolute", "Oud", "Musk"],
    topNotes: ["Bergamot", "Pink grapefruit", "Neroli"],
    heartNotes: ["Rose absolute", "Jasmine sambac", "Orris"],
    baseNotes: ["Oud", "Animalic musk", "White cedarwood", "Vanilla"],
    description:
      "Enchantress is formulated for the second glance. A His & Hers formula built around a copulin complex that operates at skin temperature — releasing a signal that's felt before it's consciously processed.",
    benefits: [
      "Copulin complex optimized for skin-temperature release",
      "Unisex — equally effective on all skin types",
      "Heat-reactive: intensifies with body warmth",
      "Passes double-blind attraction testing",
    ],
    tone: "crimson",
  },
  {
    slug: "nd-mood",
    name: "N.D. Mood",
    subtitle: "Eau De Parfum",
    tagline: "Quiet dominance. The scent of certainty.",
    badge: "Top Rated",
    price: 195,
    compareAt: 240,
    rating: 4.9,
    reviews: 5683,
    gender: "him",
    video: "/video/nd-mood.mp4",
    poster: `${REF}/N_D_Mood_Pheromone_Perfume_For_Women.webp`,
    image2: `${REF}/N_D_Mood_Pheromone_Perfume_For_Women_Front_4.webp`,
    notes: ["Vetiver", "Cedar", "Saffron", "Dry tobacco"],
    topNotes: ["Saffron", "Cardamom", "Black juniper"],
    heartNotes: ["Vetiver", "Guaiac wood", "Iris"],
    baseNotes: ["Dry tobacco", "Cedar", "Castoreum", "Benzoin"],
    description:
      "N.D. Mood was designed for the room before the conversation. A deeply grounding formula anchored by dry tobacco and smoky vetiver, engineered to project an aura of settled authority that people read before they register it.",
    benefits: [
      "Authority-projection formula — boardroom tested",
      "Longevity-optimized base: 10–14 hours",
      "Low projection — works at arm's length",
      "Discreet pheromone profile, maximum subconscious impact",
    ],
    tone: "obsidian",
  },
  {
    slug: "alpha-q",
    name: "Alpha Q",
    subtitle: "Eau De Parfum",
    tagline: "Calm authority. Nothing you need to announce.",
    badge: "New Drop",
    price: 185,
    compareAt: 230,
    rating: 4.8,
    reviews: 2901,
    gender: "him",
    video: "/video/nd-mood.mp4",
    poster: `${REF}/Liquid_Silver_Premium_Pheromone_Fragrance_Creed_Aventus_2.webp`,
    notes: ["Bergamot", "Ginger", "Cedar", "Vetiver", "Tobacco"],
    topNotes: ["Bergamot", "Ginger", "Black pepper"],
    heartNotes: ["Saffron", "Cedar", "Labdanum"],
    baseNotes: ["Vetiver", "Tobacco", "Benzoin", "Leather"],
    description:
      "Alpha Q distills the concept of earned status into a fragrance. Bold-but-restrained, this formula signals the kind of authority you grow into — not the kind you perform.",
    benefits: [
      "Vetiver-forward — proven calm-dominance cue",
      "Office-appropriate projection radius",
      "Lasts through a full 14-hour workday",
      "Androstenol base for approachability at authority tier",
    ],
    tone: "obsidian",
    new: true,
  },
  {
    slug: "le-toxique",
    name: "Le Toxiquè",
    subtitle: "Luxury Pheromone Cologne",
    tagline: "Left behind on a collar, a forearm, a memory.",
    badge: "Cult Favourite",
    price: 225,
    compareAt: 280,
    rating: 4.9,
    reviews: 3840,
    gender: "him",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Le_Toxiqu_Luxury_Pheromone_Cologne_for_Men.webp`,
    image2: `${REF}/Le_Toxiqu_Luxury_Pheromone_Cologne_for_Men_2.webp`,
    notes: ["Bergamot", "Dark rose", "Oud", "Animalic musk"],
    topNotes: ["Bergamot", "Davana", "Pink pepper"],
    heartNotes: ["Dark rose", "Oud", "Ambrette"],
    baseNotes: ["Animalic musk", "Castoreum", "Smoke", "Vanilla noir"],
    description:
      "Le Toxiquè is the formula you don't tell people about. A deep, animalic luxury cologne built around a dark rose–oud accord and a concentrated copulin signature that lingers on fabric and skin for up to 24 hours.",
    benefits: [
      "24-hour skin & fabric retention",
      "Animalic musk triggers deep primal attraction cues",
      "Dark-accords formula — evening and intimate settings",
      "Highest pheromone concentration in the S1CK range",
    ],
    tone: "noir",
  },
  {
    slug: "arsenal",
    name: "The S1CK Arsenal",
    subtitle: "The Complete Toolkit",
    tagline: "Three flagships. Every situation covered.",
    badge: "Best Value",
    price: 349,
    compareAt: 520,
    rating: 4.9,
    reviews: 3214,
    gender: "bundle",
    video: "/video/liquid-silver.mp4",
    poster: `${REF}/Liquid_Silver_Premium_Pheromone_Fragrance_Creed_Aventus_99.webp`,
    notes: ["Liquid Silver", "Enchantress", "N.D. Mood"],
    topNotes: [],
    heartNotes: [],
    baseNotes: [],
    description:
      "The three bottles that built S1CK's reputation, together for the first time. The Arsenal covers every occasion from boardroom to bedroom — so you never walk in underprepared.",
    benefits: [
      "Save $171 vs. buying individually",
      "Covers daytime authority, evening magnetism, intimate depth",
      "Gift-packaged in a collector black box",
      "Ships with the 30-day Attraction Guarantee",
    ],
    tone: "bundle",
    hero: true,
  },
];

export function getProduct(slug: string): Product | null {
  return PRODUCTS.find((p) => p.slug === slug) ?? null;
}

export function getRelated(slug: string, count = 3): Product[] {
  return PRODUCTS.filter((p) => p.slug !== slug && p.slug !== "arsenal").slice(0, count);
}

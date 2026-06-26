export interface BrandItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  material: string;
  price: string;
  isHot: boolean;
  colors: string[];
  specs: string[];
  features: { label: string; value: string }[];
}

export const YKM_BRANDS: BrandItem[] = [
  {
    id: "watches",
    name: "YKM Horology: Apex Chronograph",
    category: "Watches",
    tagline: "The Zenith of Mechanical Precision.",
    description: "Crafted for high-performing founders, the YKM Apex series combines Swiss-engineered automatic movements with custom titanium alloy casings. Designed with an ultra-thin physical profile and a scratch-resistant double-dome sapphire crystal, it represents a standard of absolute timing focus.",
    material: "Grade 5 Titanium & Sapphire Crystal",
    price: "$4,200",
    isHot: true,
    colors: ["#18181b", "#71717a", "#e4e4e7"],
    specs: [
      "Caliber YK-900 Automatic Movement",
      "72-hour power reserve with bi-directional winding",
      "Double-domed anti-reflective sapphire crystal",
      "Integrated grade 5 titanium structural bracelet"
    ],
    features: [
      { label: "Water Resistance", value: "10 ATM (100 Meters)" },
      { label: "Case Diameter", value: "40mm / Ultra-thin 8.8mm Profile" },
      { label: "Warranty", value: "5-Year Decadal Guarantee" }
    ]
  },
  {
    id: "tshirts",
    name: "YKM Atelier: Minimalist Tee",
    category: "Tshirts",
    tagline: "Uncompromising Structural Comfort.",
    description: "The ultimate foundational layer for modern executives. Tailored from bespoke 310 GSM long-staple Egyptian cotton, this luxury basic features a subtle dropped shoulder profile, robust double-needle neck ribbing, and pre-shrunk structural integrity that maintains its form over centuries of wear.",
    material: "100% Giza Egyptian Long-Staple Cotton",
    price: "$120",
    isHot: false,
    colors: ["#09090b", "#fafafa", "#3f3f46"],
    specs: [
      "Ultra-dense 310 GSM custom heavyweight weave",
      "Reinforced flatlock side-stitching for stability",
      "Eco-certified organic reactive low-impact dyeing",
      "Embossed tonal silicon YKM coordinate stamp"
    ],
    features: [
      { label: "Fit Model", value: "Relaxed Boxy / Clean Shoulder-drop" },
      { label: "Breathability", value: "Optimized thermal regulation weave" },
      { label: "Origin", value: "Spun & tailored in Northern Italy" }
    ]
  },
  {
    id: "hoodies",
    name: "YKM Haute: Double-Layer Hoodie",
    category: "Hoodies",
    tagline: "Sculpted Architecture for Daily Rituals.",
    description: "Constructed with a seamless double-layer heavyweight fleece, this piece provides an enveloping, structured silhouette. Featuring a robust hood devoid of cords, flat-felled seam construction, and micro-brushed lining for unmatched luxury texture.",
    material: "520 GSM Brushed Organic Cotton Fleece",
    price: "$280",
    isHot: true,
    colors: ["#18181b", "#52525b", "#d4d4d8"],
    specs: [
      "Dual-layered fully-lined deep hood construction",
      "Elasticized invisible cuffs and drop-hem waistband",
      "Ergonomic side-seam pockets with hidden card holster",
      "Matte finish industrial zinc-coated hardware detailing"
    ],
    features: [
      { label: "Fabric Weight", value: "Ultra-Heavyweight 520 GSM" },
      { label: "Silhouette", value: "Architectural Oversized structure" },
      { label: "Care Model", value: "Cold wash / Air dry to retain luster" }
    ]
  },
  {
    id: "shoes",
    name: "YKM Strut: Technical Court Sneaker",
    category: "Shoes",
    tagline: "Orthopedic Craftsmanship Meets Elite Panache.",
    description: "Engineered in collaboration with Italian master cordwainers, the YKM technical court sneaker redefines corporate-casual travel. Featuring full-grain calfskin leather, dual-density memory foam orthotic insoles, and lightweight Margom vulcanized rubber outsoles.",
    material: "Full-Grain Italian Calfskin Leather",
    price: "$540",
    isHot: true,
    colors: ["#ffffff", "#09090b", "#a1a1aa"],
    specs: [
      "Hand-lasted full-grain calfskin upper panels",
      "Naturally tanned, sweat-wicking leather lining",
      "Anatomically molded impact-absorbing footbeds",
      "Original Italian Margom vulcanized rubber cupsoles"
    ],
    features: [
      { label: "Construction", value: "Stitched cupsole for decadal lifespan" },
      { label: "Lacing System", value: "Waxed flat-woven long-fiber cotton" },
      { label: "Handcrafted In", value: "Civitanova Marche, Italy" }
    ]
  },
  {
    id: "bags",
    name: "YKM Voyage: Executive Tech Pack",
    category: "Bags",
    tagline: "Sleek Transit for Decadal Ambition.",
    description: "Designed for international transits and boardrooms, this sleek backpack features a dedicated TSA-compliant laptop compartment, waterproof Italian RiRi zippers, and a secure passport pocket. Its water-resistant shell protects complex technology and sensitive investment portfolios.",
    material: "Bespoke Ballistic Tech Nylon & Saffiano Leather",
    price: "$750",
    isHot: false,
    colors: ["#09090b", "#27272a"],
    specs: [
      "Water-repellent structured Saffiano leather base panel",
      "Dedicated suspended microfiber 16-inch laptop pocket",
      "Integrated luggage trolley pass-through sleeve",
      "Hand-brushed gunmetal tactical buckles"
    ],
    features: [
      { label: "Storage Volume", value: "24 Liters / Expandable layout" },
      { label: "Hardware Model", value: "Water-sealed Italian RiRi metal zippers" },
      { label: "Security Feature", value: "Hidden RFID-blocking passport slot" }
    ]
  }
];

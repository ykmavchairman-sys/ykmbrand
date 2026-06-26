// Comprehensive portfolio data for Yuvaraj Kumar M (YKM)

export interface Initiative {
  title: string;
  subtitle: string;
  description: string;
  category: string;
  bullets: string[];
}

export interface PillarCard {
  id: string;
  title: string;
  description: string;
}

export const HERO_DATA = {
  name: "Yuvaraj Kumar M",
  alias: "YKM",
  tagline: "The Architect Behind Businesses, Brands & Breakthroughs.",
  title: "Founder & Chairman, Ambinix Ventures • President, AIAOBI",
  coreMandate: {
    title: "CORE MANDATE",
    desc: "Building Businesses, Empowering People, Creating Impact."
  },
  keyExpertise: {
    title: "KEY EXPERTISE",
    desc: "Business Strategy, Investor Relations, Business Astrology."
  },
  creativeHorizon: {
    title: "CREATIVE HORIZON",
    desc: "Music Production, Luxury Branding, Tech Ecosystems."
  }
};

export const PILLARS_OF_YKM: PillarCard[] = [
  { id: "entrepreneur", title: "ENTREPRENEUR", description: "Leading game-changing business platforms and infrastructure." },
  { id: "business_strategist", title: "BUSINESS STRATEGIST", description: "Architecting robust growth systems and scale strategies." },
  { id: "funding_consultant", title: "FUNDING CONSULTANT", description: "Bridging outstanding concepts with strategic venture capital." },
  { id: "business_astrologer", title: "BUSINESS ASTROLOGER", description: "Aligning high-impact corporate moves with cosmic timing." },
  { id: "musical_producer", title: "MUSICAL PRODUCER", description: "Spearheading digital-media initiatives at Sparkallent." },
  { id: "panache_stylist", title: "PANACHE STYLIST", description: "Defining aesthetics for the next-generation global leader." },
  { id: "philanthropist", title: "PHILANTHROPIST", description: "Creating sustainable social and economic empowerment models." },
  { id: "ecosystem_builder", title: "ECOSYSTEM BUILDER", description: "Forging high-performance tech networks across industries." }
];

export const VISION_DATA = {
  title: "My Vision",
  northStarLabel: "THE NORTH STAR",
  northStarQuote: "To build organizations that seamlessly synthesize Technology, Intelligence, Innovation, and Human Potential into highly scalable, sustainable, and impactful enterprises.",
  missionMandate: "Enable and empower 10,000+ entrepreneurs and businesses globally through strategic intelligence, state-of-the-art tech automation, and investment support.",
  focusAreas: [
    { num: "01", title: "AI & ERP", desc: "Deploying intelligent automation to optimize enterprise operations." },
    { num: "02", title: "Consulting", desc: "Architecting robust scaling pathways and operational blueprints." },
    { num: "03", title: "Funding", desc: "Refining models to meet strategic growth capital demands." },
    { num: "04", title: "Branding", desc: "Carving unmatched authority in luxury and premium markets." }
  ]
};

export const CORE_INITIATIVES: Initiative[] = [
  {
    title: "AMBINIX VENTURES",
    subtitle: "TECHNOLOGY & TRANSFORMATION",
    description: "A premium technology enterprise delivering bespoke artificial intelligence systems, custom enterprise automation, and deep consulting services.",
    category: "FLAGSHIP INITIATIVE",
    bullets: [
      "AI-powered business workflows",
      "Custom ERP architectures",
      "Global corporate training networks"
    ]
  },
  {
    title: "AIAOBI",
    subtitle: "ARTIFICIAL INTELLIGENCE NETWORK",
    description: "All India Association of Business Intelligence, forging India's absolute gold-standard ecosystem for business intelligence and data science.",
    category: "ECOSYSTEM HUB",
    bullets: [
      "National level industry linkages",
      "Advanced academic research drives",
      "Strategic venture incubator models"
    ]
  },
  {
    title: "SPARKALLENT",
    subtitle: "MEDIA & MUSIC PRODUCTION",
    description: "A high-fidelity creative house specialized in music production, comprehensive artist incubation, and premium digital storytelling.",
    category: "CREATIVE DIVISION",
    bullets: [
      "Bespoke composition & arrangement",
      "Acoustic brand-identity design",
      "Creative global talent networks"
    ]
  }
];

export const AMBINIX_PARADIGMS = [
  { num: "01", title: "ARTIFICIAL INTELLIGENCE", desc: "Developing customized machine intelligence solutions, predictive algorithms, and cognitive task automations to unlock productivity boundaries." },
  { num: "02", title: "ERP SOLUTIONS & AUTOMATION", desc: "Constructing bespoke Bitcore ERP platforms. Designing seamless background workflow engines and software structures to link distributed divisions." },
  { num: "03", title: "HEALTHCARE TECHNOLOGY", desc: "Deploying intelligent systems, tracking architectures, and data modeling pipelines for modern healthcare and industrial safety paradigms." },
  { num: "04", title: "CORPORATE TRAINING & CONSULT", desc: "Running intensive high-voltage leadership development programs, professional skill development, branding, and comprehensive startup incubation pipelines." }
];

export const ENTERPRISE_SCALING_DATA = {
  quote: "Architecting robust blueprints to propel startups and enterprises into global markets.",
  industries: ["Technology", "Healthcare", "Manufacturing", "Real Estate", "Education", "Retail", "Startups"],
  strategies: [
    { num: "01", title: "BUSINESS GROWTH STRATEGY", desc: "Designing operational roadmaps to drive top-line enterprise growth." },
    { num: "02", title: "GO-TO-MARKET PLANNING", desc: "Optimizing product positioning for fast penetration and strong dominance." },
    { num: "03", title: "REVENUE OPTIMIZATION", desc: "Restructuring pricing dynamics and sales channels for maximum margin." },
    { num: "04", title: "PROCESS DESIGN", desc: "Streamlining backend architectures to remove friction." },
    { num: "05", title: "ORGANIZATIONAL STRUCTURING", desc: "Designing roles and teams to match your strategic vision." },
    { num: "06", title: "MARKET POSITIONING", desc: "Repositioning legacy brands to appeal to premium consumer demographics." },
    { num: "07", title: "BRAND STRATEGY", desc: "Creating authoritative brand identities that drive loyalty and enterprise value." },
    { num: "08", title: "LEADERSHIP CONSULTING", desc: "Empowering founders to lead high-performance, future-focused organizations." }
  ]
};

export const BUSINESS_ASTROLOGY_DATA = {
  sub: "COSMIC SYNC",
  title: "Synthesizing Data, Intuition, and Cosmic Timing for ultimate market velocity.",
  quote: "RIGHT STRATEGY AT THE RIGHT TIME.",
  intro: "A proprietary astrological intelligence model designed for corporate executives, enterprise leaders, and startup boards to map out critical growth execution paths.",
  pillars: [
    { num: "I", title: "LAUNCH TIMINGS", desc: "Determining astrologically auspicious dates for brand launches, legal incorporation, and product rollouts to minimize early friction." },
    { num: "II", title: "INVESTMENT CYCLES", desc: "Analyzing cosmological timelines to optimize venture capital acquisitions, mergers, buyouts, and strategic exit points." },
    { num: "III", title: "PARTNERSHIP ALIGNMENT", desc: "Using synastry charts to evaluate brand coherence, stakeholder alignments, and executive board compatibility metrics." },
    { num: "IV", title: "EXPANSION PLANNING", desc: "Mapping cosmological trends to corporate milestones to strategically deploy international scale initiatives at optimal timing." }
  ]
};

export const VENTURE_ENABLEMENT_DATA = {
  intro: "Strategic engineering to prepare high-growth businesses for investor vetting and strategic fundraising.",
  targets: ["Early & Growth-stage Startups", "Small & Medium-Sized Enterprises", "Expansion-driven High Growth Companies", "Visionary Global Founders"],
  pillars: [
    { num: "01", title: "INVESTOR READINESS", desc: "Strengthening corporate governance, preparing compliance metrics, structuring internal architectures, and preparing executives for intense investor questioning." },
    { num: "02", title: "FINANCIAL PROJECTIONS & VALUATION", desc: "Constructing granular multi-year cash flow projections, unit economic structures, robust startup valuation parameters, and stress-tested financial models." },
    { num: "03", title: "PITCH DECK ARCHITECTURE", desc: "Structuring investor-grade slides. Synthesizing complex data, product roadmaps, GTM execution plans, and competitive moats into highly compelling narratives." },
    { num: "04", title: "INVESTOR RELATIONS CONSULTING", desc: "Designing professional fundraising strategies. Crafting networking templates, relationship cycles, and strategic communications with global angel syndicates and VC firms." }
  ]
};

export const DECADAL_VISION_DATA = {
  num: "100+",
  desc: "Strategic goal to launch, foster, and support 100+ highly scalable startups over the next decade.",
  sub: "SYSTEMATIC ACCELERATION",
  intro: "Consolidating specialized expertise, strategic assets, and networks to scale disruptive business models across major innovation vectors.",
  vectors: [
    { num: "01", title: "AI & MACHINE INTELLIGENCE", desc: "Supporting startups building predictive logic, automated content systems, and complex visual analytics." },
    { num: "02", title: "SAAS PLATFORMS", desc: "Incubating cloud-first enterprise architectures focused on robust operational multi-tenancy." },
    { num: "03", title: "ERP & MANAGEMENT", desc: "Engineering bespoke operational suites designed for fragmented supply chains and distributed operations." },
    { num: "04", title: "HEALTHCARE TECH", desc: "Enabling innovative connected care models, diagnostic tools, and automated clinic management." },
    { num: "05", title: "SMART COMMUNITIES", desc: "Designing IoT frameworks, structural automation, and tracking utilities for next-generation urban developments." },
    { num: "06", title: "FINTECH & EDTECH", desc: "Scaling intuitive transactional services and optimized modern instructional environments globally." }
  ]
};

export const AIAOBI_LEADERSHIP_DATA = {
  intro: "AIAOBI serves as a national nexus point. Under YKM's presidency, we coordinate deep academic and industry initiatives to establish AI and data intelligence as core country-wide infrastructure.",
  quote: "To forge, nurture, and lead India's absolute strongest collective network of Entrepreneurs, Investors, Innovators, Researchers, and Industry Leaders.",
  pillars: [
    { num: "PILLAR I", title: "ADVANCED TRAINING", desc: "Running extensive workshops, professional certifications, and hands-on skill development pathways for tech talents and corporate executives." },
    { num: "PILLAR II", title: "SCIENTIFIC RESEARCH", desc: "Publishing authoritative papers and coordinating strategic business intelligence and analytics research across tech laboratories." },
    { num: "PILLAR III", title: "STARTUP INCUBATION", desc: "Providing early-stage business models with seed incubation, workspace infrastructure, mentoring support, and investor channels." },
    { num: "PILLAR IV", title: "GLOBAL PARTNERSHIPS", desc: "Coordinating with global innovation bodies, foreign business chambers, and technology institutes to foster exchange pipelines." }
  ]
};

export const LUXURY_BRAND_DATA = {
  intro: "Defining corporate elegance. YKM applies a strict luxury curation model to modern executive style, combining exclusive accessories and high fashion to reinforce premium personal branding.",
  quote: "Your appearance speaks long before your words do.",
  categories: [
    { num: "01", title: "TIMEPIECES", desc: "Chronograph and luxury mechanical watches representing absolute precision and timeline focus." },
    { num: "02", title: "APPAREL", desc: "Custom jackets, designer premium tees, and bespoke executive wear for elite business forums." },
    { num: "03", title: "ACCESSORIES", desc: "Premium footwear, designer luggage, custom hats, and executive bags outlining luxury lifestyles." }
  ]
};

export const SPARKALLENT_CREATIVE_DATA = {
  intro: "Under Sparkallent, YKM bridges the gap between raw artistic emotion and world-class corporate media production, crafting audio and sound identities for prominent global brands.",
  quote: "Creating deep stories through music and visual media, while building a robust global platform to nurture emerging artistic talent.",
  categories: [
    { num: "01", title: "MUSIC PRODUCTION", desc: "Spearheading digital-media initiatives, mixing, mastering, and delivering multi-genre studio albums." },
    { num: "02", title: "ARTIST DEVELOPMENT", desc: "Providing high-potential singers, instrumentalists, and creators with technical guidance and launch ecosystems." },
    { num: "03", title: "BESPOKE COMPOSITION", desc: "Composing and arranging original music, cinematic themes, ambient environments, and modern commercial tracks." },
    { num: "04", title: "AUDIO BRANDING", desc: "Engineering acoustic identities, spatial logos, podcast theme packages, and sonic structures for global corporations." }
  ]
};

export const IMPACT_BENCHMARKS = {
  business: [
    { num: "I", title: "AI Transformation", desc: "Successfully deployed AI workflows, reducing operational costs and human intervention." },
    { num: "II", title: "Bespoke ERP & Automation", desc: "Designed and configured modular Bitcore ERP networks, connecting distributed operations." },
    { num: "III", title: "Corporate Training & Mentorship", desc: "Delivered leadership curriculums to tech talents, raising the bar for modern engineering." }
  ],
  leadership: [
    { num: "IV", title: "Ecosystem Development", desc: "Fostering high-performance collaboration networks connecting students, founders, and investors." },
    { num: "V", title: "Sustainable Employment", desc: "Generating highly skilled tech opportunities across software engineering and media production sectors." },
    { num: "VI", title: "Community Empowerment", desc: "Leading active technology incubators, training camps, and socio-economic support initiatives." }
  ]
};

export const ECOSYSTEM_SUMMARY_PAGES = [
  { num: "01", title: "AMBINIX VENTURES", desc: "The flagship technology enterprise driving corporate transformation globally." },
  { num: "02", title: "BITCORE ERP", desc: "Comprehensive proprietary management platforms for distributed operations." },
  { num: "03", title: "AIAOBI", desc: "National network hub coordinating AI and business intelligence sectors." },
  { num: "04", title: "SPARKALLENT", desc: "Premium music production, brand-sonic design, and creator launchpads." },
  { num: "05", title: "INVESTMENT & CONSULTING", desc: "Providing scaling advice, startup valuations, astrology timing, and funding readiness." },
  { num: "06", title: "LUXURY BRANDS", desc: "Applying premium panache styling models to promote elite executive identities." }
];

export const CONTACT_INFO = {
  name: "Yuvaraj Kumar M",
  titles: "Founder & Chairman, Ambinix Ventures • President, AIAOBI",
  email: "ykmavchairman@gmail.com",
  phone: "+91 9739486161",
  website: "www.ambinixventures.in",
  linkedin: "linkedin.com/in/ykm1050",
  instagram: "instagram.com/ykm_1050",
  consultingFields: ["Business Strategy", "Venture Funding", "Business Astrology", "Growth Optimization", "Sonic Branding"]
};

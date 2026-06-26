import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HERO_DATA,
  PILLARS_OF_YKM,
  VISION_DATA,
  CORE_INITIATIVES,
  AMBINIX_PARADIGMS,
  ENTERPRISE_SCALING_DATA,
  BUSINESS_ASTROLOGY_DATA,
  VENTURE_ENABLEMENT_DATA,
  DECADAL_VISION_DATA,
  AIAOBI_LEADERSHIP_DATA,
  LUXURY_BRAND_DATA,
  SPARKALLENT_CREATIVE_DATA,
  IMPACT_BENCHMARKS,
  ECOSYSTEM_SUMMARY_PAGES,
  CONTACT_INFO
} from "./data";
import SparkallentPlayer from "./components/SparkallentPlayer";
import AstrologyPlanner from "./components/AstrologyPlanner";
import PitchDeckAudit from "./components/PitchDeckAudit";
import AutomationVisualizer from "./components/AutomationVisualizer";
import YKMBrands from "./components/YKMBrands";

import {
  Sun,
  Moon,
  Compass,
  TrendingUp,
  Cpu,
  Music,
  Mail,
  Phone,
  Globe,
  Linkedin,
  Instagram,
  ChevronRight,
  Send,
  Sparkles,
  ArrowRight,
  ArrowUp,
  Workflow,
  CheckCircle,
  HelpCircle,
  Award,
  Zap,
  Watch,
  Briefcase,
  ShoppingBag,
  Shirt,
  Footprints
} from "lucide-react";
import { YKM_BRANDS } from "./data/brands";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");
  const [interactiveMode, setInteractiveMode] = useState("astrology"); // astrology, audit, automation, audio
  const [consultationField, setConsultationField] = useState("Business Strategy");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 650);
    return () => clearTimeout(timer);
  }, [activeTab, interactiveMode]);

  return (
    <div className={isDarkMode ? "dark text-zinc-100" : "light text-zinc-900"}>
      {/* Dynamic Top Transition Progress Bar */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            key={`transition-bar-${activeTab}-${interactiveMode}`}
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-zinc-500 via-zinc-100 to-amber-400 z-[9999] shadow-[0_1px_10px_rgba(251,191,36,0.6)]"
          />
        )}
      </AnimatePresence>

      {/* Container holding everything */}
      <div className="min-h-screen bg-[#0c0c0e] dark:bg-[#0c0c0e] light:bg-[#f8f8fa] transition-colors duration-300 flex flex-col font-sans">
        
        {/* TOP STATUS BAR ACCENTS */}
        <div className="h-1 w-full bg-gradient-to-r from-zinc-800 via-neutral-100 to-zinc-900 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-950 light:from-zinc-200 light:via-zinc-800 light:to-zinc-300" />

        {/* HEADER NAVIGATION */}
        <header className="border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 py-5 px-6 sm:px-12 backdrop-blur-md sticky top-0 z-50 bg-[#0c0c0e]/85 dark:bg-[#0c0c0e]/85 light:bg-[#f8f8fa]/85">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo and Title */}
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setActiveTab("overview")}
            >
              {/* YKM Monogram Logo Image */}
              <div className="w-10 h-10 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-900 flex items-center justify-center rounded border border-zinc-800 overflow-hidden shadow-lg">
                <img 
                  src="/src/assets/images/ChatGPT Image Jun 25, 2026, 04_08_44 PM.png" 
                  referrerPolicy="no-referrer"
                  alt="YKM Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-black text-lg tracking-widest text-white dark:text-white light:text-zinc-950">YKM</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-pulse" />
                </div>
              </div>
            </motion.div>

            {/* Nav Menu */}
            <nav className="hidden md:flex items-center gap-6">
              {[
                { id: "overview", label: "OVERVIEW" },
                { id: "ecosystem", label: "ECOSYSTEM HUB" },
                { id: "frameworks", label: "INTERACTIVE SUITE" },
                { id: "brands", label: "YKM BRANDS" },
                { id: "contact", label: "CONTACT" }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-display text-xs tracking-widest font-bold transition-all relative py-1.5 ${
                    activeTab === tab.id
                      ? "text-white dark:text-white light:text-zinc-950"
                      : "text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-300 light:hover:text-zinc-700"
                  }`}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <motion.div 
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-zinc-400 rounded" 
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Consult Call to Action */}
            <div className="flex items-center gap-4">
              <motion.button
                id="advisor-cta-button"
                onClick={() => setActiveTab("contact")}
                className="bg-white dark:bg-white light:bg-zinc-950 text-zinc-950 dark:text-zinc-950 light:text-white font-display font-bold text-[10px] sm:text-xs tracking-widest px-4.5 py-2.5 rounded flex items-center gap-1.5 border border-transparent cursor-pointer"
                animate={{
                  scale: [1, 1.015, 1],
                  boxShadow: isDarkMode 
                    ? [
                        "0 4px 15px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                        "0 4px 25px rgba(255, 255, 255, 0.12), 0 0 0 1px rgba(255, 255, 255, 0.15)",
                        "0 4px 15px rgba(255, 255, 255, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.05)"
                      ]
                    : [
                        "0 4px 10px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)",
                        "0 4px 16px rgba(0, 0, 0, 0.06), 0 0 0 1px rgba(0, 0, 0, 0.04)",
                        "0 4px 10px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.02)"
                      ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: isDarkMode ? "rgba(255, 255, 255, 0.5)" : "rgba(9, 9, 11, 0.3)",
                  boxShadow: isDarkMode 
                    ? "0 4px 25px rgba(255, 255, 255, 0.2), 0 0 0 1.5px rgba(255, 255, 255, 0.25)"
                    : "0 4px 16px rgba(0, 0, 0, 0.1), 0 0 0 1.5px rgba(9, 9, 11, 0.12)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail className="w-3.5 h-3.5" />
                CONNECT OFFICE
              </motion.button>
            </div>
          </div>
        </header>

        {/* MOBILE NAVIGATION TABS (Visible only on small screens) */}
        <div className="md:hidden border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50 py-2.5 px-4 overflow-x-auto flex gap-3 scrollbar-none">
          {[
            { id: "overview", label: "Overview" },
            { id: "ecosystem", label: "Ecosystem" },
            { id: "frameworks", label: "Interactive Tools" },
            { id: "brands", label: "Brands" },
            { id: "contact", label: "Contact" }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-display font-semibold transition-all ${
                activeTab === tab.id
                  ? "bg-white dark:bg-white light:bg-zinc-900 text-zinc-950 dark:text-zinc-950 light:text-white"
                  : "text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-200 light:text-zinc-600"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* MAIN BODY LAYOUT */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-6 sm:px-12 py-12">
          
          {/* SECTION 1: OVERVIEW & PROFILE */}
          {activeTab === "overview" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
            >
              
              {/* HERO SECTION - RECREATING SLIDE 1 & 2 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Hero Information */}
                <div className="lg:col-span-7 space-y-6 relative">
                  {/* Slide design style vertical layout accent line */}
                  <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-200" />
                  
                   <div className="space-y-1">
                    <h1 className="font-display font-black text-6xl sm:text-7xl lg:text-8xl text-white dark:text-white light:text-zinc-950 tracking-tighter">
                      {HERO_DATA.alias}
                    </h1>
                  </div>

                  <p className="font-display font-semibold text-2xl sm:text-3xl lg:text-4xl text-zinc-300 dark:text-zinc-300 light:text-zinc-800 leading-tight">
                    {HERO_DATA.tagline}
                  </p>

                  <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider">
                        {HERO_DATA.coreMandate.title}
                      </span>
                      <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium mt-1">
                        {HERO_DATA.coreMandate.desc}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider">
                        {HERO_DATA.keyExpertise.title}
                      </span>
                      <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium mt-1">
                        {HERO_DATA.keyExpertise.desc}
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-zinc-500 uppercase block tracking-wider">
                        {HERO_DATA.creativeHorizon.title}
                      </span>
                      <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium mt-1">
                        {HERO_DATA.creativeHorizon.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Picture Frame card of YKM (Slide 1 style) */}
                <div className="lg:col-span-5 flex justify-center">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="w-full max-w-sm border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white p-5 rounded-xl shadow-2xl relative overflow-hidden group"
                  >
                    {/* Portrait Image Frame with exquisite layout & branding */}
                    <div className="w-full aspect-[4/5] bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 rounded-lg overflow-hidden flex flex-col justify-between p-6 border border-zinc-900 relative">
                      <img 
                        src="/src/assets/images/1000043471.jpeg" 
                        referrerPolicy="no-referrer"
                        alt="Yuvaraj Kumar M Portrait" 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:opacity-95 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent pointer-events-none" />

                      <div className="flex justify-between items-start z-10">
                        <span className="text-[10px] font-mono text-zinc-400 bg-black/50 px-2 py-0.5 rounded tracking-wider">PORTFOLIO NO. 1050</span>
                        <div className="w-6 h-6 rounded-full border border-zinc-700 bg-black/50 flex items-center justify-center text-zinc-400 text-[10px]">Y</div>
                      </div>

                      <div className="z-10 space-y-2">
                        <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest block">EXECUTIVE IDENTITY</span>
                        <h3 className="font-display font-black text-2xl text-white tracking-wide">
                          {HERO_DATA.name}
                        </h3>
                        <p className="text-[10px] font-mono text-zinc-400">
                          {HERO_DATA.title}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center justify-between text-xs font-mono text-zinc-500">
                      <span>SECURE CONNECT CARD</span>
                      <button 
                        onClick={() => setActiveTab("contact")}
                        className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:text-white dark:hover:text-white light:hover:text-zinc-950 flex items-center gap-1 font-semibold underline"
                      >
                        VIEW CONNECTS <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                </div>

              </div>

              {/* PERSONAL BRAND PROFILE GRID - RECREATING SLIDE 2 & 3 */}
              <div className="space-y-8 pt-10 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-600 block uppercase">
                    PERSONAL BRAND PROFILE
                  </span>
                  <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white dark:text-white light:text-zinc-950">
                    Who is YKM?
                  </h2>
                  <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                    A <strong className="font-semibold text-white dark:text-white light:text-zinc-900">Multi-Dimensional Leader</strong> combining tactical business strategy with high-conviction creative industries and cosmic guidance parameters. With a mission to empower startups, enterprises, institutions, and entrepreneurs through technology, innovation, strategy, and leadership.
                  </p>
                </div>

                {/* 8-card grid mirroring Slide 2 layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ perspective: 1000 }}>
                  {PILLARS_OF_YKM.map((pillar) => (
                    <motion.div
                      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -4, borderColor: "rgba(161, 161, 170, 0.45)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      key={pillar.id}
                      className="p-5 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white rounded-lg transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
                        <h4 className="font-display font-bold text-xs tracking-wider text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                          {pillar.title}
                        </h4>
                      </div>
                      <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-normal">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* MISSION & NORTH STAR - RECREATING SLIDE 3 */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-10 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
                
                {/* The North Star Quote Card */}
                <div className="lg:col-span-7 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 p-8 rounded-xl flex flex-col justify-between">
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-600 uppercase block">
                      {VISION_DATA.northStarLabel}
                    </span>
                    <blockquote className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-tight">
                      &ldquo;{VISION_DATA.northStarQuote}&rdquo;
                    </blockquote>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200/60 flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 font-mono">
                      MANDATE TARGET: 10,000+ ENTREPRENEURS GLOBALLY
                    </p>
                  </div>
                </div>

                {/* 4 Focus Grid areas */}
                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ perspective: 1000 }}>
                  {VISION_DATA.focusAreas.map(focus => (
                    <motion.div
                      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -4, borderColor: "rgba(161, 161, 170, 0.45)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      key={focus.num}
                      className="p-5 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/20 dark:bg-zinc-900/20 light:bg-white rounded-lg flex flex-col justify-between transition-all cursor-pointer"
                    >
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-600 font-bold block">
                        {focus.num}
                      </span>
                      <div className="mt-4">
                        <h4 className="font-display font-bold text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-wide uppercase">
                          {focus.title}
                        </h4>
                        <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-normal">
                          {focus.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>

            </motion.div>
          )}

          {/* SECTION 2: CORE ECOSYSTEM HUBS */}
          {activeTab === "ecosystem" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-16"
            >
              
              {/* Introduction & Quick Summary Map (Slide 14) */}
              <div className="space-y-6 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-600 block uppercase">
                  ENTERPRISE HUB
                </span>
                <h2 className="font-display font-black text-4xl text-white dark:text-white light:text-zinc-950">
                  The YKM Ecosystem
                </h2>
                <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                  One central vision driving multiple interconnected ventures. Under YKM&apos;s strategic architecture, advanced technology coordinates with executive consulting, data networks, media, and premium lifestyle spheres.
                </p>
              </div>

              {/* 6-grid summary mirroring Slide 14 layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: 1000 }}>
                {ECOSYSTEM_SUMMARY_PAGES.map(item => (
                  <motion.div
                    whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -4, borderColor: "rgba(161, 161, 170, 0.45)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    key={item.num}
                    className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white rounded-xl flex flex-col justify-between transition-all cursor-pointer"
                  >
                    <div>
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-600 block mb-3 font-semibold">
                        {item.num}
                      </span>
                      <h4 className="font-display font-bold text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    
                    <button
                      onClick={() => {
                        setActiveTab("frameworks");
                        if (item.title.includes("AMBINIX") || item.title.includes("BITCORE")) {
                          setInteractiveMode("automation");
                        } else if (item.title.includes("SPARKALLENT")) {
                          setInteractiveMode("audio");
                        } else if (item.title.includes("ASTROLOGY") || item.title.includes("CONSULTING")) {
                          setInteractiveMode("astrology");
                        }
                      }}
                      className="text-[10px] text-zinc-400 hover:text-zinc-300 font-mono tracking-wider hover:underline flex items-center gap-1.5 mt-5 text-left"
                    >
                      OPEN INTERACTIVE PLATFORM <ChevronRight className="w-3 h-3" />
                    </button>
                  </motion.div>
                ))}
              </div>

              {/* INITIATIVES DETAIL TABS - RECREATING SLIDE 4 & 5 & 10 & 12 */}
              <div className="pt-10 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">ENTERPRISE ARCHITECTURE</span>
                  <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-zinc-950">
                    Founder of Multiple Initiatives
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" style={{ perspective: 1000 }}>
                  {CORE_INITIATIVES.map((init) => (
                    <motion.div
                      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -4, borderColor: "rgba(161, 161, 170, 0.45)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      key={init.title}
                      className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/20 dark:bg-zinc-900/20 light:bg-white rounded-xl space-y-4 transition-all cursor-pointer"
                    >
                      <span className="inline-block bg-zinc-800 dark:bg-zinc-800 light:bg-zinc-100 text-[9px] font-mono px-2.5 py-1 rounded text-zinc-300 dark:text-zinc-300 light:text-zinc-700 tracking-wider font-semibold">
                        {init.category}
                      </span>
                      
                      <div>
                        <h4 className="font-display font-black text-lg text-white dark:text-white light:text-zinc-950">
                          {init.title}
                        </h4>
                        <p className="text-[9px] font-mono text-zinc-500 dark:text-zinc-500 light:text-zinc-600 mt-0.5 uppercase tracking-wide">
                          {init.subtitle}
                        </p>
                      </div>

                      <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light">
                        {init.description}
                      </p>

                      <ul className="space-y-2 pt-2 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-150">
                        {init.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-[10px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-normal">
                            <span className="text-zinc-600 font-bold mt-0.5">•</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* RECREATING AMBINIX CORE PARADIGMS - SLIDE 5 */}
              <div className="pt-10 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-4 space-y-4">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">AMBINIX CORE PARADIGMS</span>
                  <h3 className="font-display font-black text-2xl text-white dark:text-white light:text-zinc-950">
                    &ldquo;Innovating Businesses. Empowering People. Creating Impact.&rdquo;
                  </h3>
                  <p className="text-[11px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
                    Ambinix Ventures serves as a vanguard tech and business architecture driver. We engineer automated paradigms, install enterprise-wide intelligence mechanisms, and establish digital models to redefine organizational velocity.
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ perspective: 1000 }}>
                  {AMBINIX_PARADIGMS.map(p => (
                    <motion.div
                      whileHover={{ scale: 1.03, rotateX: 3, rotateY: -3, y: -4, borderColor: "rgba(161, 161, 170, 0.45)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      key={p.num}
                      className="p-5 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white rounded-lg transition-all cursor-pointer"
                    >
                      <span className="font-mono text-xs text-zinc-500 dark:text-zinc-500 light:text-zinc-600 font-semibold block">{p.num}</span>
                      <h4 className="font-display font-bold text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 tracking-wide mt-2 uppercase">
                        {p.title}
                      </h4>
                      <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                        {p.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* BENCHMARKS & VALUE - SLIDE 13 */}
              <div className="pt-10 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 space-y-8">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-zinc-500 tracking-widest uppercase">ENTERPRISE BENCHMARKS</span>
                  <h3 className="font-display font-extrabold text-2xl text-white dark:text-white light:text-zinc-950">
                    Creating Measurable Value
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Business Impact Column */}
                  <div className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white rounded-xl space-y-5">
                    <div>
                      <h4 className="font-display font-bold text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 uppercase">
                        BUSINESS IMPACT
                      </h4>
                      <p className="text-[9px] font-mono text-zinc-500 mt-0.5 uppercase tracking-wide">
                        ENTERPRISE-WIDE TRANSFORMATION
                      </p>
                    </div>

                    <div className="space-y-4">
                      {IMPACT_BENCHMARKS.business.map(item => (
                        <div key={item.num} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 flex items-center justify-center text-[10px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-mono shrink-0">
                            {item.num}
                          </div>
                          <div>
                            <h5 className="font-display font-semibold text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                              {item.title}
                            </h5>
                            <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leadership Impact Column */}
                  <div className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-white rounded-xl space-y-5">
                    <div>
                      <h4 className="font-display font-bold text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 uppercase">
                        LEADERSHIP IMPACT
                      </h4>
                      <p className="text-[9px] font-mono text-zinc-500 mt-0.5 uppercase tracking-wide">
                        ECOSYSTEM & SOCIAL VALUE
                      </p>
                    </div>

                    <div className="space-y-4">
                      {IMPACT_BENCHMARKS.leadership.map(item => (
                        <div key={item.num} className="flex gap-4">
                          <div className="w-6 h-6 rounded-full bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 flex items-center justify-center text-[10px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-mono shrink-0">
                            {item.num}
                          </div>
                          <div>
                            <h5 className="font-display font-semibold text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                              {item.title}
                            </h5>
                            <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* SECTION 3: INTERACTIVE FRAMEWORKS SUITE */}
          {activeTab === "frameworks" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-600 block uppercase">
                  INTERACTIVE SUITE
                </span>
                <h2 className="font-display font-black text-4xl text-white dark:text-white light:text-zinc-950">
                  Strategic Advisory Playground
                </h2>
                <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                  Directly experiment with YKM&apos;s trademark methodologies. Align your business launch with cosmic calendars, audit your financial model for investor-readiness, construct bespoke ERP schemas, or experience professional audio branding.
                </p>
              </div>

              {/* Selector Tabs */}
              <div className="flex flex-wrap border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 gap-2 pb-px">
                {[
                  { id: "astrology", icon: <Compass className="w-4 h-4" />, label: "Business Astrology Sync" },
                  { id: "audit", icon: <TrendingUp className="w-4 h-4" />, label: "Venture Capital Audit" },
                  { id: "automation", icon: <Workflow className="w-4 h-4" />, label: "Bitcore ERP Architect" },
                  { id: "audio", icon: <Music className="w-4 h-4" />, label: "Sparkallent Audio Sonics" }
                ].map(mode => (
                  <button
                    key={mode.id}
                    id={`suite-tab-${mode.id}`}
                    onClick={() => setInteractiveMode(mode.id)}
                    className={`flex items-center gap-2 py-3 px-5 text-xs font-display font-bold border-b-2 transition-all ${
                      interactiveMode === mode.id
                        ? "border-white dark:border-white light:border-zinc-950 text-white dark:text-white light:text-zinc-950 font-extrabold"
                        : "border-transparent text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-300 light:hover:text-zinc-700"
                    }`}
                  >
                    {mode.icon}
                    {mode.label}
                  </button>
                ))}
              </div>

              {/* Active Interactive Widget Container */}
              <div className="space-y-6">
                {interactiveMode === "astrology" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white rounded-xl">
                        <span className="text-[10px] font-mono text-zinc-400 block mb-2 uppercase">STRATEGIC TIMING</span>
                        <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-zinc-950">
                          {BUSINESS_ASTROLOGY_DATA.sub}
                        </h3>
                        <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 leading-relaxed">
                          {BUSINESS_ASTROLOGY_DATA.intro}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider font-semibold">
                          COSMIC ALIGNMENT PILLARS:
                        </span>
                        {BUSINESS_ASTROLOGY_DATA.pillars.map(pillar => (
                          <div key={pillar.num} className="p-3.5 rounded border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/10 dark:bg-zinc-900/10 light:bg-white flex gap-3">
                            <span className="font-mono text-xs text-zinc-400 font-bold">{pillar.num}</span>
                            <div>
                              <h5 className="font-display font-bold text-[11px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800 tracking-wide">{pillar.title}</h5>
                              <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-0.5 leading-normal">{pillar.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <AstrologyPlanner />
                    </div>
                  </div>
                )}

                {interactiveMode === "audit" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white rounded-xl">
                        <span className="text-[10px] font-mono text-emerald-400 block mb-2 uppercase">VENTURE ENABLEMENT</span>
                        <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-zinc-950">
                          Fundable Ventures
                        </h3>
                        <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 leading-relaxed">
                          {VENTURE_ENABLEMENT_DATA.intro}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider font-semibold">
                          STRATEGIC TARGETS:
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {VENTURE_ENABLEMENT_DATA.targets.map(target => (
                            <div key={target} className="p-3 rounded border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/10 dark:bg-zinc-900/10 light:bg-white text-[10px] text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-center font-display font-semibold">
                              {target}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-2">
                        {VENTURE_ENABLEMENT_DATA.pillars.map(pillar => (
                          <div key={pillar.num} className="p-3 border border-zinc-900 dark:border-zinc-900 light:border-zinc-150 bg-zinc-950/20 dark:bg-zinc-950/20 light:bg-white rounded flex items-center justify-between">
                            <span className="font-display font-bold text-[10px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800 uppercase tracking-wide">
                              {pillar.title}
                            </span>
                            <span className="font-mono text-xs text-zinc-500 font-bold">{pillar.num}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <PitchDeckAudit />
                    </div>
                  </div>
                )}

                {interactiveMode === "automation" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white rounded-xl">
                        <span className="text-[10px] font-mono text-pink-400 block mb-2 uppercase">ENTERPRISE SCALING</span>
                        <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-zinc-950">
                          Scale Strategies
                        </h3>
                        <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 leading-relaxed">
                          {ENTERPRISE_SCALING_DATA.quote}
                        </p>
                      </div>

                      <div className="space-y-3">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider font-semibold">
                          INDUSTRIES SERVED:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {ENTERPRISE_SCALING_DATA.industries.map(ind => (
                            <span key={ind} className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 px-3 py-1 rounded-full text-[10px] font-mono font-medium">
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Displaying some strategies in accordion fashion */}
                      <div className="max-h-60 overflow-y-auto space-y-2 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200/60 p-3 rounded bg-zinc-950/20 dark:bg-zinc-950/20 light:bg-white">
                        <span className="text-[8px] font-mono text-zinc-500 block uppercase mb-1">
                          Enterprise Strategies:
                        </span>
                        {ENTERPRISE_SCALING_DATA.strategies.slice(0, 4).map(strat => (
                          <div key={strat.num} className="text-[10px] leading-normal p-2 border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-100">
                            <span className="font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{strat.title}</span>
                            <p className="text-zinc-500 dark:text-zinc-500 light:text-zinc-600 mt-0.5">{strat.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <AutomationVisualizer />
                    </div>
                  </div>
                )}

                {interactiveMode === "audio" && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-5 space-y-5">
                      <div className="p-6 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white rounded-xl">
                        <span className="text-[10px] font-mono text-amber-400 block mb-2 uppercase">CREATIVE LEADERSHIP</span>
                        <h3 className="font-display font-extrabold text-xl text-white dark:text-white light:text-zinc-950">
                          Sparkallent Media
                        </h3>
                        <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-2 leading-relaxed">
                          {SPARKALLENT_CREATIVE_DATA.intro}
                        </p>
                      </div>

                      <blockquote className="p-4 border-l-2 border-zinc-700 bg-zinc-900/10 dark:bg-zinc-900/10 light:bg-white text-xs italic text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-relaxed rounded-r">
                        &ldquo;{SPARKALLENT_CREATIVE_DATA.quote}&rdquo;
                      </blockquote>

                      <div className="space-y-2">
                        {SPARKALLENT_CREATIVE_DATA.categories.map(cat => (
                          <div key={cat.num} className="p-3 border border-zinc-900 dark:border-zinc-900 light:border-zinc-150 bg-zinc-950/10 dark:bg-zinc-950/10 light:bg-white rounded flex items-start gap-3">
                            <span className="font-mono text-[11px] text-zinc-500 font-bold">{cat.num}</span>
                            <div>
                              <h5 className="font-display font-bold text-[11px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800 uppercase tracking-wide">{cat.title}</h5>
                              <p className="text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-600 mt-0.5">{cat.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-7">
                      <SparkallentPlayer />
                    </div>
                  </div>
                )}
              </div>

            </motion.div>
          )}

          {activeTab === "brands" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
            >
              <YKMBrands />
            </motion.div>
          )}

          {/* SECTION 5: CONTACT & EXECUTIVE CONNECT CARD */}
          {activeTab === "contact" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="space-y-12"
            >
              <div className="space-y-4 max-w-3xl">
                <span className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-600 block uppercase">
                  ENTERPRISE CALL
                </span>
                <h2 className="font-display font-black text-4xl text-white dark:text-white light:text-zinc-950">
                  Let&apos;s Build Something Extraordinary
                </h2>
                <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
                  Connect to synthesize technology architectures, investment pathways, or launch custom creative media divisions with uncompromising strategic precision.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Visual Premium Contact Details Card (Slide 15 style) */}
                <div className="lg:col-span-5 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white p-6 rounded-xl flex flex-col justify-between">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display font-black text-xl text-white dark:text-white light:text-zinc-950">
                        {CONTACT_INFO.name}
                      </h3>
                      <p className="text-[10px] font-mono text-zinc-400 mt-1 leading-normal">
                        {CONTACT_INFO.titles}
                      </p>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 rounded text-zinc-400 dark:text-zinc-400 light:text-zinc-700">
                          <Mail className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-zinc-500 block uppercase">Direct Communication</span>
                          <a href={`mailto:${CONTACT_INFO.email}`} className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 hover:underline">
                            {CONTACT_INFO.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 rounded text-zinc-400 dark:text-zinc-400 light:text-zinc-700">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-zinc-500 block uppercase">Corporate Office Line</span>
                          <a href={`tel:${CONTACT_INFO.phone}`} className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 hover:underline">
                            {CONTACT_INFO.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 rounded text-zinc-400 dark:text-zinc-400 light:text-zinc-700">
                          <Globe className="w-4 h-4" />
                        </div>
                        <div>
                          <span className="text-[9px] font-mono text-zinc-500 block uppercase">Primary Ventures</span>
                          <a href={`https://${CONTACT_INFO.website}`} target="_blank" rel="noreferrer" className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 hover:underline">
                            {CONTACT_INFO.website}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 mt-6 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase block tracking-wider">
                      PROFESSIONAL NETWORKS
                    </span>
                    <div className="flex gap-3">
                      <a
                        href={`https://${CONTACT_INFO.linkedin}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-xs font-mono text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-950 transition-all"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                        LinkedIn
                      </a>
                      <a
                        href={`https://${CONTACT_INFO.instagram}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-xs font-mono text-zinc-400 hover:text-white dark:hover:text-white light:text-zinc-600 light:hover:text-zinc-950 transition-all"
                      >
                        <Instagram className="w-3.5 h-3.5" />
                        Instagram
                      </a>
                    </div>
                  </div>
                </div>

                {/* Inquiry Form */}
                <div className="lg:col-span-7 border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/20 dark:bg-zinc-900/20 light:bg-white p-6 rounded-xl relative overflow-hidden flex flex-col justify-between">
                  <AnimatePresence mode="wait">
                    {!formSubmitted ? (
                      <motion.div
                        key="contact-form"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="font-display font-bold text-sm text-zinc-200 dark:text-zinc-200 light:text-zinc-800 uppercase tracking-wide mb-6">
                          Schedule Executive Consultation
                        </h3>

                        <form
                          onSubmit={(e) => {
                            e.preventDefault();
                            setFormSubmitted(true);
                          }}
                          className="space-y-4"
                        >
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                                Full Name
                              </label>
                              <input
                                id="contact-name"
                                type="text"
                                required
                                className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded px-3 py-2 text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                                placeholder="Executive / Founder Name"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                                Email Address
                              </label>
                              <input
                                id="contact-email"
                                type="email"
                                required
                                className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded px-3 py-2 text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                                placeholder="name@corporation.com"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                                Entity Name
                              </label>
                              <input
                                id="contact-company"
                                type="text"
                                required
                                className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded px-3 py-2 text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                                placeholder="Your Venture or Fund name"
                              />
                            </div>
                            <div>
                              <label className="block text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                                Domain Focus
                              </label>
                              <select
                                id="contact-focus"
                                className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded px-3 py-2.5 text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all font-display"
                              >
                                <option>Business Strategy & Scaling</option>
                                <option>Venture Capital Fundraising</option>
                                <option>Bespoke AI & ERP Automations</option>
                                <option>Cosmic Sync & Strategic Timing</option>
                                <option>Sparkallent Audio Branding</option>
                              </select>
                            </div>
                          </div>

                          <div>
                            <label className="block text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                              Venture Brief / Inquiry
                            </label>
                            <textarea
                              id="contact-message"
                              rows={4}
                              required
                              className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded px-3 py-2 text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                              placeholder="Brief description of your business model and target milestones."
                            />
                          </div>

                          <button
                            id="submit-inquiry-button"
                            type="submit"
                            className="w-full bg-white dark:bg-white light:bg-zinc-950 text-zinc-950 dark:text-zinc-950 light:text-white hover:opacity-90 py-2.5 rounded text-xs font-display font-semibold tracking-wide transition-all uppercase cursor-pointer"
                          >
                            DISPATCH DISCOVERY APPLICATION
                          </button>
                        </form>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="contact-success"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center py-12 text-center h-full min-h-[350px] space-y-6"
                      >
                        <motion.div
                          initial={{ scale: 0, rotate: -45 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.15 }}
                          className="w-16 h-16 rounded-full bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 shadow-xl"
                        >
                          <svg
                            className="w-8 h-8 text-zinc-950 dark:text-zinc-100"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <motion.path
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.35 }}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </motion.div>

                        <div className="space-y-3 max-w-md">
                          <motion.h4
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="font-display font-black text-lg text-zinc-900 dark:text-zinc-100 light:text-zinc-900"
                          >
                            Inquiry Securely Transmitted
                          </motion.h4>
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xs text-zinc-500 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-light"
                          >
                            Thank you. Your inquiry has been securely queued in the Ambinix Ventures client stream. The advisory office will synthesize your brief and respond within 24 cosmic hours.
                          </motion.p>
                        </div>

                        <motion.button
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.7 }}
                          onClick={() => setFormSubmitted(false)}
                          className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-200 hover:underline pt-2 cursor-pointer transition-all"
                        >
                          DISPATCH ANOTHER INQUIRY
                        </motion.button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

              </div>

            </motion.div>
          )}

        </main>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 py-8 px-6 sm:px-12 text-center bg-zinc-950/20 dark:bg-zinc-950/20 light:bg-zinc-50 mt-12">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
            <p>
              &copy; 2026 {CONTACT_INFO.name}. All strategic architectural rights reserved.
            </p>
            <div className="flex gap-4">
              <span className="hover:text-zinc-300 dark:hover:text-zinc-300 light:hover:text-zinc-700 cursor-pointer">PRIVACY BLUEPRINTS</span>
              <span>•</span>
              <span className="hover:text-zinc-300 dark:hover:text-zinc-300 light:hover:text-zinc-700 cursor-pointer">SECURE NODE GATEWAYS</span>
            </div>
          </div>
        </footer>

        {/* Back to Top Floating Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              id="back-to-top"
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              onClick={scrollToTop}
              className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-zinc-900/90 dark:bg-zinc-900/90 light:bg-zinc-200/90 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 text-white dark:text-white light:text-zinc-900 shadow-lg hover:bg-zinc-800 dark:hover:bg-zinc-800 light:hover:bg-zinc-100 transition-colors flex items-center justify-center cursor-pointer group"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </motion.button>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

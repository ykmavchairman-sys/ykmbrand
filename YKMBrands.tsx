import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Watch, 
  Shirt, 
  ShoppingBag, 
  Briefcase, 
  Footprints, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Shield, 
  Gem,
  Check,
  Package,
  Calendar,
  Lock,
  Compass
} from "lucide-react";
import { YKM_BRANDS, BrandItem } from "../data/brands";

export default function YKMBrands() {
  const [selectedBrand, setSelectedBrand] = useState<BrandItem>(YKM_BRANDS[0]);
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const [allocationForm, setAllocationForm] = useState({
    fullName: "",
    email: "",
    personalization: "",
    agreeTerms: false
  });
  const [isAllocating, setIsAllocating] = useState(false);
  const [allocationCertificate, setAllocationCertificate] = useState<any | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "watches":
        return <Watch className="w-5 h-5" />;
      case "tshirts":
        return <Shirt className="w-5 h-5" />;
      case "hoodies":
        return <Shirt className="w-5 h-5" />; // Shirt serves as fallback for hoodie
      case "shoes":
        return <Footprints className="w-5 h-5" />;
      case "bags":
        return <Briefcase className="w-5 h-5" />;
      default:
        return <ShoppingBag className="w-5 h-5" />;
    }
  };

  const handleAllocateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!allocationForm.fullName || !allocationForm.email) return;

    setIsAllocating(true);

    setTimeout(() => {
      const serialNumber = `YKM-${selectedBrand.id.substring(0, 3).toUpperCase()}-${Math.floor(100000 + Math.random() * 900000)}`;
      setAllocationCertificate({
        serial: serialNumber,
        owner: allocationForm.fullName,
        email: allocationForm.email,
        brandName: selectedBrand.name,
        color: selectedBrand.colors[activeColorIndex] || "#ffffff",
        timestamp: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        }),
        personalization: allocationForm.personalization || "Standard Fit / No Engraving"
      });
      setIsAllocating(false);
    }, 1500);
  };

  return (
    <div className="space-y-12">
      {/* Page Header */}
      <div className="space-y-4 max-w-3xl">
        <span className="text-xs font-mono tracking-widest text-zinc-500 dark:text-zinc-500 light:text-zinc-600 block uppercase">
          YKM LUXURY COLLECTIONS
        </span>
        <h2 className="font-display font-black text-4xl text-white dark:text-white light:text-zinc-950">
          Curated Elite Form & Function
        </h2>
        <p className="text-zinc-300 dark:text-zinc-300 light:text-zinc-700 text-sm sm:text-base leading-relaxed font-light">
          Applying a rigorous architectural design ethos to premium executive lifestyles. From high-precision mechanical watchmaking to heavy-weight textiles and fine Italian cordwaining, each YKM artifact is produced under limited allocation runs for discerning visionaries.
        </p>
      </div>

      {/* Grid of 5 categories */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3.5">
        {YKM_BRANDS.map((brand) => {
          const isActive = selectedBrand.id === brand.id;
          return (
            <button
              id={`brand-tab-${brand.id}`}
              key={brand.id}
              onClick={() => {
                setSelectedBrand(brand);
                setActiveColorIndex(0);
                setAllocationCertificate(null);
              }}
              className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-32 relative overflow-hidden group cursor-pointer ${
                isActive
                  ? "bg-white dark:bg-white light:bg-zinc-950 text-zinc-950 dark:text-zinc-950 light:text-white border-white dark:border-white light:border-zinc-950 shadow-lg"
                  : "bg-zinc-950/40 dark:bg-zinc-950/40 light:bg-zinc-50/80 border-zinc-900 dark:border-zinc-900 light:border-zinc-200 hover:border-zinc-800 dark:hover:border-zinc-800 light:hover:border-zinc-300"
              }`}
            >
              {/* Background gradient on hover */}
              {!isActive && (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              )}
              
              <div className="flex items-center justify-between w-full">
                <div className={`p-2 rounded-lg ${isActive ? "bg-zinc-900 dark:bg-zinc-900 light:bg-zinc-100 text-white dark:text-white light:text-zinc-950" : "bg-zinc-900/50 dark:bg-zinc-900/50 light:bg-white text-zinc-400 dark:text-zinc-400 light:text-zinc-600 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200"}`}>
                  {getIcon(brand.id)}
                </div>
                {brand.isHot && (
                  <span className={`text-[8px] font-mono font-bold px-1.5 py-0.5 rounded tracking-widest ${isActive ? "bg-zinc-900 text-white dark:bg-zinc-900 dark:text-white light:bg-zinc-100 light:text-zinc-950" : "bg-amber-400/10 text-amber-400 border border-amber-400/20"}`}>
                    LIMITED
                  </span>
                )}
              </div>

              <div>
                <span className={`text-[10px] font-mono tracking-wider block ${isActive ? "text-zinc-600 dark:text-zinc-600 light:text-zinc-300" : "text-zinc-500"}`}>
                  {brand.category.toUpperCase()}
                </span>
                <span className="font-display font-bold text-xs tracking-wide block truncate mt-0.5">
                  {brand.id === "watches" ? "Horology" : brand.id === "tshirts" ? "Atelier" : brand.id === "hoodies" ? "Haute" : brand.id === "shoes" ? "Strut" : "Voyage"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Interactive Showcase Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Premium Visual Product Mock & Narrative */}
        <div className="lg:col-span-7 space-y-6">
          <div className="border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between min-h-[460px]">
            {/* Visual background details */}
            <div className="absolute inset-0 bg-radial-gradient from-zinc-900/10 to-transparent pointer-events-none opacity-50" />
            
            {/* Geometric luxury frame */}
            <div className="absolute inset-4 border border-zinc-900/40 dark:border-zinc-900/40 light:border-zinc-200/40 rounded-xl pointer-events-none flex items-center justify-center">
              <Compass className="w-72 h-72 text-zinc-900/10 dark:text-zinc-900/10 light:text-zinc-200/10 animate-spin-slow pointer-events-none" />
            </div>

            <div className="z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-zinc-400" />
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  YKM {selectedBrand.category.toUpperCase()} • DESIGN BLUEPRINT
                </span>
              </div>
              <span className="text-sm font-mono font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">
                {selectedBrand.price}
              </span>
            </div>

            {/* Interactive Visual Product Frame with color state updates */}
            <div className="z-10 flex flex-col items-center justify-center py-12 relative">
              <motion.div
                key={selectedBrand.id + activeColorIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center space-y-4"
              >
                {/* Large high-end stylized visual placeholder representation */}
                <div 
                  className="w-40 h-40 rounded-full flex items-center justify-center shadow-2xl relative transition-all duration-700"
                  style={{ 
                    backgroundColor: selectedBrand.colors[activeColorIndex] || "#18181b",
                    boxShadow: `0 20px 40px -15px ${selectedBrand.colors[activeColorIndex]}40`
                  }}
                >
                  <div className="absolute inset-1.5 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="absolute inset-3 border border-white/5 rounded-full flex items-center justify-center">
                      <div className="text-white dark:text-white light:text-zinc-900 mix-blend-difference drop-shadow">
                        {getIcon(selectedBrand.id)}
                      </div>
                    </div>
                  </div>
                  
                  {/* Outer mechanical or design ticks */}
                  {selectedBrand.id === "watches" && (
                    <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slow" />
                  )}
                </div>

                <div className="space-y-1">
                  <h3 className="font-display font-black text-2xl tracking-wide text-white dark:text-white light:text-zinc-950 uppercase mt-2">
                    {selectedBrand.name.split(":")[1] || selectedBrand.name}
                  </h3>
                  <p className="text-xs text-amber-400 font-mono tracking-wider italic">
                    {selectedBrand.tagline}
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Bottom details of mockup */}
            <div className="z-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-900/60 dark:border-zinc-900/60 light:border-zinc-150 pt-5 mt-4">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-500 uppercase">AVAILABLE SHADES:</span>
                <div className="flex items-center gap-1.5">
                  {selectedBrand.colors.map((color, idx) => (
                    <button
                      id={`color-picker-${selectedBrand.id}-${idx}`}
                      key={color}
                      onClick={() => setActiveColorIndex(idx)}
                      className={`w-6 h-6 rounded-full border transition-all flex items-center justify-center cursor-pointer ${
                        activeColorIndex === idx 
                          ? "border-amber-400 scale-110" 
                          : "border-zinc-800 hover:border-zinc-500"
                      }`}
                      style={{ backgroundColor: color }}
                      title={`Color option ${idx + 1}`}
                    >
                      {activeColorIndex === idx && (
                        <Check className="w-3.5 h-3.5 text-white dark:text-white light:text-zinc-950 mix-blend-difference" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span className="text-[10px] font-mono text-zinc-400 uppercase">
                  PRIMARY COMPOSITION: {selectedBrand.material}
                </span>
              </div>
            </div>
          </div>

          {/* Product Deep-dive and specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/10 dark:bg-zinc-900/10 light:bg-white p-5 rounded-xl">
              <h4 className="text-[11px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-zinc-400" />
                TECHNICAL SPECIFICATIONS
              </h4>
              <ul className="space-y-2.5">
                {selectedBrand.specs.map((spec, i) => (
                  <li key={i} className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-1.5 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-900/10 dark:bg-zinc-900/10 light:bg-white p-5 rounded-xl">
              <h4 className="text-[11px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-zinc-400" />
                COLLECTION HIGHLIGHTS
              </h4>
              <div className="space-y-3.5">
                {selectedBrand.features.map((feat) => (
                  <div key={feat.label} className="border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-150 pb-2 last:border-0 last:pb-0">
                    <span className="block text-[9px] font-mono text-zinc-500 uppercase">{feat.label}</span>
                    <span className="text-xs font-display font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 block mt-0.5">
                      {feat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Allocation Console */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-zinc-900 dark:border-zinc-900 light:border-zinc-200 bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-white p-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-5 pb-4 border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-150">
              <div className="p-2.5 bg-neutral-900 dark:bg-neutral-900 light:bg-zinc-100 rounded-lg text-white dark:text-white light:text-zinc-800">
                <Lock className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm tracking-wide text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                  ALLOCATION GATEWAY
                </h4>
                <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
                  Limited Executive Allotment Console
                </p>
              </div>
            </div>

            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono leading-relaxed mb-6">
              Due to meticulous crafting standards and the decadal material guarantee, each product series maintains a strict allocation quota. Submit the form below to secure a formal allotment verification.
            </p>

            <AnimatePresence mode="wait">
              {!allocationCertificate ? (
                <motion.form
                  key="allocation-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleAllocateSubmit}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5">
                      Executive Full Name
                    </label>
                    <input
                      id="allocation-fullname"
                      type="text"
                      required
                      placeholder="e.g. Shrihari Vayu"
                      value={allocationForm.fullName}
                      onChange={(e) => setAllocationForm({ ...allocationForm, fullName: e.target.value })}
                      className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded-lg px-3 py-2 text-xs font-display text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5">
                      Corporate Email Address
                    </label>
                    <input
                      id="allocation-email"
                      type="email"
                      required
                      placeholder="e.g. executive@domain.com"
                      value={allocationForm.email}
                      onChange={(e) => setAllocationForm({ ...allocationForm, email: e.target.value })}
                      className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded-lg px-3 py-2 text-xs font-display text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono text-zinc-500 uppercase mb-1.5">
                      Bespoke Customizations / Sizing Details
                    </label>
                    <textarea
                      id="allocation-personalization"
                      rows={3}
                      placeholder={
                        selectedBrand.id === "watches" 
                          ? "e.g. Engraving: 'Decadal Vision' on buckle backplate, 17cm wrist diameter adjustment"
                          : selectedBrand.id === "shoes"
                          ? "e.g. Size EU 42.5 / US 9.5, high arch orthotic adjustment requested"
                          : "e.g. Oversized tailoring preference, custom initials 'SV' tonal embroidered"
                      }
                      value={allocationForm.personalization}
                      onChange={(e) => setAllocationForm({ ...allocationForm, personalization: e.target.value })}
                      className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded-lg px-3 py-2 text-xs font-display text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="allocation-agree-terms"
                      type="checkbox"
                      required
                      checked={allocationForm.agreeTerms}
                      onChange={(e) => setAllocationForm({ ...allocationForm, agreeTerms: e.target.checked })}
                      className="mt-0.5 rounded border-zinc-800 bg-zinc-950 text-zinc-100 focus:ring-zinc-700"
                    />
                    <span className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed font-mono">
                      I acknowledge YKM luxury goods are crafted on demand and consent to private verification.
                    </span>
                  </div>

                  <button
                    id="submit-allocation-request"
                    type="submit"
                    disabled={isAllocating}
                    className="w-full bg-white dark:bg-white light:bg-zinc-950 hover:opacity-90 text-zinc-950 dark:text-zinc-950 light:text-white py-2.5 rounded-lg text-xs font-display font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer mt-2"
                  >
                    {isAllocating ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-zinc-950 dark:border-zinc-950 light:border-white border-t-transparent rounded-full animate-spin" />
                        COMMITTING ALLOTMENT BLOCK...
                      </>
                    ) : (
                      <>
                        REQUEST SECURE ALLOCATION
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="allocation-cert"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6"
                >
                  {/* Allocation Certificate Graphic */}
                  <div className="border border-amber-500/30 bg-gradient-to-br from-zinc-950 via-zinc-950 to-zinc-900 p-5 rounded-xl relative overflow-hidden space-y-4">
                    {/* Golden branding glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none" />
                    
                    <div className="flex items-center justify-between border-b border-zinc-900 pb-3">
                      <div>
                        <h5 className="font-display font-black text-xs text-amber-400 tracking-wider">
                          YKM ALLOCATION SECURITY CERTIFICATE
                        </h5>
                        <p className="text-[8px] font-mono text-zinc-500 mt-0.5">
                          CRYPTOGRAPHIC REGISTER ENTRY
                        </p>
                      </div>
                      <Gem className="w-4 h-4 text-amber-500" />
                    </div>

                    <div className="space-y-3 font-mono text-[10px]">
                      <div className="flex justify-between border-b border-zinc-900/60 pb-1.5">
                        <span className="text-zinc-500">REGISTRATION SERIAL</span>
                        <span className="text-zinc-200 font-bold tracking-widest">{allocationCertificate.serial}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/60 pb-1.5">
                        <span className="text-zinc-500">AUTHORIZED HOLDER</span>
                        <span className="text-zinc-200 uppercase font-semibold">{allocationCertificate.owner}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/60 pb-1.5">
                        <span className="text-zinc-500">EMAIL REGISTRY</span>
                        <span className="text-zinc-200">{allocationCertificate.email}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/60 pb-1.5">
                        <span className="text-zinc-500">BRANDED SPECIMEN</span>
                        <span className="text-amber-400 font-semibold">{allocationCertificate.brandName}</span>
                      </div>
                      <div className="flex justify-between border-b border-zinc-900/60 pb-1.5">
                        <span className="text-zinc-500">BESPOKE ADJUSTMENT</span>
                        <span className="text-zinc-300 max-w-[180px] text-right truncate" title={allocationCertificate.personalization}>
                          {allocationCertificate.personalization}
                        </span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="text-zinc-500">VERIFICATION TIME</span>
                        <span className="text-zinc-400">{allocationCertificate.timestamp}</span>
                      </div>
                    </div>

                    {/* Seal and signature detail */}
                    <div className="border-t border-zinc-900 pt-3 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[8px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-1 rounded border border-emerald-900/40">
                        <CheckCircle className="w-3 h-3 shrink-0" />
                        <span>QUOTA COMMITTED</span>
                      </div>
                      <div className="text-right">
                        <span className="block text-[7px] font-mono text-zinc-500">AUTHORIZED STAMP</span>
                        <span className="font-display font-black text-xs text-white tracking-widest uppercase leading-none">
                          YKM LABS
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-zinc-500 text-center leading-relaxed">
                    A formal luxury consultant will reach out via <span className="text-zinc-300">{allocationCertificate.email}</span> to coordinate secure shipping, sizing verification, and final custom details.
                  </p>

                  <button
                    id="reset-allocation"
                    onClick={() => {
                      setAllocationCertificate(null);
                      setAllocationForm({ fullName: "", email: "", personalization: "", agreeTerms: false });
                    }}
                    className="w-full border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-950 hover:bg-zinc-900 text-zinc-300 font-display font-bold text-xs py-2.5 rounded shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    REGISTER ANOTHER ARTIFACT
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}

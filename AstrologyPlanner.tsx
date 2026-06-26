import React, { useState } from "react";
import { 
  Compass, 
  Calendar, 
  Moon, 
  Sun, 
  ChevronRight, 
  Activity, 
  Award, 
  CheckCircle, 
  AlertCircle, 
  Trash2, 
  Shield,
  Plus,
  Bookmark,
  RefreshCw
} from "lucide-react";

interface Milestone {
  id: string;
  name: string;
  aspect: string;
  rating: number;
  advisory: string;
  dateString: string;
  date: string;
  house: number;
  moonPhase: string;
}

export default function AstrologyPlanner() {
  const [eventType, setEventType] = useState("launch");
  const [date, setDate] = useState("2026-09-18");
  const [calculation, setCalculation] = useState<any | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  // Local Storage State for Saved Milestones
  const [savedMilestones, setSavedMilestones] = useState<Milestone[]>(() => {
    const saved = localStorage.getItem("ykm_saved_milestones");
    return saved ? JSON.parse(saved) : [];
  });

  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "success" | "error">("idle");
  const [saveMessage, setSaveMessage] = useState("");

  // Custom inline deletion confirmation state
  const [deletingMilestone, setDeletingMilestone] = useState<{ id: string; name: string } | null>(null);

  const eventTypes = [
    { id: "launch", name: "Brand & Product Launch", aspect: "Jupiter Sextile Uranus", rating: 94, advisory: "Highly auspicious. Planetary alignment creates substantial early momentum and viral reach. Recommended launch hour: 09:15 AM." },
    { id: "incorporation", name: "Legal Incorporation", aspect: "Sun Conjunction Saturn", rating: 88, advisory: "Solid foundation. This alignment favors long-term structural viability and compliance resilience. Good for building decadal enterprises." },
    { id: "funding", name: "VC Investment Round", aspect: "Venus Trine Pluto", rating: 91, advisory: "Excellent wealth attraction. Deep financial integration and high valuation alignments. Perfect for closing term sheets." },
    { id: "partnership", name: "Co-Founder Agreement", aspect: "Mercury Trine Neptune", rating: 85, advisory: "High synastry alignment. Promotes shared creative vision and mutual intuition. Ensure legal documents reflect the spiritual commitments." },
    { id: "expansion", name: "International Scale Out", aspect: "Mars Sextile Jupiter", rating: 95, advisory: "Phenomenal growth velocity. Perfect cosmic window for aggressive territorial expansion and scaling infrastructure." }
  ];

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    setCalculation(null);

    setTimeout(() => {
      const found = eventTypes.find(evt => evt.id === eventType) || eventTypes[0];
      const dateNum = date.split("-").reduce((acc, val) => acc + parseInt(val || "0", 10), 0);
      const scoreOffset = (dateNum % 11) - 5; // -5 to +5
      const finalRating = Math.min(100, Math.max(50, found.rating + scoreOffset));

      setCalculation({
        ...found,
        rating: finalRating,
        dateString: new Date(date).toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" }),
        date: date,
        house: (dateNum % 12) + 1,
        moonPhase: ["Waxing Gibbous", "Full Moon", "Waning Crescent", "New Moon", "Waxing Crescent"][(dateNum % 5)]
      });
      setIsCalculating(false);
    }, 1000);
  };

  const handleSaveMilestone = () => {
    if (!calculation) return;
    setSaveStatus("saving");

    // Check if duplicate on the same date with the same category
    const isDuplicate = savedMilestones.some(
      m => m.date === calculation.date && m.name === calculation.name
    );

    if (isDuplicate) {
      setSaveStatus("error");
      setSaveMessage("This strategic window is already in your schedule registry.");
      setTimeout(() => {
        setSaveStatus("idle");
        setSaveMessage("");
      }, 4000);
      return;
    }

    const newMilestone: Milestone = {
      id: `milestone-${Date.now()}`,
      name: calculation.name,
      aspect: calculation.aspect,
      rating: calculation.rating,
      advisory: calculation.advisory,
      dateString: calculation.dateString,
      date: calculation.date,
      house: calculation.house,
      moonPhase: calculation.moonPhase
    };

    const updated = [newMilestone, ...savedMilestones];
    setSavedMilestones(updated);
    localStorage.setItem("ykm_saved_milestones", JSON.stringify(updated));

    setSaveStatus("success");
    setSaveMessage("Auspicous Alignment successfully written to your Strategic Schedule.");
    setTimeout(() => {
      setSaveStatus("idle");
      setSaveMessage("");
    }, 4000);
  };

  const handleDeleteTrigger = (id: string, name: string) => {
    setDeletingMilestone({ id, name });
  };

  const executeDeleteMilestone = () => {
    if (!deletingMilestone) return;
    const updated = savedMilestones.filter(m => m.id !== deletingMilestone.id);
    setSavedMilestones(updated);
    localStorage.setItem("ykm_saved_milestones", JSON.stringify(updated));
    setDeletingMilestone(null);
  };

  return (
    <div className="space-y-6">
      {/* Astrological Engine Panel */}
      <div id="astrology-planner" className="border border-zinc-850 dark:border-zinc-850 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white p-6 rounded-xl shadow-xl transition-all">
        <div className="flex items-center gap-3 mb-5">
          <div className="p-2.5 bg-neutral-900 dark:bg-neutral-900 light:bg-zinc-100 rounded-lg text-white dark:text-white light:text-zinc-800">
            <Compass className="w-5 h-5 animate-spin-slow" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wide text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              BUSINESS ASTROLOGY TIMING ENGINE
            </h4>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
              Cosmic Alignment & Tactical Venture Sync
            </p>
          </div>
        </div>

        <form onSubmit={handleCalculate} className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                Strategic Event Type
              </label>
              <select
                id="event-type-select"
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded-lg px-3 py-2 text-xs font-display text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
              >
                <option value="launch">Brand & Product Launch</option>
                <option value="incorporation">Company Incorporation</option>
                <option value="funding">VC Investment Round Close</option>
                <option value="partnership">Executive / Board Sign-off</option>
                <option value="expansion">International Scaling Milestone</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-1.5 uppercase">
                Target Launch Date
              </label>
              <div className="relative">
                <input
                  id="target-date-input"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-300 rounded-lg px-3 py-2 text-xs font-mono text-zinc-100 dark:text-zinc-100 light:text-zinc-900 focus:outline-none focus:border-zinc-600 dark:focus:border-zinc-600 light:focus:border-zinc-400 transition-all"
                />
              </div>
            </div>
          </div>

          <button
            id="calculate-sync-button"
            type="submit"
            disabled={isCalculating}
            className="w-full bg-white dark:bg-white light:bg-zinc-900 hover:opacity-90 text-zinc-950 dark:text-zinc-950 light:text-white py-2.5 rounded-lg text-xs font-display font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            {isCalculating ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-zinc-950 dark:border-zinc-950 light:border-white border-t-transparent rounded-full animate-spin" />
                SYNCHRONIZING ORBITAL MATRICES...
              </>
            ) : (
              <>
                CALCULATE COSMIC ALIGNMENT
                <ChevronRight className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>

        {/* Output calculation */}
        {calculation && (
          <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 p-5 rounded-lg transition-all animate-fade-in space-y-5">
            <div className="flex flex-col md:flex-row items-center gap-6 justify-between border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 pb-5">
              {/* Visual alignment rating */}
              <div className="text-center md:text-left flex flex-col md:flex-row items-center gap-4">
                <div className="relative flex items-center justify-center">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeWidth="4"
                      fill="transparent"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="34"
                      stroke={calculation.rating > 90 ? "#22c55e" : calculation.rating > 80 ? "#eab308" : "#a855f7"}
                      strokeWidth="4"
                      fill="transparent"
                      strokeDasharray={213.6}
                      strokeDashoffset={213.6 - (213.6 * calculation.rating) / 100}
                      className="transition-all duration-1000"
                    />
                  </svg>
                  <span className="absolute text-lg font-display font-extrabold text-white dark:text-white light:text-zinc-900">
                    {calculation.rating}%
                  </span>
                </div>
                <div>
                  <h5 className="font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 text-sm">
                    Cosmic Sync Rating
                  </h5>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                    Alignment score for {calculation.dateString}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 text-center md:text-right">
                <div>
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase">ASTRAL ASPECT</span>
                  <span className="text-xs font-display font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 flex items-center justify-center md:justify-end gap-1 mt-0.5">
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    {calculation.aspect}
                  </span>
                </div>
                <div>
                  <span className="block text-[9px] font-mono text-zinc-500 uppercase">ASTROLOGICAL HOUSE</span>
                  <span className="text-xs font-display font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-800 flex items-center justify-center md:justify-end gap-1 mt-0.5">
                    <Moon className="w-3.5 h-3.5 text-zinc-400" />
                    House {calculation.house} (Venture)
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white p-3 rounded border border-zinc-800/80 dark:border-zinc-800/80 light:border-zinc-200/60">
                <Award className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 block uppercase">
                    Executive Advisory
                  </span>
                  <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed mt-1">
                    {calculation.advisory}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 justify-center py-1 text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 italic border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 pb-3">
                <Activity className="w-3.5 h-3.5 text-zinc-400" />
                Moon Phase: {calculation.moonPhase} • Perfect alignment with YKM's Decadal Venture blueprint.
              </div>
            </div>

            {/* Save to registry action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 bg-zinc-900/20 dark:bg-zinc-900/20 light:bg-zinc-50 p-4 rounded-lg border border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
              <div className="text-center sm:text-left">
                <h6 className="text-xs font-display font-bold text-zinc-200 dark:text-zinc-200 light:text-zinc-800">
                  Strategic Milestone Registry
                </h6>
                <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono mt-0.5">
                  Save this highly auspicious launch window to your local schedule.
                </p>
              </div>

              <button
                id="save-milestone-action"
                onClick={handleSaveMilestone}
                disabled={saveStatus === "saving"}
                className="w-full sm:w-auto bg-zinc-100 hover:bg-white text-zinc-950 font-display font-bold text-xs px-4.5 py-2.5 rounded shadow transition-all flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {saveStatus === "saving" ? (
                  <>
                    <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    RECORDING MILSTONE...
                  </>
                ) : saveStatus === "success" ? (
                  <>
                    <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                    ADDED TO DIRECTORY
                  </>
                ) : (
                  <>
                    <Bookmark className="w-3.5 h-3.5" />
                    SAVE TO SCHEDULE
                  </>
                )}
              </button>
            </div>

            {/* Error or Success Banner message */}
            {saveMessage && (
              <div className={`p-3 rounded text-xs flex items-center gap-2 ${
                saveStatus === "success" 
                  ? "bg-green-950/30 text-green-400 border border-green-900" 
                  : "bg-red-950/30 text-red-400 border border-red-900"
              }`}>
                {saveStatus === "success" ? <CheckCircle className="w-4 h-4 shrink-0" /> : <AlertCircle className="w-4 h-4 shrink-0" />}
                <span>{saveMessage}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Local Venture Milestones Directory */}
      <div className="border border-zinc-850 dark:border-zinc-850 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white p-6 rounded-xl shadow-xl transition-all">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-zinc-900 dark:border-zinc-900 light:border-zinc-200 pb-5 mb-5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-neutral-900 dark:bg-neutral-900 light:bg-zinc-100 rounded-lg text-white dark:text-white light:text-zinc-800">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-sm tracking-wide text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                EXECUTIVE STRATEGIC SCHEDULE
              </h4>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
                Auspicious Venture Timelines & Cosmic Landmarks
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
              Saved Strategic Landmarks
            </span>
          </div>

          {/* Custom Safe Deletion Confirmation Box inside schedule */}
          {deletingMilestone && (
            <div className="p-4 bg-red-950/20 dark:bg-red-950/20 light:bg-red-50 border border-red-900/50 rounded-lg space-y-3">
              <div className="flex items-start gap-2 text-xs">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-bold text-red-300 dark:text-red-300 light:text-red-800">Remove Venture Landmark</h5>
                  <p className="text-red-400/80 dark:text-red-400/80 light:text-red-700 font-mono text-[10px] mt-1">
                    Are you sure you want to remove <span className="font-sans font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">"{deletingMilestone.name}"</span> from your offline registry?
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={() => setDeletingMilestone(null)}
                  className="px-3 py-1.5 rounded bg-zinc-900 hover:bg-zinc-800 text-[10px] font-mono uppercase text-zinc-400 cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={executeDeleteMilestone}
                  className="px-3 py-1.5 rounded bg-red-900 hover:bg-red-800 text-[10px] font-mono uppercase text-white cursor-pointer transition-colors"
                >
                  Confirm Delete
                </button>
              </div>
            </div>
          )}

          {savedMilestones.length === 0 ? (
            <div className="border border-dashed border-zinc-800 dark:border-zinc-800 light:border-zinc-200 p-8 rounded-lg text-center bg-zinc-950/10">
              <Shield className="w-8 h-8 text-zinc-600 dark:text-zinc-600 light:text-zinc-400 mx-auto mb-2.5 opacity-50" />
              <h5 className="font-display font-semibold text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600">
                No Strategic Milestones Saved
              </h5>
              <p className="text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-500 font-mono mt-1 max-w-sm mx-auto leading-relaxed">
                Calculate an auspicious alignment timeline above and click "Save to Schedule" to compile your first executive venture landmark offline.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {savedMilestones.map((milestone) => (
                <div 
                  key={milestone.id} 
                  className="p-3.5 rounded-lg border bg-zinc-950/60 dark:bg-zinc-950/60 light:bg-zinc-50/80 border-zinc-800 dark:border-zinc-800 light:border-zinc-300/80 hover:border-zinc-700 dark:hover:border-zinc-700 flex flex-col justify-between relative overflow-hidden transition-all group"
                >
                  {/* Aspect gradient line */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-amber-400 via-indigo-500 to-emerald-400" />
                  
                  <div className="pl-1.5 pr-6">
                    <div className="flex items-start justify-between">
                      <h5 className="font-display font-bold text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 truncate leading-tight max-w-xs">
                        {milestone.name}
                      </h5>
                    </div>
                    <p className="text-[9px] font-mono text-zinc-500 mt-1 uppercase flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-zinc-400" />
                      {milestone.dateString}
                    </p>
                    <p className="text-[10px] text-zinc-400 dark:text-zinc-400 light:text-zinc-600 line-clamp-2 mt-2 leading-relaxed">
                      Sync: {milestone.rating}% | {milestone.aspect}
                    </p>
                    <p className="text-[10px] text-zinc-500 dark:text-zinc-500 light:text-zinc-500 font-mono italic mt-1">
                      {milestone.moonPhase} • House {milestone.house}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-zinc-900/60 dark:border-zinc-900/60 light:border-zinc-200 pt-2.5 mt-3 pl-1.5">
                    <span className="text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
                      YKM TIMED WINDOW
                    </span>

                    <button
                      id={`delete-milestone-event-${milestone.id}`}
                      onClick={() => handleDeleteTrigger(milestone.id, milestone.name)}
                      className="text-zinc-500 hover:text-red-400 p-1 rounded hover:bg-red-950/10 transition-all cursor-pointer opacity-0 group-hover:opacity-100 focus:opacity-100"
                      title="Remove milestone from directory"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

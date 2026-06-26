import React, { useState } from "react";
import { Award, CheckCircle, ShieldAlert, TrendingUp, Presentation, Landmark, UserCheck } from "lucide-react";

export default function PitchDeckAudit() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    governance: "none",
    projections: "untested",
    deck: "ideas",
    network: "unconnected"
  });
  const [auditResult, setAuditResult] = useState<any | null>(null);

  const steps = [
    {
      id: "governance",
      title: "Corporate Governance & Compliance",
      icon: <Landmark className="w-5 h-5 text-zinc-400" />,
      desc: "Do you have formal board structures, legal structures, and solid internal compliance records in place?",
      options: [
        { value: "fully", label: "Yes, fully structured board & compliance protocols", points: 25 },
        { value: "partial", label: "Basic incorporation but board/compliance is informal", points: 15 },
        { value: "none", label: "No formal structure yet, solo-founder stage", points: 5 }
      ]
    },
    {
      id: "projections",
      title: "Financial Projections & Unit Economics",
      icon: <TrendingUp className="w-5 h-5 text-emerald-400" />,
      desc: "Do you have multi-year granular cash-flow models and stress-tested valuation calculations?",
      options: [
        { value: "stress", label: "Stress-tested multi-year models & solid unit economics", points: 25 },
        { value: "basic", label: "Basic spreadsheet projections with simple assumptions", points: 15 },
        { value: "untested", label: "No financial models completed yet", points: 5 }
      ]
    },
    {
      id: "deck",
      title: "Pitch Deck & GTM Strategy",
      icon: <Presentation className="w-5 h-5 text-pink-400" />,
      desc: "Is your investor deck ready with clear product roadmaps, competitive moats, and exact Go-to-Market blueprints?",
      options: [
        { value: "master", label: "Professional slide deck with deep GTM and moats mapped", points: 25 },
        { value: "draft", label: "Draft deck exists but GTM strategy needs refinement", points: 15 },
        { value: "ideas", label: "Just conceptual slides or initial outline", points: 5 }
      ]
    },
    {
      id: "network",
      title: "Investor Relations & Network Reach",
      icon: <UserCheck className="w-5 h-5 text-zinc-400" />,
      desc: "How structured is your outreach list of active global angel syndicates or VC funds?",
      options: [
        { value: "active", label: "Highly active pipelines, relationship matrices, and template assets ready", points: 25 },
        { value: "informal", label: "A few contact names, but outreach is irregular", points: 15 },
        { value: "unconnected", label: "No active connections or VC networking structures", points: 5 }
      ]
    }
  ];

  const handleSelect = (field: string, val: string) => {
    setAnswers(prev => ({ ...prev, [field]: val }));
  };

  const handleNext = () => {
    if (step < steps.length) {
      setStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    let totalScore = 0;
    steps.forEach(s => {
      const selectedOpt = s.options.find(opt => opt.value === (answers as any)[s.id]);
      totalScore += selectedOpt ? selectedOpt.points : 0;
    });

    let rating = "Tier C: Foundation Building";
    let message = "Your venture is in the early seed stage. Prioritize building structured corporate governance and model basic unit economics before starting active capital hunts.";
    let actionItems = [
      "Consult YKM Strategy for basic entity incorporation blueprints.",
      "Draft a 1-year basic operating cash-flow statement.",
      "Map out your target market customer demographics to establish initial GTM direction."
    ];

    if (totalScore >= 80) {
      rating = "Tier A: Investor Ready";
      message = "Outstanding metrics! You have structured internal pipelines, solid stress-tested projections, and deep GTM moats. Your venture is primed for institutional Series A / Angel syndication.";
      actionItems = [
        "Deploy Pitch Deck Architecture to synthesize complex data into compelling corporate stories.",
        "Initiate relationship cycles with Ambinix Ventures investor channels.",
        "Refine valuation parameters ahead of intense institutional diligence sessions."
      ];
    } else if (totalScore >= 50) {
      rating = "Tier B: Strategic Growth Stage";
      message = "Good foundation. You have basic outlines, but lack deep compliance robustness, stress-tested projections, or professional pitch assets. Focus on professional alignment.";
      actionItems = [
        "Strengthen corporate governance parameters by setting up advisory structures.",
        "Refine financial models into stress-tested valuation calculations.",
        "Rework the draft pitch deck to highlight your competitive moats."
      ];
    }

    setAuditResult({
      score: totalScore,
      rating,
      message,
      actionItems
    });
    setStep(steps.length + 1);
  };

  const handleReset = () => {
    setStep(1);
    setAnswers({
      governance: "none",
      projections: "untested",
      deck: "ideas",
      network: "unconnected"
    });
    setAuditResult(null);
  };

  const currentQuestion = steps[step - 1];

  return (
    <div id="pitch-deck-audit" className="border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white p-6 rounded-xl shadow-xl transition-all">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-neutral-900 dark:bg-neutral-900 light:bg-zinc-100 rounded-lg text-white dark:text-white light:text-zinc-800">
            <Presentation className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wide text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              VENTURE FUNDING DIAGNOSTIC
            </h4>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
              Investor Vetting & Pitch Assessment
            </p>
          </div>
        </div>
        <div className="text-xs font-mono text-zinc-500">
          {step <= steps.length ? `STEP ${step} OF ${steps.length}` : "COMPLETE"}
        </div>
      </div>

      {step <= steps.length ? (
        <div className="space-y-5 animate-fade-in">
          {/* Progress bar */}
          <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-zinc-400 transition-all duration-300"
              style={{ width: `${(step / steps.length) * 100}%` }}
            />
          </div>

          <div className="flex items-start gap-3.5 mb-2">
            <div className="p-2 bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-100 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 rounded-md shrink-0">
              {currentQuestion.icon}
            </div>
            <div>
              <h5 className="font-display font-bold text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                {currentQuestion.title}
              </h5>
              <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 mt-1 leading-relaxed">
                {currentQuestion.desc}
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            {currentQuestion.options.map((opt) => (
              <button
                key={opt.value}
                id={`opt-${opt.value}`}
                type="button"
                onClick={() => handleSelect(currentQuestion.id, opt.value)}
                className={`w-full text-left p-3.5 rounded-lg border transition-all text-xs font-display flex items-center justify-between ${
                  (answers as any)[currentQuestion.id] === opt.value
                    ? "bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-100 border-zinc-600 dark:border-zinc-600 light:border-zinc-400 text-white dark:text-white light:text-zinc-950"
                    : "bg-transparent border-zinc-800 dark:border-zinc-800 light:border-zinc-200 text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-zinc-850 dark:hover:bg-zinc-850 light:hover:bg-zinc-50"
                }`}
              >
                <span>{opt.label}</span>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  (answers as any)[currentQuestion.id] === opt.value
                    ? "border-zinc-400 bg-zinc-400 text-zinc-950"
                    : "border-zinc-700 dark:border-zinc-700 light:border-zinc-300"
                }`}>
                  {(answers as any)[currentQuestion.id] === opt.value && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-end pt-3">
            <button
              id="next-step-button"
              type="button"
              onClick={handleNext}
              className="bg-white dark:bg-white light:bg-zinc-950 hover:opacity-90 text-zinc-950 dark:text-zinc-950 light:text-white py-2 px-6 rounded-lg text-xs font-display font-semibold tracking-wide transition-all"
            >
              {step === steps.length ? "FINISH DIAGNOSTIC" : "CONTINUE"}
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-5 animate-fade-in">
          <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 p-5 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-zinc-800 dark:border-zinc-800 light:border-zinc-200 pb-4 mb-4">
              <div>
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                  VENTURE MATURITY RATING
                </span>
                <h5 className="font-display font-bold text-zinc-100 dark:text-zinc-100 light:text-zinc-900 text-base mt-0.5">
                  {auditResult.rating}
                </h5>
              </div>
              <div className="text-center md:text-right">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">PRIMED SCORE</span>
                <span className="text-2xl font-display font-black text-zinc-400">
                  {auditResult.score} / 100
                </span>
              </div>
            </div>

            <p className="text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-700 leading-relaxed bg-zinc-900/30 dark:bg-zinc-900/30 light:bg-white border border-zinc-800/40 dark:border-zinc-800/40 light:border-zinc-200 p-3.5 rounded-lg mb-4">
              {auditResult.message}
            </p>

            <div className="space-y-3">
              <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-400 light:text-zinc-500 uppercase block tracking-wider font-semibold">
                YKM Core Strategic Actions:
              </span>
              <ul className="space-y-2.5">
                {auditResult.actionItems.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300 dark:text-zinc-300 light:text-zinc-600 leading-normal">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-2">
            <p className="text-[10px] font-mono text-zinc-500">
              *Calculated against YKM's proprietary Venture Capital vetting framework.
            </p>
            <button
              id="reset-audit-button"
              type="button"
              onClick={handleReset}
              className="text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-zinc-900 text-xs font-display font-medium underline transition-all"
            >
              RE-AUDIT VENTURE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

import React, { useState } from "react";
import { Cpu, Database, ChevronRight, Shuffle, LayoutGrid, CheckCircle2 } from "lucide-react";

interface Node {
  id: string;
  name: string;
  type: "input" | "ai" | "erp" | "output";
  desc: string;
  active: boolean;
}

export default function AutomationVisualizer() {
  const [nodes, setNodes] = useState<Node[]>([
    { id: "leads", name: "Inbound Leads Stream", type: "input", desc: "Monitors emails, social channels, and forms for new partner opportunities.", active: true },
    { id: "ai-parser", name: "AI Cognitive Classifier", type: "ai", desc: "Uses machine intelligence to analyze investor readiness, intent, and timing.", active: true },
    { id: "ledger", name: "Bitcore Accounting Ledger", type: "erp", desc: "Triggers automated currency accounts and double-entry book balancing.", active: false },
    { id: "crm", name: "Enterprise CRM Module", type: "erp", desc: "Updates central executive registries, tasks, and follow-up metrics.", active: true },
    { id: "astrology-sync", name: "AI Astro Timing Evaluator", type: "ai", desc: "Flags auspicious date-ranges for contract signings and term-sheet delivery.", active: false },
    { id: "notify", name: "Strategic Exec Dispatch", type: "output", desc: "Sends custom encrypted briefs to YKM Advisory team to seal the deal.", active: true }
  ]);

  const toggleNode = (id: string) => {
    setNodes(prev =>
      prev.map(node => (node.id === id ? { ...node, active: !node.active } : node))
    );
  };

  const activeInputs = nodes.filter(n => n.type === "input" && n.active);
  const activeAIs = nodes.filter(n => n.type === "ai" && n.active);
  const activeERPs = nodes.filter(n => n.type === "erp" && n.active);
  const activeOutputs = nodes.filter(n => n.type === "output" && n.active);

  return (
    <div id="automation-visualizer" className="border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 bg-zinc-900/60 dark:bg-zinc-900/60 light:bg-white p-6 rounded-xl shadow-xl transition-all">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-neutral-900 dark:bg-neutral-900 light:bg-zinc-100 rounded-lg text-white dark:text-white light:text-zinc-800">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm tracking-wide text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
              BITCORE ERP & AI WORKFLOW STUDIO
            </h4>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 font-mono">
              Bespoke Enterprise Automation Architectures
            </p>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-500 mb-5 leading-relaxed">
        Select the building blocks to construct your simulated **Ambinix Ventures Workflow**. Observe the logical flow from Inbound Streams through Cognitive AI filters into Core ERP modules.
      </p>

      {/* Grid of Toggles */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
        {nodes.map(node => (
          <button
            key={node.id}
            id={`toggle-${node.id}`}
            onClick={() => toggleNode(node.id)}
            className={`p-3 rounded-lg border text-left transition-all ${
              node.active
                ? "bg-zinc-800/80 dark:bg-zinc-800/80 light:bg-zinc-100 border-zinc-600 dark:border-zinc-600 light:border-zinc-400"
                : "bg-transparent border-zinc-800 dark:border-zinc-800 light:border-zinc-200 opacity-60 hover:opacity-80"
            }`}
          >
            <div className="flex items-start justify-between">
              <span className="text-[10px] font-mono text-zinc-500 uppercase">
                {node.type}
              </span>
              <div className={`w-2 h-2 rounded-full ${node.active ? "bg-zinc-400 animate-pulse" : "bg-zinc-700"}`} />
            </div>
            <h5 className="font-display font-bold text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 mt-1.5 truncate">
              {node.name}
            </h5>
          </button>
        ))}
      </div>

      {/* Visual Pipeline flow */}
      <div className="bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 p-5 rounded-lg">
        <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase block mb-4">
          AUTOMATED ARCHITECTURE FLOW (LIVE PREVIEW)
        </span>

        <div className="flex flex-col md:flex-row items-stretch justify-between gap-4 md:gap-2">
          {/* Inputs Column */}
          <div className="flex-1 space-y-3 p-3 rounded bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
            <span className="text-[9px] font-mono text-zinc-500 uppercase block text-center border-b border-zinc-850 dark:border-zinc-850 light:border-zinc-200 pb-1 mb-2">
              01 • INBOUND STREAMS
            </span>
            {activeInputs.length === 0 ? (
              <p className="text-[11px] text-zinc-600 italic text-center py-4">No active input streams</p>
            ) : (
              activeInputs.map(node => (
                <div key={node.id} className="p-2.5 rounded bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 animate-fade-in">
                  <h6 className="font-display font-semibold text-[11px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{node.name}</h6>
                  <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">{node.desc}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-center text-zinc-600">
            <ChevronRight className="w-5 h-5 transform rotate-90 md:rotate-0" />
          </div>

          {/* AI Cognitive Filters */}
          <div className="flex-1 space-y-3 p-3 rounded bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
            <span className="text-[9px] font-mono text-zinc-500 uppercase block text-center border-b border-zinc-850 dark:border-zinc-850 light:border-zinc-200 pb-1 mb-2">
              02 • COGNITIVE AI FILTERS
            </span>
            {activeAIs.length === 0 ? (
              <p className="text-[11px] text-zinc-600 italic text-center py-4">No cognitive filters active</p>
            ) : (
              activeAIs.map(node => (
                <div key={node.id} className="p-2.5 rounded bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800/50 dark:border-zinc-800/50 light:border-zinc-200 animate-fade-in relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-zinc-400/10 text-zinc-400 text-[8px] font-mono px-1 py-0.5 rounded-bl">AI</div>
                  <h6 className="font-display font-semibold text-[11px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{node.name}</h6>
                  <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">{node.desc}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-center text-zinc-600">
            <ChevronRight className="w-5 h-5 transform rotate-90 md:rotate-0" />
          </div>

          {/* ERP Core Modules */}
          <div className="flex-1 space-y-3 p-3 rounded bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
            <span className="text-[9px] font-mono text-zinc-500 uppercase block text-center border-b border-zinc-850 dark:border-zinc-850 light:border-zinc-200 pb-1 mb-2">
              03 • BITCORE ERP CORE
            </span>
            {activeERPs.length === 0 ? (
              <p className="text-[11px] text-zinc-600 italic text-center py-4">No active ERP core ledger units</p>
            ) : (
              activeERPs.map(node => (
                <div key={node.id} className="p-2.5 rounded bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-850 dark:border-zinc-850 light:border-zinc-200 animate-fade-in">
                  <h6 className="font-display font-semibold text-[11px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{node.name}</h6>
                  <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">{node.desc}</p>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-center text-zinc-600">
            <ChevronRight className="w-5 h-5 transform rotate-90 md:rotate-0" />
          </div>

          {/* Outputs Dispatch */}
          <div className="flex-1 space-y-3 p-3 rounded bg-zinc-900/40 dark:bg-zinc-900/40 light:bg-white border border-zinc-900 dark:border-zinc-900 light:border-zinc-200">
            <span className="text-[9px] font-mono text-zinc-500 uppercase block text-center border-b border-zinc-850 dark:border-zinc-850 light:border-zinc-200 pb-1 mb-2">
              04 • STRATEGIC OUTPUTS
            </span>
            {activeOutputs.length === 0 ? (
              <p className="text-[11px] text-zinc-600 italic text-center py-4">No active strategic outputs</p>
            ) : (
              activeOutputs.map(node => (
                <div key={node.id} className="p-2.5 rounded bg-zinc-950 dark:bg-zinc-950 light:bg-zinc-50 border border-zinc-800 dark:border-zinc-800 light:border-zinc-200 animate-fade-in">
                  <h6 className="font-display font-semibold text-[11px] text-zinc-200 dark:text-zinc-200 light:text-zinc-800">{node.name}</h6>
                  <p className="text-[9px] text-zinc-500 mt-0.5 leading-snug">{node.desc}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-5 border-t border-zinc-900 dark:border-zinc-900 light:border-zinc-200 pt-3 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-zinc-500 gap-2">
          <div className="flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-zinc-400" />
            Active modules: {nodes.filter(n => n.active).length} / {nodes.length}
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            Integrity check: Bitcore ERP Sync and AI Token matching valid
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Plus, Upload, CalendarDays } from "lucide-react";

interface Cohort {
  name: string;
  estSize: string;
  pctOfTarget: string;
  male: string;
  female: string;
}

const cohorts: Cohort[] = [
  { name: "Superfans", estSize: "~9.1M", pctOfTarget: "16.5%", male: "~5.9M", female: "~3.2M" },
  { name: "Thrill Seekers", estSize: "~11.6M", pctOfTarget: "21.0%", male: "~7.5M", female: "~4.1M" },
  { name: "Big Screen Chasers", estSize: "~14.6M", pctOfTarget: "26.5%", male: "~9.5M", female: "~5.1M" },
  { name: "Adrenaline Athletes", estSize: "~9.1M", pctOfTarget: "16.5%", male: "~5.9M", female: "~3.2M" },
];

const totals = { estSize: "~44.4M", pctOfTarget: "80.4%", male: "~28.9M", female: "~15.6M" };

const barColors = ["#7c3aed", "#9333ea", "#a855f7", "#c084fc"];

export function AudienceCohorts() {
  return (
    <div className="glass rounded-[var(--radius-xl)] p-5">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-lg font-semibold">Audience Cohort Analysis</h3>
        <div className="flex items-center gap-2">
          <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Plus size={16} />
          </button>
          <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <Upload size={16} />
          </button>
          <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <CalendarDays size={16} />
          </button>
        </div>
      </div>

      <p className="text-xs text-muted-foreground mb-0.5">
        Counter-Programming Strategy: 60-70% Male Targeting Skew
      </p>
      <p className="text-[10px] text-muted-foreground/70 mb-4">
        Source: MRI-Simmons 2025 Fall USA Study &nbsp;|&nbsp; Base Universe: 55.2M Adults (21% of U.S. Pop)
      </p>

      {/* Cohort bars */}
      <div className="flex gap-1.5 mb-5 h-8 rounded-lg overflow-hidden">
        {cohorts.map((c, i) => {
          const pct = parseFloat(c.pctOfTarget);
          return (
            <motion.div
              key={c.name}
              initial={{ width: 0 }}
              animate={{ width: `${(pct / 80.4) * 100}%` }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              className="flex items-center justify-center rounded-md text-white text-[10px] font-semibold"
              style={{ background: barColors[i] }}
              title={`${c.name}: ${c.pctOfTarget}`}
            >
              {c.name}
            </motion.div>
          );
        })}
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden border border-border/50">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="px-3 py-2 text-left text-xs font-semibold">Cohort</th>
              <th className="px-3 py-2 text-right text-xs font-semibold">Est. Size</th>
              <th className="px-3 py-2 text-right text-xs font-semibold">% of Target</th>
              <th className="px-3 py-2 text-right text-xs font-semibold">Male (65%)</th>
              <th className="px-3 py-2 text-right text-xs font-semibold">Female (35%)</th>
            </tr>
          </thead>
          <tbody>
            {cohorts.map((c, i) => (
              <motion.tr
                key={c.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.3 }}
                className="border-b border-border/40 hover:bg-white/60 transition-colors"
              >
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: barColors[i] }} />
                    <span className="font-semibold text-xs">{c.name}</span>
                  </div>
                </td>
                <td className="px-3 py-2.5 text-right tabular-nums text-xs">{c.estSize}</td>
                <td className="px-3 py-2.5 text-right tabular-nums text-xs">{c.pctOfTarget}</td>
                <td className="px-3 py-2.5 text-right tabular-nums text-xs text-blue-600">{c.male}</td>
                <td className="px-3 py-2.5 text-right tabular-nums text-xs text-pink-500">{c.female}</td>
              </motion.tr>
            ))}
            <tr className="bg-slate-50 font-bold">
              <td className="px-3 py-2.5 text-xs">TOTAL (with overlap)</td>
              <td className="px-3 py-2.5 text-right tabular-nums text-xs">{totals.estSize}</td>
              <td className="px-3 py-2.5 text-right tabular-nums text-xs">{totals.pctOfTarget}</td>
              <td className="px-3 py-2.5 text-right tabular-nums text-xs text-blue-600">{totals.male}</td>
              <td className="px-3 py-2.5 text-right tabular-nums text-xs text-pink-500">{totals.female}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

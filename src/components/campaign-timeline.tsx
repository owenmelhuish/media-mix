"use client";

import { motion } from "framer-motion";
import { Plus, Upload, CalendarDays, Monitor, Smartphone, Tv, Globe, Search, MapPin, Mail } from "lucide-react";

interface Phase {
  name: string;
  subtitle: string;
  dates: string;
  budgetPct: string;
  barWidth: string;
  strategies: {
    label: string;
    cohort: string;
    channels: { name: string; icon: React.ElementType }[];
  }[];
}

const phases: Phase[] = [
  {
    name: "PHASE 1",
    subtitle: "Cast a Wide Net",
    dates: "3/23 – 4/5",
    budgetPct: "3%",
    barWidth: "3%",
    strategies: [
      {
        label: "Engage sports fans",
        cohort: "Thrill Seekers",
        channels: [
          { name: "Paid Social", icon: Smartphone },
          { name: "YouTube", icon: Monitor },
        ],
      },
      {
        label: "Make it big",
        cohort: "Big Screen Chasers",
        channels: [
          { name: "Display", icon: Globe },
          { name: "Paid Search", icon: Search },
        ],
      },
      {
        label: "Skew male to counter",
        cohort: "Adrenaline Athletes",
        channels: [
          { name: "CTV", icon: Tv },
        ],
      },
    ],
  },
  {
    name: "PHASE 2",
    subtitle: "Amplify Fear, Fish with a Spear",
    dates: "4/6 – 4/19",
    budgetPct: "25%",
    barWidth: "25%",
    strategies: [
      {
        label: "Feed the thrill",
        cohort: "Thrill Seekers",
        channels: [
          { name: "TV", icon: Tv },
          { name: "Streaming / CTV", icon: Monitor },
        ],
      },
      {
        label: "Make it big",
        cohort: "Big Screen Chasers",
        channels: [
          { name: "Display", icon: Globe },
          { name: "YouTube", icon: Monitor },
        ],
      },
      {
        label: "Seed the Fans",
        cohort: "Opening Weekend Superfans",
        channels: [
          { name: "Paid Social", icon: Smartphone },
          { name: "OOH", icon: MapPin },
        ],
      },
      {
        label: "Skew male to counter",
        cohort: "Adrenaline Athletes",
        channels: [
          { name: "Paid Search", icon: Search },
        ],
      },
    ],
  },
  {
    name: "PHASE 3",
    subtitle: "Big Splash",
    dates: "4/20 – 5/3",
    budgetPct: "69%",
    barWidth: "69%",
    strategies: [
      {
        label: "Feed the thrill",
        cohort: "Thrill Seekers",
        channels: [
          { name: "TV", icon: Tv },
          { name: "Streaming / CTV", icon: Monitor },
        ],
      },
      {
        label: "Make it big",
        cohort: "Big Screen Chasers",
        channels: [
          { name: "Display", icon: Globe },
          { name: "YouTube", icon: Monitor },
        ],
      },
      {
        label: "Seed the Fans",
        cohort: "Opening Weekend Superfans",
        channels: [
          { name: "Paid Social", icon: Smartphone },
          { name: "OOH", icon: MapPin },
        ],
      },
      {
        label: "Skew male to counter",
        cohort: "Adrenaline Athletes",
        channels: [
          { name: "Paid Search", icon: Search },
        ],
      },
    ],
  },
  {
    name: "PHASE 4",
    subtitle: "Hold the line through PVOD",
    dates: "6/15 – 6/28",
    budgetPct: "3%",
    barWidth: "3%",
    strategies: [
      {
        label: "Engage sports fans",
        cohort: "Thrill Seekers",
        channels: [
          { name: "Paid Social", icon: Smartphone },
          { name: "Streaming / CTV", icon: Monitor },
        ],
      },
      {
        label: "Make it big",
        cohort: "Big Screen Chasers",
        channels: [
          { name: "YouTube", icon: Monitor },
          { name: "Paid Search", icon: Search },
        ],
      },
    ],
  },
];

const strategyColors: Record<string, string> = {
  "Engage sports fans": "#7c3aed",
  "Feed the thrill": "#7c3aed",
  "Make it big": "#7c3aed",
  "Seed the Fans": "#7c3aed",
  "Skew male to counter": "#7c3aed",
};

function ChannelChip({ name, icon: Icon }: { name: string; icon: React.ElementType }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex items-center justify-center h-9 w-9 rounded-lg bg-white shadow-sm border border-border/40">
        <Icon size={16} className="text-foreground/70" />
      </div>
      <span className="text-[9px] font-semibold text-foreground/60 uppercase tracking-wide text-center leading-tight max-w-[70px]">
        {name}
      </span>
    </div>
  );
}

export function CampaignTimeline() {
  return (
    <div className="glass rounded-[var(--radius-xl)] p-5">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-lg font-semibold">Campaign Timeline</h3>
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

      <div className="grid grid-cols-4 gap-3">
        {phases.map((phase, pi) => {
          const isChase = phase.name === "PHASE 3";
          return (
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: pi * 0.1, duration: 0.4 }}
              className="flex flex-col"
            >
              {/* Phase Header */}
              <div className="text-center mb-3">
                <h4 className="text-sm font-extrabold uppercase tracking-wide">
                  {phase.name}
                </h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">{phase.subtitle}</p>
              </div>

              {/* Budget Bar */}
              <div className="relative h-6 rounded-md bg-purple-100 mb-3 overflow-hidden">
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-md bg-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: phase.barWidth }}
                  transition={{ duration: 0.8, delay: pi * 0.15, ease: "easeOut" }}
                />
                <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-purple-700">
                  {phase.budgetPct}
                </span>
              </div>

              {/* Strategy Rows */}
              <div className="flex flex-col gap-3 flex-1">
                {phase.strategies.map((strat, si) => (
                  <div key={si} className="rounded-lg bg-white/60 border border-border/30 p-2.5">
                    <div className="mb-2">
                      <span className="text-[10px] font-bold text-purple-600 leading-tight block">
                        {strat.label}
                      </span>
                      <span className="text-[9px] text-muted-foreground">{strat.cohort}</span>
                    </div>
                    <div className="flex items-start gap-3 flex-wrap">
                      {strat.channels.map((ch) => (
                        <ChannelChip key={ch.name} name={ch.name} icon={ch.icon} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Date Footer */}
              <div className="mt-3 rounded-md bg-foreground px-3 py-1.5 text-center">
                <span className="text-[11px] font-semibold text-white">{phase.dates}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

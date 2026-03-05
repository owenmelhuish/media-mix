"use client";

import { motion } from "framer-motion";
import { Users, DollarSign, Zap, Shield, Plus, Upload, CalendarDays } from "lucide-react";
import { GaugeData } from "@/lib/types";

const iconMap: Record<string, React.ElementType> = {
  users: Users,
  dollar: DollarSign,
  zap: Zap,
  shield: Shield,
};

function Gauge({ data, index }: { data: GaugeData; index: number }) {
  const Icon = iconMap[data.icon] || Zap;
  const radius = 45;
  const circumference = Math.PI * radius;
  const fillPct = data.value / data.max;
  const offset = circumference * (1 - fillPct);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <svg width="110" height="65" viewBox="0 0 110 65">
          {/* Background arc */}
          <path
            d="M 10 60 A 45 45 0 0 1 100 60"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="8"
            strokeLinecap="round"
          />
          {/* Filled arc */}
          <motion.path
            d="M 10 60 A 45 45 0 0 1 100 60"
            fill="none"
            stroke={data.color}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-1">
          <Icon size={14} className="text-muted-foreground mb-0.5" />
          <span className="text-lg font-bold">{data.value}{data.unit}</span>
        </div>
      </div>
      <span className="mt-1 text-xs text-center text-muted-foreground leading-tight max-w-[100px]">
        {data.label}
      </span>
    </motion.div>
  );
}

interface PerformanceGaugesProps {
  gauges: GaugeData[];
}

export function PerformanceGauges({ gauges }: PerformanceGaugesProps) {
  return (
    <div className="glass rounded-[var(--radius-xl)] p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Performance Gauges</h3>
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
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {gauges.map((g, i) => (
          <Gauge key={g.label} data={g} index={i} />
        ))}
      </div>
    </div>
  );
}

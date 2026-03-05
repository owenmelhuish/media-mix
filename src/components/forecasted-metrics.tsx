"use client";

import { motion, AnimatePresence } from "framer-motion";
function formatCompact(value: number): string {
  if (value >= 1_000_000_000) {
    const b = value / 1_000_000_000;
    return `${b % 1 === 0 ? b.toFixed(0) : b.toFixed(1)}B`;
  }
  if (value >= 1_000_000) {
    const m = value / 1_000_000;
    return `${m % 1 === 0 ? m.toFixed(0) : m.toFixed(1)}M`;
  }
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return `${value}`;
}

interface ForecastedMetricsProps {
  projectedRoas: number;
  estimatedCpm: number;
  totalImpressions: number;
  prevRoas?: number;
  prevCpm?: number;
  prevImpressions?: number;
}

function MetricCard({
  label,
  valuePrefix,
  value,
  valueSuffix,
  index,
}: {
  label: string;
  valuePrefix: string;
  value: string;
  valueSuffix?: string;
  index: number;
}) {
  const labelParts = label.split(" ");
  const valueLabel = labelParts[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="glass grid grid-cols-2 items-center rounded-[var(--radius-lg)] overflow-hidden"
    >
      {/* Left: label */}
      <div className="px-4 py-3">
        <span className="text-sm font-semibold leading-tight text-foreground">
          {label}
        </span>
      </div>

      {/* Right: value */}
      <div className="px-4 py-3 bg-white/40">
        <span className="text-xs text-muted-foreground">{valueLabel}</span>
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className="text-2xl font-bold tracking-tight leading-none mt-0.5"
          >
            {valuePrefix}{value}{valueSuffix}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export function ForecastedMetrics(props: ForecastedMetricsProps) {
  return (
    <div className="flex flex-col gap-3 justify-center">
      <MetricCard
        label="Estimated CPM"
        valuePrefix="$"
        value={`${props.estimatedCpm}`}
        index={0}
      />
      <MetricCard
        label="Total Impressions"
        valuePrefix=""
        value={formatCompact(props.totalImpressions)}
        index={1}
      />
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface PredictionEngineProps {
  isRunning: boolean;
  onRunSimulation: () => void;
  confidence: number;
}

export function PredictionEngine({ isRunning, onRunSimulation }: PredictionEngineProps) {
  return (
    <div className="glass-dark flex flex-col items-center justify-center rounded-[var(--radius-xl)] p-6 text-white relative overflow-hidden">
      {/* Animated background particles */}
      {isRunning && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-blue-400/40"
              initial={{ x: "50%", y: "50%" }}
              animate={{
                x: `${20 + Math.random() * 60}%`,
                y: `${20 + Math.random() * 60}%`,
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5 + Math.random(),
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      )}

      <img
        src="/stratis-logo.svg"
        alt="STRATIS"
        className="h-5 invert"
      />

      <button
        onClick={onRunSimulation}
        disabled={isRunning}
        className="mt-5 flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
      >
        {isRunning ? (
          <>
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
              <Sparkles size={14} />
            </motion.div>
            Running...
          </>
        ) : (
          "Run Simulation"
        )}
      </button>

      <div className="mt-4 flex items-center gap-1.5 text-xs text-white/50">
        <Sparkles size={11} />
        <span>Predictive Analytics</span>
      </div>

      {/* Left-side connector arrow */}
      <svg
        className="absolute -left-3 top-1/2 -translate-y-1/2 text-gray-400"
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M 0 10 L 10 10" strokeDasharray="3 2" />
        <path d="M 8 6 L 12 10 L 8 14" />
      </svg>

      {/* Right-side connector arrow */}
      <svg
        className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-400"
        width="14"
        height="20"
        viewBox="0 0 14 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M 2 10 L 12 10" strokeDasharray="3 2" />
        <path d="M 10 6 L 14 10 L 10 14" />
      </svg>
    </div>
  );
}

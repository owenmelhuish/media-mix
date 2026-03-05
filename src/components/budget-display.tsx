"use client";

import { motion } from "framer-motion";
import { formatCurrency } from "@/lib/utils";

interface BudgetDisplayProps {
  totalBudget: number;
  allocated: number;
}

export function BudgetDisplay({ totalBudget, allocated }: BudgetDisplayProps) {
  return (
    <div className="glass flex flex-col items-center justify-center rounded-[var(--radius-xl)] p-6 relative">
      <span className="text-sm text-muted-foreground">Initial Budget</span>
      <motion.span
        key={totalBudget}
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mt-1 text-5xl font-bold tracking-tighter"
      >
        {formatCurrency(totalBudget)}
      </motion.span>

      {/* Right-side curly brace connector */}
      <svg
        className="absolute -right-3 top-1/2 -translate-y-1/2 text-gray-300"
        width="12"
        height="120"
        viewBox="0 0 12 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M 0 0 Q 10 0, 10 20 Q 10 55, 5 60 Q 10 65, 10 100 Q 10 120, 0 120" />
      </svg>
    </div>
  );
}

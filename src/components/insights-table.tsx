"use client";

import { Star, Plus, Upload, CalendarDays } from "lucide-react";
import { Insight } from "@/lib/types";
import { cn } from "@/lib/utils";

interface InsightsTableProps {
  insights: Insight[];
}

export function InsightsTable({ insights }: InsightsTableProps) {
  return (
    <div className="glass rounded-[var(--radius-xl)] p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Strategic Insights</h3>
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
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left text-xs text-muted-foreground">
              <th className="pb-2 pr-3 w-8"></th>
              <th className="pb-2 pr-3 font-medium">Insight Title</th>
              <th className="pb-2 pr-3 font-medium">Status</th>
              <th className="pb-2 pr-3 font-medium">Generated Date</th>
              <th className="pb-2 pr-3 font-medium">Expiry Date</th>
              <th className="pb-2 font-medium">Assigned Planner</th>
            </tr>
          </thead>
          <tbody>
            {insights.map((insight) => (
              <tr
                key={insight.id}
                className="border-b border-border/50 last:border-0 hover:bg-muted/50 transition-colors"
              >
                <td className="py-3 pr-3">
                  <Star
                    size={14}
                    className={cn(
                      "cursor-pointer transition-colors",
                      insight.starred
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground hover:text-yellow-400"
                    )}
                  />
                </td>
                <td className="py-3 pr-3 font-medium">{insight.title}</td>
                <td className="py-3 pr-3">
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-xs font-medium",
                      insight.status === "Active"
                        ? "bg-emerald-100 text-emerald-700"
                        : insight.status === "Reviewing"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-600"
                    )}
                  >
                    {insight.status}
                  </span>
                </td>
                <td className="py-3 pr-3 text-muted-foreground">{insight.generatedDate}</td>
                <td className="py-3 pr-3 text-muted-foreground">{insight.expiryDate}</td>
                <td className="py-3 text-muted-foreground">{insight.assignedPlanner}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

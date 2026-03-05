"use client";

import { useState, useCallback, useRef } from "react";
import { ChevronLeft, Plus, Upload, CalendarDays } from "lucide-react";
import { TopNav } from "@/components/top-nav";
import { Sidebar } from "@/components/sidebar";
import { BudgetDisplay } from "@/components/budget-display";
import { ChannelSlider } from "@/components/channel-slider";
import { PredictionEngine } from "@/components/prediction-engine";
import { ForecastedMetrics } from "@/components/forecasted-metrics";
import { CampaignTimeline } from "@/components/campaign-timeline";
import { AudienceCohorts } from "@/components/audience-cohorts";
import { ResponseCurves } from "@/components/response-curves";
import { AllocationChart } from "@/components/allocation-chart";
import { defaultChannels, predictMetrics } from "@/lib/mock-data";
import { Channel } from "@/lib/types";

export default function Home() {
  const [channels, setChannels] = useState<Channel[]>(defaultChannels);
  const [isSimulating, setIsSimulating] = useState(false);
  const prevMetrics = useRef<{ roas: number; cpm: number; impressions: number } | null>(null);
  const totalBudget = 9_348_550;

  const metrics = predictMetrics(channels);
  const allocated = channels.reduce((sum, ch) => sum + ch.spend, 0);

  const handleChannelChange = useCallback((id: string, spend: number) => {
    setChannels((prev) =>
      prev.map((ch) => (ch.id === id ? { ...ch, spend } : ch))
    );
  }, []);

  const handleRunSimulation = useCallback(() => {
    prevMetrics.current = {
      roas: metrics.projectedRoas,
      cpm: metrics.estimatedCpm,
      impressions: metrics.totalImpressions,
    };
    setIsSimulating(true);
    setTimeout(() => setIsSimulating(false), 2000);
  }, [metrics]);

  const avatarColors = [
    "from-blue-400 to-blue-600",
    "from-pink-400 to-rose-500",
    "from-amber-400 to-orange-500",
    "from-emerald-400 to-emerald-600",
    "from-purple-400 to-purple-600",
    "from-red-400 to-red-500",
    "from-cyan-400 to-sky-500",
    "from-indigo-400 to-indigo-600",
  ];

  const avatarBadgeColors = [
    "bg-blue-500",
    "bg-blue-500",
    "bg-emerald-500",
    "bg-red-500",
    "bg-rose-400",
    "bg-gray-400",
    "bg-purple-400",
    "bg-gray-400",
  ];

  return (
    <div className="min-h-screen">
      <TopNav />
      <Sidebar />

      <main className="ml-20 mr-4 mt-4 pb-12">
        {/* Page Header */}
        <div className="mb-6 flex items-center gap-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-sm hover:bg-gray-50 transition-colors">
            <ChevronLeft size={18} />
          </button>
          <h1 className="text-2xl font-bold tracking-tight">
            Marketing Mix Optimization
          </h1>
        </div>

        {/* Media Allocation Flow */}
        <section className="glass rounded-[var(--radius-xl)] p-6 mb-6">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-2">
            <h2 className="text-lg font-semibold">Media Allocation</h2>
            <div className="flex items-center gap-2">
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/60 transition-colors">
                <Plus size={16} />
              </button>
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/60 transition-colors">
                <Upload size={16} />
              </button>
              <button className="rounded-lg p-1.5 text-muted-foreground hover:bg-white/60 transition-colors">
                <CalendarDays size={16} />
              </button>
            </div>
          </div>

          {/* Team Avatars - centered */}
          <div className="flex items-center justify-center mb-5">
            <div className="flex -space-x-2">
              {avatarColors.map((color, i) => (
                <div key={i} className="relative">
                  <div
                    className={`h-10 w-10 rounded-full bg-gradient-to-br ${color} ring-2 ring-white`}
                  />
                  <div
                    className={`absolute -bottom-0.5 left-1/2 -translate-x-1/2 h-3.5 w-3.5 rounded-full ${avatarBadgeColors[i]} ring-2 ring-white flex items-center justify-center`}
                  >
                    {i < 2 && (
                      <span className="text-[7px] font-bold text-white">{i + 1}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main 4-column Flow */}
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-6 items-center">
            {/* Col 1: Budget */}
            <BudgetDisplay totalBudget={totalBudget} allocated={allocated} />

            {/* Col 2: Channel Sliders */}
            <div className="glass rounded-[var(--radius-xl)] px-5 py-4 flex flex-col gap-4">
              {channels.map((ch, i) => (
                <ChannelSlider
                  key={ch.id}
                  channel={ch}
                  onChange={handleChannelChange}
                  index={i}
                />
              ))}
            </div>

            {/* Col 3: Prediction Engine */}
            <PredictionEngine
              isRunning={isSimulating}
              onRunSimulation={handleRunSimulation}
              confidence={89}
            />

            {/* Col 4: Forecasted Metrics */}
            <ForecastedMetrics
              projectedRoas={metrics.projectedRoas}
              estimatedCpm={metrics.estimatedCpm}
              totalImpressions={metrics.totalImpressions}
              prevRoas={prevMetrics.current?.roas}
              prevCpm={prevMetrics.current?.cpm}
              prevImpressions={prevMetrics.current?.impressions}
            />
          </div>

          {/* Flow Labels - bottom */}
          <div className="grid grid-cols-[1fr_2fr_1fr_1fr] gap-6 mt-4">
            <span className="text-xs font-medium text-center text-muted-foreground">
              Initial Budget
            </span>
            <span className="text-xs font-medium text-center text-muted-foreground">
              Channel Allocation
            </span>
            <span className="text-xs font-medium text-center text-muted-foreground">
              Prediction Engine
            </span>
            <span className="text-xs font-medium text-center text-muted-foreground">
              Forecasted Metrics
            </span>
          </div>
        </section>

        {/* Response Curves */}
        <section className="mb-6">
          <ResponseCurves channels={channels} />
        </section>

        {/* Timeline + Audience Cohorts */}
        <section className="mb-6">
          <CampaignTimeline />
        </section>

        <section className="mb-6">
          <AudienceCohorts />
        </section>

        {/* Allocation Chart */}
        <section>
          <AllocationChart channels={channels} />
        </section>
      </main>
    </div>
  );
}

"use client";

import { useState, useCallback } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Sector } from "recharts";
import { motion, AnimatePresence } from "framer-motion";
import { X, Plus, Upload, CalendarDays } from "lucide-react";
import { Channel } from "@/lib/types";
import { formatCurrency, cn } from "@/lib/utils";
import { channelDetails } from "@/lib/channel-details";
import { ChannelIcon } from "./channel-icon";

interface AllocationChartProps {
  channels: Channel[];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function renderActiveShape(props: any) {
  const {
    cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent,
  } = props;

  return (
    <g>
      <text x={cx} y={cy - 16} textAnchor="middle" fill="var(--color-foreground)" fontSize={20} fontWeight={700}>
        {payload.name}
      </text>
      <text x={cx} y={cy + 6} textAnchor="middle" fill="var(--color-muted-foreground)" fontSize={15}>
        {formatCurrency(payload.value)}
      </text>
      <text x={cx} y={cy + 26} textAnchor="middle" fill="var(--color-muted-foreground)" fontSize={13}>
        {(percent * 100).toFixed(1)}%
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={outerRadius + 14}
        outerRadius={outerRadius + 18}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.4}
      />
    </g>
  );
}
/* eslint-enable @typescript-eslint/no-explicit-any */

function DetailRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-3 py-1.5 border-b border-border/30 last:border-0">
      <span className="text-[11px] font-bold uppercase tracking-wider text-foreground/80">{label}</span>
      <div className="text-[12px] leading-[1.4] text-foreground/75">{children}</div>
    </div>
  );
}

export function AllocationChart({ channels }: AllocationChartProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<string | null>(null);
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);

  const data = channels.map((ch) => ({
    id: ch.id,
    name: ch.name,
    value: ch.spend,
    color: ch.color,
    icon: ch.icon,
  }));

  const total = channels.reduce((s, c) => s + c.spend, 0);

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const renderLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, name, percent, index } = props;
    const RADIAN = Math.PI / 180;
    const radius = outerRadius + 22;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    const isActive = activeIndex === index;
    if (isActive) return null;
    const pct = (percent * 100).toFixed(0);
    return (
      <text
        x={x}
        y={y}
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
        fontSize={10}
        fill="var(--color-muted-foreground)"
        opacity={0.6}
      >
        {name} {pct}%
      </text>
    );
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  const onPieEnter = useCallback((_: unknown, index: number) => {
    if (!selectedChannel) setActiveIndex(index);
  }, [selectedChannel]);

  const onPieLeave = useCallback(() => {
    if (!selectedChannel) setActiveIndex(null);
  }, [selectedChannel]);

  const onPieClick = useCallback((_: unknown, index: number) => {
    const ch = data[index];
    setSelectedChannel(ch.id);
    setActiveIndex(index);
    setActivePhaseIndex(0);
  }, [data]);

  const handleClose = useCallback(() => {
    setSelectedChannel(null);
    setActiveIndex(null);
    setActivePhaseIndex(0);
  }, []);

  const detail = selectedChannel ? channelDetails[selectedChannel] : null;
  const selectedCh = selectedChannel ? channels.find((c) => c.id === selectedChannel) : null;
  const phaseDetails = detail?.phaseDetails ?? [];
  const currentPhase = phaseDetails[activePhaseIndex] ?? phaseDetails[0];

  return (
    <div className="glass rounded-[var(--radius-xl)] p-6 min-h-[calc(100vh-8rem)]">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold">Budget Allocation</h3>
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

      <div className="flex gap-0 h-[calc(100vh-14rem)]">
        {/* Left: Legend */}
        <div className="flex flex-col gap-1.5 justify-center shrink-0 w-[150px] mr-2">
          {channels.map((ch, i) => {
            const pct = ((ch.spend / total) * 100).toFixed(0);
            const isSelected = selectedChannel === ch.id;
            return (
              <button
                key={ch.id}
                onClick={() => {
                  setSelectedChannel(ch.id);
                  setActiveIndex(i);
                  setActivePhaseIndex(0);
                }}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-2.5 py-1.5 text-left transition-all text-xs",
                  isSelected
                    ? "bg-white shadow-sm ring-1 ring-border"
                    : "hover:bg-white/60"
                )}
              >
                <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: ch.color }} />
                <span className={cn("truncate", isSelected ? "font-semibold text-foreground" : "text-muted-foreground")}>
                  {ch.name}
                </span>
                <span className="ml-auto tabular-nums font-medium text-foreground/70">{pct}%</span>
              </button>
            );
          })}
          <div className="mt-3 pt-3 border-t border-border/50 px-2.5">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">Total</span>
              <span className="font-bold">${total.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Center: Pie Chart */}
        <div className="flex-1 flex items-center justify-center max-w-[550px] mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                {...{ activeIndex: activeIndex !== null ? activeIndex : undefined } as any}
                activeShape={renderActiveShape}
                data={data}
                cx="50%"
                cy="50%"
                innerRadius="38%"
                outerRadius="68%"
                paddingAngle={2}
                dataKey="value"
                strokeWidth={0}
                label={renderLabel}
                labelLine={false}
                onMouseEnter={onPieEnter}
                onMouseLeave={onPieLeave}
                onClick={onPieClick}
                style={{ cursor: "pointer" }}
              >
                {data.map((entry, i) => (
                  <Cell
                    key={i}
                    fill={entry.color}
                    opacity={selectedChannel && selectedChannel !== entry.id ? 0.3 : 1}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Detail Panel */}
        <div className="w-[580px] shrink-0 flex items-center max-h-full">
          <AnimatePresence mode="wait">
            {detail && selectedCh && currentPhase ? (
              <motion.div
                key={selectedChannel}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.25 }}
                className="glass rounded-[var(--radius-xl)] p-5 w-full max-h-[calc(100vh-14rem)] overflow-y-auto"
              >
                {/* Detail Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <ChannelIcon type={selectedCh.icon} color={selectedCh.color} size={36} />
                    <div>
                      <h4 className="text-base font-bold leading-tight">{selectedCh.name}</h4>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                  >
                    <X size={14} />
                  </button>
                </div>

                {/* Phase Tabs */}
                {phaseDetails.length > 1 ? (
                  <div className="flex gap-1.5 mb-3">
                    {phaseDetails.map((pd, i) => (
                      <button
                        key={i}
                        onClick={() => setActivePhaseIndex(i)}
                        className={cn(
                          "rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider transition-all",
                          activePhaseIndex === i
                            ? "bg-purple-600 text-white shadow-sm"
                            : "bg-purple-100 text-purple-600 hover:bg-purple-200"
                        )}
                      >
                        {pd.phase}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="mb-2">
                    <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">
                      {currentPhase.phase}
                    </span>
                  </div>
                )}

                {/* Phase content - animated on tab change */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedChannel}-${activePhaseIndex}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Detail rows */}
                    <div>
                      <DetailRow label="KPIs">
                        {currentPhase.kpis.split("\n").map((line, i) => (
                          <p key={i} className="font-medium">{line}</p>
                        ))}
                      </DetailRow>

                      <DetailRow label="Approach">
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                          {currentPhase.approach.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </DetailRow>

                      <DetailRow label="Timing">
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                          {currentPhase.timing.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </DetailRow>

                      <DetailRow label="Creative">
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                          {currentPhase.creative.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </DetailRow>

                      <DetailRow label="Placement">
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                          {currentPhase.placement.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </DetailRow>

                      <DetailRow label="Target Mix">
                        <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                          {currentPhase.targetMix.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                      </DetailRow>
                    </div>

                    {/* Estimates Table */}
                    <div className="mt-3 rounded-lg overflow-hidden border border-border/50">
                      <table className="w-full text-[11px]">
                        <thead>
                          <tr className="bg-purple-600 text-white">
                            <th className="px-2.5 py-1.5 text-left font-semibold"></th>
                            <th className="px-2.5 py-1.5 text-right font-semibold">Estimates</th>
                            <th className="px-2.5 py-1.5 text-right font-semibold">Benchmarks</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-border/50 bg-white/60">
                            <td className="px-2.5 py-1.5 font-bold">Net Budget</td>
                            <td className="px-2.5 py-1.5 text-right tabular-nums font-medium">{currentPhase.estimates.netBudget}</td>
                            <td className="px-2.5 py-1.5 text-right text-muted-foreground">—</td>
                          </tr>
                          {currentPhase.estimates.rows.map((row, i) => (
                            <tr key={i} className="border-b border-border/50 last:border-0 bg-white/40">
                              <td className="px-2.5 py-1.5 font-bold">{row.label}</td>
                              <td className="px-2.5 py-1.5 text-right tabular-nums">{row.estimate}</td>
                              <td className="px-2.5 py-1.5 text-right text-muted-foreground">{row.benchmark}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div
                key="overview"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass rounded-[var(--radius-xl)] p-5 w-full max-h-[calc(100vh-14rem)] overflow-y-auto"
              >
                <div className="mb-3">
                  <h4 className="text-base font-bold leading-tight">Deep Water — Media Mix Overview</h4>
                  <span className="text-[10px] font-semibold text-purple-600 uppercase tracking-wider">
                    Campaign Inputs Summary
                  </span>
                </div>

                <div>
                  <DetailRow label="Objective">
                    <p className="font-medium">Drive theatrical awareness, ticket sales, and sustained cultural conversation across a 4-phase campaign supporting the May 1 wide release</p>
                  </DetailRow>

                  <DetailRow label="Audience">
                    <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                      <li>Superfans (~9.1M) — High-intent moviegoers, opening weekend buyers</li>
                      <li>Thrill Seekers (~11.6M) — Action/thriller genre enthusiasts</li>
                      <li>Big Screen Chasers (~14.6M) — Spectacle-driven, premium format seekers</li>
                      <li>Adrenaline Athletes (~9.1M) — Sports fans, male-skewing competitive viewers</li>
                    </ul>
                  </DetailRow>

                  <DetailRow label="Flighting">
                    <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                      <li><strong>Phase 1</strong> (3/23 – 4/5) — Seed awareness</li>
                      <li><strong>Phase 2</strong> (4/6 – 4/19) — Amplify reach & frequency</li>
                      <li><strong>Phase 3</strong> (4/20 – 5/3) — Opening weekend blitz</li>
                      <li><strong>Phase 4</strong> (6/15 – 6/28) — PVOD support</li>
                    </ul>
                  </DetailRow>

                  <DetailRow label="Targeting">
                    <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                      <li>Fans of survival thrillers, action films, and cast</li>
                      <li>Frequent moviegoers and opening weekend buyers</li>
                      <li>Sports fans (UFC, NBA, live soccer audiences)</li>
                      <li>Entertainment seekers and pop culture enthusiasts</li>
                      <li>Retargeting across video viewers, post engagers, and site visitors</li>
                    </ul>
                  </DetailRow>

                  <DetailRow label="Markets">
                    <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                      <li>National TV & streaming footprint</li>
                      <li>OOH concentrated in NY and LA (top movie-going markets)</li>
                      <li>Digital nationwide</li>
                    </ul>
                  </DetailRow>

                  <DetailRow label="Strategy">
                    <ul className="list-disc list-outside ml-3.5 space-y-0.5">
                      <li>Linear TV + Streaming as reach backbone with ACR retargeting</li>
                      <li>Social (Meta + TikTok + Reddit) for engagement and frequency building</li>
                      <li>YouTube for cost-efficient video views</li>
                      <li>Direct Partnerships (IMDb, Fandango, Fandom) for point-of-purchase conversion and community engagement</li>
                      <li>OOH for cultural impact in key theatrical markets</li>
                      <li>CTV (LG Ads, Fandango integration to track point of purchase conversion) for homepage high-impact placements</li>
                      <li>Search for intent capture across branded and nonbranded keywords</li>
                    </ul>
                  </DetailRow>

                </div>

                <div className="mt-3 pt-3 border-t border-border/30 text-center">
                  <button className="text-sm font-medium text-muted-foreground/50 hover:text-muted-foreground transition-colors tracking-widest">
                    [...]
                  </button>
                  <p className="text-[10px] text-muted-foreground/60 mt-2">
                    Click a channel segment to view detailed KPIs, approach, and estimates
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

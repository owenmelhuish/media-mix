"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
  Legend,
} from "recharts";
import { Channel } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";
import { Plus, Upload, CalendarDays } from "lucide-react";

interface ResponseCurvesProps {
  channels: Channel[];
}

function generateCurveData(channel: Channel) {
  const points = [];
  const steps = 20;
  for (let i = 0; i <= steps; i++) {
    const spend = channel.minSpend + (channel.maxSpend - channel.minSpend) * (i / steps);
    const utilization = spend / channel.saturationPoint;
    const efficiency = utilization <= 1 ? 1 - 0.3 * utilization ** 2 : 0.7 / utilization;
    const impressions = Math.round(channel.impressions * (spend / channel.spend) * efficiency);
    points.push({ spend, impressions });
  }
  return points;
}

function generateComparisonData(channels: Channel[]) {
  const steps = 20;
  const data: Record<string, number | string>[] = [];
  for (let i = 0; i <= steps; i++) {
    const pct = Math.round((i / steps) * 100);
    const point: Record<string, number | string> = { pct: `${pct}%` };
    for (const ch of channels) {
      const spend = ch.minSpend + (ch.maxSpend - ch.minSpend) * (i / steps);
      const utilization = spend / ch.saturationPoint;
      const efficiency = utilization <= 1 ? 1 - 0.3 * utilization ** 2 : 0.7 / utilization;
      point[ch.id] = Math.round(ch.impressions * (spend / ch.spend) * efficiency);
    }
    data.push(point);
  }
  return data;
}

function formatImpressions(value: number): string {
  if (value >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(0)}M`;
  if (value >= 1_000) return `${(value / 1_000).toFixed(0)}K`;
  return `${value}`;
}

export function ResponseCurves({ channels }: ResponseCurvesProps) {
  const comparisonData = generateComparisonData(channels);

  return (
    <div className="glass rounded-[var(--radius-xl)] p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Channel Response Curves</h3>
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

      {/* Individual channel charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {channels.map((channel) => {
          const data = generateCurveData(channel);
          return (
            <div key={channel.id} className="rounded-[var(--radius-lg)] bg-white/60 p-3">
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="h-2.5 w-2.5 rounded-full"
                  style={{ background: channel.color }}
                />
                <span className="text-xs font-medium">{channel.name}</span>
              </div>
              <ResponsiveContainer width="100%" height={120}>
                <AreaChart data={data} margin={{ top: 5, right: 5, bottom: 0, left: 0 }}>
                  <defs>
                    <linearGradient id={`grad-${channel.id}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={channel.color} stopOpacity={0.3} />
                      <stop offset="100%" stopColor={channel.color} stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
                  <XAxis
                    dataKey="spend"
                    tickFormatter={(v) => formatCurrency(v)}
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    width={35}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "rgba(255,255,255,0.95)",
                      border: "1px solid #e5e7eb",
                      borderRadius: 8,
                      fontSize: 11,
                    }}
                    formatter={(value) => [(value as number).toLocaleString(), "Impressions"]}
                    labelFormatter={(v) => formatCurrency(v as number)}
                  />
                  <ReferenceLine
                    x={channel.spend}
                    stroke={channel.color}
                    strokeDasharray="4 4"
                    strokeWidth={1.5}
                  />
                  <Area
                    type="monotone"
                    dataKey="impressions"
                    stroke={channel.color}
                    strokeWidth={2}
                    fill={`url(#grad-${channel.id})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          );
        })}
      </div>

      {/* Combined comparison chart */}
      <div className="rounded-[var(--radius-lg)] bg-white/60 p-4">
        <h4 className="text-sm font-semibold mb-3">All Channels Comparison</h4>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={comparisonData} margin={{ top: 5, right: 20, bottom: 5, left: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f5" />
            <XAxis
              dataKey="pct"
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              label={{ value: "Budget Utilization", position: "insideBottom", offset: -2, fontSize: 10, fill: "#9ca3af" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              width={55}
              tickFormatter={(v) => formatImpressions(v as number)}
            />
            <Tooltip
              contentStyle={{
                background: "rgba(255,255,255,0.95)",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                fontSize: 11,
              }}
              formatter={(value: number, name: string) => {
                const ch = channels.find((c) => c.id === name);
                return [formatImpressions(value), ch?.name ?? name];
              }}
              labelFormatter={(v) => `Budget: ${v}`}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11 }}
              formatter={(value: string) => {
                const ch = channels.find((c) => c.id === value);
                return ch?.name ?? value;
              }}
            />
            {channels.map((channel) => (
              <Line
                key={channel.id}
                type="monotone"
                dataKey={channel.id}
                stroke={channel.color}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, strokeWidth: 0 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

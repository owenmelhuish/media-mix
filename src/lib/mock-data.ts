import { Channel, Insight, GaugeData } from "./types";

export const defaultChannels: Channel[] = [
  {
    id: "linear-tv",
    name: "Linear TV",
    icon: "linear-tv",
    color: "#1E3A5F",
    spend: 2805000,       // 30% of $9.35M
    minSpend: 500000,
    maxSpend: 5000000,
    cpa: 78,
    roas: 2.2,
    impressions: 315660000,
    saturationPoint: 4000000,
  },
  {
    id: "streaming",
    name: "Streaming",
    icon: "streaming",
    color: "#7C3AED",
    spend: 1402500,       // 15%
    minSpend: 200000,
    maxSpend: 3000000,
    cpa: 52,
    roas: 3.1,
    impressions: 64797380,
    saturationPoint: 2200000,
  },
  {
    id: "ooh",
    name: "OOH",
    icon: "ooh",
    color: "#D97706",
    spend: 935000,        // 10%
    minSpend: 100000,
    maxSpend: 2000000,
    cpa: 68,
    roas: 1.9,
    impressions: 187000000,
    saturationPoint: 1500000,
  },
  {
    id: "social",
    name: "Social",
    icon: "social",
    color: "#1877F2",
    spend: 1870000,       // 20%
    minSpend: 300000,
    maxSpend: 4000000,
    cpa: 35,
    roas: 4.2,
    impressions: 225832138,
    saturationPoint: 2800000,
  },
  {
    id: "direct",
    name: "Direct Partnerships",
    icon: "direct",
    color: "#10B981",
    spend: 467500,        // 5%
    minSpend: 50000,
    maxSpend: 1500000,
    cpa: 18,
    roas: 6.5,
    impressions: 42988889,
    saturationPoint: 900000,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: "youtube",
    color: "#FF0000",
    spend: 935000,        // 10%
    minSpend: 100000,
    maxSpend: 2500000,
    cpa: 44,
    roas: 3.5,
    impressions: 77079021,
    saturationPoint: 1800000,
  },
  {
    id: "ctv",
    name: "CTV",
    icon: "ctv",
    color: "#0EA5E9",
    spend: 748000,        // 8%
    minSpend: 100000,
    maxSpend: 2000000,
    cpa: 58,
    roas: 2.8,
    impressions: 4975430,
    saturationPoint: 1400000,
  },
  {
    id: "search",
    name: "Search",
    icon: "search",
    color: "#EA4335",
    spend: 187000,        // 2%
    minSpend: 50000,
    maxSpend: 1000000,
    cpa: 32,
    roas: 5.1,
    impressions: 1745611,
    saturationPoint: 600000,
  },
];

export const insightsData: Insight[] = [
  {
    id: "1",
    title: "Audience Crossover Report",
    status: "Active",
    generatedDate: "2026-02-28 01:12",
    expiryDate: "2026-04-01 01:11",
    assignedPlanner: "Sam Frank",
    starred: false,
  },
  {
    id: "2",
    title: "CTV Bid Strategy Optimization",
    status: "Reviewing",
    generatedDate: "2026-03-01 10:41",
    expiryDate: "2026-04-01 01:11",
    assignedPlanner: "Nikid Plan",
    starred: true,
  },
  {
    id: "3",
    title: "Meta Lookalike Expansion",
    status: "Active",
    generatedDate: "2026-03-02 08:22",
    expiryDate: "2026-04-15 01:11",
    assignedPlanner: "Alex Chen",
    starred: false,
  },
  {
    id: "4",
    title: "Cross-Channel Attribution Gap",
    status: "Reviewing",
    generatedDate: "2026-03-03 14:05",
    expiryDate: "2026-04-10 01:11",
    assignedPlanner: "Jordan Lee",
    starred: true,
  },
];

export const gaugesData: GaugeData[] = [
  {
    label: "Target Audience Reach",
    value: 72,
    max: 100,
    icon: "users",
    color: "#3b82f6",
    unit: "%",
  },
  {
    label: "Budget Burn Rate",
    value: 64,
    max: 100,
    icon: "dollar",
    color: "#ef4444",
    unit: "%",
  },
  {
    label: "Channel Efficiency",
    value: 81,
    max: 100,
    icon: "zap",
    color: "#10b981",
    unit: "%",
  },
  {
    label: "Model Confidence",
    value: 89,
    max: 100,
    icon: "shield",
    color: "#7c3aed",
    unit: "%",
  },
];

// Simple diminishing returns model
export function predictMetrics(channels: Channel[]) {
  let totalImpressions = 0;
  let totalSpend = 0;
  let weightedRoas = 0;

  for (const ch of channels) {
    totalImpressions += ch.impressions;
    totalSpend += ch.spend;
    const utilization = ch.spend / ch.saturationPoint;
    const efficiency = utilization <= 1 ? 1 - 0.3 * utilization ** 2 : 0.7 / utilization;
    weightedRoas += ch.roas * efficiency * ch.spend;
  }

  const projectedRoas = totalSpend > 0 ? weightedRoas / totalSpend : 0;
  const estimatedCpm = totalImpressions > 0 ? (totalSpend / totalImpressions) * 1000 : 0;

  return {
    totalImpressions,
    projectedRoas: Math.round(projectedRoas * 10) / 10,
    estimatedCpm: Math.round(estimatedCpm * 100) / 100,
    totalSpend,
  };
}

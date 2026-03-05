export interface Channel {
  id: string;
  name: string;
  icon: string;
  color: string;
  spend: number;
  minSpend: number;
  maxSpend: number;
  cpa: number;
  roas: number;
  impressions: number;
  saturationPoint: number;
}

export interface Scenario {
  id: string;
  name: string;
  totalBudget: number;
  channels: Channel[];
  projectedRoas: number;
  estimatedCpa: number;
  totalImpressions: number;
  confidenceScore: number;
}

export interface Insight {
  id: string;
  title: string;
  status: "Active" | "Reviewing" | "Archived";
  generatedDate: string;
  expiryDate: string;
  assignedPlanner: string;
  starred: boolean;
}

export interface GaugeData {
  label: string;
  value: number;
  max: number;
  icon: string;
  color: string;
  unit: string;
}

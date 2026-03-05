"use client";

import {
  Share2,
  Upload,
  Star,
  Plus,
  FileText,
  Send,
  AlertTriangle,
  Phone,
  Settings,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Share2, label: "Share" },
  { icon: Upload, label: "Export" },
  { icon: Star, label: "Favorite" },
  { icon: Plus, label: "Add" },
  { icon: FileText, label: "Documents" },
  { icon: Send, label: "Send" },
  { icon: AlertTriangle, label: "Alerts" },
];

const bottomItems = [
  { icon: Phone, label: "Support" },
  { icon: Settings, label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="glass fixed left-4 top-24 z-40 flex w-12 flex-col items-center gap-1 rounded-[var(--radius-xl)] py-3">
      {sidebarItems.map((item, i) => (
        <button
          key={item.label}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
          )}
        >
          <item.icon size={18} />
        </button>
      ))}
      <div className="my-2 h-px w-6 bg-border" />
      {bottomItems.map((item) => (
        <button
          key={item.label}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
        >
          <item.icon size={18} />
        </button>
      ))}
    </aside>
  );
}

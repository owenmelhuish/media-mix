"use client";

import { Search, Bell, Upload, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "./theme-provider";

const navItems = [
  { label: "HUB", active: false },
  { label: "Media Mix", active: true },
  { label: "Audience", active: false },
  { label: "Assets", active: false },
  { label: "Reports", active: false },
  { label: "Scenarios", active: false },
];

export function TopNav() {
  const { theme, toggle } = useTheme();
  return (
    <header className="glass sticky top-0 z-50 flex h-16 items-center justify-between px-6 rounded-b-[var(--radius-lg)]">
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <img
            src="/stratis-logo.svg"
            alt="STRATIS"
            className="h-5 dark:invert"
          />
        </div>
        <nav className="flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              className={cn(
                "rounded-full px-4 py-1.5 text-sm font-medium transition-all",
                item.active
                  ? "bg-foreground text-white shadow-md"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <button className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Search size={18} />
        </button>
        <button className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Bell size={18} />
        </button>
        <button className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <Upload size={18} />
        </button>
        <button
          onClick={toggle}
          className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
          title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <div className="ml-2 h-9 w-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 ring-2 ring-white" />
      </div>
    </header>
  );
}

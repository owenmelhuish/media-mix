"use client";

import * as Slider from "@radix-ui/react-slider";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, CheckCircle, Circle } from "lucide-react";
import { Channel } from "@/lib/types";
import { cn } from "@/lib/utils";
import { ChannelIcon } from "./channel-icon";

interface ChannelSliderProps {
  channel: Channel;
  onChange: (id: string, spend: number) => void;
  index: number;
}

const statusIcons = [
  { Icon: CheckCircle2, color: "text-blue-500" },
  { Icon: CheckCircle, color: "text-emerald-500" },
  { Icon: Circle, color: "text-gray-400" },
  { Icon: CheckCircle, color: "text-emerald-500" },
  { Icon: CheckCircle2, color: "text-rose-400" },
  { Icon: CheckCircle, color: "text-blue-500" },
  { Icon: CheckCircle2, color: "text-emerald-500" },
  { Icon: Circle, color: "text-gray-400" },
];

export function ChannelSlider({ channel, onChange, index }: ChannelSliderProps) {
  const utilization = channel.spend / channel.saturationPoint;
  const isOverSaturated = utilization > 1;
  const StatusIcon = statusIcons[index % statusIcons.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.3 }}
      className="flex items-center gap-3"
    >
      {/* Channel Icon */}
      <ChannelIcon type={channel.icon} color={channel.color} size={44} />

      {/* Name + Slider */}
      <div className="flex-1 min-w-0">
        <span className="text-sm font-semibold leading-tight">{channel.name}</span>
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-[11px] text-muted-foreground shrink-0">Spend</span>
          <Slider.Root
            className="relative flex h-5 w-full touch-none select-none items-center"
            value={[channel.spend]}
            min={channel.minSpend}
            max={channel.maxSpend}
            step={5000}
            onValueChange={([val]) => onChange(channel.id, val)}
          >
            <Slider.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-gray-200">
              <Slider.Range
                className="absolute h-full rounded-full transition-colors"
                style={{
                  background: isOverSaturated
                    ? `linear-gradient(90deg, ${channel.color}, #ef4444)`
                    : channel.color,
                }}
              />
            </Slider.Track>
            <Slider.Thumb
              className="block h-3.5 w-3.5 rounded-full border-2 border-white bg-foreground shadow-md focus:outline-none cursor-grab active:cursor-grabbing"
              aria-label={`${channel.name} spend`}
            />
          </Slider.Root>
        </div>
      </div>

      {/* Calendar icon */}
      <button className="shrink-0 rounded-lg p-1.5 text-muted-foreground/60 hover:text-muted-foreground hover:bg-white/60 transition-colors">
        <CalendarDays size={16} />
      </button>

      {/* Dashed connector */}
      <div className="shrink-0 flex items-center gap-0.5">
        <div className="w-4 border-t border-dashed border-gray-300" />
        <div className="w-1 h-1 rounded-full bg-gray-300" />
        <div className="w-1.5 border-t border-dashed border-gray-300" />
      </div>

      {/* Status icon */}
      <div className={cn("shrink-0", StatusIcon.color)}>
        <StatusIcon.Icon size={18} />
      </div>
    </motion.div>
  );
}

"use client";

interface ChannelIconProps {
  type: string;
  color: string;
  size?: number;
}

function IconLabel({ color, label, size }: { color: string; label: string; size: number }) {
  return (
    <div
      className="rounded-full flex items-center justify-center"
      style={{
        width: size * 0.55,
        height: size * 0.55,
        background: `linear-gradient(135deg, ${color}, ${color}cc)`,
      }}
    >
      <span className="text-white font-bold" style={{ fontSize: size * 0.22 }}>
        {label}
      </span>
    </div>
  );
}

export function ChannelIcon({ type, color, size = 44 }: ChannelIconProps) {
  return (
    <div
      className="flex items-center justify-center rounded-full shrink-0 shadow-sm"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${color}20, ${color}10)`,
        border: `1.5px solid ${color}30`,
      }}
    >
      {type === "linear-tv" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
          <line x1="7" y1="7" x2="7" y2="13"/>
          <line x1="10" y1="9" x2="10" y2="13"/>
          <line x1="13" y1="8" x2="13" y2="13"/>
          <line x1="16" y1="6" x2="16" y2="13"/>
        </svg>
      )}
      {type === "streaming" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5.636 18.364a9 9 0 010-12.728"/>
          <path d="M18.364 5.636a9 9 0 010 12.728"/>
          <path d="M8.464 15.536a5 5 0 010-7.072"/>
          <path d="M15.536 8.464a5 5 0 010 7.072"/>
          <circle cx="12" cy="12" r="1"/>
        </svg>
      )}
      {type === "ooh" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="12" rx="1"/>
          <line x1="8" y1="15" x2="8" y2="21"/>
          <line x1="16" y1="15" x2="16" y2="21"/>
          <line x1="5" y1="21" x2="19" y2="21"/>
        </svg>
      )}
      {type === "social" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="18" cy="5" r="3"/>
          <circle cx="6" cy="12" r="3"/>
          <circle cx="18" cy="19" r="3"/>
          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
          <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
        </svg>
      )}
      {type === "direct" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      )}
      {type === "youtube" && (
        <svg width={size * 0.5} height={size * 0.5} viewBox="0 0 24 24" fill={color}>
          <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.56A3.02 3.02 0 00.5 6.2 31.7 31.7 0 000 12a31.7 31.7 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.88.56 9.38.56 9.38.56s7.5 0 9.38-.56a3.02 3.02 0 002.12-2.14A31.7 31.7 0 0024 12a31.7 31.7 0 00-.5-5.8zM9.75 15.5V8.5l6.25 3.5-6.25 3.5z"/>
        </svg>
      )}
      {type === "ctv" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )}
      {type === "search" && (
        <svg width={size * 0.45} height={size * 0.45} viewBox="0 0 24 24" fill="none">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
      )}
    </div>
  );
}

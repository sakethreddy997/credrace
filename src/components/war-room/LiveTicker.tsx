"use client";

export function LiveTicker() {
  const text =
    "247 races run today · Avg saving ₹2.8L · 14 users racing right now";

  return (
    <div className="overflow-hidden flex-1 min-w-0 max-w-xl">
      <div className="flex animate-war-room-marquee whitespace-nowrap text-sm text-white/90">
        <span className="inline-block pr-8">{text}</span>
        <span className="inline-block pr-8">{text}</span>
      </div>
    </div>
  );
}

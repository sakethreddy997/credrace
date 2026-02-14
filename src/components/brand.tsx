/**
 * Credrace Brand Components
 *
 * Use <BrandMark /> for the icon + wordmark (navbar/footer)
 * Use <BrandText /> for inline brand name in content (headings, copy)
 */

import Link from "next/link";

/* ─── The icon/logomark ─── */
export function BrandIcon({ size = "default" }: { size?: "default" | "sm" }) {
  const s = size === "sm" ? "h-8 w-8 text-sm" : "h-9 w-9 text-sm";
  return (
    <div
      className={`${s} relative flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-black overflow-hidden`}
    >
      {/* Subtle shine effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
      <span className="relative">C</span>
    </div>
  );
}

/* ─── Full brand mark: icon + wordmark (for navbar/footer) ─── */
export function BrandMark({
  variant = "dark",
}: {
  variant?: "dark" | "light" | "auto";
}) {
  // "dark" = white text (for dark bg), "light" = dark text (for light bg)
  // "auto" is handled by the parent via conditional classes

  const credColor =
    variant === "light" ? "text-gray-900" : "text-white";

  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <BrandIcon />
      <span className="text-[17px] font-bold tracking-tight flex items-baseline">
        <span className={credColor}>Cred</span>
        <span className="text-emerald-500 group-hover:text-emerald-400 transition-colors duration-300">
          race
        </span>
      </span>
    </Link>
  );
}

/* ─── Inline brand text for use in headings and copy ─── */
/* Use this wherever "Credrace" appears in content to give it brand treatment */
export function BrandText({
  variant = "light",
}: {
  variant?: "dark" | "light";
}) {
  // "light" = for light backgrounds (dark text), "dark" = for dark backgrounds (white text)
  const credColor =
    variant === "light" ? "text-gray-900" : "text-white";

  return (
    <span className="inline-flex items-baseline font-extrabold">
      <span className={credColor}>Cred</span>
      <span className="text-emerald-500">race</span>
    </span>
  );
}

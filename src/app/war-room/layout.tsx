import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "EMI War Room — Compare 30+ Banks in Real Time | Credrace",
  description:
    "Watch 30+ banks compete for your loan. Enter your details and see the best rates in a live leaderboard. India's most dramatic loan comparison.",
  alternates: { canonical: `${SITE_URL}/war-room` },
  openGraph: {
    title: "EMI War Room | Credrace",
    description: "Watch 30+ banks compete for your loan. Live leaderboard.",
  },
};

export default function WarRoomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

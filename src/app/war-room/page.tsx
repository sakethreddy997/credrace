"use client";

import { useState } from "react";
import type { WarRoomInputs } from "@/lib/warRoomData";
import { WarRoomInput } from "@/components/war-room/WarRoomInput";
import { CountdownOverlay } from "@/components/war-room/CountdownOverlay";
import { WarRoomDashboard } from "@/components/war-room/WarRoomDashboard";

type FlowStep = "input" | "countdown" | "dashboard";

export default function WarRoomPage() {
  const [step, setStep] = useState<FlowStep>("input");
  const [inputs, setInputs] = useState<WarRoomInputs | null>(null);

  const handleStart = (nextInputs: WarRoomInputs) => {
    setInputs(nextInputs);
    setStep("countdown");
  };

  const handleCountdownComplete = () => {
    setStep("dashboard");
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      {step === "input" && <WarRoomInput onStart={handleStart} />}
      {step === "countdown" && (
        <CountdownOverlay onComplete={handleCountdownComplete} />
      )}
      {step === "dashboard" && inputs && (
        <WarRoomDashboard inputs={inputs} />
      )}
    </div>
  );
}

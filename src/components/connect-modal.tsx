"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  PhoneCall,
  Mail,
  Check,
  ArrowRight,
  Shield,
  Lock,
  Zap,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LOAN_OPTIONS = [
  { value: "home", label: "Home Loan", icon: "🏠" },
  { value: "personal", label: "Personal Loan", icon: "💼" },
  { value: "two-wheeler", label: "Two-Wheeler", icon: "🏍️" },
  { value: "business", label: "Business Loan", icon: "🏢" },
] as const;

export function ConnectModal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    loanType: "",
    phone: "",
    email: "",
  });

  const isValid =
    form.loanType.length > 0 &&
    form.phone.length === 10 &&
    form.email.includes("@") &&
    form.email.includes(".");

  const handleSubmit = async () => {
    if (!isValid || loading) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/connect", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          loanType: form.loanType,
          phone: form.phone,
          email: form.email.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      // Success!
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOpenChange = (val: boolean) => {
    setOpen(val);
    if (!val) {
      // Reset after close
      setTimeout(() => {
        setSubmitted(false);
        setForm({ loanType: "", phone: "", email: "" });
      }, 300);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-lg border-0 bg-transparent p-0 gap-0 overflow-visible [&>button]:text-white/60 [&>button]:hover:text-white/90 [&>button]:bg-white/[0.08] [&>button]:hover:bg-white/[0.12]">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          {/* ─── Premium backdrop with glow ─── */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-500/[0.08] via-blue-500/[0.05] to-transparent blur-2xl pointer-events-none" />
          <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-transparent pointer-events-none" />

          {/* ─── Main card ─── */}
          <div className="relative rounded-3xl border border-white/[0.1] bg-[#0a1425]/95 backdrop-blur-2xl overflow-hidden shadow-[0_20px_80px_rgba(0,0,0,0.5)]">
            {submitted ? (
              /* ─── Success state ─── */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-10 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                  className="mx-auto h-16 w-16 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center mb-6 border border-emerald-500/20"
                >
                  <Check className="h-8 w-8 text-emerald-400" />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl font-extrabold text-white mb-3"
                >
                  We&apos;ll connect with you shortly
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-sm text-white/50 leading-relaxed mb-8 max-w-sm mx-auto"
                >
                  A dedicated loan manager will reach out within 2 hours to understand
                  your requirements and guide you through the process.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center justify-center gap-6 text-[11px] text-white/40"
                >
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-3.5 w-3.5 text-emerald-400/60" /> No CIBIL impact
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3.5 w-3.5 text-emerald-400/60" /> 100% free
                  </span>
                </motion.div>
              </motion.div>
            ) : (
              /* ─── Form state ─── */
              <>
                {/* ─── Header with gradient accent ─── */}
                <div className="relative px-7 pt-7 pb-5 border-b border-white/[0.08] bg-gradient-to-r from-emerald-500/[0.05] via-transparent to-transparent">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/10 flex items-center justify-center border border-emerald-500/20">
                      <PhoneCall className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-lg font-extrabold text-white">
                        Get connected with us
                      </p>
                      <p className="text-[10px] text-emerald-400/70 font-medium mt-0.5">
                        Quick & secure
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">
                    Share your details and a dedicated loan manager will call you
                    within 2 hours. No automated calls, no spam.
                  </p>
                </div>

                {/* ─── Form ─── */}
                <div className="p-7 space-y-5">
                  {/* ─── Loan type selection ─── */}
                  <div>
                    <label className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-3 block">
                      What loan are you looking for?
                    </label>
                    <div className="grid grid-cols-2 gap-2.5">
                      {LOAN_OPTIONS.map((opt) => (
                        <motion.button
                          key={opt.value}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setForm({ ...form, loanType: opt.value })
                          }
                          className={cn(
                            "h-12 rounded-xl text-xs font-semibold border transition-all relative overflow-hidden group",
                            form.loanType === opt.value
                              ? "bg-gradient-to-br from-emerald-500/15 to-emerald-600/5 border-emerald-500/40 text-emerald-300 shadow-lg shadow-emerald-500/10"
                              : "bg-white/[0.04] border-white/[0.12] text-white/70 hover:bg-white/[0.08] hover:border-white/[0.18] hover:text-white"
                          )}
                        >
                          {form.loanType === opt.value && (
                            <motion.div
                              layoutId="selectedLoan"
                              className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent"
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                          <span className="relative z-10 flex items-center justify-center gap-1.5">
                            <span className="text-base">{opt.icon}</span>
                            <span>{opt.label}</span>
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* ─── Phone input ─── */}
                  <div>
                    <label className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2.5 block">
                      Mobile number
                    </label>
                    <div className="relative group">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-bold text-white/50 group-focus-within:text-emerald-400 transition-colors">
                        +91
                      </span>
                      <input
                        type="tel"
                        inputMode="numeric"
                        placeholder="Enter your mobile number"
                        value={form.phone}
                        onChange={(e) => {
                          const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                          setForm({ ...form, phone: val });
                        }}
                        className="w-full h-12 pl-14 pr-4 rounded-xl border border-white/[0.12] bg-white/[0.04] text-white text-sm font-medium placeholder:text-white/30 focus:border-emerald-500/50 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* ─── Email input ─── */}
                  <div>
                    <label className="text-[11px] font-bold text-white/60 uppercase tracking-wider mb-2.5 block">
                      Email address
                    </label>
                    <div className="relative group">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40 group-focus-within:text-emerald-400 transition-colors" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={form.email}
                        onChange={(e) =>
                          setForm({ ...form, email: e.target.value })
                        }
                        className="w-full h-12 pl-11 pr-4 rounded-xl border border-white/[0.12] bg-white/[0.04] text-white text-sm font-medium placeholder:text-white/30 focus:border-emerald-500/50 focus:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* ─── Error message ─── */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="rounded-xl bg-red-500/10 border border-red-500/30 p-3"
                    >
                      <p className="text-xs text-red-400 font-medium">{error}</p>
                    </motion.div>
                  )}

                  {/* ─── Submit button ─── */}
                  <motion.button
                    whileHover={isValid && !loading ? { scale: 1.02 } : {}}
                    whileTap={isValid && !loading ? { scale: 0.98 } : {}}
                    onClick={handleSubmit}
                    disabled={!isValid || loading}
                    className={cn(
                      "w-full h-[3.25rem] rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 relative overflow-hidden group",
                      isValid && !loading
                        ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white shadow-lg shadow-emerald-500/30"
                        : "bg-white/[0.06] text-white/30 cursor-not-allowed border border-white/[0.08]"
                    )}
                  >
                    {isValid && !loading && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      {loading ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
                          />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Get connected
                          <ArrowRight className="h-4 w-4" />
                        </>
                      )}
                    </span>
                  </motion.button>

                  {/* ─── Trust strip ─── */}
                  <div className="flex items-center justify-center gap-5 pt-2 text-[10px] text-white/35">
                    <span className="flex items-center gap-1.5">
                      <Lock className="h-3 w-3 text-emerald-400/50" /> Encrypted
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Shield className="h-3 w-3 text-emerald-400/50" /> No CIBIL impact
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Zap className="h-3 w-3 text-emerald-400/50" /> 100% free
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

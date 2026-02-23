"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Home, KeyRound, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function ProblemHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    const handleLeave = () => {
      const rect = section.getBoundingClientRect();
      mouseX.set(rect.width / 2);
      mouseY.set(rect.height / 2);
    };

    const rect = section.getBoundingClientRect();
    mouseX.set(rect.width / 2);
    mouseY.set(rect.height / 2);

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, [mouseX, mouseY]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const floatY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);
  const spotlightDriftX = useTransform(scrollYProgress, [0, 0.5], [0, 20]);
  const spotlightDriftY = useTransform(scrollYProgress, [0, 0.5], [0, -15]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, #020617 0%, #0a1628 30%, #0c1a30 60%, #071018 100%)",
      }}
    >
      {/* Cursor-follow glow (static center when reduced motion) */}
      <motion.div
        className="absolute z-0 pointer-events-none w-[500px] h-[500px] rounded-full bg-emerald-500/[0.08] blur-[120px]"
        style={{
          left: reducedMotion ? "50%" : springX,
          top: reducedMotion ? "50%" : springY,
          x: reducedMotion ? "-50%" : "-50%",
          y: reducedMotion ? "-50%" : "-50%",
        }}
      />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: bgY }}
      >
        <div className="absolute top-[10%] left-[15%] w-[600px] h-[600px] rounded-full bg-emerald-500/[0.07] blur-[150px] animate-mesh" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-blue-500/[0.05] blur-[130px] animate-mesh-reverse" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-emerald-500/[0.03] blur-[200px]" />
      </motion.div>

      {/* Animated spotlight (emerald ellipse) */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[140%] h-[80vh] pointer-events-none z-[1]"
        style={
          reducedMotion ? {} : { x: spotlightDriftX, y: spotlightDriftY }
        }
      >
        <Spotlight fill="rgba(16, 185, 129, 0.12)" className="h-full w-full -top-1/2 left-0" />
      </motion.div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(16,185,129,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Floating ambient elements (right side) */}
      {[
        { Icon: Home, top: "20%", right: "12%", anim: "animate-float", delay: 0 },
        { Icon: KeyRound, top: "45%", right: "8%", anim: "animate-float-slow", delay: 0.5 },
        { Icon: FileCheck, top: "70%", right: "15%", anim: "animate-float", delay: 1 },
      ].map(({ Icon, top, right, anim, delay }, i) => (
        <motion.div
          key={i}
          className={`absolute hidden lg:block pointer-events-none z-0 text-white/[0.04] ${anim}`}
          style={{
            top,
            right,
            filter: "blur(2px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 + delay }}
        >
          <motion.div style={{ y: reducedMotion ? 0 : floatY }}>
            <Icon className="h-32 w-32 sm:h-40 sm:w-40" strokeWidth={0.5} />
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-7xl w-full px-5 sm:px-6 lg:px-8 py-24 sm:py-32"
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold text-emerald-400 uppercase tracking-wider mb-6"
          >
            Why we exist
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] font-extrabold leading-[1.08] tracking-[-0.035em] text-white"
          >
            Your focus should be the{" "}
            <motion.span
              className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent inline-block"
              animate={
                reducedMotion
                  ? {}
                  : {
                      opacity: [0.9, 1, 0.9],
                      transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                    }
              }
              style={
                reducedMotion
                  ? {}
                  : {
                      textShadow: "0 0 40px rgba(16, 185, 129, 0.15)",
                    }
              }
            >
              home.
            </motion.span>
            <br />
            <span className="text-white/80">Not the loan.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl"
          >
            Branches, documents, follow-ups — that part shouldn't be your job.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9">
            <Button
              asChild
              size="lg"
              className="relative bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-[15px] px-8 h-14 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-300 group overflow-hidden"
            >
              <Link href="/eligibility">
                <span className="relative z-10 flex items-center gap-2">
                  Check your eligibility
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
              </Link>
            </Button>
            <p className="mt-3 text-sm text-white/40">
              No CIBIL impact. 2 minutes.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#020617] to-transparent pointer-events-none" />
    </section>
  );
}

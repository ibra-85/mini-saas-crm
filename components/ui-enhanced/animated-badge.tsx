"use client";

import { ChevronRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { CSSProperties } from "react";

export function AnimatedBadge() {
  return (
    <Link href="/blog" className="inline-block">
      <motion.div
        className="relative inline-flex overflow-hidden rounded-full p-px"
        style={
          {
            "--x": "50%",
            "--y": "0%",
          } as CSSProperties
        }
        animate={{
          "--x": ["50%", "100%", "50%", "0%", "50%"],
          "--y": ["0%", "50%", "100%", "50%", "0%"],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      >
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              "radial-gradient(46% 90% at var(--x) var(--y), rgba(52,211,153,0.8) 0%, rgba(148,163,184,0.2) 40%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Pill avec bordure animé */}
        <div className="
          relative z-10 flex items-center gap-3 rounded-full border 
          border-zinc-200 bg-white/95 
          px-2.5 py-1 shadow-sm 
          dark:border-zinc-700 dark:bg-zinc-950/90
          transition-colors
        ">
          <span
            className="
              inline-flex items-center rounded-full border px-1.5 py-0.5 text-[11px] font-semibold
              border-emerald-300 bg-emerald-500/10 text-emerald-700
              dark:border-emerald-400/40 dark:bg-emerald-500/20 dark:text-emerald-300
            "
          >
            Nouveau
          </span>

          <span className="flex items-center font-medium tracking-tight">
            <span className="text-zinc-900 dark:text-zinc-50">
              Facturation et devis
            </span>
            <ChevronRight className="ml-1 h-4 w-4 text-zinc-500 dark:text-zinc-400" />
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

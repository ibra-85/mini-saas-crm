"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBadge } from "@/components/ui-enhanced/animated-badge"
import { appConfig } from "@/lib/config"
import type { CSSProperties } from "react"

const fadeInUp = {
  hidden: { 
    opacity: 0, 
    y: 20,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)"
  },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

export function Hero() {
  return (
    <section className="relative w-full pt-42 pb-24 md:pt-52 md:pb-32">
      {/* glow soft & glitter */}
      <div className="z-2 absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-140 -right-20 -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.12)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.08)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(75,75,75,0.18),transparent_70%)]" />

      {/* Text block centered */}
      <motion.div 
        className="mx-auto max-w-[1000px] px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <AnimatedBadge />
        </motion.div>

        <motion.h1 
          className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl leading-[1.1]"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Gérez vos devis et factures
          <br />
          <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
            sans prise de tête.
          </span>
        </motion.h1>

        <motion.p 
          className="mt-6 mx-auto max-w-[720px] text-lg text-muted-foreground"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {appConfig.name} centralise vos clients, simplifie la création de devis,
          automatise les factures et vous aide à encaisser plus vite —
          sans outil usine à gaz.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20" asChild>
            <Link href="/register">Commencer gratuitement</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#pricing">Voir les tarifs</Link>
          </Button>
        </motion.div>

        <motion.p 
          className="mt-6 text-sm text-muted-foreground"
          variants={fadeInUp}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Aucune carte bancaire requise • Testez gratuitement
        </motion.p>
      </motion.div>

      {/* Dashboard Mockup */}
      <motion.div 
        className="relative mx-auto mt-20 max-w-[1400px] px-4"
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Glow effect behind the card */}
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl opacity-50 blur-3xl bg-gradient-to-br from-primary/30 via-primary/15 to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(ellipse_at_center,oklch(var(--primary)/0.12)_0%,transparent_70%)]" />
        
        {/* Card with animated border */}
        <motion.div
          className="relative rounded-3xl overflow-hidden p-px"
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
            duration: 8,
            ease: "linear",
          }}
        >
          {/* Animated border gradient */}
          <div
            className="absolute inset-0 rounded-3xl -z-0"
            style={{
              background:
                "radial-gradient(60% 80% at var(--x) var(--y), color-mix(in oklch, var(--primary) 60%, transparent) 0%, rgba(148,163,184,0.1) 50%, rgba(0,0,0,0) 100%)",
            }}
          />
          
          {/* Card content */}
          <div className="relative z-10 rounded-3xl bg-background dark:bg-background p-6 md:p-8 shadow-2xl backdrop-blur-xl">

          {/* Header with stats */}
          <div className="mb-8 pb-6 border-b border-border/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-1">Vue d'ensemble</h3>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl md:text-5xl font-bold">12 450 €</p>
                  <span className="text-sm text-muted-foreground">ce mois</span>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="rounded-lg bg-primary/10 px-4 py-2 border border-primary/20">
                  <p className="text-xs text-muted-foreground mb-1">Croissance</p>
                  <p className="text-lg font-semibold text-primary">+42%</p>
                </div>
                <div className="rounded-lg bg-muted/50 px-4 py-2 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Clients</p>
                  <p className="text-lg font-semibold">24</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent activity cards */}
          <div className="grid gap-4 md:grid-cols-3 mb-6">
            <div className="group relative rounded-xl border border-border/50 bg-background/60 p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="rounded-lg bg-amber-500/10 p-2 border border-amber-500/20">
                  <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 border border-amber-500/20">
                  En attente
                </span>
              </div>
              <p className="font-semibold mb-1">Devis #2024-089</p>
              <p className="text-sm text-muted-foreground mb-3">Site vitrine · Studio Nova</p>
              <p className="text-lg font-bold">2 800 €</p>
            </div>

            <div className="group relative rounded-xl border border-border/50 bg-background/60 p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="rounded-lg bg-primary/10 p-2 border border-primary/20">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary border border-primary/20">
                  Payé
                </span>
              </div>
              <p className="font-semibold mb-1">Facture #2024-156</p>
              <p className="text-sm text-muted-foreground mb-3">Branding · Agence Design</p>
              <p className="text-lg font-bold">4 200 €</p>
            </div>

            <div className="group relative rounded-xl border border-border/50 bg-background/60 p-5 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start justify-between mb-3">
                <div className="rounded-lg bg-red-500/10 p-2 border border-red-500/20">
                  <svg className="w-4 h-4 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="rounded-full bg-red-500/10 px-2.5 py-1 text-xs font-medium text-red-600 border border-red-500/20">
                  En retard
                </span>
              </div>
              <p className="font-semibold mb-1">Facture #2024-142</p>
              <p className="text-sm text-muted-foreground mb-3">Maintenance · TechCorp</p>
              <p className="text-lg font-bold">1 200 €</p>
            </div>
          </div>

          {/* Footer with status */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border/50">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span>Tout est synchronisé</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 border border-border">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span className="text-xs font-medium">Stripe connecté</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 border border-border">
                <svg className="w-3.5 h-3.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">Relances auto</span>
              </div>
            </div>
          </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

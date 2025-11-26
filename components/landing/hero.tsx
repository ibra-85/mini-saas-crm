"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBadge } from "@/components/ui-enhanced/animated-badge"

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
      staggerChildren: 0.15,
      delayChildren: 0.1,
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
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(75,75,75,0.15),transparent_70%)]" />

      {/* Text block centered */}
      <motion.div 
        className="mx-auto max-w-[1000px] px-4 text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeInUp}>
          <AnimatedBadge />
        </motion.div>

        <motion.h1 
          className="mt-8 text-4xl font-semibold tracking-tight md:text-6xl leading-[1.1]"
          variants={fadeInUp}
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
        >
          InvoiceAI centralise vos clients, simplifie la création de devis,
          automatise les factures et vous aide à encaisser plus vite —
          sans outil usine à gaz.
        </motion.p>

        <motion.div 
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          variants={fadeInUp}
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
        >
          Aucune carte bancaire requise • Testez gratuitement
        </motion.p>
      </motion.div>

      {/* MASSIVE mockup like Superior */}
      <motion.div 
        className="mx-auto mt-20 max-w-[1400px] px-4"
        initial={{ opacity: 0, y: 40, scale: 0.95, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative rounded-3xl border bg-card/80 p-4 md:p-6 shadow-2xl backdrop-blur">
          {/* optional very-light glow around mockup */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(80%_80%_at_50%_0%,oklch(var(--primary)/0.14)_0,transparent_70%)] dark:bg-[radial-gradient(80%_80%_at_50%_0%,oklch(var(--primary)/0.25)_0,transparent_70%)]" />

          {/* top section */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Chiffre d’affaires du mois</p>
              <p className="text-4xl font-bold">4 320 €</p>
            </div>
            <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
              +38% vs mois dernier
            </span>
          </div>

          {/* cards */}
          <div className="grid gap-4 text-sm md:grid-cols-3">
            <div className="rounded-xl border bg-background/80 p-4">
              <p className="font-medium">Devis · Site vitrine</p>
              <p className="text-muted-foreground text-xs">Envoyé à Studio Nova</p>
              <span className="mt-3 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-600">
                En attente
              </span>
            </div>

            <div className="rounded-xl border bg-background/80 p-4">
              <p className="font-medium">Facture · Branding</p>
              <p className="text-muted-foreground text-xs">Payée par virement</p>
              <span className="mt-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                Payé
              </span>
            </div>

            <div className="rounded-xl border bg-background/80 p-4">
              <p className="font-medium">Facture · Maintenance</p>
              <p className="text-muted-foreground text-xs">Relance auto J+7 envoyée</p>
              <span className="mt-3 inline-block rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-600">
                En retard
              </span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between border-t pt-4 text-xs text-muted-foreground">
            <span>Relances automatiques activées</span>
            <div className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              <span>Stripe connecté</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

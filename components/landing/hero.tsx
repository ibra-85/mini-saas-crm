"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBadge } from "@/components/ui-enhanced/animated-badge"

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
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
      {/* Grid container - full width */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10 overflow-hidden"
        style={{
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          width: '100vw',
        }}
      >
        {/* Grid lines */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Vignette - darkens all edges */}
        <div 
          className="absolute inset-0"
          style={{
            boxShadow: 'inset 0 0 200px 100px rgba(0,0,0,0.8)',
          }}
        />
      </div>
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
          <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">
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
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20" asChild>
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
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="relative rounded-3xl border bg-card/80 p-4 md:p-6 shadow-2xl backdrop-blur">
          {/* optional very-light glow around mockup */}
          <div className="pointer-events-none absolute inset-0 -z-10 rounded-3xl bg-[radial-gradient(80%_80%_at_50%_0%,rgba(16,185,129,0.14)_0,transparent_70%)] dark:bg-[radial-gradient(80%_80%_at_50%_0%,rgba(16,185,129,0.25)_0,transparent_70%)]" />

          {/* top section */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground">Chiffre d’affaires du mois</p>
              <p className="text-4xl font-bold">4 320 €</p>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-500">
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
              <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-600">
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
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
              <span>Stripe connecté</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

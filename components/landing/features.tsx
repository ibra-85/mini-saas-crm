"use client";

import { motion } from "framer-motion";
import { Users, FileText, Receipt, TrendingUp, Zap, CheckCircle2 } from "lucide-react";
import { appConfig } from "@/lib/config";

const FEATURES = [
  {
    icon: Users,
    title: "Gestion des clients",
    description:
      "Centralisez vos fiches clients, coordonnées, notes et historique des devis et factures.",
    stats: "100% centralisé",
    benefits: ["Fiches complètes", "Historique complet", "Notes privées"],
  },
  {
    icon: FileText,
    title: "Devis en quelques clics",
    description:
      "Créez des devis clairs avec vos propres modèles, dupliquez-les et suivez leurs statuts.",
    stats: "3x plus rapide",
    benefits: ["Modèles personnalisables", "Duplication instantanée", "Suivi en temps réel"],
  },
  {
    icon: Receipt,
    title: "Factures automatiques",
    description:
      "Transformez un devis accepté en facture conforme en un clic, avec totaux et TVA calculés.",
    stats: "0 erreur",
    benefits: ["Calcul automatique TVA", "Conformité légale", "Export PDF"],
  },
  {
    icon: TrendingUp,
    title: "Suivi des paiements",
    description:
      "Identifiez rapidement ce qui est payé, en attente ou en retard, et relancez au bon moment.",
    stats: "30% de relances en moins",
    benefits: ["Vue d'ensemble claire", "Relances automatiques", "Alertes intelligentes"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          className="mb-12 space-y-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-2">
            <Zap className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Fonctionnalités</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Tout ce qu'il faut pour gérer votre activité
          </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Du premier contact à la facture payée, {appConfig.name} vous suit à
            chaque étape avec des outils puissants et simples.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                {/* Gradient accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-2xl" />
                
                {/* Icon with gradient background */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/15">
                    <feature.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Stats badge */}
                <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/5 px-2.5 py-1 border border-primary/10">
                  <span className="text-xs font-semibold text-primary">{feature.stats}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Benefits list */}
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* Faded border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-px bg-gradient-to-r from-transparent from-10% via-border via-50% to-transparent to-90%" />
    </section>
  );
}

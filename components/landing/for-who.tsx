"use client";

import { motion } from "framer-motion";
import { Palette, GraduationCap, Building2, Users, Check } from "lucide-react";

const PROFILES = [
  {
    icon: Palette,
    title: "Freelances & créatifs",
    description:
      "Suivez missions, devis et factures sans tableurs bricolés. Tout ce dont vous avez besoin pour gérer votre activité en toute simplicité.",
    examples: [
      { name: "Développeurs web", selected: true },
      { name: "Designers UI/UX", selected: false },
      { name: "Rédacteurs", selected: false },
    ],
  },
  {
    icon: GraduationCap,
    title: "Consultants & coachs",
    description:
      "Facturez vos séances, accompagnements et packs en gardant une vue claire sur vos paiements et votre activité.",
    examples: [
      { name: "Consultants stratégie", selected: true },
      { name: "Coachs professionnels", selected: false },
      { name: "Formateurs", selected: false },
    ],
  },
  {
    icon: Building2,
    title: "Petites agences",
    description:
      "Centralisez vos clients, projets et relances dans un outil simple que toute l'équipe comprend et utilise au quotidien.",
    examples: [
      { name: "Agences web", selected: true },
      { name: "Studios créatifs", selected: false },
      { name: "Bureaux conseil", selected: false },
    ],
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

export function ForWho() {
  return (
    <section
      id="for-who"
      className="relative overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          className="mb-12 space-y-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-2">
            <Users className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Pour qui ?</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Pensé pour les indépendants et petites équipes
          </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Pas besoin d&apos;un ERP monstrueux pour suivre quelques missions
            bien facturées.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROFILES.map((profile) => (
            <motion.div
              key={profile.title}
              variants={itemVariants}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10">
                {/* Icon */}
                <div className="mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <profile.icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {profile.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {profile.description}
                </p>

                {/* Examples list */}
                <div className="space-y-2">
                  {profile.examples.map((example, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between rounded-lg px-3 py-2 text-sm transition-all duration-200 ${
                        example.selected
                          ? "bg-primary/10 border border-primary/20"
                          : "bg-muted/30 border border-border/30 opacity-60"
                      }`}
                    >
                      <span className={example.selected ? "font-medium" : ""}>
                        {example.name}
                      </span>
                      {example.selected && (
                        <Check className="h-4 w-4 text-primary" />
                      )}
                    </div>
                  ))}
                </div>
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

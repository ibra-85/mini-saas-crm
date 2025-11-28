"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck, Sparkles } from "lucide-react";
import { appConfig } from "@/lib/config";

const PLANS = [
  {
    name: "Gratuit",
    priceMonthly: 0,
    priceYearly: 0,
    highlight: "Idéal pour démarrer et tester.",
    features: [
      "Jusqu'à 5 clients",
      "10 devis / mois",
      "10 factures / mois",
      "Support par email",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    priceMonthly: 19,
    priceYearly: 15, // ~20% de réduction
    highlight: "Pour les indépendants en vitesse de croisière.",
    features: [
      "Clients illimités",
      "Devis & factures illimités",
      "Relances automatiques",
      "Support prioritaire",
    ],
    cta: "Passer au plan Pro",
    popular: true,
  },
];

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <motion.div
          className="mb-10 space-y-3 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 border border-primary/20 mb-2">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">Tarifs</span>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Commencez gratuitement, upgradez quand vous voulez
          </h2>
          <p className="text-base text-muted-foreground md:text-lg max-w-2xl mx-auto">
            Testez {appConfig.name} sans carte bancaire. Passez au plan Pro quand
            il vous fait gagner du temps (et de l&apos;argent).
          </p>
        </motion.div>

        {/* Toggle Mensuel/Annuel */}
        <div className="flex items-center justify-center mb-10">
          <div className="relative z-10 mx-auto flex w-fit rounded-full bg-muted/50 border border-border p-1">
            <button
              onClick={() => setIsYearly(false)}
              className={`relative z-10 w-fit h-10 rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                !isYearly
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {!isYearly && (
                <motion.span
                  layoutId="pricing-toggle"
                  className="absolute top-0 left-0 h-10 w-full rounded-full border border-border shadow-sm bg-background"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative">Mensuel</span>
            </button>

            <button
              onClick={() => setIsYearly(true)}
              className={`relative z-10 w-fit h-10 flex-shrink-0 rounded-full px-6 py-2 text-sm font-semibold transition-colors ${
                isYearly
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {isYearly && (
                <motion.span
                  layoutId="pricing-toggle"
                  className="absolute top-0 left-0 h-10 w-full rounded-full border border-border shadow-sm bg-background"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-2">
                Annuel
                <span className={`rounded-full px-2 py-0.5 text-xs font-medium transition-colors ${
                  isYearly 
                    ? "bg-primary/10 text-primary" 
                    : "text-muted-foreground/60"
                }`}>
                  -20%
                </span>
              </span>
            </button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {PLANS.map((plan, index) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            const period = isYearly ? "/an" : "/mois";
            const monthlyEquivalent = isYearly && plan.priceYearly > 0 
              ? `soit ${(plan.priceYearly / 12).toFixed(2)} €/mois` 
              : null;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className={`relative flex flex-col h-full transition-all duration-300 hover:shadow-xl ${
                    plan.popular 
                      ? "ring-2 ring-primary/50 shadow-lg shadow-primary/10 border-primary/30" 
                      : "hover:border-primary/20"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        Le plus populaire
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="space-y-2 pb-4">
                    <CardTitle className="text-xl font-semibold">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {plan.highlight}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1">
                    <div>
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-4xl font-bold">
                          {price} €
                        </span>
                        <span className="text-sm text-muted-foreground">{period}</span>
                      </div>
                      {monthlyEquivalent && (
                        <p className="text-xs text-muted-foreground">
                          {monthlyEquivalent}
                        </p>
                      )}
                    </div>

                    <ul className="space-y-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <BadgeCheck className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                          <span className="text-sm text-muted-foreground leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="mt-auto pt-6">
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
      {/* Faded border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-px bg-gradient-to-r from-transparent from-10% via-border via-50% to-transparent to-90%" />
    </section>
  );
}

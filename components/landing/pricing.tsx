import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeCheck } from "lucide-react";

const PLANS = [
  {
    name: "Gratuit",
    price: "0 €",
    period: "/mois",
    highlight: "Idéal pour démarrer et tester.",
    features: [
      "Jusqu’à 5 clients",
      "10 devis / mois",
      "10 factures / mois",
      "Support par email",
    ],
    cta: "Commencer gratuitement",
    popular: false,
  },
  {
    name: "Pro",
    price: "19 €",
    period: "/mois",
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
  return (
    <section id="pricing" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Commencez gratuitement, upgradez quand vous voulez
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Testez Mini SaaS CRM sans carte bancaire. Passez au plan Pro quand
            il vous fait gagner du temps (et de l&apos;argent).
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col  ${
                plan.popular ? "ring-2 ring-primary shadow-lg shadow-sky-500/10" : ""
              }`}
            >
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">
                    {plan.name}
                  </CardTitle>
                  {plan.popular && (
                    <Badge>
                      Le plus populaire
                    </Badge>
                  )}
                </div>
                <CardDescription className="text-xs text-muted-foreground">
                  {plan.highlight}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-semibold md:text-3xl">
                    {plan.price}
                  </span>
                  <span className="text-xs text-accent-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-2 text-xs text-muted-foreground md:text-sm">
                  {plan.features.map((f) => (
                    <li key={f} className="flex gap-2 items-center">
                      <BadgeCheck className="h-4 w-4 shrink-0 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="mt-auto">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

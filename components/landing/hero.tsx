import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedBadge } from "@/components/ui-enhanced/animated-badge";

export function Hero() {
  return (
    <section className="h-screen flex">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:px-6 justify-center">
        <div className="flex flex-col items-center gap-8">
          <AnimatedBadge />

          <div className="flex flex-col items-center text-center gap-8">
            <h1 className="text-3xl font-semibold tracking-tight md:text-6xl">
              Gérez vos devis et factures
              <br />
              <span className="bg-linear-to-r from-primary to-primary/80 dark:from-primary dark:to-primary/80 bg-clip-text text-transparent underline decoration-primary/70">
                sans prise de tête.
              </span>
            </h1>
            <p className="max-w-xl text-sm text-primary/70 md:text-[18px]">
              Mini SaaS CRM centralise vos clients, simplifie la création de
              devis, automatise les factures et vous aide à encaisser plus vite.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button size="lg" asChild>
              <Link href="#">Commencer gratuitement</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#pricing">Voir les tarifs</Link>
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Aucune carte bancaire requise • Testez gratuitement
          </p>
        </div>
      </div>
    </section>
  );
}
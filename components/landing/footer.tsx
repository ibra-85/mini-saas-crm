import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ToggleThemeButton } from "@/components/theme/toggle-theme-button";
import { appConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="relative w-full">
      <div className="mx-auto w-full px-6 py-16 md:px-12 md:py-20 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between max-w-7xl mx-auto">
          {/* Logo + description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-linear-to-br from-primary/90 to-primary/70 dark:from-black/50 dark:to-primary/40">
                <Sparkles className="h-5 w-5 text-secondary dark:text-primary" />
              </div>
              <span className="text-xl font-semibold">{appConfig.name}</span>
            </div>
            <p className="max-w-xs text-base text-muted-foreground">
              Simplifiez votre facturation. Gérez devis, factures et paiements sans prise de tête.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-16 text-base">
            <div className="space-y-4">
              <p className="font-semibold text-foreground">Produit</p>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">Tarifs</Link></li>
                <li><Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-foreground">Légal</p>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link></li>
                <li><Link href="/cgv" className="hover:text-foreground transition-colors">CGV</Link></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-foreground">Contact</p>
              <ul className="space-y-3 text-muted-foreground">
                <li><Link href="mailto:contact@invoiceai.fr" className="hover:text-foreground transition-colors">contact@invoiceai.fr</Link></li>
                <li><Link href="https://twitter.com" target="_blank" className="hover:text-foreground transition-colors">Twitter</Link></li>
                <li><Link href="https://github.com" target="_blank" className="hover:text-foreground transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row max-w-7xl mx-auto">
          <span>© {new Date().getFullYear()} {appConfig.name}. Tous droits réservés.</span>
          <div className="flex items-center gap-3">
            <span>Fait avec ❤️ en France</span>
            <ToggleThemeButton className="rounded-[12px]" />
          </div>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";
import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Logo + description */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary/90 to-emerald-500/70 dark:from-black/50 dark:to-emerald-500/40">
                <Sparkles className="h-4 w-4 text-secondary dark:text-primary" />
              </div>
              <span className="text-lg font-semibold">InvoiceAI</span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Simplifiez votre facturation. Gérez devis, factures et paiements sans prise de tête.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-12 text-sm">
            <div className="space-y-3">
              <p className="font-medium text-foreground">Produit</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</Link></li>
                <li><Link href="#pricing" className="hover:text-foreground transition-colors">Tarifs</Link></li>
                <li><Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-medium text-foreground">Légal</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="/mentions-legales" className="hover:text-foreground transition-colors">Mentions légales</Link></li>
                <li><Link href="/confidentialite" className="hover:text-foreground transition-colors">Confidentialité</Link></li>
                <li><Link href="/cgv" className="hover:text-foreground transition-colors">CGV</Link></li>
              </ul>
            </div>
            <div className="space-y-3">
              <p className="font-medium text-foreground">Contact</p>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link href="mailto:contact@invoiceai.fr" className="hover:text-foreground transition-colors">contact@invoiceai.fr</Link></li>
                <li><Link href="https://twitter.com" target="_blank" className="hover:text-foreground transition-colors">Twitter</Link></li>
                <li><Link href="https://github.com" target="_blank" className="hover:text-foreground transition-colors">GitHub</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/50 pt-6 text-xs text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} InvoiceAI. Tous droits réservés.</span>
          <span>Fait avec ❤️ en France</span>
        </div>
      </div>
    </footer>
  );
}

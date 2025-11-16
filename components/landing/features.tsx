import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const FEATURES = [
  {
    title: "Gestion des clients",
    description:
      "Centralisez vos fiches clients, coordonnées, notes et historique des devis et factures.",
  },
  {
    title: "Devis en quelques clics",
    description:
      "Créez des devis clairs avec vos propres modèles, dupliquez-les et suivez leurs statuts.",
  },
  {
    title: "Factures automatiques",
    description:
      "Transformez un devis accepté en facture conforme en un clic, avec totaux et TVA calculés.",
  },
  {
    title: "Suivi des paiements",
    description:
      "Identifiez rapidement ce qui est payé, en attente ou en retard, et relancez au bon moment.",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="border-b"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tout ce qu’il faut pour gérer votre activité
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Du premier contact à la facture payée, Mini SaaS CRM vous suit à
            chaque étape.
          </p>
        </div>
      </div>
    </section>
  );
}

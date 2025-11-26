import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Users, FileText, Receipt, TrendingUp } from "lucide-react";

const FEATURES = [
  {
    icon: Users,
    title: "Gestion des clients",
    description:
      "Centralisez vos fiches clients, coordonnées, notes et historique des devis et factures.",
  },
  {
    icon: FileText,
    title: "Devis en quelques clics",
    description:
      "Créez des devis clairs avec vos propres modèles, dupliquez-les et suivez leurs statuts.",
  },
  {
    icon: Receipt,
    title: "Factures automatiques",
    description:
      "Transformez un devis accepté en facture conforme en un clic, avec totaux et TVA calculés.",
  },
  {
    icon: TrendingUp,
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
        <div className="mb-10 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Tout ce qu'il faut pour gérer votre activité
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Du premier contact à la facture payée, InvoiceAI vous suit à
            chaque étape.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <Card
              key={feature.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

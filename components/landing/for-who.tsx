import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Palette, GraduationCap, Building2 } from "lucide-react";

const PROFILES = [
  {
    icon: Palette,
    title: "Freelances & créatifs",
    description:
      "Développeurs, designers, rédacteurs… Suivez missions, devis et factures sans tableurs bricolés.",
  },
  {
    icon: GraduationCap,
    title: "Consultants & coachs",
    description:
      "Facturez vos séances, accompagnements et packs en gardant une vue claire sur vos paiements.",
  },
  {
    icon: Building2,
    title: "Petites agences",
    description:
      "Centralisez vos clients, projets et relances dans un outil simple que toute l'équipe comprend.",
  },
];

export function ForWho() {
  return (
    <section
      id="for-who"
      className="border-b"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-10 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Pensé pour les indépendants et petites équipes
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Pas besoin d&apos;un ERP monstrueux pour suivre quelques missions
            bien facturées.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {PROFILES.map((profile) => (
            <Card
              key={profile.title}
              className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <profile.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-base font-semibold">
                  {profile.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {profile.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

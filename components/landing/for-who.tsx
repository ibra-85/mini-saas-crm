import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const PROFILES = [
  {
    title: "Freelances & créatifs",
    description:
      "Développeurs, designers, rédacteurs… Suivez missions, devis et factures sans tableurs bricolés.",
  },
  {
    title: "Consultants & coachs",
    description:
      "Facturez vos séances, accompagnements et packs en gardant une vue claire sur vos paiements.",
  },
  {
    title: "Petites agences",
    description:
      "Centralisez vos clients, projets et relances dans un outil simple que toute l’équipe comprend.",
  },
];

export function ForWho() {
  return (
    <section
      id="for-who"
      className="border-b"
    >
      <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-8 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Pensé pour les indépendants et petites équipes
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Pas besoin d&apos;un ERP monstrueux pour suivre quelques missions
            bien facturées.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PROFILES.map((profile) => (
            <Card
              key={profile.title}
            >
              <CardHeader>
                <CardTitle className="text-sm font-semibold">
                  {profile.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground md:text-sm">
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

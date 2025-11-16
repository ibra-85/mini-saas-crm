import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
  {
    q: "Puis-je annuler à tout moment ?",
    a: "Oui, vous pouvez annuler quand vous le souhaitez. Votre abonnement restera actif jusqu’à la fin de la période en cours.",
  },
  {
    q: "Y a-t-il un essai gratuit ?",
    a: "Le plan Gratuit vous permet de tester l’outil sans limite de temps. Passez au plan Pro uniquement si vous en avez besoin.",
  },
  {
    q: "Mes données sont-elles sécurisées ?",
    a: "Nous utilisons une base de données sécurisée, des sauvegardes régulières et du chiffrement TLS pour protéger vos données.",
  },
  {
    q: "Est-ce adapté aux auto-entrepreneurs ?",
    a: "Oui, Mini SaaS CRM a été conçu à la base pour les freelances et auto-entrepreneurs.",
  },
  {
    q: "Puis-je importer mes anciens clients ?",
    a: "Vous pourrez progressivement recréer vos clients dans l’outil. Une fonctionnalité d’import CSV est prévue.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b">
      <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
        <div className="mb-6 space-y-2 text-center">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Questions fréquentes
          </h2>
          <p className="text-sm text-muted-foreground md:text-base">
            Vous hésitez encore ? Voici quelques réponses rapides.
          </p>
        </div>

        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full rounded-lg border border-border bg-card/50"
        >
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`item-${index + 1}`}
              className="border-b last:border-b-0"
            >
              <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

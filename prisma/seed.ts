import { PrismaClient, Role, Plan, InvoiceStatus, QuoteStatus } from "../app/generated/prisma/client";

const prisma = new PrismaClient();

export async function main() {
  console.log("🌱 Seeding data...");

  // 1. User
  const user = await prisma.user.create({
    data: {
      email: "demo@mini-saas.dev",
      name: "Demo Admin",
      role: Role.ADMIN,
      plan: Plan.FREE,
    },
  });

  // 2. Two customers
  const customer1 = await prisma.customer.create({
    data: {
      userId: user.id,
      name: "Jean Dupont",
      email: "jean@example.com",
      company: "Dupont SARL",
    },
  });

  // 3. Quote with items
  const quote = await prisma.quote.create({
    data: {
      userId: user.id,
      customerId: customer1.id,
      title: "Site vitrine WordPress",
      status: QuoteStatus.SENT,
      subtotal: 1000,
      vatTotal: 200,
      total: 1200,
      items: {
        create: [
          {
            label: "Développement site",
            quantity: 1,
            unitPrice: 1000,
            vatRate: 20,
            lineTotal: 1200,
          },
        ],
      },
    },
  });

  // 4. Invoice connected to quote
  await prisma.invoice.create({
    data: {
      userId: user.id,
      customerId: customer1.id,
      quoteId: quote.id,
      status: InvoiceStatus.UNPAID,
      number: "INV-0001",
      subtotal: 1000,
      vatTotal: 200,
      total: 1200,
      items: {
        create: [
          {
            label: "Développement site",
            quantity: 1,
            unitPrice: 1000,
            vatRate: 20,
            lineTotal: 1200,
          },
        ],
      },
    },
  });

  console.log("✅ Seed terminé !");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding :", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

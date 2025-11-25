import type { Metadata } from "next";
import { Geist, Geist_Mono, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const wixMadeForDisplay = Wix_Madefor_Display({
  variable: "--font-wix-made-for-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InvoiceAI - Gérez vos devis et factures sans prise de tête",
  description: "InvoiceAI centralise vos clients, simplifie la création de devis, automatise les factures et vous aide à encaisser plus vite. Idéal pour freelances et petites équipes.",
  keywords: ["facturation", "devis", "factures", "freelance", "auto-entrepreneur", "gestion clients", "paiement"],
  authors: [{ name: "InvoiceAI" }],
  openGraph: {
    title: "InvoiceAI - Gérez vos devis et factures sans prise de tête",
    description: "Simplifiez votre facturation. Gérez devis, factures et paiements sans prise de tête.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${wixMadeForDisplay.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

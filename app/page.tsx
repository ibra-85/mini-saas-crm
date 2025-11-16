import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { ForWho } from "@/components/landing/for-who";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";
import { MainContainer } from "@/components/landing/main-container";

export default function LandingPage() {
  return (
    <MainContainer>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ForWho />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </MainContainer>
  );
}
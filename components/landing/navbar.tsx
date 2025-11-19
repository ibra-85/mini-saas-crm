"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ToggleThemeButton } from "@/components/theme/toggle-theme-button";
import { redirect } from "next/navigation";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll(); // état initial
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled
          && "bg-background/80 backdrop-blur-md dark:bg-background/70"
      )}
    >
      <div className="flex justify-between items-center container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-center gap-16 px-6 transition-all duration-300 h-18">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary/90 to-emerald-500/70 dark:from-black/50 dark:to-emerald-500/40">
              <Sparkles className="h-4 w-4 text-secondary dark:text-primary" />
            </div>
            <span className="text-lg font-semibold">InvoiceAI</span>
          </a>

          {/* Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#d5d5d5] dark:hover:text-foreground"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#d5d5d5] dark:hover:text-foreground"
            >
              Tarifs
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#d5d5d5] dark:hover:text-foreground"
            >
              À propos
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#d5d5d5] dark:hover:text-foreground"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-3">
          <Button className="rounded-[12px]" onClick={() => redirect('/login')}>Se connecter</Button>
          <ToggleThemeButton className="rounded-[12px]" />
        </div>
      </div>
    </nav>
  );
}

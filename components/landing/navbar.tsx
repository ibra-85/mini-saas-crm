"use client";

import { useEffect, useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { appConfig } from "@/lib/config";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on passe en mode desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMobileMenuOpen((prev) => {
          if (prev) return false;
          return prev;
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fermer le menu mobile quand on clique sur un lien
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        (isScrolled || isMobileMenuOpen) && "bg-background/80 backdrop-blur-md dark:bg-background/70"
      )}
    >
      <div className="flex justify-between items-center container mx-auto px-4 lg:px-12">
        <div className="flex items-center justify-between w-full md:w-auto gap-4 md:gap-16 px-6 transition-all duration-300 h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary/90 to-primary/70 dark:from-black/50 dark:to-primary/40">
              <Sparkles className="h-4 w-4 text-secondary dark:text-primary" />
            </div>
            <span className="text-lg font-semibold">{appConfig.name}</span>
          </Link>

          {/* Navigation Links Desktop */}
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
              href="#for-who"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#d5d5d5] dark:hover:text-foreground"
            >
              Pour qui ?
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground dark:text-[#d5d5d5] dark:hover:text-foreground"
            >
              FAQ
            </a>
          </div>

          {/* Menu Hamburger Mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative flex items-center justify-center">
              <Menu 
                className={cn(
                  "absolute size-6 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                )} 
              />
              <X 
                className={cn(
                  "absolute size-6 transition-all duration-300",
                  isMobileMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                )} 
              />
            </div>
          </Button>
        </div>

        {/* Bouton Se connecter Desktop */}
        <div className="hidden md:flex justify-center gap-3">
          <Button className="rounded-[12px]" asChild>
            <Link href="/login">Se connecter</Link>
          </Button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border/50 transition-all duration-300">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a
              href="#features"
              onClick={handleLinkClick}
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              Fonctionnalités
            </a>
            <a
              href="#pricing"
              onClick={handleLinkClick}
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              Tarifs
            </a>
            <a
              href="#for-who"
              onClick={handleLinkClick}
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              Pour qui ?
            </a>
            <a
              href="#faq"
              onClick={handleLinkClick}
              className="block text-sm font-medium text-muted-foreground transition-colors hover:text-foreground py-2"
            >
              FAQ
            </a>
            <div className="pt-2">
              <Button className="w-full rounded-[12px]" asChild>
                <Link href="/login" onClick={handleLinkClick}>Se connecter</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

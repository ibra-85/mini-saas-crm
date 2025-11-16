// components/landing/footer.tsx
import Link from "next/link";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-muted-foreground md:flex-row md:px-6">
        <div className="flex items-center gap-2">
          <span className="font-medium">Mini SaaS CRM</span>
          <span>•</span>
          <span>© {new Date().getFullYear()} Tous droits réservés.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#">
            Mentions légales
          </Link>
          <Link href="#">
            Contact
          </Link>
          <Link href="#">
            Twitter
          </Link>
          <Link href="#">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}

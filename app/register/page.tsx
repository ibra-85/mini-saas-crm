import { ArrowLeft } from "lucide-react";
import { SignupForm } from "@/components/authentication/signup-form";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SignupPage() {
  return (
    <div className="min-h-svh flex flex-col items-center justify-center p-6 md:p-10 relative">
      <Link href="/" className="absolute top-6 left-6 md:top-10 md:left-10">
        <Button variant="ghost" size="sm" className="gap-2">
          <ArrowLeft className="h-4 w-4" />
          Retour à l'accueil
        </Button>
      </Link>
      <div className="flex w-full max-w-md flex-col gap-6">
        <SignupForm />
      </div>
    </div>
  );
}
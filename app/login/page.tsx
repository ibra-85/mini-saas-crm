import { Sparkles } from "lucide-react"
import { LoginForm } from "@/components/authentication/login-form"
import { Navbar } from "@/components/landing/navbar"

export default function LoginPage() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <div className="grid min-h-svh lg:grid-cols-2">
        {/* Left side - Form */}
        <div className="flex flex-col items-center justify-center gap-6 p-6 md:p-10 pt-24">
          <div className="flex w-full max-w-md flex-col gap-6">
            <LoginForm />
          </div>
        </div>

        {/* Right side - Visual */}
        <div className="relative hidden lg:block bg-gradient-to-br from-emerald-500/10 via-background to-emerald-600/5">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-emerald-600/10 blur-3xl" />
          </div>
          
          {/* Content */}
          <div className="relative flex h-full flex-col items-center justify-center p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-primary/90 to-emerald-500/70 dark:from-black/50 dark:to-emerald-500/40">
                <Sparkles className="h-6 w-6 text-secondary dark:text-primary" />
              </div>
              <span className="text-2xl font-bold">InvoiceAI</span>
            </div>
            
            <div className="max-w-md text-center space-y-4">
              <h2 className="text-3xl font-semibold tracking-tight">
                Bienvenue !
              </h2>
              <p className="text-muted-foreground">
                Connectez-vous pour accéder à votre tableau de bord et gérer vos devis, factures et clients en toute simplicité.
              </p>
            </div>

            {/* Stats cards */}
            <div className="mt-12 grid grid-cols-2 gap-4 w-full max-w-sm">
              <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-emerald-500">+2500</p>
                <p className="text-xs text-muted-foreground">Utilisateurs actifs</p>
              </div>
              <div className="rounded-xl border bg-card/50 backdrop-blur-sm p-4 text-center">
                <p className="text-2xl font-bold text-emerald-500">98%</p>
                <p className="text-xs text-muted-foreground">Satisfaction client</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { GalleryVerticalEnd, Sparkles } from "lucide-react"

import { LoginForm } from "@/components/authentication/login-form"
import { Navbar } from "@/components/landing/navbar"

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10 pt-25">
        <div className="flex w-full max-w-md flex-col gap-6">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

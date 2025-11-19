"use client"

import React, { useState, useMemo } from "react"
import { Check, Eye, EyeOff, X } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"
import { signUp } from "@/lib/auth-client"

// ---------- Règles pour le mot de passe ----------

const PASSWORD_REQUIREMENTS = [
  { regex: /.{8,}/, text: "Au moins 8 caractères" },
  { regex: /[0-9]/, text: "Au moins 1 chiffre" },
  { regex: /[a-z]/, text: "Au moins 1 lettre minuscule" },
  { regex: /[A-Z]/, text: "Au moins 1 lettre majuscule" },
  { regex: /[!-\/:-@[-`{-~]/, text: "Au moins 1 caractère spécial" },
] as const

type StrengthScore = 0 | 1 | 2 | 3 | 4 | 5

const STRENGTH_CONFIG = {
  colors: {
    0: "bg-border",
    1: "bg-red-500",
    2: "bg-orange-500",
    3: "bg-amber-500",
    4: "bg-amber-700",
    5: "bg-emerald-500",
  } as Record<StrengthScore, string>,
  texts: {
    0: "Entrez un mot de passe",
    1: "Mot de passe faible",
    2: "Mot de passe moyen",
    3: "Mot de passe fort",
    4: "Mot de passe très fort",
  } as Record<Exclude<StrengthScore, 5>, string>,
} as const

type Requirement = {
  met: boolean
  text: string
}

type PasswordStrength = {
  score: StrengthScore
  requirements: Requirement[]
}

// ------------------------------------------------------

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const passwordStrength = useMemo<PasswordStrength>(() => {
    const requirements = PASSWORD_REQUIREMENTS.map((req) => ({
      met: req.regex.test(password),
      text: req.text,
    }))

    const score = requirements.filter((r) => r.met).length as StrengthScore

    return { score, requirements }
  }, [password])

  const allRequirementsMet = passwordStrength.requirements.every((r) => r.met)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!allRequirementsMet) {
      setError("Le mot de passe ne respecte pas tous les critères.")
      return
    }

    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.")
      return
    }

    setLoading(true)

    try {
      const result = await signUp.email({
        email: email.trim(),
        name: name.trim(),
        password,
      })

      if (result.error) {
        setError(
          result.error.message ||
            "Une erreur est survenue lors de l'inscription.",
        )
        return
      }

      router.push("/dashboard")
    } catch (err) {
      console.error(err)
      setError("Une erreur est survenue lors de l'inscription.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle>Créez votre compte</CardTitle>
          <CardDescription>
            Entrez vos informations pour créer un compte
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="name">Nom</FieldLabel>
                <Input
                  id="name"
                  type="text"
                  placeholder="Votre nom"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@exemple.fr"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FieldDescription>
                  Nous ne partagerons jamais votre email.
                </FieldDescription>
              </Field>

              {/* Password + strength UI */}
              <Field>
                <FieldLabel htmlFor="password">Mot de passe</FieldLabel>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={password.length > 0 && !allRequirementsMet}
                    aria-describedby={
                      password.length > 0 ? "password-strength" : undefined
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((p) => !p)}
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground cursor-pointer"
                    aria-label={
                      showPassword
                        ? "Masquer le mot de passe"
                        : "Afficher le mot de passe"
                    }
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {/* Animation: n'afficher que si l'utilisateur a commencé à taper */}
                <AnimatePresence>
                  {password.length > 0 && (
                    <motion.div
                      key="password-strength-block"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.18 }}
                      className="mt-3 space-y-2"
                    >
                      {/* Barre de force */}
                      <div
                        className="h-1 rounded-full bg-border overflow-hidden"
                        role="progressbar"
                        aria-valuenow={passwordStrength.score}
                        aria-valuemin={0}
                        aria-valuemax={4}
                      >
                        <div
                          className={`h-full ${
                            STRENGTH_CONFIG.colors[passwordStrength.score]
                          } transition-all duration-500`}
                          style={{
                            width: `${(passwordStrength.score / 5) * 100}%`,
                          }}
                        />
                      </div>

                      {/* Texte + critères */}
                      <p
                        id="password-strength"
                        className="text-xs font-medium flex justify-between"
                      >
                        <span>Doit contenir :</span>
                        <span>
                          {
                            STRENGTH_CONFIG.texts[
                              Math.min(
                                passwordStrength.score,
                                4,
                              ) as keyof typeof STRENGTH_CONFIG.texts
                            ]
                          }
                        </span>
                      </p>

                      <ul
                        className="space-y-1"
                        aria-label="Critères du mot de passe"
                      >
                        {passwordStrength.requirements.map(
                          (req, index) => (
                            <li
                              key={index}
                              className="flex items-center space-x-2 text-xs"
                            >
                              {req.met ? (
                                <Check
                                  size={14}
                                  className="text-emerald-500"
                                />
                              ) : (
                                <X
                                  size={14}
                                  className="text-muted-foreground/80"
                                />
                              )}
                              <span
                                className={
                                  req.met
                                    ? "text-emerald-600"
                                    : "text-muted-foreground"
                                }
                              >
                                {req.text}
                              </span>
                            </li>
                          ),
                        )}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Field>

              {/* Confirm password */}
              <Field>
                <FieldLabel htmlFor="confirm-password">
                  Confirmez le mot de passe
                </FieldLabel>
                <div className="relative">
                  <Input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="••••••••"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword((p) => !p)
                    }
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground cursor-pointer"
                    aria-label={
                      showConfirmPassword
                        ? "Masquer le mot de passe"
                        : "Afficher le mot de passe"
                    }
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={16} />
                    ) : (
                      <Eye size={16} />
                    )}
                  </button>
                </div>
                <FieldDescription>
                  Assurez-vous que les mots de passe correspondent.
                </FieldDescription>
              </Field>

              {/* Erreur globale */}
              {error && (
                <Field>
                  <p className="text-sm text-red-500" aria-live="polite">
                    {error}
                  </p>
                </Field>
              )}

              <FieldGroup>
                <Field className="flex flex-col gap-2">
                  <Button type="submit" disabled={loading}>
                    {loading
                      ? "Création du compte..."
                      : "Créer un compte"}
                  </Button>
                  <FieldDescription className="text-center">
                    Vous avez déjà un compte ?{" "}
                    <a href="/login" className="underline">
                      Se connecter
                    </a>
                  </FieldDescription>
                </Field>
              </FieldGroup>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>

      <FieldDescription className="px-6 text-center">
        En cliquant sur Continuer, vous acceptez nos{" "}
        <a href="#" className="underline">
          Conditions d&apos;utilisation
        </a>{" "}
        et notre{" "}
        <a href="#" className="underline">
          Politique de confidentialité
        </a>
        .
      </FieldDescription>
    </div>
  )
}

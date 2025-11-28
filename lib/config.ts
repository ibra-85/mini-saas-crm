/**
 * Configuration centralisée de l'application
 * Les valeurs sont chargées depuis les variables d'environnement
 */

export const appConfig = {
  name: process.env.NEXT_PUBLIC_APP_NAME || "Invoice AI",
} as const;


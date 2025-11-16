import type { CSSProperties, FC, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export const AnimatedShinyText: FC<AnimatedShinyTextProps> = ({
  children,
  className,
  shimmerWidth = 120,
}) => {
  return (
    <span
      style={
        {
          "--shiny-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
      className={cn(
        "relative inline-flex items-center",

        // le texte est dessiné par le gradient → transparent
        "bg-clip-text text-transparent",

        // gradient shiny (clair en light, un peu plus pétant en dark)
        "bg-linear-to-r from-slate-400 via-slate-900 to-slate-400",
        "dark:from-slate-300 dark:via-white dark:to-slate-300",

        // taille du gradient + anim
        "bg-size-[var(--shiny-width)_100%]",
        "animate-shiny-text",

        className,
      )}
    >
      {children}
    </span>
  );
};

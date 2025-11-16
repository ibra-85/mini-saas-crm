"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-hidden">
      
      {/* Glow animé */}
      <div className="pointer-events-none absolute inset-0 -z-20">
        <motion.div
          initial={{ opacity: 0.35, scale: 1 }}
          animate={{
            opacity: [0.35, 0.8, 0.35],
            scale: [1, 1.12, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_50%_-120%,#34d399_0%,transparent_70%)]
            mask-[radial-gradient(circle_at_50%_-120%,black_40%,transparent_75%)]
            dark:bg-[radial-gradient(circle_at_50%_-120%,#10b981_0%,transparent_70%)]
            dark:mask-[radial-gradient(circle_at_50%_-120%,black_40%,transparent_75%)]

            will-change-transform will-change-opacity
          "
        />
      </div>

      {/* Contenu */}
      <div className="relative z-10 flex min-h-screen w-full max-w-[1260px] flex-col">
        {children}
      </div>
    </div>
  );
}

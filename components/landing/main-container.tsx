"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-hidden">
      {/* glow soft */}
      <div className="z-2 absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
        <div className="w-140 -right-20 -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.12)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.08)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      {/* Contenu */}
      <div className="relative z-10 flex min-h-screen w-full max-w-[1260px] flex-col">
        {children}
      </div>
    </div>
  );
}

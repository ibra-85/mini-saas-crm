"use client";

import type { ReactNode } from "react";

type MainContainerProps = {
  children: ReactNode;
};

export function MainContainer({ children }: MainContainerProps) {
  return (
    <div className="relative flex min-h-screen w-full justify-center overflow-hidden">
      {/* Contenu */}
      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {children}
      </div>
    </div>
  );
}

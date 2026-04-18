"use client";

import type { ReactNode } from "react";
import { ScentQuizProvider } from "@/components/quiz/ScentQuiz";
import { CartProvider } from "@/lib/cart";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <ScentQuizProvider>{children}</ScentQuizProvider>
    </CartProvider>
  );
}

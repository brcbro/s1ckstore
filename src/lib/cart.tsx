"use client";

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { Product } from "./products";

export type CartItem = { product: Product; qty: number };

type State = CartItem[];
type Action =
  | { type: "ADD"; product: Product }
  | { type: "REMOVE"; slug: string }
  | { type: "UPDATE"; slug: string; qty: number }
  | { type: "CLEAR" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD": {
      const idx = state.findIndex((i) => i.product.slug === action.product.slug);
      if (idx >= 0)
        return state.map((i, n) => (n === idx ? { ...i, qty: i.qty + 1 } : i));
      return [...state, { product: action.product, qty: 1 }];
    }
    case "REMOVE":
      return state.filter((i) => i.product.slug !== action.slug);
    case "UPDATE":
      if (action.qty <= 0)
        return state.filter((i) => i.product.slug !== action.slug);
      return state.map((i) =>
        i.product.slug === action.slug ? { ...i, qty: action.qty } : i
      );
    case "CLEAR":
      return [];
    default:
      return state;
  }
}

type CartCtx = {
  items: CartItem[];
  add: (p: Product) => void;
  remove: (slug: string) => void;
  update: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const CartContext = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(reducer, []);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.qty, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        add: (p) => dispatch({ type: "ADD", product: p }),
        remove: (slug) => dispatch({ type: "REMOVE", slug }),
        update: (slug, qty) => dispatch({ type: "UPDATE", slug, qty }),
        clear: () => dispatch({ type: "CLEAR" }),
        count,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

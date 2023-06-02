"use client";

import { ProductsContextProvider } from "./ProductsContext";

export function ProductsCtxProvider({ children }) {
  return <ProductsContextProvider>{children}</ProductsContextProvider>;
}

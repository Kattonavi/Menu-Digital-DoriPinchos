"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { CATEGORIES, PRODUCTS } from "@/data/menu.data";
import type { CategoryId } from "@/types/menu";
import CategoryTabs from "./CategoryTabs";
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

export default function MenuSection() {
  const [category, setCategory] = useState<CategoryId | "todos">("todos");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = category === "todos" || p.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        (p.description?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [category, query]);

  const grouped = useMemo(() => {
    if (category !== "todos") {
      const cat = CATEGORIES.find((c) => c.id === category);
      return cat ? [{ category: cat, items: filtered }] : [];
    }
    return CATEGORIES.map((cat) => ({
      category: cat,
      items: filtered.filter((p) => p.category === cat.id),
    })).filter((g) => g.items.length > 0);
  }, [category, filtered]);

  return (
    <section id="menu" className="relative mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <div className="mb-10 text-center">
        <h2 className="font-display text-5xl tracking-tight text-brand-text sm:text-6xl">
          Nuestro <span className="bg-brand-gradient bg-clip-text text-transparent">menú</span>
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm text-brand-muted sm:text-base">
          Elige tu antojo. Toca cualquier producto para pedirlo al instante.
        </p>
      </div>

      <div className="sticky top-2 z-20 mb-6 space-y-3 rounded-3xl border border-brand-border bg-brand-bg/85 p-3 backdrop-blur-xl sm:p-4">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryTabs active={category} onSelect={setCategory} />
      </div>

      {filtered.length === 0 ? (
        <EmptyState query={query} />
      ) : (
        <div className="space-y-12">
          {grouped.map(({ category: cat, items }) => (
            <div key={cat.id}>
              <div className="mb-5 flex items-center gap-3">
                <span className="text-3xl">{cat.emoji}</span>
                <h3 className="font-display text-3xl tracking-tight text-brand-text">
                  {cat.label}
                </h3>
                <span className="ml-1 rounded-full bg-brand-card px-2.5 py-0.5 text-xs font-medium text-brand-muted">
                  {items.length}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-brand-border to-transparent" />
              </div>

              <motion.div
                layout
                className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                <AnimatePresence mode="popLayout">
                  {items.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

function EmptyState({ query }: { query: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="mx-auto flex max-w-md flex-col items-center justify-center rounded-3xl border border-dashed border-brand-border bg-brand-card/40 px-6 py-16 text-center"
    >
      <div className="mb-4 rounded-full bg-brand-red/10 p-4">
        <SearchX className="h-8 w-8 text-brand-red" />
      </div>
      <h3 className="text-lg font-semibold text-brand-text">
        Sin resultados
      </h3>
      <p className="mt-2 text-sm text-brand-muted">
        {query
          ? `No encontramos productos que coincidan con "${query}".`
          : "Esta categoría aún no tiene productos disponibles."}
      </p>
    </motion.div>
  );
}

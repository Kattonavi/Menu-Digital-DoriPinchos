"use client";

import { CATEGORIES } from "@/data/menu.data";
import type { CategoryId } from "@/types/menu";

interface Props {
  active: CategoryId | "todos";
  onSelect: (id: CategoryId | "todos") => void;
}

export default function CategoryTabs({ active, onSelect }: Props) {
  return (
    <div className="relative -mx-4 sm:mx-0">
      <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-2 sm:flex-wrap sm:overflow-visible sm:px-0">
        <button
          type="button"
          onClick={() => onSelect("todos")}
          className={`chip ${active === "todos" ? "chip-active" : ""}`}
        >
          Todos
        </button>
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => onSelect(c.id)}
            className={`chip ${active === c.id ? "chip-active" : ""}`}
          >
            <span aria-hidden>{c.emoji}</span>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}

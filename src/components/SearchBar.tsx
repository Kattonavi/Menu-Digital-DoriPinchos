"use client";

import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-muted" />
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar producto, ingrediente o categoría..."
        className="w-full rounded-full border border-brand-border bg-brand-card/70 py-3.5 pl-12 pr-12 text-sm text-brand-text placeholder:text-brand-muted/70 outline-none transition-all focus:border-brand-red focus:bg-brand-card focus:shadow-glow"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1.5 text-brand-muted transition-colors hover:bg-brand-border hover:text-brand-text"
          aria-label="Limpiar búsqueda"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Flame, Star, ThumbsUp, Maximize2, MessageCircle } from "lucide-react";
import type { Product, ProductBadge } from "@/types/menu";
import { formatCOP } from "@/lib/format";
import { productOrderLink } from "@/lib/whatsapp";

const BADGE_STYLE: Record<
  ProductBadge,
  { className: string; icon: React.ReactNode }
> = {
  Popular: {
    className: "bg-brand-red/15 text-brand-red border-brand-red/30",
    icon: <Star className="h-3 w-3" />,
  },
  Picante: {
    className: "bg-brand-orange/15 text-brand-orange border-brand-orange/30",
    icon: <Flame className="h-3 w-3" />,
  },
  Recomendado: {
    className: "bg-brand-amber/15 text-brand-amber border-brand-amber/30",
    icon: <ThumbsUp className="h-3 w-3" />,
  },
  Grande: {
    className: "bg-white/10 text-white border-white/20",
    icon: <Maximize2 className="h-3 w-3" />,
  },
};

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-brand-border bg-brand-card/70 p-5 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-brand-red/50 hover:shadow-glow"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand-red/10 blur-3xl transition-opacity group-hover:opacity-100" />

      {product.badges && product.badges.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {product.badges.map((b) => {
            const style = BADGE_STYLE[b];
            return (
              <span
                key={b}
                className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${style.className}`}
              >
                {style.icon}
                {b}
              </span>
            );
          })}
        </div>
      )}

      <h3 className="text-lg font-bold leading-tight text-brand-text">
        {product.name}
      </h3>

      {product.description && (
        <p className="mt-2 text-sm leading-relaxed text-brand-muted">
          {product.description}
        </p>
      )}

      <div className="mt-5 flex items-center justify-between gap-3 pt-3">
        <div className="flex flex-col">
          <span className="text-[10px] font-medium uppercase tracking-wider text-brand-muted">
            Precio
          </span>
          <span className="font-display text-2xl tracking-wide text-brand-amber">
            {formatCOP(product.price)}
          </span>
        </div>

        <a
          href={productOrderLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${product.name} por WhatsApp`}
          className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition-all hover:bg-brand-redDark active:scale-95"
        >
          <MessageCircle className="h-4 w-4" />
          Pedir
        </a>
      </div>
    </motion.article>
  );
}

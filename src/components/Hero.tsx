"use client";

import { motion } from "framer-motion";
import { Flame, ChevronDown, MessageCircle, Sparkles } from "lucide-react";
import { BUSINESS } from "@/data/menu.data";
import { generalOrderLink } from "@/lib/whatsapp";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-20 sm:pt-28">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand-red/30 blur-[120px]" />
        <div className="absolute right-0 top-20 h-[280px] w-[280px] rounded-full bg-brand-orange/20 blur-[100px]" />
        <div className="absolute -bottom-10 left-0 h-[220px] w-[220px] rounded-full bg-brand-amber/10 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-fit items-center gap-2 rounded-full border border-brand-border bg-brand-card/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-brand-amber backdrop-blur"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Menú digital
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 text-center font-display text-6xl leading-[0.95] tracking-tight text-balance sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block text-brand-text">{BUSINESS.name}</span>
          <span className="mt-2 block bg-brand-gradient bg-clip-text text-transparent">
            Sabor brutal
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-center text-base text-brand-muted text-balance sm:text-lg"
        >
          {BUSINESS.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={generalOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Pedir por WhatsApp
          </a>
          <a href="#menu" className="btn-secondary w-full sm:w-auto">
            Ver menú
            <ChevronDown className="h-5 w-5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {[
            { label: "Hamburguesas", emoji: "🍔" },
            { label: "Salchipapas", emoji: "🍟" },
            { label: "Doritos", emoji: "🌶️" },
            { label: "Burrilocos", emoji: "🌯" },
          ].map((item, idx) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-brand-border bg-brand-card/60 p-4 backdrop-blur transition-all hover:border-brand-red/60 hover:shadow-card"
            >
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-red/10 blur-2xl transition-opacity group-hover:opacity-100" />
              <div className="text-3xl">{item.emoji}</div>
              <div className="mt-2 text-sm font-semibold text-brand-text">
                {item.label}
              </div>
              <div className="mt-1 inline-flex items-center gap-1 text-xs text-brand-orange">
                <Flame className="h-3 w-3" /> caliente
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

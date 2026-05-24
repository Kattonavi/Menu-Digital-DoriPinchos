"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { generalOrderLink } from "@/lib/whatsapp";

export default function WhatsappButton() {
  return (
    <motion.a
      href={generalOrderLink()}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, type: "spring", stiffness: 220 }}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Pedir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-glow ring-4 ring-brand-red/30 sm:bottom-8 sm:right-8 sm:h-16 sm:w-16"
    >
      <span className="absolute inset-0 animate-pulse-slow rounded-full bg-brand-red/40 blur-md" />
      <MessageCircle className="relative h-6 w-6 sm:h-7 sm:w-7" />
    </motion.a>
  );
}

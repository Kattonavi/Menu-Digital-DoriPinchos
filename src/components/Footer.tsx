import { Flame, MessageCircle } from "lucide-react";
import { BUSINESS } from "@/data/menu.data";
import { generalOrderLink } from "@/lib/whatsapp";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-border bg-brand-bg/80">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
              <Flame className="h-5 w-5" />
            </span>
            <span className="font-display text-2xl tracking-wide text-brand-text">
              {BUSINESS.name}
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-brand-muted">
            {BUSINESS.tagline}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Contacto
          </h4>
          <a
            href={generalOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-brand-text transition-colors hover:text-brand-orange"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp {BUSINESS.whatsappDisplay}
          </a>
        </div>

        <div>
          <h4 className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
            Nota
          </h4>
          <p className="mt-3 text-sm text-brand-muted">
            {BUSINESS.disposableNotice}
          </p>
        </div>
      </div>

      <div className="border-t border-brand-border">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-brand-muted sm:flex-row sm:px-6">
          <span>
            © {year} {BUSINESS.name}. Todos los derechos reservados.
          </span>
          <span>Menú digital · Hecho con sabor</span>
        </div>
      </div>
    </footer>
  );
}

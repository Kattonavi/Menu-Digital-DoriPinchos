import { Bike, Phone, Info } from "lucide-react";
import { BUSINESS } from "@/data/menu.data";
import { generalOrderLink } from "@/lib/whatsapp";

export default function DeliveryInfo() {
  return (
    <section className="relative mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-3xl border border-brand-border bg-brand-card/70 p-8 shadow-card backdrop-blur sm:p-12">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-brand-orange/15 blur-3xl" />

        <div className="relative grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-orange">
              <Bike className="h-3.5 w-3.5" /> Domicilios
            </div>
            <h2 className="mt-4 font-display text-4xl tracking-tight text-brand-text sm:text-5xl">
              Te lo llevamos <br />
              <span className="bg-brand-gradient bg-clip-text text-transparent">
                hasta tu puerta
              </span>
            </h2>
            <p className="mt-3 max-w-md text-sm text-brand-muted sm:text-base">
              Pide tu antojo por WhatsApp y nuestro domiciliario sale en
              minutos. Servicio rápido y caliente.
            </p>

            <a
              href={generalOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS.whatsappDisplay}
            </a>
          </div>

          <div className="space-y-3">
            <InfoCard
              icon={<Bike className="h-5 w-5" />}
              title="Domicilios disponibles"
              text="Cobertura local. Pide directo por WhatsApp."
            />
            <InfoCard
              icon={<Phone className="h-5 w-5" />}
              title="WhatsApp de pedidos"
              text={BUSINESS.whatsappDisplay}
            />
            <InfoCard
              icon={<Info className="h-5 w-5" />}
              title="Importante"
              text={BUSINESS.disposableNotice}
              accent
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  text,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  accent?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border p-4 ${
        accent
          ? "border-brand-amber/40 bg-brand-amber/5"
          : "border-brand-border bg-brand-bg/60"
      }`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          accent ? "bg-brand-amber/15 text-brand-amber" : "bg-brand-red/15 text-brand-red"
        }`}
      >
        {icon}
      </div>
      <div>
        <div className="text-sm font-semibold text-brand-text">{title}</div>
        <div className="mt-0.5 text-sm text-brand-muted">{text}</div>
      </div>
    </div>
  );
}

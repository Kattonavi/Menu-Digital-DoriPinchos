import { BUSINESS } from "@/data/menu.data";

export function buildWhatsappLink(message: string): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
}

export function productOrderLink(productName: string): string {
  return buildWhatsappLink(`Hola, quiero pedir: ${productName}`);
}

export function generalOrderLink(): string {
  return buildWhatsappLink("Hola, quiero hacer un pedido.");
}

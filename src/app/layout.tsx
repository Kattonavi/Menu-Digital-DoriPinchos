import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dripinchos | Menú Digital",
  description:
    "Menú digital de comidas rápidas Dripinchos. Hamburguesas, perros, salchipapas, doritos, arepas, burrilocos, papas locas, pinchos y bebidas.",
  openGraph: {
    title: "Dripinchos | Menú Digital",
    description:
      "Comida rápida con sabor brutal, preparada para antojos serios. Hamburguesas, perros, salchipapas, doritos, arepas y más.",
    type: "website",
    locale: "es_CO",
    siteName: "Dripinchos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dripinchos | Menú Digital",
    description:
      "Comida rápida con sabor brutal, preparada para antojos serios.",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sofía y Sebastián | Nuestra boda",
  description: "Acompáñanos a celebrar nuestra boda el 18 de octubre de 2026 en San Miguel de Allende.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Sofía y Sebastián",
    description: "18 de octubre de 2026 · San Miguel de Allende",
    images: [{ url: "/og-sofia.png", width: 1734, height: 907, alt: "Invitación de boda de Sofía y Sebastián" }],
  },
  twitter: { card: "summary_large_image", images: ["/og-sofia.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}<script src="https://rotfstudio.com/js/invitation-lead.js?v=1" data-invitation="Sofía &amp; Sebastián" /></body></html>;
}

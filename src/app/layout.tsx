import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";
import { Navbar } from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

const META_BASE = "https://designasync.guanet.com"; // IMPORTANTE: Actualizar con la URL real antes de producción

export const metadata: Metadata = {
  metadataBase: new URL(META_BASE),
  title: {
    default: "DesignAsync",
    template: "%s | DesignAsync by Guanet",
  },
  description:
    "Design Async es la plataforma de comunidad de Guanet para diseñadores, desarrolladores y creadores de producto hispanohablantes. Conecta, aprende y crece con los mejores profesionales de Latinoamérica.",
  keywords: [
    "comunidad diseño español",
    "diseñadores hispanohablantes",
    "comunidad UX Latinoamérica",
    "networking diseño tecnología",
    "Guanet",
    "Design Async",
    "comunidad profesional hispana",
    "aprendizaje diseño producto",
  ],
  authors: [{ name: "Guanet", url: "https://guanet.com" }],
  creator: "Guanet",
  publisher: "Guanet",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: META_BASE,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    alternateLocale: ["es_MX", "es_AR", "es_CO"],
    url: META_BASE,
    siteName: "Design Async by Guanet",
    title: "DesignAsync — Comunidad hispanohablante de diseño y tecnología",
    description:
      "Conecta con diseñadores y tecnólogos hispanohablantes. Aprende, colabora y crece en la comunidad de referencia para profesionales latinos.",
    images: [
      {
        url: "/og-image.png", // Reemplazar con imagen real
        width: 1200,
        height: 630,
        alt: "Design Async — Comunidad hispanohablante de diseño y tecnología por Guanet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@guanet",
    creator: "@guanet",
    title: "DesignAsync — Comunidad hispanohablante de diseño y tecnología",
    description:
      "La comunidad de referencia para diseñadores y tecnólogos hispanohablantes. Una plataforma de Guanet.",
    images: ["/og-image.png"],
  },
};

// Schema.org — datos estructurados para motores de búsqueda
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${META_BASE}/#organization`,
      name: "Guanet",
      url: "https://guanet.com",
      logo: { "@type": "ImageObject", url: `${META_BASE}/logo-guanet.png` },
      sameAs: [
        "https://twitter.com/guanet",
        "https://linkedin.com/company/guanet",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${META_BASE}/#website`,
      url: META_BASE,
      name: "Design Async",
      description: "Plataforma de comunidad hispanohablante para diseñadores y tecnólogos",
      publisher: { "@id": `${META_BASE}/#organization` },
      inLanguage: "es",
    },
    {
      "@type": "WebPage",
      "@id": `${META_BASE}/#webpage`,
      url: META_BASE,
      name: "Design Async — Comunidad hispanohablante",
      isPartOf: { "@id": `${META_BASE}/#website` },
      about: { "@id": `${META_BASE}/#organization` },
      description:
        "Design Async conecta diseñadores, desarrolladores y creadores de producto en el mundo hispanohablante.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${inter.variable} ${roboto.variable} antialiased`}
    >
      <head>
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA) }}
        />
      </head>
      <body>
        <ThemeProvider>
          {/* Skip link para accesibilidad — solo visible al navegar con teclado */}
          <a href="#main-content" className="skip-link">
            Saltar al contenido principal
          </a>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
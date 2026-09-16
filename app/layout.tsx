import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import type { Metadata } from "next";
import { Syne, Fragment_Mono, Roboto_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://edoclacostruzioni.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "EDOCLA S.R.L.S. - Impresa Edile Roma",
      description: "Impresa edile a Roma specializzata in ristrutturazioni complete chiavi in mano, costruzioni e impianti certificati.",
      inLanguage: "it-IT",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": ["HomeAndConstructionBusiness", "GeneralContractor"],
      "@id": `${siteUrl}/#organization`,
      name: "EDOCLA S.R.L.S.",
      legalName: "EDOCLA S.R.L.S.",
      alternateName: "EDOCLA Costruzioni e Ristrutturazioni Roma",
      url: siteUrl,
      logo: `${siteUrl}/logo-white-srls.png`,
      image: `${siteUrl}/hero1.png`,
      description:
        "Impresa edile a Roma specializzata in ristrutturazioni complete chiavi in mano, nuove costruzioni, impianti certificati, coperture e finiture.",
      telephone: ["+39 392 533 7257", "+39 334 283 9228"],
      email: "edocla.srls2560@gmail.com",
      vatID: "IT17926131002",
      taxID: "17926131002",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Via della Giustiniana, 301",
        addressLocality: "Roma",
        addressRegion: "RM",
        postalCode: "00189",
        addressCountry: "IT",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.9798,
        longitude: 12.4828,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Roma",
        },
        {
          "@type": "AdministrativeArea",
          name: "Città Metropolitana di Roma Capitale",
        },
        {
          "@type": "AdministrativeArea",
          name: "Lazio",
        },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "07:30",
          closes: "19:30",
        },
      ],
      priceRange: "€€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash, Credit Card, Bank Transfer",
      founder: [
        {
          "@type": "Person",
          name: "Claudio Zenobi",
        },
        {
          "@type": "Person",
          name: "Edoardo Adamo",
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servizi Edili e Ristrutturazioni",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ristrutturazioni Complete Chiavi in Mano",
              description: "Ristrutturazione integrale di appartamenti, ville e locali commerciali a Roma con pratiche edilizie incluse.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Costruzioni e Opere Murarie",
              description: "Nuove costruzioni, pareti divisorie, tamponature e consolidamento strutturale.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Rifacimento Coperture e Tetti Ventilati",
              description: "Impermeabilizzazione tetti, coperture in legno ventilate e isolamento termico ad alta efficienza.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Impianti Certificati a Norma DM 37/08",
              description: "Impianti elettrici, termoidraulici, climatizzazione, caldaie a condensazione e pompe di calore.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Fornitura e Posa Serramenti e Infissi",
              description: "Infissi ad alto isolamento termico e acustico, porte interne e portoni blindati.",
            },
          },
        ],
      },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EDOCLA S.R.L.S. - Impresa Edile e Ristrutturazioni a Roma",
    template: "%s | EDOCLA S.R.L.S.",
  },
  description:
    "Impresa edile a Roma specializzata in ristrutturazioni complete chiavi in mano, nuove costruzioni, impianti termoidraulici ed elettrici certificati, tetti ventilati e serramenti.",
  keywords: [
    "impresa edile roma",
    "ristrutturazioni roma",
    "ristrutturazione appartamento roma",
    "ristrutturazioni chiavi in mano roma",
    "edocla",
    "edocla srls",
    "costruzioni roma",
    "rifacimento tetto roma",
    "tetti ventilati roma",
    "impianti idraulici roma",
    "impianti elettrici roma",
    "serramenti roma",
  ],
  authors: [{ name: "EDOCLA S.R.L.S.", url: siteUrl }],
  creator: "EDOCLA S.R.L.S.",
  publisher: "EDOCLA S.R.L.S.",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteUrl,
    title: "EDOCLA S.R.L.S. - Impresa Edile e Ristrutturazioni a Roma",
    description:
      "Impresa edile a Roma specializzata in ristrutturazioni complete, nuove costruzioni, impianti certificati e coperture. Esperienza sul campo dal 1980.",
    siteName: "EDOCLA S.R.L.S.",
    images: [
      {
        url: "/hero1.png",
        width: 1200,
        height: 630,
        alt: "EDOCLA S.R.L.S. - Costruiamo valore, ristrutturiamo futuro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EDOCLA S.R.L.S. - Impresa Edile e Ristrutturazioni a Roma",
    description:
      "Impresa edile a Roma specializzata in ristrutturazioni complete chiavi in mano, costruzioni e impianti.",
    images: ["/hero1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body
        className={`${syne.variable} ${fragmentMono.variable} ${robotoMono.variable} antialiased flex flex-col min-h-screen font-sans`}
      >
        <Script
          strategy="afterInteractive"
          src="https://cloud.umami.is/script.js"
          data-website-id="19889430-a011-4234-a055-a25c158b853d"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

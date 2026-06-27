import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { portfolio } from "@/data/portfolio";

const { meta, person } = portfolio;

export const metadata: Metadata = {
  metadataBase: new URL(meta.siteUrl),
  title: {
    default: meta.title,
    template: `%s · ${person.name}`,
  },
  description: meta.description,
  keywords: meta.keywords,
  authors: [{ name: person.name }],
  creator: person.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: meta.siteUrl,
    title: meta.title,
    description: meta.description,
    siteName: `${person.name} — Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  // Favicon & app icon are provided by the file-based convention:
  //   app/icon.png  → browser-tab favicon
  //   app/apple-icon.png → iOS home-screen icon
  // Replace those two files to change the tab logo.
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}

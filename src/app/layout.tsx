import type {Metadata} from "next";
import {Inter, JetBrains_Mono} from "next/font/google";
import {Analytics} from "@vercel/analytics/react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import "./globals.css";
import {ClientThemeProvider} from "@/src/components/ClientThemeProvider";
import LoadingScreen from "@/src/components/LoadingScreen";

const readableSans = Inter({
  variable: "--font-geist-sans",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const readableMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://dipongkorroy000.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dipongkor Roy · Full-stack developer",
    template: "%s · Dipongkor Roy",
  },
  description: "Portfolio of Dipongkor Roy — full-stack web development with React, Next.js, Node.js, and TypeScript. Projects, stack, and contact.",
  keywords: ["Dipongkor Roy", "portfolio", "full-stack developer", "React", "Next.js", "TypeScript", "Node.js", "Bangladesh"],
  authors: [{name: "Dipongkor Roy"}],
  creator: "Dipongkor Roy",
  icons: {
    icon: "/brand-d.svg",
    apple: "/brand-d.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Dipongkor Roy",
    title: "Dipongkor Roy · Full-stack developer",
    description: "Full-stack web development with React, Next.js, Node.js, and TypeScript — portfolio, projects, and contact.",
    images: [
      {
        url: "/brand-d.svg",
        width: 512,
        height: 512,
        alt: "Dipongkor Roy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dipongkor Roy · Full-stack developer",
    description: "Full-stack web development with React, Next.js, Node.js, and TypeScript — portfolio, projects, and contact.",
    images: ["/brand-d.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${readableSans.variable} ${readableMono.variable} font-sans text-[15px] md:text-[17px] leading-relaxed tracking-[0.01em] antialiased`}>
        <ClientThemeProvider>
          <LoadingScreen>{children}</LoadingScreen>
        </ClientThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

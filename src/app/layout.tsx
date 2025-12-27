import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import LoadingScreen from "../components/LoadingScreen";
import { ClientThemeProvider } from "../components/ClientThemeProvider";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dipongkor Roy",
  description: "Portfolio webpage",
  icons: "https://i.ibb.co.com/qFF62B5T/D3.png"
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientThemeProvider>
          <LoadingScreen>{children}</LoadingScreen>
        </ClientThemeProvider>
      </body>
    </html>
  );
}

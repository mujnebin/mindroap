import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { RegionProvider } from "@/components/RegionProvider";
const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mindroap | Video Edits That Stand Out",
    template: "%s | Mindroap Editorial Atelier"
  },
  description: "We're the bespoke editing partners behind the world's most ambitious creators. A cinematic approach to viral storytelling and high-retention velocity.",
  openGraph: {
    title: "Mindroap | Architectural Storytelling",
    description: "Bespoke high-retention video editing for massive creators.",
    url: "https://mindroap.com",
    siteName: "Mindroap",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindroap | The Editorial Atelier",
    description: "Bespoke high-retention video editing for massive creators.",
  }
};

import { AtmosphericBackdrop } from "@/components/ui/Atelier/AtmosphericBackdrop";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col relative">
        <AtmosphericBackdrop />
        <RegionProvider>
          {children}
        </RegionProvider>
      </body>
    </html>
  );
}

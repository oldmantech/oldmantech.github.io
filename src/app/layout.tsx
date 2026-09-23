import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans, Syne } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Old Man Tech — retrocomputing portfolio",
  description:
    "Old Man Tech (oldmantech) — portfolio hub for Hackaday Retrocomputing Contest entries: CRT Drive, core memory, Plus/4 FPGA, and op-amp analog computers.",
  openGraph: {
    title: "Old Man Tech — retrocomputing portfolio",
    description:
      "Hackaday Retrocomputing Contest entries from Old Man Tech: CRT Drive and more on the bench.",
    type: "website",
    url: "https://oldmantech.github.io/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${syne.variable} ${plexMono.variable} dark h-full`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}

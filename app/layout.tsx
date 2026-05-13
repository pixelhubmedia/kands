import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "K & S Motors | Car Repairs & Servicing in Mitcham, South London",
  description:
    "Trusted local mechanics in Mitcham CR4. Honest quotes, clear pricing, no work without your approval. Servicing, brakes, diagnostics, MOT prep and more. Call 020 8640 3550.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${dmSerif.variable} ${dmSans.variable} h-full`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}

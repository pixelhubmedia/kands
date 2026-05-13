import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "K & S Motors | Car Mechanic in Mitcham",
  description:
    "Trusted local mechanics in Mitcham, South London. Logbook servicing, brakes, tyres, engine diagnostics, air conditioning and more. Call 020 8640 3550.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}

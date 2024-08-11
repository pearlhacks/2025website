import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";


export const metadata: Metadata = {
  title: "Pearl Hacks",
  description: "Sprout with Pearl Hacks on Feb 15th-16th, 2025!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen font-body font-light flex flex-col items-center bg-background-transition">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}

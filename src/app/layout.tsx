import { Providers } from "@/config/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Cal System Tutorial",
  description: "Tutorial for Calendy Clone by Heath Babb | Jan Marshal - 2024",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} h-screen w-screen antialiased`}>
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </Providers>
      </body>
    </html>
  );
}

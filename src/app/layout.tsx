import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const mortendExtrabold = localFont({
  src: "../../public/fonts/Mortend-Extrabold.otf",
  variable: "--font-mortend-extrabold",
});

const mortendExtraboldOutline = localFont({
  src: "../../public/fonts/Mortend-ExtraboldOutline.otf",
  variable: "--font-mortend-extrabold-outline",
});

const mortendLight = localFont({
  src: "../../public/fonts/Mortend-Light.otf",
  variable: "--font-mortend-light",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unie Storefront",
  description: "Custom Shopify Storefront for UNIE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} ${spaceGrotesk.variable} ${mortendLight.variable} ${mortendExtrabold.variable} ${mortendExtraboldOutline.variable} antialiased blended-background`}
      >
        {children}
      </body>
    </html>
  );
}

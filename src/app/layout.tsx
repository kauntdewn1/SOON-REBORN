import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "FLOW//REBORN",
  description: "Prepare-se para o sistema de sobrevivência definitivo.",
  icons: {
    icon: [
      {
        url: "https://res.cloudinary.com/dgyocpguk/image/upload/v1746323807/favicon_pvncfw.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "https://res.cloudinary.com/dgyocpguk/image/upload/v1746323807/favicon_pvncfw.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: {
      url: "https://res.cloudinary.com/dgyocpguk/image/upload/v1746323807/favicon_pvncfw.png",
      sizes: "180x180",
      type: "image/png",
    },
    shortcut: "https://res.cloudinary.com/dgyocpguk/image/upload/v1746323807/favicon_pvncfw.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  );
}

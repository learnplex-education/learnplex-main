import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://learnplex.org"),
  title: "Learnplex | Student-Powered Open-Source Education Lab",
  description:
    "Learnplex Education is a 501(c)(3) nonprofit lab building open-source learning tools and launching technical careers.",
  keywords: [
    "Learnplex Education",
    "Learnplex",
    "Open Source Lab",
    "UC Berkeley EdTech",
    "Student-Powered Lab",
  ],
  icons: { icon: "/logobigclear.png" },
  openGraph: {
    url: "https://learnplex.org",
    siteName: "Learnplex",
    title: "Learnplex | Student-Powered Open-Source Education Lab",
    description:
      "Learnplex Education is a 501(c)(3) nonprofit lab building open-source learning tools and launching technical careers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learnplex",
      },
    ],
  },
  alternates: {
    canonical: "https://learnplex.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="pt-24">{children}</div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sumexsa.com"),
  title: {
    default: "Free AI Marketing Consultation | sumeXsa",
    template: "%s | sumeXsa"
  },
  description:
    "Book a free AI marketing consultation and receive a customized digital marketing growth plan for your business.",
  openGraph: {
    title: "Free AI Marketing Consultation | sumeXsa",
    description:
      "Discover opportunities to generate more qualified leads and increase sales with a personalized AI marketing strategy.",
    url: "https://sumexsa.com",
    siteName: "sumeXsa",
    images: [
      {
        url: "/logo.png",
        width: 1600,
        height: 985,
        alt: "sumeXsa logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free AI Marketing Consultation | sumeXsa",
    description:
      "Get a customized AI marketing growth plan for your small or medium business.",
    images: ["/logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

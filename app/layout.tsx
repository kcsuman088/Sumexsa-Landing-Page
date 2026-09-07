import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
      <body className={inter.className}>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2600157753757440');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2600157753757440&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}

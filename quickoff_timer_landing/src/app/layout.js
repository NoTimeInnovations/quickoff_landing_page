import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "QuickOffTimers - Boost Your Shopify Sales with Smart Countdown Timers",
    template: "%s | QuickOffTimers"
  },
  description: "The simplest way to add countdown timers to your Shopify store. Create urgency, boost conversions, and increase sales with our 2-tap setup. Product card timers, flash sales, and more.",
  keywords: "Shopify timer app, countdown timer, flash sale, urgency marketing, product card timer, Shopify app store, e-commerce conversion, sales boost",
  authors: [{ name: "QuickOffTimers Team" }],
  creator: "QuickOffTimers",
  publisher: "INNOVIZE NOTIME PVT LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quickofftimers.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quickofftimers.com',
    siteName: 'QuickOffTimers',
    title: 'QuickOffTimers - Boost Your Shopify Sales with Smart Countdown Timers',
    description: 'The simplest way to add countdown timers to your Shopify store. Create urgency, boost conversions, and increase sales with our 2-tap setup.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'QuickOffTimers - Shopify Timer App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickOffTimers - Boost Your Shopify Sales with Smart Countdown Timers',
    description: 'The simplest way to add countdown timers to your Shopify store. Create urgency, boost conversions, and increase sales.',
    images: ['/twitter-image.jpg'],
    creator: '@quickofftimers',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
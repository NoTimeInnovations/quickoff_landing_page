import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

export const metadata = {
  title: 'QuickOffTimers - Boost Your Shopify Sales with Smart Countdown Timers',
  description: 'The simplest way to add countdown timers to your Shopify store. Create urgency, boost conversions, and increase sales with our 2-tap setup. Product card timers, flash sales, and more.',
  keywords: 'Shopify timer app, countdown timer, flash sale, urgency marketing, product card timer, Shopify app store, e-commerce conversion, sales boost',
  authors: [{ name: 'QuickOffTimers Team' }],
  creator: 'QuickOffTimers',
  publisher: 'INNOVIZE NOTIME PVT LTD',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
  alternates: {
    canonical: 'https://quickofftimers.com',
  },
  category: 'technology',
  classification: 'Shopify App',
  other: {
    'application-name': 'QuickOffTimers',
    'apple-mobile-web-app-title': 'QuickOffTimers',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#00f0ff',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#00f0ff',
  },
};

export default function Home() {
  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <ComingSoon />
      </main>
      <Footer />
    </div>
  );
}
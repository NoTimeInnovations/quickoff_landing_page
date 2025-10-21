import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "QuickOffTimers - Boost Your Shopify Sales with Smart Timers",
  description: "Create urgency and drive conversions with product card timers that automatically sync with your Shopify discounts. No complex setup, no coding required.",
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
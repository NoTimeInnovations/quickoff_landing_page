import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';

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
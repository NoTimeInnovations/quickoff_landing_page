import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ComingSoon from '../components/ComingSoon';
import Footer from '../components/Footer';
import LoadingScreen from '../components/LoadingScreen';

const LandingPage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

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
};

export default LandingPage;
import React from 'react';
import { ArrowRight, Clock, Zap, Target } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      padding: '120px 0 80px',
      background: 'var(--bg-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background gradient effect */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(218, 255, 1, 0.03) 0%, transparent 70%)',
        transform: 'translateX(-50%)',
        pointerEvents: 'none'
      }} />
      
      <div className="container">
        <div style={{
          textAlign: 'left',
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--accent-bg)',
            border: '1px solid rgba(218, 255, 1, 0.2)',
            borderRadius: '24px',
            padding: '8px 16px',
            marginBottom: '24px',
            fontSize: '14px',
            fontWeight: '500',
            color: 'var(--accent-primary)'
          }}>
            <Zap size={16} />
            Create Timers in Just 2 Taps
          </div>

          {/* Main Headline */}
          <h1 style={{
            fontSize: '60px',
            fontWeight: '700',
            lineHeight: '1.0',
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '24px'
          }} className="display-lg">
            Boost Your Shopify Sales with{' '}
            <span style={{ color: 'var(--accent-primary)' }}>
              Smart Timers
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: '20px',
            lineHeight: '1.6',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '600px'
          }}>
            Create urgency and drive conversions with product card timers that automatically sync with your Shopify discounts. No complex setup, no coding required.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '64px',
            flexWrap: 'wrap'
          }}>
            <a 
              href="#" 
              className="btn-primary"
              style={{ fontSize: '18px', padding: '20px 40px' }}
            >
              Install from Shopify App Store
              <ArrowRight size={20} />
            </a>
            <a href="#features" className="btn-secondary">
              See Features
            </a>
          </div>

          {/* Stats - Using Maximum Space */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '48px',
            width: '100%',
            maxWidth: '800px'
          }}>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '12px'
              }}>
                2-Tap
              </div>
              <div style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                fontWeight: '500'
              }}>
                Setup Process
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginTop: '8px'
              }}>
                Connect & Create in seconds
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '12px'
              }}>
                Auto-Sync
              </div>
              <div style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                fontWeight: '500'
              }}>
                With Discounts
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginTop: '8px'
              }}>
                Fetches all discount details
              </div>
            </div>
            <div style={{ textAlign: 'center', padding: '24px' }}>
              <div style={{
                fontSize: '48px',
                fontWeight: '700',
                color: 'var(--accent-primary)',
                marginBottom: '12px'
              }}>
                Zero-Code
              </div>
              <div style={{
                fontSize: '16px',
                color: 'var(--text-secondary)',
                fontWeight: '500'
              }}>
                Implementation
              </div>
              <div style={{
                fontSize: '14px',
                color: 'var(--text-muted)',
                marginTop: '8px'
              }}>
                No technical knowledge needed
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Timer Examples */}
        <TimerExamples />
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
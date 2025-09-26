import React from 'react';
import { ArrowRight, Clock, Zap, Target } from 'lucide-react';
import TimerExamples from './TimerExamples';

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
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.03) 0%, transparent 70%)',
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
            border: '1px solid rgba(0, 240, 255, 0.2)',
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

          {/* Stats - Compact One Line */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              background: 'rgba(0, 240, 255, 0.1)',
              padding: '12px 20px',
              borderRadius: '24px',
              border: '1px solid rgba(0, 240, 255, 0.2)'
            }}>
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--accent-primary)'
              }}>
                2-Tap
              </span>
              <span style={{
                fontSize: '14px',
                color: 'var(--text-secondary)'
              }}>
                Setup
              </span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              background: 'rgba(218, 255, 1, 0.1)',
              padding: '12px 20px',
              borderRadius: '24px',
              border: '1px solid rgba(0, 240, 255, 0.2)'
            }}>
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--accent-primary)'
              }}>
                Auto-Sync
              </span>
              <span style={{
                fontSize: '14px',
                color: 'var(--text-secondary)'
              }}>
                Discounts
              </span>
            </div>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              background: 'rgba(218, 255, 1, 0.1)',
              padding: '12px 20px',
              borderRadius: '24px',
              border: '1px solid rgba(0, 240, 255, 0.2)'
            }}>
              <span style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'var(--accent-primary)'
              }}>
                Zero-Code
              </span>
              <span style={{
                fontSize: '14px',
                color: 'var(--text-secondary)'
              }}>
                Required
              </span>
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
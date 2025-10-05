import React from 'react';
import { Clock } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'var(--bg-primary)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999
    }}>
      {/* Custom QuickOff Logo */}
      <div style={{
        position: 'relative',
        marginBottom: '32px'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'var(--accent-primary)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }} className="pulse-glow">
          <Clock size={40} color="var(--bg-primary)" strokeWidth={2.5} />
          
          {/* Animated ring */}
          <div style={{
            position: 'absolute',
            width: '100px',
            height: '100px',
            border: '3px solid var(--accent-primary)',
            borderTop: '3px solid transparent',
            borderRadius: '50%',
            animation: 'spin 1.5s linear infinite'
          }} />
        </div>
      </div>
      
      {/* Brand Name */}
      <h1 style={{
        fontSize: '32px',
        fontWeight: '700',
        color: 'var(--text-primary)',
        margin: '0 0 8px 0',
        letterSpacing: '-0.01em'
      }}>
        QuickOffTimers
      </h1>
      
      {/* Tagline */}
      <p style={{
        fontSize: '16px',
        color: 'var(--text-muted)',
        margin: '0 0 24px 0'
      }}>
        Shopify Timers Made Simple
      </p>
      
      {/* Loading indicator */}
      <div className="loading-spinner" />
    </div>
  );
};

export default LoadingScreen;
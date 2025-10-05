import React from 'react';
import { Clock, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header style={{
      background: 'var(--bg-primary)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: '16px 0',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backdropFilter: 'blur(12px)'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '40px',
              height: '40px',
              background: 'var(--accent-primary)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Clock size={24} color="var(--bg-primary)" strokeWidth={2.5} />
            </div>
            <span style={{
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              letterSpacing: '-0.01em'
            }}>
              QuickOffTimers
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px'
          }} className="desktop-nav">
            <a href="#features" className="btn-ghost">Features</a>
            <a href="#coming-soon" className="btn-ghost">Roadmap</a>
            <a href="#" className="btn-primary">
              Install App
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="btn-ghost mobile-menu-btn"
            style={{ display: 'none' }}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
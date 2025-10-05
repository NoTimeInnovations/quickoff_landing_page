import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Twitter, Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    product: [
      { name: 'Features', href: '/#features' },
      { name: 'Roadmap', href: '/#coming-soon' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
    ]
  };

  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: '80px 0 40px',
      marginTop: '120px'
    }}>
      <div className="container">
        {/* Main Footer Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: '64px',
          marginBottom: '64px'
        }} className="footer-grid">
          {/* Brand Section */}
          <div>
            {/* Logo */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
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

            {/* Description */}
            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: 'var(--text-secondary)',
              marginBottom: '24px',
              maxWidth: '320px'
            }}>
              The simplest way to add countdown timers to your Shopify store. Create urgency, boost conversions, and increase sales with our 2-tap setup.
            </p>

            {/* Install Button */}
            <a href="#" className="btn-primary" style={{
              display: 'inline-flex',
              marginBottom: '24px'
            }}>
              Install from Shopify App Store
              <ExternalLink size={16} />
            </a>

            {/* Social Links */}
            {/* <div style={{
              display: 'flex',
              gap: '12px'
            }}>
              <a 
                href="#" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                className="footer-social-link"
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent-primary)';
                  e.target.style.color = 'var(--bg-primary)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--bg-tertiary)';
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent-primary)';
                  e.target.style.color = 'var(--bg-primary)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--bg-tertiary)';
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '8px',
                  background: 'var(--bg-tertiary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'var(--accent-primary)';
                  e.target.style.color = 'var(--bg-primary)';
                  e.target.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'var(--bg-tertiary)';
                  e.target.style.color = 'var(--text-muted)';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={18} />
              </a>
            </div> */}
          </div>

          {/* Product Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Product
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.product.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  {link.href.startsWith('/') ? (
                    <Link
                      to={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 style={{
              fontSize: '16px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              marginBottom: '16px'
            }}>
              Legal
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.legal.map((link, index) => (
                <li key={index} style={{ marginBottom: '12px' }}>
                  {link.href.startsWith('/') ? (
                    <Link 
                      to={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a 
                      href={link.href}
                      style={{
                        fontSize: '14px',
                        color: 'var(--text-muted)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease'
                      }}
                      onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                      onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-subtle)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div style={{
            fontSize: '14px',
            color: 'var(--text-muted)'
          }}>
            © 2025 QuickOffTimers. All rights reserved.
          </div>
          <div style={{
            fontSize: '14px',
            color: 'var(--text-muted)'
          }}>
            Made with ❤️ for Shopify merchants
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Target, Clock, Zap, Settings, ShoppingCart, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Product Card Timers',
      description: 'Our flagship feature - add countdown timers directly to product cards where customers see them most. Perfect for flash sales and limited offers.',
      highlight: true,
      status: 'Comming Soon'
    },
    {
      icon: Clock,
      title: 'Product Page Timers',
      description: 'Detailed countdown timers on individual product pages. Create urgency at the moment customers are ready to buy.',
      highlight: false,
      status: 'Available'
    },
    {
      icon: Zap,
      title: 'Auto-Discount Sync',
      description: 'Connect your Shopify discounts and let QuickOff automatically fetch all details. Create timers in just 2 taps without manual setup.',
      highlight: true,
      status: 'Available'
    },
    {
      icon: Settings,
      title: 'Zero-Code Setup',
      description: 'No technical knowledge required. Our intuitive interface makes timer creation as simple as point and click.',
      highlight: false,
      status: 'Available'
    },
    {
      icon: BarChart3,
      title: 'Smart Analytics',
      description: 'Track timer performance and conversion rates. See which timers drive the most sales and optimize accordingly.',
      highlight: false,
      status: 'Available'
    },
    {
      icon: ShoppingCart,
      title: 'Multiple Timer Types',
      description: 'From product cards to checkout pages, place timers where they have maximum impact on your conversion funnel.',
      highlight: false,
      status: 'Available'
    }
  ];

  return (
    <section id="features" style={{
      padding: '120px 0 80px',
      background: 'var(--bg-primary)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '100px'
        }}>
          <h2 style={{
            fontSize: '56px',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            letterSpacing: '-0.015em'
          }} className="display-md">
            Everything You Need to Drive Sales
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Powerful features designed specifically for Shopify stores. Create urgency, boost conversions, and increase revenue with smart timer placement.
          </p>
        </div>

        {/* Features Grid - Maximum Space Usage */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '40px',
          marginBottom: '120px'
        }}>
          {features.map((feature, index) => (
            <div key={index} style={{
              background: 'var(--bg-secondary)',
              border: feature.highlight ? '2px solid var(--accent-primary)' : '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '48px 40px',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '280px'
            }} className="hover-lift">
              {/* Signature top accent border for highlighted features */}
              {feature.highlight && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'var(--accent-primary)'
                }} />
              )}

              {/* Feature Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '32px'
              }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  background: feature.highlight ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <feature.icon 
                    size={36} 
                    color={feature.highlight ? 'var(--bg-primary)' : 'var(--accent-primary)'} 
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px'
                  }}>
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      margin: '0'
                    }}>
                      {feature.title}
                    </h3>
                    {feature.highlight && (
                      <span style={{
                        background: 'var(--accent-primary)',
                        color: 'var(--bg-primary)',
                        fontSize: '12px',
                        fontWeight: '600',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        textTransform: 'uppercase'
                      }}>
                        Featured
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: 'var(--accent-primary)',
                    fontWeight: '600'
                  }}>
                    {feature.status}
                  </div>
                </div>
              </div>

              {/* Feature Description */}
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: 'var(--text-secondary)',
                margin: '0'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action - Expanded */}
        <div style={{
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          border: '2px solid var(--border-subtle)',
          borderRadius: '20px',
          padding: '80px 48px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'var(--accent-primary)'
          }} />

          <h3 style={{
            fontSize: '40px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '24px',
            letterSpacing: '-0.01em'
          }}>
            Ready to Boost Your Sales?
          </h3>
          <p style={{
            fontSize: '20px',
            color: 'var(--text-secondary)',
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px auto',
            lineHeight: '1.6'
          }}>
            Join thousands of Shopify stores using QuickOff to create urgency and drive more conversions. Start your 7-day free trial today.
          </p>
          <a href="#" className="btn-primary" style={{
            fontSize: '20px',
            padding: '24px 48px'
          }}>
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;

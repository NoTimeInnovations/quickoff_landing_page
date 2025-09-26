import React from 'react';
import { Target, Clock, Zap, Settings, ShoppingCart, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Target,
      title: 'Product Card Timers',
      description: 'Our flagship feature - add countdown timers directly to product cards where customers see them most. Perfect for flash sales and limited offers.',
      highlight: true,
      status: 'Available'
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
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'var(--text-primary)',
            marginBottom: '16px',
            letterSpacing: '-0.015em'
          }} className="display-md">
            Everything You Need to Drive Sales
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Powerful features designed specifically for Shopify stores. Create urgency, boost conversions, and increase revenue with smart timer placement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="card-grid-3" style={{ marginBottom: '80px' }}>
          {features.map((feature, index) => (
            <div key={index} className="feature-card animate-fade-in">
              {/* Feature Icon */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: feature.highlight ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <feature.icon 
                    size={28} 
                    color={feature.highlight ? 'var(--bg-primary)' : 'var(--accent-primary)'} 
                    strokeWidth={2}
                  />
                </div>
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    marginBottom: '4px'
                  }}>
                    <h3 style={{
                      fontSize: '20px',
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
                        fontSize: '10px',
                        fontWeight: '600',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        textTransform: 'uppercase'
                      }}>
                        Featured
                      </span>
                    )}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'var(--accent-primary)',
                    fontWeight: '500'
                  }}>
                    {feature.status}
                  </div>
                </div>
              </div>

              {/* Feature Description */}
              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                margin: '0'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call-to-Action */}
        <div style={{
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '48px 32px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background accent */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'var(--accent-primary)'
          }} />

          <h3 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '16px',
            letterSpacing: '-0.01em'
          }}>
            Ready to Boost Your Sales?
          </h3>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px auto'
          }}>
            Join thousands of Shopify stores using QuickOff to create urgency and drive more conversions.
          </p>
          <a href="#" className="btn-primary" style={{
            fontSize: '18px',
            padding: '20px 40px'
          }}>
            Get Started Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
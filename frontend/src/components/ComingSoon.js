import React from 'react';
import { Compass, ShoppingBag, BarChart, Sparkles } from 'lucide-react';

const ComingSoon = () => {
  const upcomingFeatures = [
    {
      icon: Compass,
      title: 'Top & Bottom Page Timers',
      description: 'Sticky countdown timers that follow customers as they browse. Perfect for site-wide sales and promotional events.',
      timeline: 'Coming Q2 2025',
      priority: 'high'
    },
    {
      icon: ShoppingBag,
      title: 'Cart Countdown Timers',
      description: 'Create urgency in the shopping cart with abandon recovery timers. Reduce cart abandonment and boost checkout completion.',
      timeline: 'Coming Q2 2025',
      priority: 'high'
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics Dashboard',
      description: 'Deep insights into timer performance, A/B testing capabilities, and conversion optimization recommendations.',
      timeline: 'Coming Q3 2025',
      priority: 'medium'
    },
    {
      icon: Sparkles,
      title: 'Smart Timer AI',
      description: 'AI-powered timer optimization that automatically adjusts timing and placement for maximum conversion impact.',
      timeline: 'Coming Q4 2025',
      priority: 'medium'
    }
  ];

  return (
    <section id="coming-soon" style={{
      padding: '120px 0',
      background: 'var(--bg-primary)',
      position: 'relative'
    }}>
      <div className="container">
        {/* Section Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
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
            <Sparkles size={16} />
            Product Roadmap
          </div>

          <h2 style={{
            fontSize: '48px',
            fontWeight: '700',
            lineHeight: '1.1',
            color: 'var(--text-primary)',
            marginBottom: '16px',
            letterSpacing: '-0.015em'
          }} className="display-md">
            What's Coming Next
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We're constantly innovating to bring you more powerful ways to create urgency and drive conversions. Here's what's on the horizon.
          </p>
        </div>

        {/* Upcoming Features Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {upcomingFeatures.map((feature, index) => (
            <div key={index} style={{
              background: 'var(--bg-secondary)',
              border: feature.priority === 'high' ? '1px solid rgba(0, 240, 255, 0.3)' : '1px solid var(--border-subtle)',
              borderRadius: '16px',
              padding: '32px',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }} className="hover-lift">
              {/* Priority indicator */}
              {feature.priority === 'high' && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'var(--accent-primary)'
                }} />
              )}

              {/* Coming Soon Badge */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: feature.priority === 'high' ? 'var(--accent-primary)' : 'var(--bg-tertiary)',
                color: feature.priority === 'high' ? 'var(--bg-primary)' : 'var(--text-muted)',
                fontSize: '10px',
                fontWeight: '600',
                padding: '4px 8px',
                borderRadius: '6px',
                textTransform: 'uppercase'
              }}>
                {feature.priority === 'high' ? 'Priority' : 'Planned'}
              </div>

              {/* Feature Icon */}
              <div style={{
                width: '56px',
                height: '56px',
                background: feature.priority === 'high' ? 'var(--accent-bg)' : 'var(--bg-tertiary)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <feature.icon 
                  size={28} 
                  color={feature.priority === 'high' ? 'var(--accent-primary)' : 'var(--text-muted)'} 
                  strokeWidth={2}
                />
              </div>

              {/* Feature Content */}
              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: 'var(--text-primary)',
                marginBottom: '12px'
              }}>
                {feature.title}
              </h3>

              <p style={{
                fontSize: '16px',
                lineHeight: '1.6',
                color: 'var(--text-secondary)',
                marginBottom: '16px'
              }}>
                {feature.description}
              </p>

              <div style={{
                fontSize: '14px',
                color: feature.priority === 'high' ? 'var(--accent-primary)' : 'var(--text-muted)',
                fontWeight: '500'
              }}>
                {feature.timeline}
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div style={{
          textAlign: 'center',
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '48px 32px',
          position: 'relative'
        }}>
          <h3 style={{
            fontSize: '24px',
            fontWeight: '600',
            color: 'var(--text-primary)',
            marginBottom: '16px'
          }}>
            Stay Updated on New Features
          </h3>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-secondary)',
            marginBottom: '32px',
            maxWidth: '400px',
            margin: '0 auto 32px auto'
          }}>
            Be the first to know when new timer types and features are released.
          </p>
          
          <div style={{
            display: 'flex',
            gap: '12px',
            maxWidth: '400px',
            margin: '0 auto',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <input 
              type="email" 
              placeholder="Enter your email"
              style={{
                flex: 1,
                minWidth: '200px',
                background: 'var(--bg-tertiary)',
                border: '2px solid var(--border-primary)',
                borderRadius: '12px',
                padding: '16px 20px',
                fontSize: '16px',
                color: 'var(--text-primary)',
                transition: 'all 0.2s ease'
              }}
              onFocus={(e) => {
                e.target.style.borderColor = 'var(--accent-primary)';
                e.target.style.boxShadow = '0 0 0 4px rgba(0, 240, 255, 0.1)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'var(--border-primary)';
                e.target.style.boxShadow = 'none';
              }}
            />
            <button className="btn-primary">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
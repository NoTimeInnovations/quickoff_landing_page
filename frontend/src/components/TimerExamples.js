import React, { useState, useEffect } from 'react';
import { Monitor, CreditCard, Star } from 'lucide-react';

const TimerExamples = () => {
  const [activeExample, setActiveExample] = useState('product-page');
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 45 });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer when it reaches zero
          hours = 23;
          minutes = 59;
          seconds = 45;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time) => String(time).padStart(2, '0');

  const TimerDisplay = ({ size = 'normal' }) => (
    <div style={{
      background: 'var(--bg-primary)',
      borderRadius: '12px',
      padding: size === 'small' ? '12px' : '20px',
      textAlign: 'center',
      border: '1px solid var(--accent-primary)',
      boxShadow: '0 0 20px rgba(218, 255, 1, 0.2)'
    }}>
      <div style={{
        fontSize: size === 'small' ? '10px' : '14px',
        color: 'var(--text-muted)',
        marginBottom: size === 'small' ? '4px' : '8px',
        fontWeight: '500'
      }}>
        🔥 Flash Sale Ends In
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: size === 'small' ? '6px' : '12px',
        marginBottom: size === 'small' ? '6px' : '12px'
      }}>
        {[
          { value: formatTime(countdown.hours), label: 'HRS' },
          { value: formatTime(countdown.minutes), label: 'MIN' },
          { value: formatTime(countdown.seconds), label: 'SEC' }
        ].map((item, index) => (
          <div key={index} style={{
            background: 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            borderRadius: '6px',
            padding: size === 'small' ? '6px 8px' : '10px 12px',
            fontSize: size === 'small' ? '14px' : '20px',
            fontWeight: '700',
            minWidth: size === 'small' ? '32px' : '50px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <div>{item.value}</div>
            <div style={{
              fontSize: size === 'small' ? '8px' : '10px',
              fontWeight: '500',
              marginTop: '2px',
              opacity: '0.8'
            }}>
              {item.label}
            </div>
          </div>
        ))}
      </div>
      <div style={{
        fontSize: size === 'small' ? '8px' : '10px',
        color: 'var(--accent-primary)',
        fontWeight: '600'
      }}>
        50% OFF Everything!
      </div>
    </div>
  );

  const CompactTimer = () => (
    <div style={{
      background: 'rgba(0, 0, 0, 0.8)',
      borderRadius: '20px',
      padding: '6px 12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      border: '1px solid var(--accent-primary)',
      backdropFilter: 'blur(8px)'
    }}>
      <span style={{
        fontSize: '10px',
        color: 'var(--accent-primary)',
        fontWeight: '600'
      }}>
        🔥
      </span>
      <div style={{
        display: 'flex',
        gap: '4px',
        alignItems: 'center'
      }}>
        {[
          formatTime(countdown.hours),
          formatTime(countdown.minutes),
          formatTime(countdown.seconds)
        ].map((value, index) => (
          <React.Fragment key={index}>
            <span style={{
              background: 'var(--accent-primary)',
              color: 'var(--bg-primary)',
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '12px',
              fontWeight: '700',
              minWidth: '24px',
              textAlign: 'center'
            }}>
              {value}
            </span>
            {index < 2 && (
              <span style={{
                color: 'var(--text-muted)',
                fontSize: '10px'
              }}>
                :
              </span>
            )}
          </React.Fragment>
        ))}
      </div>
      <span style={{
        fontSize: '9px',
        color: 'var(--accent-primary)',
        fontWeight: '600'
      }}>
        50% OFF
      </span>
    </div>
  );

  return (
    <div style={{
      marginTop: '80px',
      width: '100%'
    }}>
      {/* Example Selector */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        marginBottom: '40px'
      }}>
        <button
          onClick={() => setActiveExample('product-page')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: activeExample === 'product-page' ? 'var(--accent-primary)' : 'var(--bg-secondary)',
            color: activeExample === 'product-page' ? 'var(--bg-primary)' : 'var(--text-primary)',
            border: activeExample === 'product-page' ? 'none' : '2px solid var(--border-primary)',
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          className={activeExample === 'product-page' ? '' : 'btn-secondary'}
        >
          <Monitor size={20} />
          Product Page Timer
        </button>
        <button
          onClick={() => setActiveExample('product-card')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: activeExample === 'product-card' ? 'var(--accent-primary)' : 'var(--bg-secondary)',
            color: activeExample === 'product-card' ? 'var(--bg-primary)' : 'var(--text-primary)',
            border: activeExample === 'product-card' ? 'none' : '2px solid var(--border-primary)',
            borderRadius: '12px',
            padding: '16px 24px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          className={activeExample === 'product-card' ? '' : 'btn-secondary'}
        >
          <CreditCard size={20} />
          Product Card Timer
        </button>
      </div>

      {/* Product Page Example */}
      {activeExample === 'product-page' && (
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }} className="animate-fade-in">
          {/* Page Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0'
            }}>
              Product Page Timer
            </h3>
            <div style={{
              background: 'var(--accent-primary)',
              color: 'var(--bg-primary)',
              fontSize: '12px',
              fontWeight: '600',
              padding: '4px 8px',
              borderRadius: '6px'
            }}>
              LIVE DEMO
            </div>
          </div>

          {/* Simulated Product Page Layout */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            alignItems: 'start'
          }}>
            {/* Product Image Area */}
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
                borderRadius: '12px',
                height: '300px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: 'var(--bg-primary)',
                  textAlign: 'center'
                }}>
                  The Multi-managed<br />Snowboard
                </div>
              </div>
            </div>

            {/* Product Info Area */}
            <div>
              <h1 style={{
                fontSize: '32px',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '8px'
              }}>
                The Multi-managed Snowboard
              </h1>
              <div style={{
                fontSize: '16px',
                color: 'var(--text-muted)',
                marginBottom: '16px'
              }}>
                Multi-managed Vendor
              </div>

              {/* Timer Placement Area - RED MARKED AREA EQUIVALENT */}
              <div style={{
                marginBottom: '24px',
                padding: '4px',
                border: '2px dashed var(--accent-primary)',
                borderRadius: '8px',
                background: 'rgba(218, 255, 1, 0.05)'
              }}>
                <TimerDisplay />
              </div>

              <div style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '24px'
              }}>
                Rs. 629.95
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
              }}>
                <button style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--border-primary)',
                  borderRadius: '8px',
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Add to cart
                </button>
                <button style={{
                  background: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--bg-primary)',
                  borderRadius: '8px',
                  padding: '16px',
                  fontSize: '16px',
                  fontWeight: '500',
                  cursor: 'pointer'
                }}>
                  Buy it now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Product Card Example */}
      {activeExample === 'product-card' && (
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '16px',
          padding: '40px',
          maxWidth: '900px',
          margin: '0 auto',
          position: 'relative'
        }} className="animate-fade-in">
          {/* Section Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
            paddingBottom: '16px',
            borderBottom: '1px solid var(--border-subtle)'
          }}>
            <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              color: 'var(--text-primary)',
              margin: '0'
            }}>
              Product Card Timer - Our Signature Feature
            </h3>
            <div style={{
              background: 'var(--accent-primary)',
              color: 'var(--bg-primary)',
              fontSize: '12px',
              fontWeight: '600',
              padding: '4px 8px',
              borderRadius: '6px'
            }}>
              FEATURED
            </div>
          </div>

          {/* Product Cards Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            {/* Product Card with Timer */}
            <div style={{
              background: 'var(--bg-tertiary)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 0 20px rgba(218, 255, 1, 0.2)',
              position: 'relative'
            }}>
              {/* Timer at top of card */}
              <div style={{ padding: '12px 12px 0 12px' }}>
                <TimerDisplay size="small" />
              </div>

              {/* Product Image */}
              <div style={{
                background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
                height: '200px',
                margin: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.7)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Star size={16} color="#fff" />
                </div>
              </div>

              {/* Product Info */}
              <div style={{ padding: '0 16px 16px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  The Multi-managed Snowboard
                </h4>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'var(--accent-primary)',
                  marginBottom: '12px'
                }}>
                  Rs. 629.95
                </div>
                <button style={{
                  width: '100%',
                  background: 'var(--accent-primary)',
                  color: 'var(--bg-primary)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}>
                  Quick Add to Cart
                </button>
              </div>
            </div>

            {/* Regular Product Card for comparison */}
            <div style={{
              background: 'var(--bg-tertiary)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              opacity: '0.6'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
                height: '200px',
                margin: '12px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '24px'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                  background: 'rgba(0,0,0,0.7)',
                  borderRadius: '50%',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Star size={16} color="#fff" />
                </div>
              </div>
              <div style={{ padding: '0 16px 16px' }}>
                <h4 style={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: 'var(--text-muted)',
                  marginBottom: '8px',
                  lineHeight: '1.3'
                }}>
                  Regular Product Card
                </h4>
                <div style={{
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'var(--text-muted)',
                  marginBottom: '12px'
                }}>
                  Rs. 499.95
                </div>
                <button style={{
                  width: '100%',
                  background: 'var(--border-primary)',
                  color: 'var(--text-muted)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '12px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'not-allowed'
                }}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Highlight Text */}
          <div style={{
            textAlign: 'center',
            marginTop: '24px',
            padding: '16px',
            background: 'rgba(218, 255, 1, 0.1)',
            borderRadius: '12px',
            border: '1px solid rgba(218, 255, 1, 0.2)'
          }}>
            <div style={{
              fontSize: '16px',
              color: 'var(--accent-primary)',
              fontWeight: '600',
              marginBottom: '4px'
            }}>
              ⚡ See the difference?
            </div>
            <div style={{
              fontSize: '14px',
              color: 'var(--text-secondary)'
            }}>
              Product cards with timers grab attention and create urgency where customers browse most
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimerExamples;
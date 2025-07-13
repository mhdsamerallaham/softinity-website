import React from 'react';

const Loading = ({ size = 'large', text = 'Loading...' }) => {
  const sizeClass = {
    small: 'spinner-border-sm',
    medium: '',
    large: 'spinner-border-lg'
  };

  return (
    <div className="loading-container d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '50vh' }}>
      {/* Softinity Logo Spinner */}
      <div className="softinity-spinner mb-3">
        <div 
          className="spinner-logo"
          style={{
            width: '60px',
            height: '60px',
            border: '4px solid var(--bg-tertiary)',
            borderTop: '4px solid var(--primary-green)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            position: 'relative'
          }}
        >
          <div 
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              color: 'var(--primary-green)',
              fontSize: '1.2rem',
              fontFamily: '"Fira Code", monospace',
              fontWeight: 'bold'
            }}
          >
            &lt; /&gt;
          </div>
        </div>
      </div>
      
      {/* Loading Text */}
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', margin: 0 }}>
        {text}
      </p>
      
      {/* Progress Dots */}
      <div className="loading-dots mt-2">
        <span className="dot" style={{ 
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--primary-green)',
          margin: '0 2px',
          animation: 'loadingDots 1.4s ease-in-out infinite both',
          animationDelay: '0s'
        }}></span>
        <span className="dot" style={{ 
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--primary-green)',
          margin: '0 2px',
          animation: 'loadingDots 1.4s ease-in-out infinite both',
          animationDelay: '0.2s'
        }}></span>
        <span className="dot" style={{ 
          display: 'inline-block',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'var(--primary-green)',
          margin: '0 2px',
          animation: 'loadingDots 1.4s ease-in-out infinite both',
          animationDelay: '0.4s'
        }}></span>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes loadingDots {
          0%, 80%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
import React, { useState, useEffect } from 'react';

const PageTransition = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div 
        className="page-transition-loader"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--bg-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999
        }}
      >
        <div className="loader-content text-center">
          <div 
            style={{
              width: '50px',
              height: '50px',
              border: '3px solid var(--bg-tertiary)',
              borderTop: '3px solid var(--primary-green)',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite',
              margin: '0 auto 1rem'
            }}
          ></div>
          <div 
            style={{
              color: 'var(--primary-green)',
              fontFamily: '"Fira Code", monospace',
              fontSize: '1.2rem'
            }}
          >
            &lt; softinity /&gt;
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className={`page-content ${isVisible ? 'page-enter-active' : 'page-enter'}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'all 0.5s ease-out'
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
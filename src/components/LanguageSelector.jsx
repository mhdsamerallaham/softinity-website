// components/LanguageSelector.jsx - Fixed Version with Persistent Language Support
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'react-bootstrap';
import { 
  changeLanguage, 
  getCurrentLanguage, 
  getAvailableLanguages,
  getLanguageDisplayName,
  getLanguageFlag,
  isRTL 
} from '../i18n';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(getCurrentLanguage());
  const [isChanging, setIsChanging] = useState(false);
  
  // Available languages
  const availableLanguages = getAvailableLanguages();
  
  // Update current language when i18n language changes
  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLang(lng);
      setIsChanging(false);
    };
    
    i18n.on('languageChanged', handleLanguageChange);
    
    // Cleanup
    return () => {
      i18n.off('languageChanged', handleLanguageChange);
    };
  }, [i18n]);
  
  // Handle language change
  const handleLanguageChange = async (langCode) => {
    if (langCode === currentLang || isChanging) return;
    
    setIsChanging(true);
    
    try {
      // Change language
      await changeLanguage(langCode);
      
      // Update state
      setCurrentLang(langCode);
      
      // Show success message (optional)
      if (process.env.NODE_ENV === 'development') {
        console.log(`✅ Language successfully changed to: ${getLanguageDisplayName(langCode)}`);
      }
      
      // Small delay to show loading state
      setTimeout(() => {
        setIsChanging(false);
      }, 300);
      
    } catch (error) {
      console.error('❌ Error changing language:', error);
      setIsChanging(false);
    }
  };
  
  // Custom toggle component
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <button
      ref={ref}
      onClick={onClick}
      className="btn btn-outline-light language-toggle"
      style={{
        border: '1px solid rgba(100, 243, 176, 0.3)',
        borderRadius: '8px',
        padding: '8px 16px',
        background: 'transparent',
        color: 'var(--text-primary)',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        minWidth: '120px',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.target.style.borderColor = 'var(--primary-green)';
        e.target.style.background = 'rgba(100, 243, 176, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.target.style.borderColor = 'rgba(100, 243, 176, 0.3)';
        e.target.style.background = 'transparent';
      }}
      disabled={isChanging}
    >
      {children}
    </button>
  ));
  
  CustomToggle.displayName = 'CustomToggle';
  
  return (
    <div className="language-selector">
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          {isChanging ? (
            <>
              <span 
                className="spinner-border spinner-border-sm" 
                style={{ width: '16px', height: '16px' }}
                role="status"
                aria-hidden="true"
              />
              <span>Loading...</span>
            </>
          ) : (
            <>
              <span style={{ fontSize: '1.1rem' }}>
                {getLanguageFlag(currentLang)}
              </span>
              <span style={{ fontWeight: '500' }}>
                {getLanguageDisplayName(currentLang)}
              </span>
              <i 
                className="fas fa-chevron-down" 
                style={{ 
                  fontSize: '0.8rem',
                  transition: 'transform 0.3s ease'
                }}
              />
            </>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu 
          className="language-dropdown"
          style={{
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--primary-green)',
            borderRadius: '12px',
            padding: '8px',
            minWidth: '140px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            marginTop: '8px'
          }}
        >
          {availableLanguages.map((langCode) => {
            const isActive = langCode === currentLang;
            const isRtl = isRTL(langCode);
            
            return (
              <Dropdown.Item
                key={langCode}
                onClick={() => handleLanguageChange(langCode)}
                className={`language-option ${isActive ? 'active' : ''}`}
                style={{
                  color: isActive ? 'white' : 'var(--text-primary)',
                  background: isActive ? 'var(--primary-purple)' : 'transparent',
                  borderRadius: '8px',
                  padding: '10px 16px',
                  margin: '2px 0',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  cursor: 'pointer',
                  border: 'none',
                  direction: isRtl ? 'rtl' : 'ltr',
                  textAlign: isRtl ? 'right' : 'left'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.background = 'var(--primary-green)';
                    e.target.style.color = 'var(--bg-primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.background = 'transparent';
                    e.target.style.color = 'var(--text-primary)';
                  }
                }}
                disabled={isChanging}
              >
                <span style={{ fontSize: '1.1rem' }}>
                  {getLanguageFlag(langCode)}
                </span>
                <span style={{ 
                  fontWeight: isActive ? 'bold' : '500',
                  flex: 1
                }}>
                  {getLanguageDisplayName(langCode)}
                </span>
                {isActive && (
                  <i 
                    className="fas fa-check" 
                    style={{ 
                      fontSize: '0.9rem',
                      color: 'white'
                    }}
                  />
                )}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
      
      {/* Language indicator for screen readers */}
      <span className="sr-only">
        Current language: {getLanguageDisplayName(currentLang)}
      </span>
    </div>
  );
};

export default LanguageSelector;
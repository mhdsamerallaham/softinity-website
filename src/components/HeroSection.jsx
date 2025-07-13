import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="hero-content">
            <div className="fade-in-up">
              <h1 className="hero-title">
                <span style={{
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: '"Fira Code", "Courier New", monospace'
                }}>
                  &lt; softinity &gt;
                </span>
                <br />
                {t('hero.title') || 'Welcome to Softinity'}
              </h1>
              
              <p className="hero-subtitle">
                {t('hero.subtitle') || 'We create innovative digital solutions that drive your business forward'}
              </p>
              
              <p className="hero-description">
                {t('hero.description') || 'Smart solutions that code the future with cutting-edge web development and AI-driven innovations'}
              </p>
              
              <div className="hero-buttons">
                <Link to="/contact">
                  <Button size="lg" className="btn-primary me-3 mb-3">
                    {t('hero.cta') || t('common.getStarted') || 'Get Started'}
                  </Button>
                </Link>
                
                <Link to="/services">
                  <Button variant="outline-primary" size="lg" className="mb-3">
                    {t('hero.learnMore') || t('common.learnMore') || 'Learn More'}
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="hero-animation">
              {/* Animated Code Block */}
              <div className="code-animation p-4">
                <div className="code-text mb-3" style={{ fontSize: '1.2rem' }}>
                  <div style={{ color: 'var(--primary-purple)' }}>
                    const <span style={{ color: 'var(--primary-green)' }}>softinity</span> = {'{'} 
                  </div>
                  <div style={{ marginLeft: '2rem', color: 'var(--text-secondary)' }}>
                    innovation: <span style={{ color: 'var(--primary-green)' }}>'unlimited'</span>,
                  </div>
                  <div style={{ marginLeft: '2rem', color: 'var(--text-secondary)' }}>
                    solutions: <span style={{ color: 'var(--primary-green)' }}>'cutting-edge'</span>,
                  </div>
                  <div style={{ marginLeft: '2rem', color: 'var(--text-secondary)' }}>
                    future: <span style={{ color: 'var(--primary-green)' }}>'now'</span>
                  </div>
                  <div style={{ color: 'var(--primary-purple)' }}>
                    {'}'};
                  </div>
                </div>
                
                {/* Animated Elements */}
                <div className="d-flex justify-content-around mt-5">
                  <div className="pulse-animation">
                    <div className="tech-icon" style={{ 
                      width: '80px', 
                      height: '80px', 
                      background: 'var(--gradient-primary)', 
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      🌐
                    </div>
                    <p className="mt-2 small text-muted">
                      {t('services.web_dev.title') || 'Web Dev'}
                    </p>
                  </div>
                  
                  <div className="pulse-animation" style={{ animationDelay: '0.5s' }}>
                    <div className="tech-icon" style={{ 
                      width: '80px', 
                      height: '80px', 
                      background: 'var(--gradient-secondary)', 
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      🤖
                    </div>
                    <p className="mt-2 small text-muted">
                      {t('services.data_ai.title') || 'AI & Data'}
                    </p>
                  </div>
                  
                  <div className="pulse-animation" style={{ animationDelay: '1s' }}>
                    <div className="tech-icon" style={{ 
                      width: '80px', 
                      height: '80px', 
                      background: 'var(--gradient-primary)', 
                      borderRadius: '15px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2rem'
                    }}>
                      📊
                    </div>
                    <p className="mt-2 small text-muted">
                      {t('home.services.analytics.title') || 'Analytics'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <div className="not-found-page">
      <Container>
        <Row className="min-vh-100 align-items-center justify-content-center text-center">
          <Col lg={8}>
            {/* 404 Animation */}
            <div className="error-animation mb-5">
              <div 
                style={{
                  fontSize: '8rem',
                  fontWeight: 'bold',
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontFamily: '"Fira Code", monospace',
                  lineHeight: '1',
                  marginBottom: '2rem'
                }}
              >
                404
              </div>
              
              {/* Code Error Visualization */}
              <div 
                className="code-error mx-auto mb-4"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '10px',
                  padding: '2rem',
                  maxWidth: '500px',
                  fontFamily: '"Fira Code", monospace',
                  textAlign: 'left'
                }}
              >
                <div style={{ color: 'var(--primary-purple)' }}>
                  function <span style={{ color: 'var(--primary-green)' }}>findPage</span>() {'{'}
                </div>
                <div style={{ marginLeft: '2rem', color: 'var(--text-secondary)' }}>
                  const page = routes.find(url);
                </div>
                <div style={{ marginLeft: '2rem', color: 'var(--text-secondary)' }}>
                  if (!page) {'{'}
                </div>
                <div style={{ marginLeft: '4rem', color: '#ff6b6b' }}>
                  throw new Error('Page not found');
                </div>
                <div style={{ marginLeft: '2rem', color: 'var(--text-secondary)' }}>
                  {'}'}
                </div>
                <div style={{ color: 'var(--primary-purple)' }}>
                  {'}'}
                </div>
              </div>
            </div>

            {/* Error Message */}
            <h1 className="display-5 mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('error.404.title', 'Oops! Page Not Found')}
            </h1>
            
            <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
              {t('error.404.description', 'The page you\'re looking for seems to have been moved, deleted, or doesn\'t exist.')}
            </p>

            {/* Navigation Options */}
            <div className="error-actions">
              <Link to="/" className="me-3">
                <Button size="lg" className="btn-primary">
                  <i className="fas fa-home me-2"></i>
                  {t('error.404.go_home', 'Go to Homepage')}
                </Button>
              </Link>
              
              <Button 
                variant="outline-primary" 
                size="lg" 
                onClick={() => window.history.back()}
              >
                <i className="fas fa-arrow-left me-2"></i>
                {t('error.404.go_back', 'Go Back')}
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="helpful-links mt-5">
              <p style={{ color: 'var(--text-muted)' }}>
                {t('error.404.suggestions', 'You might be looking for:')}
              </p>
              <div className="link-buttons">
                <Link to="/about" className="me-3">
                  <Button variant="link" style={{ color: 'var(--primary-green)' }}>
                    {t('nav.about', 'About Us')}
                  </Button>
                </Link>
                <Link to="/services" className="me-3">
                  <Button variant="link" style={{ color: 'var(--primary-green)' }}>
                    {t('nav.services', 'Our Services')}
                  </Button>
                </Link>
                <Link to="/projects" className="me-3">
                  <Button variant="link" style={{ color: 'var(--primary-green)' }}>
                    {t('nav.projects', 'Our Projects')}
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="link" style={{ color: 'var(--primary-green)' }}>
                    {t('nav.contact', 'Contact Us')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Fun Element */}
            <div className="mt-5">
              <div 
                style={{
                  fontSize: '3rem',
                  opacity: '0.5',
                  animation: 'float 3s ease-in-out infinite'
                }}
              >
                🚀
              </div>
              <small style={{ color: 'var(--text-muted)' }}>
                {t('error.404.fun_text', 'Don\'t worry, even rockets sometimes miss their target!')}
              </small>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg={4} md={6} className="mb-4">
            <h5 className="mb-3" style={{ color: 'var(--text-primary)' }}>
              <span style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontFamily: '"Fira Code", "Courier New", monospace'
              }}>
                &lt; softinity &gt;
              </span>
            </h5>
            <p style={{ color: 'var(--text-secondary)' }}>
              {t('footer.description') || 'Leading technology solutions provider specializing in web development and AI-driven innovations.'}
            </p>
            <div className="footer-links">
              <a href="mailto:info@softinity.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                <i className="fas fa-envelope me-2" style={{ color: 'var(--primary-green)' }}></i>
                info@softinity.com
              </a>
              <br />
              <a href="tel:+905555555555" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                <i className="fas fa-phone me-2" style={{ color: 'var(--primary-green)' }}></i>
                +90 555 555 55 55
              </a>
            </div>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3" style={{ color: 'var(--primary-green)' }}>
              {t('footer.quickLinks') || 'Quick Links'}
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('nav.home') || 'Home'}
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('nav.about') || 'About'}
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('nav.services') || 'Services'}
                </a>
              </li>
              <li className="mb-2">
                <a href="/projects" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('nav.projects') || 'Projects'}
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={2} md={6} className="mb-4">
            <h6 className="mb-3" style={{ color: 'var(--primary-green)' }}>
              {t('footer.services') || 'Services'}
            </h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('services.webDevelopment') || 'Web Development'}
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('services.aiSolutions') || 'AI Solutions'}
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('services.dataAnalytics') || 'Data Analytics'}
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
                  {t('services.consulting') || 'Consulting'}
                </a>
              </li>
            </ul>
          </Col>

          <Col lg={4} md={6} className="mb-4">
            <h6 className="mb-3" style={{ color: 'var(--primary-green)' }}>
              {t('footer.social') || 'Follow Us'}
            </h6>
            
            <div className="footer-links mb-3">
              <a href="https://linkedin.com/company/softinity" target="_blank" rel="noopener noreferrer" 
                 style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginRight: '15px' }}>
                <i className="fab fa-linkedin" style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}></i>
              </a>
              <a href="https://github.com/softinity" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginRight: '15px' }}>
                <i className="fab fa-github" style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}></i>
              </a>
              <a href="https://twitter.com/softinity" target="_blank" rel="noopener noreferrer"
                 style={{ color: 'var(--text-secondary)', textDecoration: 'none', marginRight: '15px' }}>
                <i className="fab fa-twitter" style={{ fontSize: '1.5rem', color: 'var(--primary-green)' }}></i>
              </a>
            </div>
            
            <h6 style={{ color: 'var(--primary-green)', fontSize: '0.9rem' }}>
              {t('contact.info.address') || 'Address'}
            </h6>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
              {t('contact.info.address_value') || 'Teknokent Building, Istanbul, Turkey'}
            </p>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'var(--border-color)' }} />
        
        <Row>
          <Col md={6}>
            <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('footer.copyright') || '© 2025 Softinity. All rights reserved.'}
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {t('footer.developed') || 'Developed by Samer Allaham'}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
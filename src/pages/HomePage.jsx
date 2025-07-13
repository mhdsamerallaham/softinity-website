import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';

const HomePage = () => {
  const { t } = useTranslation();

  // Stats data
  const stats = [
    { number: '50+', label: t('home.stats.projects', 'Projects Completed'), icon: '🚀', delay: '0.1s' },
    { number: '25+', label: t('home.stats.clients', 'Happy Clients'), icon: '😊', delay: '0.2s' },
    { number: '3+', label: t('home.stats.years', 'Years Experience'), icon: '⭐', delay: '0.3s' },
    { number: '100%', label: t('home.stats.satisfaction', 'Client Satisfaction'), icon: '✨', delay: '0.4s' }
  ];

  // Technologies data
  const technologies = [
    { name: 'React', icon: '⚛️', color: '#61DAFB' },
    { name: 'Node.js', icon: '🟢', color: '#339933' },
    { name: 'Python', icon: '🐍', color: '#3776AB' },
    { name: 'MongoDB', icon: '🍃', color: '#47A248' },
    { name: 'AWS', icon: '☁️', color: '#FF9900' },
    { name: 'Docker', icon: '🐳', color: '#2496ED' },
    { name: 'AI/ML', icon: '🧠', color: '#FF6B6B' },
    { name: 'TypeScript', icon: '📘', color: '#3178C6' }
  ];

  // Services preview data
  const servicesPreview = [
    {
      icon: '🌐',
      title: t('home.services.web_dev.title', 'Web Development'),
      description: t('home.services.web_dev.description', 'Custom websites and web applications built with modern technologies'),
      gradient: 'var(--gradient-primary)',
      link: '/services'
    },
    {
      icon: '🤖',
      title: t('home.services.ai_data.title', 'AI & Data Solutions'),
      description: t('home.services.ai_data.description', 'Intelligent data analysis and machine learning solutions'),
      gradient: 'var(--gradient-secondary)',
      link: '/services'
    },
    {
      icon: '📊',
      title: t('home.services.analytics.title', 'Analytics & Insights'),
      description: t('home.services.analytics.description', 'Turn your data into actionable business insights'),
      gradient: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      link: '/services'
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: 'Alex Johnson',
      company: 'TechCorp',
      text: t('home.testimonials.0.text', 'Outstanding work! Softinity delivered our project on time and exceeded our expectations.'),
      rating: 5
    },
    {
      name: 'Sarah Chen',
      company: 'DataFlow Inc',
      text: t('home.testimonials.1.text', 'Their AI solutions transformed our business processes. Highly recommended!'),
      rating: 5
    },
    {
      name: 'Ahmed Hassan',
      company: 'Innovation Hub',
      text: t('home.testimonials.2.text', 'Professional team with excellent communication. Will definitely work with them again.'),
      rating: 5
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="stats-section py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row>
            {stats.map((stat, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="stat-card h-100 text-center border-0" style={{ 
                  background: 'var(--bg-card)',
                  transition: 'all 0.3s ease',
                  animationDelay: stat.delay
                }}>
                  <Card.Body className="p-4">
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                      {stat.icon}
                    </div>
                    <h2 style={{ 
                      color: 'var(--primary-green)', 
                      fontSize: '2.5rem',
                      fontWeight: 'bold',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', margin: 0 }}>
                      {stat.label}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Services Preview */}
      <section className="services-preview py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-5 mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('home.services.title', 'What We Do Best')}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                {t('home.services.subtitle', 'We specialize in cutting-edge technology solutions that drive your business forward')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {servicesPreview.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="service-preview-card h-100 border-0" style={{
                  background: 'var(--bg-card)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <Card.Body className="p-4 text-center">
                    <div 
                      className="service-icon mb-3"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: service.gradient,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '2.5rem',
                        margin: '0 auto',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {service.icon}
                    </div>
                    <h5 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>
                      {service.title}
                    </h5>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                      {service.description}
                    </p>
                    <Link to={service.link}>
                      <Button variant="outline-primary" size="sm">
                        {t('home.services.learn_more', 'Learn More')}
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Technologies Grid */}
      <section className="technologies-section py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-5 mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('home.technologies.title', 'Technologies We Love')}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                {t('home.technologies.subtitle', 'Building with the latest and greatest tools')}
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            {technologies.map((tech, index) => (
              <Col lg={3} md={4} sm={6} key={index} className="mb-4">
                <div 
                  className="tech-item text-center p-3"
                  style={{
                    background: 'var(--bg-card)',
                    borderRadius: '15px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid var(--border-color)'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {tech.icon}
                  </div>
                  <h6 style={{ color: 'var(--text-primary)', margin: 0 }}>
                    {tech.name}
                  </h6>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-5 mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('home.testimonials.title', 'What Our Clients Say')}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                {t('home.testimonials.subtitle', 'Don\'t just take our word for it')}
              </p>
            </Col>
          </Row>
          
          <Row>
            {testimonials.map((testimonial, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className="testimonial-card h-100 border-0" style={{
                  background: 'var(--bg-card)',
                  transition: 'all 0.3s ease'
                }}>
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} style={{ color: '#ffc107', fontSize: '1.2rem' }}>⭐</span>
                      ))}
                    </div>
                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h6 style={{ color: 'var(--primary-green)', margin: 0 }}>
                        {testimonial.name}
                      </h6>
                      <small style={{ color: 'var(--text-muted)' }}>
                        {testimonial.company}
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5" style={{ 
        background: 'var(--gradient-bg)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 60%, rgba(100, 243, 176, 0.1), transparent), radial-gradient(circle at 70% 30%, rgba(155, 92, 251, 0.1), transparent)',
          pointerEvents: 'none'
        }}></div>
        
        <Container style={{ position: 'relative', zIndex: 2 }}>
          <Row className="text-center">
            <Col lg={8} className="mx-auto">
              <h2 className="display-5 mb-4" style={{ color: 'var(--text-primary)' }}>
                {t('home.cta.title', 'Ready to Transform Your Ideas?')}
              </h2>
              <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t('home.cta.description', 'Let\'s work together to bring your vision to life with cutting-edge technology solutions')}
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="me-3">
                  <Button size="lg" className="btn-primary">
                    <i className="fas fa-rocket me-2"></i>
                    {t('home.cta.start_project', 'Start Your Project')}
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline-primary" size="lg">
                    <i className="fas fa-eye me-2"></i>
                    {t('home.cta.view_work', 'View Our Work')}
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default HomePage;
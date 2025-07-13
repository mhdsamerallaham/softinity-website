import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';

const ServicesPage = () => {
  const { t } = useTranslation();

  const webDevFeatures = [
    t('services.web_dev.features.0') || 'Responsive Mobile-First Design',
    t('services.web_dev.features.1') || 'Modern Frontend Frameworks (React, Vue.js)',
    t('services.web_dev.features.2') || 'Backend Development & APIs',
    t('services.web_dev.features.3') || 'Database Design & Integration',
    t('services.web_dev.features.4') || 'SEO Optimization',
    t('services.web_dev.features.5') || 'Performance Optimization'
  ];

  const dataAIFeatures = [
    t('services.data_ai.features.0') || 'Machine Learning Models',
    t('services.data_ai.features.1') || 'Data Visualization Dashboards',
    t('services.data_ai.features.2') || 'Predictive Analytics',
    t('services.data_ai.features.3') || 'Natural Language Processing',
    t('services.data_ai.features.4') || 'Computer Vision Solutions'
  ];

  const technologies = [
    { name: 'React.js', icon: '⚛️', category: t('services.technologies.frontend') || 'Frontend' },
    { name: 'Node.js', icon: '🟢', category: t('services.technologies.backend') || 'Backend' },
    { name: 'Python', icon: '🐍', category: 'AI' },
    { name: 'MongoDB', icon: '🍃', category: t('services.technologies.database') || 'Database' },
    { name: 'AWS', icon: '☁️', category: t('services.technologies.cloud') || 'Cloud' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'TensorFlow', icon: '🧠', category: 'AI' },
    { name: 'PostgreSQL', icon: '🐘', category: t('services.technologies.database') || 'Database' }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero py-5 mt-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <div className="fade-in-up">
                <h1 className="display-4 mb-4">
                  {t('services.title') || 'Our Services'}
                </h1>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                  {t('services.hero_description') || 'Comprehensive technology solutions designed to accelerate your business growth.'}
                </p>
                <Link to="/contact">
                  <Button size="lg" className="btn-primary">
                    {t('services.get_quote') || 'Get Quote'}
                  </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Services */}
      <section className="main-services py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-5">
              <ServiceCard
                icon="🌐"
                title={t('services.web_dev.title') || 'Web Development'}
                description={t('services.web_dev.description') || 'Modern, responsive websites and web applications built with cutting-edge technologies'}
                features={webDevFeatures}
                gradient="var(--gradient-primary)"
                delay="0.2s"
              />
            </Col>
            <Col lg={6} className="mb-5">
              <ServiceCard
                icon="🤖"
                title={t('services.data_ai.title') || 'AI & Data Solutions'}
                description={t('services.data_ai.description') || 'Intelligent data analysis and machine learning solutions to optimize your business processes'}
                features={dataAIFeatures}
                gradient="var(--gradient-secondary)"
                delay="0.4s"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Detailed Web Development */}
      <section className="web-dev-details py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-4">
              <h2 className="display-5 mb-4" style={{ color: 'var(--primary-green)' }}>
                {t('services.web_dev.detailed_title') || 'Complete Web Development Solutions'}
              </h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                {t('services.web_dev.detailed_description') || 'From concept to deployment, we create stunning, functional websites that engage users and drive business growth.'}
              </p>
              
              <div className="service-types">
                <div className="service-type mb-3">
                  <h5 style={{ color: 'var(--primary-green)' }}>
                    🏢 {t('services.web_dev.types.corporate') || 'Corporate Websites'}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('services.web_dev.types.corporate_desc') || 'Professional business websites that establish your brand presence'}
                  </p>
                </div>
                
                <div className="service-type mb-3">
                  <h5 style={{ color: 'var(--primary-green)' }}>
                    🛒 {t('services.web_dev.types.ecommerce') || 'E-commerce Platforms'}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('services.web_dev.types.ecommerce_desc') || 'Full-featured online stores with payment integration'}
                  </p>
                </div>
                
                <div className="service-type mb-3">
                  <h5 style={{ color: 'var(--primary-green)' }}>
                    💼 {t('services.web_dev.types.portfolio') || 'Portfolio Websites'}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('services.web_dev.types.portfolio_desc') || 'Showcase your work with stunning visual presentations'}
                  </p>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className="web-dev-visual">
                <div style={{
                  background: 'var(--gradient-primary)',
                  borderRadius: '20px',
                  padding: '3rem',
                  margin: '2rem 0'
                }}>
                  <div style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '15px',
                    padding: '2rem',
                    border: '2px solid var(--primary-green)'
                  }}>
                    <div className="code-text" style={{ fontSize: '1.2rem', textAlign: 'left' }}>
                      <div style={{ color: 'var(--primary-purple)' }}>function</div>
                      <div style={{ color: 'var(--primary-green)' }}>buildWebsite() {'{'}</div>
                      <div style={{ marginLeft: '1rem', color: 'var(--text-secondary)' }}>
                        design.responsive = true;
                      </div>
                      <div style={{ marginLeft: '1rem', color: 'var(--text-secondary)' }}>
                        performance.optimize();
                      </div>
                      <div style={{ marginLeft: '1rem', color: 'var(--text-secondary)' }}>
                        seo.implement();
                      </div>
                      <div style={{ color: 'var(--primary-green)' }}>{'}'}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Detailed Data & AI */}
      <section className="data-ai-details py-5">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center order-lg-2">
              <div className="data-ai-visual">
                <div style={{
                  background: 'var(--gradient-secondary)',
                  borderRadius: '20px',
                  padding: '3rem',
                  margin: '2rem 0'
                }}>
                  <div style={{
                    background: 'var(--bg-primary)',
                    borderRadius: '15px',
                    padding: '2rem',
                    border: '2px solid var(--primary-purple)'
                  }}>
                    <div className="data-charts">
                      <div className="chart-item mb-3">
                        <div style={{ 
                          background: 'var(--primary-green)', 
                          height: '10px', 
                          width: '80%', 
                          borderRadius: '5px',
                          marginBottom: '0.5rem'
                        }}></div>
                        <small style={{ color: 'var(--text-secondary)' }}>Sales Analytics</small>
                      </div>
                      <div className="chart-item mb-3">
                        <div style={{ 
                          background: 'var(--primary-purple)', 
                          height: '10px', 
                          width: '65%', 
                          borderRadius: '5px',
                          marginBottom: '0.5rem'
                        }}></div>
                        <small style={{ color: 'var(--text-secondary)' }}>Customer Insights</small>
                      </div>
                      <div className="chart-item mb-3">
                        <div style={{ 
                          background: 'var(--accent-green)', 
                          height: '10px', 
                          width: '90%', 
                          borderRadius: '5px',
                          marginBottom: '0.5rem'
                        }}></div>
                        <small style={{ color: 'var(--text-secondary)' }}>Performance Metrics</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="mb-4 order-lg-1">
              <h2 className="display-5 mb-4" style={{ color: 'var(--primary-purple)' }}>
                {t('services.data_ai.detailed_title') || 'Advanced AI & Data Analytics'}
              </h2>
              <p className="mb-4" style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                {t('services.data_ai.detailed_description') || 'Transform your data into competitive advantages with our cutting-edge AI and machine learning capabilities.'}
              </p>
              
              <div className="ai-services">
                <div className="ai-service mb-3">
                  <h5 style={{ color: 'var(--primary-purple)' }}>
                    📊 {t('services.data_ai.types.dashboards') || 'Interactive Dashboards'}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('services.data_ai.types.dashboards_desc') || 'Real-time data visualization and business intelligence'}
                  </p>
                </div>
                
                <div className="ai-service mb-3">
                  <h5 style={{ color: 'var(--primary-purple)' }}>
                    🧠 {t('services.data_ai.types.machine_learning') || 'Machine Learning'}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('services.data_ai.types.machine_learning_desc') || 'Custom ML models for prediction and automation'}
                  </p>
                </div>
                
                <div className="ai-service mb-3">
                  <h5 style={{ color: 'var(--primary-purple)' }}>
                    💬 {t('services.data_ai.types.chatbots') || 'AI Chatbots'}
                  </h5>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('services.data_ai.types.chatbots_desc') || 'Intelligent conversational interfaces for customer service'}
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Technologies We Use */}
      <section className="technologies py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-5 mb-3">
                {t('services.technologies.title') || 'Technologies We Use'}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                {t('services.technologies.description') || 'We work with the most advanced and reliable technologies in the industry'}
              </p>
            </Col>
          </Row>
          
          <Row>
            {technologies.map((tech, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="tech-card text-center p-3" style={{
                  background: 'var(--bg-card)',
                  borderRadius: '15px',
                  border: '1px solid var(--border-color)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                    {tech.icon}
                  </div>
                  <h6 style={{ color: 'var(--primary-green)' }}>
                    {tech.name}
                  </h6>
                  <small style={{ 
                    color: 'var(--text-muted)',
                    textTransform: 'uppercase',
                    fontSize: '0.8rem'
                  }}>
                    {tech.category}
                  </small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Process Section */}
      <section className="process py-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-5 mb-3">
                {t('services.process.title') || 'Our Development Process'}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                {t('services.process.description') || 'A proven methodology that ensures project success from start to finish'}
              </p>
            </Col>
          </Row>
          
          <Row>
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="process-step">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  1
                </div>
                <h5 style={{ color: 'var(--primary-green)' }}>
                  {t('services.process.step1.title') || 'Discovery & Planning'}
                </h5>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {t('services.process.step1.description') || 'Understanding your needs and defining project scope'}
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="process-step">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-secondary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  2
                </div>
                <h5 style={{ color: 'var(--primary-purple)' }}>
                  {t('services.process.step2.title') || 'Design & Prototyping'}
                </h5>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {t('services.process.step2.description') || 'Creating user-centered designs and interactive prototypes'}
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="process-step">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  3
                </div>
                <h5 style={{ color: 'var(--primary-green)' }}>
                  {t('services.process.step3.title') || 'Development & Testing'}
                </h5>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {t('services.process.step3.description') || 'Building robust solutions with comprehensive quality assurance'}
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4 text-center">
              <div className="process-step">
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--gradient-secondary)',
                  borderRadius: '50%',
                  margin: '0 auto 1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2rem',
                  color: 'white',
                  fontWeight: 'bold'
                }}>
                  4
                </div>
                <h5 style={{ color: 'var(--primary-purple)' }}>
                  {t('services.process.step4.title') || 'Deployment & Support'}
                </h5>
                <p style={{ color: 'var(--text-secondary)' }}>
                  {t('services.process.step4.description') || 'Launching your project and providing ongoing maintenance'}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-5" style={{ background: 'var(--gradient-bg)' }}>
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <h2 className="display-5 mb-4">
                {t('services.cta.title') || 'Ready to Start Your Project?'}
              </h2>
              <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t('services.cta.description') || 'Let\'s discuss how we can bring your vision to life'}
              </p>
              <div className="cta-buttons">
                <Link to="/contact" className="me-3">
                  <Button size="lg" className="btn-primary">
                    {t('services.cta.contact') || 'Contact Us'}
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline-primary" size="lg">
                    {t('services.cta.view_projects') || 'View Projects'}
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

export default ServicesPage;
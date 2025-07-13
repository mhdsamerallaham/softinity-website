import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();

  const stats = [
    { number: '50+', label: t('about.stats.projects') || 'Projects Completed' },
    { number: '3+', label: t('about.stats.experience') || 'Years Experience' },
    { number: '25+', label: t('about.stats.clients') || 'Happy Clients' },
    { number: '100%', label: t('about.stats.satisfaction') || 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: '🚀',
      title: t('about.values.innovation') || 'Innovation',
      description: t('about.values.innovation') || 'Always pushing boundaries with cutting-edge technology'
    },
    {
      icon: '⚡',
      title: t('about.values.quality') || 'Quality',
      description: t('about.values.quality') || 'Delivering excellence in every project we undertake'
    },
    {
      icon: '🎯',
      title: t('about.values.collaboration') || 'Collaboration',
      description: t('about.values.collaboration') || 'Working together to achieve outstanding results'
    },
    {
      icon: '🤝',
      title: t('about.values.excellence') || 'Excellence',
      description: t('about.values.excellence') || 'Striving for perfection in everything we do'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero py-5 mt-5">
        <Container>
          <Row className="align-items-center min-vh-50">
            <Col lg={6}>
              <div className="fade-in-up">
                <h1 className="display-4 mb-4">
                  {t('about.title') || 'About Softinity'}
                </h1>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                  {t('about.subtitle') || 'We are a passionate team of developers and data scientists dedicated to creating innovative solutions that drive digital transformation.'}
                </p>
              </div>
            </Col>
            <Col lg={6} className="text-center">
              <div className="about-animation">
                <div style={{
                  width: '300px',
                  height: '300px',
                  background: 'var(--gradient-primary)',
                  borderRadius: '50%',
                  margin: '0 auto',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '6rem',
                  opacity: '0.8',
                  color: 'white'
                }}>
                  💻
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission py-5">
        <Container>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--gradient-primary)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      👁️
                    </div>
                    <h3 style={{ color: 'var(--primary-green)' }}>
                      {t('about.vision.title') || 'Our Vision'}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {t('about.vision.content') || 'To be the leading technology partner for businesses seeking innovative digital solutions and data-driven insights.'}
                  </p>
                </Card.Body>
              </Card>
            </Col>
            
            <Col lg={6} className="mb-4">
              <Card className="h-100">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div style={{
                      width: '50px',
                      height: '50px',
                      background: 'var(--gradient-secondary)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '1rem'
                    }}>
                      🎯
                    </div>
                    <h3 style={{ color: 'var(--primary-purple)' }}>
                      {t('about.mission.title') || 'Our Mission'}
                    </h3>
                  </div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {t('about.mission.content') || 'We empower businesses through cutting-edge web development, AI solutions, and data analytics to achieve sustainable growth.'}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="stats py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="text-center">
            {stats.map((stat, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <div className="stat-item">
                  <h2 style={{ 
                    color: 'var(--primary-green)', 
                    fontSize: '3rem',
                    fontWeight: 'bold'
                  }}>
                    {stat.number}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    {stat.label}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Values Section */}
      <section className="values py-5">
        <Container>
          <Row className="mb-5">
            <Col lg={12} className="text-center">
              <h2 className="display-5 mb-3">
                {t('about.values.title') || 'Why Choose Us'}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                {t('footer.description') || 'Our core values that drive everything we do'}
              </p>
            </Col>
          </Row>
          
          <Row>
            {values.map((value, index) => (
              <Col lg={3} md={6} key={index} className="mb-4">
                <Card className="h-100 text-center">
                  <Card.Body className="p-4">
                    <div style={{
                      fontSize: '3rem',
                      marginBottom: '1rem'
                    }}>
                      {value.icon}
                    </div>
                    <h5 style={{ color: 'var(--primary-green)' }}>
                      {value.title}
                    </h5>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {value.description}
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Team Section */}
      <section className="team py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <h2 className="display-5 mb-3">
                {t('about.team.title') || 'Our Team'}
              </h2>
              <p className="lead" style={{ color: 'var(--text-secondary)' }}>
                {t('about.team.subtitle') || 'Meet the experts behind Softinity'}
              </p>
            </Col>
          </Row>
          
          <Row className="justify-content-center">
            <Col lg={4} md={6} className="mb-4">
              <Card className="team-card text-center">
                <Card.Body className="p-4">
                  <div style={{
                    width: '120px',
                    height: '120px',
                    background: 'var(--gradient-primary)',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem'
                  }}>
                    👨‍💻
                  </div>
                  <h5 style={{ color: 'var(--primary-green)' }}>
                    Samer Allaham
                  </h5>
                  <p style={{ color: 'var(--primary-purple)' }}>
                    {t('footer.developed') || 'Full-Stack Developer'}
                  </p>
                  <p style={{ color: 'var(--text-secondary)' }}>
                    {t('footer.description') || 'Passionate about creating innovative web solutions and AI-driven applications.'}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default AboutPage;
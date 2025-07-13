import React, { useState } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import ProjectShowcase from '../components/ProjectShowcase';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('all');

  // Dummy Projects Data
  const projects = [
    {
      id: 1,
      title: "TechCorp Corporate Website",
      description: t('projects.dummy.techcorp.description'),
      fullDescription: t('projects.dummy.techcorp.full_description'),
      category: "corporate",
      categoryColor: "var(--primary-green)",
      icon: "🏢",
      gradient: "linear-gradient(135deg, #64f3b0, #4fd396)",
      technologies: ["React.js", "Node.js", "MongoDB", "Bootstrap"],
      features: [
        t('projects.dummy.techcorp.features.0'),
        t('projects.dummy.techcorp.features.1'),
        t('projects.dummy.techcorp.features.2'),
        t('projects.dummy.techcorp.features.3')
      ],
      duration: "6 weeks",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "ShopMax E-commerce Platform",
      description: t('projects.dummy.shopmax.description'),
      fullDescription: t('projects.dummy.shopmax.full_description'),
      category: "ecommerce",
      categoryColor: "var(--primary-purple)",
      icon: "🛒",
      gradient: "linear-gradient(135deg, #9b5cfb, #8a4ee8)",
      technologies: ["React.js", "Stripe API", "PostgreSQL", "AWS"],
      features: [
        t('projects.dummy.shopmax.features.0'),
        t('projects.dummy.shopmax.features.1'),
        t('projects.dummy.shopmax.features.2'),
        t('projects.dummy.shopmax.features.3')
      ],
      duration: "10 weeks",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "DataViz Analytics Dashboard",
      description: t('projects.dummy.dataviz.description'),
      fullDescription: t('projects.dummy.dataviz.full_description'),
      category: "data_ai",
      categoryColor: "var(--accent-purple)",
      icon: "📊",
      gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      features: [
        t('projects.dummy.dataviz.features.0'),
        t('projects.dummy.dataviz.features.1'),
        t('projects.dummy.dataviz.features.2'),
        t('projects.dummy.dataviz.features.3')
      ],
      duration: "8 weeks",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "CreativeStudio Portfolio",
      description: t('projects.dummy.creative.description'),
      fullDescription: t('projects.dummy.creative.full_description'),
      category: "portfolio",
      categoryColor: "var(--accent-green)",
      icon: "🎨",
      gradient: "linear-gradient(135deg, #74b9ff, #0984e3)",
      technologies: ["Vue.js", "GSAP", "Netlify", "Sass"],
      features: [
        t('projects.dummy.creative.features.0'),
        t('projects.dummy.creative.features.1'),
        t('projects.dummy.creative.features.2'),
        t('projects.dummy.creative.features.3')
      ],
      duration: "4 weeks",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "FinanceAI Prediction Model",
      description: t('projects.dummy.financeai.description'),
      fullDescription: t('projects.dummy.financeai.full_description'),
      category: "data_ai",
      categoryColor: "var(--accent-purple)",
      icon: "🤖",
      gradient: "linear-gradient(135deg, #a29bfe, #6c5ce7)",
      technologies: ["Python", "scikit-learn", "Pandas", "Docker"],
      features: [
        t('projects.dummy.financeai.features.0'),
        t('projects.dummy.financeai.features.1'),
        t('projects.dummy.financeai.features.2'),
        t('projects.dummy.financeai.features.3')
      ],
      duration: "12 weeks",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "RestaurantPro Management System",
      description: t('projects.dummy.restaurant.description'),
      fullDescription: t('projects.dummy.restaurant.full_description'),
      category: "web_development",
      categoryColor: "var(--primary-green)",
      icon: "🍽️",
      gradient: "linear-gradient(135deg, #00b894, #00a085)",
      technologies: ["React.js", "Express.js", "MySQL", "Socket.io"],
      features: [
        t('projects.dummy.restaurant.features.0'),
        t('projects.dummy.restaurant.features.1'),
        t('projects.dummy.restaurant.features.2'),
        t('projects.dummy.restaurant.features.3')
      ],
      duration: "8 weeks",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = [
    { key: 'all', label: t('projects.filters.all') },
    { key: 'corporate', label: t('projects.filters.corporate') },
    { key: 'ecommerce', label: t('projects.filters.ecommerce') },
    { key: 'data_ai', label: t('projects.filters.data_ai') },
    { key: 'portfolio', label: t('projects.filters.portfolio') },
    { key: 'web_development', label: t('projects.filters.web_development') }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-page">
      {/* Hero Section */}
      <section className="projects-hero py-5 mt-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <div className="fade-in-up">
                <h1 className="display-4 mb-4">
                  {t('projects.title')}
                </h1>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                  {t('projects.hero_description')}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Filter Buttons */}
      <section className="projects-filter py-3" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="text-center">
                <ButtonGroup className="filter-buttons">
                  {categories.map((category) => (
                    <Button
                      key={category.key}
                      variant={activeFilter === category.key ? "primary" : "outline-primary"}
                      onClick={() => setActiveFilter(category.key)}
                      className="filter-btn"
                    >
                      {category.label}
                    </Button>
                  ))}
                </ButtonGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid py-5">
        <Container>
          <Row>
            {filteredProjects.map((project, index) => (
              <Col lg={4} md={6} key={project.id} className="mb-4">
                <ProjectShowcase 
                  project={project} 
                  delay={`${index * 0.1}s`}
                />
              </Col>
            ))}
          </Row>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <Row>
              <Col lg={12} className="text-center py-5">
                <div style={{ color: 'var(--text-secondary)' }}>
                  <h4>{t('projects.no_projects')}</h4>
                  <p>{t('projects.no_projects_desc')}</p>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Stats Section */}
      <section className="projects-stats py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row className="text-center">
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <h2 style={{ 
                  color: 'var(--primary-green)', 
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>
                  50+
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  {t('projects.stats.completed')}
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <h2 style={{ 
                  color: 'var(--primary-purple)', 
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>
                  25+
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  {t('projects.stats.happy_clients')}
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <h2 style={{ 
                  color: 'var(--accent-green)', 
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>
                  6
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  {t('projects.stats.categories')}
                </p>
              </div>
            </Col>
            
            <Col lg={3} md={6} className="mb-4">
              <div className="stat-item">
                <h2 style={{ 
                  color: 'var(--accent-purple)', 
                  fontSize: '3rem',
                  fontWeight: 'bold'
                }}>
                  100%
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                  {t('projects.stats.satisfaction')}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="projects-cta py-5">
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <h2 className="display-5 mb-4">
                {t('projects.cta.title')}
              </h2>
              <p className="lead mb-4" style={{ color: 'var(--text-secondary)' }}>
                {t('projects.cta.description')}
              </p>
              <div className="cta-buttons">
                <Button size="lg" className="btn-primary me-3">
                  {t('projects.cta.start_project')}
                </Button>
                <Button variant="outline-primary" size="lg">
                  {t('projects.cta.discuss_idea')}
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ProjectsPage;
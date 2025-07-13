import React, { useState } from 'react';
import { Card, Button, Modal, Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ProjectShowcase = ({ 
  project,
  delay = "0s" 
}) => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <Card 
        className="project-card h-100 fade-in-up" 
        style={{ animationDelay: delay }}
        onClick={handleShowModal}
      >
        {/* Project Image */}
        <div className="project-image-container">
          <div 
            className="project-image"
            style={{
              height: '200px',
              background: project.gradient || 'var(--gradient-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '4rem',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {project.icon}
            
            {/* Overlay */}
            <div className="project-overlay">
              <Button variant="light" size="sm">
                {t('projects.view_project') || 'View Project'}
              </Button>
            </div>
          </div>
        </div>

        <Card.Body>
          {/* Project Category */}
          <div className="mb-2">
            <Badge 
              style={{ 
                background: project.categoryColor || 'var(--primary-green)',
                color: 'white'
              }}
            >
              {t(`projects.categories.${project.category}`) || project.category}
            </Badge>
          </div>

          {/* Project Title */}
          <Card.Title style={{ color: 'var(--primary-green)' }}>
            {project.title}
          </Card.Title>

          {/* Project Description */}
          <Card.Text style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </Card.Text>

          {/* Technologies Used */}
          <div className="project-tech">
            <small style={{ color: 'var(--text-muted)' }}>
              {t('projects.technologies') || 'Technologies'}: 
            </small>
            <div className="mt-1">
              {project.technologies?.map((tech, index) => (
                <Badge 
                  key={index}
                  variant="outline-secondary" 
                  className="me-1 mb-1"
                  style={{ 
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)',
                    fontSize: '0.7rem'
                  }}
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Project Detail Modal - FIXED */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal} 
        size="lg"
        centered
        className="project-modal"
        style={{ zIndex: 9999 }}
        backdrop="static"
        keyboard={true}
      >
        <div style={{ 
          background: 'var(--bg-card)', 
          border: '1px solid var(--border-color)',
          borderRadius: '15px',
          overflow: 'hidden'
        }}>
          <Modal.Header 
            closeButton 
            style={{ 
              background: 'var(--bg-secondary)',
              borderBottom: '1px solid var(--border-color)',
              padding: '1.5rem'
            }}
          >
            <Modal.Title style={{ color: 'var(--primary-green)', fontSize: '1.5rem' }}>
              {project.title}
            </Modal.Title>
          </Modal.Header>
          
          <Modal.Body style={{ 
            background: 'var(--bg-card)', 
            padding: '2rem',
            maxHeight: '70vh',
            overflowY: 'auto'
          }}>
            {/* Project Hero Image */}
            <div 
              className="project-hero mb-4"
              style={{
                height: '200px',
                background: project.gradient || 'var(--gradient-primary)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '4rem',
                boxShadow: 'var(--shadow-primary)'
              }}
            >
              {project.icon}
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div className="mb-3">
                <Badge 
                  style={{ 
                    background: project.categoryColor || 'var(--primary-green)',
                    color: 'white',
                    fontSize: '0.8rem',
                    padding: '0.5rem 1rem'
                  }}
                >
                  {t(`projects.categories.${project.category}`) || project.category}
                </Badge>
              </div>

              <p style={{ 
                color: 'var(--text-secondary)', 
                fontSize: '1.1rem',
                lineHeight: '1.6',
                marginBottom: '2rem'
              }}>
                {project.fullDescription || project.description}
              </p>

              {/* Features */}
              {project.features && project.features.length > 0 && (
                <div className="mb-4">
                  <h6 style={{ 
                    color: 'var(--primary-green)', 
                    fontSize: '1.1rem',
                    marginBottom: '1rem'
                  }}>
                    {t('projects.key_features') || 'Key Features'}:
                  </h6>
                  <ul style={{ 
                    color: 'var(--text-secondary)',
                    paddingLeft: '1.5rem'
                  }}>
                    {project.features.map((feature, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem' }}>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-4">
                <h6 style={{ 
                  color: 'var(--primary-green)',
                  fontSize: '1.1rem',
                  marginBottom: '1rem'
                }}>
                  {t('projects.technologies') || 'Technologies'}:
                </h6>
                <div className="tech-badges">
                  {project.technologies?.map((tech, index) => (
                    <Badge 
                      key={index}
                      className="me-2 mb-2"
                      style={{ 
                        borderColor: 'var(--primary-green)',
                        color: 'var(--primary-green)',
                        background: 'transparent',
                        border: '1px solid var(--primary-green)',
                        padding: '0.5rem 1rem',
                        fontSize: '0.8rem'
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Project Duration */}
              {project.duration && (
                <div className="mb-3">
                  <small style={{ 
                    color: 'var(--text-muted)',
                    fontSize: '0.9rem'
                  }}>
                    <strong>{t('projects.duration') || 'Duration'}:</strong> {project.duration}
                  </small>
                </div>
              )}
            </div>
          </Modal.Body>
          
          <Modal.Footer 
            style={{ 
              background: 'var(--bg-secondary)',
              borderTop: '1px solid var(--border-color)',
              padding: '1.5rem',
              justifyContent: 'space-between'
            }}
          >
            <div>
              {project.liveUrl && (
                <Button 
                  variant="primary"
                  href={project.liveUrl} 
                  target="_blank"
                  className="me-2"
                  style={{
                    background: 'var(--gradient-primary)',
                    border: 'none',
                    padding: '0.5rem 1.5rem'
                  }}
                >
                  <i className="fas fa-external-link-alt me-2"></i>
                  {t('projects.view_live') || 'View Live'}
                </Button>
              )}
              {project.githubUrl && (
                <Button 
                  variant="outline-secondary"
                  href={project.githubUrl} 
                  target="_blank"
                  style={{
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)',
                    padding: '0.5rem 1.5rem'
                  }}
                >
                  <i className="fab fa-github me-2"></i>
                  {t('projects.view_code') || 'View Code'}
                </Button>
              )}
            </div>
            <Button 
              variant="outline-primary" 
              onClick={handleCloseModal}
              style={{
                borderColor: 'var(--primary-green)',
                color: 'var(--primary-green)'
              }}
            >
              {t('common.close') || 'Close'}
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default ProjectShowcase;
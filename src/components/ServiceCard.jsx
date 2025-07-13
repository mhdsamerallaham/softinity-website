import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  features = [], 
  gradient = "var(--gradient-primary)",
  delay = "0s" 
}) => {
  const { t } = useTranslation();

  return (
    <Card className="service-card h-100 fade-in-up" style={{ animationDelay: delay }}>
      <Card.Body className="text-center">
        {/* Service Icon */}
        <div 
          className="service-icon mx-auto mb-4"
          style={{
            width: '80px',
            height: '80px',
            background: gradient,
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '2.5rem',
            boxShadow: 'var(--shadow-primary)'
          }}
        >
          {icon}
        </div>

        {/* Service Title */}
        <Card.Title className="service-title mb-3" style={{ color: 'var(--primary-green)' }}>
          {title}
        </Card.Title>

        {/* Service Description */}
        <Card.Text className="service-description mb-4" style={{ color: 'var(--text-secondary)' }}>
          {description}
        </Card.Text>

        {/* Service Features */}
        {features.length > 0 && (
          <div className="service-features mb-4">
            <h6 className="features-title mb-3" style={{ color: 'var(--primary-green)' }}>
              {t('services.key_features') || 'Key Features'}:
            </h6>
            <ul className="features-list list-unstyled">
              {features.map((feature, index) => (
                <li key={index} className="feature-item mb-2" style={{ color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--primary-green)' }}>✓</span>
                  <span className="ms-2">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA Button */}
        <Button variant="outline-primary" className="service-cta">
          {t('services.learn_more') || t('common.learnMore') || 'Learn More'}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ServiceCard;
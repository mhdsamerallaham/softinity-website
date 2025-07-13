import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, Alert } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const ContactPage = () => {
  const { t } = useTranslation();
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  // Form validation state
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showAlert, setShowAlert] = useState({ show: false, type: '', message: '' });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validation function
  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = t('contact.validation.name_required') || 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t('contact.validation.name_min_length') || 'Name must be at least 2 characters';
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = t('contact.validation.email_required') || 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = t('contact.validation.email_invalid') || 'Please enter a valid email';
    }
    
    // Phone validation (optional but if provided should be valid)
    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = t('contact.validation.phone_invalid') || 'Please enter a valid phone number';
    }
    
    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = t('contact.validation.subject_required') || 'Subject is required';
    }
    
    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = t('contact.validation.message_required') || 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t('contact.validation.message_min_length') || 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  // Handle form submission
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // FormSubmit.co'ya veri gönder
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone || 'Not provided');
      formDataToSend.append('subject', formData.subject);
      formDataToSend.append('message', formData.message);
      formDataToSend.append('_captcha', 'false'); // Captcha'yı devre dışı bırak
      formDataToSend.append('_template', 'table'); // Güzel format
      formDataToSend.append('_next', window.location.origin + '/contact'); // Başarı sonrası dönüş
      
      console.log('Sending form data to FormSubmit.co...');

      const response = await fetch('https://formsubmit.co/samerallaham3@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        setShowAlert({
          show: true,
          type: 'success',
          message: t('contact.form.success_message') || 'Thank you! Your message has been sent successfully to info@softinity.com'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
      
    } catch (error) {
      console.error('Form submission failed:', error);
      setShowAlert({
        show: true,
        type: 'danger',
        message: t('contact.form.error_message') || 'Sorry, there was an error sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
      // Auto hide alert after 5 seconds
      setTimeout(() => {
        setShowAlert({ show: false, type: '', message: '' });
      }, 5000);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: t('contact.info.email') || 'Email',
      value: 'info@softinity.com',
      link: 'mailto:info@softinity.com'
    },
    {
      icon: '📱',
      title: t('contact.info.phone') || 'Phone',
      value: '+90 555 555 55 55',
      link: 'tel:+905555555555'
    },
    {
      icon: '📍',
      title: t('contact.info.address') || 'Address',
      value: t('contact.info.address_value') || 'Teknokent Building, Istanbul, Turkey',
      link: null
    },
    {
      icon: '🕒',
      title: t('contact.info.hours') || 'Business Hours',
      value: t('contact.info.hours_value') || 'Monday - Friday: 9:00 AM - 6:00 PM',
      link: null
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/company/softinity', color: '#0077B5' },
    { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/softinity', color: '#333' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/softinity', color: '#1DA1F2' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://instagram.com/softinity', color: '#E4405F' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero py-5 mt-5">
        <Container>
          <Row className="text-center mb-5">
            <Col lg={12}>
              <div className="fade-in-up">
                <h1 className="display-4 mb-4">
                  {t('contact.title') || 'Contact Us'}
                </h1>
                <p className="lead mb-4" style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                  {t('contact.hero_description') || 'Ready to start your next project? Get in touch with our team of experts.'}
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact Form & Info */}
      <section className="contact-content py-5">
        <Container>
          <Row>
            {/* Contact Form */}
            <Col lg={8} className="mb-5">
              <Card className="contact-form-card">
                <Card.Body className="p-4">
                  <h3 className="mb-4" style={{ color: 'var(--primary-green)' }}>
                    {t('contact.form.title') || 'Send us a Message'}
                  </h3>
                  
                  {/* Alert */}
                  {showAlert.show && (
                    <Alert variant={showAlert.type} dismissible onClose={() => setShowAlert({ show: false, type: '', message: '' })}>
                      {showAlert.message}
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: 'var(--text-primary)' }}>
                            {t('contact.name') || 'Full Name'} *
                          </Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.placeholders.name') || 'Enter your full name'}
                            isInvalid={!!errors.name}
                            style={{
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)'
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: 'var(--text-primary)' }}>
                            {t('contact.email') || 'Email Address'} *
                          </Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.placeholders.email') || 'Enter your email address'}
                            isInvalid={!!errors.email}
                            style={{
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)'
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: 'var(--text-primary)' }}>
                            {t('contact.phone') || 'Phone Number'}
                          </Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('contact.placeholders.phone') || 'Enter your phone number'}
                            isInvalid={!!errors.phone}
                            style={{
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)'
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.phone}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      
                      <Col md={6}>
                        <Form.Group className="mb-3">
                          <Form.Label style={{ color: 'var(--text-primary)' }}>
                            {t('contact.subject') || 'Subject'} *
                          </Form.Label>
                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            isInvalid={!!errors.subject}
                            style={{
                              background: 'var(--bg-tertiary)',
                              border: '1px solid var(--border-color)',
                              color: 'var(--text-primary)'
                            }}
                          >
                            <option value="">{t('contact.placeholders.subject') || 'Select a subject'}</option>
                            <option value="web_development">{t('contact.subjects.web_development') || 'Web Development'}</option>
                            <option value="data_ai">{t('contact.subjects.data_ai') || 'Data & AI Solutions'}</option>
                            <option value="consultation">{t('contact.subjects.consultation') || 'Consultation'}</option>
                            <option value="support">{t('contact.subjects.support') || 'Support'}</option>
                            <option value="other">{t('contact.subjects.other') || 'Other'}</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.subject}
                          </Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4">
                      <Form.Label style={{ color: 'var(--text-primary)' }}>
                        {t('contact.message') || 'Message'} *
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.placeholders.message') || 'Tell us about your project'}
                        isInvalid={!!errors.message}
                        style={{
                          background: 'var(--bg-tertiary)',
                          border: '1px solid var(--border-color)',
                          color: 'var(--text-primary)',
                          resize: 'vertical'
                        }}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button 
                      type="submit" 
                      size="lg" 
                      disabled={isSubmitting}
                      className="btn-primary w-100"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {t('contact.form.sending') || 'Sending...'}
                        </>
                      ) : (
                        t('contact.send') || 'Send Message'
                      )}
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>

            {/* Contact Info */}
            <Col lg={4}>
              <div className="contact-info">
                <h3 className="mb-4" style={{ color: 'var(--primary-green)' }}>
                  {t('contact.get_in_touch') || 'Get in Touch'}
                </h3>
                
                {contactInfo.map((info, index) => (
                  <Card key={index} className="mb-3 contact-info-card">
                    <Card.Body className="p-3">
                      <div className="d-flex align-items-center">
                        <div style={{
                          fontSize: '1.5rem',
                          marginRight: '1rem',
                          width: '40px',
                          textAlign: 'center'
                        }}>
                          {info.icon}
                        </div>
                        <div>
                          <h6 style={{ color: 'var(--primary-green)', marginBottom: '0.25rem' }}>
                            {info.title}
                          </h6>
                          {info.link ? (
                            <a 
                              href={info.link} 
                              style={{ 
                                color: 'var(--text-secondary)',
                                textDecoration: 'none'
                              }}
                              onMouseOver={(e) => e.target.style.color = 'var(--primary-green)'}
                              onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                              {info.value}
                            </a>
                          ) : (
                            <span style={{ color: 'var(--text-secondary)' }}>
                              {info.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                ))}

                {/* Social Links */}
                <Card className="mt-4">
                  <Card.Body className="p-3">
                    <h6 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>
                      {t('contact.follow_us') || 'Follow Us'}
                    </h6>
                    <div className="social-links d-flex gap-3">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            background: social.color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                            textDecoration: 'none',
                            transition: 'transform 0.3s ease'
                          }}
                          onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
                          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                        >
                          <i className={social.icon}></i>
                        </a>
                      ))}
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Map Section */}
      <section className="map-section py-5" style={{ background: 'var(--bg-secondary)' }}>
        <Container>
          <Row>
            <Col lg={12}>
              <h3 className="text-center mb-4" style={{ color: 'var(--primary-green)' }}>
                {t('contact.find_us') || 'Find Us'}
              </h3>
              <div 
                className="map-container"
                style={{
                  height: '400px',
                  borderRadius: '15px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-color)'
                }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830894612!2d28.973935255453125!3d41.00537910473766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turkey!5e0!3m2!1sen!2str!4v1680000000000!5m2!1sen!2str"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={t('contact.map_title') || 'Softinity Office Location'}
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Response Time Section */}
      <section className="response-time py-5">
        <Container>
          <Row className="text-center">
            <Col lg={12}>
              <h3 className="mb-4" style={{ color: 'var(--primary-green)' }}>
                {t('contact.response_time.title') || 'Our Response Time'}
              </h3>
              <Row>
                <Col lg={4} md={4} className="mb-3">
                  <div className="response-stat">
                    <h2 style={{ color: 'var(--primary-green)', fontSize: '3rem', fontWeight: 'bold' }}>
                      &lt; 1h
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {t('contact.response_time.email') || 'Email Response'}
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={4} className="mb-3">
                  <div className="response-stat">
                    <h2 style={{ color: 'var(--primary-purple)', fontSize: '3rem', fontWeight: 'bold' }}>
                      24/7
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {t('contact.response_time.support') || 'Support Available'}
                    </p>
                  </div>
                </Col>
                <Col lg={4} md={4} className="mb-3">
                  <div className="response-stat">
                    <h2 style={{ color: 'var(--accent-green)', fontSize: '3rem', fontWeight: 'bold' }}>
                      48h
                    </h2>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      {t('contact.response_time.proposal') || 'Project Proposal'}
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
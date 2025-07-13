import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom CSS
import './styles/darkTheme.css';

// i18n configuration
import './i18n';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import Loading from './components/Loading';
import PageTransition from './components/PageTransition';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Error Boundary
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary" style={{ 
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          textAlign: 'center',
          padding: '2rem'
        }}>
          <div>
            <h2 style={{ color: 'var(--primary-green)', marginBottom: '1rem' }}>
              Oops! Something went wrong
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
              We're sorry for the inconvenience. Please refresh the page or contact us if the problem persists.
            </p>
            <button 
              onClick={() => window.location.reload()}
              style={{
                background: 'var(--gradient-primary)',
                border: 'none',
                borderRadius: '8px',
                padding: '12px 30px',
                color: 'white',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const { i18n } = useTranslation();

  // Set document direction for RTL languages
  React.useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Update page title based on language
    const titles = {
      en: 'Softinity - Smart Solutions That Code the Future',
      tr: 'Softinity - Geleceği Kodlayan Akıllı Çözümler',
      ar: 'سوفتينيتي - حلول ذكية تبرمج المستقبل'
    };
    document.title = titles[i18n.language] || titles.en;
  }, [i18n.language]);

  return (
    <ErrorBoundary>
      <Router>
        <div className="App main-container">
          <Navbar />
          
          <main>
            <Suspense fallback={<Loading text="Loading page..." />}>
              <Routes>
                <Route path="/" element={
                  <PageTransition>
                    <HomePage />
                  </PageTransition>
                } />
                <Route path="/about" element={
                  <PageTransition>
                    <AboutPage />
                  </PageTransition>
                } />
                <Route path="/services" element={
                  <PageTransition>
                    <ServicesPage />
                  </PageTransition>
                } />
                <Route path="/projects" element={
                  <PageTransition>
                    <ProjectsPage />
                  </PageTransition>
                } />
                <Route path="/contact" element={
                  <PageTransition>
                    <ContactPage />
                  </PageTransition>
                } />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>

          <Footer />
          <WhatsAppChat />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
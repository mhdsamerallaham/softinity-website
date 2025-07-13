// i18n/index.js - Tamamen Düzeltilmiş Versiyon
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Tam çeviri kaynakları (tüm eksik anahtarlar eklendi)
const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "about": "About",
        "services": "Services",
        "projects": "Projects",
        "contact": "Contact"
      },
      "hero": {
        "title": "Welcome to Softinity",
        "subtitle": "We create innovative digital solutions that drive your business forward",
        "description": "Smart solutions that code the future with cutting-edge web development and AI-driven innovations",
        "cta": "Get Started",
        "learnMore": "Learn More"
      },
      "home": {
        "stats": {
          "projects": "Projects Completed",
          "clients": "Happy Clients", 
          "years": "Years Experience",
          "satisfaction": "Client Satisfaction"
        },
        "services": {
          "title": "What We Do Best",
          "subtitle": "We specialize in cutting-edge technology solutions that drive your business forward",
          "web_dev": {
            "title": "Web Development",
            "description": "Custom websites and web applications built with modern technologies"
          },
          "ai_data": {
            "title": "AI & Data Solutions", 
            "description": "Intelligent data analysis and machine learning solutions"
          },
          "analytics": {
            "title": "Analytics & Insights",
            "description": "Turn your data into actionable business insights"
          },
          "learn_more": "Learn More"
        },
        "technologies": {
          "title": "Technologies We Love",
          "subtitle": "Building with the latest and greatest tools"
        },
        "testimonials": {
          "title": "What Our Clients Say",
          "subtitle": "Don't just take our word for it",
          "0": {
            "text": "Outstanding work! Softinity delivered our project on time and exceeded our expectations."
          },
          "1": {
            "text": "Their AI solutions transformed our business processes. Highly recommended!"
          },
          "2": {
            "text": "Professional team with excellent communication. Will definitely work with them again."
          }
        },
        "cta": {
          "title": "Ready to Transform Your Ideas?",
          "description": "Let's work together to bring your vision to life with cutting-edge technology solutions",
          "start_project": "Start Your Project",
          "view_work": "View Our Work"
        }
      },
      "about": {
        "title": "About Softinity",
        "subtitle": "We are a passionate team of developers and data scientists dedicated to creating innovative solutions that drive digital transformation.",
        "vision": {
          "title": "Our Vision",
          "content": "To be the leading technology partner for businesses seeking innovative digital solutions and data-driven insights."
        },
        "mission": {
          "title": "Our Mission", 
          "content": "We empower businesses through cutting-edge web development, AI solutions, and data analytics to achieve sustainable growth."
        },
        "values": {
          "title": "Why Choose Us",
          "innovation": "Always pushing boundaries with cutting-edge technology",
          "quality": "Delivering excellence in every project we undertake",
          "collaboration": "Working together to achieve outstanding results",
          "excellence": "Striving for perfection in everything we do"
        },
        "stats": {
          "projects": "Projects Completed",
          "clients": "Happy Clients",
          "experience": "Years Experience", 
          "satisfaction": "Client Satisfaction"
        },
        "team": {
          "title": "Our Team",
          "subtitle": "Meet the experts behind Softinity"
        }
      },
      "services": {
        "title": "Our Services",
        "hero_description": "Comprehensive technology solutions designed to accelerate your business growth and digital transformation journey.",
        "get_quote": "Get Quote",
        "key_features": "Key Features",
        "learn_more": "Learn More",
        "webDevelopment": "Web Development",
        "webDevelopmentDesc": "Modern, responsive websites and web applications built with cutting-edge technologies",
        "aiSolutions": "AI Solutions",
        "aiSolutionsDesc": "Artificial intelligence and machine learning solutions to automate and optimize your processes",
        "dataAnalytics": "Data Analytics",
        "dataAnalyticsDesc": "Transform your data into actionable insights with advanced analytics and reporting",
        "consulting": "Technology Consulting",
        "consultingDesc": "Strategic technology consulting to help you make informed decisions",
        "web_dev": {
          "title": "Web Development",
          "description": "Modern, responsive websites and web applications built with cutting-edge technologies",
          "detailed_title": "Complete Web Development Solutions",
          "detailed_description": "From concept to deployment, we create stunning, functional websites that engage users and drive business growth.",
          "features": {
            "0": "Responsive Mobile-First Design",
            "1": "Modern Frontend Frameworks (React, Vue.js)",
            "2": "Backend Development & APIs",
            "3": "Database Design & Integration",
            "4": "SEO Optimization",
            "5": "Performance Optimization"
          },
          "types": {
            "corporate": "Corporate Websites",
            "corporate_desc": "Professional business websites that establish your brand presence",
            "ecommerce": "E-commerce Platforms", 
            "ecommerce_desc": "Full-featured online stores with payment integration",
            "portfolio": "Portfolio Websites",
            "portfolio_desc": "Showcase your work with stunning visual presentations"
          }
        },
        "data_ai": {
          "title": "AI & Data Solutions",
          "description": "Intelligent data analysis and machine learning solutions to optimize your business processes",
          "detailed_title": "Advanced AI & Data Analytics",
          "detailed_description": "Transform your data into competitive advantages with our cutting-edge AI and machine learning capabilities.",
          "features": {
            "0": "Machine Learning Models",
            "1": "Data Visualization Dashboards", 
            "2": "Predictive Analytics",
            "3": "Natural Language Processing",
            "4": "Computer Vision Solutions"
          },
          "types": {
            "dashboards": "Interactive Dashboards",
            "dashboards_desc": "Real-time data visualization and business intelligence",
            "machine_learning": "Machine Learning",
            "machine_learning_desc": "Custom ML models for prediction and automation",
            "chatbots": "AI Chatbots",
            "chatbots_desc": "Intelligent conversational interfaces for customer service"
          }
        },
        "technologies": {
          "title": "Technologies We Use",
          "description": "We work with the most advanced and reliable technologies in the industry",
          "frontend": "Frontend",
          "backend": "Backend",
          "database": "Database",
          "cloud": "Cloud"
        },
        "process": {
          "title": "Our Development Process", 
          "description": "A proven methodology that ensures project success from start to finish",
          "step1": {
            "title": "Discovery & Planning",
            "description": "Understanding your needs and defining project scope"
          },
          "step2": {
            "title": "Design & Prototyping", 
            "description": "Creating user-centered designs and interactive prototypes"
          },
          "step3": {
            "title": "Development & Testing",
            "description": "Building robust solutions with comprehensive quality assurance"
          },
          "step4": {
            "title": "Deployment & Support",
            "description": "Launching your project and providing ongoing maintenance"
          }
        },
        "cta": {
          "title": "Ready to Start Your Project?",
          "description": "Let's discuss how we can bring your vision to life",
          "contact": "Contact Us",
          "view_projects": "View Projects"
        }
      },
      "projects": {
        "title": "Our Projects",
        "hero_description": "Explore our portfolio of successful projects that showcase our expertise in web development, AI solutions, and data analytics.",
        "filters": {
          "all": "All Projects",
          "corporate": "Corporate",
          "ecommerce": "E-commerce", 
          "data_ai": "Data & AI",
          "portfolio": "Portfolio",
          "web_development": "Web Development"
        },
        "categories": {
          "corporate": "Corporate",
          "ecommerce": "E-commerce",
          "data_ai": "Data & AI", 
          "portfolio": "Portfolio",
          "web_development": "Web Development"
        },
        "view_project": "View Project",
        "view_live": "View Live",
        "view_code": "View Code",
        "technologies": "Technologies Used",
        "key_features": "Key Features",
        "duration": "Duration",
        "no_projects": "No projects found",
        "no_projects_desc": "Try adjusting your filters to see more projects",
        "stats": {
          "completed": "Projects Completed",
          "happy_clients": "Happy Clients",
          "categories": "Categories",
          "satisfaction": "Client Satisfaction"
        },
        "cta": {
          "title": "Have a Project in Mind?",
          "description": "Let's work together to create something amazing",
          "start_project": "Start Your Project",
          "discuss_idea": "Discuss Your Idea"
        },
        "dummy": {
          "techcorp": {
            "description": "Modern corporate website with advanced features",
            "full_description": "A comprehensive corporate website showcasing company services and achievements with modern design and functionality.",
            "features": {
              "0": "Responsive design across all devices",
              "1": "Content management system",
              "2": "SEO optimization",
              "3": "Multi-language support"
            }
          },
          "shopmax": {
            "description": "Full-featured e-commerce platform",
            "full_description": "Complete online shopping solution with payment integration, inventory management, and customer analytics.",
            "features": {
              "0": "Secure payment processing",
              "1": "Inventory management",
              "2": "Customer analytics dashboard",
              "3": "Mobile-optimized shopping experience"
            }
          },
          "dataviz": {
            "description": "Interactive data visualization dashboard",
            "full_description": "Advanced analytics dashboard providing real-time insights and data visualization for business intelligence.",
            "features": {
              "0": "Real-time data processing",
              "1": "Interactive charts and graphs",
              "2": "Custom analytics reports",
              "3": "Data export capabilities"
            }
          },
          "creative": {
            "description": "Creative portfolio showcase website",
            "full_description": "Stunning portfolio website showcasing creative work with modern animations and interactive elements.",
            "features": {
              "0": "Portfolio gallery with filtering",
              "1": "Smooth animations and transitions",
              "2": "Contact form integration",
              "3": "Social media integration"
            }
          },
          "financeai": {
            "description": "AI-powered financial prediction system",
            "full_description": "Advanced machine learning system for financial forecasting and investment analysis.",
            "features": {
              "0": "Predictive modeling algorithms",
              "1": "Risk assessment tools",
              "2": "Real-time market analysis",
              "3": "Automated reporting system"
            }
          },
          "restaurant": {
            "description": "Restaurant management system",
            "full_description": "Comprehensive restaurant management solution with ordering, inventory, and customer management features.",
            "features": {
              "0": "Online ordering system",
              "1": "Inventory management",
              "2": "Customer relationship management",
              "3": "Staff scheduling tools"
            }
          }
        }
      },
      "contact": {
        "title": "Contact Us",
        "hero_description": "Ready to start your next project? Get in touch with our team of experts and let's build something amazing together.",
        "name": "Full Name",
        "email": "Email Address",
        "phone": "Phone Number",
        "subject": "Subject",
        "message": "Message",
        "send": "Send Message",
        "get_in_touch": "Get in Touch",
        "follow_us": "Follow Us",
        "find_us": "Find Us",
        "map_title": "Softinity Office Location",
        "placeholders": {
          "name": "Enter your full name",
          "email": "Enter your email address",
          "phone": "Enter your phone number",
          "subject": "Select a subject",
          "message": "Tell us about your project or inquiry"
        },
        "subjects": {
          "web_development": "Web Development",
          "data_ai": "Data & AI Solutions",
          "consultation": "Consultation",
          "support": "Support",
          "other": "Other"
        },
        "validation": {
          "name_required": "Name is required",
          "name_min_length": "Name must be at least 2 characters",
          "email_required": "Email is required",
          "email_invalid": "Please enter a valid email address",
          "phone_invalid": "Please enter a valid phone number",
          "subject_required": "Subject is required",
          "message_required": "Message is required",
          "message_min_length": "Message must be at least 10 characters"
        },
        "form": {
          "title": "Send us a Message",
          "sending": "Sending...",
          "success_message": "Thank you! Your message has been sent successfully. We'll get back to you soon.",
          "error_message": "Sorry, there was an error sending your message. Please try again later."
        },
        "info": {
          "email": "Email",
          "phone": "Phone",
          "address": "Address",
          "hours": "Business Hours",
          "address_value": "Teknokent Building, Istanbul, Turkey",
          "hours_value": "Monday - Friday: 9:00 AM - 6:00 PM"
        },
        "response_time": {
          "title": "Our Response Time",
          "email": "Email Response",
          "support": "Support Available",
          "proposal": "Project Proposal"
        }
      },
      "footer": {
        "company": "Softinity",
        "description": "Leading technology solutions provider specializing in web development and AI-driven innovations.",
        "quickLinks": "Quick Links",
        "services": "Services",
        "contact": "Contact",
        "social": "Follow Us",
        "copyright": "© 2025 Softinity. All rights reserved.",
        "developed": "Developed by Samer Allaham"
      },
      "common": {
        "loading": "Loading...",
        "error": "An error occurred",
        "tryAgain": "Try Again",
        "close": "Close",
        "save": "Save",
        "cancel": "Cancel",
        "submit": "Submit",
        "getStarted": "Get Started",
        "learnMore": "Learn More"
      },
      "error": {
        "404": {
          "title": "Oops! Page Not Found",
          "description": "The page you're looking for seems to have been moved, deleted, or doesn't exist.",
          "go_home": "Go to Homepage",
          "go_back": "Go Back",
          "suggestions": "You might be looking for:",
          "fun_text": "Don't worry, even rockets sometimes miss their target!"
        }
      }
    }
  },
  tr: {
    translation: {
      "nav": {
        "home": "Ana Sayfa",
        "about": "Hakkımızda",
        "services": "Hizmetler",
        "projects": "Projeler",
        "contact": "İletişim"
      },
      "hero": {
        "title": "Softinity'ye Hoş Geldiniz",
        "subtitle": "İşinizi ileriye taşıyan yenilikçi dijital çözümler yaratıyoruz",
        "description": "Geleceği kodlayan akıllı çözümler - modern web geliştirme ve yapay zeka odaklı yenilikler",
        "cta": "Başlayın",
        "learnMore": "Daha Fazla Bilgi"
      },
      "home": {
        "stats": {
          "projects": "Tamamlanan Proje",
          "clients": "Mutlu Müşteri",
          "years": "Yıl Deneyim",
          "satisfaction": "Müşteri Memnuniyeti"
        },
        "services": {
          "title": "En İyi Yaptığımız İşler",
          "subtitle": "İşinizi ileriye taşıyan en son teknoloji çözümlerinde uzmanlaşıyoruz",
          "web_dev": {
            "title": "Web Geliştirme",
            "description": "Modern teknolojilerle geliştirilmiş özel web siteleri ve web uygulamaları"
          },
          "ai_data": {
            "title": "Yapay Zeka ve Veri Çözümleri",
            "description": "Akıllı veri analizi ve makine öğrenimi çözümleri"
          },
          "analytics": {
            "title": "Analitik ve İçgörüler",
            "description": "Verilerinizi eyleme dönüştürülebilir iş içgörülerine çevirin"
          },
          "learn_more": "Daha Fazla Bilgi"
        },
        "technologies": {
          "title": "Sevdiğimiz Teknolojiler",
          "subtitle": "En son ve en iyi araçlarla geliştirme"
        },
        "testimonials": {
          "title": "Müşterilerimiz Ne Diyor",
          "subtitle": "Sadece bizim sözümüze güvenmeyin",
          "0": {
            "text": "Mükemmel iş! Softinity projemizi zamanında teslim etti ve beklentilerimizi aştı."
          },
          "1": {
            "text": "Yapay zeka çözümleri iş süreçlerimizi dönüştürdü. Kesinlikle tavsiye ederim!"
          },
          "2": {
            "text": "Mükemmel iletişimi olan profesyonel ekip. Kesinlikle tekrar çalışacağız."
          }
        },
        "cta": {
          "title": "Fikirlerinizi Dönüştürmeye Hazır mısınız?",
          "description": "Vizyonunuzu en son teknoloji çözümleriyle hayata geçirmek için birlikte çalışalım",
          "start_project": "Projenizi Başlatın",
          "view_work": "Çalışmalarımızı Görün"
        }
      },
      "about": {
        "title": "Softinity Hakkında",
        "subtitle": "Dijital dönüşümü yönlendiren yenilikçi çözümler yaratmaya adanmış tutkulu bir geliştirici ve veri bilimci ekibiyiz.",
        "vision": {
          "title": "Vizyonumuz",
          "content": "Yenilikçi dijital çözümler ve veri odaklı içgörüler arayan işletmeler için önde gelen teknoloji ortağı olmak."
        },
        "mission": {
          "title": "Misyonumuz",
          "content": "En son web geliştirme, yapay zeka çözümleri ve veri analitiği ile işletmeleri güçlendirerek sürdürülebilir büyüme elde etmelerini sağlıyoruz."
        },
        "values": {
          "title": "Neden Bizi Seçmelisiniz",
          "innovation": "En son teknoloji ile sınırları sürekli aşıyoruz",
          "quality": "Üstlendiğimiz her projede mükemmellik sunuyoruz",
          "collaboration": "Olağanüstü sonuçlar elde etmek için birlikte çalışıyoruz",
          "excellence": "Yaptığımız her şeyde mükemmellik için çabalıyoruz"
        },
        "stats": {
          "projects": "Tamamlanan Proje",
          "clients": "Mutlu Müşteri",
          "experience": "Yıl Deneyim",
          "satisfaction": "Müşteri Memnuniyeti"
        },
        "team": {
          "title": "Ekibimiz",
          "subtitle": "Softinity'nin arkasındaki uzmanlarla tanışın"
        }
      },
      "services": {
        "title": "Hizmetlerimiz",
        "hero_description": "İş büyümenizi ve dijital dönüşüm yolculuğunuzu hızlandırmak için tasarlanmış kapsamlı teknoloji çözümleri.",
        "get_quote": "Teklif Al",
        "key_features": "Ana Özellikler",
        "learn_more": "Daha Fazla Bilgi",
        "webDevelopment": "Web Geliştirme",
        "webDevelopmentDesc": "En son teknolojilerle geliştirilmiş modern, duyarlı web siteleri ve web uygulamaları",
        "aiSolutions": "Yapay Zeka Çözümleri",
        "aiSolutionsDesc": "Süreçlerinizi otomatikleştirmek ve optimize etmek için yapay zeka ve makine öğrenimi çözümleri",
        "dataAnalytics": "Veri Analitiği",
        "dataAnalyticsDesc": "Gelişmiş analitik ve raporlama ile verilerinizi eyleme dönüştürülebilir içgörülere çevirin",
        "consulting": "Teknoloji Danışmanlığı",
        "consultingDesc": "Bilinçli kararlar vermenize yardımcı olacak stratejik teknoloji danışmanlığı",
        "web_dev": {
          "title": "Web Geliştirme",
          "description": "En son teknolojilerle geliştirilmiş modern, duyarlı web siteleri ve web uygulamaları",
          "detailed_title": "Kapsamlı Web Geliştirme Çözümleri",
          "detailed_description": "Konseptten dağıtıma kadar, kullanıcıları cezbeden ve iş büyümesini yönlendiren çarpıcı, işlevsel web siteleri yaratıyoruz.",
          "features": {
            "0": "Duyarlı Mobil Öncelikli Tasarım",
            "1": "Modern Frontend Framework'leri (React, Vue.js)",
            "2": "Backend Geliştirme ve API'lar",
            "3": "Veritabanı Tasarımı ve Entegrasyonu",
            "4": "SEO Optimizasyonu",
            "5": "Performans Optimizasyonu"
          },
          "types": {
            "corporate": "Kurumsal Web Siteleri",
            "corporate_desc": "Marka varlığınızı oluşturan profesyonel iş web siteleri",
            "ecommerce": "E-ticaret Platformları",
            "ecommerce_desc": "Ödeme entegrasyonu ile tam özellikli online mağazalar",
            "portfolio": "Portföy Web Siteleri",
            "portfolio_desc": "Çalışmalarınızı çarpıcı görsel sunumlarla sergileyin"
          }
        },
        "data_ai": {
          "title": "Yapay Zeka ve Veri Çözümleri",
          "description": "İş süreçlerinizi optimize etmek için akıllı veri analizi ve makine öğrenimi çözümleri",
          "detailed_title": "Gelişmiş Yapay Zeka ve Veri Analitiği",
          "detailed_description": "En son yapay zeka ve makine öğrenimi yeteneklerimizle verilerinizi rekabet avantajlarına dönüştürün.",
          "features": {
            "0": "Makine Öğrenimi Modelleri",
            "1": "Veri Görselleştirme Panoları",
            "2": "Tahmine Dayalı Analitik",
            "3": "Doğal Dil İşleme",
            "4": "Bilgisayarlı Görü Çözümleri"
          },
          "types": {
            "dashboards": "Etkileşimli Panolar",
            "dashboards_desc": "Gerçek zamanlı veri görselleştirme ve iş zekası",
            "machine_learning": "Makine Öğrenimi",
            "machine_learning_desc": "Tahmin ve otomasyon için özel ML modelleri",
            "chatbots": "Yapay Zeka Chatbot'ları",
            "chatbots_desc": "Müşteri hizmetleri için akıllı konuşma arayüzleri"
          }
        },
        "technologies": {
          "title": "Kullandığımız Teknolojiler",
          "description": "Sektördeki en gelişmiş ve güvenilir teknolojilerle çalışıyoruz",
          "frontend": "Frontend",
          "backend": "Backend",
          "database": "Veritabanı",
          "cloud": "Bulut"
        },
        "process": {
          "title": "Geliştirme Sürecimiz",
          "description": "Baştan sona proje başarısını garanti eden kanıtlanmış metodoloji",
          "step1": {
            "title": "Keşif ve Planlama",
            "description": "İhtiyaçlarınızı anlama ve proje kapsamını belirleme"
          },
          "step2": {
            "title": "Tasarım ve Prototipleme",
            "description": "Kullanıcı merkezli tasarımlar ve etkileşimli prototipler yaratma"
          },
          "step3": {
            "title": "Geliştirme ve Test",
            "description": "Kapsamlı kalite güvencesi ile sağlam çözümler geliştirme"
          },
          "step4": {
            "title": "Dağıtım ve Destek",
            "description": "Projenizi başlatma ve sürekli bakım sağlama"
          }
        },
        "cta": {
          "title": "Projenizi Başlatmaya Hazır mısınız?",
          "description": "Vizyonunuzu nasıl hayata geçirebileceğimizi konuşalım",
          "contact": "İletişime Geçin",
          "view_projects": "Projeleri Görüntüle"
        }
      },
      "projects": {
        "title": "Projelerimiz",
        "hero_description": "Web geliştirme, yapay zeka çözümleri ve veri analitiğindeki uzmanlığımızı sergileyen başarılı proje portföyümüzü keşfedin.",
        "filters": {
          "all": "Tüm Projeler",
          "corporate": "Kurumsal",
          "ecommerce": "E-ticaret",
          "data_ai": "Veri ve Yapay Zeka",
          "portfolio": "Portföy",
          "web_development": "Web Geliştirme"
        },
        "categories": {
          "corporate": "Kurumsal",
          "ecommerce": "E-ticaret",
          "data_ai": "Veri ve Yapay Zeka",
          "portfolio": "Portföy",
          "web_development": "Web Geliştirme"
        },
        "view_project": "Projeyi Görüntüle",
        "view_live": "Canlı Görüntüle",
        "view_code": "Kodu Görüntüle",
        "technologies": "Kullanılan Teknolojiler",
        "key_features": "Ana Özellikler",
        "duration": "Süre",
        "no_projects": "Proje bulunamadı",
        "no_projects_desc": "Daha fazla proje görmek için filtrelerinizi ayarlayın",
        "stats": {
          "completed": "Tamamlanan Proje",
          "happy_clients": "Mutlu Müşteri",
          "categories": "Kategori",
          "satisfaction": "Müşteri Memnuniyeti"
        },
        "cta": {
          "title": "Aklınızda Bir Proje mi Var?",
          "description": "Harika bir şeyler yaratmak için birlikte çalışalım",
          "start_project": "Projenizi Başlatın",
          "discuss_idea": "Fikrinizi Tartışın"
        },
        "dummy": {
          "techcorp": {
            "description": "Gelişmiş özellikli modern kurumsal web sitesi",
            "full_description": "Modern tasarım ve işlevsellik ile şirket hizmetlerini ve başarılarını sergileyen kapsamlı kurumsal web sitesi.",
            "features": {
              "0": "Tüm cihazlarda duyarlı tasarım",
              "1": "İçerik yönetim sistemi",
              "2": "SEO optimizasyonu",
              "3": "Çoklu dil desteği"
            }
          },
          "shopmax": {
            "description": "Tam özellikli e-ticaret platformu",
            "full_description": "Ödeme entegrasyonu, envanter yönetimi ve müşteri analitiği ile eksiksiz online alışveriş çözümü.",
            "features": {
              "0": "Güvenli ödeme işleme",
              "1": "Envanter yönetimi",
              "2": "Müşteri analitik panosu",
              "3": "Mobil optimize alışveriş deneyimi"
            }
          },
          "dataviz": {
            "description": "Etkileşimli veri görselleştirme panosu",
            "full_description": "İş zekası için gerçek zamanlı içgörüler ve veri görselleştirme sağlayan gelişmiş analitik panosu.",
            "features": {
              "0": "Gerçek zamanlı veri işleme",
              "1": "Etkileşimli grafik ve çizelgeler",
              "2": "Özel analitik raporları",
              "3": "Veri dışa aktarma yetenekleri"
            }
          },
          "creative": {
            "description": "Yaratıcı portföy vitrin web sitesi",
            "full_description": "Modern animasyonlar ve etkileşimli öğelerle yaratıcı çalışmaları sergileyen çarpıcı portföy web sitesi.",
            "features": {
              "0": "Filtreleme ile portföy galerisi",
              "1": "Akıcı animasyonlar ve geçişler",
              "2": "İletişim formu entegrasyonu",
              "3": "Sosyal medya entegrasyonu"
            }
          },
          "financeai": {
            "description": "Yapay zeka destekli finansal tahmin sistemi",
            "full_description": "Finansal tahmin ve yatırım analizi için gelişmiş makine öğrenimi sistemi.",
            "features": {
              "0": "Tahmine dayalı modelleme algoritmaları",
              "1": "Risk değerlendirme araçları",
              "2": "Gerçek zamanlı piyasa analizi",
              "3": "Otomatik raporlama sistemi"
            }
          },
          "restaurant": {
            "description": "Restoran yönetim sistemi",
            "full_description": "Sipariş, envanter ve müşteri yönetimi özellikleri ile kapsamlı restoran yönetim çözümü.",
            "features": {
              "0": "Online sipariş sistemi",
              "1": "Envanter yönetimi",
              "2": "Müşteri ilişkileri yönetimi",
              "3": "Personel çizelgeleme araçları"
            }
          }
        }
      },
      "contact": {
        "title": "İletişim",
        "hero_description": "Bir sonraki projenizi başlatmaya hazır mısınız? Uzman ekibimizle iletişime geçin ve birlikte harika bir şeyler inşa edelim.",
        "name": "Ad Soyad",
        "email": "E-posta Adresi",
        "phone": "Telefon Numarası",
        "subject": "Konu",
        "message": "Mesaj",
        "send": "Mesaj Gönder",
        "get_in_touch": "İletişime Geçin",
        "follow_us": "Bizi Takip Edin",
        "find_us": "Bizi Bulun",
        "map_title": "Softinity Ofis Konumu",
        "placeholders": {
          "name": "Adınızı ve soyadınızı girin",
          "email": "E-posta adresinizi girin",
          "phone": "Telefon numaranızı girin",
          "subject": "Bir konu seçin",
          "message": "Projeniz veya sorgunuz hakkında bize bilgi verin"
        },
        "subjects": {
          "web_development": "Web Geliştirme",
          "data_ai": "Veri ve Yapay Zeka Çözümleri",
          "consultation": "Danışmanlık",
          "support": "Destek",
          "other": "Diğer"
        },
        "validation": {
          "name_required": "Ad gereklidir",
          "name_min_length": "Ad en az 2 karakter olmalıdır",
          "email_required": "E-posta gereklidir",
          "email_invalid": "Lütfen geçerli bir e-posta adresi girin",
          "phone_invalid": "Lütfen geçerli bir telefon numarası girin",
          "subject_required": "Konu gereklidir",
          "message_required": "Mesaj gereklidir",
          "message_min_length": "Mesaj en az 10 karakter olmalıdır"
        },
        "form": {
          "title": "Bize Mesaj Gönderin",
          "sending": "Gönderiliyor...",
          "success_message": "Teşekkürler! Mesajınız başarıyla gönderildi. Kısa sürede size geri döneceğiz.",
          "error_message": "Üzgünüz, mesajınızı gönderirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
        },
        "info": {
          "email": "E-posta",
          "phone": "Telefon",
          "address": "Adres",
          "hours": "Çalışma Saatleri",
          "address_value": "Teknokent Binası, İstanbul, Türkiye",
          "hours_value": "Pazartesi - Cuma: 09:00 - 18:00"
        },
        "response_time": {
          "title": "Yanıt Sürelerimiz",
          "email": "E-posta Yanıtı",
          "support": "Destek Mevcut",
          "proposal": "Proje Teklifi"
        }
      },
      "footer": {
        "company": "Softinity",
        "description": "Web geliştirme ve yapay zeka odaklı yeniliklerde uzmanlaşmış önde gelen teknoloji çözümleri sağlayıcısı.",
        "quickLinks": "Hızlı Bağlantılar",
        "services": "Hizmetler",
        "contact": "İletişim",
        "social": "Bizi Takip Edin",
        "copyright": "© 2025 Softinity. Tüm hakları saklıdır.",
        "developed": "Samer Allaham tarafından geliştirildi"
      },
      "common": {
        "loading": "Yükleniyor...",
        "error": "Bir hata oluştu",
        "tryAgain": "Tekrar Dene",
        "close": "Kapat",
        "save": "Kaydet",
        "cancel": "İptal",
        "submit": "Gönder",
        "getStarted": "Başlayın",
        "learnMore": "Daha Fazla Bilgi"
      },
      "error": {
        "404": {
          "title": "Sayfa Bulunamadı",
          "description": "Aradığınız sayfa taşınmış, silinmiş veya mevcut değil gibi görünüyor.",
          "go_home": "Ana Sayfaya Git",
          "go_back": "Geri Git",
          "suggestions": "Şunları arıyor olabilirsiniz:",
          "fun_text": "Merak etmeyin, roketler bile bazen hedefi ıskalıyor!"
        }
      }
    }
  },
  ar: {
    translation: {
      "nav": {
        "home": "الرئيسية",
        "about": "من نحن",
        "services": "الخدمات",
        "projects": "المشاريع",
        "contact": "اتصل بنا"
      },
      "hero": {
        "title": "مرحباً بكم في سوفتينيتي",
        "subtitle": "نحن نبتكر حلولاً رقمية مبتكرة تدفع أعمالكم نحو المقدمة",
        "description": "حلول ذكية تبرمج المستقبل - تطوير الويب الحديث والابتكارات المدفوعة بالذكاء الاصطناعي",
        "cta": "ابدأ الآن",
        "learnMore": "اعرف المزيد"
      },
      "home": {
        "stats": {
          "projects": "المشاريع المكتملة",
          "clients": "العملاء السعداء",
          "years": "سنوات الخبرة",
          "satisfaction": "رضا العملاء"
        },
        "services": {
          "title": "ما نقوم به بأفضل شكل",
          "subtitle": "نتخصص في حلول التكنولوجيا المتطورة التي تدفع أعمالكم للأمام",
          "web_dev": {
            "title": "تطوير المواقع",
            "description": "مواقع ويب وتطبيقات مخصصة مبنية بالتقنيات الحديثة"
          },
          "ai_data": {
            "title": "حلول الذكاء الاصطناعي والبيانات",
            "description": "تحليل البيانات الذكي وحلول التعلم الآلي"
          },
          "analytics": {
            "title": "التحليلات والرؤى",
            "description": "حول بياناتك إلى رؤى أعمال قابلة للتنفيذ"
          },
          "learn_more": "اعرف المزيد"
        },
        "technologies": {
          "title": "التقنيات التي نحبها",
          "subtitle": "البناء بأحدث وأفضل الأدوات"
        },
        "testimonials": {
          "title": "ماذا يقول عملاؤنا",
          "subtitle": "لا تأخذوا كلامنا فقط",
          "0": {
            "text": "عمل رائع! سوفتينيتي سلمت مشروعنا في الوقت المحدد وتجاوزت توقعاتنا."
          },
          "1": {
            "text": "حلول الذكاء الاصطناعي الخاصة بهم حولت عمليات أعمالنا. أوصي بشدة!"
          },
          "2": {
            "text": "فريق محترف مع تواصل ممتاز. سنعمل معهم مرة أخرى بالتأكيد."
          }
        },
        "cta": {
          "title": "مستعد لتحويل أفكارك؟",
          "description": "دعونا نعمل معاً لتحويل رؤيتكم إلى واقع بحلول التكنولوجيا المتطورة",
          "start_project": "ابدأ مشروعك",
          "view_work": "اطلع على أعمالنا"
        }
      },
      "about": {
        "title": "حول سوفتينيتي",
        "subtitle": "نحن فريق متحمس من المطورين وعلماء البيانات المكرسين لإنشاء حلول مبتكرة تقود التحول الرقمي.",
        "vision": {
          "title": "رؤيتنا",
          "content": "أن نكون الشريك التقني الرائد للشركات التي تسعى للحصول على حلول رقمية مبتكرة ورؤى مدفوعة بالبيانات."
        },
        "mission": {
          "title": "مهمتنا",
          "content": "نمكن الشركات من خلال تطوير الويب المتطور وحلول الذكاء الاصطناعي وتحليلات البيانات لتحقيق نمو مستدام."
        },
        "values": {
          "title": "لماذا تختارنا",
          "innovation": "نتقدم دائماً بالحدود مع التكنولوجيا المتطورة",
          "quality": "نقدم التميز في كل مشروع نتولاه",
          "collaboration": "نعمل معاً لتحقيق نتائج استثنائية",
          "excellence": "نسعى للكمال في كل ما نقوم به"
        },
        "stats": {
          "projects": "المشاريع المكتملة",
          "clients": "العملاء السعداء",
          "experience": "سنوات الخبرة",
          "satisfaction": "رضا العملاء"
        },
        "team": {
          "title": "فريقنا",
          "subtitle": "تعرف على الخبراء وراء سوفتينيتي"
        }
      },
      "services": {
        "title": "خدماتنا",
        "hero_description": "حلول تقنية شاملة مصممة لتسريع نمو أعمالكم ورحلة التحول الرقمي.",
        "get_quote": "احصل على عرض",
        "key_features": "الميزات الرئيسية",
        "learn_more": "اعرف المزيد",
        "webDevelopment": "تطوير المواقع",
        "webDevelopmentDesc": "مواقع ويب وتطبيقات ويب حديثة ومتجاوبة مبنية بأحدث التقنيات",
        "aiSolutions": "حلول الذكاء الاصطناعي",
        "aiSolutionsDesc": "حلول الذكاء الاصطناعي والتعلم الآلي لأتمتة وتحسين عملياتك",
        "dataAnalytics": "تحليل البيانات",
        "dataAnalyticsDesc": "حول بياناتك إلى رؤى قابلة للتنفيذ مع التحليلات والتقارير المتقدمة",
        "consulting": "الاستشارات التقنية",
        "consultingDesc": "استشارات تقنية استراتيجية لمساعدتك في اتخاذ قرارات مدروسة",
        "web_dev": {
          "title": "تطوير المواقع",
          "description": "مواقع ويب وتطبيقات ويب حديثة ومتجاوبة مبنية بأحدث التقنيات",
          "detailed_title": "حلول تطوير الويب الشاملة",
          "detailed_description": "من المفهوم إلى النشر، نقوم بإنشاء مواقع ويب مذهلة وعملية تشرك المستخدمين وتدفع نمو الأعمال.",
          "features": {
            "0": "تصميم متجاوب يعطي الأولوية للهاتف المحمول",
            "1": "أطر العمل الأمامية الحديثة (React, Vue.js)",
            "2": "تطوير الواجهة الخلفية وواجهات برمجة التطبيقات",
            "3": "تصميم وتكامل قواعد البيانات",
            "4": "تحسين محركات البحث",
            "5": "تحسين الأداء"
          },
          "types": {
            "corporate": "مواقع الشركات",
            "corporate_desc": "مواقع أعمال احترافية تؤسس حضور علامتكم التجارية",
            "ecommerce": "منصات التجارة الإلكترونية",
            "ecommerce_desc": "متاجر إلكترونية كاملة المميزات مع تكامل الدفع",
            "portfolio": "مواقع المحافظ",
            "portfolio_desc": "اعرضوا أعمالكم بعروض بصرية مذهلة"
          }
        },
        "data_ai": {
          "title": "حلول الذكاء الاصطناعي والبيانات",
          "description": "تحليل البيانات الذكي وحلول التعلم الآلي لتحسين عمليات أعمالكم",
          "detailed_title": "الذكاء الاصطناعي وتحليلات البيانات المتقدمة",
          "detailed_description": "حولوا بياناتكم إلى مزايا تنافسية مع قدراتنا المتطورة في الذكاء الاصطناعي والتعلم الآلي.",
          "features": {
            "0": "نماذج التعلم الآلي",
            "1": "لوحات تصور البيانات",
            "2": "التحليلات التنبؤية",
            "3": "معالجة اللغة الطبيعية",
            "4": "حلول الرؤية الحاسوبية"
          },
          "types": {
            "dashboards": "لوحات تفاعلية",
            "dashboards_desc": "تصور البيانات في الوقت الفعلي وذكاء الأعمال",
            "machine_learning": "التعلم الآلي",
            "machine_learning_desc": "نماذج تعلم آلي مخصصة للتنبؤ والأتمتة",
            "chatbots": "روبوتات الدردشة بالذكاء الاصطناعي",
            "chatbots_desc": "واجهات محادثة ذكية لخدمة العملاء"
          }
        },
        "technologies": {
          "title": "التقنيات التي نستخدمها",
          "description": "نعمل مع أحدث وأوثق التقنيات في الصناعة",
          "frontend": "الواجهة الأمامية",
          "backend": "الواجهة الخلفية",
          "database": "قاعدة البيانات",
          "cloud": "السحابة"
        },
        "process": {
          "title": "عملية التطوير لدينا",
          "description": "منهجية مثبتة تضمن نجاح المشروع من البداية إلى النهاية",
          "step1": {
            "title": "الاستكشاف والتخطيط",
            "description": "فهم احتياجاتكم وتحديد نطاق المشروع"
          },
          "step2": {
            "title": "التصميم والنماذج الأولية",
            "description": "إنشاء تصاميم محورها المستخدم ونماذج أولية تفاعلية"
          },
          "step3": {
            "title": "التطوير والاختبار",
            "description": "بناء حلول قوية مع ضمان الجودة الشامل"
          },
          "step4": {
            "title": "النشر والدعم",
            "description": "إطلاق مشروعكم وتقديم الصيانة المستمرة"
          }
        },
        "cta": {
          "title": "مستعد لبدء مشروعك؟",
          "description": "دعونا نناقش كيف يمكننا تحويل رؤيتكم إلى واقع",
          "contact": "اتصل بنا",
          "view_projects": "اطلع على المشاريع"
        }
      },
      "projects": {
        "title": "مشاريعنا",
        "hero_description": "استكشفوا محفظة مشاريعنا الناجحة التي تعرض خبرتنا في تطوير الويب وحلول الذكاء الاصطناعي وتحليلات البيانات.",
        "filters": {
          "all": "جميع المشاريع",
          "corporate": "شركات",
          "ecommerce": "تجارة إلكترونية",
          "data_ai": "البيانات والذكاء الاصطناعي",
          "portfolio": "معرض أعمال",
          "web_development": "تطوير الويب"
        },
        "categories": {
          "corporate": "شركات",
          "ecommerce": "تجارة إلكترونية",
          "data_ai": "البيانات والذكاء الاصطناعي",
          "portfolio": "معرض أعمال",
          "web_development": "تطوير الويب"
        },
        "view_project": "عرض المشروع",
        "view_live": "عرض مباشر",
        "view_code": "عرض الكود",
        "technologies": "التقنيات المستخدمة",
        "key_features": "الميزات الرئيسية",
        "duration": "المدة",
        "no_projects": "لم يتم العثور على مشاريع",
        "no_projects_desc": "جربوا تعديل المرشحات لرؤية المزيد من المشاريع",
        "stats": {
          "completed": "المشاريع المكتملة",
          "happy_clients": "العملاء السعداء",
          "categories": "الفئات",
          "satisfaction": "رضا العملاء"
        },
        "cta": {
          "title": "هل لديك مشروع في الذهن؟",
          "description": "دعونا نعمل معاً لإنشاء شيء رائع",
          "start_project": "ابدأ مشروعك",
          "discuss_idea": "ناقش فكرتك"
        },
        "dummy": {
          "techcorp": {
            "description": "موقع شركة حديث بميزات متقدمة",
            "full_description": "موقع شركة شامل يعرض خدمات الشركة وإنجازاتها بتصميم حديث ووظائف متقدمة.",
            "features": {
              "0": "تصميم متجاوب على جميع الأجهزة",
              "1": "نظام إدارة المحتوى",
              "2": "تحسين محركات البحث",
              "3": "دعم متعدد اللغات"
            }
          },
          "shopmax": {
            "description": "منصة تجارة إلكترونية كاملة المميزات",
            "full_description": "حل تسوق إلكتروني شامل مع تكامل الدفع وإدارة المخزون وتحليلات العملاء.",
            "features": {
              "0": "معالجة دفع آمنة",
              "1": "إدارة المخزون",
              "2": "لوحة تحليلات العملاء",
              "3": "تجربة تسوق محسنة للهاتف المحمول"
            }
          },
          "dataviz": {
            "description": "لوحة تصور البيانات التفاعلية",
            "full_description": "لوحة تحليلات متقدمة توفر رؤى في الوقت الفعلي وتصور البيانات لذكاء الأعمال.",
            "features": {
              "0": "معالجة البيانات في الوقت الفعلي",
              "1": "مخططات ورسوم بيانية تفاعلية",
              "2": "تقارير تحليلية مخصصة",
              "3": "قدرات تصدير البيانات"
            }
          },
          "creative": {
            "description": "موقع عرض محفظة إبداعية",
            "full_description": "موقع محفظة مذهل يعرض الأعمال الإبداعية بالرسوم المتحركة الحديثة والعناصر التفاعلية.",
            "features": {
              "0": "معرض محفظة مع التصفية",
              "1": "رسوم متحركة وانتقالات سلسة",
              "2": "تكامل نموذج الاتصال",
              "3": "تكامل وسائل التواصل الاجتماعي"
            }
          },
          "financeai": {
            "description": "نظام التنبؤ المالي بالذكاء الاصطناعي",
            "full_description": "نظام تعلم آلي متقدم للتنبؤ المالي وتحليل الاستثمار.",
            "features": {
              "0": "خوارزميات النمذجة التنبؤية",
              "1": "أدوات تقييم المخاطر",
              "2": "تحليل السوق في الوقت الفعلي",
              "3": "نظام التقارير الآلي"
            }
          },
          "restaurant": {
            "description": "نظام إدارة المطاعم",
            "full_description": "حل إدارة مطاعم شامل مع ميزات الطلب وإدارة المخزون وإدارة العملاء.",
            "features": {
              "0": "نظام الطلب عبر الإنترنت",
              "1": "إدارة المخزون",
              "2": "إدارة علاقات العملاء",
              "3": "أدوات جدولة الموظفين"
            }
          }
        }
      },
      "contact": {
        "title": "اتصل بنا",
        "hero_description": "مستعد لبدء مشروعك التالي؟ تواصل مع فريق خبرائنا ولنبني شيئاً رائعاً معاً.",
        "name": "الاسم الكامل",
        "email": "عنوان البريد الإلكتروني",
        "phone": "رقم الهاتف",
        "subject": "الموضوع",
        "message": "الرسالة",
        "send": "إرسال الرسالة",
        "get_in_touch": "تواصل معنا",
        "follow_us": "تابعنا",
        "find_us": "اعثر علينا",
        "map_title": "موقع مكتب سوفتينيتي",
        "placeholders": {
          "name": "أدخل اسمك الكامل",
          "email": "أدخل عنوان بريدك الإلكتروني",
          "phone": "أدخل رقم هاتفك",
          "subject": "اختر موضوعاً",
          "message": "أخبرنا عن مشروعك أو استفسارك"
        },
        "subjects": {
          "web_development": "تطوير المواقع",
          "data_ai": "حلول البيانات والذكاء الاصطناعي",
          "consultation": "استشارة",
          "support": "الدعم",
          "other": "أخرى"
        },
        "validation": {
          "name_required": "الاسم مطلوب",
          "name_min_length": "يجب أن يكون الاسم حرفين على الأقل",
          "email_required": "البريد الإلكتروني مطلوب",
          "email_invalid": "يرجى إدخال عنوان بريد إلكتروني صحيح",
          "phone_invalid": "يرجى إدخال رقم هاتف صحيح",
          "subject_required": "الموضوع مطلوب",
          "message_required": "الرسالة مطلوبة",
          "message_min_length": "يجب أن تكون الرسالة 10 أحرف على الأقل"
        },
        "form": {
          "title": "أرسل لنا رسالة",
          "sending": "جارٍ الإرسال...",
          "success_message": "شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.",
          "error_message": "عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى لاحقاً."
        },
        "info": {
          "email": "البريد الإلكتروني",
          "phone": "الهاتف",
          "address": "العنوان",
          "hours": "ساعات العمل",
          "address_value": "مبنى تكنوكنت، إسطنبول، تركيا",
          "hours_value": "الاثنين - الجمعة: 09:00 - 18:00"
        },
        "response_time": {
          "title": "أوقات الاستجابة لدينا",
          "email": "رد البريد الإلكتروني",
          "support": "الدعم متاح",
          "proposal": "اقتراح المشروع"
        }
      },
      "footer": {
        "company": "سوفتينيتي",
        "description": "مقدم حلول تقنية رائد متخصص في تطوير الويب والابتكارات المدفوعة بالذكاء الاصطناعي.",
        "quickLinks": "روابط سريعة",
        "services": "الخدمات",
        "contact": "اتصل بنا",
        "social": "تابعنا",
        "copyright": "© 2025 سوفتينيتي. جميع الحقوق محفوظة.",
        "developed": "تم التطوير بواسطة سامر علاهام"
      },
      "common": {
        "loading": "جارٍ التحميل...",
        "error": "حدث خطأ",
        "tryAgain": "حاول مرة أخرى",
        "close": "إغلاق",
        "save": "حفظ",
        "cancel": "إلغاء",
        "submit": "إرسال",
        "getStarted": "ابدأ الآن",
        "learnMore": "اعرف المزيد"
      },
      "error": {
        "404": {
          "title": "عذراً! الصفحة غير موجودة",
          "description": "الصفحة التي تبحث عنها يبدو أنها نُقلت أو حُذفت أو غير موجودة.",
          "go_home": "الذهاب للصفحة الرئيسية",
          "go_back": "العودة",
          "suggestions": "قد تبحث عن:",
          "fun_text": "لا تقلق، حتى الصواريخ تخطئ الهدف أحياناً!"
        }
      }
    }
  }
};

// Gelişmiş dil algılama ayarları
const detectionOptions = {
  order: [
    'localStorage',
    'sessionStorage', 
    'navigator',
    'querystring',
    'htmlTag'
  ],
  caches: ['localStorage', 'sessionStorage'],
  lookupQuerystring: 'lng',
  lookupLocalStorage: 'softinity_language',
  lookupSessionStorage: 'softinity_language',
  checkWhitelist: true,
  fallbackLng: 'en'
};

// i18next'i daha basit yapılandırma ile başlat
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false, // Konsol loglarını önlemek için false
    
    // Basit algılama seçenekleri
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    
    // HTTP backend olmadan doğrudan kaynaklar
    resources,
    
    interpolation: {
      escapeValue: false
    },
    
    react: {
      useSuspense: false // ÖNEMLİ: Yükleme sorunlarını önlemek için suspense'i devre dışı bırak
    },
    
    load: 'languageOnly',
    preload: ['en', 'tr', 'ar'],
    supportedLngs: ['en', 'tr', 'ar'],
    nonExplicitSupportedLngs: false,
    cleanCode: true,
    defaultNS: 'translation',
    ns: ['translation'],
    keySeparator: '.',
    nsSeparator: ':',
    returnObjects: false,
    returnEmptyString: false,
    returnNull: false,
    joinArrays: false,
    postProcess: false,
    
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Eksik çeviri anahtarı: ${key} dil için: ${lng}`);
      }
    },
    
    saveMissing: process.env.NODE_ENV === 'development',
    updateMissing: false
  });

// RTL desteği ile dil değişim işleyicisi
i18n.on('languageChanged', (lng) => {
  const direction = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.dir = direction;
  document.documentElement.lang = lng;
  
  localStorage.setItem('softinity_language', lng);
  sessionStorage.setItem('softinity_language', lng);
  
  document.documentElement.className = document.documentElement.className
    .replace(/lang-\w+/g, '')
    .trim();
  document.documentElement.classList.add(`lang-${lng}`);
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`🌐 Dil değiştirildi: ${lng} (${direction})`);
  }
});

// Yardımcı fonksiyonlar
export const changeLanguage = (lng) => {
  return i18n.changeLanguage(lng);
};

export const getCurrentLanguage = () => {
  return i18n.language;
};

export const getAvailableLanguages = () => {
  return i18n.options.supportedLngs.filter(lng => lng !== 'cimode');
};

export const isRTL = (lng = i18n.language) => {
  return lng === 'ar';
};

export const getLanguageDisplayName = (lng) => {
  const names = {
    en: 'English',
    tr: 'Türkçe',
    ar: 'العربية'
  };
  return names[lng] || lng;
};

export const getLanguageFlag = (lng) => {
  const flags = {
    en: '🇺🇸',
    tr: '🇹🇷',
    ar: '🇸🇦'
  };
  return flags[lng] || '🌐';
};

// Sayfa yüklendiğinde yönü başlat
document.addEventListener('DOMContentLoaded', () => {
  const currentLang = i18n.language;
  const direction = isRTL(currentLang) ? 'rtl' : 'ltr';
  document.documentElement.dir = direction;
  document.documentElement.lang = currentLang;
  document.documentElement.classList.add(`lang-${currentLang}`);
});

export default i18n;
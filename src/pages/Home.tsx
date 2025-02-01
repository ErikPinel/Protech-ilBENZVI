import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

import {
  Clock,
  BookOpen,
  Globe,
  Star,
  Users,
  Zap,
  MessageCircle,
  Sparkles,
  Home,
  Book,
  Mail,
  Code,
  Blocks,
  Phone,
} from 'lucide-react';

function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    grade: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!formData.fullName || !formData.phone || !formData.grade) {
      alert('Please fill in all fields.');
      return;
    }
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Use environment variable
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName, // Corresponds to the {{from_name}} placeholder in EmailJS
          phone: formData.phone, // Add custom variable if included in EmailJS
          grade: formData.grade, // Add custom variable if included in EmailJS
        },
        import.meta.env.VITE_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({ fullName: '', phone: '', grade: '' }); // Reset form
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
        alert('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };


  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cards = [
    {
      icon: <Clock className="w-8 h-8 text-white" />,
      title: "למידה איכותית וממוקדת",
      description: "השיעור בנוי בצורה מיטבית כדי להפיק את המירב מיכולת הקשב והריכוז של התלמידים: 15 דקות של תיאוריה מרתקת ו-45 דקות של התנסות מעשית בכתיבת קוד.",
      colorClass: "card-blue",
      primary: "rgb(37, 99, 235)"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-white" />,
      title: "מערכי שיעור מקצועיים",
      description: "תכנית לימודים מובנית המותאמת לגיל התלמידים, הכוללת שיעורי בית וחומר הכנה תיאורתי, שמטרתו להעמיק את ההבנה ולעזור לתלמידים להמשיך בהצלחה במגמות המחשבים בתיכון.",
      colorClass: "card-yellow",
      primary: "rgb(202, 138, 4)"
    },
    {
      icon: <Globe className="w-8 h-8 text-white" />,
      title: "פרויקט אישי",
      description: "במהלך הקורס יתנסו התלמידים הן בלמידה תיאורטית והן בצד המעשיר והמהנה של בניית אתרים ודברים מוחשיים, כדי להעניק חוויית לימוד מלאה ומעשית.",
      colorClass: "card-green",
      primary: "rgb(22, 163, 74)"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Nav */}
      <nav className="fixed top-0 right-0 w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <a href="#" className="logo-link group">
              <div className="logo-container">
                <div className="logo-gradient-new">
                  <Blocks className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <span className="text-xl font-bold text-white">
                  ProTech-IL
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center">
              <div className="nav-group-new">
                <a href="#hero" className="nav-link-new">
                  <Home className="w-4 h-4" />
                  <span>בית</span>
                </a>
                <a href="#structure" className="nav-link-new">
                  <Book className="w-4 h-4" />
                  <span>מבנה השיעורים</span>
                </a>
                <a href="#benefits" className="nav-link-new">
                  <Star className="w-4 h-4" />
                  <span>למה ללמוד אצלנו?</span>
                </a>
                <a href="#contact" className="nav-link-new">
                  <Mail className="w-4 h-4" />
                  <span>צור קשר</span>
                </a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden menu-button-new"
              aria-label="Menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className={`menu-icon-new ${isMobileMenuOpen ? 'is-active' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'is-active' : ''}`}>
            <a href="#hero" className="mobile-menu-link" onClick={handleMobileMenuClick}>
              <div className="mobile-menu-icon">
                <Home className="w-5 h-5" />
              </div>
              <span>בית</span>
            </a>
            <a href="#structure" className="mobile-menu-link" onClick={handleMobileMenuClick}>
              <div className="mobile-menu-icon">
                <Book className="w-5 h-5" />
              </div>
              <span>מבנה השיעורים</span>
            </a>
            <a href="#benefits" className="mobile-menu-link" onClick={handleMobileMenuClick}>
              <div className="mobile-menu-icon">
                <Star className="w-5 h-5" />
              </div>
              <span>למה אצלנו?</span>
            </a>
            <a href="#contact" className="mobile-menu-link" onClick={handleMobileMenuClick}>
              <div className="mobile-menu-icon">
                <Mail className="w-5 h-5" />
              </div>
              <span>צור קשר</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="hero" className="hero-gradient text-white relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 py-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 bg-blue-500/30 px-6 py-2 rounded-full animate-float">
              <Sparkles className="w-5 h-5 inline-block ml-2 text-yellow-300" />
              <span className="text-yellow-300">בית הספר אורי אורבך פתח תקווה</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-pulse-slow">
              חוג תכנות חווייתי ומעשיר
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-pulse-slow">
              לילדי כיתות ה׳-ו׳
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              פיתוח חשיבה יצירתית ומיומנויות טכנולוגיות דרך בניית אתרים ופרויקטים מעשיים
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button dir='rtl' className="hero-button" onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}>
                הירשמו עכשיו !
              </button>
              <a
                href="https://wa.me/972503939008"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button-hero"
              >
                <MessageCircle className="w-6 h-6" />
                צרו קשר בוואטסאפ
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Course Structure */}
      <section id="structure" className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-blue-600 bg-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-4 animate-float">
              מבנה השיעורים
            </span>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
              תכנית הלימודים שלנו
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {cards.map((item, index) => (
              <div
                key={index}
                className={`card-fill-animation ${item.colorClass} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500`}
                style={{
                  '--card-primary': item.primary
                } as React.CSSProperties}
              >
                <div className="flex flex-col items-center">
                  <div className="icon-container w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <div className="card-content text-center">
                    <h3 className="card-title text-xl font-bold mb-3">{item.title}</h3>
                    <p className="card-description text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Fresh Design */}
      <section id="benefits" className="py-24 bg-gradient-to-b from-blue-950 to-blue-900 text-white relative overflow-hidden">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float-particle ${8 + Math.random() * 7}s linear infinite`,
                opacity: 0.1 + Math.random() * 0.3
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          {/* Section Header */}
          <div className="text-center mb-20 relative">
            <div className="inline-block relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
              <div className="relative px-8 py-4 bg-blue-950 ring-1 ring-gray-200/10 rounded-lg leading-none flex items-center">
                <span className="text-blue-100 text-xl font-medium">למה ללמוד אצלנו?</span>
              </div>
            </div>
            <h2 className="text-5xl font-bold mt-8 leading-tight">
              <span className="bg-gradient-to-r from-blue-200 via-blue-100 to-white text-transparent bg-clip-text">
                הכנה מושלמת לעתיד בעולם הטכנולוגיה
              </span>
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Star className="w-8 h-8 text-white" />,
                title: "הכנה למגמת מדעי המחשב",
                description: "התלמידים רוכשים בסיס מצוין שיעזור להם בעתיד להצליח בלימודי מגמת מדעי המחשב בתיכון",
                gradient: "from-amber-500 to-yellow-500",
                delay: "0"
              },
              {
                icon: <Code className="w-8 h-8 text-white" />,
                title: "למידה מעשית",
                description: "דגש על התנסות מעשית ובניית פרויקטים אמיתיים שהתלמידים יכולים להתגאות בהם",
                gradient: "from-blue-500 to-cyan-500",
                delay: "100"
              },
              {
                icon: <Users className="w-8 h-8 text-white" />,
                title: "קבוצות קטנות",
                description: "יחס אישי ותשומת לב לכל תלמיד, התקדמות בקצב המתאים לכל אחד",
                gradient: "from-green-500 to-emerald-500",
                delay: "200"
              },
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                title: "חוויה מהנה",
                description: "שילוב של למידה משמעותית עם אווירה כיפית ומהנה שגורמת לילדים לאהוב תכנות",
                gradient: "from-purple-500 to-violet-500",
                delay: "300"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  opacity: 0,
                  animation: `fade-slide-up 0.6s ease forwards ${item.delay}ms`
                }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative h-full bg-blue-950/50 backdrop-blur-sm px-8 py-10 rounded-2xl ring-1 ring-gray-200/10">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} p-0.5 mb-8 transform-gpu transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <div className="w-full h-full bg-blue-950 rounded-[10px] flex items-center justify-center">
                      <div className="text-white transform-gpu transition-all duration-500 group-hover:scale-110">
                        {item.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-200 group-hover:to-white group-hover:bg-clip-text transition-all duration-300">
                    {item.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Hover line animation */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 group-hover:w-full transition-all duration-700 rounded-b-2xl"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-16 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white/95 backdrop-blur-lg p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-blue-100">
            <h2 className="text-xl mb-10 font-semibold text-center text-black">
              השאירו פרטים ונחזור אליכם
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  שם מלא <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName" // ✅ Add name attribute
                  value={formData.fullName} // ✅ Ensure controlled component
                  onChange={handleChange} // ✅ Handle state update
                  className="form-input w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 text-gray-700 text-sm transition-all duration-300"
                  placeholder="הכניסו שם מלא"
                  dir="rtl"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  טלפון <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone" // ✅ Add name attribute
                  value={formData.phone} // ✅ Ensure controlled component
                  onChange={handleChange} // ✅ Handle state update
                  className="form-input w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 text-gray-700 text-sm transition-all duration-300"
                  placeholder="הכניסו מספר טלפון"
                  dir="rtl"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-bold mb-2 text-sm">
                  כיתה <span className="text-red-500">*</span>
                </label>
                <select
                  name="grade" // ✅ Add name attribute
                  value={formData.grade} // ✅ Ensure controlled component
                  onChange={handleChange} // ✅ Handle state update
                  className="form-input w-full px-4 py-3 rounded-xl bg-white border-2 border-gray-200 focus:border-green-500 focus:ring-4 focus:ring-green-500/20 text-gray-700 text-sm transition-all duration-300 appearance-none"
                  dir="rtl"
                  required
                >
                  <option value="" disabled>
                    בחרו כיתה
                  </option>
                  <option value="ה">כיתה ה׳</option>
                  <option value="ו">כיתה ו׳</option>
                  {/* <option value="ז">כיתה ז׳</option>
                  <option value="ח">כיתה ח׳</option>
                  <option value="ט">כיתה ט׳</option> */}
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                disabled={isSending} // ✅ Prevent multiple submissions
              >
                {isSending ? 'שולח...' : 'שליחה'}
              </button>
            </form>


          </div>
        </div>
      </section>


      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/972503939008"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                <Blocks className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <span className="text-2xl font-bold">ProTech-IL</span>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-gray-300">
              <a
                href="mailto:protechil.gmail.com"
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span>protechil.gmail.com</span>
              </a>
              <span className="hidden sm:block text-gray-600">|</span>
              <a
                href="tel:+972503939008"
                className="flex items-center gap-2 hover:text-white transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span>050-393-9008</span>
              </a>
            </div>
            
            <Link to="/privacy-policy">מדיניות פרטיות</Link>

            {/* Copyright */}
            <div className="text-gray-500 text-sm mt-4">
              © {new Date().getFullYear()} ProTech-IL. כל הזכויות שמורות.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
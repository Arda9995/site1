import { Menu, X, Flame, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

type HeaderProps = {
  currentPage: string;
  onNavigate: (page: string) => void;
};

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'tr' : 'en';
    i18n.changeLanguage(newLang);
  };

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors"
          >
            <Flame className="w-8 h-8" />
            <span className="text-xl font-bold">Ospatech</span>
          </button>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-sm font-medium transition-colors relative group ${
                  currentPage === item.id
                    ? 'text-orange-400'
                    : 'text-white hover:text-orange-400'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform origin-left transition-transform ${
                    currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800/50 hover:bg-slate-700/50 text-white transition-colors"
              aria-label={i18n.language === 'en' ? 'Switch to Turkish' : 'Türkçeye Geç'}
              title={i18n.language === 'en' ? 'Switch to Turkish' : 'Türkçeye Geç'}
            >
              <Globe className="w-5 h-5" />
              <span className="sr-only">{i18n.language === 'en' ? 'TR' : 'EN'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="md:hidden text-white hover:text-orange-400 transition-colors text-sm font-medium"
              aria-label={i18n.language === 'en' ? 'Switch to Turkish' : 'Türkçeye Geç'}
            >
              {i18n.language === 'en' ? 'TR' : 'EN'}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-orange-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-700/50">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-orange-400 bg-slate-800/50'
                    : 'text-white hover:text-orange-400 hover:bg-slate-800/30'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}

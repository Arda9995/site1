import { Flame, Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type FooterProps = {
  onNavigate: (page: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const handleNavClick = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-gray-300 border-t border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 text-white mb-4">
              <Flame className="w-7 h-7 text-orange-400" />
              <span className="text-xl font-bold">Welder</span>
            </div>
            <p className="text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {t('nav.home')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('projects')}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {t('nav.projects')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {t('nav.contact')}
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:ospatechs@gmail.com" className="text-sm hover:text-orange-400 transition-colors">
                  ospatechs@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+90 505 996 35 41" className="text-sm hover:text-orange-400 transition-colors">
                  +90 505 996 35 41
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">{t('contact.cityState')}</span>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <a
                  href="www.linkedin.com/in/ospatech-solutions-392b293a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-orange-400 transition-colors"
                >
                  {t('contact.linkedin')}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-sm">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  );
}

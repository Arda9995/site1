import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t('contact.contactInfo')}
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-burgundy-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.email')}</h3>
                  <a
                    href="mailto:ospatechs@gmail.com"
                    className="text-gray-600 hover:text-burgundy-600 transition-colors"
                  >
                    info@prowelder.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-burgundy-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.phone')}</h3>
                  <a
                    href="tel:+90 505 996 35 41"
                    className="text-gray-600 hover:text-burgundy-600 transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-burgundy-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">{t('contact.location')}</h3>
                  <p className="text-gray-600">{t('contact.cityState')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-6 h-6 text-burgundy-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">LinkedIn</h3>
                  <a 
                    href="www.linkedin.com/in/ospatech-solutions-392b293a1"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-burgundy-600 transition-colors"
                  >
                    {t('contact.linkedin')}
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                {t('contact.responseTime')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

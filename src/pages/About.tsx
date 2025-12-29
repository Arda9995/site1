import { useTranslation } from 'react-i18next';
import { Award, Clock, Shield, Users, LucideIcon } from 'lucide-react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const iconComponents: Record<string, LucideIcon> = {
  Award,
  Clock,
  Shield,
  Users,
};

interface TranslatedFeature {
  icon: string;
  title: string;
  description: string;
}

const useFeatures = (): TranslatedFeature[] => {
  const { t } = useTranslation();
  const features = t('about.features', { returnObjects: true }) as unknown as TranslatedFeature[];
  return Array.isArray(features) ? features : [];
};

export default function About() {
  const { t } = useTranslation();
  const features = useFeatures();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              {t('about.journeyTitle')}
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>{t('about.journey1')}</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
            {t('about.whyChooseMe')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = iconComponents[feature.icon] || null;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className="w-14 h-14 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    {Icon && <Icon className="w-7 h-7 text-orange-500" />}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

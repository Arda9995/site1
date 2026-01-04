import { useTranslation } from 'react-i18next';
import { Wrench, Package, Scissors } from 'lucide-react';

interface Service {
    icon: 'Wrench' | 'Package' | 'Scissors';
    title: string;
    description: string;
}

type ServicesProps = {
    onNavigate?: (page: string) => void;
};

const iconComponents = {
    Wrench,
    Package,
    Scissors,
};

export default function Services({ onNavigate }: ServicesProps) {
    const { t } = useTranslation();
    const services = t('services.servicesList', { returnObjects: true }) as Service[];

    return (
        <div className="min-h-screen bg-slate-50">
            <div className="bg-slate-900 text-white py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                            {t('services.title')}
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            {t('services.subtitle')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid gap-12 md:gap-16">
                        {Array.isArray(services) && services.map((service, index) => {
                            const Icon = iconComponents[service.icon];
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center">
                                                <Icon className="w-8 h-8 text-orange-500" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl font-bold text-slate-900 mb-4">
                                                {service.title}
                                            </h2>
                                            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                                                {service.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-16 text-center">
                        <div className="bg-slate-900 text-white rounded-2xl p-12">
                            <h3 className="text-2xl font-bold mb-4">{t('services.cta.title')}</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                {t('services.cta.description')}
                            </p>
                            <button
                                onClick={() => onNavigate?.('contact')}
                                className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
                            >
                                {t('services.cta.button')}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

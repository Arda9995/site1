import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md text-sm ${i18n.language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}
        title="English"
      >
        EN
      </button>
      <span className="text-gray-400">|</span>
      <button
        onClick={() => changeLanguage('tr')}
        className={`px-2 py-1 rounded-md text-sm ${i18n.language === 'tr' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:text-orange-500'}`}
        title="Türkçe"
      >
        TR
      </button>
    </div>
  );
}

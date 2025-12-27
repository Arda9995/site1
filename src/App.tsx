import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Contact from './pages/Contact';

function App() {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [projectSlug, setProjectSlug] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string, slug?: string) => {
    setCurrentPage(page);
    if (slug) {
      setProjectSlug(slug);
    }
  };

  const heroVideoUrl = '/VID-20251123-WA0005.mp4';

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-orange-500 border-t-transparent mx-auto mb-4" />
          <p className="text-white text-lg">{t('common.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && (
          <>
            <Hero videoUrl={heroVideoUrl} onNavigate={handleNavigate} />
            <div className="bg-white py-20">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                    {t('home.introduction.title')}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {t('home.introduction.description')}
                  </p>
                  <button
                    onClick={() => handleNavigate('about')}
                    className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
                  >
                    {t('home.introduction.cta')}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {currentPage === 'about' && <About />}

        {currentPage === 'projects' && <Projects onNavigate={handleNavigate} />}

        {currentPage === 'project-detail' && (
          <ProjectDetail slug={projectSlug} onNavigate={handleNavigate} />
        )}

        {currentPage === 'contact' && <Contact />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;

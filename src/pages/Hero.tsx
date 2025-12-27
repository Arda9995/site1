import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

type HeroProps = {
  videoUrl: string;
  onNavigate: (page: string) => void;
};

export default function Hero({ videoUrl, onNavigate }: HeroProps) {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle video errors
  const handleVideoError = () => {
    console.error('Error loading video, falling back to image');
    setShowFallback(true);
  };

  // Handle when video is ready to play
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
        setShowFallback(true);
      });
    }
  };

  // Handle scroll to content
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  // Set up video time update for loop effect
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (video.currentTime >= 8) {
        video.currentTime = 1;
      }
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    return () => video.removeEventListener('timeupdate', handleTimeUpdate);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900">
      {/* Video Element */}
      {!showFallback && (
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          loop
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onError={handleVideoError}
          onCanPlay={handleVideoLoaded}
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback Image */}
      {showFallback && (
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/hero-fallback.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'opacity 1s ease-in-out',
            opacity: 0.7
          }}
        />
      )}

      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative h-full flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
              {t('hero.title.line1')}
              <span className="block text-orange-400 mt-2">{t('hero.title.line2')}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('projects')}
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-orange-500/50"
              >
                {t('hero.cta.viewWork')}
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition-all transform hover:scale-105"
              >
                {t('hero.cta.contact')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white animate-bounce hover:text-orange-400 transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
}

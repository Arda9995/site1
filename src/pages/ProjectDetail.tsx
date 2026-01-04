import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, MapPin, Calendar, Users, Ruler, Check } from 'lucide-react';
import { projectsData } from '../data/projects';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

type ProjectDetailProps = {
  slug: string;
  onNavigate: (page: string, slug?: string) => void;
};

function ProjectDetail({ slug, onNavigate }: ProjectDetailProps) {
  const { t } = useTranslation();

  const project = projectsData.find((p) => p.slug === slug);

  const { ref: overviewRef, isVisible: overviewVisible } = useScrollAnimation();
  const { ref: detailsRef, isVisible: detailsVisible } = useScrollAnimation();
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h2 className="text-2xl font-light text-slate-900 mb-4">{t('projectDetail.notFound')}</h2>
          <button
            onClick={() => onNavigate('home')}
            className="text-slate-600 hover:text-slate-900"
          >
            {t('projectDetail.returnHome', "Return to home")}
          </button>
        </div>
      </div>
    );
  }

  // Helper to safely get details
  const details = project.details || {
    client: 'N/A',
    area: 'N/A',
    duration: 'N/A',
    architect: 'N/A'
  };

  const features = project.features || [];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      <button
        onClick={() => onNavigate('projects')}
        className="fixed top-24 left-6 z-40 flex items-center space-x-2 text-slate-600 hover:text-slate-900 transition-colors bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm"
      >
        <ArrowLeft size={20} />
        <span className="text-sm uppercase tracking-wide hidden sm:inline">Back</span>
      </button>

      <div
        className="relative h-[70vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.featured_image})` }}
      >
        <div className="absolute inset-0 bg-slate-900/40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-slate-900/90 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-white">
              <div className="text-sm uppercase tracking-wider mb-3 text-white/80">
                {t(project.category)}
              </div>
              <h1 className="text-5xl md:text-6xl font-light mb-4">{t(project.title)}</h1>
              <div className="flex items-center space-x-2 text-white/90">
                <MapPin size={18} />
                <span>{project.location || 'Turkey'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-16 mb-20">
          <div
            ref={overviewRef}
            className={`lg:col-span-2 transition-all duration-1000 ${overviewVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <h2 className="text-3xl font-light text-slate-900 mb-6">Project Overview</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-12 whitespace-pre-line">
              {t(project.detailed_description)}
            </p>

            <h3 className="text-2xl font-light text-slate-900 mb-6">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {features.length > 0 ? (
                features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-5 h-5 bg-slate-900 flex items-center justify-center mt-1">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-slate-600">{feature}</span>
                  </div>
                ))
              ) : (
                <p className="text-slate-500 italic">No specific features listed.</p>
              )}
            </div>
          </div>

          <div
            ref={detailsRef}
            className={`space-y-8 transition-all duration-1000 delay-200 ${detailsVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="bg-slate-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-slate-900 mb-6">Project Details</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 text-slate-500 mb-2">
                    <Users size={18} />
                    <span className="text-sm uppercase tracking-wide">Client</span>
                  </div>
                  <p className="text-slate-900">{details.client}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-500 mb-2">
                    <Ruler size={18} />
                    <span className="text-sm uppercase tracking-wide">Area</span>
                  </div>
                  <p className="text-slate-900">{details.area}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-500 mb-2">
                    <Calendar size={18} />
                    <span className="text-sm uppercase tracking-wide">Duration</span>
                  </div>
                  <p className="text-slate-900">{details.duration}</p>
                </div>
                <div>
                  <div className="flex items-center space-x-2 text-slate-500 mb-2">
                    <Users size={18} />
                    <span className="text-sm uppercase tracking-wide">Project Architect</span>
                  </div>
                  <p className="text-slate-900">{details.architect}</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-lg">
              <h3 className="text-xl font-medium mb-4">Interested in a Similar Project?</h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Contact us to discuss how we can bring your vision to life.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-white text-slate-900 px-6 py-3 hover:bg-white/90 transition-colors uppercase text-sm tracking-wide font-medium rounded"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>

        <div ref={galleryRef}>
          <h2
            className={`text-3xl font-light text-slate-900 mb-8 transition-all duration-1000 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Show valid images from project.images array */}
            {project.images && project.images.length > 0 ? (
              project.images.map((image, index) => (
                <div
                  key={index}
                  className={`relative h-96 overflow-hidden group cursor-pointer transition-all duration-700 ${galleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <img
                    src={image}
                    alt={`${t(project.title)} gallery ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-slate-500 italic">No gallery images available.</div>
            )}
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-slate-200">
          <h3 className="text-2xl font-light text-slate-900 mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {projectsData
              .filter((p) => p.slug !== slug)
              .slice(0, 3)
              .map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => {
                    onNavigate('project-detail', relatedProject.slug);
                    window.scrollTo(0, 0);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-64 overflow-hidden mb-4 rounded-lg">
                    <img
                      src={relatedProject.featured_image}
                      alt={t(relatedProject.title)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mb-2">
                    {t(relatedProject.category)}
                  </div>
                  <h4 className="text-xl font-light text-slate-900 group-hover:text-slate-600 transition-colors">
                    {t(relatedProject.title)}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;

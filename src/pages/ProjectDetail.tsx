import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { projectsData } from '../data/projects';
import { Calendar } from 'lucide-react';

type ProjectDetailProps = {
  slug: string;
  onNavigate: (page: string) => void;
};

export default function ProjectDetail({ slug, onNavigate }: ProjectDetailProps) {
  const { t, i18n } = useTranslation();
  const project = projectsData.find(p => p.slug === slug) || null;
  const [selectedImage, setSelectedImage] = useState<string>(project?.featured_image || '');

  useEffect(() => {
    if (project) {
      setSelectedImage(project.featured_image);
    }
  }, [slug, project]);

  const formatDate = (dateString: string | null) => {
    if (!dateString) return t('projects.recent');
    return new Date(dateString).toLocaleDateString(i18n.language === 'tr' ? 'tr-TR' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-4">{t('projectDetail.notFound')}</h1>
          <button
            onClick={() => onNavigate('projects')}
            className="text-orange-500 hover:text-orange-600 font-medium hover:underline"
          >
            &larr; {t('projectDetail.backToProjects')}
          </button>
        </div>
      </div>
    );
  }



  const allImages = [project.featured_image, ...project.images];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => onNavigate('projects')}
              className="text-orange-500 hover:text-orange-600 font-medium"
            >
              &larr; {t('projectDetail.backToProjects')}
            </button>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-6 mb-4">
              {t(project.title, { defaultValue: project.title })}
            </h1>
            <div className="flex items-center text-sm text-gray-300 mb-8">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span>{formatDate(project.completion_date)}</span>

            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
            <div className="relative aspect-video">
              <img
                src={selectedImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {allImages.length > 1 && (
              <div className="p-4 bg-gray-50">
                <div className="flex space-x-2 overflow-x-auto pb-2">
                  <button
                    onClick={() => setSelectedImage(project.featured_image)}
                    className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden ${selectedImage === project.featured_image
                      ? 'ring-2 ring-orange-500'
                      : 'opacity-70 hover:opacity-100'
                      }`}
                  >
                    <img
                      src={project.featured_image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                  {project.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className={`flex-shrink-0 w-20 h-14 rounded-md overflow-hidden ${selectedImage === image
                        ? 'ring-2 ring-orange-500'
                        : 'opacity-70 hover:opacity-100'
                        }`}
                    >
                      <img
                        src={image}
                        alt={`${project.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">
              {t('projectDetail.projectDescription')}
            </h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-line">
              {t(project.detailed_description, { defaultValue: project.detailed_description })}
            </p>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-orange-500/30"
            >
              {t('contact.cta')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

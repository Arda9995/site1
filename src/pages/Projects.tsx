import { projectsData } from '../data/projects';
import type { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

type ProjectsProps = {
  onNavigate: (page: string, slug?: string) => void;
};

export default function Projects({ onNavigate }: ProjectsProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            {t('projects.title', 'My Projects')}
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            {t('projects.subtitle', 'Explore a collection of my latest welding projects and metalwork creations.')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {projectsData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-orange-500 text-lg">{t('projects.noProjects')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onNavigate={onNavigate}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type ProjectCardProps = {
  project: Project;
  onNavigate: (page: string, slug?: string) => void;
};

function ProjectCard({ project, onNavigate }: ProjectCardProps) {
  const { t } = useTranslation();

  return (
    <div
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer transition-all hover:shadow-xl hover:-translate-y-1"
      onClick={() => onNavigate('project-detail', project.slug)}
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.featured_image}
          alt={t(project.title) || project.title}
          className="w-full h-full object-cover transition-transform duration-500"
          loading="lazy"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300"
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-bold text-white mb-2">
              {t(project.title, { defaultValue: project.title })}
            </h3>
            <p className="text-orange-400 mb-4 line-clamp-2">
              {t(project.description, { defaultValue: project.description })}
            </p>
            <div className="flex items-center gap-2 text-orange-400 font-medium group-hover:gap-3 transition-all">
              <span>{t('projects.viewDetails')}</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

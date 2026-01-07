export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailed_description: string;
  year?: string;
  features?: string[];
  featured_image: string;
  images: string[];
  category: string;
  is_featured: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
};

export type Page = 'home' | 'about' | 'services' | 'projects' | 'contact' | 'project-detail';

export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  detailed_description: string;
  location?: string;
  year?: string;
  features?: string[];
  details?: {
    client: string;
    area: string;
    duration: string;
    architect: string;
  };
  featured_image: string;
  images: string[];
  category: string;
  completion_date: string | null;
  is_featured: boolean;
  order_index: number;
  created_at: string;
  updated_at: string;
};

export type Page = 'home' | 'about' | 'projects' | 'contact' | 'project-detail';

import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: '6',
    title: 'projects.precisionMetalFabrication.title',
    slug: 'precision-metal-fabrication',
    description: 'projects.precisionMetalFabrication.description',
    detailed_description: 'projects.precisionMetalFabrication.detailedDescription',
    featured_image: '/kaynak1.webp',
    images: ['/kaynak1.webp', '/kaynak2.webp', '/kaynak3.webp'],
    category: 'projects.categories.fabrication',
    year: '2024',
    features: ['Custom Design', 'High Precision', 'Durability'],
    details: {
      area: '500m2'
    },
    is_featured: true,
    order_index: 1,
    created_at: '2024-11-23',
    updated_at: '2024-11-23',
  },
  {
    id: '7',
    title: 'projects.structuralSteelWork.title',
    slug: 'structural-steel-work',
    description: 'projects.structuralSteelWork.description',
    detailed_description: 'projects.structuralSteelWork.detailedDescription',
    featured_image: '/kaynak2.webp',
    images: ['/kaynak2.webp', '/kaynak4.webp'],
    category: 'projects.categories.structural',
    year: '2024',
    features: ['Seismic Resistance', 'Large Span', 'Fast Assembly'],
    details: {
      area: '1200m2'
    },
    is_featured: true,
    order_index: 2,
    created_at: '2024-11-23',
    updated_at: '2024-11-23',
  },
  {
    id: '8',
    title: 'projects.customMetalArtPiece.title',
    slug: 'pipe-welding',
    description: 'projects.customMetalArtPiece.description',
    detailed_description: 'projects.customMetalArtPiece.detailedDescription',
    featured_image: '/kaynak3.webp',
    images: ['/kaynak3.webp', '/kaynak5.webp'],
    category: 'projects.categories.industrial',
    year: '2023',
    features: ['Unique Design', 'Handcrafted', 'Weather Resistant'],
    details: {
      area: 'N/A'
    },
    is_featured: true,
    order_index: 3,
    created_at: '2024-11-23',
    updated_at: '2024-11-23',
  },
  {
    id: '9',
    title: 'projects.industrialMetalFramework.title',
    slug: 'industrial-metal-framework',
    description: 'projects.industrialMetalFramework.description',
    detailed_description: 'projects.industrialMetalFramework.detailedDescription',
    featured_image: '/kaynak4.webp',
    images: ['/kaynak4.webp', '/kaynak5.webp', '/kaynak1.webp', '/kaynak6.webp'],
    category: 'projects.categories.industrial',
    year: '2024',
    features: ['Heavy Load', 'Modular', 'Scalable', 'Elegant', 'Safety Compliant', 'Rust Proof'],
    details: {
      area: '2000m2'
    },
    is_featured: true,
    order_index: 4,
    created_at: '2024-11-23',
    updated_at: '2024-11-23',
  },
  {
    id: '10',
    title: 'projects.metalSculptureInstallation.title',
    slug: 'metal-sculpture-installation',
    description: 'projects.metalSculptureInstallation.description',
    detailed_description: 'projects.metalSculptureInstallation.detailedDescription',
    featured_image: '/kaynak6.webp',
    images: ['/kaynak6.webp', '/kaynak2.webp'],
    category: 'projects.categories.artistic',
    year: '2024',
    features: ['Modern', 'Large Scale', 'Interactive'],
    details: {
      area: 'Open Space'
    },
    is_featured: true,
    order_index: 5,
    created_at: '2024-11-23',
    updated_at: '2024-11-23',
  }
];

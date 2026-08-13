import { MetadataRoute } from 'next';
import { company } from '@/data/company';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: company.name,
    short_name: 'Morphed',
    description: company.tagline,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/icon',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/apple-icon',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}

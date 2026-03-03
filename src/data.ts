import { Itinerary, Product, BlogPost, NewsItem, Service } from './types';

export const itineraries: Itinerary[] = [
  {
    id: '1',
    title: 'Amalfi Coast Luxury Escape',
    destination: 'Italy',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80',
    price: 2499,
    duration: '7 Days',
    type: 'luxury',
    description: 'Experience the breathtaking beauty of the Amalfi Coast with private boat tours and Michelin-starred dining.'
  },
  {
    id: '2',
    title: 'Bali Digital Nomad Retreat',
    destination: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
    price: 1200,
    duration: '14 Days',
    type: 'digital-nomad',
    description: 'Work from paradise with high-speed internet, co-working spaces, and weekend island hopping.'
  },
  {
    id: '3',
    title: 'Kyoto Cultural Journey',
    destination: 'Japan',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
    price: 1850,
    duration: '5 Days',
    type: 'group',
    description: 'Immerse yourself in ancient traditions, tea ceremonies, and the serene temples of Kyoto.'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'The Ultimate Packing Guide',
    price: 29,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
    category: 'eBook',
    description: 'Never forget a thing with our comprehensive packing system for any climate.',
    features: ['Checklists', 'Weather guides', 'Gear recommendations']
  },
  {
    id: '2',
    name: 'Luxury Travel Planner',
    price: 45,
    image: 'https://images.unsplash.com/photo-1506784919141-177b7ec8ee65?auto=format&fit=crop&w=800&q=80',
    category: 'Planner',
    description: 'A physical planner designed for the sophisticated traveler.',
    features: ['Itinerary pages', 'Budget tracking', 'Journaling prompts']
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Travel Smart in 2026',
    excerpt: 'Discover the latest trends in tech-enabled travel and sustainable tourism.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    date: 'March 1, 2026',
    category: 'Tips',
    author: 'Mabel Fol'
  },
  {
    id: '2',
    title: 'Top 5 Hidden Gems in Europe',
    excerpt: 'Escape the crowds and find these secret spots that locals love.',
    content: 'Full content here...',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=800&q=80',
    date: 'February 20, 2026',
    category: 'Destinations',
    author: 'Mabel Fol'
  }
];

export const newsItems: NewsItem[] = [
  {
    id: '1',
    title: 'New Visa Regulations for Digital Nomads',
    date: 'March 2, 2026',
    category: 'Policy',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80',
    summary: 'Several countries have announced updated visa requirements for remote workers.'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Custom Itinerary Planning',
    price: 'From $299',
    description: 'A fully personalized travel plan tailored to your specific interests and pace.',
    features: ['Day-by-day schedule', 'Hotel recommendations', 'Activity booking assistance']
  },
  {
    id: '2',
    title: 'Digital Nomad Relocation',
    price: 'From $499',
    description: 'Everything you need to move your life and work to a new country.',
    features: ['Visa guidance', 'Housing search', 'Local community intro']
  }
];

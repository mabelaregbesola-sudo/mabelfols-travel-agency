export interface Itinerary {
  id: string;
  title: string;
  destination: string;
  image: string;
  price: number;
  duration: string;
  type: 'solo' | 'family' | 'luxury' | 'digital-nomad' | 'group';
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  image: string;
  summary: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
}

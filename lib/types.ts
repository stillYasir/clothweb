export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}

export interface PriceRange {
  min: number;
  max: number;
  label: string;
}

export interface ProductFilters {
  category?: string;
  priceRange?: PriceRange;
  rating?: number;
  search?: string;
}
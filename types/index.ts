/**
 * Types pour les œuvres artistiques (tattoo, couture, etc.)
 */
export interface Artwork {
  id: string;
  title: string;
  slug: string;
  description?: string;
  image: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
  category: ArtworkCategory;
  tags: string[];
  date: string;
  featured?: boolean;
}

/**
 * Catégories d'œuvres
 */
export type ArtworkCategory = "tattoo" | "couture" | "installation" | "autre";

/**
 * Type pour les produits (future boutique)
 */
export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  currency: string;
  images: Array<{
    url: string;
    alt: string;
  }>;
  category: ProductCategory;
  stock: number;
  featured?: boolean;
}

/**
 * Catégories de produits
 */
export type ProductCategory = "vetement" | "accessoire" | "print" | "autre";

/**
 * Type pour les expositions/événements
 */
export interface Exhibition {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate?: string;
  location: string;
  images?: Array<{
    url: string;
    alt: string;
  }>;
}

/**
 * Type pour le formulaire de contact
 */
export interface ContactFormData {
  name: string;
  email: string;
  subject?: string;
  message: string;
} 
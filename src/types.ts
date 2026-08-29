export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  description: string;
  iconName: string;
  features: string[];
  badge?: string;
  startingPrice: string;
}

export interface Hotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  description: string;
  tag?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: 'Hospitality' | 'Real Estate' | 'Corporate' | 'Automotive' | 'Healthcare';
  location: string;
  thumbnail: string;
  panoramicImage: string;
  viewsCount: string;
  resolution: string;
  description: string;
  tags: string[];
  hotspots: Hotspot[];
  featured?: boolean;
}

export interface CourseItem {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Professional Masterclass';
  duration: string;
  mode: string;
  description: string;
  highlights: string[];
  instructor: string;
  rating: number;
  badge: string;
  price: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  serviceUsed: string;
  verifiedGoogle: boolean;
}

export interface PricingState {
  serviceType: 'tour' | 'web' | 'vr' | 'combo';
  propertyArea: number; // sq ft
  nodesCount: number; // 360 pano points
  includeDrone: boolean;
  include8KHDR: boolean;
  includeGoogleStreetView: boolean;
  includeInteractiveHotspots: boolean;
  includeVoiceover: boolean;
  includeSpeedOptimization: boolean;
  currency: 'INR' | 'USD';
}

export interface LeadFormData {
  fullName: string;
  phoneNumber: string;
  serviceRequired: string;
  propertyType: string;
  estimatedBudget: string;
  message: string;
  preferredContact: 'WhatsApp' | 'Phone Call' | 'Email';
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'domestic' | 'commercial' | 'smarthome' | 'emergency';
  icon: string;
  description: string;
  features: string[];
  popular?: boolean;
  typicalTime?: string;
  startingPrice?: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  text: string;
  serviceType: string;
  verified: boolean;
}

export interface ServiceArea {
  id: string;
  name: string;
  postcode: string;
  responseTime: string;
  description: string;
  landmarks: string[];
  coordinates: { x: number; y: number }; // Relative coordinates on London map canvas
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  serviceRequired: string;
  urgency: 'standard' | 'urgent' | 'emergency';
  message: string;
}

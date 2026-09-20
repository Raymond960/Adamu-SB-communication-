export interface BusinessConfig {
  name: string;
  shortName: string;
  tagline: string;
  address: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  openingHours: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
}


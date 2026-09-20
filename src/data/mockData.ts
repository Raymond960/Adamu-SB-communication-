import { BusinessConfig, ServiceItem } from '../types';

export const initialBusinessConfig: BusinessConfig = {
  name: "Adamu S.B Communication",
  shortName: "ASB",
  tagline: "Mobile Phone Solutions",
  address: "No. 21 Solomon Lar Way, Shendam, Plateau State",
  phone: "+234 813 738 6692",
  whatsappNumber: "2348137386692",
  email: "adamzbaba@gmail.com",
  openingHours: "Monday – Sunday, 8:00 AM – 5:00 PM"
};

export const mainServices: ServiceItem[] = [
  {
    id: "repair",
    title: "Phone Repair",
    icon: "Wrench",
    description: "Physical and hardware diagnosis and repair for mobile phones and smartphones.",
    features: [
      "Screen & display repairs",
      "Charging port troubleshooting & repair",
      "Battery check & replacement",
      "Speaker & microphone fixes",
      "Camera lens & module repair",
      "Power button & button repairs"
    ]
  },
  {
    id: "software",
    title: "Software Services",
    icon: "Laptop",
    description: "Assistance with mobile phone software errors, system configuration, and software support.",
    features: [
      "Software troubleshooting & error fixing",
      "Operating system reinstallation & updates",
      "Device unlocking & account access support",
      "System hanging & boot loop resolution",
      "Data transfer & backup assistance",
      "General phone software setup"
    ]
  },
  {
    id: "accessories",
    title: "Phone Accessories",
    icon: "Headphones",
    description: "Quality accessories to protect, power, and support your daily mobile phone use.",
    features: [
      "Protective phone cases & covers",
      "Screen protectors & tempered glass",
      "Wall chargers & charging adapters",
      "USB charging & data cables",
      "Portable power banks",
      "Earphones, headsets & audio accessories"
    ]
  }
];

export interface AccessoryCategory {
  id: string;
  name: string;
  description: string;
  items: string[];
}

export const accessoryCategories: AccessoryCategory[] = [
  {
    id: "protectors",
    name: "Screen Protectors",
    description: "Tempered glass and protective films to shield phone screens against scratches and cracks.",
    items: ["Tempered Glass", "Full Cover Glass", "Matte & Privacy Protectors"]
  },
  {
    id: "chargers",
    name: "Chargers & Adapters",
    description: "Reliable power adapters and wall chargers suitable for various phone models.",
    items: ["Fast Chargers", "USB-C Adapters", "Dual-Port Wall Plugs"]
  },
  {
    id: "cables",
    name: "USB Charging Cables",
    description: "Durable cables for fast charging and reliable data transfer.",
    items: ["Type-C Cables", "Micro-USB Cables", "Lightning Cables"]
  },
  {
    id: "cases",
    name: "Phone Cases & Covers",
    description: "Protective and shock-absorbent cases to keep your smartphone safe.",
    items: ["Armor Cases", "Silicone Covers", "Clear Protective Cases"]
  },
  {
    id: "powerbanks",
    name: "Power Banks",
    description: "Portable battery packs to keep your phone charged on the go.",
    items: ["Compact Power Banks", "High-Capacity Packs", "Fast-Charge Power Banks"]
  },
  {
    id: "audio",
    name: "Audio & Earphones",
    description: "Quality wired and wireless earphones and headsets for calls and media.",
    items: ["Wired Earphones", "Bluetooth Earbuds", "Hands-free Headsets"]
  }
];


import React from 'react';
import { Smartphone, Wrench, Shield, Headphones } from 'lucide-react';
import { BusinessConfig } from '../types';
import { AsbLogo } from './AsbLogo';

interface FooterProps {
  config: BusinessConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="bg-[#041426] text-white pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block group">
              <AsbLogo variant="horizontal" size="md" />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Mobile phone solutions, software services, and everyday accessories at {config.address}.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li><a href="#services" className="hover:text-white transition-colors">Phone Repair (Hardware)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Software Support & Setup</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Screen Protectors & Glass</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Chargers & Adapters</a></li>
              <li><a href="#accessories" className="hover:text-white transition-colors">Cases & Power Banks</a></li>
            </ul>
          </div>

          {/* Business Info */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contact & Location
            </h3>
            <address className="not-italic space-y-2 text-xs sm:text-sm text-slate-400">
              <p className="text-slate-300 font-semibold">{config.address}</p>
              <p>Phone: <a href={`tel:${config.phone}`} className="text-blue-400 hover:underline">{config.phone}</a></p>
              <p>Hours: {config.openingHours}</p>
            </address>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 {config.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Phone Repair</span>
            <span>•</span>
            <span>Software Services</span>
            <span>•</span>
            <span>Accessories</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

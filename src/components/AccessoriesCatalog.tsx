import React, { useState } from 'react';
import { Search, Shield, Zap, Cable, Smartphone, BatteryCharging, Headphones, MessageSquare, MapPin } from 'lucide-react';
import { accessoryCategories, AccessoryCategory } from '../data/mockData';
import { BusinessConfig } from '../types';

interface AccessoriesCatalogProps {
  config: BusinessConfig;
}

export const AccessoriesCatalog: React.FC<AccessoriesCatalogProps> = ({ config }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'protectors':
        return <Shield className="w-6 h-6 text-blue-600" />;
      case 'chargers':
        return <Zap className="w-6 h-6 text-blue-600" />;
      case 'cables':
        return <Cable className="w-6 h-6 text-blue-600" />;
      case 'cases':
        return <Smartphone className="w-6 h-6 text-blue-600" />;
      case 'powerbanks':
        return <BatteryCharging className="w-6 h-6 text-blue-600" />;
      case 'audio':
        return <Headphones className="w-6 h-6 text-blue-600" />;
      default:
        return <Smartphone className="w-6 h-6 text-blue-600" />;
    }
  };

  const filteredCategories = accessoryCategories.filter((cat) => {
    return (
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.items.some((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  });

  const handleInquireCategory = (category: AccessoryCategory) => {
    const message = `Hello ${config.name},\n\nI am inquiring about available *${category.name}* at your shop (${config.address}). Do you have options for my phone model?`;
    window.open(`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="accessories" className="py-20 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
              In-Store Selection
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Phone Accessories
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
              We carry essential phone accessories at our shop at {config.address}. Contact us or visit to check compatibility for your phone.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search accessory types..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
            />
          </div>
        </div>

        {/* Clean Category Cards Grid (No fake photos, no fake prices) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="bg-slate-50/70 rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-md transition-all group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  {getCategoryIcon(category.id)}
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {category.description}
                </p>

                {/* Accessory types list */}
                <div className="space-y-1.5 mb-6">
                  {category.items.map((item, idx) => (
                    <div key={idx} className="text-xs text-slate-700 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Available in store</span>
                </div>

                <button
                  onClick={() => handleInquireCategory(category)}
                  className="py-2 px-3.5 bg-slate-900 hover:bg-emerald-600 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Factual footnote */}
        <div className="mt-10 p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-slate-700">
            Looking for a specific brand or model compatibility? Message us on WhatsApp with your phone model.
          </p>
          <a
            href={`https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(`Hello ${config.name}, do you have accessories for my phone model?`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-blue-700 hover:text-blue-900 underline shrink-0"
          >
            Inquire Now
          </a>
        </div>

      </div>
    </section>
  );
};


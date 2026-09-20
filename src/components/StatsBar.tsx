import React from 'react';
import { MapPin, Clock, Phone, Wrench } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const factualItems = [
    {
      icon: MapPin,
      title: 'Shop Location',
      desc: 'No. 21 Solomon Lar Way, Shendam',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      desc: 'Mon – Sun: 8:00 AM – 5:00 PM',
    },
    {
      icon: Phone,
      title: 'Direct Contact',
      desc: '+234 813 738 6692 (Call & WhatsApp)',
    },
    {
      icon: Wrench,
      title: 'Core Solutions',
      desc: 'Phone Repair, Software & Accessories',
    },
  ];

  return (
    <div className="bg-white border-b border-slate-200 relative z-20 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-center divide-y sm:divide-y-0 lg:divide-x divide-slate-100">
          {factualItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-3.5 ${
                  idx !== 0 ? 'lg:pl-6' : ''
                } ${idx >= 2 ? 'pt-4 sm:pt-0' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#031d3d] text-sky-400 flex items-center justify-center shrink-0 shadow-xs">
                  <Icon className="w-5 h-5 text-sky-400" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-tight">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { BusinessConfig } from '../types';

interface FloatingWhatsAppProps {
  config: BusinessConfig;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ config }) => {
  const handleClick = () => {
    const text = encodeURIComponent(`Hello ${config.name}, I would like to inquire about your phone repair & accessories services.`);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      {/* Tooltip */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with {config.name}
      </div>

      <button
        onClick={handleClick}
        className="w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center text-2xl shadow-xl shadow-emerald-600/35 transition-all hover:scale-110 active:scale-95 focus:outline-none relative"
        aria-label="Contact Adamu SB on WhatsApp"
        title="Contact Adamu SB on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-25" />
        <MessageSquare className="w-7 h-7 text-white fill-white relative z-10" />
      </button>
    </div>
  );
};

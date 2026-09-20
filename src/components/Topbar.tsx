import React from 'react';
import { MapPin, Clock, Phone, Settings } from 'lucide-react';
import { BusinessConfig } from '../types';

interface TopbarProps {
  config: BusinessConfig;
  onOpenSettings: () => void;
}

export const Topbar: React.FC<TopbarProps> = ({ config, onOpenSettings }) => {
  return (
    <div className="bg-[#020b18] text-slate-300 text-[11px] sm:text-xs py-2 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-y-2">
        {/* Left / Info items */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>No. 21 Solomon Lar Way, Shendam</span>
          </span>

          <a
            href="tel:+2348137386692"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>+234 813 738 6692</span>
          </a>

          <span className="hidden md:flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span>Open: Monday – Sunday (8:00am – 5:00pm)</span>
          </span>
        </div>

        {/* Right / Direct WhatsApp and quick setup */}
        <div className="flex items-center gap-3">
          <a
            href={`https://wa.me/${config.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-semibold"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            onClick={onOpenSettings}
            className="flex items-center gap-1 text-slate-400 hover:text-sky-300 transition-colors bg-slate-800/60 px-2 py-0.5 rounded border border-slate-700/60 text-[10px]"
            title="Configure business details & contact info"
          >
            <Settings className="w-3 h-3" />
            <span className="hidden sm:inline">Settings</span>
          </button>
        </div>
      </div>
    </div>
  );
};


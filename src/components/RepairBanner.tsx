import React from 'react';
import { CheckCircle2, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import { BusinessConfig } from '../types';

interface RepairBannerProps {
  config: BusinessConfig;
}

export const RepairBanner: React.FC<RepairBannerProps> = ({ config }) => {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${config.name}, I have an issue with my phone and would like to bring it to your shop at ${config.address} for diagnosis.`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#061629] via-[#0b3157] to-[#041d38] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative border border-slate-800">
          
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -mr-12 -mt-12 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/20 px-3.5 py-1 rounded-full inline-block mb-4">
                Phone Having Issues?
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-4">
                Don't discard it yet. <br />
                <span className="text-blue-400">Bring it for diagnosis.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl mb-8 leading-relaxed">
                Bring your phone or mobile device to {config.name} at {config.address} for physical inspection and practical repair solutions.
              </p>

              {/* Grid Items */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8 max-w-xl">
                {[
                  "Device hardware inspection",
                  "Screen & charging port checks",
                  "Phone software troubleshooting",
                  "Protection & accessories support"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-200 font-semibold">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={handleWhatsApp}
                  className="px-6 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-500/25 flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message on WhatsApp</span>
                </button>

                <a
                  href="#contact"
                  className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl border border-white/20 flex items-center gap-2 transition-all"
                >
                  <MapPin className="w-4 h-4 text-sky-300" />
                  <span>Visit Our Shop</span>
                </a>
              </div>
            </div>

            {/* Right Graphic Circle */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative shadow-inner">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full bg-blue-600/20 border border-blue-400/30 flex items-center justify-center text-6xl text-blue-400">
                  📱
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};


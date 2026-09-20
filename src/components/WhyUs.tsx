import React from 'react';
import { Search, Wrench, ShieldCheck, HeartHandshake, MessageCircle } from 'lucide-react';
import { BusinessConfig } from '../types';

interface WhyUsProps {
  config: BusinessConfig;
}

export const WhyUs: React.FC<WhyUsProps> = ({ config }) => {
  const points = [
    {
      icon: Wrench,
      title: "Hands-On Repair",
      description: "Direct troubleshooting and repair for broken screens, weak batteries, broken charging ports, and physical issues."
    },
    {
      icon: Search,
      title: "Careful Inspection",
      description: "We examine your device to find what is causing the fault and explain what needs to be fixed."
    },
    {
      icon: ShieldCheck,
      title: "Everyday Accessories",
      description: "A practical selection of chargers, cables, screen protectors, and cases to protect and power your phone."
    },
    {
      icon: HeartHandshake,
      title: "Direct Communication",
      description: "Direct assistance via WhatsApp or phone call, with straightforward updates on your repair."
    }
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello ${config.name}, I would like to ask a question about your phone repair services.`);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="why-us" className="py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
            Our Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Reliable Local Service
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Straightforward phone repair and mobile support right here in Shendam, Plateau State.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {points.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Button */}
        <div className="text-center">
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base rounded-xl shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
            <span>WhatsApp Support</span>
          </button>
        </div>

      </div>
    </section>
  );
};

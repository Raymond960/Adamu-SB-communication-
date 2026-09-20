import React from 'react';
import { Wrench, Laptop, Headphones, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { ServiceItem, BusinessConfig } from '../types';

interface ServicesProps {
  services: ServiceItem[];
  config: BusinessConfig;
}

export const Services: React.FC<ServicesProps> = ({ services, config }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench':
        return <Wrench className="w-7 h-7 text-blue-600" />;
      case 'Laptop':
        return <Laptop className="w-7 h-7 text-blue-600" />;
      case 'Headphones':
        return <Headphones className="w-7 h-7 text-blue-600" />;
      default:
        return <Wrench className="w-7 h-7 text-blue-600" />;
    }
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello ${config.name},\n\nI would like to inquire about your *${serviceTitle}* services. Can I get details on how to service my phone at your shop?`
    );
    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {config.name} provides phone repair, software troubleshooting, and phone accessories in Shendam, Plateau State.
          </p>
        </div>

        {/* 3 Main Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white transition-colors flex items-center justify-center mb-6 shadow-xs">
                  {getIcon(service.icon)}
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Checklist */}
                <div className="pt-4 border-t border-slate-100 mb-8">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                    Available Services
                  </h4>
                  <ul className="space-y-2.5">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                        <span className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2">
                <button
                  onClick={() => handleServiceInquiry(service.title)}
                  className="w-full py-3 px-4 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


import React from 'react';
import { Smartphone, Search, Wrench, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Visit or Contact",
      desc: "Bring your device to No. 21 Solomon Lar Way, Shendam, or reach out on WhatsApp."
    },
    {
      number: "02",
      title: "Device Inspection",
      desc: "We inspect the phone to identify the underlying hardware or software problem."
    },
    {
      number: "03",
      title: "Solution & Quote",
      desc: "We explain the necessary repair or software solution and the cost before starting."
    },
    {
      number: "04",
      title: "Collection",
      desc: "Once the repair is completed and tested, you pick up your phone."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Simple. Clear. Professional.
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Getting your phone fixed or serviced shouldn't be complicated. Here is how we work.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, idx) => (
            <div key={idx} className="relative text-center group">
              {/* Step Number Circle */}
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white font-extrabold text-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-600/30 group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

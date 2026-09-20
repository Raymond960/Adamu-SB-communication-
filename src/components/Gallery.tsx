import React from 'react';
import { Wrench, Shield, MessageSquare, MapPin } from 'lucide-react';
import { BusinessConfig } from '../types';
import { AsbLogo } from './AsbLogo';

interface GalleryProps {
  config: BusinessConfig;
}

export const Gallery: React.FC<GalleryProps> = ({ config }) => {
  return (
    <section id="gallery" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-400 bg-sky-950/80 border border-sky-800/60 px-3 py-1 rounded-full">
            Visual Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3 mb-4">
            Our Business & Service Focus
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Authentic service visual identity and mobile solutions from {config.name} at {config.address}.
          </p>
        </div>

        {/* Gallery Grid - Only Approved Visuals & Factual Showcases */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Item 1: Official ASB Emblem Showcase */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/50 transition-all">
            <div className="flex flex-col items-center justify-center p-6 bg-black rounded-xl border border-slate-700 mb-6 min-h-[220px]">
              <AsbLogo variant="iconOnly" size="xl" />
              <div className="mt-3 text-center">
                <div className="text-sm font-black text-white uppercase tracking-[0.14em]">
                  ADAMU S.B.
                </div>
                <div className="text-[10px] font-bold text-sky-400 uppercase tracking-[0.22em] mt-0.5">
                  COMMUNICATION
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">
                Official Brand Identity
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                The registered trademark emblem of Adamu S.B Communication, representing wireless connectivity and mobile tech services in Shendam.
              </p>
            </div>
          </div>

          {/* Item 2: Approved Tech Workshop Visual */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-sky-500/50 transition-all group">
            <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-950">
              <img
                src="/hero_tech_composition.jpg"
                alt="Adamu S.B Communication technical servicing composition"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-white mb-2">
                Mobile Hardware & Tech Servicing
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Component-level diagnosis, screen replacements, battery renewal, and circuitry inspection for everyday smartphones.
              </p>
            </div>
          </div>

          {/* Item 3: Service Scope & Location Card */}
          <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-sky-500/50 transition-all md:col-span-2 lg:col-span-1">
            <div className="space-y-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-start gap-3">
                <Wrench className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Phone Repair</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">Direct hardware troubleshooting and replacement parts.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-start gap-3">
                <Shield className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Software Support</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">System updates, unlocking assistance, and error resolution.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-700 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-white uppercase">Visit Our Shop</h4>
                  <p className="text-[11px] text-slate-300 mt-0.5">{config.address}</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-700/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Hours: 8:00 AM – 5:00 PM</span>
              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-3.5 bg-[#0084ff] hover:bg-[#0070f3] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Wrench, Code2, Headphones } from 'lucide-react';
import { BusinessConfig } from '../types';
import { AsbLogo } from './AsbLogo';

interface HeroProps {
  config: BusinessConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020b18] text-white w-full border-b border-slate-800/80"
    >
      {/* Background Ambient Tech Glows */}
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[350px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-blue-900/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[500px] lg:h-[560px] flex items-center relative z-10 py-12 lg:py-0">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-0">
          
          {/* LEFT SIDE CONTENT (~46% width on desktop) */}
          <div className="w-full lg:w-[48%] flex flex-col items-start text-left z-20">
            
            {/* Small blue uppercase label */}
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase text-[#00a2ff] mb-3 inline-block">
              {config.tagline || 'MOBILE PHONE SOLUTIONS'}
            </span>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-[1.08] mb-4">
              <span className="text-white block">Your Phone,</span>
              <span className="text-[#0084ff] block">Our Priority</span>
            </h1>

            {/* Factual description */}
            <p className="text-sm sm:text-base text-slate-300/90 font-normal leading-relaxed max-w-[440px] mb-7">
              {config.name} provides professional phone repair, software solutions and quality accessories to keep you connected.
            </p>

            {/* Three verified services in one horizontal row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full max-w-[460px] mb-8 pt-1">
              
              {/* Highlight 1: Phone Repair */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#0084ff] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30 mt-0.5">
                  <Wrench className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-tight leading-tight">
                    Phone Repair
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Hardware fixes
                  </div>
                </div>
              </div>

              {/* Highlight 2: Software Services */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#0084ff] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30 mt-0.5">
                  <Code2 className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-tight leading-tight">
                    Software Services
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    System support
                  </div>
                </div>
              </div>

              {/* Highlight 3: Accessories */}
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#0084ff] flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/30 mt-0.5">
                  <Headphones className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white uppercase tracking-tight leading-tight">
                    Accessories
                  </div>
                  <div className="text-[11px] text-slate-400 leading-tight mt-0.5">
                    Everyday items
                  </div>
                </div>
              </div>

            </div>

            {/* Hero Action Buttons */}
            <div className="flex items-center gap-3.5 sm:gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-[#0084ff] hover:bg-[#0070f3] text-white text-sm font-bold shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all hover:-translate-y-0.5"
              >
                <span>Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full bg-transparent hover:bg-blue-500/10 border border-[#0084ff] text-white text-sm font-bold transition-all hover:-translate-y-0.5"
              >
                <span>Contact Us</span>
              </a>
            </div>

          </div>

          {/* RIGHT SIDE HERO VISUAL (~52% width on desktop) */}
          <div className="w-full lg:w-[50%] relative h-[360px] sm:h-[420px] lg:h-[480px] flex items-center justify-center">
            
            {/* Visual background container with official branding */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-blue-900/40 bg-gradient-to-br from-[#04162c] via-[#020b18] to-[#01060e] flex items-center justify-center">
              
              {/* Background ambient pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:20px_20px] opacity-25" />
              
              {/* Soft center glow */}
              <div className="absolute w-72 h-72 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
            </div>

            {/* CENTER ASB OFFICIAL LOGO & TITLE */}
            <div className="relative z-20 flex flex-col items-center justify-center p-8 sm:p-10 rounded-2xl bg-black/85 border border-slate-800/90 shadow-2xl max-w-[340px] sm:max-w-[380px] text-center backdrop-blur-xs">
              
              {/* Concentric Wireless Signal Waves & Official ASB Emblem */}
              <div className="relative mb-3 flex items-center justify-center">
                <AsbLogo variant="iconOnly" size="xl" />
              </div>

              {/* Business Name under the logo */}
              <div className="mt-2">
                <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-[0.16em] leading-none">
                  ADAMU S.B.
                </h2>
                <div className="text-xs sm:text-sm font-extrabold text-sky-400 uppercase tracking-[0.26em] mt-2">
                  COMMUNICATION
                </div>
                <p className="text-[11px] text-slate-400 font-medium mt-3 border-t border-slate-800 pt-2.5">
                  No. 21 Solomon Lar Way, Shendam, Plateau State
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

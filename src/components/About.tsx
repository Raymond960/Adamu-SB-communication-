import React from 'react';
import { Check, ShieldCheck, HeartHandshake, Wrench } from 'lucide-react';
import { BusinessConfig } from '../types';
import { AsbLogo } from './AsbLogo';

interface AboutProps {
  config: BusinessConfig;
}

export const About: React.FC<AboutProps> = ({ config }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md h-96 sm:h-[430px] rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 p-8 shadow-2xl relative overflow-hidden flex items-center justify-center border border-slate-800">
              
              {/* Background Graphic Elements */}
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl" />
              
              {/* Center Rotating Device Frame */}
              <div className="w-52 h-80 rounded-[32px] bg-slate-900 border-4 border-slate-700/80 shadow-2xl p-5 flex flex-col items-center justify-center text-center -rotate-6 hover:rotate-0 transition-transform duration-500">
                <AsbLogo variant="centered" size="lg" />
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 pt-3 border-t border-slate-800 w-full">
                  Professional Tech
                </span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7">
            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
              About {config.name}
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
              Technology support you can rely on.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-8">
              Located at {config.address}, {config.name} is a mobile phone service shop providing device repair, software troubleshooting, and phone accessories for the Shendam community and surrounding areas.
            </p>

            {/* Key Bullet Points */}
            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    Practical Solutions
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    We focus on accurately identifying the root cause of the issue before recommending or executing any repair work.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    Customer Focused
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Clear communication, honest price quotes, and straightforward customer service are central to how we operate.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    Phone & Software Support
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Hardware repair, software troubleshooting, device unlocking, and protective accessories are handled conveniently in one place.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

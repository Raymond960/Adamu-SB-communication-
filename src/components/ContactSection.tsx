import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, MessageSquare, Send, ExternalLink } from 'lucide-react';
import { BusinessConfig } from '../types';

interface ContactSectionProps {
  config: BusinessConfig;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('Phone Repair');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !phone.trim() || !message.trim()) {
      return;
    }

    setIsSubmitting(true);

    const formattedMessage = `Hello ${config.name},\n\nService Request:\n- Customer Name: ${name.trim()}\n- Customer Phone Number: ${phone.trim()}\n- Selected Service: ${service}\n- Customer Message: ${message.trim()}`;

    const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    
    // Direct open to WhatsApp
    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1500);
  };

  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(config.address)}`;

  return (
    <section id="contact" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-600 bg-blue-100/80 px-3 py-1 rounded-full">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Visit our shop at {config.address}, call us directly, or send a message on WhatsApp.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Contact Info Box - Verified Business Details */}
          <div className="lg:col-span-5 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden border border-slate-800">
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs font-extrabold text-blue-400 uppercase tracking-widest block mb-2">
              Verified Business Details
            </span>
            <h3 className="text-2xl font-black mb-2 text-white">
              {config.name}
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              We are available 7 days a week to handle your mobile phone repairs, software troubleshooting, and accessory needs.
            </p>

            <div className="space-y-6">
              
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Address
                  </h4>
                  <p className="text-sm font-semibold text-slate-200">
                    {config.address}
                  </p>
                  <a
                    href={mapSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-sky-400 hover:text-sky-300 mt-1.5 transition-colors"
                  >
                    <span>View Location</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Phone / WhatsApp
                  </h4>
                  <p className="text-sm font-semibold text-slate-200">
                    {config.phone}
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm font-semibold text-slate-200">
                    {config.openingHours}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-slate-800 text-blue-400 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Email
                  </h4>
                  <p className="text-sm font-semibold text-slate-200">
                    {config.email}
                  </p>
                </div>
              </div>

            </div>

            {/* Direct Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-3 gap-2">
              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="py-2.5 px-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call</span>
              </a>

              <a
                href={`https://wa.me/${config.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${config.email}`}
                className="py-2.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors text-center border border-slate-700"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Contact / Service Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-2">
              Send a Service Request
            </h3>
            <p className="text-slate-600 text-sm mb-6 leading-relaxed">
              Complete the details below to submit your request directly to our official WhatsApp (+234 813 738 6692).
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 08137386692"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-semibold cursor-pointer"
                >
                  <option value="Phone Repair">Phone Repair</option>
                  <option value="Software Services">Software Services</option>
                  <option value="Phone Accessories">Phone Accessories</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your phone issue or the accessories you need..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium resize-y"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 bg-[#0084ff] hover:bg-[#0070f3] text-white font-bold text-sm rounded-xl shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer disabled:opacity-75"
                >
                  <MessageSquare className="w-5 h-5 text-white" />
                  <span>Send via WhatsApp (+234 813 738 6692)</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
                <p className="text-[11px] text-slate-500 text-center mt-2.5">
                  Submitting directly prepares your WhatsApp message with your name, phone number, selected service, and message.
                </p>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

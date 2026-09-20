import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';
import { BusinessConfig } from '../types';
import { AsbLogo } from './AsbLogo';

interface NavbarProps {
  config: BusinessConfig;
}

export const Navbar: React.FC<NavbarProps> = ({ config }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'accessories', 'about', 'gallery', 'contact'];
      const scrollPosition = window.scrollY + 150;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Services', href: '#services', id: 'services' },
    { name: 'Accessories', href: '#accessories', id: 'accessories' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello ${config.name}, I would like to inquire about your phone repair and accessories services.`);
    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#030f21] border-b border-slate-800/80 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        {/* Brand Logo - Official ASB Emblem & Title */}
        <a href="#home" className="flex items-center group">
          <AsbLogo variant="horizontal" size="md" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7 text-sm font-semibold text-slate-200">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className={`transition-colors hover:text-sky-400 relative py-2 ${
                    activeSection === link.id ? 'text-sky-400 font-bold' : 'text-slate-300'
                  }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-400 rounded-full" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
            {/* Call button */}
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 rounded-lg transition-colors border border-slate-700/60"
              title={`Call ${config.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{config.phone}</span>
            </a>

            {/* Bright Blue WhatsApp Us Pill Button */}
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-[#0084ff] hover:bg-[#0070f3] rounded-full shadow-lg shadow-blue-500/25 transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#0084ff]" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </nav>

        {/* Mobile Actions & Menu Toggle */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={handleWhatsApp}
            className="p-2 text-white bg-[#0084ff] rounded-full flex items-center justify-center shadow-sm"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4 fill-white text-[#0084ff]" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-slate-200 hover:text-sky-400 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030f21] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200">
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-3 py-2 rounded-lg text-base font-semibold transition-colors ${
                    activeSection === link.id
                      ? 'bg-blue-950/60 text-sky-400 font-bold'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2">
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-sky-300 bg-slate-800/80 border border-slate-700 rounded-xl"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call: {config.phone}</span>
            </a>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                handleWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-bold text-white bg-[#0084ff] hover:bg-[#0070f3] rounded-full shadow-md shadow-blue-500/20"
            >
              <MessageCircle className="w-4 h-4 fill-white text-[#0084ff]" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};


import React, { useState } from 'react';
import { initialBusinessConfig, mainServices } from './data/mockData';
import { BusinessConfig } from './types';
import { Topbar } from './components/Topbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Services } from './components/Services';
import { RepairBanner } from './components/RepairBanner';
import { AccessoriesCatalog } from './components/AccessoriesCatalog';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { WhyUs } from './components/WhyUs';
import { Process } from './components/Process';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { SettingsModal } from './components/SettingsModal';

export default function App() {
  const [config, setConfig] = useState<BusinessConfig>(() => {
    const saved = localStorage.getItem('adamusb_config');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          ...initialBusinessConfig,
          ...parsed,
          // Always ensure verified credentials are kept
          address: parsed.address || initialBusinessConfig.address,
          phone: parsed.phone || initialBusinessConfig.phone,
          whatsappNumber: parsed.whatsappNumber || initialBusinessConfig.whatsappNumber,
          email: parsed.email || initialBusinessConfig.email,
        };
      } catch (e) {
        return initialBusinessConfig;
      }
    }
    return initialBusinessConfig;
  });

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleSaveConfig = (updated: BusinessConfig) => {
    setConfig(updated);
    localStorage.setItem('adamusb_config', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Top Contact Bar */}
      <Topbar
        config={config}
        onOpenSettings={() => setIsSettingsOpen(true)}
      />

      {/* Main Sticky Navigation */}
      <Navbar
        config={config}
      />

      <main className="flex-1">
        {/* Hero Section with official ASB vector logo */}
        <Hero
          config={config}
        />

        {/* Quick Factual Highlights Bar */}
        <StatsBar />

        {/* Core Services Section: Phone Repair, Software Services, Phone Accessories */}
        <Services
          services={mainServices}
          config={config}
        />

        {/* Repair & Diagnosis Invitation Banner */}
        <RepairBanner
          config={config}
        />

        {/* Phone Accessories Selection */}
        <AccessoriesCatalog
          config={config}
        />

        {/* About Business */}
        <About
          config={config}
        />

        {/* Gallery Visual Showcase */}
        <Gallery
          config={config}
        />

        {/* Why Choose Us / Our Approach */}
        <WhyUs
          config={config}
        />

        {/* Service Process */}
        <Process />

        {/* Contact Form & Information */}
        <ContactSection
          config={config}
        />
      </main>

      {/* Footer */}
      <Footer config={config} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp config={config} />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        config={config}
        onSaveConfig={handleSaveConfig}
      />
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VideoShowcase } from './components/video/VideoShowcase';
import { BrandDesignStudio } from './components/brandDesign/BrandDesignStudio';
import { ContactSection } from './components/contact/ContactSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/common/SearchModal';
import { ArchitectureBlueprintModal } from './components/blueprint/ArchitectureBlueprintModal';
import { LiveChatWidget } from './components/common/LiveChatWidget';
import { ChevronRight, Home, Sparkles } from 'lucide-react';

export default function App() {
  const [currentSection, setCurrentSection] = useState<string>('hero');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [blueprintOpen, setBlueprintOpen] = useState<boolean>(false);
  const [fontScale, setFontScale] = useState<number>(0); // -1 = 90%, 0 = 100%, 1 = 110%, 2 = 120%
  const [globalNotice, setGlobalNotice] = useState<string | null>(null);

  // Keyboard shortcut: Cmd+K / Ctrl+K for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setCurrentSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSearchResult = (category: string, id: string) => {
    if (category === 'video') {
      handleNavigate('portfolio');
    } else if (category === 'branding') {
      handleNavigate('services');
    }
  };

  const showNotice = (msg: string) => {
    setGlobalNotice(msg);
    setTimeout(() => setGlobalNotice(null), 3500);
  };

  const fontScaleClass = 
    fontScale === -1 ? 'text-[92%]' :
    fontScale === 1 ? 'text-[108%]' :
    fontScale === 2 ? 'text-[116%]' : '';

  return (
    <div className={`min-h-screen bg-[#08090d] text-slate-100 flex flex-col ${fontScaleClass}`}>
      
      {/* Toast Notice */}
      {globalNotice && (
        <div className="fixed top-20 right-6 z-50 bg-[#12131a] border border-amber-500 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 animate-fade-in">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{globalNotice}</span>
        </div>
      )}

      {/* Sticky Header Navigation with background blur */}
      <Header
        onOpenSearch={() => setSearchOpen(true)}
        onOpenContact={() => handleNavigate('contact')}
        fontScale={fontScale}
        onChangeFontScale={(delta) => setFontScale(prev => delta === 0 ? 0 : Math.max(-1, Math.min(2, prev + delta)))}
        currentSection={currentSection}
        onNavigate={handleNavigate}
      />

      {/* Main Single-Page Content Flow */}
      <main className="flex-1">
        
        {/* Breadcrumb Navigation Trail */}
        <div className="pt-24 pb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-400">
            <button 
              onClick={() => handleNavigate('hero')}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3 h-3" />
              <span>Maaz Baloch Studio</span>
            </button>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-300">Muhammad Maaz Yousaf Khan</span>
            <ChevronRight className="w-3 h-3 text-zinc-600" />
            <span className="text-amber-400">
              {currentSection === 'hero' ? 'Executive Overview' :
               currentSection === 'portfolio' ? 'Pillar 1: Video Editing & Social' :
               currentSection === 'services' ? 'Pillar 2: Brand Identity & Typography' :
               'Client Onboarding & Contact'}
            </span>
          </nav>
        </div>

        {/* Hero Section */}
        <Hero
          onExploreVideo={() => handleNavigate('portfolio')}
          onExploreBranding={() => handleNavigate('services')}
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* Pillar 1: High-Retention Video Editing & Social Strategy */}
        <VideoShowcase
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* Pillar 2: Brand Identity Design, Custom Logotypes & Typography */}
        <BrandDesignStudio
          onOpenContact={() => handleNavigate('contact')}
        />

        {/* Multi-Step Client Onboarding Form & Verified Contact Grid */}
        <ContactSection
          onSuccessNotice={showNotice}
        />

      </main>

      {/* Footer Sitemap & Legal Directory */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => handleNavigate('contact')}
        onOpenBlueprint={() => setBlueprintOpen(true)}
      />

      {/* Instant Search Modal (Cmd+K) */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={handleSelectSearchResult}
      />

      {/* Corrected Technical Blueprint Modal */}
      <ArchitectureBlueprintModal
        isOpen={blueprintOpen}
        onClose={() => setBlueprintOpen(false)}
      />

      {/* Floating Studio Direct Concierge */}
      <LiveChatWidget />

    </div>
  );
}

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Menu, 
  X, 
  Video, 
  Sparkles, 
  Phone, 
  Mail, 
  ArrowRight,
  SlidersHorizontal
} from 'lucide-react';
import { STUDIO_META } from '../data/portfolioData';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenContact: () => void;
  fontScale: number;
  onChangeFontScale: (delta: number) => void;
  currentSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onOpenContact,
  fontScale,
  onChangeFontScale,
  currentSection,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 30);

      const winHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (winHeight > 0) {
        setScrollProgress((currentY / winHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-200 z-50 transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Sticky Header Navigation with background blur */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 ${
          isScrolled 
            ? 'bg-[#08090d]/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/50' 
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single text element Brand Wordmark */}
          <button 
            onClick={() => onNavigate('hero')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 rounded"
          >
            <div className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0 group-hover:text-amber-400 transition-colors font-heading">
              MAAZ BALOCH
            </div>
            <div className="text-[10px] tracking-widest text-zinc-400 uppercase font-medium">
              Creative Media & Post-Production
            </div>
          </button>

          {/* Zone 2: Navigation Links (Home | Portfolio | Services | Contact) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 cursor-pointer ${
                  currentSection === item.id 
                    ? 'text-amber-400 font-semibold border-b border-amber-400' 
                    : 'text-zinc-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Search, Accessibility & Primary Action CTA */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Search Trigger */}
            <button 
              onClick={onOpenSearch}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors focus-visible:ring-1 focus-visible:ring-amber-500 cursor-pointer"
              aria-label="Open Search"
              title="Search showreel, edits and brand identity systems (Cmd+K)"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Accessibility Font Resizer (A- / A+) */}
            <div className="hidden sm:flex items-center border border-zinc-800 bg-zinc-900/60 rounded-lg p-0.5 text-xs text-zinc-400">
              <button 
                onClick={() => onChangeFontScale(-1)} 
                disabled={fontScale <= -1}
                className="px-2 py-1 hover:text-white disabled:opacity-30 transition-colors font-mono cursor-pointer"
                title="Decrease body text size"
              >
                A-
              </button>
              <button 
                onClick={() => onChangeFontScale(0)} 
                className="px-1.5 py-1 hover:text-amber-400 transition-colors text-[10px] cursor-pointer"
                title="Reset text size"
              >
                {fontScale === 0 ? '100%' : fontScale > 0 ? '+10%' : '-10%'}
              </button>
              <button 
                onClick={() => onChangeFontScale(1)} 
                disabled={fontScale >= 2}
                className="px-2 py-1 hover:text-white disabled:opacity-30 transition-colors font-mono cursor-pointer"
                title="Increase body text size"
              >
                A+
              </button>
            </div>

            {/* Direct WhatsApp Quick Badge */}
            <a
              href={STUDIO_META.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/30 hover:bg-emerald-950/60 border border-emerald-500/30 rounded-lg transition-colors"
              title="Direct WhatsApp chat"
            >
              <Phone className="w-3 h-3" />
              <span>WhatsApp</span>
            </a>

            {/* Primary Action CTA */}
            <button 
              onClick={onOpenContact}
              className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg transition-all shadow-md shadow-amber-500/20 whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
            >
              Book Production
            </button>

            {/* Mobile Hamburger Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/60 rounded-lg cursor-pointer"
              aria-label="Toggle Mobile Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-[#08090d]/95 backdrop-blur-xl z-30 md:hidden border-t border-zinc-800 p-6 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-2">
              Studio Navigation
            </div>
            {navItems.map(item => (
              <button 
                key={item.id}
                onClick={() => { setMobileMenuOpen(false); onNavigate(item.id); }}
                className="w-full text-left py-2.5 text-base font-medium text-white hover:text-amber-400 flex items-center justify-between cursor-pointer"
              >
                <span>{item.label}</span>
                <span className="text-xs text-zinc-600">→</span>
              </button>
            ))}

            <div className="pt-4 border-t border-zinc-800 space-y-2">
              <a
                href={STUDIO_META.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 text-sm py-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp: {STUDIO_META.phone}</span>
              </a>
              <a
                href={`mailto:${STUDIO_META.email}`}
                className="flex items-center gap-2 text-zinc-300 text-sm py-2"
              >
                <Mail className="w-4 h-4 text-amber-400" />
                <span>{STUDIO_META.email}</span>
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-zinc-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Text Sizing</span>
              <div className="flex items-center gap-2">
                <button onClick={() => onChangeFontScale(-1)} className="px-2 py-1 bg-zinc-800 rounded">A-</button>
                <button onClick={() => onChangeFontScale(0)} className="px-2 py-1 bg-zinc-800 rounded">Reset</button>
                <button onClick={() => onChangeFontScale(1)} className="px-2 py-1 bg-zinc-800 rounded">A+</button>
              </div>
            </div>

            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 text-center text-sm font-semibold text-zinc-950 bg-amber-400 rounded-lg shadow cursor-pointer"
            >
              Start Client Onboarding
            </button>
          </div>
        </div>
      )}
    </>
  );
};

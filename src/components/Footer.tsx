import React, { useState, useEffect } from 'react';
import { 
  ArrowUp, 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  Video, 
  Sparkles, 
  ExternalLink 
} from 'lucide-react';
import { STUDIO_META } from '../data/portfolioData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenContact: () => void;
  onOpenBlueprint: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onOpenBlueprint,
}) => {
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050608] border-t border-zinc-800 text-zinc-400 text-xs relative pt-16 pb-12">
      
      {/* Back-to-Top Floating Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 bg-amber-400 hover:bg-amber-300 text-zinc-950 rounded-xl shadow-2xl transition-all hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Multi-Column Sitemap Directory */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-zinc-800/80">
          
          {/* Col 1 & 2: Studio Identity & Official Details */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-base font-bold text-white tracking-tight font-heading">
              MAAZ BALOCH
            </div>
            <div className="text-xs text-zinc-300 font-medium">
              Official Identity: {STUDIO_META.officialName}
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-sm">
              Premium Creative Media & Post-Production Studio. High-retention commercial video editing, algorithmic social media strategy, and bespoke brand identity systems.
            </p>

            {/* Contact details list */}
            <div className="pt-2 space-y-1.5 text-zinc-400 text-xs font-mono">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="text-[11px]">{STUDIO_META.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={STUDIO_META.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                  {STUDIO_META.phone} (WhatsApp Direct)
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <a href={`mailto:${STUDIO_META.email}`} className="hover:text-amber-400 transition-colors">
                  {STUDIO_META.email}
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Primary Pillar (Video Editing) */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              01. Video Editing
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Commercial Cutdowns
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  DaVinci Color Grading
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Foley Sound Design
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Kinetic Social Hooks
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Secondary Pillar (Brand Identity) */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              02. Brand Design
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Bespoke Logotypes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Live Text Type Tester
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Calligraphy & Lettering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  Brand Guidelines Export
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Client Engagement & Socials */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
              Connected Channels
            </div>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <a 
                  href={STUDIO_META.instagramUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>{STUDIO_META.instagram}</span>
                </a>
              </li>
              <li>
                <a 
                  href={STUDIO_META.facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-3.5 h-3.5" />
                  <span>{STUDIO_META.facebook}</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={onOpenContact} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-medium text-zinc-300"
                >
                  Client Onboarding Form →
                </button>
              </li>
              <li>
                <button 
                  onClick={onOpenBlueprint} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left text-[11px] text-zinc-500"
                >
                  Studio Technical Blueprint
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-400">
          <div>
            © {new Date().getFullYear()} {STUDIO_META.officialName} ({STUDIO_META.name}). All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Clean Semantic Structure (SEO · AEO · GEO)</span>
            <span>·</span>
            <span>WCAG AA Accessible</span>
            <span>·</span>
            <button onClick={onOpenBlueprint} className="text-amber-400 hover:underline cursor-pointer">
              Architecture Blueprint
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

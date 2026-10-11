import React, { useState } from 'react';
import { 
  BookOpen, 
  Cpu, 
  Layers, 
  Layout, 
  CheckCircle, 
  Video, 
  Sparkles, 
  Download,
  ShieldCheck,
  Check
} from 'lucide-react';
import { STUDIO_META } from '../../data/portfolioData';

interface ArchitectureBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ArchitectureBlueprintModal: React.FC<ArchitectureBlueprintModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'specifications' | 'uiux'>('architecture');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#090a0f] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-8 max-h-[92vh]">
        
        {/* Header */}
        <div className="p-5 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/70">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 border border-amber-500/30">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white tracking-tight">
                Maaz Baloch — Corrected Architecture Blueprint & System Specifications
              </div>
              <div className="text-[11px] text-zinc-400 font-mono">
                Official Identity: {STUDIO_META.officialName} · Production Blueprint v4.2
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white rounded cursor-pointer">
            ✕
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-3 bg-zinc-950 border-b border-zinc-800 text-xs">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'architecture'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>1. Technical Architecture & System Design</span>
          </button>

          <button
            onClick={() => setActiveTab('specifications')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'specifications'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>2. Feature-by-Feature Functional Specifications</span>
          </button>

          <button
            onClick={() => setActiveTab('uiux')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors cursor-pointer ${
              activeTab === 'uiux'
                ? 'bg-amber-400 text-zinc-950 font-semibold shadow'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>3. Interactive UI/UX Component Blueprint</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-zinc-300 leading-relaxed">
          
          {/* TAB 1: Technical Architecture & System Design */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="text-sm font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Gamma-Compliant Frontend Architecture & Error Corrections</span>
                </h3>
                <p className="text-zinc-400 mb-3">
                  This architecture resolves past mistakes by stripping backend-dependent failure points and consolidating into a blazing-fast, free-tier resilient personal brand ecosystem:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-zinc-300">
                  <div className="p-3 bg-black/50 border border-zinc-800 rounded-lg">
                    <div className="font-semibold text-emerald-400 text-xs mb-1">Fix 1: Zero Backend / DB Portal Lock</div>
                    <p className="text-[11px] text-zinc-400">
                      Replaced vulnerable database-locked 2FA login walls with a high-conversion, responsive Multi-Step Client Onboarding Form paired with direct WhatsApp (+923177879175) and official email integration.
                    </p>
                  </div>

                  <div className="p-3 bg-black/50 border border-zinc-800 rounded-lg">
                    <div className="font-semibold text-emerald-400 text-xs mb-1">Fix 2: No Infinite Scroll Trap</div>
                    <p className="text-[11px] text-zinc-400">
                      Eliminated infinite scroll loops that trap visitors. Deployed a clean, static Grid-to-List Layout Switcher so users effortlessly navigate down to the Footer Sitemap and verified social handles.
                    </p>
                  </div>

                  <div className="p-3 bg-black/50 border border-zinc-800 rounded-lg">
                    <div className="font-semibold text-emerald-400 text-xs mb-1">Fix 3: No Fragile Script Injection</div>
                    <p className="text-[11px] text-zinc-400">
                      Removed reliance on third-party tracking heatmaps or custom header injections that break on builder sandboxes. Built semantic HTML5 layout structures optimized natively for SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization).
                    </p>
                  </div>

                  <div className="p-3 bg-black/50 border border-zinc-800 rounded-lg">
                    <div className="font-semibold text-emerald-400 text-xs mb-1">Fix 4: Performance Overload Resolution</div>
                    <p className="text-[11px] text-zinc-400">
                      Replaced heavy 3D WebGL device canvases with lightweight CSS aspect-ratio mockups, Retina-ready SVG asset blocks, and standard responsive video grids utilizing Hover-to-Play muted preview logic.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stack specifications */}
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl font-mono text-[11px]">
                <div className="font-bold text-amber-400 mb-2">Technical Engine Specs</div>
                <div className="p-3 bg-black/70 rounded border border-zinc-800 text-zinc-400 space-y-1">
                  <div>• Framework: React 19 SPA + Vite + TypeScript (Zero backend dependencies)</div>
                  <div>• Audio: Web Audio API Synthesizer (Instant procedural Foley SFX & Lossless A/B preview)</div>
                  <div>• Styling: Tailwind CSS v4 with fluid rem typography scaler</div>
                  <div>• Search: Real-time static JSON inverted index (Sub-millisecond query latency)</div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Feature-by-Feature Functional Specifications */}
          {activeTab === 'specifications' && (
            <div className="space-y-6">
              
              {/* Pillar 1 Specification */}
              <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2">
                <div className="font-bold text-amber-400 text-xs flex items-center gap-2">
                  <Video className="w-4 h-4" />
                  <span>Pillar 1: High-Retention Video Editing & Social Media Strategy</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  • <strong>Draggable Before/After Color Grading Slider:</strong> Interactive split-screen widget showcasing flat Arri LogC profile against graded Kodak 2383 35mm film LUT.<br />
                  • <strong>Custom HTML5 Video Player:</strong> Full control deck with frame-by-frame stepping (-1F, +1F), timecode scrubbing (HH:MM:SS:FF), and 4K/1080p resolution selection.<br />
                  • <strong>Kinetic Subtitles:</strong> Animated Hormozi-style pop captions demonstrating audience retention mechanics for social media campaigns.<br />
                  • <strong>Procedural Foley Soundboard:</strong> 6-channel Web Audio synthesizer with lossless 24-bit/96kHz vs. compressed 128kbps audio preview.<br />
                  • <strong>Grid-to-List Layout Switcher:</strong> Static layout mode toggle for quick portfolio browsing.
                </p>
              </div>

              {/* Pillar 2 Specification */}
              <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2">
                <div className="font-bold text-white text-xs flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span>Pillar 2: Brand Identity Design, Custom Logotypes & Creative Lettering</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  • <strong>Interactive Live Text Type Tester:</strong> Real-time input box allowing visitors to test custom names across Modern Thuluth, Diwani Flow, Blackletter, and Monoline scripts.<br />
                  • <strong>Variable Font Engine:</strong> Sliders modifying stroke size (32px–76px) and slant angle ($-20^\circ$ to $+20^\circ$) on the fly.<br />
                  • <strong>Sequential SVG Write-On Tracing:</strong> Animated stroke tracing mimicking hand-drawn ink deposition with replay controls.<br />
                  • <strong>Dark/Light Contrast Testing:</strong> One-click contrast switcher evaluating logo legibility on black (#090A0F) vs. light (#FAFAFA) surfaces.<br />
                  • <strong>One-Click Hex Copy Boards:</strong> Instant clipboard copy for primary, secondary, and highlight color codes.<br />
                  • <strong>Modular Monogram Combiner:</strong> Interactive initial mixer pairing letters into geometric brand marks.
                </p>
              </div>

              {/* Client Engagement Module */}
              <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl space-y-2">
                <div className="font-bold text-white text-xs flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Pillar 3: Progressive Client Onboarding & Direct Handover</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  • <strong>3-Stage Multi-Step Form:</strong> Captures Creative Pillar, Scope, Turnaround Urgency (48h rush vs. retainers), Budget ($1.5k–$15k+), and cloud asset links.<br />
                  • <strong>Verified Metadata Integration:</strong> Instant WhatsApp handoff (+923177879175) and direct email forwarding (92muhammadmaaz811khan@gmail.com).
                </p>
              </div>

            </div>
          )}

          {/* TAB 3: Interactive UI/UX Component Blueprint */}
          {activeTab === 'uiux' && (
            <div className="space-y-6">
              <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl">
                <h3 className="text-sm font-bold text-white mb-2">Single-Page Website Layout Map & Visual Tokens</h3>
                <div className="space-y-3 text-zinc-400 text-[11px]">
                  <div>
                    <strong className="text-zinc-200">Layout Map:</strong>
                    <div className="p-2 bg-black/60 rounded border border-zinc-800 font-mono mt-1 text-[10px]">
                      Sticky Header ──► Split Hero & Proof Row ──► Pillar 1: Video Engine & Portfolio ──► Pillar 2: Brand Identity & Type Tester ──► Multi-Step Onboarding Form & Contact Grid ──► Footer Sitemap
                    </div>
                  </div>
                  <div>
                    <strong className="text-zinc-200">60-30-10 Color Budget:</strong> 60% Obsidian Black Canvas (`#08090D`), 30% Structural Graphite Surfaces (`#0E1017` & `#12131A`), 10% High-Intent Amber & 24K Gold Accent (`#D4AF37` / `#F59E0B`).
                  </div>
                  <div>
                    <strong className="text-zinc-200">Typography Pairing:</strong> Plus Jakarta Sans for high-legibility body prose, Outfit for structural section headlines, and Cinzel Serif for luxury calligraphic display headers.
                  </div>
                  <div>
                    <strong className="text-zinc-200">Zero-Pill Governance:</strong> Unboxed typography metadata separated by typographic dots (`·`), keeping cards clean and devoid of AI bubble clutter.
                  </div>
                </div>
              </div>

              {/* Verified Contact Details Summary */}
              <div className="p-4 bg-black/60 border border-zinc-800 rounded-xl font-mono text-[11px] space-y-1">
                <div className="text-amber-400 font-bold mb-1">Official Contact Information:</div>
                <div>Phone / WhatsApp: <a href={STUDIO_META.whatsappUrl} className="text-emerald-400 underline">{STUDIO_META.phone}</a></div>
                <div>Email: <a href={`mailto:${STUDIO_META.email}`} className="text-white underline">{STUDIO_META.email}</a></div>
                <div>Location: {STUDIO_META.location}</div>
                <div>Instagram: {STUDIO_META.instagram} | Facebook: {STUDIO_META.facebook}</div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Play, Pause, ArrowRight, Video, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { ASSET_PATHS, STUDIO_META } from '../data/portfolioData';

interface HeroProps {
  onExploreVideo: () => void;
  onExploreBranding: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onExploreVideo, 
  onExploreBranding, 
  onOpenContact 
}) => {
  const [isPlayingAmbient, setIsPlayingAmbient] = useState(true);

  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[480px] bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-transparent rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Split-Screen Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Typographic Hierarchy & Core Positioning */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Studio Badge & Official Identity (Zero-Pill clean typography) */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-3">
              <span>Premium Creative Media Studio</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Official: {STUDIO_META.officialName}</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08] text-balance mb-6">
              High-Retention Video Editing & Strategic Brand Identity Architecture.
            </h1>

            {/* Lead Copy */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-8">
              Post-production studio of <strong className="text-white font-semibold">Maaz Baloch</strong> (Muhammad Maaz Yousaf Khan). 
              Crafting high-velocity commercial video edits, algorithmic social content systems, and bespoke architectural brand logotypes built to dominate audience attention.
            </p>

            {/* Two Creative Pillars Quick Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 max-w-xl">
              <div 
                onClick={onExploreVideo}
                className="p-3.5 bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-xl transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                  <Video className="w-4 h-4" />
                  <span>01. Primary Focus</span>
                </div>
                <div className="text-sm font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  Video Editing & Social Strategy
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Anamorphic color grading, 60fps kinetic pacing, and Foley sound design.
                </div>
              </div>

              <div 
                onClick={onExploreBranding}
                className="p-3.5 bg-zinc-900/60 hover:bg-zinc-900/90 border border-zinc-800 hover:border-amber-500/40 rounded-xl transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs">
                  <Sparkles className="w-4 h-4" />
                  <span>02. Design Pillar</span>
                </div>
                <div className="text-sm font-bold text-white mt-1 group-hover:text-amber-300 transition-colors">
                  Brand Identity & Lettering
                </div>
                <div className="text-xs text-zinc-400 mt-0.5">
                  Bespoke logotypes, golden ratio monograms, and custom calligraphy.
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreVideo}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-lg shadow-lg shadow-amber-500/25 transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Explore Core Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-medium text-zinc-200 hover:text-white bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg transition-all cursor-pointer"
              >
                <span>Client Onboarding Form</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Visual Container (Crisp High-Speed Layout) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl flex flex-col justify-between group">
              
              {/* Media Container with Ambient Loop Simulator */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-auto lg:h-[460px] w-full overflow-hidden bg-black">
                <img
                  src={ASSET_PATHS.heroDirector}
                  alt="Muhammad Maaz Baloch in Studio Suite"
                  className={`w-full h-full object-cover transition-transform duration-700 ${
                    isPlayingAmbient ? 'scale-105' : 'scale-100'
                  }`}
                  referrerPolicy="no-referrer"
                />

                {/* Measured Contrast Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 pointer-events-none" />

                {/* Ambient Motion Toggle */}
                <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
                  <button
                    onClick={() => setIsPlayingAmbient(!isPlayingAmbient)}
                    className="p-2 bg-black/60 hover:bg-black/80 backdrop-blur-md text-white rounded-lg border border-zinc-700/60 transition-colors text-xs flex items-center gap-1.5 cursor-pointer"
                    title={isPlayingAmbient ? 'Pause Ambient Motion' : 'Play Ambient Motion'}
                  >
                    {isPlayingAmbient ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                    <span className="font-mono text-[11px]">{isPlayingAmbient ? 'Ambient Active' : 'Paused'}</span>
                  </button>
                </div>

                {/* Studio Suite Overlay Badges (Zero-Pill clean text) */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between z-10">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                      Color Suite · DaVinci Resolve Studio
                    </div>
                    <div className="text-sm font-semibold text-white mt-0.5">
                      Apex GT & Omni Commercial Retainers
                    </div>
                    <div className="text-xs text-zinc-300 mt-0.5 flex items-center gap-2">
                      <span>ProRes 4444 Master</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">4K DCI · 24 & 60fps</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Bar */}
              <div className="p-3.5 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Direct Turnaround: 48h Broadcast Sprints</span>
                </div>
                <button
                  onClick={onExploreVideo}
                  className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Interactive Suite →</span>
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Claim-to-Proof Row Below Hero Split */}
        <div className="mt-14 pt-8 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-mono tabular-nums">
              140M+
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">
              Organic Audience Reach Driven Across Client Social Campaigns
            </div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-mono tabular-nums">
              850+
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">
              Commercial Cutdowns & High-Impact Social Videos Delivered
            </div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-bold text-amber-400 tracking-tight font-mono tabular-nums">
              98.4%
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">
              Client Satisfaction & First-Pass Timeline Approval Rating
            </div>
          </div>

          <div>
            <div className="text-3xl lg:text-4xl font-bold text-white tracking-tight font-mono tabular-nums">
              48h
            </div>
            <div className="text-xs text-zinc-400 mt-1 font-medium">
              Emergency Broadcast Sprint Turnaround Available Upon Request
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

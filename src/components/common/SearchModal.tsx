import React, { useState, useEffect, useRef } from 'react';
import { Search, Film, Sparkles, ArrowRight, X } from 'lucide-react';
import { VIDEO_PROJECTS, BRAND_PROJECTS } from '../../data/portfolioData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (category: string, id: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProject,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedVideos = VIDEO_PROJECTS.filter(v => 
    !q || v.title.toLowerCase().includes(q) || v.client.toLowerCase().includes(q) || v.software.some(s => s.toLowerCase().includes(q))
  );

  const matchedBranding = BRAND_PROJECTS.filter(b => 
    !q || b.brandName.toLowerCase().includes(q) || b.tagline.toLowerCase().includes(q) || b.category.toLowerCase().includes(q)
  );

  const totalResults = q ? matchedVideos.length + matchedBranding.length : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-start justify-center pt-20 px-4">
      <div className="relative w-full max-w-2xl bg-[#090a0f] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        
        {/* Search Bar Input */}
        <div className="p-4 border-b border-zinc-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search commercials, reels, DaVinci grades, logotypes, scripts..."
            className="flex-1 bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button onClick={() => setQuery('')} className="text-zinc-500 hover:text-white text-xs cursor-pointer">
              Clear
            </button>
          )}
          <button onClick={onClose} className="p-1 text-zinc-400 hover:text-white rounded cursor-pointer">
            ✕
          </button>
        </div>

        {/* Real-time UI suggestions */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-4">
          
          {/* Quick Categories when no query */}
          {!q && (
            <div>
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-2">
                Suggested Quick Queries
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                {['DaVinci Resolve', '4K Commercial', 'Thuluth Calligraphy', 'Monogram Design', '60fps Social Reels'].map(tag => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2.5 py-1 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-amber-400 rounded-lg border border-zinc-800 transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Videos Section */}
          {matchedVideos.length > 0 && (
            <div>
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5" />
                <span>Pillar 1: Video Editing Projects ({matchedVideos.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedVideos.map(v => (
                  <button
                    key={v.id}
                    onClick={() => {
                      onSelectProject('video', v.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 hover:bg-zinc-900/80 rounded-lg flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {v.title}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {v.client} · {v.category} · {v.duration} · {v.stats.retention} retention
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Branding & Lettering Section */}
          {matchedBranding.length > 0 && (
            <div>
              <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pillar 2: Brand Identity & Lettering ({matchedBranding.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchedBranding.map(b => (
                  <button
                    key={b.id}
                    onClick={() => {
                      onSelectProject('branding', b.id);
                      onClose();
                    }}
                    className="w-full text-left p-2.5 hover:bg-zinc-900/80 rounded-lg flex items-center justify-between group transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-amber-400 transition-colors">
                        {b.title}
                      </div>
                      <div className="text-[11px] text-zinc-400">
                        {b.brandName} · {b.category} · {b.tagline}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-amber-400 transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Empty Search Feedback */}
          {q && totalResults === 0 && (
            <div className="py-8 text-center text-xs text-zinc-400">
              No matching assets found for "{query}". Try searching for "Commercial", "Thuluth", or "Reels".
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-3 bg-zinc-900/50 border-t border-zinc-800 text-[11px] text-zinc-500 flex justify-between font-mono">
          <span>Esc to close</span>
          <span>Zero-latency Static JSON Index</span>
        </div>

      </div>
    </div>
  );
};

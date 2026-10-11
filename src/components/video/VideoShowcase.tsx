import React, { useState } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Sliders, 
  Film, 
  Grid, 
  List, 
  Music, 
  Subtitles, 
  Smartphone, 
  Monitor, 
  Tv, 
  Check, 
  Sparkles, 
  Clock, 
  Eye, 
  TrendingUp,
  Layers
} from 'lucide-react';
import { VIDEO_PROJECTS } from '../../data/portfolioData';
import { VideoProject } from '../../types';
import { playSynthesizedSFX, SFXType } from '../../utils/soundEffects';

interface VideoShowcaseProps {
  onOpenContact: () => void;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ onOpenContact }) => {
  const [activeProject, setActiveProject] = useState<VideoProject>(VIDEO_PROJECTS[0]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [layoutMode, setLayoutMode] = useState<'grid' | 'list'>('grid');

  // Player controls
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [currentTimeSec, setCurrentTimeSec] = useState<number>(14.5);
  const [durationSec] = useState<number>(105);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.85);
  const [streamQuality, setStreamQuality] = useState<'4K' | '1080p' | '720p'>('4K');
  const [showSubtitles, setShowSubtitles] = useState<boolean>(true);
  const [fpsMode, setFpsMode] = useState<'60fps' | '24fps'>('60fps');

  // Responsive device view frame (Fast CSS layouts, zero slow WebGL overhead)
  const [deviceFrame, setDeviceFrame] = useState<'cinema' | 'monitor' | 'phone'>('cinema');

  // Interactive Draggable Before/After Color Grading Slider (0% to 100%)
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  // Foley Soundboard & Lossless toggle
  const [losslessAudio, setLosslessAudio] = useState<boolean>(true);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

  const formatTimecode = (secs: number) => {
    const totalFrames = Math.floor(secs * 24);
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    const f = totalFrames % 24;
    return `00:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}:${f.toString().padStart(2, '0')}`;
  };

  const handleSFX = (type: SFXType, label: string) => {
    playSynthesizedSFX(type, losslessAudio);
    setFeedbackToast(`Triggered SFX: ${label} (${losslessAudio ? 'Lossless 24-bit 96kHz' : 'Compressed 128kbps'})`);
    setTimeout(() => setFeedbackToast(null), 2500);
  };

  const filteredProjects = selectedCategory === 'All'
    ? VIDEO_PROJECTS
    : VIDEO_PROJECTS.filter(p => p.category === selectedCategory);

  const captionLines = [
    { start: 0, end: 12, text: "ENGINEERED FOR THE UNCOMPROMISING." },
    { start: 12, end: 28, text: "ANAMORPHIC GLASS · KODAK 2383 PRINT" },
    { start: 28, end: 50, text: "MAXIMUM AUDIENCE RETENTION BY DESIGN." },
    { start: 50, end: 105, text: "MAAZ BALOCH · POST-PRODUCTION SUITE" },
  ];
  const activeCaption = captionLines.find(c => currentTimeSec >= c.start && currentTimeSec <= c.end)?.text || '';

  return (
    <section id="portfolio" className="py-20 lg:py-28 bg-[#090a0f] border-t border-zinc-800 relative">
      
      {/* Toast Feedback */}
      {feedbackToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12131a] border border-amber-500/80 text-white text-xs px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>{feedbackToast}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              Primary Focus · Core Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              High-Retention Video Editing & Social Content Systems
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Precision commercial pacing, 60fps kinetic visual hooks, Foley sound design, and Arri LogC to Kodak 2383 35mm film color grading.
            </p>
          </div>

          <div className="flex items-center gap-6 bg-zinc-900/60 border border-zinc-800 p-3 rounded-xl text-xs text-zinc-300">
            <div>
              <div className="font-mono text-amber-400 font-bold">{activeProject.stats.retention}</div>
              <div className="text-[11px] text-zinc-500">Avg. Retention</div>
            </div>
            <div className="h-6 w-px bg-zinc-800" />
            <div>
              <div className="font-mono text-white font-bold">{activeProject.stats.views}</div>
              <div className="text-[11px] text-zinc-500">Direct Views</div>
            </div>
            <div className="h-6 w-px bg-zinc-800" />
            <div>
              <div className="font-mono text-white font-bold">{activeProject.stats.ctr}</div>
              <div className="text-[11px] text-zinc-500">Thumbnail CTR</div>
            </div>
          </div>
        </div>

        {/* Master Video Engine (Split Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main Interactive Player & Grading Slider (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-4">
            
            {/* Top Player Toolbar */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Responsive Device Frame Switcher */}
              <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-zinc-800">
                <button
                  onClick={() => setDeviceFrame('cinema')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    deviceFrame === 'cinema' ? 'bg-amber-500/20 text-amber-400 font-medium' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="16:9 Cinema Wide"
                >
                  <Tv className="w-3.5 h-3.5" />
                  <span>DCI Cinema</span>
                </button>
                <button
                  onClick={() => setDeviceFrame('monitor')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    deviceFrame === 'monitor' ? 'bg-amber-500/20 text-amber-400 font-medium' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="Studio Desktop"
                >
                  <Monitor className="w-3.5 h-3.5" />
                  <span>Studio Display</span>
                </button>
                <button
                  onClick={() => setDeviceFrame('phone')}
                  className={`flex items-center gap-1.5 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                    deviceFrame === 'phone' ? 'bg-amber-500/20 text-amber-400 font-medium' : 'text-zinc-400 hover:text-white'
                  }`}
                  title="9:16 Social Reels"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>9:16 Reels</span>
                </button>
              </div>

              {/* Streaming Quality & Captions */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-zinc-800 text-[11px] font-mono">
                  {(['4K', '1080p', '720p'] as const).map(q => (
                    <button
                      key={q}
                      onClick={() => setStreamQuality(q)}
                      className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                        streamQuality === q ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setFpsMode(prev => prev === '60fps' ? '24fps' : '60fps')}
                  className="px-2 py-1 bg-black/50 border border-zinc-800 rounded-lg text-[11px] font-mono text-zinc-300 hover:text-amber-400 cursor-pointer"
                >
                  {fpsMode}
                </button>

                <button
                  onClick={() => setShowSubtitles(!showSubtitles)}
                  className={`p-1.5 rounded-lg border transition-colors cursor-pointer ${
                    showSubtitles ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' : 'bg-black/50 border-zinc-800 text-zinc-500 hover:text-white'
                  }`}
                  title="Toggle Hormozi-style Animated Captions"
                >
                  <Subtitles className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Responsive Video Frame with Draggable Color Grading Split Slider */}
            <div className="relative w-full flex justify-center items-center py-1">
              <div 
                className={`relative overflow-hidden transition-all duration-300 bg-black ${
                  deviceFrame === 'phone' 
                    ? 'w-[320px] aspect-[9/16] rounded-[36px] border-[8px] border-zinc-800 shadow-2xl' 
                    : deviceFrame === 'monitor'
                    ? 'w-full aspect-[16/10] rounded-2xl border-[10px] border-zinc-900 shadow-2xl'
                    : 'w-full aspect-video rounded-xl border-4 border-zinc-800 shadow-2xl'
                }`}
              >
                
                {/* Visual Video Content / Draggable Split Screen */}
                <div className="relative w-full h-full overflow-hidden select-none">
                  
                  {/* Left Side: Color Graded Master Still */}
                  <img
                    src={activeProject.previewStill}
                    alt={activeProject.title}
                    className="absolute inset-0 w-full h-full object-cover filter contrast-[1.14] saturate-[1.28]"
                    referrerPolicy="no-referrer"
                  />

                  {/* Right Side: RAW Log Footage Preview (Clipped by slider position) */}
                  <div 
                    className="absolute inset-0 overflow-hidden"
                    style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
                  >
                    <img
                      src={activeProject.logStill}
                      alt="Raw Log footage"
                      className="absolute inset-0 w-full h-full object-cover filter saturate-[0.5] brightness-[1.18] contrast-[0.75]"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Log Stamp */}
                    <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] font-mono text-zinc-300 border border-zinc-700">
                      RAW Flat Profile
                    </div>
                  </div>

                  {/* Color Graded Stamp */}
                  <div className="absolute top-4 left-4 bg-amber-400 text-zinc-950 font-bold px-2.5 py-1 rounded text-[10px] font-mono">
                    GRADED: Kodak 2383 LUT
                  </div>

                  {/* Draggable Split Slider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-[2px] bg-white cursor-ew-resize z-20 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-zinc-950 flex items-center justify-center shadow-xl border-2 border-zinc-900 text-[10px] font-bold">
                      ⇄
                    </div>
                  </div>

                  {/* Hormozi-style Burned-in Animated Pop Caption */}
                  {showSubtitles && activeCaption && (
                    <div className="absolute bottom-16 left-0 right-0 flex justify-center px-4 pointer-events-none z-20">
                      <div className="bg-black/90 backdrop-blur-sm px-4 py-1.5 rounded-lg border border-amber-500/30 text-center animate-caption-pop">
                        <span className="font-heading font-black text-sm sm:text-base text-yellow-300 tracking-wide uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                          {activeCaption}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Interactive Slider Input Area */}
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={(e) => setSliderPosition(Number(e.target.value))}
                    className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                    aria-label="Color grade comparison slider"
                  />
                </div>

                {/* Custom-Skinned Player Controls Bar */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/85 to-transparent p-3 pt-6 flex flex-col gap-2 z-20">
                  
                  {/* Timeline Scrubber */}
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono text-zinc-400 tabular-nums">
                      {formatTimecode(currentTimeSec)}
                    </span>
                    
                    <div className="relative flex-1 group py-1">
                      <input
                        type="range"
                        min="0"
                        max={durationSec}
                        step="0.04"
                        value={currentTimeSec}
                        onChange={(e) => {
                          const val = Number(e.target.value);
                          setCurrentTimeSec(val);
                          playSynthesizedSFX('film_click', losslessAudio);
                        }}
                        className="w-full h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-amber-400 group-hover:h-2 transition-all"
                      />
                    </div>

                    <span className="text-[11px] font-mono text-zinc-500 tabular-nums">
                      {activeProject.duration}:00
                    </span>
                  </div>

                  {/* Player Buttons Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => {
                          setIsPlaying(!isPlaying);
                          playSynthesizedSFX('film_click', losslessAudio);
                        }}
                        className="p-1.5 bg-amber-400 text-black hover:bg-amber-300 rounded-md transition-colors cursor-pointer"
                        title={isPlaying ? 'Pause' : 'Play'}
                      >
                        {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-black" />}
                      </button>

                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                      </button>

                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={(e) => {
                          setVolume(Number(e.target.value));
                          setIsMuted(false);
                        }}
                        className="w-16 h-1 bg-zinc-700 rounded appearance-none cursor-pointer accent-amber-400"
                        aria-label="Volume slider"
                      />

                      <button
                        onClick={() => setCurrentTimeSec(prev => Math.max(0, prev - 1/24))}
                        className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded cursor-pointer"
                        title="Step Back 1 Frame"
                      >
                        -1F
                      </button>
                      <button
                        onClick={() => setCurrentTimeSec(prev => Math.min(durationSec, prev + 1/24))}
                        className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded cursor-pointer"
                        title="Step Forward 1 Frame"
                      >
                        +1F
                      </button>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-zinc-400 font-mono">
                      <span>ProRes 4444</span>
                      <button
                        onClick={() => {
                          if (!document.fullscreenElement) {
                            document.documentElement.requestFullscreen?.();
                          } else {
                            document.exitFullscreen?.();
                          }
                        }}
                        className="text-zinc-400 hover:text-white cursor-pointer"
                        title="Fullscreen Toggle"
                      >
                        <Maximize className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Interactive Audio Soundboard & Lossless Toggle */}
            <div className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
                <div className="flex items-center gap-2">
                  <Music className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-semibold text-white">Foley Sound Design Soundboard</span>
                  <span className="text-[11px] text-zinc-500">· Real-time Web Audio API synthesis</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-zinc-400">Audio Preview:</span>
                  <button
                    onClick={() => {
                      setLosslessAudio(!losslessAudio);
                      handleSFX('film_click', losslessAudio ? '128kbps Standard' : 'Lossless 24-bit 96kHz');
                    }}
                    className={`px-2.5 py-1 text-[11px] font-mono rounded-md border transition-colors cursor-pointer flex items-center gap-1.5 ${
                      losslessAudio 
                        ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-400 font-semibold' 
                        : 'bg-zinc-800 border-zinc-700 text-zinc-400'
                    }`}
                  >
                    <span>{losslessAudio ? 'Lossless (24-bit / 96kHz)' : 'Compressed (128kbps Web)'}</span>
                  </button>
                </div>
              </div>

              {/* Soundboard Buttons */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 mt-3">
                <button
                  onClick={() => handleSFX('whoosh', 'Cinematic Whoosh')}
                  className="px-3 py-2 bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white transition-all text-left group active:scale-95 cursor-pointer"
                >
                  <div className="text-[10px] text-zinc-500 font-mono">01 · Transition</div>
                  <div className="font-semibold mt-0.5 group-hover:text-amber-400">Whoosh Trans</div>
                </button>

                <button
                  onClick={() => handleSFX('sub_drop', '808 Sub Drop')}
                  className="px-3 py-2 bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white transition-all text-left group active:scale-95 cursor-pointer"
                >
                  <div className="text-[10px] text-zinc-500 font-mono">02 · Low End</div>
                  <div className="font-semibold mt-0.5 group-hover:text-amber-400">Sub Bass Drop</div>
                </button>

                <button
                  onClick={() => handleSFX('riser', 'Film Riser')}
                  className="px-3 py-2 bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white transition-all text-left group active:scale-95 cursor-pointer"
                >
                  <div className="text-[10px] text-zinc-500 font-mono">03 · Tension</div>
                  <div className="font-semibold mt-0.5 group-hover:text-amber-400">Cinema Riser</div>
                </button>

                <button
                  onClick={() => handleSFX('impact', 'Downbeat Impact')}
                  className="px-3 py-2 bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white transition-all text-left group active:scale-95 cursor-pointer"
                >
                  <div className="text-[10px] text-zinc-500 font-mono">04 · Accent</div>
                  <div className="font-semibold mt-0.5 group-hover:text-amber-400">Heavy Impact</div>
                </button>

                <button
                  onClick={() => handleSFX('film_click', 'Splicer Cut')}
                  className="px-3 py-2 bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white transition-all text-left group active:scale-95 cursor-pointer"
                >
                  <div className="text-[10px] text-zinc-500 font-mono">05 · Cutdown</div>
                  <div className="font-semibold mt-0.5 group-hover:text-amber-400">Splicer Click</div>
                </button>

                <button
                  onClick={() => handleSFX('cassette_click', 'Hardware Solos')}
                  className="px-3 py-2 bg-black/60 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-lg text-xs text-zinc-300 hover:text-white transition-all text-left group active:scale-95 cursor-pointer"
                >
                  <div className="text-[10px] text-zinc-500 font-mono">06 · Analog</div>
                  <div className="font-semibold mt-0.5 group-hover:text-amber-400">Deck Switch</div>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Project Pacing & Editorial Strategy (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* Active Project Overview Card */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-5 space-y-4">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Active Timeline Spotlight
                </span>
                <span className="text-xs text-zinc-400 font-mono">{activeProject.category}</span>
              </div>

              <div>
                <h3 className="text-base font-bold text-white">{activeProject.title}</h3>
                <div className="text-xs text-zinc-400 mt-1">Client: {activeProject.client}</div>
              </div>

              <p className="text-xs text-zinc-300 leading-relaxed">
                {activeProject.description}
              </p>

              {/* Technical Specifications */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs border-t border-zinc-800">
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-mono">Primary NLE</div>
                  <div className="font-medium text-zinc-200 mt-0.5">{activeProject.software[0]}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-mono">Master Render</div>
                  <div className="font-medium text-zinc-200 mt-0.5">{activeProject.exportFormat}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-mono">Retention Metric</div>
                  <div className="font-bold text-amber-400 mt-0.5">{activeProject.stats.retention}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase font-mono">Audience Views</div>
                  <div className="font-bold text-white mt-0.5">{activeProject.stats.views}</div>
                </div>
              </div>

              <button
                onClick={onOpenContact}
                className="w-full py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-semibold text-xs rounded-lg transition-all shadow cursor-pointer text-center"
              >
                Inquire for Similar Campaign
              </button>
            </div>

            {/* Retention Optimization Process Card */}
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-xl p-5 text-xs space-y-3">
              <div className="flex items-center gap-2 text-white font-semibold">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Audience Retention Engineering</span>
              </div>
              <ul className="space-y-2 text-zinc-400 text-[11px] leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">01.</span>
                  <span><strong>The 3-Second Hook:</strong> Pattern-interrupt velocity to suppress drop-offs.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">02.</span>
                  <span><strong>2.4s Attention Resets:</strong> Micro-cuts, sound accents, and B-roll dynamic shifts.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-mono font-bold">03.</span>
                  <span><strong>Closed Caption Burn-In:</strong> 85% mobile audio-off engagement lift.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Portfolio Gallery Section with Clean Grid-to-List Switcher (No infinite scroll trap) */}
        <div className="pt-8 border-t border-zinc-800">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 overflow-x-auto">
              {['All', 'Commercial', 'YouTube', 'Cinematic', 'Reels'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                    selectedCategory === cat 
                      ? 'bg-amber-400 text-zinc-950 font-semibold shadow' 
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Static Grid-to-List Layout Switcher */}
            <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-lg border border-zinc-800">
              <button
                onClick={() => setLayoutMode('grid')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  layoutMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="Grid Layout"
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setLayoutMode('list')}
                className={`p-1.5 rounded transition-colors cursor-pointer ${
                  layoutMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'
                }`}
                title="List Layout"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

          </div>

          {/* Project Items Rendered: Grid or List */}
          {layoutMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProjects.map(proj => (
                <div
                  key={proj.id}
                  onClick={() => {
                    setActiveProject(proj);
                    setCurrentTimeSec(12);
                    const el = document.getElementById('portfolio');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group bg-zinc-950/80 border rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 ${
                    activeProject.id === proj.id ? 'border-amber-400 ring-1 ring-amber-400/40 shadow-xl' : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {/* Hover-to-Play Video Preview Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-black">
                    <img
                      src={proj.previewStill}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-50 transition-opacity" />
                    
                    <div className="absolute bottom-2 left-2 text-[10px] font-mono text-white/90 bg-black/60 px-1.5 py-0.5 rounded">
                      {proj.duration}
                    </div>

                    <div className="absolute top-2 right-2 text-[10px] font-mono text-amber-400 bg-black/70 px-1.5 py-0.5 rounded">
                      {proj.stats.retention} Retention
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="text-[11px] text-zinc-500 uppercase tracking-wider font-semibold">
                      {proj.client} · {proj.category}
                    </div>
                    <div className="text-sm font-semibold text-white mt-1 group-hover:text-amber-400 transition-colors line-clamp-1">
                      {proj.title}
                    </div>
                    <p className="text-xs text-zinc-400 mt-1.5 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                    
                    <div className="mt-3 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                      <span>{proj.software[0]}</span>
                      <span className="text-amber-400 group-hover:underline">Load in Suite →</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-xl overflow-hidden bg-zinc-950/60">
              {filteredProjects.map(proj => (
                <div
                  key={proj.id}
                  onClick={() => {
                    setActiveProject(proj);
                    setCurrentTimeSec(12);
                    const el = document.getElementById('portfolio');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-zinc-900/50 transition-colors ${
                    activeProject.id === proj.id ? 'bg-amber-500/5' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <img src={proj.previewStill} alt={proj.title} className="w-20 h-12 object-cover rounded-md" />
                    <div>
                      <div className="text-sm font-semibold text-white hover:text-amber-400">
                        {proj.title}
                      </div>
                      <div className="text-xs text-zinc-400 mt-0.5">
                        {proj.client} · {proj.category} · {proj.duration}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-xs text-zinc-400 font-mono">
                    <div>
                      <span className="text-zinc-500">Views: </span>
                      <span className="text-white">{proj.stats.views}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500">Retention: </span>
                      <span className="text-amber-400">{proj.stats.retention}</span>
                    </div>
                    <span className="text-amber-400">Select →</span>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

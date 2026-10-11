import React, { useState } from 'react';
import { 
  Sparkles, 
  PenTool, 
  Copy, 
  Check, 
  Sun, 
  Moon, 
  Download, 
  Sliders, 
  Shapes, 
  Type, 
  Palette, 
  RotateCcw, 
  Play, 
  Eye, 
  ArrowRight
} from 'lucide-react';
import { BRAND_PROJECTS, ASSET_PATHS } from '../../data/portfolioData';
import { BrandIdentityProject } from '../../types';

interface BrandDesignStudioProps {
  onOpenContact: () => void;
}

export const BrandDesignStudio: React.FC<BrandDesignStudioProps> = ({ onOpenContact }) => {
  const [activeProject, setActiveProject] = useState<BrandIdentityProject>(BRAND_PROJECTS[0]);
  
  // Contrast mode (Dark vs Light canvas test)
  const [contrastMode, setContrastMode] = useState<'dark' | 'light'>('dark');

  // Construction Step
  const [constructionStep, setConstructionStep] = useState<number>(3); // 1 = Skeleton Grid, 2 = Boolean Curves, 3 = Polished Monogram
  const [showGoldenRatioGrid, setShowGoldenRatioGrid] = useState<boolean>(true);

  // Hex copy state
  const [copiedHex, setCopiedHex] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Interactive Live Text Type Tester State (Calligraphy & Lettering)
  const [customText, setCustomText] = useState<string>('Maaz Baloch');
  const [selectedScript, setSelectedScript] = useState<'thuluth' | 'diwani' | 'gothic' | 'monoline'>('thuluth');
  const [selectedInkColor, setSelectedInkColor] = useState<string>('#D4AF37');
  const [fontSize, setFontSize] = useState<number>(54);
  const [variableWeight, setVariableWeight] = useState<number>(600);
  const [variableSlant, setVariableSlant] = useState<number>(0);
  const [isTracingPlaying, setIsTracingPlaying] = useState<boolean>(true);

  // Monogram Generator
  const [monogramLetters, setMonogramLetters] = useState<{ first: string; second: string }>({ first: 'M', second: 'B' });

  const scriptStyles = {
    thuluth: {
      name: 'Modern Thuluth Classical',
      fontClass: 'font-display',
      letterSpacing: '0.04em',
      sampleQuote: 'SACRED PROPORTIONS IN ARCHITECTURAL MOTION',
    },
    diwani: {
      name: 'Kinetic Diwani Flow',
      fontClass: 'italic font-display',
      letterSpacing: '0.08em',
      sampleQuote: 'AURA FLUIDITY ACROSS CANVASES',
    },
    gothic: {
      name: 'Contemporary Blackletter',
      fontClass: 'font-heading font-black',
      letterSpacing: '0.12em',
      sampleQuote: 'CHISELED GEOMETRIC NIB PROFILE',
    },
    monoline: {
      name: 'Architectural Monoline',
      fontClass: 'font-mono font-medium',
      letterSpacing: '0.15em',
      sampleQuote: 'MINIMAL STRUCTURAL LETTERFORMS',
    },
  };

  const inkSwatches = [
    { name: '24K Gold Leaf', hex: '#D4AF37' },
    { name: 'Traditional Sumi Black', hex: '#111215' },
    { name: 'Imperial Crimson', hex: '#991B1B' },
    { name: 'Malachite Emerald', hex: '#065F46' },
    { name: 'Sky Cerulean', hex: '#0284C7' },
  ];

  const handleCopyHex = (hex: string, label: string) => {
    navigator.clipboard?.writeText(hex);
    setCopiedHex(hex);
    setToastMessage(`Copied ${label} (${hex}) to clipboard!`);
    setTimeout(() => {
      setCopiedHex(null);
      setToastMessage(null);
    }, 2500);
  };

  const handleDownloadBrandKit = () => {
    const text = `Brand Identity Spec Sheet: ${activeProject.brandName}
Designer: Muhammad Maaz Yousaf Khan (Maaz Baloch)
Category: ${activeProject.category}
Geometry: ${activeProject.geometryBreakdown.join(', ')}
Typography: ${activeProject.fontPrimary} & ${activeProject.fontSecondary}
Color Hex Tokens: Primary ${activeProject.primaryColor}, Secondary ${activeProject.secondaryColor}, Accent ${activeProject.accentColor}`;
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${activeProject.brandName.replace(/\s+/g, '_')}_Brand_Guidelines.txt`;
    a.click();

    setToastMessage(`Downloaded ${activeProject.brandName} Brand Package!`);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#07080c] border-t border-zinc-800 relative">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#12131a] border border-amber-500/80 text-white text-xs px-4 py-3 rounded-lg shadow-2xl flex items-center gap-2">
          <Check className="w-4 h-4 text-amber-400" />
          <span>{toastMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2">
              Secondary Design Focus · Brand Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Brand Identity Design, Logotypes & Creative Lettering
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
              Merging golden ratio geometry with expressive Arabic & Latin calligraphy. Bespoke monograms, scalable Retina vector systems, and high-contrast color palettes.
            </p>
          </div>

          <div className="flex items-center gap-2 bg-zinc-900/80 p-1 rounded-xl border border-zinc-800">
            {BRAND_PROJECTS.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveProject(p)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeProject.id === p.id 
                    ? 'bg-amber-400 text-zinc-950 font-semibold shadow' 
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                {p.brandName.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* WORKSPACE MODULE 1: INTERACTIVE LIVE TEXT TYPE TESTER (Calligraphy & Lettering Lab) */}
        <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 lg:p-8 mb-12 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
            <div className="flex items-center gap-2.5">
              <PenTool className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="text-lg font-bold text-white">Interactive Live Text Type Tester</h3>
                <div className="text-xs text-zinc-400 font-mono">
                  Custom Lettering Scripts & Real-Time Variable Typography Engine
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-zinc-400">Ink Swatch:</span>
              <div className="flex items-center gap-1.5">
                {inkSwatches.map(swatch => (
                  <button
                    key={swatch.hex}
                    onClick={() => setSelectedInkColor(swatch.hex)}
                    className={`w-6 h-6 rounded-full border-2 transition-transform active:scale-95 cursor-pointer ${
                      selectedInkColor === swatch.hex ? 'scale-125 border-white shadow' : 'border-zinc-700'
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                    title={swatch.name}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Live Canvas Area */}
          <div className="relative my-6 aspect-[16/8] sm:aspect-[16/7] bg-[#0c0d12] border border-zinc-800 rounded-xl overflow-hidden flex flex-col justify-between p-6 luxury-noise group">
            
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-20" style={{
              backgroundImage: 'linear-gradient(to right, rgba(212, 175, 55, 0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 175, 55, 0.25) 1px, transparent 1px)',
              backgroundSize: '36px 36px',
            }} />

            {/* SVG Live Stroke Write-On Animation */}
            <div className="relative z-10 w-full max-w-md mx-auto mb-2">
              <svg viewBox="0 0 500 100" className="w-full h-16 overflow-visible">
                <path
                  d="M 20,70 Q 90,20 180,50 T 340,40 Q 420,15 480,60"
                  fill="none"
                  stroke={selectedInkColor}
                  strokeWidth="14"
                  strokeLinecap="round"
                  className={isTracingPlaying ? 'animate-calligraphy-stroke' : ''}
                  style={{
                    filter: `drop-shadow(0px 4px 12px ${selectedInkColor}40)`,
                  }}
                />
              </svg>
            </div>

            {/* Rendered Live Custom Typography */}
            <div 
              style={{
                fontSize: `${fontSize}px`,
                color: selectedInkColor,
                fontWeight: variableWeight,
                transform: `skewX(${variableSlant}deg)`,
                letterSpacing: scriptStyles[selectedScript].letterSpacing,
                textShadow: `0 8px 24px ${selectedInkColor}33`,
              }}
              className={`${scriptStyles[selectedScript].fontClass} transition-all duration-75 select-none leading-none text-center my-auto`}
            >
              {customText || 'Maaz Baloch'}
            </div>

            {/* Canvas Footer */}
            <div className="relative z-10 flex items-center justify-between text-xs pt-3 border-t border-zinc-800/80 font-mono text-zinc-400">
              <div className="flex items-center gap-2">
                <span>Stroke Animation:</span>
                <button
                  onClick={() => setIsTracingPlaying(!isTracingPlaying)}
                  className="p-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded cursor-pointer"
                  title={isTracingPlaying ? 'Pause Stroke' : 'Replay Stroke'}
                >
                  {isTracingPlaying ? <RotateCcw className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>

              <span>Script: {scriptStyles[selectedScript].name}</span>
            </div>
          </div>

          {/* Type Tester Controls Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Custom Input (4 Cols) */}
            <div className="md:col-span-4">
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Type Custom Name or Monogram:
              </label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type name, word, or brand..."
                maxLength={32}
                className="w-full bg-black/60 border border-zinc-700 rounded-lg px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400 font-medium"
              />
            </div>

            {/* Script Selection (4 Cols) */}
            <div className="md:col-span-4 grid grid-cols-2 gap-2">
              {(Object.keys(scriptStyles) as Array<keyof typeof scriptStyles>).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedScript(key)}
                  className={`p-2 rounded-lg border text-left transition-colors cursor-pointer ${
                    selectedScript === key
                      ? 'bg-amber-500/10 border-amber-500 text-white font-semibold'
                      : 'bg-black/40 border-zinc-800 text-zinc-400 hover:text-white'
                  }`}
                >
                  <div className="text-xs truncate">{scriptStyles[key].name.split(' ')[0]}</div>
                  <div className="text-[10px] text-zinc-500 font-mono truncate">{key}</div>
                </button>
              ))}
            </div>

            {/* Variable Sliders (4 Cols) */}
            <div className="md:col-span-4 space-y-2">
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Stroke Size ({fontSize}px)</span>
                <span>Slant ({variableSlant}°)</span>
              </div>
              <div className="flex gap-2">
                <input
                  type="range"
                  min="32"
                  max="76"
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-1/2 h-1 bg-zinc-700 rounded accent-amber-400 cursor-pointer"
                />
                <input
                  type="range"
                  min="-20"
                  max="20"
                  value={variableSlant}
                  onChange={(e) => setVariableSlant(Number(e.target.value))}
                  className="w-1/2 h-1 bg-zinc-700 rounded accent-amber-400 cursor-pointer"
                />
              </div>
            </div>

          </div>
        </div>

        {/* WORKSPACE MODULE 2: LOGOTYPE GEOMETRY & BRANDING SYSTEM (Split Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Logo Construction Canvas (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col gap-5">
            
            {/* Toolbar */}
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
              
              {/* Dark / Light Contrast Mode Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">Contrast Testing:</span>
                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-zinc-800">
                  <button
                    onClick={() => setContrastMode('dark')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      contrastMode === 'dark' ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-amber-400" />
                    <span>Dark (#090A0F)</span>
                  </button>
                  <button
                    onClick={() => setContrastMode('light')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      contrastMode === 'light' ? 'bg-white text-zinc-950 font-medium' : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>Light (#FAFAFA)</span>
                  </button>
                </div>
              </div>

              {/* Geometry Construction Step Switcher */}
              <div className="flex items-center gap-2">
                <span className="text-zinc-400">Geometry Stage:</span>
                <div className="flex items-center gap-1 bg-black/50 p-1 rounded-lg border border-zinc-800 font-mono text-[11px]">
                  {[1, 2, 3].map(step => (
                    <button
                      key={step}
                      onClick={() => setConstructionStep(step)}
                      className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                        constructionStep === step ? 'bg-amber-400 text-zinc-950 font-bold' : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                      title={step === 1 ? 'Gridlines' : step === 2 ? 'Boolean Intersections' : 'Master Monogram'}
                    >
                      Step 0{step}
                    </button>
                  ))}
                </div>
              </div>

              {/* Golden Ratio Gridlines toggle */}
              <button
                onClick={() => setShowGoldenRatioGrid(!showGoldenRatioGrid)}
                className={`px-2 py-1 rounded text-[11px] font-mono border transition-colors cursor-pointer ${
                  showGoldenRatioGrid ? 'bg-amber-500/20 border-amber-500/40 text-amber-400' : 'bg-black/50 border-zinc-800 text-zinc-500'
                }`}
              >
                Golden Grid ({showGoldenRatioGrid ? 'ON' : 'OFF'})
              </button>
            </div>

            {/* Vector Mark Canvas */}
            <div 
              className={`relative w-full aspect-[16/10] rounded-2xl overflow-hidden border transition-all duration-300 flex items-center justify-center p-8 shadow-2xl ${
                contrastMode === 'dark' 
                  ? 'bg-[#090a0f] border-zinc-800 text-white' 
                  : 'bg-[#fafafa] border-zinc-300 text-zinc-900 shadow-zinc-200'
              }`}
            >
              
              {/* Golden Ratio Circular Grid Overlay */}
              {showGoldenRatioGrid && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-amber-500/20" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50%" cy="50%" r="200" fill="none" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r="124" fill="none" strokeWidth="1" strokeDasharray="3 3" />
                  <circle cx="50%" cy="50%" r="76" fill="none" strokeWidth="1" strokeDasharray="3 3" />
                  <line x1="0" y1="0" x2="100%" y2="100%" strokeWidth="0.8" strokeDasharray="4 4" />
                  <line x1="100%" y1="0" x2="0" y2="100%" strokeWidth="0.8" strokeDasharray="4 4" />
                </svg>
              )}

              {/* Master Monogram Vector */}
              <div className="relative z-10 flex flex-col items-center">
                <svg viewBox="0 0 320 240" className="w-72 sm:w-80 h-auto overflow-visible select-none drop-shadow-xl">
                  <defs>
                    <linearGradient id="goldMonogram" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#F5D061" />
                      <stop offset="50%" stopColor="#D4AF37" />
                      <stop offset="100%" stopColor="#AA771C" />
                    </linearGradient>
                  </defs>

                  {/* Step 1: Construction Skeleton */}
                  {constructionStep === 1 && (
                    <g stroke="#38BDF8" strokeWidth="1.5" strokeDasharray="4 2" fill="none">
                      <rect x="40" y="40" width="240" height="160" />
                      <line x1="40" y1="200" x2="120" y2="40" />
                      <line x1="120" y1="40" x2="160" y2="120" />
                      <line x1="160" y1="120" x2="200" y2="40" />
                      <line x1="200" y1="40" x2="280" y2="200" />
                    </g>
                  )}

                  {/* Step 2: Boolean Intersections */}
                  {constructionStep === 2 && (
                    <g stroke="#F59E0B" strokeWidth="4" fill="none" opacity="0.8">
                      <polyline points="40,200 40,60 100,160 160,60 160,200" strokeWidth="6" />
                      <polyline points="160,200 220,60 280,200" strokeWidth="6" />
                    </g>
                  )}

                  {/* Step 3: Polished Monogram Vector */}
                  <g>
                    <path
                      d="M 50,195 L 50,55 L 75,55 L 125,145 L 175,55 L 200,55 L 200,195 L 175,195 L 175,100 L 135,175 L 115,175 L 75,100 L 75,195 Z"
                      fill={contrastMode === 'dark' ? "url(#goldMonogram)" : "#1E293B"}
                      stroke={contrastMode === 'dark' ? "#D4AF37" : "#0F172A"}
                      strokeWidth="2"
                    />
                    <path
                      d="M 180,195 L 230,60 L 255,60 L 290,195 L 265,195 L 255,160 L 210,160 L 210,195 Z M 215,140 L 250,140 L 235,90 Z"
                      fill={contrastMode === 'dark' ? "url(#goldMonogram)" : "#1E293B"}
                      stroke={contrastMode === 'dark' ? "#D4AF37" : "#0F172A"}
                      strokeWidth="2"
                    />
                  </g>
                </svg>

                <div className="mt-4 text-center">
                  <div className={`text-base font-bold tracking-widest uppercase font-heading ${
                    contrastMode === 'dark' ? 'text-white' : 'text-zinc-950'
                  }`}>
                    {activeProject.brandName}
                  </div>
                  <div className={`text-xs tracking-wider uppercase mt-1 font-mono ${
                    contrastMode === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    {activeProject.tagline}
                  </div>
                </div>
              </div>

              <div className={`absolute bottom-3 right-4 text-[11px] font-mono ${
                contrastMode === 'dark' ? 'text-zinc-500' : 'text-zinc-400'
              }`}>
                Retina SVG Vector Master · 0% Raster Artifacts
              </div>
            </div>

            {/* Real-World Physical Embossing Mockup Preview */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl overflow-hidden p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs font-semibold text-white flex items-center gap-2">
                  <Eye className="w-4 h-4 text-amber-400" />
                  <span>Physical Embossing & Stationer Deployment</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-400">Gold Foil on 600gsm Cotton Stock</span>
              </div>

              <div className="relative aspect-[16/9] rounded-lg overflow-hidden border border-zinc-800">
                <img
                  src={activeProject.mockupImage}
                  alt={activeProject.brandName}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{activeProject.brandName}</div>
                    <div className="text-[11px] text-zinc-300 mt-0.5">{activeProject.vectorSpecs}</div>
                  </div>
                  <span className="font-mono text-amber-400 text-[11px] bg-black/60 px-2 py-0.5 rounded">
                    Laser CNC Matched
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hex Copy Boards, Typography & Generator (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            
            {/* One-Click Hex Code Copy Boards */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-xs">
              <div className="flex items-center justify-between mb-3 border-b border-zinc-800 pb-2">
                <span className="font-semibold text-white flex items-center gap-1.5">
                  <Copy className="w-3.5 h-3.5 text-amber-400" />
                  <span>One-Click Hex Color Palette</span>
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">Click to copy</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Primary Accent', hex: activeProject.primaryColor },
                  { name: 'Secondary Base', hex: activeProject.secondaryColor },
                  { name: 'Highlight Ivory', hex: activeProject.accentColor },
                ].map(c => (
                  <button
                    key={c.name}
                    onClick={() => handleCopyHex(c.hex, c.name)}
                    className="w-full flex items-center justify-between p-2 bg-black/40 hover:bg-black/70 border border-zinc-800 rounded-lg transition-colors group cursor-pointer text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <div 
                        className="w-5 h-5 rounded border border-zinc-700 shadow-sm"
                        style={{ backgroundColor: c.hex }}
                      />
                      <div>
                        <div className="text-zinc-200 font-medium group-hover:text-amber-400 transition-colors">
                          {c.name}
                        </div>
                        <div className="text-[10px] text-zinc-500 font-mono">{c.hex}</div>
                      </div>
                    </div>

                    <div className="p-1 text-zinc-400 group-hover:text-white">
                      {copiedHex === c.hex ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Typography Pairing Specs */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-xs space-y-3">
              <div className="font-semibold text-white border-b border-zinc-800 pb-2 flex items-center gap-2">
                <Type className="w-4 h-4 text-amber-400" />
                <span>Typography Pairing Architecture</span>
              </div>

              <div className="p-2.5 bg-black/40 rounded-lg border border-zinc-800">
                <div className="text-[10px] text-amber-400 font-mono uppercase">Primary Headline</div>
                <div className="text-sm font-semibold text-white mt-0.5">{activeProject.fontPrimary}</div>
              </div>

              <div className="p-2.5 bg-black/40 rounded-lg border border-zinc-800">
                <div className="text-[10px] text-zinc-400 font-mono uppercase">Secondary Body</div>
                <div className="text-sm font-medium text-zinc-200 mt-0.5">{activeProject.fontSecondary}</div>
              </div>
            </div>

            {/* Modular Monogram Generator */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 text-xs">
              <div className="font-semibold text-white mb-2 flex items-center gap-1.5">
                <Shapes className="w-3.5 h-3.5 text-amber-400" />
                <span>Monogram Generator Framework</span>
              </div>
              <p className="text-[11px] text-zinc-400 mb-3">
                Combine initials into an intersecting monogram mark:
              </p>

              <div className="flex items-center gap-2 mb-3">
                <input
                  type="text"
                  maxLength={1}
                  value={monogramLetters.first}
                  onChange={(e) => setMonogramLetters(prev => ({ ...prev, first: e.target.value.toUpperCase() }))}
                  className="w-12 h-10 text-center font-bold font-heading bg-black/60 border border-zinc-700 rounded-lg text-white text-base focus:border-amber-400 uppercase"
                />
                <span className="text-zinc-500 font-bold">+</span>
                <input
                  type="text"
                  maxLength={1}
                  value={monogramLetters.second}
                  onChange={(e) => setMonogramLetters(prev => ({ ...prev, second: e.target.value.toUpperCase() }))}
                  className="w-12 h-10 text-center font-bold font-heading bg-black/60 border border-zinc-700 rounded-lg text-white text-base focus:border-amber-400 uppercase"
                />

                <div className="flex-1 h-10 bg-black/80 rounded-lg border border-zinc-800 flex items-center justify-center font-heading font-black text-amber-400 tracking-tighter text-lg shadow-inner">
                  {monogramLetters.first}{monogramLetters.second}
                </div>
              </div>
            </div>

            {/* Download Brand Package Button */}
            <button
              onClick={handleDownloadBrandKit}
              className="w-full py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-semibold text-xs rounded-lg transition-colors border border-zinc-700 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Brand Package (.txt)</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

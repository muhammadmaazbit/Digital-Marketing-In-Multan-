import { VideoProject, BrandIdentityProject } from '../types';

import heroDirectorImg from '../assets/images/hero_director_suite_1791634630577.jpg';
import videoColorgradeImg from '../assets/images/video_colorgrade_still_1791634646144.jpg';
import calligraphyInkImg from '../assets/images/calligraphy_ink_macro_1791634663298.jpg';
import logoBrandingImg from '../assets/images/logo_branding_mockup_1791634675021.jpg';

export const ASSET_PATHS = {
  heroDirector: heroDirectorImg,
  videoColorgrade: videoColorgradeImg,
  calligraphyInk: calligraphyInkImg,
  logoBranding: logoBrandingImg,
};

export const STUDIO_META = {
  name: 'Maaz Baloch',
  officialName: 'Muhammad Maaz Yousaf Khan',
  title: 'Premium Creative Media & Post-Production Studio',
  headline: 'High-Retention Video Editing & Strategic Brand Identity Architecture',
  phone: '+923177879175',
  whatsappUrl: 'https://wa.me/923177879175',
  email: '92muhammadmaaz811khan@gmail.com',
  location: 'Shalimaar Colony, Multan, Pakistan (Postal Code: 60600)',
  instagram: '@maaz_digital_strategy',
  instagramUrl: 'https://instagram.com/maaz_digital_strategy',
  facebook: '@maazdigitalstrategy',
  facebookUrl: 'https://facebook.com/maazdigitalstrategy',
};

export const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: 'vid-apex-hypercar',
    title: 'Apex GT — Anamorphic Night Commercial',
    client: 'Apex Velocity Automotives',
    category: 'Commercial',
    duration: '01:45',
    year: '2026',
    stats: {
      views: '4.8M+',
      retention: '78.2%',
      ctr: '14.6%',
    },
    software: ['DaVinci Resolve Studio', 'Premiere Pro', 'After Effects'],
    description: 'Precision motion pacing with anamorphic lens simulation, custom Foley sound design, and Arri LogC to custom Kodak 2383 35mm film emulation.',
    previewStill: videoColorgradeImg,
    logStill: videoColorgradeImg,
    aspectRatio: '16:9',
    renderTime: '42m 18s (Apple ProRes 4444 XQ)',
    exportFormat: 'DCI 4K (3840x2160) @ 24.000 fps',
    sampleTimecodes: [
      {
        time: '00:00:14:12',
        author: 'Creative Director',
        comment: 'The whip pan cut on wet asphalt reflection matches the rev audio transient perfectly.',
        timestampSec: 14.5,
      },
      {
        time: '00:00:38:04',
        author: 'Lead Producer',
        comment: 'Grade contrast in neon storefronts has zero clipping. Film halation is pristine.',
        timestampSec: 38.15,
      },
    ],
  },
  {
    id: 'vid-viral-hooks',
    title: 'Omni SaaS — High-Retention Acquisition System',
    client: 'Omni Dynamics Inc.',
    category: 'Reels',
    duration: '00:58',
    year: '2026',
    stats: {
      views: '9.4M+',
      retention: '91.8%',
      ctr: '19.4%',
    },
    software: ['After Effects', 'Premiere Pro', 'CapCut Studio Pro'],
    description: 'Dynamic kinetic typography, Hormozi-style subtitle pops, fast sound-effects sync, and frame-by-frame attention resets every 2.4 seconds.',
    previewStill: videoColorgradeImg,
    logStill: videoColorgradeImg,
    aspectRatio: '9:16',
    renderTime: '08m 42s (H.265 Main 10)',
    exportFormat: 'FHD (1080x1920) @ 60.000 fps',
  },
  {
    id: 'vid-creator-doc',
    title: 'The Modern Artisan — Cinematic Documentary Series',
    client: 'Studio Horizon Global',
    category: 'Cinematic',
    duration: '18:24',
    year: '2025',
    stats: {
      views: '2.1M+',
      retention: '64.5%',
      ctr: '11.8%',
    },
    software: ['DaVinci Resolve Studio', 'FabFilter Suite', 'Premiere Pro'],
    description: 'Long-form narrative pacing, multi-track dialog balancing with iZotope RX noise isolation, and naturalistic filmic color grading.',
    previewStill: heroDirectorImg,
    logStill: heroDirectorImg,
    aspectRatio: '16:9',
    renderTime: '1h 14m (ProRes 422 HQ)',
    exportFormat: 'UHD 4K (3840x2160) @ 23.976 fps',
  },
  {
    id: 'vid-tech-breakdown',
    title: 'Quantum Compute — YouTube Flagship Explainer',
    client: 'Tech Frontier Labs',
    category: 'YouTube',
    duration: '12:40',
    year: '2025',
    stats: {
      views: '3.6M+',
      retention: '68.9%',
      ctr: '13.2%',
    },
    software: ['Blender 3D', 'After Effects', 'Premiere Pro'],
    description: '3D animated motion graphic explanations mixed with A-roll talking head grading and rhythmic B-roll cutdowns.',
    previewStill: heroDirectorImg,
    logStill: heroDirectorImg,
    aspectRatio: '16:9',
    renderTime: '45m 10s',
    exportFormat: 'UHD 4K @ 59.940 fps',
  },
];

export const BRAND_PROJECTS: BrandIdentityProject[] = [
  {
    id: 'brand-mla-architects',
    title: 'Moderne Lex Architects — Geometric Monogram System',
    brandName: 'Moderne Lex Architects (MLA)',
    category: 'Corporate Identity',
    tagline: 'Precision Inhabited.',
    year: '2025',
    description: 'A bespoke geometric monogram fusing the letters M, L, and A into an architectural structural isometric grid. Crafted for physical embossing, debossed stone signage, and digital retina typography.',
    mockupImage: logoBrandingImg,
    primaryColor: '#D4AF37', // Metallic Gold
    secondaryColor: '#12131A', // Carbon Black
    accentColor: '#F4E8C1', // Pale Ivory
    fontPrimary: 'Cinzel Serif & Outfit Sans',
    fontSecondary: 'Plus Jakarta Sans Pro',
    geometryBreakdown: ['Equilateral Golden Triangle', '30° Isometric Grid', 'Golden Ratio Rectangle (1.618)'],
    vectorSpecs: 'Retina SVG Vector Master · 0.25pt Hairline Tolerance',
  },
  {
    id: 'brand-calligraphy-mizan',
    title: 'Mizan Equilibrium — Modernized Sacred Thuluth Lettering',
    brandName: 'Mizan Atelier',
    category: 'Calligraphy & Lettering',
    tagline: 'Sacred Proportions in Contemporary Motion.',
    year: '2026',
    description: 'Exploration of sacred geometry and proportion in classical Arabic lettering, infused with modern architectural line weights and negative space tensions.',
    mockupImage: calligraphyInkImg,
    primaryColor: '#D4AF37',
    secondaryColor: '#0E0F14',
    accentColor: '#F59E0B',
    fontPrimary: 'Modern Thuluth & Cinzel Serif',
    fontSecondary: 'Plus Jakarta Sans',
    geometryBreakdown: ['Qalam Reed Nib Aspect 1:3', 'Nuqta Point Unit Scale', 'Harmonic Arch Curvature'],
    vectorSpecs: 'Digitized from 1200 DPI archival cotton originals with 24K gold foil prep',
  },
  {
    id: 'brand-zenith-audio',
    title: 'Zenith Acoustic Sound Systems — Sonic Wave Monogram',
    brandName: 'Zenith Acoustics',
    category: 'Logotype',
    tagline: 'Zero Harmonic Distortion.',
    year: '2026',
    description: 'Sleek wave-frequency monogram symbolizing acoustic phase alignment and modern studio hardware precision.',
    mockupImage: logoBrandingImg,
    primaryColor: '#38BDF8',
    secondaryColor: '#0F172A',
    accentColor: '#818CF8',
    fontPrimary: 'Outfit Grotesque',
    fontSecondary: 'JetBrains Mono',
    geometryBreakdown: ['Sinusoidal Harmonic Wave', 'Concentric Radii (24mm, 48mm)', 'Tangential Fillets'],
    vectorSpecs: 'Laser CNC etched aluminum and 16px retina favicon scalable',
  },
];

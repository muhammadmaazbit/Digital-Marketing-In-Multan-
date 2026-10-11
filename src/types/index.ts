export type ServicePillar = 'video' | 'branding';

export interface VideoProject {
  id: string;
  title: string;
  client: string;
  category: 'Commercial' | 'YouTube' | 'Cinematic' | 'Reels';
  duration: string;
  year: string;
  stats: {
    views: string;
    retention: string;
    ctr: string;
  };
  software: string[];
  description: string;
  previewStill: string;
  logStill: string; // for Draggable before/after grading slider
  aspectRatio: '16:9' | '9:16';
  renderTime: string;
  exportFormat: string;
  sampleTimecodes?: {
    time: string;
    author: string;
    comment: string;
    timestampSec: number;
  }[];
}

export interface BrandIdentityProject {
  id: string;
  title: string;
  brandName: string;
  category: 'Logotype' | 'Calligraphy & Lettering' | 'Corporate Identity';
  tagline: string;
  year: string;
  description: string;
  mockupImage: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  fontPrimary: string;
  fontSecondary: string;
  geometryBreakdown: string[];
  vectorSpecs: string;
}

export interface ClientInquiry {
  pillar: 'video' | 'branding' | 'both';
  scope: string;
  timeline: string;
  budgetBracket: string;
  clientName: string;
  email: string;
  phoneWhatsapp: string;
  projectBrief: string;
  assetsLink: string;
}

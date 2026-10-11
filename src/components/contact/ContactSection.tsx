import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Instagram, 
  Facebook, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  ArrowLeft, 
  Video, 
  Sparkles, 
  Check, 
  Link as LinkIcon,
  Clock,
  Shield
} from 'lucide-react';
import { STUDIO_META } from '../../data/portfolioData';

interface ContactSectionProps {
  onSuccessNotice?: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSuccessNotice }) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    pillar: 'video', // 'video' | 'branding' | 'both'
    serviceScope: '4K Commercial Post-Production & Color',
    timeline: 'Within 2-3 Weeks',
    budget: '$3,000 - $7,500',
    clientName: '',
    email: '',
    phoneWhatsapp: '',
    projectBrief: '',
    assetsLink: '',
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    onSuccessNotice?.('Client onboarding brief submitted successfully!');
  };

  const handleReset = () => {
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#08090d] border-t border-zinc-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 tracking-wider uppercase mb-2 font-mono">
            <span>Direct Client Onboarding & Intake</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Initiate Your Production Sprint with Maaz Baloch
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base mt-3 leading-relaxed">
            Reserve dedicated post-production bandwidth for commercial video campaigns, high-retention social series, or bespoke brand identity systems.
          </p>
        </div>

        {/* Two-Column Grid: Left Multi-Step Onboarding Form / Right Real Contact Metadata */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Multi-Step Client Onboarding Form (7 Cols) */}
          <div className="lg:col-span-7 bg-zinc-950/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
            
            {/* Step Progress Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div>
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  Step 0{step} of 03
                </span>
                <div className="text-sm font-bold text-white mt-0.5">
                  {step === 1 ? 'Select Creative Pillar & Scope' :
                   step === 2 ? 'Production Timeline & Budget' : 'Contact & Project Handover'}
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                {[1, 2, 3].map(s => (
                  <div
                    key={s}
                    className={`w-6 h-1.5 rounded-full transition-colors ${
                      step >= s ? 'bg-amber-400' : 'bg-zinc-800'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Form Body */}
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Client Brief Confirmed</h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.clientName || 'Partner'}</strong>. 
                  Muhammad Maaz Yousaf Khan has received your brief and will review your timeline requirements within 4 business hours.
                </p>

                <div className="p-4 bg-zinc-900/80 rounded-xl border border-zinc-800 text-left text-xs font-mono space-y-1 text-zinc-400 max-w-md mx-auto">
                  <div>Creative Pillar: <span className="text-amber-400 uppercase">{formData.pillar}</span></div>
                  <div>Scope: <span className="text-white">{formData.serviceScope}</span></div>
                  <div>Timeline: <span className="text-white">{formData.timeline}</span></div>
                  <div>Budget: <span className="text-white">{formData.budget}</span></div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`${STUDIO_META.whatsappUrl}?text=${encodeURIComponent(`Salam Maaz, I just submitted a project brief on your portfolio for ${formData.serviceScope}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Ping Directly on WhatsApp</span>
                  </a>
                  <button
                    onClick={handleReset}
                    className="px-5 py-2.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: Creative Pillar & Scope */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-2">
                        Primary Creative Pillar:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ 
                            ...prev, 
                            pillar: 'video',
                            serviceScope: '4K Commercial Post-Production & Color'
                          }))}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.pillar === 'video'
                              ? 'bg-amber-500/10 border-amber-400 ring-1 ring-amber-400/30'
                              : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-bold text-white">
                            <span className="flex items-center gap-1.5">
                              <Video className="w-4 h-4 text-amber-400" />
                              <span>Video Editing & Social</span>
                            </span>
                            {formData.pillar === 'video' && <Check className="w-4 h-4 text-amber-400" />}
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                            Commercials, YouTube retainers, color grading, kinetic reels.
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setFormData(prev => ({ 
                            ...prev, 
                            pillar: 'branding',
                            serviceScope: 'Brand Identity & Logotype Architecture'
                          }))}
                          className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                            formData.pillar === 'branding'
                              ? 'bg-amber-500/10 border-amber-400 ring-1 ring-amber-400/30'
                              : 'bg-zinc-900/40 border-zinc-800 hover:border-zinc-700'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-bold text-white">
                            <span className="flex items-center gap-1.5">
                              <Sparkles className="w-4 h-4 text-amber-400" />
                              <span>Brand Identity Design</span>
                            </span>
                            {formData.pillar === 'branding' && <Check className="w-4 h-4 text-amber-400" />}
                          </div>
                          <div className="text-[11px] text-zinc-400 mt-1 leading-relaxed">
                            Bespoke logotypes, custom calligraphy, and vector systems.
                          </div>
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-2">
                        Deliverable Package Scope:
                      </label>
                      <select
                        value={formData.serviceScope}
                        onChange={(e) => setFormData(prev => ({ ...prev, serviceScope: e.target.value }))}
                        className="w-full bg-black/60 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      >
                        <option value="4K Commercial Post-Production & Color">4K Commercial Post-Production & DaVinci Color Grade</option>
                        <option value="High-Retention Social Video Sprint (Batch of 5-10 Reels)">High-Retention Social Video Sprint (Batch of 5-10 Reels)</option>
                        <option value="YouTube Flagship Editing & Retention Retainer">YouTube Flagship Editing & Retention Retainer</option>
                        <option value="Bespoke Geometric Monogram & Logo System">Bespoke Geometric Monogram & Logo System</option>
                        <option value="Custom Handcrafted Calligraphy & Lettering Package">Custom Handcrafted Calligraphy & Lettering Package</option>
                        <option value="Full Creative Retainer (Video + Brand Systems)">Full Creative Retainer (Video + Brand Systems)</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* STEP 2: Timelines & Budget */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-2">
                        Target Turnaround Urgency:
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                        {['48-72h Rush Sprint', 'Within 2-3 Weeks', 'Ongoing Retainer'].map(t => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setFormData(prev => ({ ...prev, timeline: t }))}
                            className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                              formData.timeline === t
                                ? 'bg-amber-400 text-zinc-950 font-bold border-amber-400'
                                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-2">
                        Allocated Budget Bracket (USD):
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                        {['$1,500 - $3,000', '$3,000 - $7,500', '$7,500 - $15,000+'].map(b => (
                          <button
                            type="button"
                            key={b}
                            onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                            className={`p-3 rounded-lg border text-center transition-colors cursor-pointer ${
                              formData.budget === b
                                ? 'bg-amber-400 text-zinc-950 font-bold border-amber-400'
                                : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white'
                            }`}
                          >
                            {b}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1">
                        Link to Raw Assets / Footage (Google Drive, Dropbox, WeTransfer):
                      </label>
                      <div className="relative">
                        <LinkIcon className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                        <input
                          type="url"
                          value={formData.assetsLink}
                          onChange={(e) => setFormData(prev => ({ ...prev, assetsLink: e.target.value }))}
                          placeholder="https://drive.google.com/..."
                          className="w-full bg-black/60 border border-zinc-700 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Details & Handover */}
                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1">
                        Your Name / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) => setFormData(prev => ({ ...prev, clientName: e.target.value }))}
                        placeholder="John Smith / Studio Horizon"
                        className="w-full bg-black/60 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-200 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="director@agency.com"
                          className="w-full bg-black/60 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-200 mb-1">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneWhatsapp}
                          onChange={(e) => setFormData(prev => ({ ...prev, phoneWhatsapp: e.target.value }))}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-black/60 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-200 mb-1">
                        Brief Project Summary:
                      </label>
                      <textarea
                        rows={3}
                        value={formData.projectBrief}
                        onChange={(e) => setFormData(prev => ({ ...prev, projectBrief: e.target.value }))}
                        placeholder="Key requirements, desired deliverables, target audience, references..."
                        className="w-full bg-black/60 border border-zinc-700 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>
                )}

                {/* Form Navigation Controls */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(prev => prev - 1)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Back</span>
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={() => setStep(prev => prev + 1)}
                      className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-zinc-950 font-semibold text-xs rounded-lg transition-colors shadow cursor-pointer"
                    >
                      <span>Continue to Step 0{step + 1}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-zinc-950 font-bold text-xs rounded-lg transition-all shadow-lg shadow-amber-500/25 cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Client Brief</span>
                    </button>
                  )}
                </div>

              </form>
            )}
          </div>

          {/* Right Column: Real Contact Metadata Grid (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Contact Details Card */}
            <div className="bg-zinc-950/80 border border-zinc-800 rounded-2xl p-6 space-y-5">
              <div className="border-b border-zinc-800 pb-3">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider">
                  Direct Communications
                </span>
                <h3 className="text-base font-bold text-white mt-1">
                  Studio Headquarters & Direct Channels
                </h3>
              </div>

              {/* Real Phone / WhatsApp */}
              <a
                href={STUDIO_META.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-xl transition-all group"
              >
                <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">WhatsApp / Phone</div>
                  <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors font-mono">
                    {STUDIO_META.phone}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Click for direct chat</div>
                </div>
              </a>

              {/* Official Inbox Email */}
              <a
                href={`mailto:${STUDIO_META.email}`}
                className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 hover:bg-zinc-900 border border-zinc-800 rounded-xl transition-all group"
              >
                <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg group-hover:bg-amber-500/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-zinc-400 font-medium">Official Inbox</div>
                  <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-amber-400 transition-colors font-mono truncate">
                    {STUDIO_META.email}
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">Checked continuously</div>
                </div>
              </a>

              {/* Location Details */}
              <div className="flex items-start gap-3.5 p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                <div className="p-2.5 bg-blue-500/10 text-blue-400 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-medium">Studio Location</div>
                  <div className="text-xs text-zinc-200 mt-0.5 leading-relaxed">
                    {STUDIO_META.location}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
                <span className="text-zinc-400">Social Handles:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={STUDIO_META.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                    <span>{STUDIO_META.instagram}</span>
                  </a>
                  <a
                    href={STUDIO_META.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-zinc-300 hover:text-amber-400 transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-400" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Turnaround Guarantee Badge */}
            <div className="p-4 bg-zinc-900/40 border border-zinc-800 rounded-xl text-xs space-y-2">
              <div className="flex items-center gap-2 text-white font-semibold">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>Production Turnaround & SLAs</span>
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed">
                Emergency 48-hour sprints available for active commercial broadcast deadlines. Standard revisions resolved within 24 hours of client proof submission.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

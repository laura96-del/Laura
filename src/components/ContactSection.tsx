import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO } from '../data/stoneData';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    return encodeURIComponent(
      `Hello K-Tech Marbles, my name is ${formData.name} (${formData.phone}). ${formData.message || 'I would like to inquire about your marble and granite slabs and installation services.'}`
    );
  };

  return (
    <section id="contact" className="py-20 bg-[#E5E3DF] border-b border-[#C8BBA8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider uppercase text-[#9B7954] mb-2">
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#252525] tracking-tight">
            Contact &amp; Showroom Location
          </h2>
          <p className="mt-2 text-[#555555] text-sm sm:text-base leading-relaxed">
            Reach out directly by phone, WhatsApp, or visit our showroom and cutting yard at Olaniyonu Modern Marble Market in Lagos.
          </p>
        </div>

        {/* Top 2-Column: Contact Details & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left: Contact Info & Address */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl bg-[#F7F5F0] border border-[#C8BBA8] shadow-xs space-y-6">
              {/* Logo & Brand Header */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-[#E5E3DF]">
                <img
                  src={BUSINESS_INFO.logoUrl}
                  alt="K-Tech Marbles Logo"
                  className="h-12 w-auto rounded border border-[#C8BBA8] object-contain bg-white p-0.5"
                />
                <div>
                  <h3 className="font-serif font-bold text-[#252525] text-lg">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-xs text-[#9B7954] font-semibold">{BUSINESS_INFO.estYear}</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#E5E3DF] flex items-center justify-center shrink-0 text-[#9B7954]">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#555555] uppercase tracking-wider">
                    Physical Yard Address
                  </div>
                  <p className="text-sm text-[#252525] mt-1 leading-relaxed">
                    {BUSINESS_INFO.address}
                  </p>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#9B7954] hover:text-[#846442] font-bold mt-2 transition-colors"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#E5E3DF] flex items-center justify-center shrink-0 text-[#9B7954]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#555555] uppercase tracking-wider">
                    Phone Contact
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneClean}`}
                    className="text-sm font-bold text-[#252525] hover:text-[#9B7954] mt-1 block tabular-nums transition-colors"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                  <p className="text-xs text-[#555555] mt-0.5">
                    Direct voice line to sales &amp; cutting warehouse
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-md bg-[#E5E3DF] text-[#9B7954] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4 fill-[#9B7954]" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-[#555555] uppercase tracking-wider">
                    Official WhatsApp
                  </div>
                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-[#252525] hover:text-[#9B7954] mt-1 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>+234 913 807 8567 (Chat Now)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <p className="text-xs text-[#555555] mt-0.5">
                    Send room measurements or photos for fast estimates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Clean Inquiry Form */}
          <div className="lg:col-span-7 bg-[#F7F5F0] rounded-xl p-6 sm:p-8 border border-[#C8BBA8] shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#E5E3DF] text-[#9B7954] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif font-bold text-[#252525] text-2xl">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-xs sm:text-sm text-[#555555] max-w-md mx-auto">
                  Your message has been sent. For the fastest response, you can also forward your message directly to our official WhatsApp.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.phoneClean}?text=${getWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>Open in WhatsApp</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 bg-[#E5E3DF] hover:bg-[#DDD5C9] text-[#252525] text-xs font-semibold rounded-md transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="font-serif font-bold text-[#252525] text-xl">
                    Send an Enquiry
                  </h3>
                  <p className="text-xs text-[#555555] mt-1">
                    Have questions about slab prices, cutting, or installation? Leave your details below.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Your Name <span className="text-[#9B7954]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arc. Johnson"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-[#C8BBA8] rounded-md py-2 px-3 text-sm text-[#252525] placeholder:text-[#888888] focus:bg-white focus:outline-none focus:border-[#9B7954] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#252525] mb-1">
                      Phone Number <span className="text-[#9B7954]">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-[#C8BBA8] rounded-md py-2 px-3 text-sm text-[#252525] placeholder:text-[#888888] focus:bg-white focus:outline-none focus:border-[#9B7954] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us what you need (e.g. kitchen countertop in Black Galaxy granite, marble flooring in Lekki)..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#C8BBA8] rounded-md py-2 px-3 text-sm text-[#252525] placeholder:text-[#888888] focus:bg-white focus:outline-none focus:border-[#9B7954] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:flex-1 py-3 px-5 bg-[#9B7954] hover:bg-[#846442] text-white font-semibold text-xs rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Enquiry</span>
                  </button>

                  <a
                    href={BUSINESS_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto py-3 px-5 bg-[#25D366] hover:bg-[#20bd5a] text-white text-xs font-semibold rounded-md transition-colors flex items-center justify-center gap-2 shadow-xs"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-white" />
                    <span>Chat on WhatsApp Directly</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Live Interactive Google Map of Olaniyonu Market */}
        <div className="rounded-2xl overflow-hidden border border-[#C8BBA8] bg-[#F7F5F0] shadow-sm space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#E5E3DF]">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#9B7954]" />
              <span className="font-serif font-bold text-[#252525] text-base">
                Interactive Google Map: Olaniyonu Modern Marble Market
              </span>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-[#9B7954] hover:text-[#846442] inline-flex items-center gap-1.5 transition-colors self-start sm:self-auto"
            >
              <span>Get Directions on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Google Map Iframe */}
          <div className="w-full h-[360px] sm:h-[440px] rounded-xl overflow-hidden border border-[#C8BBA8] bg-[#E5E3DF] relative">
            <iframe
              title="K-Tech Marbles and Granites Ventures Location on Google Maps"
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          <p className="text-xs text-[#555555] text-center pt-1">
            <strong>Location Note:</strong> Located along the Lagos-Badagry Expressway at Coker Bus Stop. Enter the main Olaniyonu Modern Marble Market gate and navigate to <strong>Block K, Shop 13/14</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

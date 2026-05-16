import React from 'react';
import { Mail, Phone, MapPin, Zap } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className="lg:h-screen pt-16 lg:pt-20 bg-gray-50 flex items-center justify-center relative overflow-hidden font-sans">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white hidden lg:block z-0"></div>

      {/* Background radial effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-12 py-4 lg:py-0 max-w-full lg:max-w-[95vw] relative z-10">
        {/* Main Content Split - Constrained Height for Viewport */}
        <div className="flex flex-col lg:flex-row max-w-full lg:max-w-[85vw] mx-auto items-stretch w-full rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden shadow-[0_32px_120px_-20px_rgba(0,0,0,0.15)] border border-primary/10 bg-white lg:max-h-[80vh]">

          {/* Contact Info (Left Column) */}
          <div className="w-full lg:w-[38%] bg-primary p-10 lg:p-10 flex flex-col justify-between relative overflow-hidden">
            {/* Background design */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#ffffff 1.5px, transparent 1.5px)`, backgroundSize: '24px 24px' }}></div>
            </div>

            <div className="relative z-10">
              <div className="mb-8 lg:mb-10">
                <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-4 group">
                  <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
                  <span className="text-accent text-[9px] font-black uppercase tracking-[0.2em]">Contact Us</span>
                </div>
                <h1 className="text-3xl lg:text-4xl font-black text-white mb-3 uppercase tracking-tighter leading-[0.9]">
                  Get in <span className="text-accent underline decoration-accent/30 underline-offset-4 italic">Touch</span>
                </h1>
                <p className="text-white/50 text-[11px] font-medium leading-relaxed max-w-xs">
                  Ready to discuss your export requirements? Request a specification sheet or a quote today.
                </p>
              </div>

              <div className="flex flex-col gap-6 lg:gap-8">
                {/* Address */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-accent border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-accent/60 text-[9px] mb-1 uppercase tracking-widest">Global Head Office</h3>
                    <p className="text-white/80 leading-snug text-xs md:text-sm font-medium">
                      HVH Global, 77, Prabhu darshan ind.est., raika circle, 120ft Bamroli road,<br />
                      Surat, Gujarat, INDIA- 394210.
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-accent border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-accent/60 text-[9px] mb-1 uppercase tracking-widest">Connect With Us</h3>
                    <a href="tel:+919974422663" className="block text-white text-base lg:text-lg font-black hover:text-accent transition-colors">+91 99744 22663</a>
                    <span className="block text-[9px] text-white/30 mt-0.5 font-bold tracking-widest uppercase">Mon-Fri, 9am - 6pm</span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-white/5 flex items-center justify-center text-accent border border-white/10 group-hover:bg-accent group-hover:text-primary transition-all duration-300">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-black text-accent/60 text-[9px] mb-1 uppercase tracking-widest">Direct Inquiry</h3>
                    <a href="mailto:sales@hvhglobals.com" className="block text-white text-base lg:text-lg font-black hover:text-accent transition-colors border-b border-accent/20 pb-0.5">sales@hvhglobals.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Accent */}
            <div className="mt-8 pt-4 border-t border-white/5 relative z-10 hidden lg:block">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/40"></div>
                <p className="text-white/20 text-[8px] font-black tracking-[0.2em] uppercase">Trusted Global Partner</p>
              </div>
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <div className="w-full lg:w-[62%] bg-white p-8 lg:p-12 pb-32 lg:pb-12 relative overflow-y-auto lg:overflow-hidden hide-scrollbar">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="mb-6 lg:mb-8 flex flex-col items-center text-center lg:items-start lg:text-left">
                <h2 className="text-2xl lg:text-3xl font-black text-primary mb-1 uppercase tracking-tighter">Send an Inquiry</h2>
                <div className="w-10 h-1 bg-accent mb-3 lg:mx-0 mx-auto"></div>
                <p className="text-primary/50 font-black text-[10px] uppercase tracking-wider">Detailed specifications help us provide more accurate volume quotes.</p>
              </div>

              <form className="flex flex-col gap-4 lg:gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 ml-1">First Name</label>
                    <input type="text" placeholder="John" className="px-4 py-2.5 rounded-xl border border-gray-100 focus:ring-2 focus:ring-accent/50 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white text-primary font-bold placeholder:text-gray-300 text-xs" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 ml-1">Last Name</label>
                    <input type="text" placeholder="Doe" className="px-4 py-2.5 rounded-xl border border-gray-100 focus:ring-2 focus:ring-accent/50 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white text-primary font-bold placeholder:text-gray-300 text-xs" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 ml-1">Email Address</label>
                    <input type="email" placeholder="john@company.com" className="px-4 py-2.5 rounded-xl border border-gray-100 focus:ring-2 focus:ring-accent/50 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white text-primary font-bold placeholder:text-gray-300 text-xs" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 ml-1">Company Name</label>
                    <input type="text" placeholder="ABC Corp" className="px-4 py-2.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-accent/50 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white text-primary font-bold placeholder:text-gray-300 text-xs" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 ml-1">Category of Interest</label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 rounded-xl border border-gray-100 focus:ring-2 focus:ring-accent/50 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white text-primary font-bold appearance-none cursor-pointer text-xs">
                      <option value="wires">Industrial Wires & Cables</option>
                      <option value="furnishing">Commercial Furnishing</option>
                      <option value="both">Multiple Categories</option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <Zap size={14} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[9px] font-black uppercase tracking-widest text-primary/30 ml-1">Message / Project Requirements</label>
                  <textarea rows="2" placeholder="Please detail the specifications, quantity, or volume you require..." className="px-4 py-2.5 rounded-xl border border-gray-100 focus:ring-2 focus:ring-accent/50 focus:border-transparent outline-none transition-all bg-gray-50/50 focus:bg-white resize-none text-primary font-bold placeholder:text-gray-300 text-xs"></textarea>
                </div>

                <div className="flex justify-start pt-2">
                  <button type="submit" className="bg-primary text-accent py-3.5 px-10 rounded-full font-black text-base lg:text-lg hover-lift shadow-xl shadow-primary/20 transition-all w-full md:w-auto uppercase tracking-tighter flex items-center justify-center gap-3 group">
                    Submit Inquiry
                    <Zap size={16} className="group-hover:rotate-12 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

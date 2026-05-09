import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-transparent">
      <div className="container mx-auto max-w-full">
        <div className="bg-accent backdrop-blur-2xl rounded-t-[3rem] p-12 lg:p-16 text-center border border-accent/20 shadow-2xl relative overflow-hidden group">

          {/* Ornamental blurs */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-accent/20 rounded-full blur-[100px] pointer-events-none group-hover:scale-150 transition-transform duration-1000"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black text-primary mb-6 tracking-tight">
              Ready to Partner with HVH Global Export?
            </h2>
            <p className="text-primary/80 text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
              Connect with our export specialists to discuss your requirements. We're here to help you source quality products from India.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-xl bg-primary hover:bg-white text-white hover:text-primary font-black transition-all flex items-center gap-2 w-full sm:w-auto justify-center shadow-2xl hover:shadow-accent/40 hover:-translate-y-1 uppercase tracking-tighter"
              >
                Get a Quote <ArrowRight size={20} />
              </Link>
              <Link
                to="/products"
                className="px-10 py-4 rounded-xl border-2 border-white/30 hover:border-black text-black font-bold transition-all w-full sm:w-auto justify-center flex backdrop-blur-sm hover:bg-white/10"
              >
                View Products
              </Link>
            </div>

            <div className="flex items-center justify-center gap-10 text-white/70">
              <a href="mailto:sales@hvhglobal.com" className="flex items-center gap-3 hover:text-white transition-colors group/link">
                <div className="w-10 h-10 text-black rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                  <Mail size={18} />
                </div>
                <span className="font-semibold text-lg text-black transition-colors">Email Us</span>
              </a>
              <a href="tel:+919974422663" className="flex items-center gap-3 hover:text-white transition-colors group/link">
                <div className="w-10 h-10 text-black rounded-full bg-white/10 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-white transition-colors">
                  <Phone size={18} />
                </div>
                <span className="font-semibold text-lg text-black transition-colors">Call Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

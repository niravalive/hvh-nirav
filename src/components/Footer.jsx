import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import Logo from '../data/Logo.png';
import CTA from './CTA';

const Footer = () => {
  return (
    <>
      <CTA />
      <footer className="bg-primary backdrop-blur-3xl text-accent/60 pt-6 pb-16 border-t border-accent/20 shadow-2xl relative z-20 font-medium">
        <div className="container mx-auto px-6 lg:px-12 max-w-full lg:max-w-[90vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

            {/* Brand Info */}
            <div className="col-span-1 lg:col-span-1">
              <Link to="/" className="flex items-center gap-4 mb-6 group">
                <img
                  src={Logo}
                  alt="HVH Global Logo"
                  className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-white leading-none tracking-tight group-hover:text-accent transition-colors">
                    HVH Global
                  </span>
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.15em] mt-1">
                    Trade Beyond Boundaries
                  </span>
                </div>
              </Link>
              <p className="text-base text-accent/50 mb-6 leading-relaxed">
                India's trusted partner for exporting premium industrial wires and commercial furnishings globally.
              </p>
              <div className="flex gap-4">
                {/* Example Social Links */}
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-primary transition-colors">
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Products</Link></li>
                <li><Link to="/accreditation" className="hover:text-white transition-colors">Accreditations</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin size={20} className="text-accent shrink-0 mt-1" />
                  <span className="text-base space-y-1 block text-accent/80">
                    <strong>Address</strong><br />
                    HVH Global, 77, Prabhu darshan ind.est., raika circle, 120ft Bamroli road,<br />
                    Surat, Gujarat, INDIA- 394210.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-accent shrink-0" />
                  <a href="tel:+919974422663" className="hover:text-accent transition-colors">+91 99744 22663</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={20} className="text-accent shrink-0" />
                  <a href="mailto:sales@hvhglobals.com" className="hover:text-accent transition-colors">sales@hvhglobals.com</a>
                </li>
              </ul>
            </div>

            {/* Newsletter/Direct Contact CTA */}
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-widest">Direct Inquiry</h4>
              <p className="text-base text-accent/50 mb-4 font-medium">Ready to discuss your export needs? Connect with us directly.</p>
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919974422663?text=Hello%20HVH%20Global%20Export,%20I'm%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 px-6 rounded-lg font-bold hover:bg-[#1EBE5A] transition-colors"
                >
                  Message on WhatsApp
                </a>
                <a
                  href="mailto:sales@hvhglobals.com?subject=Export Inquiry"
                  className="flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white py-3 px-6 rounded-lg font-bold hover:bg-white/20 transition-colors"
                >
                  Send an Email
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-accent/10 pt-8 flex flex-col md:flex-row items-center justify-between text-base text-accent/40">
            <p>&copy; {new Date().getFullYear()} HVH Global Export. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

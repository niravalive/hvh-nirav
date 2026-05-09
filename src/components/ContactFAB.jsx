import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const ContactFAB = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show buttons after brief delay to not distract immediate load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`fixed bottom-6 right-6 z-50 flex flex-col gap-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>

      {/* Email FAB */}
      <a
        href="mailto:sales@hvhglobal.com?subject=Inquiry from Website"
        className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-opacity-90 hover:scale-110 transition-all duration-300 relative group"
        aria-label="Send Email"
      >
        <Mail size={24} />
        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-primary text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block border border-accent/20">
          Email Us
        </div>
      </a>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/919974422663?text=Hello%20HVH%20Global%20Export,%20I'm%20interested%20in%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#1EBE5A] hover:scale-110 transition-all duration-300 relative group"
        aria-label="Contact on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8 relative z-10 pointer-events-none"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .018 5.396.015 12.03c0 2.12.559 4.191 1.613 6.015L0 24l6.117-1.605a11.815 11.815 0 005.925 1.585h.005c6.637 0 12.032-5.396 12.035-12.031a11.8 11.8 0 00-3.517-8.503" />
        </svg>
        {/* Pulse effect */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-ping"></div>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 bg-primary text-white text-sm px-3 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden sm:block border border-accent/20">
          WhatsApp Us
        </div>
      </a>

    </div>
  );
};

export default ContactFAB;

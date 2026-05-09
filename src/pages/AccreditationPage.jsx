import React from 'react';
import { FileBadge, CheckCircle, ShieldCheck } from 'lucide-react';

const AccreditationPage = () => {
  const certifications = [
    { name: "ISO 9001:2015", type: "Quality Management", desc: "International standard for quality management systems, ensuring consistent product quality and customer satisfaction." },
    { name: "ISO 14001:2015", type: "Environmental Management", desc: "Certification for effective environmental management systems, reflecting our commitment to a carbon-neutral future." },
    { name: "ISO 45001:2018", type: "Occupational Health & Safety", desc: "International standard for occupational health and safety, protecting the well-being of our global workforce." },
    { name: "OEKO-TEX Standard 100", type: "Textile Safety", desc: "One of the world's best-known labels for textiles tested for harmful substances, ensuring safety for our premium bedding and bath range." },
    { name: "MADE IN GREEN by OEKO-TEX", type: "Sustainable Textiles", desc: "A traceable product label for textiles that have been manufactured in environmentally friendly facilities." },
    { name: "REACH Compliance", type: "Chemical Safety", desc: "European Union regulation for the protection of human health and the environment from the risks posed by chemicals." },
    { name: "CE Marking", type: "European Compliance", desc: "Indicates that products meet EU safety, health, and environmental protection requirements." },
    { name: "UL Listed", type: "Global Safety Standard", desc: "Underwriters Laboratories certification, ensuring rigorous safety and performance standards for electrical components." },
    { name: "CPRI Certified", type: "Electrical Testing", desc: "Central Power Research Institute certification for performance and reliability of power cables and switchgear." },
    { name: "RDSO Approved", type: "Railway Standards", desc: "Approved by the Research Designs and Standards Organisation for critical railway signalling and power infrastructure." }
  ];

  return (
    <div className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 py-12 md:py-24 lg:px-12 max-w-full lg:max-w-[90vw]">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-white shadow-md text-primary mb-6 md:mb-8 border border-gray-100">
            <FileBadge size={32} className="md:hidden" />
            <FileBadge size={40} className="hidden md:block" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mb-4 md:mb-6 tracking-tight uppercase">Our Accreditations</h1>
          <p className="text-base md:text-xl text-gray-600 leading-relaxed font-medium">
            We operate at the highest standards of international trade. Below are the certificates and accreditations we hold with our trusted global partners.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-3xl border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6 text-center md:text-left"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-50 flex items-center justify-center text-primary shrink-0 border border-green-100">
                <ShieldCheck size={28} className="md:hidden" />
                <ShieldCheck size={32} className="hidden md:block" />
              </div>
              <div className="flex-1 w-full">
                <div className="flex flex-col md:flex-row items-center justify-between mb-3 md:mb-2 gap-2">
                   <h3 className="text-lg md:text-xl font-black text-gray-900 uppercase tracking-tight">{cert.name}</h3>
                  <CheckCircle size={20} className="text-green-500" />
                </div>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 font-bold text-[10px] md:text-xs uppercase tracking-wider rounded-lg mb-4 md:mb-3">
                  {cert.type}
                </span>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccreditationPage;

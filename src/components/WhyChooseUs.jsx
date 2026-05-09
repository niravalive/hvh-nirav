import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, Award, Container, Headset } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Handshake size={32} />,
      title: 'Trusted Partner',
      description: 'Reliability, transparency, and long-term global relationships.',
    },
    {
      icon: <Award size={32} />,
      title: 'Certified Excellence',
      description: 'International quality certifications and compliance standards.',
    },
    {
      icon: <Container size={32} />,
      title: 'Scalable Logistics',
      description: 'From sample shipments to full container loads, handled efficiently.',
    },
    {
      icon: <Headset size={32} />,
      title: 'Dedicated Support',
      description: 'Round-the-clock assistance with a single point of contact.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-12 lg:py-0 w-full relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-full lg:max-w-[90vw] relative">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-base font-bold text-primary tracking-widest uppercase flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-primary/30"></span>
            Why Us
            <span className="w-12 h-px bg-primary/30"></span>
          </h2>
          <h3 className="text-3xl lg:text-4xl xl:text-6xl font-black text-gray-900 leading-tight mb-2 text-glow">
            Why Choose HVM Export
          </h3>
          <p className="text-gray-500 text-l font-medium leading-relaxed max-w-2xl mx-auto bg-white/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/50 shadow-sm inline-block">
            The competitive edge that makes us the preferred export partner worldwide.
          </p>
        </motion.div>

        {/* Compact Centered Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
              }}
              className="bg-gray-50/80 rounded-[2.5rem] p-10 border border-primary/5 text-center hover:bg-primary group transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(1,22,39,0.15)] flex flex-col items-center gap-6 cursor-default"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary group-hover:bg-white/10 group-hover:text-white group-hover:shadow-none transition-all duration-300">
                {reason.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl font-black text-primary group-hover:text-white transition-colors duration-500">
                  {reason.title}
                </h4>
                <p className="text-primary/60 text-base leading-relaxed font-black group-hover:text-white/80 transition-colors duration-500 px-2">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

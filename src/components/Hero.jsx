import React from 'react';
import { ArrowRight, Globe, ShieldCheck, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import heroBg from '../assets/images/hero_bg.png';

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-104px)] flex items-center py-12 overflow-hidden bg-transparent">
      {/* Background Image / Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)'
        }}
      >
        <img
          src="/hero_bg_doodle.png"
          alt="Abstract Global Trade"
          className="w-full h-full object-cover select-none mix-blend-multiply"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 max-w-full lg:max-w-[90vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr,1fr] gap-12 lg:gap-20 items-center">

          {/* Left Column: Text Content */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/20 bg-white/70 backdrop-blur-md mb-2"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <span className="text-primary/70 text-xs font-black tracking-[0.2em] uppercase">Premium B2B Export</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-black text-primary leading-[1] tracking-tight"
            >
              Global Trade.<br />
              <span className="text-accent italic font-medium">Simplified.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl lg:text-2xl text-gray-500 font-medium max-w-xl leading-relaxed"
            >
              Uncompromising quality in industrial grade cables and commercial furnishings, delivered worldwide.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 mt-4"
            >
              <a
                href="#products"
                className="px-10 py-5 rounded-2xl bg-primary text-accent font-black text-lg hover-lift transition-all shadow-xl shadow-primary/30 flex items-center gap-3 group uppercase tracking-tighter"
              >
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/contact"
                className="px-10 py-5 rounded-2xl border-2 border-primary/10 text-primary font-black text-lg hover:bg-primary/5 transition-all backdrop-blur-sm"
              >
                Get a Quote
              </a>
            </motion.div>
          </div>

          {/* Right Column: High-Impact Feature Grid */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            {/* Featured Visual Element */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
              className="md:col-span-2 relative h-[35vh] md:h-140 group rounded-[3rem] overflow-hidden border border-primary/5 shadow-2xl"
            >
              <img
                src={heroBg}
                alt="Global Logistics"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 flex items-center gap-4">
                {/* Floating Info Cards
                {[
                  { icon: Globe, title: 'Global Reach' },
                  { icon: Box, title: 'Dedicated Focus' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, scale: 0.95 },
                      visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                    }}
                    className="bg-[#e7be83] hover:bg-[#d8a867] px-6 py-5 rounded-3xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-[240px] flex justify-center items-center cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#e7be83] flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1 ">{item.title}</h4>
                  </motion.div>
                ))} */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

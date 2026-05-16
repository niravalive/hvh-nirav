import React from 'react';
import { motion } from 'framer-motion';
import { Award, Target } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import aboutIndustrial from '../assets/images/about-industrial-sF6FumRI.png';
import furnishingProduct from '../assets/images/about_furnishing_real.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 w-full overflow-hidden relative">
      <div className="container mx-auto px-6 lg:px-12 max-w-full lg:max-w-[90vw] relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-stretch gap-16 lg:gap-24">

          {/* Left Column: Image Anchor */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative group flex flex-col"
          >
            <div className="relative flex-grow min-h-[350px] w-full rounded-[4rem] overflow-hidden border border-primary/5 shadow-2xl">
              <img
                src={aboutIndustrial}
                alt="Industrial Mastery"
                className="w-full h-full object-cover opacity-100 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 absolute inset-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent pointer-events-none"></div>

              {/* Animated Stats Overlay */}
              <div className="absolute top-8 right-8 flex flex-col gap-4">
                <div className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
                  <div className="text-white text-5xl font-black mb-1">
                    <AnimatedCounter target={15} suffix="+" />
                  </div>
                  <div className="text-accent text-xs font-black tracking-widest uppercase">Global Markets</div>
                </div>
              </div>
            </div>

            {/* Background Texture for Depth */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -z-10 group-hover:bg-accent/20 transition-colors"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors"></div>
          </motion.div>


          {/* Right Column: Text Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-end justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="mb-12 flex flex-col items-center text-center lg:items-end lg:text-right"
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-primary/10 bg-gray-50/50 backdrop-blur-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">The HVH Legacy</span>
              </div>

              <h3 className="text-4xl lg:text-7xl font-black text-primary leading-[1.1] mb-8 tracking-tight">
                Your Reliable <br />
                <span className="text-accent underline decoration-accent/20">Export Source</span>
              </h3>

              <p className="text-primary/60 text-xl md:text-2xl font-medium leading-relaxed max-w-xl">
                Leading the way in global exports, we specialize in high-end hospitality textiles and industrial-grade electrical solutions. Our products have powered prestigious global landmarks including the <span className="text-primary font-bold">Ram Mandir</span>, the <span className="text-primary font-bold">Statue of Unity</span>, and the <span className="text-primary font-bold">Parliament of India</span>.
              </p>
            </motion.div>

            {/* Feature Cards Grid (Existing Data) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } },
              }}
              className="w-full flex justify-center lg:justify-end"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                className="flex flex-col sm:flex-row justify-center lg:justify-end gap-6"
              >
                {/* Certified Quality */}
                <div className="flex items-center justify-center lg:justify-end flex-row-reverse gap-4 flex-1">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#e7be83] flex items-center justify-center text-primary transition-colors hover:bg-[#d8a867]">
                    <Award size={24} />
                  </div>
                  <div className="text-center lg:text-right">
                    <h4 className="font-bold text-xl text-primary tracking-tight">Certified Quality</h4>
                  </div>
                </div>

                {/* Precision Logistics */}
                <div className="flex items-center justify-center lg:justify-end flex-row-reverse gap-4 flex-1">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#e7be83] flex items-center justify-center text-primary transition-colors hover:bg-[#d8a867]">
                    <Target size={24} />
                  </div>
                  <div className="text-center lg:text-right">
                    <h4 className="font-bold text-xl text-primary tracking-tight">Precision Logistics</h4>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

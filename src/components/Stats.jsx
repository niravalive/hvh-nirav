import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Package, Clock, Users } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const Stats = () => {
  const stats = [
    { icon: <Globe size={24} />, value: 15, suffix: '+', label: 'Countries Served' },
    { icon: <Package size={24} />, value: 1000, suffix: '+', label: 'Products Exported' },
    { icon: <Clock size={24} />, value: 15, suffix: '+', label: 'Years of Expertise' },
    { icon: <Users size={24} />, value: 500, suffix: '+', label: 'Satisfied Clients' },
  ];

  return (
    <section className="py-24 lg:py-32 w-full relative overflow-hidden">


      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
        className="container mx-auto px-6 lg:px-12 max-w-full lg:max-w-[90vw] relative z-10"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
              }}
              className="group relative flex flex-col items-center text-center p-8 md:p-16 rounded-[4rem] border border-white/5 hover:border-accent/30 transition-all duration-500 bg-white/[0.02] backdrop-blur-sm"
            >
              {/* Giant Background Number (Existing Data) */}
              <div className="absolute inset-0 flex items-center justify-center text-8xl font-black text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors duration-500">
                {stat.value}
              </div>

              <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 border border-accent/20 group-hover:bg-accent group-hover:text-primary transition-all duration-500 shadow-2xl shadow-accent/5">
                {React.cloneElement(stat.icon, { size: 32 })}
              </div>

              <div className="relative z-10">
                <span className="text-5xl lg:text-7xl font-black text-white mb-4 block tracking-tighter">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </span>

                <span className="text-sm md:text-base font-black text-accent tracking-[0.3em] uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                  {stat.label}
                </span>
              </div>

              {/* Decorative Corner Glow */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-accent/10 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;

import React from 'react';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Package, FileCheck, Truck, CircleCheckBig } from 'lucide-react';
import heroBgDoodle from '../assets/images/hero_bg_doodle-Cq-kX0z2.png';

const ExportProcess = () => {
  const steps = [
    { icon: <Search size={24} />, title: 'Procurement & Sourcing', description: 'Identifying and partnering with verified, high-quality manufacturers.' },
    { icon: <ShieldCheck size={24} />, title: 'Rigorous Quality Check', description: 'Every product undergoes strict testing against international standards.' },
    { icon: <Package size={24} />, title: 'Export-Grade Packaging', description: 'Secure, regulation-compliant packaging for safe overseas transit.' },
    { icon: <FileCheck size={24} />, title: 'Documentation & Compliance', description: 'Seamless handling of export permits, invoices, and customs paperwork.' },
    { icon: <Truck size={24} />, title: 'Seamless Logistics', description: 'Optimized shipping routes via trusted freight and logistics partners.' },
    { icon: <CircleCheckBig size={24} />, title: 'Timely Global Delivery', description: 'On-time delivery to ports and warehouses across the globe.' },
  ];

  return (
    <section id="process" className="py-12 lg:py-12 w-full relative overflow-hidden bg-gray-50">
      {/* Visual Roadmap Background Text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[30vw] font-black text-primary/[0.02] select-none rotate-90 whitespace-nowrap">
          ROADMAP
        </div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 max-w-full lg:max-w-[90vw] relative z-10">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-32">
          {/* Left Column: Industrial Context */}
          <div className="lg:w-2/5 flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center text-center lg:items-start lg:text-left h-full"
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full border border-primary/10 bg-white/50 backdrop-blur-sm mb-6 w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                <span className="text-xs font-black text-primary uppercase tracking-[0.3em]">Operational Flow</span>
              </div>

              <h1 className="text-4xl lg:text-5xl font-black text-primary leading-[1.1] mb-6 tracking-tighter">
                Our
                <span className="text-accent underline decoration-accent/20"> Export Process</span>
              </h1>

              <p className="text-primary/60 text-m font-medium leading-relaxed mb-8 max-w-sm">
                A transparent, efficient pipeline from sourcing to delivery built for trust at every step.
              </p>

              <div className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden border border-primary/5 shadow-2xl group w-full h-48 lg:h-auto lg:min-h-[250px] lg:flex-grow">
                <img
                  src={heroBgDoodle}
                  alt="Process Flow"
                  className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700 absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none"></div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Steps Grid */}
          <div className="lg:w-3/5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.1 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-4 relative"
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                  }}
                  className="group relative flex flex-col items-start gap-4 bg-white p-6 rounded-[2rem] border border-primary/5 shadow-xl hover:shadow-2xl hover:border-accent/30 transition-all duration-500 overflow-hidden"
                >
                  <div className="flex items-center gap-4 w-full">
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-primary flex items-center justify-center text-accent shadow-xl group-hover:rotate-6 transition-transform duration-500 relative z-10">
                      {React.cloneElement(step.icon, { size: 20 })}
                      <div className="absolute -top-1.5 -left-1.5 w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center text-[10px] font-black shadow-lg border-2 border-white">
                        0{index + 1}
                      </div>
                    </div>
                    <h4 className="text-lg font-black text-primary tracking-tight line-clamp-2">{step.title}</h4>
                  </div>

                  <p className="text-primary/60 text-sm leading-relaxed font-semibold transition-colors group-hover:text-primary/80 line-clamp-2">
                    {step.description}
                  </p>

                  {/* Internal Progress Bar */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent group-hover:w-full transition-all duration-700 rounded-full"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExportProcess;

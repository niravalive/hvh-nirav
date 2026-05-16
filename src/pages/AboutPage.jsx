import React from 'react';
import { motion } from 'framer-motion';
import {
  Zap, Award, ShieldCheck, Waves, Leaf, History, CheckCircle2,
  Target, Truck, Headphones, Globe, Eye, Scale, Lightbulb,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutIndustrial from '../assets/images/about_industrial_real.png';
import furnishingProduct from '../assets/images/about_furnishing_real.jpg';
import industrialWorkNew from '../assets/images/industrial_work_real.jpg';
import premiumMarbleNew from '../assets/images/premium_real.jpg';
import elegantFurnitureNew from '../assets/images/elegant_furniture_real.jpg';
import globalLogisticsNew from '../assets/images/global_logistics_real.jpg';

// Logo Imports
import globaltech from '../assets/logos/globaltech.png';
import futurebuild from '../assets/logos/futurebuild.png';
import apex from '../assets/logos/apex.png';
import primesource from '../assets/logos/primesource.png';
import nexus from '../assets/logos/nexus.png';
import vanguard from '../assets/logos/vanguard.png';
import horizon from '../assets/logos/horizon.png';
import summit from '../assets/logos/summit.png';
import quantum from '../assets/logos/quantum.png';
import meridian from '../assets/logos/meridian.png';

import AnimatedCounter from '../components/AnimatedCounter';

const AboutPage = () => {
  const trustedCompanies = [
    { name: "GlobalTech Industries", logo: globaltech },
    { name: "FutureBuild Corp", logo: futurebuild },
    { name: "Apex Logistics", logo: apex },
    { name: "PrimeSource Materials", logo: primesource },
    { name: "Nexus Trade Co.", logo: nexus },
    { name: "Vanguard Exports", logo: vanguard },
    { name: "Horizon Imports", logo: horizon },
    { name: "Summit Manufacturing", logo: summit },
    { name: "Quantum Dynamics", logo: quantum },
    { name: "Meridian Supply", logo: meridian }
  ];

  return (
    <div className="relative bg-white min-h-screen">
      {/* 4-Image Presentation Grid Section (Now the Hero) */}
      <section className="h-[100vh] flex items-center justify-center bg-primary relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 px-0">
        {/* Curvy blue separator SVG */}
        <div className="absolute left-1/2 top-0 h-full w-1/2 pointer-events-none -translate-x-32 hidden lg:block opacity-80" style={{ zIndex: 0 }}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-accent/20 fill-transparent stroke-current stroke-[0.5]">
            <path d="M50,0 Q90,50 30,100" />
          </svg>
        </div>

        <div className="container mx-auto px-4 lg:px-8 max-w-full lg:max-w-[95vw] xl:max-w-[1300px] relative z-10 w-full">
          <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 xl:gap-10 w-full">

            {/* Left Text Block */}
            <div className="lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left shrink-0 py-8 lg:py-12 justify-center gap-12">
              <div>
                {/* Tag */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-600/60 mb-6"
                >
                  <span className="text-[#dcb07b] text-xs font-bold leading-none">+</span>
                  <span className="text-[#a1abb3] text-[8px] lg:text-[9px] font-bold tracking-[0.2em] uppercase">Corporate Portfolio</span>
                </motion.div>

                {/* Heading */}
                <motion.h2
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.0] lg:leading-[0.9] tracking-tight mb-8"
                >
                  <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-white block">The Architecture of</motion.span>
                  <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-[#dcb07b] italic block lg:mt-1">Global Success</motion.span>
                </motion.h2>

                {/* Paragraph */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-[#a1abb3] text-sm lg:text-[14px] font-bold leading-relaxed max-w-sm mx-auto lg:mx-0"
                >
                  Bridging the gap between heavy industrial engineering and ultra-luxury interior aesthetics.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-8"
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-white text-3xl lg:text-[36px] font-black mb-1">
                    <AnimatedCounter target={15} suffix="+" />
                  </div>
                  <span className="text-[#75818d] text-[8px] font-black tracking-widest uppercase">Global Territories</span>
                </div>
                <div className="hidden lg:block w-px h-8 bg-gray-700/80"></div>
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="text-white text-3xl lg:text-[36px] font-black mb-1">Premium</div>
                  <span className="text-[#dcb07b] text-[8px] font-black tracking-widest uppercase">Service Standards</span>
                </div>
              </motion.div>
            </div>

            {/* Right 4-Image Grid Block */}
            <div className="lg:w-[55%] max-w-sm lg:max-w-md xl:max-w-xl mx-auto flex gap-3 relative w-full items-center justify-end">
              {/* Left Sub-Column */}
              <div className="flex flex-col gap-3 w-1/2 h-auto justify-center mt-6">
                {/* Top Small Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-black/20"
                >
                  <img src={industrialWorkNew} alt="Industrial Exports" className="w-full h-full object-cover" />
                </motion.div>
                {/* Bottom Medium Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-black/20"
                >
                  <img src={globalLogisticsNew} alt="Logistics" className="w-full h-full object-cover" />
                </motion.div>
              </div>

              {/* Right Sub-Column */}
              <div className="flex flex-col gap-3 w-1/2 h-auto justify-center -mt-6">
                {/* Top Large Portrait Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-black/20"
                >
                  <img src={elegantFurnitureNew} alt="Luxury Decor" className="w-full h-full object-cover" />
                </motion.div>
                {/* Bottom Small Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-white/5 bg-black/20"
                >
                  <img src={premiumMarbleNew} alt="Premium Stones" className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Heritage Sections */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutIndustrial}
            alt="Industrial Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/10"></div>
        </div>
        <div className="container mx-auto px-6 max-w-full lg:max-w-[90vw]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Electrical Expertise */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50/80 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 border border-primary/5 relative overflow-hidden group w-full"
            >
              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white flex items-center justify-center mb-6 md:mb-8 border border-primary/10 shadow-sm">
                  <Zap size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6 leading-tight">Since 1968: Global Electrical Leadership</h3>
                <p className="text-base md:text-xl text-primary/80 leading-relaxed">
                  Founded in 1968, we have grown into a global leader in wire and cable solutions, now operating as an Indian MNC with a turnover exceeding INR 8,000 crore. With five state-of-the-art manufacturing units and a vast network of 30,000+ channel partners, we serve clients in over 65 countries. Our one-stop-shop approach provides comprehensive solutions for everything from residential wiring to high-voltage industrial infrastructure, powering the world with uncompromising quality.
                </p>
              </div>
            </motion.div>

            {/* Furnishing Excellence */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-14 text-white relative overflow-hidden group w-full"
            >
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-15 transition-opacity duration-700">
                <img
                  src={furnishingProduct}
                  alt="Furnishing Background"
                  className="w-full h-full object-cover grayscale mix-blend-overlay scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-transparent to-primary"></div>
              </div>

              <div className="relative z-10 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6 md:mb-8 border border-accent/30">
                  <Award size={28} className="text-accent" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight">20 Years of Furnishing Excellence</h3>
                <p className="text-base md:text-xl text-accent/70 leading-relaxed">
                  Two decades ago, we expanded our vision to include the world of interior aesthetics. For 20 years, we have curated exquisite furnishings that blend functionality with sophisticated design. Whether it’s contemporary office setups or luxury home decor, our furnishing division focuses on high-quality materials and timeless craftsmanship that transform spaces into experiences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="w-full bg-primary py-16 md:py-24 mb-16 md:mb-32 border-y border-accent/20">
        <div className="container mx-auto px-6 max-w-full lg:max-w-[90vw]">
          <div className="flex flex-col gap-16 md:gap-24 w-full">
            {/* Top Row: Mission Text + Image */}
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 lg:items-center w-full">
              <div className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent border border-accent/20">
                    <Target size={28} />
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">Our Mission</h3>
                </div>
                <p className="text-lg md:text-xl text-accent/70 leading-relaxed font-medium mb-6 md:mb-8">
                  At HVH Global, our mission is to illuminate and enhance global spaces by delivering premium electrical solutions and exquisite furnishings. We are dedicated to bridging the gap between innovation and quality, ensuring every product—from precision-engineered components to sophisticated decor—meets the highest international standards.
                </p>
                <p className="text-lg md:text-xl text-accent/70 leading-relaxed font-medium">
                  By combining superior product integrity with a seamless, client-focused service experience, we strive to be the most reliable partner in the global supply chain, empowering our customers to build and furnish with absolute confidence.
                </p>
              </div>

              {/* Mission Visual Element */}
              <div className="lg:w-1/2 w-full">
                <div className="relative aspect-video lg:aspect-[16/10] w-full group rounded-[2.5rem] overflow-hidden border border-white/10 shadow-3xl">
                  <img
                    src={globalLogisticsNew}
                    alt="HVH Global Mission"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
              </div>
            </div>

            {/* Bottom Row: 4 Feature Cards Horizontally */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
              {[
                { icon: ShieldCheck, title: "Uncompromising Quality", text: "Every component undergoes a rigorous inspection to ensure it meets international standards." },
                { icon: Truck, title: "Rapid Logistics", text: "Strategic shipping partnerships ensure your orders arrive on time and in perfect condition." },
                { icon: Headphones, title: "End-to-End Service", text: "From technical specs to design-matching, we offer dedicated support at every step." },
                { icon: Globe, title: "Global Compliance", text: "We handle international trade regulations for a smooth customs process." }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-8 rounded-[2rem] border border-white/5 shadow-inner hover:bg-accent/5 hover:border-accent/20 transition-all group/card flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover/card:scale-110 transition-transform">
                    <item.icon size={28} className="text-accent" />
                  </div>
                  <h4 className="font-bold text-white mb-3 text-lg">{item.title}</h4>
                  <p className="text-xs md:text-sm text-accent/50 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Core Values Section - Hybrid Grid */}
      <section className="mb-16 md:mb-32 overflow-hidden">
        <div className="container mx-auto px-6 max-w-full lg:max-w-[90vw]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 flex flex-col items-center lg:items-start text-center lg:text-left justify-center h-full min-h-[300px]"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                  <Eye size={28} />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Our Vision</h3>
              </div>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium mb-6">
                To become the premier global benchmark for excellence in the electrical and furnishing industries. We aim to empower international markets by setting new standards for innovation and design.
                Transforming spaces and powering progress through a seamless, world-class export network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-primary rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 text-white border border-accent/20 w-full"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-8 md:mb-10 text-accent text-center lg:text-left">Our Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {[
                  { icon: Award, title: "Quality First", text: "Every product meets the highest international benchmarks." },
                  { icon: Scale, title: "Integrity", text: "Honest communication and ethical trading with clear timelines." },
                  { icon: Leaf, title: "Sustainability", text: "Leading the way towards a carbon-neutral future using clean gas, solar energy, and advanced water treatment systems." },
                  { icon: Lightbulb, title: "Innovation", text: "Constantly evolving to meet the unique demands of your specific market." },
                  { icon: Globe, title: "Reliability", text: "A partner you can trust to deliver precisely what you need." },
                  { icon: User, title: "Client-Centric", text: "Building long-term relationships through dedicated support and tailored solutions." }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-4 group/value">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center text-accent border border-accent/30 group-hover/value:bg-accent group-hover/value:text-primary transition-all duration-300">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold mb-1 text-white text-base md:text-lg">{item.title}</h4>
                      <p className="text-xs md:text-sm text-accent/60 leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-12 md:py-24">
        <div className="container mx-auto px-6 max-w-full lg:max-w-[90vw]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-[10px] md:text-[20px] font-black text-primary tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12">Trusted by Industry Leaders Worldwide</p>

            <Link to="/accreditation" className="block relative overflow-hidden bg-white/60 backdrop-blur-md py-8 md:py-12 rounded-[2.5rem] md:rounded-[3.5rem] border-y-2 border-primary/10 border-x border-primary/5 group transition-all hover:bg-white/90 shadow-lg hover:shadow-xl">
              {/* Edge Fades */}
              <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

              <div className="animate-marquee flex whitespace-nowrap items-center gap-16 md:gap-32">
                <div className="flex items-center gap-10 md:gap-20 shrink-0 px-8">
                  {trustedCompanies.map((company, index) => (
                    <div key={`set1-${index}`} className="flex items-center gap-3 md:gap-4 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-10 md:h-16 w-auto object-contain"
                      />
                      <span className="text-xl md:text-3xl font-black tracking-tighter text-primary uppercase border-l-2 border-primary/20 pl-3 md:pl-4">{company.name}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-10 md:gap-20 shrink-0 px-8">
                  {trustedCompanies.map((company, index) => (
                    <div key={`set2-${index}`} className="flex items-center gap-3 md:gap-4 grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700">
                      <img
                        src={company.logo}
                        alt={company.name}
                        className="h-10 md:h-16 w-auto object-contain"
                      />
                      <span className="text-xl md:text-3xl font-black tracking-tighter text-primary uppercase border-l-2 border-primary/20 pl-3 md:pl-4">{company.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="bg-primary text-accent border border-accent px-6 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0 tracking-tighter uppercase">
                  View All Accreditations
                </span>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;

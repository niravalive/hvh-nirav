import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Combine } from 'lucide-react';
import { motion } from 'framer-motion';
import cablesImg from '../assets/images/electrical_hero.jpg';
import curtainsImg from '../assets/images/home_decor_hero.jpg';

const Products = () => {
  const products = [
    {
      id: 'electricals',
      title: 'Electrical Solutions',
      description: 'Granular supply of industrial cables, modular switches, and high-tech lighting systems sourced from top-tier global manufacturers.',
      image: cablesImg,
      icon: <Zap size={24} className="text-white" />,
      features: ['Industrial Grade Cables', 'Modular Smart Switches', 'Designer Lighting Systems']
    },
    {
      id: 'home-decor',
      title: 'Home Decor & Furnishing',
      description: 'Curated premium drapery, upholstery, and artisanal handicrafts. Featuring D\'Decor quality fabrics and handblock painted collections.',
      image: curtainsImg,
      icon: <Combine size={24} className="text-white" />,
      features: ['Eco-Luxe Upholstery', 'Handblock Painted Bags', 'Luxury Bath & Bedding']
    }
  ];

  return (
    <section id="products" className="py-12 lg:py-0 w-full relative overflow-hidden bg-white">
      <div className="container mx-auto px-6 lg:px-12 max-w-full lg:max-w-[90vw]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-center w-full">

          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="xl:w-2/5 flex flex-col items-center text-center xl:items-start xl:text-left"
          >
            <h2 className="text-base font-bold text-primary tracking-widest uppercase mb-4 flex items-center justify-center xl:justify-start gap-3">
              <span className="xl:hidden w-12 h-px bg-primary/30"></span>
              Our Exports
              <span className="w-12 h-px bg-primary/30"></span>
            </h2>
            <h3 className="text-4xl lg:text-6xl font-black text-gray-900 leading-tight mb-6 text-glow tracking-tight">
              Key Export Categories
            </h3>
            <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed bg-white/40 backdrop-blur-md py-4 rounded-3xl border border-white/50 shadow-sm mb-10">
              We provide top-tier industrial materials and premium furnishings, ensuring seamless global supply and uncompromising quality.
            </p>

            <Link to="/products?category=electricals" className="inline-flex items-center justify-center gap-2 text-white bg-primary hover:bg-accent hover:text-primary px-8 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg">
              View Full Catalog
            </Link>
          </motion.div>

          {/* Products Grid (Medium Sized Cards) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 }
              }
            }}
            className="xl:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-5 w-full"
          >
            {products.map((product) => (
              <motion.div
                key={product.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <Link
                  to={`/products?category=${product.id}`}
                  className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-primary/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 flex flex-col h-full hover:-translate-y-2 relative cursor-pointer block"
                >

                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-80 mix-blend-multiply"></div>

                    {/* Icon Badge */}
                    <div className="absolute top-5 left-6 w-12 h-12 rounded-full bg-[#202e35]/90 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/10">
                      {product.icon}
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-5 left-6 right-6">
                      <h4 className="text-3xl font-bold text-white mb-1 tracking-tight leading-tight">{product.title}</h4>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 flex flex-col flex-grow bg-accent">
                    <p className="text-primary/70 font-bold leading-relaxed mb-8 text-base">
                      {product.description}
                    </p>

                    <ul className="space-y-3 mb-10 mt-auto">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm font-black text-primary/70">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-primary font-black group-hover:gap-3 transition-all mt-auto w-fit text-sm">
                      View full catalog
                      <ArrowUpRight size={18} className="transition-colors group-hover:text-accent" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Products;

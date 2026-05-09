import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import ExportProcess from '../components/ExportProcess';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Each section occupies the viewport minus header height, naturally scrollable */}
      <div className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 md:py-16">
        <Hero />
      </div>
      <div className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center border-t border-primary/5 py-8 md:py-16">
        <About />
      </div>
      <div className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center bg-primary py-8 md:py-16">
        <Stats />
      </div>
      <div className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center border-y border-primary/5 py-8 md:py-16">
        <ExportProcess />
      </div>
      <div className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center py-8 md:py-16">
        <Products />
      </div>
      <div className="lg:min-h-[calc(100vh-80px)] flex flex-col justify-center border-t border-primary/5 py-8 md:py-16">
        <WhyChooseUs />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

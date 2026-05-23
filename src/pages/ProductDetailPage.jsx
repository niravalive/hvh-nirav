import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, PackageCheck, Zap, Combine, ChevronLeft, ChevronRight } from 'lucide-react';
import productsData from '../data/products';

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  const productFromId = useMemo(() => {
    return productsData.find(p => p.id === id);
  }, [id]);

  // All products in the same specific product group
  const allProducts = useMemo(() => {
    if (!productFromId) return [];
    const getBaseName = (name) => name.split(' - Variant')[0].trim();
    const targetBaseName = getBaseName(productFromId.name);
    
    return productsData.filter(p =>
      p.category === productFromId.category &&
      p.subCategory === productFromId.subCategory &&
      getBaseName(p.name) === targetBaseName
    );
  }, [productFromId]);

  const allImages = useMemo(() => allProducts.map(p => p.image), [allProducts]);

  // Deduplicated features across all products
  const allFeatures = useMemo(() =>
    [...new Set(allProducts.flatMap(p => p.features))],
    [allProducts]
  );

  // Deduplicated specs across all products
  const allSpecs = useMemo(() =>
    [...new Set(allProducts.map(p => p.specs).filter(Boolean))],
    [allProducts]
  );

  // Deduplicated descriptions
  const allDescs = useMemo(() =>
    [...new Set(allProducts.map(p => p.desc).filter(Boolean))],
    [allProducts]
  );

  // Deduplicated key points across all products
  const allKeyPoints = useMemo(() =>
    [...new Set(allProducts.flatMap(p => p.keyPoints || []))],
    [allProducts]
  );

  // Automatic slideshow
  useEffect(() => {
    if (allImages.length <= 1) return;
    const interval = setInterval(() => {
      setSelectedImageIdx((prev) => (prev + 1) % allImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [allImages.length]);

  if (!productFromId) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen">
        <h1 className="text-3xl font-bold text-primary mb-4">Product Not Found</h1>
        <Link to="/products" className="text-accent hover:underline font-black uppercase tracking-widest">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const product = productFromId;
  const mainImage = allImages[selectedImageIdx] || product.image;

  return (
    <div className="pt-35 pb-12 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-full lg:max-w-[90vw]">

        {/* Back Link */}
        <Link
          to={product.category === 'home-decor' 
            ? `/products?category=home-decor` 
            : `/products?category=${product.category}&sub=${encodeURIComponent(product.subCategory)}`
          }
          className="inline-flex items-center gap-2 text-primary/40 hover:text-primary font-black uppercase tracking-widest transition-all group pb-10"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to {product.category === 'home-decor' ? 'Home Decor' : 'Products'}
        </Link>

        {/* Main Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mb-12">

          {/* Left: Main Image & Thumbnails */}
          <div className="w-full lg:w-[55%] flex flex-col-reverse lg:flex-row gap-4 h-auto lg:h-[65vh]">
            
            {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
            {allImages.length > 1 && (
              <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto pb-2 lg:pb-0 lg:pr-2 w-full lg:w-24 shrink-0 items-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                      selectedImageIdx === idx
                        ? 'border-accent scale-105 z-10 shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <img src={img} alt={`${product.subCategory} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image */}
            <div className="flex-1 bg-primary/5 rounded-[3rem] overflow-hidden flex items-center justify-center border border-accent/10 shadow-inner relative group h-full aspect-square lg:aspect-auto">
              <img
                src={mainImage}
                alt={product.subCategory}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Navigation Buttons */}
              {allImages.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.preventDefault(); setSelectedImageIdx(prev => (prev === 0 ? allImages.length - 1 : prev - 1)); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:text-white hover:scale-110 z-10"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={24} strokeWidth={3} />
                  </button>
                  <button
                    onClick={(e) => { e.preventDefault(); setSelectedImageIdx(prev => (prev === allImages.length - 1 ? 0 : prev + 1)); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-all hover:bg-accent hover:text-white hover:scale-110 z-10"
                    aria-label="Next image"
                  >
                    <ChevronRight size={24} strokeWidth={3} />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right: Details */}
          <div className="w-full lg:w-[45%] flex flex-col pt-4">
            <div className="flex items-center gap-2 text-accent font-black uppercase tracking-[0.3em] text-xs mb-3">
              {product.category === 'electricals' ? <Zap size={14} /> : <Combine size={14} />}
              {product.category === 'electricals' ? 'Electrical Solution' : 'Home Decor & Furnishing'}
            </div>

            <h1 className="text-3xl lg:text-5xl font-black text-primary mb-4 leading-tight uppercase tracking-tighter">
              {product.name.split(' - Variant')[0].trim()}
            </h1>

            <div className="space-y-4 mb-6">
              {allDescs.map((desc, idx) => (
                <div key={idx} className="space-y-3">
                  {desc.split('\n').map((line, lineIdx, arr) => {
                    // Skip the first line if it's an uppercase title, since we already have the main H1 title above
                    if (lineIdx === 0 && arr.length > 1 && line === line.toUpperCase()) {
                      return null;
                    }

                    const colonIndex = line.indexOf(':');
                    // Check if it's a key-value style line
                    if (colonIndex !== -1 && colonIndex < 50) {
                      const key = line.substring(0, colonIndex + 1);
                      const value = line.substring(colonIndex + 1);
                      return (
                        <div key={lineIdx} className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                          <p className="text-base text-primary/70 leading-relaxed">
                            <strong className="text-primary font-black tracking-wide">{key}</strong>
                            <span className="font-medium">{value}</span>
                          </p>
                        </div>
                      );
                    }
                    return (
                      <div key={lineIdx} className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                        <p className="text-base text-primary/70 leading-relaxed font-medium">
                          {line}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            {allKeyPoints.length > 0 && (
              <div className="mb-8 bg-primary/5 p-6 rounded-2xl border border-primary/10">
                <h3 className="text-sm font-black text-primary uppercase tracking-widest mb-4">Key Highlights</h3>
                <ul className="space-y-3">
                  {allKeyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-primary/80 font-bold text-sm">
                      <Zap size={16} className="text-accent shrink-0 mt-0.5" />
                      <span className="leading-tight">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <Link
                to="/contact"
                className="px-10 py-5 bg-accent text-primary font-black rounded-2xl text-center hover:bg-primary hover:text-accent transition-all shadow-2xl shadow-accent/20 uppercase tracking-widest flex-1"
              >
                Request Official Quote
              </Link>
              <div className="px-6 py-5 bg-primary/5 text-primary/40 font-black rounded-2xl text-center flex items-center justify-center gap-3 uppercase tracking-widest text-xs border border-primary/10">
                <PackageCheck size={20} className="text-accent" /> Export Only
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specifications */}
        {allSpecs.length > 0 && (
          <div className="bg-primary p-10 rounded-[2.5rem] border border-accent/20 mb-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-16 -mt-16" />
            <h3 className="text-xs font-black text-accent uppercase tracking-widest mb-4">
              {product.category === 'home-decor' ? 'Product Details' : 'Technical Specifications'}
            </h3>
            <div className="space-y-6">
              {allSpecs.map((spec, idx) => (
                <div key={idx} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {spec.split('\n').map((line, lineIdx) => {
                    const colonIndex = line.indexOf(':');
                    if (colonIndex !== -1) {
                      const key = line.substring(0, colonIndex);
                      const value = line.substring(colonIndex + 1);
                      return (
                        <div key={lineIdx} className="bg-white/5 p-4 rounded-xl border border-accent/20 flex flex-col justify-center">
                          <span className="block text-accent text-[10px] font-black uppercase tracking-widest mb-1">{key}</span>
                          <span className="block text-white text-sm font-bold">{value.trim()}</span>
                        </div>
                      );
                    }
                    return (
                      <div key={lineIdx} className="bg-white/5 p-4 rounded-xl border border-accent/20 col-span-1 sm:col-span-2">
                        <span className="block text-white text-sm font-bold">{line}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {allFeatures.length > 0 && (
          <div className="mb-12">
            <h3 className="text-base font-black text-primary uppercase tracking-widest mb-6">Key Performance Features</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {allFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-4 text-primary/70 font-bold">
                  <CheckCircle2 size={24} className="text-accent shrink-0 mt-0.5" />
                  <span className="leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetailPage;

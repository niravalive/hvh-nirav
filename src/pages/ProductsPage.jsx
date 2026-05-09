import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams, Link, useNavigate } from 'react-router-dom';
import {
  Zap, Combine, ArrowUpRight, Search, X, SlidersHorizontal,
  Layers, Shield, Sun, ArrowLeft, Armchair, Image, Layout, AppWindow, Settings
} from 'lucide-react';
import { motion } from 'framer-motion';
import productsData from '../data/products';

// Import images for collection cards
import cl1Img from '../assets/images/Ceiling_Lights_1.png';
import bulbImg from '../assets/images/Bulb.png';
import tubeImg from '../assets/images/tubelights.png';
import lightingImg from '../assets/images/lighting.png';
import outdoorImg from '../assets/images/outdoor_lighting.png';
import handTowelImg from '../assets/images/hand_towel.png';
import bathTowelImg from '../assets/images/bath_towel.png';
import bathrobeImg from '../assets/images/bathrobe.png';
const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const categoryFilter = searchParams.get('category');
  const subFilter = searchParams.get('sub')?.replace(/\+/g, ' ');
  const subSubFilter = searchParams.get('subsub')?.replace(/\+/g, ' ');

  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');

  // Sync search query and price filter when category changes
  useEffect(() => {
    setSearchQuery('');
    setPriceFilter('all');
  }, [categoryFilter, subFilter, subSubFilter]);

  const availablePriceRanges = useMemo(() => {
    if (!categoryFilter) return [];
    let base = productsData.filter(p => p.category === categoryFilter);
    if (subFilter) {
      base = base.filter(p => p.subCategory === subFilter);
    }
    if (subSubFilter) {
      base = base.filter(p => p.subSubCategory === subSubFilter);
    }
    const ranges = base.map(p => p.priceRange);
    return [...new Set(ranges)];
  }, [categoryFilter, subFilter, subSubFilter]);

  const filteredProducts = useMemo(() => {
    if (!categoryFilter) return [];
    let products = productsData.filter(p => p.category === categoryFilter);

    if (subFilter) {
      products = products.filter(p => p.subCategory === subFilter);
    }

    if (subSubFilter) {
      products = products.filter(p => p.subSubCategory === subSubFilter);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.specs.toLowerCase().includes(q) ||
        p.features.some(f => f.toLowerCase().includes(q))
      );
    }

    // Price range filter
    if (priceFilter !== 'all') {
      products = products.filter(p => p.priceRange === priceFilter);
    }

    return products;
  }, [categoryFilter, subFilter, subSubFilter, searchQuery, priceFilter]);

  const groupedProducts = useMemo(() => {
    const groups = {};
    filteredProducts.forEach(p => {
      const baseName = p.name.split(' - Variant')[0].trim();
      if (!groups[baseName]) {
        groups[baseName] = [];
      }
      groups[baseName].push(p);
    });
    return Object.keys(groups).map(baseName => {
      const variants = groups[baseName];
      return {
        ...variants[0], // Representative
        baseName,
        variantCount: variants.length,
        variants
      };
    });
  }, [filteredProducts]);

  const handleSubSwitch = (sub) => {
    const internalSub = sub === 'Industrial & Indoor Lighting' ? 'Lighting' : sub;
    if (categoryFilter === 'electricals') {
      // Keep the sub-category step for Electricals
      setSearchParams({ category: categoryFilter, sub: internalSub });
    } else {
      // Navigate directly to combined product detail page for Home Decor
      const firstProduct = productsData.find(p =>
        p.category === categoryFilter && p.subCategory === internalSub
      );
      if (firstProduct) {
        navigate(`/product/${firstProduct.id}`);
      } else {
        setSearchParams({ category: categoryFilter, sub: internalSub });
      }
    }
  };

  const electricalSubCategories = [
    { name: 'Wire and Cable', icon: Zap, desc: 'Premium FR/FRLS house wires and heavy-duty industrial power cables.' },
    { name: 'Switch and Accessories', icon: Layers, desc: 'Elite modular switches and smart touch panels for luxury interiors.' },
    { name: 'Switchgears', icon: Shield, desc: 'Advanced circuit protection (MCB/RCCB) for global infrastructure projects.' },
    { name: 'Industrial & Indoor Lighting', icon: Sun, desc: 'Energy-efficient architectural, industrial, and outdoor LED solutions.' },
    { name: 'Cable Accessories', icon: Settings, desc: 'High-quality cable glands, lugs, and ties for secure industrial terminations.' }
  ];

  const decorSubCategories = [
    { name: 'Bedding', icon: Layers, desc: 'Royal suite linens (150-1000 TC) for a 5-star sleep experience.' },
    { name: 'CUSHION & cushion covers', icon: Layout, desc: 'Custom-designed cushion covers and premium institutional fillers.' },
    { name: 'Towels & Bathrobe', icon: Sun, desc: 'Hotel-grade towels and robes with superior absorbency and durability.' },
    { name: 'Curtains Fabrics', icon: Combine, desc: 'Hospitality-grade FR and blackout drapery for hotels and luxury homes.' },
    { name: 'SOFA & CHAIR Upholstery', icon: Layers, desc: 'Sophisticated, durable fabrics for luxury furniture and contract projects.' },
    { name: 'Carpets & Rugs', icon: Combine, desc: 'Hand-tufted and handmade rugs in premium New Zealand wool and silk.' },
    { name: 'Wallpaper & Wall Art', icon: AppWindow, desc: 'FR-grade architectural wall coverings and bespoke hand-painted decor.' },
    { name: 'FABRIC BAG', icon: Combine, desc: 'Artisanal travel bags and eco-friendly totes for international retail.' }
  ];

  const activeSubCategories = useMemo(() => {
    const base = categoryFilter === 'electricals' ? electricalSubCategories : decorSubCategories;
    return base.filter(subCat =>
      productsData.some(p => p.category === categoryFilter && (p.subCategory === subCat.name || (subCat.name === 'Industrial & Indoor Lighting' && p.subCategory === 'Lighting')))
    );
  }, [categoryFilter, electricalSubCategories, decorSubCategories]);

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 py-24 max-w-full lg:max-w-[90vw]">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          {subSubFilter ? (
            <Link
              to={`/products?category=${categoryFilter}&sub=${encodeURIComponent(subFilter)}`}
              className="inline-flex items-center gap-2 text-primary/60 hover:text-primary mb-4 font-bold transition-colors"
            >
              <ArrowLeft size={16} /> Back to {subFilter}
            </Link>
          ) : subFilter ? (
            <Link
              to={`/products?category=${categoryFilter}`}
              className="inline-flex items-center gap-2 text-primary/60 hover:text-primary mb-4 font-bold transition-colors"
            >
              <ArrowLeft size={16} /> Back to {categoryFilter.toUpperCase().replace('-', ' ')}
            </Link>
          ) : null}

          <h1 className="text-4xl lg:text-6xl font-black text-primary mb-6 uppercase tracking-tight">
            {subSubFilter ? subSubFilter :
              subFilter === 'Lighting' ? 'Industrial & Indoor Lighting' :
                subFilter ? subFilter :
                  categoryFilter === 'electricals' ? 'Electrical Solutions' :
                    categoryFilter === 'home-decor' ? 'Home Decor & Furnishing' :
                      'Global Product Catalog'}
          </h1>
          <p className="text-xl text-primary/40 leading-relaxed font-medium">
            {categoryFilter
              ? `Exploring premium ${subSubFilter || (subFilter === 'Lighting' ? 'Industrial & Indoor Lighting' : subFilter) || categoryFilter.replace('-', ' ')} for international export.`
              : 'Select a primary category to explore our curated high-end offerings.'}
          </p>
        </motion.div>

        {/* Root Categories (Only if nothing is selected) */}
        {!categoryFilter && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {productsData.some(p => p.category === 'electricals') && (
              <Link
                to="/products?category=electricals"
                className="bg-white p-12 rounded-[3.5rem] border border-accent/10 shadow-sm flex flex-col items-center text-center group hover:shadow-2xl hover:-translate-y-2 transition-all"
              >
                <div className="w-24 h-24 rounded-3xl bg-primary/5 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-accent transition-all duration-500">
                  <Zap size={48} />
                </div>
                <h3 className="text-3xl font-black text-primary mb-4 uppercase tracking-tighter">Electricals</h3>
                <p className="text-primary/50 text-lg leading-relaxed mb-8">Industrial wires, modular switches, and premium lighting solutions.</p>
                <span className="text-primary font-black uppercase tracking-widest flex items-center gap-2 group-hover:text-accent transition-colors">
                  Explore Category <ArrowUpRight size={20} />
                </span>
              </Link>
            )}

            {productsData.some(p => p.category === 'home-decor') && (
              <Link
                to="/products?category=home-decor"
                className="bg-primary p-12 rounded-[3.5rem] border border-accent/20 shadow-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-all relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="w-24 h-24 rounded-3xl bg-accent/10 flex items-center justify-center text-accent mb-8 group-hover:bg-accent group-hover:text-primary transition-all duration-500">
                  <Combine size={48} />
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter text-balance">Home Decor & Furnishing</h3>
                <p className="text-accent/60 text-lg leading-relaxed mb-8">Curtains, upholstery, rugs, and artisanal handcrafted accessories.</p>
                <span className="text-accent font-black uppercase tracking-widest flex items-center gap-2">
                  Explore Category <ArrowUpRight size={20} />
                </span>
              </Link>
            )}
          </div>
        )}

        {categoryFilter && !subFilter && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {activeSubCategories.map((sc) => {
              const bgImg = productsData.find(p =>
                p.subCategory === sc.name ||
                (sc.name === 'Industrial & Indoor Lighting' && p.subCategory === 'Lighting')
              )?.image;
              return (
                <button
                  key={sc.name}
                  onClick={() => handleSubSwitch(sc.name)}
                  className={`relative overflow-hidden p-8 rounded-3xl border border-accent/10 hover:border-accent hover:shadow-2xl transition-all text-center flex flex-col items-center justify-center group aspect-[3/2] ${!bgImg ? 'bg-primary' : 'bg-primary/5'}`}
                >
                  {bgImg && (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${bgImg})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40 group-hover:from-black/90 group-hover:via-black/60 transition-colors duration-500" />
                    </>
                  )}
                  <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-accent group-hover:text-primary transition-colors shadow-sm">
                      <sc.icon size={28} />
                    </div>
                    <h4 className="text-xl font-bold text-white px-2">{sc.name}</h4>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Lighting Sub-Sub Categories Overview (Special Landing for Lighting) */}
        {categoryFilter === 'electricals' && subFilter === 'Lighting' && !subSubFilter && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: 'Ceiling Light',
                title: 'Ceiling Light',
                desc: 'Premium recessed panel and spot lights with anti-glare technology.',
                image: productsData.find(p => p.subSubCategory === 'Ceiling Light')?.image
              },
              {
                name: 'Tubelights & Bulbs',
                title: 'Tubelights & Bulbs',
                desc: 'Energy-saving LED tubelights and architectural bulbs for consistent illumination.',
                image: productsData.find(p => p.subSubCategory === 'Tubelights & Bulbs')?.image
              },
              {
                name: 'Decorative Lighting',
                title: 'Decorative Lighting',
                desc: 'RGB strips, COB chips, and designer lighting for luxury interiors and accentuation.',
                image: productsData.find(p => p.subSubCategory === 'Decorative Lighting')?.image
              },
              {
                name: 'Outdoor Lighting',
                title: 'Outdoor Lighting',
                desc: 'High-performance architectural outdoor lighting for facades, stadiums, and landscape.',
                image: productsData.find(p => p.subSubCategory === 'Outdoor Lighting')?.image
              }
            ].map((col) => (
              <motion.button
                key={col.name}
                whileHover={{ y: -10 }}
                onClick={() => setSearchParams({ category: 'electricals', sub: 'Lighting', subsub: col.name })}
                className="bg-white rounded-[2.5rem] border border-accent/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all group text-left"
              >
                <div className="aspect-[4/5] overflow-hidden relative bg-primary/5">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-primary text-accent px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-accent/20">
                      Lighting
                    </span>
                  </div>
                </div>
                <div className="p-8 text-center group-hover:bg-primary transition-colors duration-500">
                  <h3 className="text-xl font-black text-primary group-hover:text-white transition-colors uppercase tracking-tight mb-3 line-clamp-2">
                    {col.title}
                  </h3>
                  <p className="text-primary/40 group-hover:text-accent/60 transition-colors text-sm font-bold mb-6 line-clamp-2">
                    {col.desc}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-accent font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                    Explore Collection <ArrowUpRight size={14} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        )}


        {/* Product Grid & Filters (If a specific sub-category or sub-sub-category list is active) */}
        {categoryFilter && subFilter && (subFilter !== 'Lighting' || subSubFilter) && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl border border-accent/10 p-6 mb-12 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row items-center gap-6">
                {/* Search */}
                <div className="relative flex-1 w-full">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/20" />
                  <input
                    type="text"
                    placeholder={`Search in ${subFilter || categoryFilter.replace('-', ' ')}...`}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-10 py-4 rounded-2xl bg-primary/5 border border-transparent focus:bg-white focus:border-accent outline-none transition-all font-bold text-primary"
                  />
                  {searchQuery && <X size={18} className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-primary/40" onClick={() => setSearchQuery('')} />}
                </div>

                {/* Sub Pill Selector */}
                <div className="flex flex-wrap gap-2 justify-center max-w-md">
                  {activeSubCategories.slice(0, 4).map(sc => (
                    <button
                      key={sc.name}
                      onClick={() => handleSubSwitch(sc.name)}
                      className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-tight transition-all ${subFilter === sc.name ? 'bg-primary text-accent' : 'bg-primary/5 text-primary/40 hover:bg-primary/10'
                        }`}
                    >
                      {sc.name.split(' ')[0]}
                    </button>
                  ))}
                </div>

                {/* Price Select */}
                <div className="flex items-center gap-3 w-full lg:w-auto">
                  <SlidersHorizontal size={18} className="text-primary/20" />
                  <select
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}
                    className="bg-primary/5 border-none text-primary font-bold rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-accent cursor-pointer flex-1 lg:flex-none"
                  >
                    <option value="all">All Pricing</option>
                    {availablePriceRanges.map(range => <option key={range} value={range}>{range}</option>)}
                  </select>
                </div>
              </div>
            </motion.div>

            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-primary uppercase tracking-tighter">
                {subSubFilter || (subFilter === 'Lighting' ? 'Industrial & Indoor Lighting' : subFilter) || categoryFilter} Collection
              </h2>
              <span className="text-primary/40 font-bold">{filteredProducts.length} Products</span>
            </div>

            {groupedProducts.length === 0 ? (
              <div className="py-24 text-center">
                <Search size={64} className="mx-auto text-primary/5 mb-6" />
                <h3 className="text-2xl font-black text-primary uppercase">No Results Found</h3>
                <p className="text-primary/40 font-medium">Try broadening your search or selection.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {groupedProducts.map((group) => {
                  const directId = group.variants[0].id;
                  const images = group.variants.map(v => v.image).slice(0, 4);
                  const isMulti = images.length > 1;
                  return (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <Link to={`/product/${directId}`} className="block bg-white rounded-[2.5rem] border border-accent/10 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="aspect-[4/5] overflow-hidden relative bg-primary/5">
                          {isMulti ? (
                            <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-0.5">
                              {images.map((img, idx) => (
                                <div key={idx} className="overflow-hidden relative">
                                  <img
                                    src={img}
                                    alt={`${group.baseName} ${idx + 1}`}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                                  />
                                </div>
                              ))}
                            </div>
                          ) : (
                            <img
                              src={group.image}
                              alt={group.baseName}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                          )}
                          <div className="absolute top-6 left-6 flex flex-col gap-2">
                            <span className="bg-primary text-accent px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-accent/20">
                              {group.subCategory}
                            </span>
                          </div>
                        </div>
                        <div className="p-8 text-center group-hover:bg-primary transition-colors duration-500">
                          <h3 className="text-xl font-black text-primary group-hover:text-white transition-colors uppercase tracking-tight mb-3 line-clamp-2">
                            {group.baseName}
                          </h3>
                          <p className="text-primary/40 group-hover:text-accent/60 transition-colors text-sm font-bold mb-6 line-clamp-2">
                            {group.desc}
                          </p>
                          <div className="flex items-center justify-center gap-2 text-accent font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                            View Product <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Logo from '../data/Logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSub, setActiveMobileSub] = useState(null); // Level 2
  const [activeMobileSubSub, setActiveMobileSubSub] = useState(null); // Level 3
  const location = useLocation();

  const isLinkActive = (href) => {
    if (!href) return false;
    const currentPath = location.pathname + location.search;

    // Special case for home
    if (href === '/') return currentPath === '/';

    // Handle product categories (match exactly or as prefix for deeper subcategories)
    if (href.includes('?')) {
      const decodedCurrent = decodeURIComponent(currentPath);
      const decodedHref = decodeURIComponent(href);
      return decodedCurrent === decodedHref || decodedCurrent.startsWith(decodedHref + '&');
    }

    // Simple path match
    return location.pathname === href;
  };

  const isParentActive = (link) => {
    if (isLinkActive(link.href)) return true;
    if (link.dropdown) {
      return link.dropdown.some(dropItem => {
        if (isLinkActive(dropItem.href)) return true;
        if (dropItem.subDropdown) {
          return dropItem.subDropdown.some(subSubItem => isLinkActive(subSubItem.href));
        }
        return false;
      });
    }
    return false;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT US', href: '/about' },
    {
      name: 'PRODUCTS',
      hoverOnly: true, // desktop: no navigation, hover to reveal dropdown
      dropdown: [
        {
          name: 'ELECTRICALS',
          href: '/products?category=electricals'
        },
        {
          name: 'HOME DECOR & FURNISHING',
          href: '/products?category=home-decor'
        }
      ]
    },
    { name: 'CONTACT', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-accent/10 shadow-2xl ${isScrolled ? 'py-3 bg-primary/60 backdrop-blur-xl' : 'py-5 bg-primary'}`}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between max-w-full lg:max-w-[90vw]">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-4 group">
          <img
            src={Logo}
            alt="HVH Global Logo"
            className="h-12 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-black text-white leading-none tracking-tight group-hover:text-accent transition-colors">
              HVH Global
            </span>
            <span className="text-[10px] md:text-xs font-bold text-accent tracking-[0.15em] mt-1 whitespace-nowrap hidden sm:block">
              Trade Beyond Boundaries
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group flex items-center h-full">
              {link.dropdown ? (
                link.hoverOnly ? (
                  <span
                    className={`text-base font-bold transition-colors hover:text-accent py-6 flex items-center gap-1 cursor-default select-none ${isParentActive(link) ? 'text-accent' : 'text-white'}`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </span>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-base font-bold transition-colors hover:text-accent py-6 flex items-center gap-1 cursor-pointer ${isParentActive(link) ? 'text-accent' : 'text-white'}`}
                  >
                    {link.name}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
                  </Link>
                )
              ) : (
                <Link
                  to={link.href}
                  className={`text-base font-bold transition-colors hover:text-accent py-6 flex items-center gap-1 ${isParentActive(link) ? 'text-accent' : 'text-white'}`}
                >
                  {link.name}
                </Link>
              )}

              {/* Level 2 Dropdown */}
              {link.dropdown && (
                <div className="absolute top-full left-0 w-64 bg-primary rounded-2xl shadow-2xl shadow-black/50 border border-accent/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0 flex flex-col z-50 overflow-visible">
                  <div className="h-2 w-full bg-transparent absolute -top-2 left-0"></div> {/* Hover bridge */}
                  {link.dropdown.map((dropItem, index) => (
                    <div key={dropItem.name} className="relative group/sub flex flex-col">
                      <Link
                        to={dropItem.href}
                        className={`px-6 py-4 text-base font-bold transition-all border-b border-accent/5 last:border-none flex items-center justify-between ${index === 0 ? 'rounded-t-2xl' : ''} ${index === link.dropdown.length - 1 ? 'rounded-b-2xl' : ''} ${isLinkActive(dropItem.href) || dropItem.subDropdown?.some(si => isLinkActive(si.href)) ? 'bg-accent text-primary' : 'text-white/80 hover:bg-accent hover:text-primary'}`}
                      >
                        {dropItem.name}
                        {dropItem.subDropdown && <ChevronRight size={14} />}
                      </Link>

                      {/* Level 3 Dropdown (Appears to the side) */}
                      {dropItem.subDropdown && (
                        <div className="absolute left-full top-0 ml-1 w-64 bg-primary rounded-2xl shadow-2xl border border-accent/10 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 transform translate-x-2 group-hover/sub:translate-x-0 flex flex-col overflow-hidden">
                          {dropItem.subDropdown.map((subSubItem, sIndex) => (
                            <Link
                              key={subSubItem.name}
                              to={subSubItem.href}
                              className={`px-6 py-4 text-sm font-bold transition-all border-b border-accent/5 last:border-none shadow-inner ${sIndex === 0 ? 'rounded-t-2xl' : ''} ${sIndex === dropItem.subDropdown.length - 1 ? 'rounded-b-2xl' : ''} ${isLinkActive(subSubItem.href) ? 'bg-accent text-primary' : 'text-white/80 hover:bg-accent hover:text-primary'}`}
                            >
                              {subSubItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-accent text-primary text-base font-black hover:bg-white transition-all shadow-xl hover:shadow-accent/20 uppercase tracking-tighter"
          >
            Get a Quote
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-primary border-t border-accent/10 shadow-2xl py-6 px-8 flex flex-col gap-6 animate-fade-in-up max-h-[80vh] overflow-y-auto">
          {navLinks.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.dropdown ? (
                <div className="flex justify-between items-center py-2 border-b border-accent/5">
                  {link.hoverOnly ? (
                    <span
                      className={`font-black flex-grow text-lg uppercase tracking-tight ${isParentActive(link) ? 'text-accent' : 'text-white'}`}
                    >
                      {link.name}
                    </span>
                  ) : (
                    <Link
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-black flex-grow text-lg uppercase tracking-tight ${isParentActive(link) ? 'text-accent' : 'text-white hover:text-accent'}`}
                    >
                      {link.name}
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      const isOpening = activeMobileSub !== link.name;
                      setActiveMobileSub(isOpening ? link.name : null);
                      setActiveMobileSubSub(null);
                    }}
                    className="p-2 text-accent"
                  >
                    <ChevronDown size={20} className={`${activeMobileSub === link.name ? 'rotate-180' : ''} transition-transform`} />
                  </button>
                </div>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-black py-2 uppercase tracking-tight border-b border-accent/5 ${isParentActive(link) ? 'text-accent' : 'text-white hover:text-accent'}`}
                >
                  {link.name}
                </Link>
              )}

              {/* Level 2 (Mobile Accordion) */}
              {link.dropdown && activeMobileSub === link.name && (
                <div className="flex flex-col pl-4 mt-2 gap-3 transition-all">
                  {link.dropdown.map(dropItem => (
                    <div key={dropItem.name} className="flex flex-col">
                      <div className="flex justify-between items-center py-1">
                        <Link
                          to={dropItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`font-bold ${isLinkActive(dropItem.href) || dropItem.subDropdown?.some(si => isLinkActive(si.href)) ? 'text-accent' : 'text-white/60 hover:text-accent'}`}
                        >
                          {dropItem.name}
                        </Link>
                        {dropItem.subDropdown && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMobileSubSub(activeMobileSubSub === dropItem.name ? null : dropItem.name);
                            }}
                            className="p-1 text-accent"
                          >
                            <ChevronDown size={16} className={`${activeMobileSubSub === dropItem.name ? 'rotate-180' : ''} transition-transform`} />
                          </button>
                        )}
                      </div>

                      {/* Level 3 (Mobile Sub-Accordion) */}
                      {dropItem.subDropdown && activeMobileSubSub === dropItem.name && (
                        <div className="flex flex-col pl-4 border-l border-accent/20 mt-2 mb-2 gap-2">
                          {dropItem.subDropdown.map(subItem => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`text-sm py-1 font-bold ${isLinkActive(subItem.href) ? 'text-accent' : 'text-white/40 hover:text-accent'}`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;

import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ContactFAB from './components/ContactFAB'
import ScrollToTop from './components/ScrollToTop'
import ParticlesBackground from './components/ParticlesBackground'

import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import AccreditationPage from './pages/AccreditationPage'

const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full min-h-screen relative z-10"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><AboutPage /></PageWrapper>} />
        <Route path="/products" element={<PageWrapper><ProductsPage /></PageWrapper>} />
        <Route path="/product/:id" element={<PageWrapper><ProductDetailPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/accreditation" element={<PageWrapper><AccreditationPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function AppContent() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen bg-transparent relative">
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-[20px]">
        <AnimatedRoutes />
      </main>
      {!isHomePage && (
        <div className="relative z-10 w-full overflow-hidden">
          <Footer />
        </div>
      )}
      <ContactFAB />
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  )
}

export default App

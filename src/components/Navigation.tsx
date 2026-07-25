import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Capabilities', href: '#capabilities' },
  { name: 'Products', href: '#products' },
  { name: 'Facilities', href: '#facilities' },
  { name: 'Quality', href: '#quality' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.getElementById('home');
      if (heroElement) {
        const heroHeight = heroElement.offsetHeight;
        setIsScrolled(window.scrollY >= heroHeight - 80);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md ${
        isScrolled
          ? 'bg-white/80 border-b border-neutral-200/80 shadow-md py-3.5'
          : 'bg-black/30 border-b border-white/10 py-5 shadow-lg shadow-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="Minerax Logo"
            className={`h-14 md:h-16 w-auto object-contain transition-all duration-300 ${
              isScrolled ? 'mix-blend-multiply' : 'invert mix-blend-screen'
            }`}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-orange-500 ${
                isScrolled ? 'text-neutral-700' : 'text-white/90 hover:text-orange-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-semibold text-sm transition-all shadow-lg shadow-orange-600/30 backdrop-blur-sm border border-orange-400/30"
          >
            Request a Quote
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-neutral-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-neutral-100/80 p-6 flex flex-col gap-4 lg:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-semibold text-neutral-800 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-orange-600 text-white px-6 py-3 rounded-md font-semibold text-center mt-4 shadow-lg shadow-orange-600/30"
            >
              Request a Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

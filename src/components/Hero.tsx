import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/assets/foundry_furnace.jpg',
    tagline: 'PRECISION METAL CASTING',
    title: 'Precision Casting.',
    highlight: 'Enduring Strength.',
    description:
      'Minerax delivers enterprise-grade steel foundry solutions engineered for high-stress industrial applications worldwide.',
    primaryCta: 'Explore Capabilities',
    primaryLink: '#capabilities',
  },
  {
    id: 2,
    image: '/assets/heavy_machinery.jpg',
    tagline: 'ADVANCED HEAVY ENGINEERING',
    title: 'Heavy Machinery.',
    highlight: 'Unmatched Durability.',
    description:
      'Custom-designed heavy components manufactured with micro-grain accuracy and rigorous metallurgic integrity.',
    primaryCta: 'View Facilities',
    primaryLink: '#facilities',
  },
  {
    id: 3,
    image: '/assets/steel_components.jpg',
    tagline: 'HIGH-CAPACITY PRODUCTION',
    title: 'Forged for Extreme.',
    highlight: 'Built for Reliability.',
    description:
      'State-of-the-art automated melting, pouring, and heat-treatment facilities operating at global quality standards.',
    primaryCta: 'Quality Assurance',
    primaryLink: '#quality',
  },
  {
    id: 4,
    image: '/assets/factory_facility.jpg',
    tagline: 'WORLD-CLASS FACILITY',
    title: 'Global Manufacturing.',
    highlight: 'Next-Gen Technology.',
    description:
      'End-to-end casting, precision machining, and nondestructive testing under one integrated production infrastructure.',
    primaryCta: 'Request a Quote',
    primaryLink: '#contact',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Preload slideshow images for instant transitions
    slides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section id="home" className="relative h-screen min-h-[650px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image Slideshow with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 0.45, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 z-0 bg-center bg-cover bg-no-repeat"
          style={{ backgroundImage: `url("${slide.image}")` }}
        />
      </AnimatePresence>

      {/* Gradient Overlay for Vignette and Text Readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-black/40 to-black/70 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start mt-16 md:mt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-white text-xs font-bold tracking-widest uppercase">
                {slide.tagline}
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              {slide.title}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-neutral-300 font-medium mb-10 max-w-2xl leading-relaxed">
              {slide.description}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={slide.primaryLink}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold text-lg transition-all shadow-lg shadow-orange-600/30 group"
              >
                {slide.primaryCta}
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-md font-bold text-lg border border-white/30 backdrop-blur-sm transition-colors"
              >
                Contact Engineering
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrow Controls */}
      <div className="absolute z-20 bottom-10 right-6 md:right-12 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* Slide Indicators Dots */}
      <div className="absolute z-20 bottom-10 left-6 md:left-12 flex items-center gap-2.5">
        {slides.map((s, idx) => (
          <button
            key={s.id}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-500 ${
              idx === currentSlide ? 'w-8 bg-orange-500' : 'w-2.5 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

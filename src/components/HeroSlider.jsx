import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Empowering Through Service',
    subtitle: 'Building communities, transforming lives',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1600&q=80',
  },
  {
    title: 'Making a Difference',
    subtitle: 'Join us in creating positive change',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1600&q=80',
  },
  {
    title: 'Community First',
    subtitle: 'Together we can achieve more',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1600&q=80',
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div
      className="relative h-[600px] md:h-[700px] overflow-hidden bg-secondary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-nss-red/90 via-nss-slate/80 to-nss-slate/90" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-3xl text-white"
                >
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="inline-block mb-6 px-4 py-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full"
                  >
                    <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                      NSS IET DAVV
                    </span>
                  </motion.div>
                  <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    {slides[current].title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-10 text-white/90 font-light leading-relaxed">
                    {slides[current].subtitle}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button size="lg" variant="accent" className="text-base">
                      Get Involved
                    </Button>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-nss-slate text-base">
                      Learn More
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === current ? 'w-12 bg-accent shadow-accent' : 'w-1.5 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

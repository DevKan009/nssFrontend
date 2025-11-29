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
      className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-secondary"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <img
              src={slides[current].image}
              alt={slides[current].title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-nss-red/95 via-nss-purple/90 to-nss-slate/95" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,193,7,0.15),transparent_50%)]" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 md:px-8 lg:px-16">
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="max-w-4xl text-white"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6, type: "spring", bounce: 0.4 }}
                    className="inline-block mb-8 px-6 py-3 glass-effect rounded-full"
                  >
                    <span className="text-accent font-bold text-base uppercase tracking-widest">
                      ✨ NSS IET DAVV
                    </span>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-[0.95] drop-shadow-2xl"
                  >
                    {slides[current].title}
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-xl md:text-3xl mb-12 text-white/95 font-medium leading-relaxed drop-shadow-lg"
                  >
                    {slides[current].subtitle}
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex flex-wrap gap-5"
                  >
                    <Button size="lg" variant="accent" className="text-base shadow-2xl">
                      Get Involved
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-nss-slate text-base backdrop-blur-sm bg-white/10">
                      Learn More
                    </Button>
                  </motion.div>
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
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/30 glass-effect hover:scale-110 transition-all h-14 w-14 rounded-full"
        onClick={prev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white hover:bg-white/30 glass-effect hover:scale-110 transition-all h-14 w-14 rounded-full"
        onClick={next}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-3 glass-effect px-4 py-3 rounded-full">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all duration-500 ${
              index === current ? 'w-16 bg-accent shadow-glow' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;

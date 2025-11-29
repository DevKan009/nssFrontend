import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Messages', href: '/messages' },
    { name: 'About', href: '/about' },
    { name: 'Downloads', href: '/downloads' },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass-effect shadow-lg">
      <nav className="container mx-auto flex h-24 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-3 rounded-2xl bg-gradient-primary shadow-lg shadow-primary/50 group-hover:shadow-xl group-hover:shadow-primary/70 group-hover:scale-110 transition-all duration-300">
            <span className="text-primary-foreground font-heading font-extrabold text-2xl">NSS</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-extrabold text-2xl bg-gradient-to-r from-primary via-nss-purple to-accent bg-clip-text text-transparent">
              NSS IET DAVV
            </div>
            <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">National Service Scheme</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-5 py-2.5 text-sm font-bold rounded-2xl transition-all duration-300 uppercase tracking-wide ${
                isActive(item.href)
                  ? 'text-primary bg-primary/15 shadow-md'
                  : 'text-foreground hover:text-primary hover:bg-accent/15 hover:scale-105'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <motion.span 
                  layoutId="activeNav"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-primary rounded-full"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                ></motion.span>
              )}
            </Link>
          ))}
          <Button variant="default" size="sm" className="ml-6">
            Join Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-2xl hover:bg-accent/15 hover:scale-110 transition-all"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-t border-border/40 glass-effect shadow-2xl"
        >
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-5 py-4 text-base font-bold transition-all duration-300 rounded-2xl uppercase tracking-wide ${
                  isActive(item.href)
                    ? 'bg-gradient-primary text-primary-foreground shadow-lg shadow-primary/50'
                    : 'text-foreground hover:bg-accent/15 hover:text-primary hover:scale-105'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="default" size="sm" className="w-full">
                Join Us
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="p-2 rounded-xl bg-gradient-primary shadow-lg group-hover:shadow-primary transition-all">
            <span className="text-primary-foreground font-heading font-bold text-xl">NSS</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-heading font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              NSS IET DAVV
            </div>
            <div className="text-xs text-muted-foreground font-medium">National Service Scheme</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 ${
                isActive(item.href)
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground hover:text-primary hover:bg-accent/10'
              }`}
            >
              {item.name}
              {isActive(item.href) && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full"></span>
              )}
            </Link>
          ))}
          <Button variant="default" size="sm" className="ml-4">
            Join Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-xl hover:bg-accent/10"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 text-primary" /> : <Menu className="h-6 w-6 text-primary" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl shadow-lg">
          <div className="container mx-auto px-4 py-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 text-base font-semibold transition-all duration-300 rounded-xl ${
                  isActive(item.href)
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'text-foreground hover:bg-accent/10 hover:text-primary'
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
        </div>
      )}
    </header>
  );
};

export default Header;

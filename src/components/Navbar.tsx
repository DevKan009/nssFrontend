import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Events", path: "/events" },
        { name: "Team", path: "/team" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-nss-navy/80 backdrop-blur-md border-white/10 py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-nss-blue/50 group-hover:border-nss-gold/50 transition-colors">
                        <img
                            src="/placeholder.svg"
                            alt="NSS Logo"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xl font-bold font-heading leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 group-hover:from-nss-blue group-hover:to-nss-gold transition-all duration-300">
                            NSS IET DAVV
                        </span>
                        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                            Not Me But You
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={cn(
                                "relative text-sm font-medium transition-colors hover:text-nss-blue",
                                location.pathname === link.path
                                    ? "text-nss-blue"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.name}
                            {location.pathname === link.path && (
                                <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-nss-blue rounded-full animate-fade-in" />
                            )}
                        </Link>
                    ))}
                    <Button
                        variant="default"
                        size="sm"
                        className="bg-nss-blue hover:bg-nss-blue/90 text-white shadow-lg shadow-nss-blue/20 rounded-full px-6"
                    >
                        Join NSS <Heart className="w-4 h-4 ml-2 fill-current" />
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white hover:text-nss-blue transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-nss-navy/95 backdrop-blur-xl border-b border-white/10 animate-accordion-down">
                    <div className="container mx-auto px-6 py-8 flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={cn(
                                    "text-lg font-medium transition-colors",
                                    location.pathname === link.path
                                        ? "text-nss-blue"
                                        : "text-muted-foreground hover:text-white"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button className="w-full bg-nss-blue hover:bg-nss-blue/90 text-white rounded-full">
                            Join NSS
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

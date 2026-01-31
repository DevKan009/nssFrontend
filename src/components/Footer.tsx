import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-nss-navy border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full border border-nss-blue/50 overflow-hidden">
                                <img src="/placeholder.svg" alt="NSS Logo" className="w-full h-full object-cover" />
                            </div>
                            <h3 className="text-xl font-bold font-heading text-white">NSS IET DAVV</h3>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Empowering youth to serve the nation. "Not Me But You" reflects the essence of democratic living and upholds the need for self-less service.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-muted-foreground hover:bg-nss-blue hover:text-white transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <ul className="space-y-2">
                            {["About Us", "Our Team", "Events", "Gallery", "Contact Us"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-muted-foreground hover:text-nss-blue transition-colors text-sm"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-sm text-muted-foreground">
                                <MapPin size={18} className="text-nss-blue mt-0.5 shrink-0" />
                                <span>IET DAVV Campus, Khandwa Road, Indore, Madhya Pradesh 452017</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Phone size={18} className="text-nss-blue shrink-0" />
                                <span>+91 123 456 7890</span>
                            </li>
                            <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                <Mail size={18} className="text-nss-blue shrink-0" />
                                <span>nss@ietdavv.edu.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white">Stay Updated</h4>
                        <p className="text-sm text-muted-foreground">
                            Subscribe to our newsletter for the latest updates and events.
                        </p>
                        <div className="flex flex-col gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white/5 border-white/10 text-white placeholder:text-muted-foreground focus:border-nss-blue"
                            />
                            <Button className="w-full bg-nss-blue hover:bg-nss-blue/90 text-white">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {currentYear} NSS IET DAVV. All rights reserved.
                    </p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Made with <Heart size={14} className="fill-red-500 text-red-500 animate-pulse" /> by NSS Tech Team
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

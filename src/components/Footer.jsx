import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-nss-slate text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-gradient-primary shadow-lg shadow-primary/30">
                <span className="text-white font-heading font-black text-xl">NSS</span>
              </div>
              <span className="font-heading font-bold text-2xl tracking-tight">IET DAVV</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              "Not Me, But You". Fostering social responsibility and community service among students since inception.
            </p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={Instagram} label="Instagram" color="hover:bg-pink-600" />
              <SocialLink href="#" icon={Twitter} label="Twitter" color="hover:bg-blue-400" />
              <SocialLink href="#" icon={Linkedin} label="LinkedIn" color="hover:bg-blue-700" />
              <SocialLink href="#" icon={Facebook} label="Facebook" color="hover:bg-blue-600" />
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-accent rounded-full"></span> Quick Links
            </h3>
            <ul className="space-y-4">
              <FooterLink to="/events">Events & Activities</FooterLink>
              <FooterLink to="/team">Our Team</FooterLink>
              <FooterLink to="/gallery">Photo Gallery</FooterLink>
              <FooterLink to="/downloads">Resources</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-primary rounded-full"></span> Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:nss@ietdavv.edu.in" className="flex items-center group text-white/80 hover:text-white transition-colors">
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 mr-3 transition-colors">
                    <Mail className="w-4 h-4" />
                  </span>
                  nss@ietdavv.edu.in
                </a>
              </li>
              <li>
                <a href="tel:+911234567890" className="flex items-center group text-white/80 hover:text-white transition-colors">
                  <span className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/20 mr-3 transition-colors">
                    <Phone className="w-4 h-4" />
                  </span>
                  +91 123 456 7890
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
            <h3 className="font-heading font-bold text-lg mb-2">Join Our Newsletter</h3>
            <p className="text-sm text-white/60 mb-4">Get updates on upcoming events.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/10 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-2 focus:ring-primary outline-none placeholder:text-white/30"
              />
              <button className="bg-primary hover:bg-primary/90 text-white rounded-lg px-3 py-2 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>© {new Date().getFullYear()} NSS IET DAVV. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon: Icon, label, color }) => (
  <a 
    href={href} 
    aria-label={label}
    className={`p-2.5 rounded-xl bg-white/5 text-white/80 hover:text-white hover:scale-110 transition-all duration-300 ${color}`}
  >
    <Icon className="w-5 h-5" />
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-white/70 hover:text-accent transition-all hover:pl-2 inline-block"
    >
      {children}
    </Link>
  </li>
);

// Import ArrowRight as it's used in the newsletter section
import { ArrowRight } from 'lucide-react';

export default Footer;

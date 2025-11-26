import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-secondary text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 rounded-xl bg-gradient-primary shadow-lg">
                <span className="font-heading text-xl font-black text-white">NSS</span>
              </div>
              <span className="font-heading text-2xl font-bold text-white">
                IET DAVV
              </span>
            </div>
            <p className="text-sm text-secondary-foreground/70 leading-relaxed mb-4">
              Empowering communities through service and dedication. Building a better tomorrow, together.
            </p>
            <div className="flex items-start space-x-2 text-xs text-secondary-foreground/60">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span>IET DAVV, Khandwa Road, Indore, MP</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/about" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2"></span>
                  Events
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2"></span>
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2"></span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="text-secondary-foreground/70 hover:text-accent transition-colors flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-accent transition-all mr-0 group-hover:mr-2"></span>
                  Downloads
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white">Connect With Us</h4>
            <div className="flex gap-3 mb-6">
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a href="mailto:nss@ietdavv.edu.in" className="p-3 rounded-xl bg-white/5 hover:bg-accent hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent">
                <Mail className="h-5 w-5 text-white" />
              </a>
            </div>
            <p className="text-xs text-secondary-foreground/50 flex items-center">
              <Mail className="h-3 w-3 mr-2" />
              nss@ietdavv.edu.in
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-secondary-foreground/50">
            &copy; {new Date().getFullYear()} NSS IET DAVV. All rights reserved.
          </p>
          <p className="text-xs text-secondary-foreground/40">
            Made with ❤️ by NSS IET DAVV Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

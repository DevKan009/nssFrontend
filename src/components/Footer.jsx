import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-nss-slate via-nss-slate-light to-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-2xl bg-gradient-primary shadow-xl shadow-primary/50">
                <span className="text-primary-foreground font-heading font-extrabold text-2xl">NSS</span>
              </div>
              <div>
                <div className="font-heading font-extrabold text-2xl text-white">NSS IET DAVV</div>
                <div className="text-xs text-accent font-bold uppercase tracking-wider">National Service Scheme</div>
              </div>
            </div>
            <p className="text-base text-white/90 leading-relaxed font-medium mb-4">
              Committed to developing students' personality through community service and creating positive social change.
            </p>
            <div className="inline-block px-4 py-2 glass-effect rounded-xl">
              <p className="text-sm font-bold text-white">"Not Me, But You"</p>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-2xl mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {['Events', 'Team', 'Gallery', 'About', 'Downloads'].map((link) => (
                <li key={link}>
                  <Link
                    to={`/${link.toLowerCase()}`}
                    className="text-base font-bold text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2 inline-flex items-center group"
                  >
                    <span className="w-2 h-2 rounded-full bg-accent mr-3 group-hover:scale-150 transition-transform"></span>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-extrabold text-2xl mb-6 text-white">Connect With Us</h3>
            <div className="space-y-4 mb-6">
              <a
                href="mailto:nss@ietdavv.edu.in"
                className="flex items-center space-x-3 text-base font-bold text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="p-2 rounded-xl bg-white/10 group-hover:bg-accent/20 transition-colors">
                  <Mail className="h-5 w-5" />
                </div>
                <span>nss@ietdavv.edu.in</span>
              </a>
              <a
                href="tel:+911234567890"
                className="flex items-center space-x-3 text-base font-bold text-white/90 hover:text-accent transition-all duration-300 hover:translate-x-2 group"
              >
                <div className="p-2 rounded-xl bg-white/10 group-hover:bg-accent/20 transition-colors">
                  <Phone className="h-5 w-5" />
                </div>
                <span>+91 123 456 7890</span>
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="#" className="p-3 rounded-2xl glass-effect hover:bg-gradient-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 rounded-2xl glass-effect hover:bg-gradient-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 rounded-2xl glass-effect hover:bg-gradient-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="Instagram">
                <Instagram className="h-6 w-6 text-white" />
              </a>
              <a href="#" className="p-3 rounded-2xl glass-effect hover:bg-gradient-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-base font-bold text-white/80">
            © {new Date().getFullYear()} NSS IET DAVV. All rights reserved.
          </p>
          <div className="flex space-x-8 text-base font-bold">
            <a href="#" className="text-white/80 hover:text-accent transition-colors hover:scale-110 inline-block">
              Privacy Policy
            </a>
            <a href="#" className="text-white/80 hover:text-accent transition-colors hover:scale-110 inline-block">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

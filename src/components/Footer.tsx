import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container-narrow mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h3 className="font-heading text-xl font-bold mb-4">
            Eddie's <span className="text-primary">Travel</span>
          </h3>
          <p className="text-background/70 text-sm italic font-heading leading-relaxed">
            "Threading through Scotland's heart, weaving memories everlast"
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
            Explore
          </h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/curated-tours" className="hover:text-primary transition-colors">Curated Tours</Link></li>
            <li><Link to="/bespoke-tours" className="hover:text-primary transition-colors">Bespoke Tours</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">About Eddie</Link></li>
            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-background/80">
            Get in Touch
          </h4>
          <p className="text-sm text-background/70 mb-1">info@eddiestravel.co.uk</p>
          <p className="text-sm text-background/70 mb-1">07412 598775</p>
          <p className="text-sm text-background/70 mb-4">1-3 Waterloo Place, Edinburgh, EH1 3BG</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/p/Eddies-travel-Edin-limited-61553006424412/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-background/60 hover:text-primary transition-colors">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-background/60 hover:text-primary transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="text-background/60 hover:text-primary transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 mt-12 pt-8 text-center text-xs text-background/50">
        © {new Date().getFullYear()} Eddie's Travel Scotland. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

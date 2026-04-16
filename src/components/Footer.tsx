import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, MessageCircle, Globe, Send } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-footer-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-heading font-extrabold text-xl mb-4">
              webdev<span className="text-accent">studio</span>.id
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Jasa pembuatan website profesional yang fokus menaikkan omset bisnis Anda melalui teknologi digital terkini.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Home", "Services", "Portfolio", "Pricing", "Testimonials"].map((l) => (
                <Link
                  key={l}
                  to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                  className="text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {l}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Layanan</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Landing Page</span>
              <span>Company Profile</span>
              <span>E-Commerce</span>
              <span>SEO Optimization</span>
              <span>Google & Meta Ads</span>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-4">Kontak</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@webdevstudio.id</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+62 812 3456 7890</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              {[Globe, Send, MessageCircle].map((Icon, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} webdevstudio.id. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const categories = ["Semua", "Landing Page", "E-Commerce", "Company Profile", "Web App"];

const projects = [
  { img: portfolio1, title: "FashionHub Store", category: "E-Commerce", tech: "React, Node.js, Stripe", desc: "Platform e-commerce lengkap dengan 500+ produk dan sistem pembayaran terintegrasi." },
  { img: portfolio2, title: "PT Maju Bersama", category: "Company Profile", tech: "Next.js, Tailwind CSS", desc: "Website company profile profesional dengan CMS untuk update konten mandiri." },
  { img: portfolio3, title: "SaaSify Platform", category: "Web App", tech: "React, Firebase, Stripe", desc: "SaaS platform dengan dashboard analytics dan subscription management." },
  { img: portfolio4, title: "Resto Nusantara", category: "Landing Page", tech: "React, Framer Motion", desc: "Landing page restoran premium dengan online reservation system." },
  { img: portfolio1, title: "TechMart Online", category: "E-Commerce", tech: "Shopify, Custom Theme", desc: "Toko online elektronik dengan fitur compare dan wishlist." },
  { img: portfolio3, title: "EduPlatform", category: "Web App", tech: "React, Supabase", desc: "Platform e-learning dengan video streaming dan quiz system." },
];

const Portfolio = () => {
  const [active, setActive] = useState("Semua");
  const filtered = active === "Semua" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="pt-16">
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Portfolio" title="Project Terbaik Kami" description="Lihat hasil kerja kami yang telah membantu bisnis berkembang secara digital" />
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm font-medium font-heading transition-all ${
                  active === c ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground card-shadow"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 group"
                >
                  <div className="overflow-hidden relative">
                    <img src={p.img} alt={p.title} loading="lazy" width={768} height={512} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-primary-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <Button size="sm" variant="secondary" className="font-heading">
                        <ExternalLink size={14} className="mr-1" /> Lihat Detail
                      </Button>
                    </div>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-medium text-primary">{p.category}</span>
                    <h3 className="font-heading font-bold text-foreground mt-1 mb-2">{p.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3">{p.desc}</p>
                    <div className="text-xs text-muted-foreground/70">Tech: {p.tech}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

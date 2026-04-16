import { motion } from "framer-motion";
import { Globe, ShoppingCart, Search, BarChart3, Megaphone, Layout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Layout,
    title: "Landing Page",
    desc: "Halaman penjualan yang dirancang khusus untuk mengkonversi pengunjung menjadi pembeli. Optimasi CTA, copywriting, dan desain yang persuasif.",
    features: ["Desain Konversi Tinggi", "A/B Testing Ready", "Mobile First"],
  },
  {
    icon: Globe,
    title: "Company Profile",
    desc: "Website profesional untuk membangun kredibilitas bisnis Anda. Tampilan modern dengan informasi lengkap tentang perusahaan.",
    features: ["Multi-halaman", "CMS Admin", "Google Maps Integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    desc: "Toko online lengkap dengan sistem pembayaran, manajemen produk, dan dashboard penjualan yang powerful.",
    features: ["Payment Gateway", "Inventory System", "Order Management"],
  },
  {
    icon: Search,
    title: "SEO Optimization",
    desc: "Optimasi website Anda agar muncul di halaman pertama Google. Meningkatkan traffic organik secara signifikan.",
    features: ["Technical SEO", "Content Strategy", "Link Building"],
  },
  {
    icon: Megaphone,
    title: "Google & Meta Ads",
    desc: "Manajemen iklan digital yang efektif untuk menjangkau target market Anda dengan budget yang optimal.",
    features: ["Campaign Setup", "Audience Targeting", "Monthly Report"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    desc: "Setup dan analisis data website untuk pengambilan keputusan bisnis yang lebih baik dan terukur.",
    features: ["Google Analytics", "Heatmap Tracking", "Monthly Insights"],
  },
];

const Services = () => (
  <div className="pt-16">
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Layanan Kami"
          title="Solusi Digital Lengkap untuk Bisnis Anda"
          description="Dari pembuatan website hingga digital marketing, kami siap membantu bisnis Anda tumbuh secara online."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon size={24} className="text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{s.desc}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f, j) => (
                  <span key={j} className="text-xs bg-primary/5 text-primary px-2 py-1 rounded-full font-medium">
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold accent-shadow">
            Konsultasi Gratis <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  </div>
);

export default Services;

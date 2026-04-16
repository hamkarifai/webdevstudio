import { motion } from "framer-motion";
import {
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
  BarChart3,
  Target,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionHeading from "@/components/SectionHeading";
import FloatingElements from "@/components/FloatingElements";
import heroPerson from "@/assets/hero-person.png";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const portfolioItems = [
  { img: portfolio1, title: "E-Commerce Fashion", category: "E-Commerce" },
  { img: portfolio2, title: "Corporate Profile", category: "Company Profile" },
  { img: portfolio3, title: "SaaS Platform", category: "Landing Page" },
  { img: portfolio4, title: "Restaurant Website", category: "Business" },
];

const metrics = [
  {
    icon: TrendingUp,
    value: "340%",
    label: "Peningkatan Traffic",
    detail: "575 Ribu dapat 83 Leads",
  },
  {
    icon: Target,
    value: "5.2x",
    label: "Return on Ad Spend",
    detail: "1.7 Juta Dapat Omset 2.8 Juta",
  },
  {
    icon: BarChart3,
    value: "89%",
    label: "Conversion Rate Up",
    detail: "Landing Page Optimized",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "2",
    unit: "Juta",
    features: [
      "Landing Page 1 Halaman",
      "Mobile Responsive",
      "SEO Basic",
      "Domain + Hosting 1 Tahun",
      "Revisi 2x",
    ],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "5.5",
    unit: "Juta",
    features: [
      "Website hingga 7 Halaman",
      "Mobile Responsive",
      "SEO Advanced",
      "Domain + Hosting 1 Tahun",
      "CMS Admin Panel",
      "Live Chat Integration",
      "Revisi 5x",
    ],
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "8",
    unit: "Juta",
    features: [
      "Custom Web Application",
      "E-Commerce Full Feature",
      "SEO Premium + Audit",
      "Domain + Hosting 1 Tahun",
      "Payment Gateway",
      "Analytics Dashboard",
      "Support 6 Bulan",
      "Revisi Unlimited",
    ],
    highlighted: false,
  },
];

const testimonials = [
  {
    name: "Budi Santoso",
    role: "CEO, TechIndo",
    text: "Website yang dibuat webdevstudio.id sangat profesional dan langsung meningkatkan penjualan kami hingga 200% dalam 3 bulan pertama.",
    rating: 5,
  },
  {
    name: "Sari Dewi",
    role: "Owner, Batik Nusantara",
    text: "Tim yang sangat responsif dan hasilnya luar biasa. E-commerce kami sekarang berjalan sangat lancar dan pelanggan sangat puas.",
    rating: 5,
  },
  {
    name: "Ahmad Rizky",
    role: "Marketing Dir, PropertyPro",
    text: "Investasi terbaik untuk bisnis kami. Landing page yang dibuat menghasilkan leads 5x lipat dari sebelumnya.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="bg-hero-gradient min-h-[90vh] flex items-center pt-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block bg-accent/20 text-accent-foreground text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              🚀 #1 Web Agency Indonesia
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6">
              Jasa Website Professional yang Fokus{" "}
              <span className="text-gradient">Menaikkan Omset</span> Bisnis
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Kami membangun website yang bukan hanya indah, tapi juga dirancang
              untuk mengkonversi pengunjung menjadi pelanggan setia Anda.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/+6289695914075" target="_blank">
                <Button
                  size="lg"
                  className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold accent-shadow text-base px-8"
                >
                  Buat Website Sekarang{" "}
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <Link to="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="font-heading font-bold text-base px-8 border-primary/30 text-primary hover:bg-primary/5"
                >
                  Lihat Portfolio
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-primary" />{" "}
                <span>
                  <b className="text-foreground">62+</b> Client
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-accent" />{" "}
                <span>
                  <b className="text-foreground">100+</b> Project
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star size={16} className="text-accent" />{" "}
                <span>
                  <b className="text-foreground">4.9</b> Rating
                </span>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Yellow abstract background shape */}
              <div className="absolute inset-0 -inset-x-8 -inset-y-4">
                <div className="w-full h-full bg-accent/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] blur-sm" />
              </div>
              <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl" />
              <img
                src={heroPerson}
                alt="Web developer"
                width={500}
                height={600}
                className="relative z-10 drop-shadow-2xl"
              />
              <FloatingElements />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Portfolio"
            title="Lihat Hasil Kerja Kami"
            description="Beberapa project terbaik yang telah kami kerjakan untuk client kami"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-card rounded-xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={768}
                    height={512}
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay to mask any AI text artifacts */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                </div>
                <div className="p-4">
                  <span className="text-xs font-medium text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-heading font-bold text-foreground mt-1">
                    {item.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/portfolio">
              <Button
                variant="outline"
                className="font-heading border-primary/30 text-primary hover:bg-primary/5"
              >
                Lihat Semua Portfolio <ArrowRight className="ml-2" size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Metrics - All HTML text, no image backgrounds */}
      <section className="py-20 bg-primary-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-primary-foreground mb-3">
              Hasil Iklan Client Kami
            </h2>
            <p className="text-primary-foreground/70">
              Data nyata dari campaign digital marketing client kami
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-card rounded-xl p-8 text-center border border-border"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <m.icon className="text-primary" size={28} />
                </div>
                <div className="font-heading font-extrabold text-4xl text-foreground mb-2">
                  {m.value}
                </div>
                <div className="text-muted-foreground text-sm font-medium mb-3">
                  {m.label}
                </div>
                <div className="text-xs text-primary font-heading font-bold bg-primary/10 rounded-full px-3 py-1 inline-block">
                  {m.detail}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold accent-shadow"
            >
              Konsultasi Gratis <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Pricing"
            title="Pilih Paket yang Tepat"
            description="Investasi terbaik untuk pertumbuhan bisnis online Anda"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-8 relative ${
                  tier.highlighted
                    ? "bg-primary text-primary-foreground ring-4 ring-accent scale-105"
                    : "bg-card card-shadow border border-border"
                }`}
              >
                {tier.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full font-heading">
                    POPULAR
                  </span>
                )}
                <h3 className="font-heading font-bold text-lg mb-1">
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-heading font-extrabold text-4xl">
                    {tier.price}
                  </span>
                  <span className="text-sm opacity-70">{tier.unit}</span>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <CheckCircle2
                        size={16}
                        className={
                          tier.highlighted ? "text-accent" : "text-primary"
                        }
                      />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Button
                  className={`w-full font-heading font-bold ${
                    tier.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  Pilih Paket
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <SectionHeading
            badge="Testimonials"
            title="Para Bisnis Owner Telah Mempercayai Kami"
            description="62+ client website telah merasakan manfaatnya"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 card-shadow"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={16}
                      className="fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-4">
              Siap Memulai Project Anda?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Konsultasikan kebutuhan website Anda secara gratis dan dapatkan
              penawaran terbaik dari kami.
            </p>
            <a
              href="https://wa.me/+6289695914075"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold accent-shadow text-base px-10"
              >
                Hubungi Kami Sekarang <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;

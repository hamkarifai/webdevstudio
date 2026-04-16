import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const tiers = [
  {
    name: "Starter",
    price: "2.5",
    unit: "Juta",
    desc: "Cocok untuk bisnis kecil yang baru memulai kehadiran online.",
    features: ["Landing Page 1 Halaman", "Mobile Responsive Design", "SEO Basic Setup", "Domain .com + Hosting 1 Tahun", "SSL Certificate", "Revisi 2x", "Delivery 5-7 Hari"],
    highlighted: false,
  },
  {
    name: "Growth",
    price: "5.5",
    unit: "Juta",
    desc: "Paket terlaris untuk bisnis yang ingin tumbuh dan berkembang.",
    features: ["Website hingga 7 Halaman", "Mobile Responsive Design", "SEO Advanced + Google Analytics", "Domain .com + Hosting 1 Tahun", "SSL Certificate", "CMS Admin Panel", "WhatsApp Integration", "Live Chat Widget", "Social Media Links", "Revisi 5x", "Delivery 10-14 Hari"],
    highlighted: true,
  },
  {
    name: "Ultimate",
    price: "12",
    unit: "Juta",
    desc: "Solusi lengkap untuk bisnis enterprise dan e-commerce.",
    features: ["Custom Web Application", "E-Commerce Full Feature", "SEO Premium + Monthly Audit", "Domain .com + Hosting 1 Tahun", "SSL Certificate", "Payment Gateway Integration", "Inventory Management", "Analytics Dashboard", "Email Marketing Setup", "Support 6 Bulan", "Revisi Unlimited", "Delivery 21-30 Hari"],
    highlighted: false,
  },
];

const faqs = [
  { q: "Berapa lama waktu pengerjaan website?", a: "Tergantung paket yang dipilih, mulai dari 5 hari untuk Starter hingga 30 hari untuk Ultimate. Kami selalu memberikan timeline yang jelas di awal project." },
  { q: "Apakah saya bisa request desain custom?", a: "Tentu! Semua paket kami mendukung desain custom sesuai brand identity bisnis Anda. Tim desainer kami akan berkonsultasi terlebih dahulu sebelum memulai." },
  { q: "Apakah termasuk domain dan hosting?", a: "Ya, semua paket sudah termasuk domain .com dan hosting selama 1 tahun pertama. Perpanjangan selanjutnya akan dikenakan biaya tahunan." },
  { q: "Bagaimana proses pembayaran?", a: "Kami menggunakan sistem DP 50% di awal dan pelunasan 50% setelah project selesai. Pembayaran bisa melalui transfer bank atau e-wallet." },
  { q: "Apakah ada garansi setelah website jadi?", a: "Ya! Semua paket mendapat garansi bug fix selama 30 hari. Paket Ultimate mendapat dukungan teknis selama 6 bulan penuh." },
];

const Pricing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-16">
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4">
          <SectionHeading badge="Pricing" title="Harga Transparan, Tanpa Biaya Tersembunyi" description="Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {tiers.map((tier, i) => (
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
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full font-heading">TERLARIS</span>
                )}
                <h3 className="font-heading font-bold text-lg">{tier.name}</h3>
                <p className={`text-sm mt-1 mb-4 ${tier.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{tier.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="font-heading font-extrabold text-4xl">{tier.price}</span>
                  <span className="text-sm opacity-70">{tier.unit}</span>
                </div>
                <div className="flex flex-col gap-3 mb-8">
                  {tier.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${tier.highlighted ? "text-accent" : "text-primary"}`} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full font-heading font-bold ${tier.highlighted ? "bg-accent text-accent-foreground hover:bg-accent/90" : "bg-primary text-primary-foreground hover:bg-primary/90"}`}>
                  Pilih Paket <ArrowRight className="ml-2" size={16} />
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading badge="FAQ" title="Pertanyaan yang Sering Diajukan" />
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card rounded-xl border border-border overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-foreground text-sm"
                >
                  {faq.q}
                  <ChevronDown size={18} className={`shrink-0 ml-2 transition-transform ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  { name: "Budi Santoso", role: "CEO, TechIndo", text: "Website yang dibuat webdevstudio.id sangat profesional dan langsung meningkatkan penjualan kami hingga 200% dalam 3 bulan pertama. Tim yang sangat dedicated.", rating: 5, project: "E-Commerce Platform" },
  { name: "Sari Dewi", role: "Owner, Batik Nusantara", text: "Tim yang sangat responsif dan hasilnya luar biasa. E-commerce kami sekarang berjalan sangat lancar dan pelanggan sangat puas dengan pengalaman berbelanja.", rating: 5, project: "Batik E-Commerce" },
  { name: "Ahmad Rizky", role: "Marketing Dir, PropertyPro", text: "Investasi terbaik untuk bisnis kami. Landing page yang dibuat menghasilkan leads 5x lipat dari sebelumnya. ROI luar biasa!", rating: 5, project: "Property Landing Page" },
  { name: "Lisa Permata", role: "Founder, BeautyGlow", text: "Desainnya cantik banget dan sesuai dengan brand identity kami. Customer kami banyak yang bilang website-nya premium dan terpercaya.", rating: 5, project: "Beauty E-Commerce" },
  { name: "Ricky Wijaya", role: "CTO, LogisTech", text: "Web application yang dibuat sangat robust dan scalable. Dashboard analytics-nya sangat membantu dalam pengambilan keputusan bisnis.", rating: 5, project: "Logistics Dashboard" },
  { name: "Maya Anggraini", role: "Owner, KopiBrew", text: "Dari awal konsultasi sampai website jadi, prosesnya sangat smooth. Sekarang kami bisa terima pesanan online dan omset naik 150%.", rating: 5, project: "Coffee Shop Website" },
  { name: "Denny Prasetyo", role: "Director, EduSmart", text: "Platform e-learning yang dibuat sangat user-friendly. Murid-murid kami sangat senang dengan fitur-fiturnya yang lengkap.", rating: 4, project: "E-Learning Platform" },
  { name: "Rina Susanti", role: "Owner, HealthyBites", text: "Website kami sekarang muncul di page 1 Google berkat SEO optimization dari webdevstudio. Traffic naik 400% dalam 6 bulan!", rating: 5, project: "Restaurant Website + SEO" },
  { name: "Hendro Kusumo", role: "CEO, BuildPro", text: "Company profile yang dibuat sangat profesional dan menunjukkan kredibilitas perusahaan kami. Banyak client baru yang datang setelah melihat website.", rating: 5, project: "Construction Company Profile" },
];

const Testimonials = () => (
  <div className="pt-16">
    <section className="py-20 bg-hero-gradient">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Testimonials"
          title="Apa Kata Mereka?"
          description="62+ bisnis owner telah mempercayakan website mereka kepada kami"
        />
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card rounded-xl p-6 card-shadow break-inside-avoid"
            >
              <Quote size={24} className="text-primary/20 mb-3" />
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{t.text}"</p>
              <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className={j < t.rating ? "fill-accent text-accent" : "text-border"} />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-foreground text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full font-medium">{t.project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonials;

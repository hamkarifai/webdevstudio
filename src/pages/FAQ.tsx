import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const faqCategories = [
  {
    title: "Umum",
    items: [
      {
        q: "Apa saja layanan yang ditawarkan webdevstudio.id?",
        a: "Kami menyediakan jasa pembuatan website (landing page, company profile, e-commerce, web app), SEO optimization, dan digital advertising (Google Ads & Meta Ads).",
      },
      {
        q: "Berapa lama waktu pengerjaan website?",
        a: "Tergantung kompleksitas project. Landing page 5-7 hari, website multi-page 10-14 hari, dan custom web app 21-30 hari.",
      },
      {
        q: "Apakah bisa request desain custom?",
        a: "Tentu! Semua project kami dikerjakan custom sesuai brand identity dan kebutuhan bisnis Anda.",
      },
    ],
  },
  {
    title: "Pembayaran & Harga",
    items: [
      {
        q: "Bagaimana sistem pembayarannya?",
        a: "DP 50% di awal project dan pelunasan 50% setelah website selesai dan disetujui. Pembayaran via transfer bank atau e-wallet.",
      },
      {
        q: "Apakah ada biaya tersembunyi?",
        a: "Tidak ada. Harga yang kami tawarkan sudah termasuk semua fitur yang tercantum dalam paket. Biaya tambahan hanya berlaku untuk request fitur di luar paket.",
      },
      {
        q: "Apakah bisa dicicil?",
        a: "Untuk paket Ultimate, kami menyediakan opsi cicilan hingga 3x pembayaran. Silakan konsultasikan dengan tim kami.",
      },
    ],
  },
  {
    title: "Teknis",
    items: [
      {
        q: "Apakah termasuk domain dan hosting?",
        a: "Ya, semua paket sudah termasuk domain .com dan hosting selama 1 tahun. Perpanjangan tahunan mulai dari Rp 300.000/tahun.",
      },
      {
        q: "Apakah website sudah mobile responsive?",
        a: "Absolutely! Semua website yang kami buat sudah responsive dan optimal di semua device (desktop, tablet, mobile).",
      },
      {
        q: "Bagaimana dengan maintenance setelah website jadi?",
        a: "Garansi bug fix 30 hari gratis. Untuk maintenance bulanan, kami menawarkan paket mulai dari Rp 500.000/bulan.",
      },
    ],
  },
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="pt-16">
      <section className="py-20 bg-hero-gradient">
        <div className="container mx-auto px-4 max-w-3xl">
          <SectionHeading
            badge="FAQ"
            title="Frequently Asked Questions"
            description="Temukan jawaban untuk pertanyaan yang paling sering ditanyakan"
          />
          {faqCategories.map((cat, ci) => (
            <div key={ci} className="mb-10">
              <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-col gap-3">
                {cat.items.map((faq, fi) => {
                  const key = `${ci}-${fi}`;
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: fi * 0.05 }}
                      className="bg-card rounded-xl border border-border overflow-hidden"
                    >
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between p-5 text-left font-heading font-bold text-foreground text-sm"
                      >
                        {faq.q}
                        <ChevronDown
                          size={18}
                          className={`shrink-0 ml-2 transition-transform ${openItems[key] ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openItems[key] && (
                        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Masih punya pertanyaan lain?
            </p>
            <a
              href="https://wa.me/+6289695914075"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-heading font-bold accent-shadow"
              >
                Hubungi Kami <ArrowRight className="ml-2" size={18} />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;

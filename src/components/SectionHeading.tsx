import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block bg-primary/10 text-primary text-xs font-bold font-heading uppercase tracking-wider px-3 py-1 rounded-full mb-3">
        {badge}
      </span>
    )}
    <h2 className="font-heading font-extrabold text-3xl md:text-4xl text-foreground mb-3">{title}</h2>
    {description && <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>}
  </motion.div>
);

export default SectionHeading;

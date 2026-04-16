import { motion } from "framer-motion";
import { Star, TrendingUp, DollarSign } from "lucide-react";

const FloatingElements = () => {
  return (
    <>
      {/* Conversion Graph Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute -left-8 top-16 bg-card rounded-xl p-3 card-shadow z-20 hidden lg:block"
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp size={14} className="text-primary" />
          <span className="text-xs font-heading font-bold text-foreground">Conversion</span>
        </div>
        <div className="flex items-end gap-1 h-10">
          {[30, 45, 35, 60, 50, 75, 90].map((h, i) => (
            <div
              key={i}
              className="w-3 rounded-sm bg-primary/20"
              style={{ height: `${h}%` }}
            >
              <div
                className="w-full rounded-sm bg-primary"
                style={{ height: `${Math.min(100, h + 20)}%` }}
              />
            </div>
          ))}
        </div>
        <div className="text-xs font-bold text-primary mt-1">+340%</div>
      </motion.div>

      {/* Review Stars Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute -right-4 top-8 bg-card rounded-xl p-3 card-shadow z-20 hidden lg:block"
      >
        <div className="flex gap-0.5 mb-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} size={12} className="fill-accent text-accent" />
          ))}
        </div>
        <div className="text-xs font-heading font-bold text-foreground">4.9 Rating</div>
        <div className="text-[10px] text-muted-foreground">62+ Reviews</div>
      </motion.div>

      {/* Revenue Card */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="absolute right-8 bottom-16 bg-card rounded-xl p-3 card-shadow z-20 hidden lg:block"
      >
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
            <DollarSign size={14} className="text-accent" />
          </div>
          <div>
            <div className="text-[10px] text-muted-foreground">Revenue</div>
            <div className="text-sm font-heading font-bold text-foreground">Rp 2.8M</div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default FloatingElements;

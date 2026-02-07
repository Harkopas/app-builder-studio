import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  delay?: number;
  highlight?: boolean;
}

export const StatsCard = ({ title, value, icon: Icon, delay = 0, highlight = false }: StatsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ y: -2 }}
      className={`rounded-xl border p-5 transition-all duration-300 ${
        highlight
          ? "border-primary/30 gradient-card shadow-glow"
          : "border-border bg-card hover:border-primary/20"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className={`mt-1 text-2xl font-semibold ${highlight ? "text-gradient" : "text-foreground"}`}>
            {value}
          </p>
        </div>
        <div
          className={`rounded-lg p-2 ${
            highlight ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </motion.div>
  );
};

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const Header = () => {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  const formatDate = () => {
    return new Date().toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-8"
    >
      <div className="flex items-center gap-3 mb-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
          className="flex h-10 w-10 items-center justify-center rounded-xl gradient-warm shadow-glow"
        >
          <Sparkles className="h-5 w-5 text-primary-foreground" />
        </motion.div>
        <h1 className="text-2xl font-bold text-foreground">TaskFlow</h1>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-foreground md:text-4xl">
          {getGreeting()}
        </h2>
        <p className="mt-1 text-muted-foreground">{formatDate()}</p>
      </motion.div>
    </motion.header>
  );
};

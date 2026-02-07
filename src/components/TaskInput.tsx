import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

interface TaskInputProps {
  onAddTask: (title: string) => void;
}

export const TaskInput = ({ onAddTask }: TaskInputProps) => {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) {
      onAddTask(value.trim());
      setValue("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="relative"
    >
      <div
        className={`relative flex items-center gap-3 rounded-xl border bg-card p-2 transition-all duration-300 ${
          isFocused ? "border-primary shadow-glow" : "border-border"
        }`}
      >
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Add a new task..."
          className="flex-1 bg-transparent px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
        >
          <Plus className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.form>
  );
};

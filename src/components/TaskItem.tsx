import { motion } from "framer-motion";
import { Check, Trash2 } from "lucide-react";

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  index: number;
}

export const TaskItem = ({ task, onToggle, onDelete, index }: TaskItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20, height: 0 }}
      transition={{ delay: index * 0.05 }}
      layout
      className="group"
    >
      <div
        className={`flex items-center gap-4 rounded-xl border bg-card p-4 transition-all duration-300 hover:border-primary/30 ${
          task.completed ? "border-border/50 opacity-60" : "border-border"
        }`}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onToggle(task.id)}
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all duration-200 ${
            task.completed
              ? "border-primary bg-primary text-primary-foreground"
              : "border-muted-foreground/40 hover:border-primary"
          }`}
        >
          {task.completed && <Check className="h-4 w-4" />}
        </motion.button>

        <span
          className={`flex-1 transition-all duration-200 ${
            task.completed ? "text-muted-foreground line-through" : "text-foreground"
          }`}
        >
          {task.title}
        </span>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onDelete(task.id)}
          className="text-muted-foreground opacity-0 transition-all duration-200 hover:text-destructive group-hover:opacity-100"
        >
          <Trash2 className="h-4 w-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, Target, TrendingUp } from "lucide-react";
import { Header } from "@/components/Header";
import { TaskInput } from "@/components/TaskInput";
import { TaskItem } from "@/components/TaskItem";
import { StatsCard } from "@/components/StatsCard";
import { useTasks } from "@/hooks/useTasks";

const Index = () => {
  const { tasks, addTask, toggleTask, deleteTask, stats } = useTasks();

  return (
    <div className="min-h-screen gradient-hero">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        {/* Stats Grid */}
        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <StatsCard
            title="Total Tasks"
            value={stats.total}
            icon={Target}
            delay={0.1}
          />
          <StatsCard
            title="Completed"
            value={stats.completed}
            icon={CheckCircle2}
            delay={0.15}
            highlight
          />
          <StatsCard
            title="Pending"
            value={stats.pending}
            icon={Clock}
            delay={0.2}
          />
          <StatsCard
            title="Progress"
            value={`${stats.completionRate}%`}
            icon={TrendingUp}
            delay={0.25}
          />
        </div>

        {/* Task Input */}
        <div className="mb-6">
          <TaskInput onAddTask={addTask} />
        </div>

        {/* Task List */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-3"
        >
          <AnimatePresence mode="popLayout">
            {tasks.length === 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border py-16"
              >
                <div className="mb-4 rounded-full bg-muted p-4">
                  <Target className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-medium text-foreground">No tasks yet</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Add your first task to get started
                </p>
              </motion.div>
            ) : (
              tasks.map((task, index) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={toggleTask}
                  onDelete={deleteTask}
                  index={index}
                />
              ))
            )}
          </AnimatePresence>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm text-muted-foreground"
        >
          <p>Built with ✨ TaskFlow</p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;

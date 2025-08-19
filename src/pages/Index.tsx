import { useState } from "react";
import { TaskForm } from "@/components/TaskForm";
import { TaskList } from "@/components/TaskList";
import { CheckSquare } from "lucide-react";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

const Index = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (taskName: string) => {
    const newTask: Task = {
      id: crypto.randomUUID(),
      name: taskName,
      completed: false,
    };
    setTasks(prev => [...prev, newTask]);
  };

  const handleToggleTask = (taskId: string) => {
    setTasks(prev => 
      prev.map(task => 
        task.id === taskId 
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <CheckSquare className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Lista de Tarefas
              </h1>
              <p className="text-muted-foreground">
                Organize suas tarefas de forma simples e elegante
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Task Form */}
          <TaskForm onAddTask={handleAddTask} />

          {/* Task List */}
          <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Sistema de tarefas moderno e responsivo</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
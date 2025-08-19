import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Circle } from "lucide-react";

interface Task {
  id: string;
  name: string;
  completed: boolean;
}

interface TaskListProps {
  tasks: Task[];
  onToggleTask: (taskId: string) => void;
}

export const TaskList = ({ tasks, onToggleTask }: TaskListProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Lista de Tarefas</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks.length === 0 ? (
          <p className="text-muted-foreground text-center py-4">
            Nenhuma tarefa adicionada ainda
          </p>
        ) : (
          <ol className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                onClick={() => onToggleTask(task.id)}
                className={`
                  p-3 rounded-md border cursor-pointer transition-all duration-200
                  hover:bg-accent hover:scale-[1.02] active:scale-95
                  ${task.completed 
                    ? 'bg-accent/50 border-muted line-through text-muted-foreground' 
                    : 'bg-background border-border hover:border-primary/50'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  {task.completed ? (
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground" />
                  )}
                  <span className={task.completed ? 'line-through' : ''}>
                    {task.name}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        )}
      </CardContent>
    </Card>
  );
};
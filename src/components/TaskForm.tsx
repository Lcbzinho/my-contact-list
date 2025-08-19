import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";

interface TaskFormProps {
  onAddTask: (taskName: string) => void;
}

export const TaskForm = ({ onAddTask }: TaskFormProps) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName.trim());
      setTaskName("");
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PlusCircle className="h-5 w-5" />
          Adicionar Nova Tarefa
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            placeholder="Digite o nome da tarefa..."
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            className="flex-1"
            required
          />
          <Button type="submit" variant="contact">
            Cadastrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
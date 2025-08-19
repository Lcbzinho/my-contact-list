import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Contact {
  id: string;
  nome: string;
  telefone: string;
}

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

export function ContactForm({ onAddContact }: ContactFormProps) {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nome.trim() || !telefone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive",
      });
      return;
    }

    const newContact: Contact = {
      id: Date.now().toString(),
      nome: nome.trim(),
      telefone: telefone.trim(),
    };

    onAddContact(newContact);
    setNome("");
    setTelefone("");
    
    toast({
      title: "Contato adicionado!",
      description: `${nome} foi adicionado à sua lista de contatos.`,
    });
  };

  return (
    <Card className="bg-gradient-card shadow-card border-border/50 hover:shadow-glow transition-all duration-500">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Novo Contato
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Nome do contato"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="pl-10 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300"
              required
            />
          </div>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="tel"
              placeholder="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="pl-10 bg-secondary/50 border-border/50 focus:border-primary transition-all duration-300"
              required
            />
          </div>
          <Button 
            type="submit" 
            variant="contact" 
            className="w-full"
          >
            Cadastrar Contato
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
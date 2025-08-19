import { useState } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ContactTable } from "@/components/ContactTable";
import { ContactIcon } from "lucide-react";

interface Contact {
  id: string;
  nome: string;
  telefone: string;
}

const Index = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const handleAddContact = (newContact: Contact) => {
    setContacts(prev => [...prev, newContact]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <ContactIcon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Minha Lista de Contatos
              </h1>
              <p className="text-muted-foreground">
                Gerencie seus contatos de forma simples e elegante
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ContactForm onAddContact={handleAddContact} />
          </div>

          {/* Contact Table */}
          <div>
            <ContactTable contacts={contacts} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
          <p>Sistema de contatos moderno e responsivo</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
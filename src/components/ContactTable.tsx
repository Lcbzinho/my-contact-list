import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Phone, Users } from "lucide-react";

interface Contact {
  id: string;
  nome: string;
  telefone: string;
}

interface ContactTableProps {
  contacts: Contact[];
}

export function ContactTable({ contacts }: ContactTableProps) {
  return (
    <Card className="bg-gradient-card shadow-card border-border/50">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl font-bold">
            Lista de Contatos
          </CardTitle>
          <span className="text-sm text-muted-foreground ml-auto">
            {contacts.length} contato{contacts.length !== 1 ? 's' : ''}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        {contacts.length === 0 ? (
          <div className="text-center py-12">
            <Users className="h-16 w-16 text-muted-foreground/50 mx-auto mb-4" />
            <p className="text-lg text-muted-foreground">
              Nenhum contato cadastrado ainda
            </p>
            <p className="text-sm text-muted-foreground">
              Adicione seu primeiro contato usando o formulário acima
            </p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="border-border/50 hover:bg-secondary/20">
                <TableHead className="font-bold text-foreground">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Nome
                  </div>
                </TableHead>
                <TableHead className="font-bold text-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Telefone
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact, index) => (
                <TableRow 
                  key={contact.id} 
                  className="border-border/30 hover:bg-secondary/30 transition-colors duration-200 animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <TableCell className="font-medium">
                    {contact.nome}
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {contact.telefone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Corp",
      position: "Senior Developer",
      lastContact: "2024-03-15",
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Design Studio",
      position: "UX Designer",
      lastContact: "2024-03-14",
    },
    {
      id: 3,
      name: "Emily Brown",
      company: "Marketing Inc",
      position: "Marketing Manager",
      lastContact: "2024-03-13",
    },
  ];

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search contacts..."
            className="pl-9"
          />
        </div>
        
        <div className="space-y-2">
          {contacts.map((contact) => (
            <div
              key={contact.id}
              className="p-4 rounded-lg border hover:bg-accent cursor-pointer transition-colors"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {contact.position} at {contact.company}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  Last contact: {contact.lastContact}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ContactList;
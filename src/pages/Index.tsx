import DashboardStats from "@/components/DashboardStats";
import ContactForm from "@/components/ContactForm";
import ContactList from "@/components/ContactList";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Networking Tracker</h1>
        </div>
        
        <DashboardStats />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Add New Contact</h2>
            <ContactForm />
          </div>
          
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Recent Contacts</h2>
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
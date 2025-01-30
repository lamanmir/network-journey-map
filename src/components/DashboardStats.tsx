import { Card } from "@/components/ui/card";
import { Users, Calendar, Building2, Send } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="p-6 space-y-2">
        <div className="flex items-center space-x-2">
          <Users className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-medium">Total Contacts</h3>
        </div>
        <p className="text-2xl font-bold">124</p>
      </Card>
      
      <Card className="p-6 space-y-2">
        <div className="flex items-center space-x-2">
          <Calendar className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-medium">This Month</h3>
        </div>
        <p className="text-2xl font-bold">12</p>
      </Card>
      
      <Card className="p-6 space-y-2">
        <div className="flex items-center space-x-2">
          <Building2 className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-medium">Companies</h3>
        </div>
        <p className="text-2xl font-bold">45</p>
      </Card>
      
      <Card className="p-6 space-y-2">
        <div className="flex items-center space-x-2">
          <Send className="h-5 w-5 text-primary" />
          <h3 className="text-sm font-medium">Follow-ups Due</h3>
        </div>
        <p className="text-2xl font-bold">8</p>
      </Card>
    </div>
  );
};

export default DashboardStats;
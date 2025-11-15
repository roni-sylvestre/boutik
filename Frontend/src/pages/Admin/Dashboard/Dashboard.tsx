import React from "react";
import DashboardSidebar from "../../../components/DashboardSidebar/DashboardSidebar";
import ProductTable from "../../../components/ProductTable/ProductTable";

const Dashboard: React.FC = () => {
      return (
            <div className="flex flex-col sm:flex-row min-h-screen bg-blue-50 p-4 gap-4">
                  <DashboardSidebar />
                  <div className="flex-1 bg-white rounded-xl shadow-xl p-6 border border-blue-100">
                        <ProductTable />
                  </div>
            </div>
      );
};

export default Dashboard;

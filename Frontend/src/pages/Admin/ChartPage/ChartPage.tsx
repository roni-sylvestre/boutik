import React from "react";
import DashboardSidebar from "../../../components/DashboardSidebar/DashboardSidebar";
import Chart from "../../../components/Chart/Chart";

const Dashboard: React.FC = () => {
      return (
            <div className="flex flex-col sm:flex-row min-h-screen bg-blue-50 p-4 gap-4">
                  <DashboardSidebar />
                  <div className="flex-1 bg-white rounded-xl shadow-xl p-6 border border-blue-100">
                        <Chart />
                  </div>
            </div>
      );
};

export default Dashboard;

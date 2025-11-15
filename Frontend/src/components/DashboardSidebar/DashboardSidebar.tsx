import React from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { BarChart2, Table2, PlusCircle } from "lucide-react";

const DashboardSidebar: React.FC = () => {
      const location = useLocation();
      const current = location.pathname;

      const links = [
            { label: "Tableaux", icon: <Table2 className="w-5 h-5" />, path: "/admin" },
            { label: "Graphiques", icon: <BarChart2 className="w-5 h-5" />, path: "/admin/charts" },
            { label: "Ajouter Produit", icon: <PlusCircle className="w-5 h-5" />, path: "/admin/add-product" },
      ];

      return (
            <aside className="bg-white shadow-xl rounded-xl p-4 w-full sm:w-64 flex-shrink-0 border border-blue-100">
                  <h2 className="text-xl uppercase font-bold text-blue-600 mb-6 text-center">Dashboard</h2>

                  <nav className="flex flex-col space-y-2">
                        {links.map((link) => (
                              <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${current === link.path
                                                ? "bg-blue-600 text-white"
                                                : "text-blue-600 hover:bg-blue-100"
                                          }`}
                              >
                                    {link.icon}
                                    {link.label}
                              </Link>
                        ))}
                  </nav>
            </aside>
      );
};

export default DashboardSidebar;

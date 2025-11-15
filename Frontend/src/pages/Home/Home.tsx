import React, { useState, useMemo } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import { allProducts } from "../../data/products.data";

const PRODUCTS_PER_PAGE = 9;

const Home: React.FC = () => {
      const [filter, setFilter] = useState<"date" | "note" | "none">("none");
      const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
      const [currentPage, setCurrentPage] = useState(1);

      // Tri 
      const sortedProducts = useMemo(() => {
            const products = [...allProducts];
            if (filter === "note") {
                  products.sort((a, b) => (sortOrder === "asc" ? a.note - b.note : b.note - a.note));
            } else if (filter === "date") {
                  products.sort((a, b) =>
                        sortOrder === "asc"
                              ? a.title.localeCompare(b.title)
                              : b.title.localeCompare(a.title)
                  );
            }
            return products;
      }, [filter, sortOrder]);

      // Pagination
      const totalPages = Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE);
      const displayedProducts = useMemo(() => {
            const start = (currentPage - 1) * PRODUCTS_PER_PAGE;
            return sortedProducts.slice(start, start + PRODUCTS_PER_PAGE);
      }, [currentPage, sortedProducts]);

      const toggleSortOrder = () => setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));

      return (
            <section className="p-8 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">

                  <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                        <div className="flex gap-2">
                              <button
                                    onClick={() => setFilter("date")}
                                    className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-all shadow-sm ${filter === "date"
                                          ? "bg-blue-600 text-white shadow-md"
                                          : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                                          }`}
                              >
                                    Par Date
                              </button>
                              <button
                                    onClick={() => setFilter("note")}
                                    className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-all shadow-sm ${filter === "note"
                                          ? "bg-blue-600 text-white shadow-md"
                                          : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                                          }`}
                              >
                                    Par Note
                              </button>
                              <button
                                    onClick={() => setFilter("none")}
                                    className={`px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-all shadow-sm ${filter === "none"
                                          ? "bg-blue-600 text-white shadow-md"
                                          : "bg-white text-blue-600 border border-blue-600 hover:bg-blue-50"
                                          }`}
                              >
                                    Tous
                              </button>
                        </div>

                        {filter !== "none" && (
                              <button
                                    onClick={toggleSortOrder}
                                    className="flex items-center gap-1 px-3 py-2 border border-blue-600 rounded-md text-blue-600 bg-white hover:bg-blue-50 transition-all"
                              >
                                    <ArrowUpDown size={18} />
                                    {sortOrder === "asc" ? "Croissant" : "Décroissant"}
                              </button>
                        )}
                  </div>


                  <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 px-5 md:px-20">
                        {displayedProducts.map((product, idx) => (
                              <div
                                    key={idx}
                              >
                                    <ProductCard product={product} />
                              </div>
                        ))}
                  </div>

                  <div className="mt-10 flex justify-center items-center gap-4">
                        <button
                              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                              disabled={currentPage === 1}
                              className={`flex items-center gap-1 px-4 py-2 rounded-md border border-blue-600 transition-all ${currentPage === 1
                                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                                    : "text-blue-600 hover:bg-blue-50"
                                    }`}
                        >
                              <ChevronLeft size={18} /> Précédent
                        </button>

                        <span className="text-blue-700 font-semibold">
                              Page {currentPage} / {totalPages}
                        </span>

                        <button
                              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                              disabled={currentPage === totalPages}
                              className={`flex items-center gap-1 px-4 py-2 rounded-md border border-blue-600 transition-all ${currentPage === totalPages
                                    ? "text-gray-400 border-gray-300 cursor-not-allowed"
                                    : "text-blue-600 hover:bg-blue-50"
                                    }`}
                        >
                              Suivant <ChevronRight size={18} />
                        </button>
                  </div>
            </section>
      );
};

export const Route = createFileRoute("/")({
      component: Home,
});

export default Home;

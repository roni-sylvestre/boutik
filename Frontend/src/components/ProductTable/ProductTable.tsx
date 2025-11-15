import React from "react";
import { allProducts  } from "../../data/products.data";


const TablesPage: React.FC = () => {
      return (
            <div className="space-y-12">

                  <section>
                        <h2 className="text-2xl font-bold text-blue-600 mb-4">Produits</h2>
                        <div className="overflow-x-auto">
                              <table className="w-full text-left border-collapse">
                                    <thead className="bg-blue-100 text-blue-700">
                                          <tr>
                                                <th className="py-3 px-4">Nom</th>
                                                <th className="py-3 px-4">Prix</th>
                                                <th className="py-3 px-4 text-center">Actions</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                          {allProducts.map((p) => (
                                                <tr key={p.id} className="border-b hover:bg-blue-50 transition">
                                                      <td className="py-3 px-4 font-medium">{p.title}</td>
                                                      <td className="py-3 px-4 text-blue-600 font-semibold">${p.price.toFixed(2)}</td>
                                                      <td className="py-3 px-4 flex justify-center gap-2">
                                                            <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md hover:bg-blue-200 transition">
                                                                  Voir
                                                            </button>
                                                            <button className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-md hover:bg-yellow-200 transition">
                                                                  Modifier
                                                            </button>
                                                            <button className="px-3 py-1 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition">
                                                                  Supprimer
                                                            </button>
                                                      </td>
                                                </tr>
                                          ))}
                                    </tbody>
                              </table>
                        </div>
                  </section>
            </div>
      );
};


export default TablesPage;

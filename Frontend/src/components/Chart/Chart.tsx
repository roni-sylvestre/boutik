
import React from "react";
import {
      BarChart,
      Bar,
      XAxis,
      YAxis,
      CartesianGrid,
      Tooltip,
      ResponsiveContainer,
      Legend,
} from "recharts";
import { allProducts } from "../../data/products.data";

interface RatingData {
      note: number;
      count: number;
}

const ratingDistribution: RatingData[] = [1, 2, 3, 4, 5].map((note) => ({
      note,
      count: allProducts.filter((p) => p.note === note).length,
}));

const Chart: React.FC = () => {
      return (
            <div className="p-6">
                  <h2 className="text-2xl font-bold text-blue-700 mb-4 text-center">
                        Distribution des Avis Produits
                  </h2>

                  <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={ratingDistribution} barSize={45}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                              <XAxis dataKey="note" label={{ value: "Note (étoiles)", position: "insideBottom", dy: 10 }} />
                              <YAxis allowDecimals={false} label={{ value: "Nombre de produits", angle: -90, position: "insideLeft" }} />
                              <Tooltip
                                    formatter={(value) => [`${value} produit${Number(value) > 1 ? "s" : ""}`, "Nombre"]}
                              />
                              <Legend verticalAlign="top" height={36} />
                              <Bar dataKey="count" fill="#3B82F6" radius={[6, 6, 0, 0]} name="Produits par note" />
                        </BarChart>
                  </ResponsiveContainer>
            </div>
      );
};

export default Chart;

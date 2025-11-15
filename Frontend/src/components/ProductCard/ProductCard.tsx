import React from "react";
import { Link } from "@tanstack/react-router";
import type { Product } from "../../data/products.data";

interface ProductCardProps {
      product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
      const { id, title, description, image, price, note } = product;

      return (
            <div className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">

                  <div className="h-48 w-full overflow-hidden">
                        <img
                              src={image}
                              alt={title}
                              className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
                        />
                  </div>


                  <div className="p-4 flex-1 flex flex-col justify-between">
                        <div>
                              <h2 className="text-lg font-bold text-blue-600">{title}</h2>
                              <p className="text-gray-600 mt-1 text-sm line-clamp-3">{description}</p>
                        </div>

                        <div className="mt-4 flex justify-between items-center">
                              <div className="flex items-center">
                                    {Array.from({ length: 5 }, (_, i) => (
                                          <svg
                                                key={i}
                                                className={`w-4 h-4 ${i < note ? "text-yellow-400" : "text-gray-300"
                                                      }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                          >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.184c.969 0 1.371 1.24.588 1.81l-3.39 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.538 1.118l-3.39-2.462a1 1 0 00-1.176 0l-3.39 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.044 9.401c-.783-.57-.38-1.81.588-1.81h4.184a1 1 0 00.95-.69l1.286-3.974z" />
                                          </svg>
                                    ))}
                              </div>

                              <span className="text-blue-600 font-semibold text-lg">
                                    ${price.toFixed(2)}
                              </span>
                        </div>

                        <div className="flex justify-center mt-6">
                              <Link
                                    to={`/product/${id}`}
                                    className="mt-3 w-1/2 px-4 py-2 bg-blue-600 text-white text-center rounded-md hover:bg-blue-700 transition-colors font-medium"
                              >
                                    Voir le détail
                              </Link>
                        </div>
                  </div>
            </div>
      );
};

export default ProductCard;

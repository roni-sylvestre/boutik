import React, { useState } from "react";
import { Star, ShoppingCart, Send } from "lucide-react";
import { useParams } from "@tanstack/react-router";
import { allProducts, type Product } from "../../data/products.data";


const ProductDetail: React.FC = () => {
      const { id } = useParams({ from: "/product/$id" });
      // console.log(`id : ${id}`);
      const productId = Number(id);
      // const productId = 30;

      const product: Product = allProducts.find(p => p.id == productId)
      // console.log(product); 


      const [rating, setRating] = useState(0);
      const [hover, setHover] = useState(0);
      const [reviews, setReviews] = useState<string[]>([]);
      const [newReview, setNewReview] = useState("");

      const handleAddReview = () => {
            if (newReview.trim() !== "") {
                  setReviews([newReview, ...reviews]);
                  setNewReview("");
            }
      };

      const handleAddToCart = () => {
            alert(`${product.title} ajouté au panier !`);
      };

      if (!product) {
            return <p className="p-6 text-red-500">Produit introuvable.</p>;
      } else {
            return (
                  <section className="p-6 sm:p-10 bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex flex-col gap-10">
                        <div className="flex flex-col lg:flex-row gap-5">

                              <div className="flex-1 flex justify-start items-start">
                                    <img
                                          src={product.image}
                                          alt={product.title}
                                          className="w-full  h-full object-contain hover:scale-[1.02] transition-transform"
                                    />
                              </div>

                              <div className="flex-1 bg-white p-4 rounded-2xl">
                                    <h1 className="text-3xl font-bold text-blue-700 mb-3">{product.title}</h1>
                                    <p className="text-gray-600 mb-4">{product.description}</p>

                                    <div className="flex items-center gap-3 mb-6">
                                          <span className="text-yellow-500 flex items-center gap-1">
                                                {Array.from({ length: 5 }, (_, i) => (
                                                      <Star
                                                            key={i}
                                                            size={22}
                                                            fill={i < Math.round(product.note) ? "#facc15" : "none"}
                                                            stroke="#facc15"
                                                      />
                                                ))}
                                          </span>
                                          <span className="text-sm text-gray-500">{product.note.toFixed(1)} / 5</span>
                                    </div>

                                    <p className="text-2xl font-semibold text-blue-700 mb-6">
                                          {product.price.toFixed(2)} €
                                    </p>

                                    <button
                                          onClick={handleAddToCart}
                                          className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
                                    >
                                          <ShoppingCart size={20} /> Ajouter au panier
                                    </button>
                              </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl">

                              <div>
                                    <h2 className="text-lg font-semibold text-blue-700 mb-3">Donner une note</h2>
                                    <div className="flex gap-1 mb-4">
                                          {Array.from({ length: 5 }, (_, i) => {
                                                const starValue = i + 1;
                                                return (
                                                      <Star
                                                            key={starValue}
                                                            size={28}
                                                            className="cursor-pointer transition-transform hover:scale-110"
                                                            fill={starValue <= (hover || rating) ? "#facc15" : "none"}
                                                            stroke="#facc15"
                                                            onClick={() => setRating(starValue)}
                                                            onMouseEnter={() => setHover(starValue)}
                                                            onMouseLeave={() => setHover(0)}
                                                      />
                                                );
                                          })}
                                    </div>
                              </div>

                              <div className="mt-6">
                                    <h2 className="text-lg font-semibold text-blue-700 mb-3">Laisser un commentaire</h2>
                                    <div className="flex gap-2">
                                          <input
                                                type="text"
                                                placeholder="Écrire un commentaire..."
                                                value={newReview}
                                                onChange={(e) => setNewReview(e.target.value)}
                                                className="flex-1 border border-blue-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                          />
                                          <button
                                                onClick={handleAddReview}
                                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 transition-all"
                                          >
                                                <Send size={18} /> Envoyer
                                          </button>
                                    </div>
                              </div>

                              <div className="mt-8">
                                    <h3 className="text-lg font-semibold text-blue-700 mb-4">
                                          Commentaires récents ({reviews.length})
                                    </h3>
                                    <div className="space-y-3">
                                          {reviews.length === 0 ? (
                                                <p className="text-gray-500 italic">Aucun avis pour le moment.</p>
                                          ) : (
                                                reviews.map((review, idx) => (
                                                      <div
                                                            key={idx}
                                                            className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-gray-700 shadow-sm"
                                                      >
                                                            {review}
                                                      </div>
                                                ))
                                          )}
                                    </div>
                              </div>
                        </div>
                  </section>
            );
      };
}

export default ProductDetail;

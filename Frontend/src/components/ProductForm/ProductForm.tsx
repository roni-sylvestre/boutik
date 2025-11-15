import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//  validation Zod
const productSchema = z.object({
      title: z
            .string()
            .min(3, "Le nom doit comporter au moins 3 caractères.")
            .max(100, "Le nom est trop long."),
      description: z
            .string()
            .min(10, "La description doit comporter au moins 10 caractères."),
      price: z
            .number("Le prix doit être un nombre valide.")
            .positive("Le prix doit être supérieur à 0."),
      image: z
            .instanceof(File)
            .optional()
            .refine((file) => file instanceof File && file.size > 0, {
                  message: "Veuillez télécharger une image.",
            }),
});

type ProductFormData = z.infer<typeof productSchema>;


const ProductForm = () => {

      const [preview, setPreview] = useState<string | null>(null);

      const {
            register,
            handleSubmit,
            setValue,
            formState: { errors, isSubmitting },
      } = useForm<ProductFormData>({
            resolver: zodResolver(productSchema),
            mode: "onBlur",
      });

      const onSubmit = async (data: ProductFormData) => {
            // console.log("Produit ajouté.")
            console.log("Nouveau produit ajouté :", data.title);
      };

      const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0];
            if (file) {
                  setValue("image", file);
                  const reader = new FileReader();
                  reader.onload = () => setPreview(reader.result as string);
                  reader.readAsDataURL(file);
            }
      };
      return (
            <>
                  <h2 className="text-2xl font-bold text-blue-600 mb-6 text-center">
                        Ajouter un nouveau produit
                  </h2>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Nom du produit
                              </label>
                              <input
                                    type="text"
                                    {...register("title")}
                                    placeholder="Nom du produit"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                              />
                              {errors.title && (
                                    <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
                              )}
                        </div>

                        <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Description
                              </label>
                              <textarea
                                    {...register("description")}
                                    placeholder="Décris ton produit..."
                                    rows={4}
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
                              />
                              {errors.description && (
                                    <p className="text-red-500 text-sm mt-1">
                                          {errors.description.message}
                                    </p>
                              )}
                        </div>

                        <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Prix (EUR)
                              </label>
                              <input
                                    type="number"
                                    step="0.01"
                                    {...register("price", { valueAsNumber: true })}
                                    placeholder="0.00"
                                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                              />
                              {errors.price && (
                                    <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
                              )}
                        </div>

                        <div>
                              <label className="block text-sm font-semibold text-gray-700 mb-1">
                                    Image du produit
                              </label>
                              <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full text-sm text-gray-600 file:mr-3 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
                              />
                              {errors.image && (
                                    <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
                              )}

                              {preview && (
                                    <div className="mt-4">
                                          <img
                                                src={preview}
                                                alt="Aperçu"
                                                className="w-full h-56 object-cover rounded-lg border border-blue-100 shadow-sm"
                                          />
                                    </div>
                              )}
                        </div>

                        <button
                              type="submit"
                              disabled={isSubmitting}
                              className="w-1/3 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 disabled:opacity-50"
                        >
                              {isSubmitting ? "Ajout en cours..." : "Ajouter le produit"}
                        </button>
                  </form>
            </>
      )
}

export default ProductForm
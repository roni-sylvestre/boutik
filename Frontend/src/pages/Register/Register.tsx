import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "@tanstack/react-router";

// Validation
const registerSchema = z
      .object({
            pseudo: z.string().min(3, { message: "Le pseudo doit contenir au moins 3 caractères" }),
            email: z.string().email({ message: "Email invalide" }),
            password: z.string().min(6, { message: "Mot de passe trop court" }),
            confirmPassword: z.string().min(6, { message: "Confirmation obligatoire" }),
      })
      .refine((data) => data.password === data.confirmPassword, {
            message: "Les mots de passe ne correspondent pas",
            path: ["confirmPassword"],
      });

type RegisterFormInputs = z.infer<typeof registerSchema>;

const Register: React.FC = () => {
      const {
            register: formRegister,
            handleSubmit,
            formState: { errors, isValid },
      } = useForm<RegisterFormInputs>({
            resolver: zodResolver(registerSchema),
            mode: "onChange",
      });

      const onSubmit = (data: RegisterFormInputs) => {
            // console.log("Inscription OK");
            console.log(data.email)
      };

      return (
            <div className="flex justify-center items-center min-h-screen bg-blue-50">
                  <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                              S'inscrire
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                              <div>
                                    <label htmlFor="pseudo" className="block text-sm font-medium text-gray-700 mb-1">
                                          Pseudo
                                    </label>
                                    <input
                                          id="pseudo"
                                          type="text"
                                          {...formRegister("pseudo")}
                                          aria-invalid={!!errors.pseudo}
                                          aria-describedby="pseudo-error"
                                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.pseudo ? "border-red-500" : "border-gray-300"
                                                }`}
                                    />
                                    {errors.pseudo && (
                                          <p id="pseudo-error" className="text-red-500 text-sm mt-1">
                                                {errors.pseudo.message}
                                          </p>
                                    )}
                              </div>

                              <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                          Email
                                    </label>
                                    <input
                                          id="email"
                                          type="email"
                                          {...formRegister("email")}
                                          aria-invalid={!!errors.email}
                                          aria-describedby="email-error"
                                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.email ? "border-red-500" : "border-gray-300"
                                                }`}
                                    />
                                    {errors.email && (
                                          <p id="email-error" className="text-red-500 text-sm mt-1">
                                                {errors.email.message}
                                          </p>
                                    )}
                              </div>

                              <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                          Mot de passe
                                    </label>
                                    <input
                                          id="password"
                                          type="password"
                                          {...formRegister("password")}
                                          aria-invalid={!!errors.password}
                                          aria-describedby="password-error"
                                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.password ? "border-red-500" : "border-gray-300"
                                                }`}
                                    />
                                    {errors.password && (
                                          <p id="password-error" className="text-red-500 text-sm mt-1">
                                                {errors.password.message}
                                          </p>
                                    )}
                              </div>

                              <div>
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                          Confirmer le mot de passe
                                    </label>
                                    <input
                                          id="confirmPassword"
                                          type="password"
                                          {...formRegister("confirmPassword")}
                                          aria-invalid={!!errors.confirmPassword}
                                          aria-describedby="confirmPassword-error"
                                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.confirmPassword ? "border-red-500" : "border-gray-300"
                                                }`}
                                    />
                                    {errors.confirmPassword && (
                                          <p id="confirmPassword-error" className="text-red-500 text-sm mt-1">
                                                {errors.confirmPassword.message}
                                          </p>
                                    )}
                              </div>

                              <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                    S’inscrire
                              </button>
                        </form>

                        <p className="mt-4 text-center text-gray-600">
                              Déjà un compte ?{" "}
                              <Link to="/login" className="text-blue-600 font-medium hover:underline">
                                    Se connecter
                              </Link>
                        </p>
                  </div>
            </div>
      );
};

export default Register

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Link } from "@tanstack/react-router";

// validation
const loginSchema = z.object({
      email: z.string().email({ message: "Email invalide" }),
      password: z
            .string()
            .min(8, { message: "Mot de passe trop court" })
            .regex(/[A-Z]/, "Doit contenir une majuscule")
            .regex(/[a-z]/, "Doit contenir une minuscule")
            .regex(/\d/, "Doit contenir un chiffre")
            .regex(/[@$!%*?&]/, "Doit contenir un caractère spécial"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const Login: React.FC = () => {
      const {
            register,
            handleSubmit,
            formState: { errors, isValid },
      } = useForm<LoginFormInputs>({
            resolver: zodResolver(loginSchema),
            mode: "onChange",
      });

      const onSubmit = (data: LoginFormInputs) => {
            console.log("Connexion avec:", { email: data.email });
      };

      return (
            <div className="flex justify-center items-center min-h-screen bg-blue-50">
                  <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
                        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
                              Se connecter
                        </h1>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                              <div>
                                    <label
                                          htmlFor="email"
                                          className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                          Email
                                    </label>
                                    <input
                                          id="email"
                                          type="email"
                                          {...register("email")}
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
                                    <label
                                          htmlFor="password"
                                          className="block text-sm font-medium text-gray-700 mb-1"
                                    >
                                          Mot de passe
                                    </label>
                                    <input
                                          id="password"
                                          type="password"
                                          {...register("password")}
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
                              <button
                                    type="submit"
                                    disabled={!isValid}
                                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                              >
                                    Se connecter
                              </button>
                        </form>
                        <p className="mt-4 text-center text-gray-600">
                              Pas encore de compte ?{" "}
                              <Link
                                    to="/register"
                                    className="text-blue-600 font-medium hover:underline"
                              >
                                    S’inscrire
                              </Link>
                        </p>
                  </div>
            </div>
      );
};

export default Login;

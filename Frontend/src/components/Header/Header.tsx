// src/components/Header.tsx
import { Link } from "@tanstack/react-router";
import React, { useState } from "react";


const Header: React.FC = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);

      return (
            <header className="bg-blue-600 text-white">
                  <div className="container mx-auto flex justify-between items-center py-4 px-6">
                        <div className="text-2xl font-bold">
                              <Link to="/">BoutiK</Link>
                        </div>

                        <nav className="hidden md:flex space-x-6">
                              <Link
                                    to="/"
                                    className="hover:text-blue-200 transition-colors duration-200"
                              >
                                    Home
                              </Link>
                              <Link
                                    to="/login"
                                    className="hover:text-blue-200 transition-colors duration-200"
                              >
                                    Connexion
                              </Link>
                        </nav>

                        <div className="md:hidden">
                              <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="focus:outline-none"
                              >
                                    {isMenuOpen ? (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M6 18L18 6M6 6l12 12"
                                                />
                                          </svg>
                                    ) : (
                                          <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                          >
                                                <path
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      strokeWidth={2}
                                                      d="M4 6h16M4 12h16M4 18h16"
                                                />
                                          </svg>
                                    )}
                              </button>
                        </div>
                  </div>

                  {isMenuOpen && (
                        <nav className="md:hidden bg-blue-500 px-6 py-4 space-y-3">
                              <Link
                                    to="/"
                                    className="block hover:text-blue-200 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                              >
                                    Home
                              </Link>
                              <Link
                                    to="/login"
                                    className="block hover:text-blue-200 transition-colors duration-200"
                                    onClick={() => setIsMenuOpen(false)}
                              >
                                    Connexion
                              </Link>
                        </nav>
                  )}
            </header>
      );
};

export default Header;

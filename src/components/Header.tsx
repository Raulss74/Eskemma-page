// src/components/Header.tsx

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Importar el ícono de hamburguesa
import RegisterModal from "./RegisterModal"; // Importar el modal de registro

const Header = () => {
  // Estado para controlar la visibilidad del menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Estado para controlar la visibilidad del modal de registro
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  return (
    <header className="bg-white-eske text-black-eske py-4 px-6 sm:px-10 md:px-14 sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" aria-label="Ir al inicio">
            <img
              src="/src/assets/img/esk_log_csm.svg"
              alt="Logo"
              className="h-6 w-auto sm:h-8 md:h-10" 
            />
          </a>
        </div>

        {/* Ícono de Hamburguesa y Elementos de la Derecha */}
        <div className="flex items-center space-x-4 relative">
          {/* Ícono de Hamburguesa */}
          <button
            className="cursor-pointer p-2 text-black-eske hover:text-blue-70 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="h-8 w-8 sm:h-10 sm:w-10 text-black-eske hover:text-blue-70" /> {/* Tamaño ajustado */}
          </button>

          {/* Texto y Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <span
              className="text-10px font-medium hover:text-blue-70 cursor-pointer ml-2"
              onClick={() => setIsRegisterModalOpen(true)} // Abrir el modal de registro
            >
              REGÍSTRATE
            </span>
            <span className="text-10px font-medium hover:text-blue-70 cursor-pointer">
              INICIAR SESIÓN
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-400 rounded-full flex items-center justify-center">
              {/* Avatar del Usuario */}
              <span className="text-xs sm:text-sm font-bold text-gray-600">JD</span> {/* Tamaño ajustado */}
            </div>
          </div>

          {/* Menú Desplegable (Hamburguesa) */}
          <div
            className={`absolute top-full right-0 bg-white-eske shadow-md mt-2 py-4 z-10 text-base sm:text-lg transition-all duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <nav>
              <ul className="flex flex-col space-y-2 px-4 sm:px-6">
                <li>
                  <a
                    href="/"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    INICIO
                  </a>
                </li>
                <li>
                  <a
                    href="/sefix"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    SEFIX
                  </a>
                </li>
                <li>
                  <a
                    href="/canvas"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    MODDULO
                  </a>
                </li>
                <li>
                  <a
                    href="/monitor"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    MONITOR
                  </a>
                </li>
                <li>
                  <a
                    href="/cursos"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    CURSOS
                  </a>
                </li>
                <li>
                  <a
                    href="/consultoria"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    CONSULTORÍA
                  </a>
                </li>
                <li>
                  <a
                    href="/elbauldefouche"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    EL BAÚL DE FOUCHÉ
                  </a>
                </li>
                <li>
                  <a
                    href="/recursos"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    RECURSOS
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="block px-4 py-2 rounded hover:bg-blue-eske hover:text-white hover:font-bold transition-colors duration-300"
                  >
                    CONTACTO
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Modal de Registro */}
      <RegisterModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />
    </header>
  );
};

export default Header;
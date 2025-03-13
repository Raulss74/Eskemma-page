// src/components/Header.tsx

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid"; // Importar el ícono de hamburguesa

const Header = () => {
  // Estado para controlar la visibilidad del menú hamburguesa
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white-eske text-black-eske py-10 px-14 sticky top-0 z-50">
      <div className="w-full flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" aria-label="Ir al inicio">
          <img
            src="/src/assets/img/esk_log_csm.svg" 
            alt="Logo"
            className="h-16 w-auto" 
          />
          </a>
        </div>

        {/* Ícono de Hamburguesa y Elementos de la Derecha */}
        <div className="flex items-center space-x-4 relative">
          {/* Ícono de Hamburguesa */}
          <button
            className="cursor-pointer p-4 text-black-eske hover:text-blue-70 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Bars3Icon className="h-10 w-10 text-black-eske hover:text-blue-70" /> {/* Ícono de hamburguesa */}
          </button>

          {/* Texto y Avatar */}
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-16px font-medium hover:text-blue-70 cursor-pointer">
              REGÍSTRATE
            </span>
            <span className="text-16px font-medium hover:text-blue-70 cursor-pointer">
              INICIAR SESIÓN
            </span>
            <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center">
              {/* Avatar del Usuario */}
              <span className="text-16px font-bold text-gray-600">JD</span> {/* Ejemplo de iniciales */}
            </div>
          </div>

          {/* Menú Desplegable (Hamburguesa) */}
          <div
            className={`absolute top-full left-0 right-0 bg-white-eske shadow-md mt-2 py-4 z-10 text-2xl transition-all duration-300 ${
              isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
          >
            <nav>
              <ul className="flex flex-col space-y-2 px-8">
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
    </header>
  );
};

export default Header;
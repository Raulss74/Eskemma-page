// src/components/WorkingPage.tsx

import React from "react";

interface WorkingPageProps {
  pageName: string; // Nombre de la página que se está construyendo
}

const WorkingPage: React.FC<WorkingPageProps> = ({ pageName }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-700">
      {/* Encabezado */}
      <h1 className="text-24px font-bold text-bluegreen-eske mb-4">
        En construcción...
      </h1>

      {/* Mensaje descriptivo */}
      <p className="text-16px font-light text-center mb-8">
        Pronto tendrás la página de <strong>{pageName}</strong> a tu disposición.
      </p>

      {/* Ilustración SVG */}
      <div className="flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          className="w-64 h-64 text-gray-400"
        >
          <g fill="none" stroke="currentColor" strokeWidth="4">
            {/* Base de construcción */}
            <rect x="50" y="120" width="100" height="50" rx="5" />
            {/* Pilares */}
            <line x1="70" y1="120" x2="70" y2="80" />
            <line x1="130" y1="120" x2="130" y2="80" />
            {/* Techo */}
            <polygon points="70,80 130,80 100,50" />
            {/* Herramientas */}
            <circle cx="100" cy="100" r="5" />
            <path d="M95,95 L105,105 M105,95 L95,105" />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default WorkingPage;
// src/pages/ElBauDeFouche.tsx
import BaulSidebar from "../components/BaulSidebar"
import BaulAIAssistant from "../components/BaulAIAssistant"

const ElBauDeFouche = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar personalizado */}
      <BaulSidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800">El Baúl de Fouché</h2>
        <p className="mt-2 text-gray-600">
          Esta es la página de El Baúl de Fouché. Aquí puedes agregar funcionalidades específicas.
        </p>

        {/* Ejemplo de contenido */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Característica Principal</h3>
          <p className="mt-2 text-gray-500">
            Descripción de la característica principal de El Baúl de Fouché.
          </p>
        </div>
      </main>

      {/* AIAssistant personalizado */}
      <BaulAIAssistant />
    </div>
  );
};

export default ElBauDeFouche;

// src/pages/Sefix.tsx
import ConsultoriaSidebar from "../components/ConsultoriaSidebar"
import ConsultoriaAIAssistant from "../components/ConsultoriaAIAssistant"

const Consultoria = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar personalizado */}
      <ConsultoriaSidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800">Consultoria</h2>
        <p className="mt-2 text-gray-600">
          Esta es la página de Consultoria. Aquí puedes agregar funcionalidades específicas.
        </p>

        {/* Ejemplo de contenido */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Característica Principal</h3>
          <p className="mt-2 text-gray-500">
            Descripción de la característica principal de Consultoria.
          </p>
        </div>
      </main>

      {/* AIAssistant personalizado */}
      <ConsultoriaAIAssistant />
    </div>
  );
};

export default Consultoria;
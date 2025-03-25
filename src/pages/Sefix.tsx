// src/pages/Sefix.tsx
//import SefixSidebar from "../components/SefixSidebar";
import SefixAIAssistant from "../components/SefixAIAssistant";

const Sefix = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar personalizado 
      <SefixSidebar /> */}

      {/* Contenido principal */}
      <main className="flex-1 p-4 bg-white-eske overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800">Sefix</h2>
        <p className="mt-2 text-gray-600">
          Esta es la página de Sefix. Aquí puedes agregar funcionalidades específicas.
        </p>

        {/* Ejemplo de contenido */}
        <div className="bg-white-eke p-6 rounded-lg shadow-md">
          <h3 className="text-xl bg-white-eske font-semibold text-gray-700">Característica Principal</h3>
          <p className="mt-2 text-gray-500">
            Descripción de la característica principal de Sefix.
          </p>
        </div>
        <div>
        <iframe
          src="http://127.0.0.1:5106" // Reemplaza XXXX con el puerto donde corre Shiny
          className="mt-25 absolute inset-0 w-full h-full border-none rounded-lg"        title="Dashboard de Shiny"
        ></iframe>
        </div>
      </main>

      {/* AIAssistant personalizado */}
      <SefixAIAssistant />
    </div>
  );
};

export default Sefix;
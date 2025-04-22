// src/pages/Canvas.tsx
import MonitorSidebar from "../components/MonitorSidebar";
import MonitorAIAssistant from "../components/MonitorAIAssistant";
import WorkingPage from "../components/WorkingPage";

const Sefix = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar personalizado */}
      <MonitorSidebar />

      {/* Contenido principal */}
      <main className="flex-1 p-4 overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800">Monitor</h2>
        <p className="mt-2 text-gray-600">
          Esta es la página de Monitor. Aquí puedes agregar funcionalidades específicas.
        </p>

        {/* Ejemplo de contenido */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700">Característica Principal</h3>
          <p className="mt-2 text-gray-500">
            Descripción de la característica principal de Monitor.
          </p>
        </div>

        <WorkingPage pageName="Monitor"/>
      </main>

      {/* AIAssistant personalizado */}
      <MonitorAIAssistant />
    </div>
  );
};

export default Sefix;
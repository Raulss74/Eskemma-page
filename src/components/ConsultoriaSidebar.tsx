// src/components/ConsultoriaSidebar.tsx
const ConsultoriaSidebar = () => {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/Consultoria" className="hover:text-blue-400">Inicio Consultoria</a>
            </li>
            <li className="mb-2">
              <a href="/Consultoria/settings" className="hover:text-blue-400">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default ConsultoriaSidebar;
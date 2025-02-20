// src/components/RecursosSidebar.tsx
const RecursosSidebar = () => {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/Recursos" className="hover:text-blue-400">Inicio Recursos</a>
            </li>
            <li className="mb-2">
              <a href="/Recursos/settings" className="hover:text-blue-400">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default RecursosSidebar;
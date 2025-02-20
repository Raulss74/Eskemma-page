// src/components/CursosSidebar.tsx
const CursosSidebar = () => {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/sefix" className="hover:text-blue-400">Inicio Cursos</a>
            </li>
            <li className="mb-2">
              <a href="/sefix/settings" className="hover:text-blue-400">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default CursosSidebar;
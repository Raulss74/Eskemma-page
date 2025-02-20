// src/components/BaulSidebar.tsx
const BaulSidebar = () => {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/Baul" className="hover:text-blue-400">Inicio El Baúl de Fouché</a>
            </li>
            <li className="mb-2">
              <a href="/Baul/settings" className="hover:text-blue-400">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default BaulSidebar;
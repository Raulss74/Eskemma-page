// src/components/SefixSidebar.tsx
const SefixSidebar = () => {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/sefix" className="hover:text-blue-400">Inicio Sefix</a>
              <a href="/elecciones-federales" className="hover:text-blue-400">elecciones-federales</a>
              <a href="/eleccones-locales" className="hover:text-blue-400">eleccones-locales</a>
              <a href="/geo-sociodemografica" className="hover:text-blue-400">geo-sociodemografica</a>
              <a href="/lista-nominal" className="hover:text-blue-400">lista-nominal</a>
            </li>
            <li className="mb-2">
              <a href="/sefix/settings" className="hover:text-blue-400">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default SefixSidebar;
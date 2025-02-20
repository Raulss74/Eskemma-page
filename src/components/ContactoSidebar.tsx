// src/components/ContactoSidebar.tsx
const ContactoSidebar = () => {
    return (
      <aside className="w-64 bg-gray-900 text-white p-4">
        <nav>
          <ul>
            <li className="mb-2">
              <a href="/Contacto" className="hover:text-blue-400">Inicio Contacto</a>
            </li>
            <li className="mb-2">
              <a href="/Contacto/settings" className="hover:text-blue-400">Configuración</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  };
  
  export default ContactoSidebar;
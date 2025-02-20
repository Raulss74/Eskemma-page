// src/components/Header.tsx
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">Mi Aplicación</div>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-orange-400">Inicio</a>
            </li>
            <li>
              <a href="/sefix" className="hover:text-orange-400">Sefix</a>
            </li>
            <li>
              <a href="/canvas" className="hover:text-orange-400">Canvas</a>
            </li>
            <li>
              <a href="/monitor" className="hover:text-orange-400">Monitor</a>
            </li>            
            <li>
              <a href="/cursos" className="hover:text-orange-400">Cursos</a>
            </li>
            <li>
              <a href="/consultoria" className="hover:text-orange-400">Consultoría</a>
            </li>
            <li>
              <a href="/elbauldefouche" className="hover:text-orange-400">El Baúl de Fouché</a>
            </li>
            <li>
              <a href="/recursos" className="hover:text-orange-400">Recursos</a>
            </li>
            <li>
              <a href="/contacto" className="hover:text-orange-400">Contacto</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
// src/components/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>© 2023 Mi Aplicación. Todos los derechos reservados.</p>
        <div className="mt-4">
          <a href="#" className="text-gray-400 hover:text-white mx-2">Política de Privacidad</a>
          <a href="#" className="text-gray-400 hover:text-white mx-2">Términos de Servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
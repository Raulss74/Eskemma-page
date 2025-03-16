// src/components/Footer.tsx

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Obtener el año actual dinámicamente

  return (
    <footer>
      {/* Primera sección: Fondo blue-eske */}
      <div className="bg-bluegreen-eske text-white-eske py-12 px-4 sm:px-6 md:px-8">
        <div className="w-[90%] mx-auto max-w-screen-xl">
          {/* Logotipo centrado */}
          <div className="flex justify-center mb-8">
            <img
              src="/src/assets/img/esk_log_wsm.svg" // Ruta del logotipo
              alt="Eskemma Logo"
              className="h-14 w-auto"
            />
          </div>

          {/* Íconos de redes sociales (espacio reservado) */}
          <div className="flex justify-center space-x-4 mb-8">
            {/* Ícono de X (Twitter) */}
            <a
              href="https://twitter.com/eskemma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-10 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth=".5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>

            {/* Ícono de LinkedIn */}
            <a
              href="https://linkedin.com/company/eskemma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-70 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth=".5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12" rx="2" ry="2"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* Ícono de YouTube */}
            <a
              href="https://www.youtube.com/@eskemma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-70 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="none"
                stroke="white"
                strokeWidth="10"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                {/* Contorno principal */}
                <path
                  d="M260.4,449c-57.1-1.8-111.4-3.2-165.7-5.3c-11.7-0.5-23.6-2.3-35-5c-21.4-5-36.2-17.9-43.8-39c-6.1-17-8.3-34.5-9.9-52.3
                    C2.5,305.6,2.5,263.8,4.2,222c1-23.6,1.6-47.4,7.9-70.3c3.8-13.7,8.4-27.1,19.5-37c11.7-10.5,25.4-16.8,41-17.5
                    c42.8-2.1,85.5-4.7,128.3-5.1c57.6-0.6,115.3,0.2,172.9,1.3c24.9,0.5,50,1.8,74.7,5c22.6,3,39.5,15.6,48.5,37.6
                    c6.9,16.9,9.5,34.6,11,52.6c3.9,45.1,4,90.2,1.8,135.3c-1.1,22.9-2.2,45.9-8.7,68.2c-7.4,25.6-23.1,42.5-49.3,48.3
                    c-10.2,2.2-20.8,3-31.2,3.4C366.2,445.7,311.9,447.4,260.4,449z M205.1,335.3c45.6-23.6,90.7-47,136.7-70.9
                    c-45.9-24-91-47.5-136.7-71.4C205.1,240.7,205.1,287.6,205.1,335.3z"
                />
              </svg>
            </a>

            {/* Ícono de TikTok */}
            <a
              href="https://www.tiktok.com/@eskemma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-70 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth=".5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                {/* Contorno del logo */}
                <path
                  d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z"
                />
              </svg>
            </a>

            {/* Ícono de Facebook */}
            <a
              href="https://www.facebook.com/eskemma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-70 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth=".5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                {/* Contorno del logo */}
                <path
                  d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"
                />
              </svg>
            </a>

            {/* Ícono de Instagram */}
            <a
              href="https://www.instagram.com/eskemma"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-70 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-12 h-12"
              >
                {/* Contorno principal */}
                <path
                  d="M50.3,29c-11.6,0-21.1,9.5-21.1,21.1s9.5,21.1,21.1,21.1c11.6,0,21-9.5,21-21.1S61.8,29,50.3,29z M50.3,66.2
                    c-8.9,0-16.1-7.2-16.1-16.1c0-8.9,7.2-16.1,16.1-16.1c8.8,0,16,7.2,16,16.1C66.3,59,59.1,66.2,50.3,66.2z"
                />
                {/* Cámara central */}
                <path
                  d="M73.8,17.1c-2.2,0-4.2,0.8-5.7,2.3c-1.5,1.5-2.3,3.5-2.3,5.7c0,2.2,0.8,4.2,2.3,5.7c1.5,1.5,3.5,2.3,5.7,2.3
                    s4.2-0.8,5.7-2.3v0c1.4-1.4,2.3-3.4,2.4-5.6l0-0.1c0-2.1-0.9-4.1-2.3-5.5C78.1,18,76,17.1,73.8,17.1z M75.9,27.2
                    c-1.1,1.1-3.2,1.1-4.3,0c-0.6-0.6-0.9-1.3-0.9-2.1s0.3-1.6,0.9-2.1c0.6-0.6,1.3-0.9,2.1-0.9c0.8,0,1.6,0.3,2.2,0.9
                    c0.5,0.5,0.9,1.3,0.9,2C76.8,25.9,76.5,26.7,75.9,27.2z"
                />
                {/* Contorno exterior */}
                <path
                  d="M67.8,7H32.7C18.6,7,7.2,18.4,7.2,32.5v35.2c0,14.1,11.4,25.5,25.5,25.5h35.2c14.1,0,25.5-11.4,25.5-25.5V32.5
                    C93.3,18.4,81.9,7,67.8,7z M88.3,67.7c0,11.3-9.2,20.5-20.5,20.5H32.7c-11.3,0-20.5-9.2-20.5-20.5V32.5c0-11.3,9.2-20.5,20.5-20.5
                    h35.2c11.3,0,20.5,9.2,20.5,20.5V67.7z"
                />
              </svg>
            </a>

            

            
          </div>

          {/* Contenedor de dos columnas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto max-w-screen-xl">
            {/* Columna 1: Navegación */}
            <div>
              <h3 className="text-14px font-medium mb-4">Navegación</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Inicio
                  </a>
                </li>
                <li>
                  <a
                    href="/recursos"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Recursos
                  </a>
                </li>
                <li>
                  <a
                    href="/el-baul-de-fouche"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    El Baúl de Fouché
                  </a>
                </li>
                <li>
                  <a
                    href="/moddulo"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Moddulo
                  </a>
                </li>
                <li>
                  <a
                    href="/sefix"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Sefix
                  </a>
                </li>
                <li>
                  <a
                    href="/cursos"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Cursos
                  </a>
                </li>
                <li>
                  <a
                    href="/contacto"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Contacto
                  </a>
                </li>
                <li>
                  <a
                    href="/terminos-y-condiciones"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Términos y condiciones
                  </a>
                </li>
                <li>
                  <a
                    href="/politica-de-privacidad"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Política de privacidad
                  </a>
                </li>
              </ul>
            </div>

            {/* Columna 2: Sitios de interés */}
            <div>
              <h3 className="text-14px font-medium mb-4">Sitios de interés</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://ine.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    INE
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.diputados.gob.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    H. Cámara de Diputados
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.senado.gob.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    Senado de la República
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.inegi.org.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    INEGI
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.coneval.org.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    CONEVAL
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.unam.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    UNAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.colmex.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    COLMEX
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.scjn.gob.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    SCJN
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.tepjf.gob.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-10 transition-colors duration-300"
                  >
                    TEPJF
                  </a>
                </li>
              </ul>
            </div>
          </div>


        </div>
      </div>

      {/* Segunda sección: Fondo bluegreen-eske */}
      <div className="bg-bluegreen-70 text-gray-10 py-6 px-4 sm:px-6 md:px-8 text-center font-light text-8px">
        <div className="w-[90%] mx-auto max-w-screen-xl">
          <p>
            Eskemma | {currentYear} | © Todos los derechos reservados |{" "}
            <a
              href="/condiciones-de-uso"
              className="hover:text-bluegreen-10 transition-colors duration-300"
            >
              Condiciones de uso
            </a>{" "}
            |{" "}
            <a
              href="/politica-de-cookies"
              className="hover:text-bluegreen-10 transition-colors duration-300"
            >
              Política de cookies
            </a>{" "}
            |{" "}
            <a
              href="/declaracion-de-accesibilidad"
              className="hover:text-bluegreen-10 transition-colors duration-300"
            >
              Declaración de accesibilidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
// src/components/FaqSection.tsx
import { useState } from "react";

const FaqSection = () => {
  // Estado para controlar qué dropdown está abierto
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  // Función para alternar el estado del dropdown
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <section
      className="bg-gray-10 py-16 px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: "var(--Gray-10)" }}
    >
      <div className="w-[90%] mx-auto max-w-screen-xl">
        {/* Título de la Sección */}
        <h2 className="text-16px font-medium text-bluegreen-eske text-center mb-12">
          Preguntas frecuentes
        </h2>

        {/* Contenedor de las Tarjetas Dropdown */}
        <div className="space-y-6">
          {/* Dropdown 1 */}
          <div className="bg-white-eske rounded-lg shadow-md p-6">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleDropdown(1)}
            >
              <span className="text-12px font-medium text-bluegreen-eske">
                ¿Qué es Eskemma?
              </span>
              <svg
                className={`w-6 h-6 text-bluegreen-eske transform transition-transform duration-300 ease-in-out ${
                  openDropdown === 1 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Respuesta del Dropdown */}
            {openDropdown === 1 && (
              <div className="mt-4 text-10px text-gray">
                <p>
                  Eskemma es un ecosistema digital para el triunfo político. Te invitamos a explorar los recursos gratuitos y de pago para tu proyecto y que nos permiten acompañarte permanentemente hacia el logro de tus objetivos políticos.
                </p>
              </div>
            )}
          </div>

          {/* Dropdown 2 */}
          <div className="bg-white-eske rounded-lg shadow-md p-6">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleDropdown(2)}
            >
              <span className="text-12px font-medium text-bluegreen-eske">
                ¿Cómo puedo agendar una asesoría gratuita?
              </span>
              <svg
                className={`w-6 h-6 text-bluegreen-eske transform transition-transform duration-300 ease-in-out ${
                  openDropdown === 2 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Respuesta del Dropdown */}
            {openDropdown === 2 && (
              <div className="mt-4 text-10px text-gray">
                <p>
                  Puedes agendar una asesoría gratuita haciendo clic en el botón "AGENDAR ASESORÍA GRATUITA" en esta página.
                </p>
              </div>
            )}
          </div>

          {/* Dropdown 3 */}
          <div className="bg-white-eske rounded-lg shadow-md p-6">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleDropdown(3)}
            >
              <span className="text-12px font-medium text-bluegreen-eske">
                ¿Qué diferencia a Eskemma de otros consultores políticos?
              </span>
              <svg
                className={`w-6 h-6 text-bluegreen-eske transform transition-transform duration-300 ease-in-out ${
                  openDropdown === 3 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Respuesta del Dropdown */}
            {openDropdown === 3 && (
              <div className="mt-4 text-10px text-gray">
                <p>
                  Eskemma combina tecnología, análisis de datos y experiencia política para ofrecer soluciones personalizadas y efectivas.
                </p>
              </div>
            )}
          </div>

          {/* Dropdown 4 */}
          <div className="bg-white-eske rounded-lg shadow-md p-6">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleDropdown(4)}
            >
              <span className="text-12px font-medium text-bluegreen-eske">
                ¿Ofrecen servicios internacionales?
              </span>
              <svg
                className={`w-6 h-6 text-bluegreen-eske transform transition-transform duration-300 ease-in-out ${
                  openDropdown === 4 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Respuesta del Dropdown */}
            {openDropdown === 4 && (
              <div className="mt-4 text-10px text-gray">
                <p>
                  Sí, Eskemma tiene experiencia trabajando en proyectos políticos a nivel internacional. Contáctenos para más detalles.
                </p>
              </div>
            )}
          </div>

          {/* Dropdown 5 */}
          <div className="bg-white-eske rounded-lg shadow-md p-6">
            <button
              className="flex items-center justify-between w-full text-left focus:outline-none"
              onClick={() => toggleDropdown(5)}
            >
              <span className="text-12px font-medium text-bluegreen-eske">
                ¿Cuál es el costo de los servicios?
              </span>
              <svg
                className={`w-6 h-6 text-bluegreen-eske transform transition-transform duration-300 ease-in-out ${
                  openDropdown === 5 ? "rotate-180" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Respuesta del Dropdown */}
            {openDropdown === 5 && (
              <div className="mt-4 text-10px text-gray">
                <p>
                  Los costos varían dependiendo del alcance y la naturaleza del proyecto. Ofrecemos planes personalizados para satisfacer tus necesidades.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Ver más FAQ */}
        <div className="text-center mt-8">
          <a
            href="/faq"
            className="text-blue-eske hover:text-blue-60 font-medium text-10px"
          >
            Ver más FAQ
          </a>
        </div>

        {/* Texto Adicional */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-16px font-medium text-bluegreen-eske">
            ¡Conéctate con el éxito político!
          </p>
          <p className="text-14px font-normal text-gray">
            Queremos ser tus aliados para impulsar tu proyecto.
          </p>
        </div>

        {/* Botón CONTACTAR CON ESKEMMA */}
        <div className="text-center mt-8">
          <a
            href="/contacto"
            className="inline-block bg-bluegreen-eske text-white-eske text-12px font-bold uppercase px-8 py-4 rounded-lg shadow-md hover:bg-bluegreen-70 transition-all duration-300 ease-in-out"
          >
            CONTACTAR CON ESKEMMA
          </a>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;


interface ResponseSuscriptionProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string; // Nombre del usuario
}

export default function ResponseSuscription({
  isOpen,
  onClose,
  userName,
}: ResponseSuscriptionProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div
        className="bg-white-eske rounded-lg shadow-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[80vh]"
        style={{ marginTop: "20px" }}
      >
        {/* Botón de Cierre */}
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-eske transition-colors duration-300"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Contenido del Modal */}
        <div className="space-y-6 text-center">
          {/* Espacio para el logotipo */}
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/img/esk_log_csm.svg" // Ruta del logotipo
              alt="Eskemma Logo"
              className="w-60 h-24 object-contain"
            />
          </div>

          {/* Saludo personalizado */}
          <p className="text-12px font-bold text-bluegreen-eske">
            Hola, {userName}
          </p>

          {/* Mensaje de felicitaciones */}
          <p className="text-10px font-normal text-gray">
            ¡Felicidades por suscribirte a Eskemma!
          </p>

          {/* Mensaje destacado */}
          <p className="text-10px font-bold text-gray">
            Ahora cuentas con el respaldo de profesionales para tu proyecto político.
          </p>

          {/* Información sobre el correo */}
          <p className="text-10px font-normal text-gray">
            Hemos enviado un email a tu cuenta de correo con la información de tu compra y las indicaciones para la facturación.
          </p>

          {/* Contacto */}
          <p className="text-10px font-normal text-gray">
            Para cualquier información sobre tu compra contacta con nosotros al correo:{" "}
            <span className="font-bold text-bluegreen-eske">clientes@eskemma.com</span>
          </p>

          {/* Invitación a explorar recursos */}
          <p className="text-10px font-normal text-gray">
            Te invitamos a iniciar explorando los materiales disponibles para tu proyecto en la{" "}
            <a
              href="/recursos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-eske underline"
            >
              sección de recursos
            </a>
            .
          </p>

          {/* Agradecimiento final */}
          <p className="text-10px font-bold text-gray">
            Agradecemos tu confianza.
          </p>

          {/* Botón CERRAR */}
          <button
            className="w-full bg-bluegreen-eske text-white-eske py-2 rounded hover:bg-blue-eske transition-colors duration-300"
            onClick={onClose}
          >
            CERRAR
          </button>

          {/* Línea horizontal */}
          <hr className="border-gray-300 my-4" />

          {/* Links adicionales */}
          <p className="text-8px text-gray">
            Consultar{" "}
            <a
              href="/terminos-y-condiciones-uso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-eske underline"
            >
              términos y condiciones de uso
            </a>{" "}
            y{" "}
            <a
              href="/politica-de-privacidad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-eske underline"
            >
              política de privacidad
            </a>{" "}
            de Eskemma.
          </p>
        </div>
      </div>
    </div>
  );
}
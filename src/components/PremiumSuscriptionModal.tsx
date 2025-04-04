
interface PremiumSuscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void; // Prop para manejar el éxito del pago
}

export default function PremiumSuscriptionModal({
  isOpen,
  onClose,
  onPaymentSuccess,
}: PremiumSuscriptionModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
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

        <div className="space-y-6 text-left">
          {/* Título del Modal */}
          <h2 className="text-20px font-bold text-bluegreen-eske text-center">
            Suscripción
          </h2>

          {/* Imagen */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1611095973763-414019e72400?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Plan Premium"
              className="w-150 h-70"
            />
          </div>

          {/* Nombre del Plan */}
          <p className="text-14px font-medium text-bluegreen-eske">
            Plan Premium
          </p>

          {/* Precio */}
          <p className="text-12px font-bold text-black-eske">
            $4,000 (MX) por persona / mes
          </p>

          {/* Bloque de texto con la descripción */}
          <div className="space-y-2">
            <p className="text-10px font-normal text-gray-700">
              Tu suscripción mensual incluye:
            </p>
            <ul className="list-disc pl-6 text-10px text-gray-700 space-y-1">
              <li>Acceso total al ecosistema de Eskemma</li>
              <li>Acceso a recursos exclusivos</li>
              <li>Una sesión de asesoría gratuita al mes</li>
              <li>Asistencia online 24/7</li>
              <li>Acceso total a eBooks y plantillas</li>
            </ul>
          </div>

          {/* Método de pago */}
          <p className="text-14px font-medium text-bluegreen-eske">
            Método de pago
          </p>
          <div className="flex items-center justify-between">
            {/* Ícono de tarjeta de crédito y texto */}
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <p className="text-10px font-normal text-gray-700">
                **** **** **** 1234
              </p>
            </div>
            {/* Botón CAMBIAR */}
            <button
              className="text-10px font-medium text-gray-700 px-4 py-2 border border-gray-90 rounded hover:bg-blue-eske hover:text-white-eske"
            >
              CAMBIAR
            </button>
          </div>

          {/* Botón PAGAR */}
          <button
            className="w-full bg-bluegreen-eske text-white-eske py-2 rounded hover:bg-blue-eske transition-colors duration-300"
            onClick={onPaymentSuccess} // Llamar a la función de éxito del pago
          >
            PAGAR $4,000.ºº
          </button>

          {/* Línea horizontal */}
          <hr className="border-gray-300 my-4" />

          {/* Links adicionales */}
          <p className="text-8px text-gray-700 text-center">
            Consultar{" "}
            <a
              href="/terminos-y-condiciones-suscripciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-eske underline"
            >
              términos y condiciones de suscripciones
            </a>
          </p>
          <p className="text-8px text-gray-700 text-center">
            Acepto las{" "}
            <a
              href="/condiciones-de-uso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-eske underline"
            >
              condiciones de uso
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
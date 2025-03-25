

interface ResponseDateProps {
  isOpen: boolean;
  onClose: () => void;
  fullName: string; // Nombre del usuario
  email: string; // Correo electrónico del usuario
  dateTime: string; // Fecha y hora de la cita
}

export default function ResponseDate({
  isOpen,
  onClose,
  fullName,
  email,
  dateTime,
}: ResponseDateProps) {
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
        <div className="space-y-6 text-left">
          {/* Espacio para el logotipo */}
          <div className="flex justify-center mb-4">
            <img
              src="/src/assets/img/esk_log_csm.svg" // Ruta del logotipo
              alt="Eskemma Logo"
              className="w-62 h-24 object-contain" // Ajusta el tamaño del logotipo
            />
          </div>

          {/* Saludo personalizado */}
          <p className="text-12px font-bold text-bluegreen-eske">
            Hola, {fullName}:
          </p>

          {/* Mensaje de agradecimiento */}
          <p className="text-10px font-normal text-gray-700">
            Gracias por agendar la asesoría gratuita.
          </p>

          {/* Detalles de la cita */}
          <div>
            <p className="text-10px font-bold text-bluegreen-eske mb-2">
              Fecha y hora agendadas:
            </p>
            <p className="text-10px font-normal text-gray-700">{dateTime}</p>
          </div>

          {/* Confirmación de correo */}
          <p className="text-10px font-normal text-gray-700">
            <span className="font-bold text-10px text-bluegreen-eske">Importante:</span>{" "}
            Hemos enviado un email de confirmación a tu cuenta de correo:{" "} 
            <span className="font-bold">{email}</span>.
            En ese email hay indicaciones importantes para concluir la agenda de la sesión gratuita de asesoría.
          </p>          

          {/* Información del asesor */}
          <p className="text-10px font-normal text-gray-700">
            Para cualquier información sobre la reunión, favor de dirigirte con el asesor asignado para tu sesión de 20 minutos:
          </p>
          <div className="flex space-x-6">
            {/* Avatar del asesor (con imagen cargada) */}
            <div className="mt-4 w-12 h-12 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
              <img
                src="/src/assets/img/rss_px.jpg" // Ruta de la imagen del asesor
                alt="Asesor"
                className="w-full h-full object-cover" // Ajusta la imagen al tamaño del contenedor
              />
            </div>
            {/* Datos del asesor */}
            <div className="space-y-1 ">
              <p className="text-10px font-bold text-gray-700">Asesor:</p>
              <p className="text-10px font-normal text-gray-700">
                Raúl Sánchez Salgado
              </p>
              <p className="text-10px font-normal text-gray-700">
                raul.sanchezs@eskemma.com
              </p>
            </div>
          </div>

          {/* Instrucciones previas a la reunión */}
          <p className="text-10px font-normal text-gray-700">
            El día y hora acordados, favor de conectarte 5 minutos antes de la hora
            agendada.
          </p>

          {/* Enlaces con íconos */}
          <div className="space-y-2">
            {/* Enviar documentación */}
            <div className="flex items-center space-x-2">              
              <p className="text-10px font-normal text-gray-700">
                Si deseas enviar con anterioridad algún documento que consideres útil para
                la asesoría, favor de hacer clic{" "}
                <a
                  href="#"
                  className="text-blue-eske underline"
                >
                  aquí (enviar documento)
                </a>
                .
              </p>
            </div>

            {/* Cancelar asesoría */}
            <div className="mt-6 flex items-center space-x-2">
             
              <p className="text-10px font-normal text-gray-700">
                Si deseas cancelar la asesoría, haz clic{" "}
                <a
                  href="#"
                  className="text-blue-eske underline"
                >
                  aquí (cancelar asesoría)
                </a>
                .
              </p>
            </div>
          </div>

          {/* Agradecimiento final */}
          <p className="text-10px font-normal text-gray-700">
            Nuevamente, agradecemos tu interés.
          </p>

          {/* Botón CERRAR */}
          <button
            className="w-full bg-blue-eske text-white-eske py-2 rounded hover:bg-bluegreen-eske transition-colors duration-300"
            onClick={onClose}
          >
            CERRAR
          </button>

          {/* Línea horizontal */}
          <hr className="border-gray-300 my-4" />

          {/* Links adicionales */}
          <p className="text-8px text-gray-700 text-center">
            Consultar{" "}
            <a
              href="/terminos-y-condiciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-eske underline"
            >
              términos y condiciones de las asesorías en línea.
            </a>
          </p>
          <p className="text-8px text-gray-700 text-center">
            Al agendar la cita acepto las{" "}
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
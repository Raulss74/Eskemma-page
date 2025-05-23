import { useState } from "react";

interface BasicSuscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

export default function BasicSuscriptionModal({
  isOpen,
  onClose,
  onPaymentSuccess,
}: BasicSuscriptionModalProps) {
  const [selectedService, setSelectedService] = useState<string>("Moddulo");

  if (!isOpen) return null;

  // Estilo personalizado CORREGIDO para los radio buttons
  const radioButtonStyle = `
    .custom-radio {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border: 2px solid #6b7280;
      border-radius: 50%;
      outline: none;
      cursor: pointer;
      position: relative;
      transition: all 0.2s ease;
      vertical-align: middle;
    }
    
    .custom-radio:checked {
      border-color: #1e40af;
      background-color: #1e40af;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
    }
    
    .custom-radio:focus {
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
    }
  `;

  return (
    <div
      className="fixed inset-0 z-70 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <style>{radioButtonStyle}</style>
      
      <div
        className="bg-white-eske rounded-lg shadow-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[80vh]"
        style={{ marginTop: "20px" }}
      >
        <button
          className="absolute top-4 right-4 text-gray-700 hover:text-red-eske transition-colors duration-300"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="blue-eske"
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
          <h2 className="text-20px font-bold text-bluegreen-eske text-center">
            Suscripción
          </h2>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1565350552203-b68085b104df?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Plan Básico"
              className="w-150 h-70"
            />
          </div>

          <p className="text-14px font-medium text-bluegreen-eske">
            Plan Básico
          </p>

          <p className="text-12px font-bold text-black-eske">
            $2,000ºº (mx) pago por persona / mes
          </p>

          <p className="text-10px font-normal text-gray-700">
            Selecciona un servicio:
          </p>
          <div className="space-y-2">
            <label className="flex items-center space-x-2 ml-4 cursor-pointer">
              <input
                type="radio"
                name="service"
                value="Moddulo"
                checked={selectedService === "Moddulo"}
                onChange={(e) => setSelectedService(e.target.value)}
                className="custom-radio"
              />
              <span className="ml-2 text-10px font-normal text-gray-700">Moddulo</span>
            </label>

            <label className="flex items-center space-x-2 ml-4 cursor-pointer">
              <input
                type="radio"
                name="service"
                value="Sefix"
                checked={selectedService === "Sefix"}
                onChange={(e) => setSelectedService(e.target.value)}
                className="custom-radio"
              />
              <span className="ml-2 text-10px font-normal text-gray-700">Sefix</span>
            </label>

            <label className="flex items-center space-x-2 ml-4 cursor-pointer">
              <input
                type="radio"
                name="service"
                value="Cursos online"
                checked={selectedService === "Cursos online"}
                onChange={(e) => setSelectedService(e.target.value)}
                className="custom-radio"
              />
              <span className="ml-2 text-10px font-normal text-gray-700">Cursos online</span>
            </label>

            <label className="flex items-center space-x-2 ml-4 cursor-pointer">
              <input
                type="radio"
                name="service"
                value="Monitor"
                checked={selectedService === "Monitor"}
                onChange={(e) => setSelectedService(e.target.value)}
                className="custom-radio"
              />
              <span className="ml-2 text-10px font-normal text-gray-700">Monitor</span>
            </label>
          </div>

          <p className="text-14px font-medium text-bluegreen-eske">
            Método de pago
          </p>
          <div className="flex items-center justify-between">
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
            <button
              className="text-10px font-medium text-gray-700 px-4 py-2 border border-gray-90 rounded hover:bg-blue-eske hover:text-white-eske"
            >
              CAMBIAR
            </button>
          </div>

          <button
            className="w-full bg-bluegreen-eske text-white-eske py-2 rounded hover:bg-blue-eske transition-colors duration-300"
            onClick={onPaymentSuccess}
          >
            PAGAR $ 2,000.ºº
          </button>

          <hr className="border-gray-300 my-4" />

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
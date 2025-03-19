import { useState } from "react";

interface GuestContactFormData {
  fullName: string;
  email: string;
  message: string;
}

export default function GuestContactModal({
  isOpen,
  onClose,
  onOpenLoginModal, // Función para abrir el modal de inicio de sesión
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenLoginModal: () => void; // Prop para abrir el modal de inicio de sesión
}) {
  const [formData, setFormData] = useState<GuestContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Validación específica para el campo 'fullName' (permite letras, acentos, diéresis, espacios y ñ)
    if (name === "fullName") {
      const isValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value);
      if (!isValid) return; // Si no es válido, no actualizamos el estado
    }

    // Validación específica para el campo 'email'
    if (name === "email") {
      const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Validación básica de correo electrónico
      if (!isValid && value !== "") return; // Si no es válido y no está vacío, no actualizamos el estado
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el mensaje al servidor
    console.log("Datos del formulario de contacto:", formData);
    onClose(); // Cerrar el modal después de enviar
  };

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

        {/* Título */}
        <h2 className="text-20px font-bold text-bluegreen-eske text-center mb-6">
          Contacto
        </h2>

        {/* Texto de invitación */}
        <p className="text-10px text-gray-700 text-center mb-4">
          Te invitamos a registrarte en la comunidad de Eskemma
        </p>

        {/* Enlace "Registrarme" */}
        <p className="text-center mb-6">
          <a
            href="#"
            className="text-blue-eske underline"
            onClick={(e) => {
              e.preventDefault();
              onClose(); // Cerrar el modal de contacto
              // Aquí podrías redirigir al usuario al modal de registro
            }}
          >
            Registrarme
          </a>
        </p>

        {/* Contenedor con scroll */}
        <div className="max-h-[calc(80vh-120px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre completo */}
            <div>
              <label
                className="block text-10px font-medium text-gray-700 mb-1"
                htmlFor="fullName"
              >
                Nombre completo
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                title="Introduce tu nombre completo, incluyendo acentos y espacios."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-10px font-medium text-gray-700 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                title="Introduce un correo electrónico válido."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                className="block text-10px font-medium text-gray-700 mb-1"
                htmlFor="message"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4} // Altura inicial moderada
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske resize-none" // Desactivar el resize manual
              />
            </div>

            {/* Botón Enviar */}
            <button
              type="submit"
              className="w-full bg-white-eske text-gray-700 py-2 rounded hover:bg-gray-100 transition-colors duration-300"
            >
              ENVIAR
            </button>

            {/* Separador */}
            <hr className="border-gray-300 my-4" />

            {/* Enlace "¿Ya te has registrado?" */}
            <p className="text-8px text-gray-700 text-center">
              ¿Ya te has registrado?{" "}
              <a
                href="#"
                className="text-blue-eske underline"
                onClick={(e) => {
                  e.preventDefault();
                  onClose(); // Cerrar el modal de contacto
                  onOpenLoginModal(); // Abrir el modal de inicio de sesión
                }}
              >
                Inicia Sesión
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
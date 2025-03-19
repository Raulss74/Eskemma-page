import { useState } from "react";

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginModal({
  isOpen,
  onClose,
  onOpenRegisterModal, // Función para abrir el modal de registro
}: {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegisterModal: () => void; // Prop para abrir el modal de registro
}) {
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para autenticar al usuario
    console.log("Datos de inicio de sesión:", formData);
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Título */}
        <h2 className="text-20px font-bold text-bluegreen-eske text-center mb-6">Iniciar sesión</h2>

        {/* Contenedor con scroll */}
        <div className="max-h-[calc(80vh-120px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Usuario */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Usuario</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Contraseña */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Contraseña</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Botón Iniciar Sesión */}
            <button
              type="submit"
              className="w-full bg-blue-eske text-white-eske py-2 rounded hover:bg-bluegreen-70 transition-colors duration-300"
            >
              INICIAR SESIÓN
            </button>

            {/* Condiciones de uso */}
            <p className="mt-4 text-8px text-gray-700 text-center">
              Al iniciar sesión acepto las{" "}
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
                políticas de privacidad
              </a>{" "}
              de Eskemma.
            </p>

            {/* Separador */}
            <hr className="border-gray-300 my-4" />

            {/* Registrarme */}
            <p className="text-8px text-gray-700 text-center">
              ¿Aún no te has registrado?{" "}
              <a
                href="#"
                className="text-blue-eske underline"
                onClick={(e) => {
                  e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
                  onClose(); // Cerrar el modal de inicio de sesión
                  onOpenRegisterModal(); // Abrir el modal de registro
                }}
              >
                Registrarme
              </a>
            </p>

            {/* Recuperar contraseña */}
            <p className="text-8px text-gray-700 text-center">
              ¿No recuerdas tu contraseña?{" "}
              <a href="#" className="text-blue-eske underline">
                Recuperar contraseña
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
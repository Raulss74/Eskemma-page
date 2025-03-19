//components/RegiserModal.tsx

import { useState } from 'react';

interface RegisterFormData {
  name: string;
  lastName: string;
  gender: string;
  country: string;
  role: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export default function RegisterModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    lastName: '',
    gender: '',
    country: '',
    role: '',
    email: '',
    username: '', // Este campo se llenará automáticamente con el valor de `name`
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Validación específica para el campo 'lastName' (permite letras, acentos, diéresis, espacios y ñ)
    if (name === 'lastName') {
      const isValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]*$/.test(value); // Permite letras, acentos, diéresis, espacios y ñ
      if (!isValid) return; // Si no es válido, no actualizamos el estado
    }

    // Validación específica para el campo 'name' (permite letras, acentos, diéresis, espacios y ñ)
    if (name === 'name') {
      const isValid = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/.test(value); // Permite letras, acentos, diéresis, espacios y ñ
      if (!isValid) return; // Si no es válido, no actualizamos el estado

      // Actualizar automáticamente el campo 'username' con el valor de 'name'
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        username: value.toLowerCase().replace(/\s+/g, ''), // Eliminar espacios y convertir a minúsculas
      }));
      return; // Salimos temprano para evitar duplicar la actualización del estado
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validaciones adicionales antes de enviar el formulario
    if (formData.password !== formData.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    console.log('Datos del formulario:', formData);
    onClose(); // Cerrar el modal después de enviar
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
    >
      <div
        className="bg-white-eske rounded-lg shadow-lg w-full max-w-md p-6 relative overflow-y-auto max-h-[80vh]"
        style={{ marginTop: '20px' }} // Espacio superior para mejorar la composición
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
        <h2 className="text-20px font-bold text-bluegreen-eske text-center mb-6">Registro</h2>

        {/* Contenedor con scroll */}
        <div className="max-h-[calc(80vh-120px)] overflow-y-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nombre */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                title="Solo se permiten letras y espacios, incluyendo acentos y diéresis."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Apellidos */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Apellidos</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                title="Introduce uno o más apellidos separados por espacios, incluyendo acentos y diéresis."
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Sexo */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Sexo</label>
              <div className="flex space-x-4">
                {/* Mujer */}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Mujer"
                    checked={formData.gender === 'Mujer'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 text-10px">Mujer</span>
                </label>

                {/* Hombre */}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Hombre"
                    checked={formData.gender === 'Hombre'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 text-10px">Hombre</span>
                </label>

                {/* No binario */}
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="No binario"
                    checked={formData.gender === 'No binario'}
                    onChange={handleChange}
                    className="w-4 h-4"
                  />
                  <span className="text-gray-700 text-10px">No binario</span>
                </label>
              </div>
            </div>

            {/* País */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">País</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              >
                <option value="">Selecciona</option>
                <optgroup label="América">
                  <option value="México">México</option>
                  <option value="Estados Unidos">Estados Unidos</option>
                  <option value="Canadá">Canadá</option>
                </optgroup>
                <optgroup label="Europa">
                  <option value="España">España</option>
                </optgroup>
              </select>
            </div>

            {/* Rol */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Rol</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              >
                <option value="">Selecciona</option>
                <option value="Candidatura">Candidatura</option>
                <option value="Consultoría o Asesoría">Consultoría o Asesoría</option>
                <option value="Integrante de Partido Político">Integrante de Partido Político</option>
                <option value="Integrante de Campaña">Integrante de Campaña</option>
                <option value="Servidor/a Público">Servidor/a Público</option>
                <option value="Academia">Academia</option>
                <option value="Otro">Otro</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Usuario */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Usuario</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                minLength={5}
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
                minLength={8}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Confirmar Contraseña */}
            <div>
              <label className="block text-10px font-medium text-gray-700 mb-1">Confirmar contraseña</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                minLength={8}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-eske"
              />
            </div>

            {/* Botón Registrar */}
            <button
              type="submit"
              className="w-full bg-blue-eske text-white-eske py-2 rounded hover:bg-blue-70 transition-colors duration-300"
            >
              REGISTRARME
            </button>

            {/* Condiciones de uso */}
            <p className="mt-4 text-8px text-gray-700 text-center">
              Al registrarme acepto las{' '}
              <a
                href="/politica-de-privacidad"
                target="_blank" // Abrir en una nueva ventana
                rel="noopener noreferrer" // Mejora la seguridad
                className="text-blue-eske underline"
              >
                condiciones de uso y política de privacidad
              </a>{' '}
              de Eskemma.
            </p>

            {/* Separador */}
            <hr className="border-gray-300 my-4" />

            {/* Iniciar Sesión */}
            <p className="text-8px text-gray-700 text-center">
              ¿Ya te has registrado?{' '}
              <a href="#" className="text-blue-eske underline">
                Inicia sesión
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
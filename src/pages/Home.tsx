import { useState } from 'react';
import blogPosts from '../data/blogData';
import TeamModal from '../components/TeamModal';
import FaqSection from '../components/FaqSection';
import ScheduleDate from '../components/ScheduleDate';
import ResponseDate from '../components/ResponseDate';
import BasicSuscriptionModal from '../components/BasicSuscriptionModal';
import PremiumSuscriptionModal from '../components/PremiumSuscriptionModal';
import GrupalSuscriptionModal from '../components/GrupalSuscriptionModal';
import ResponseSuscription from '../components/ResponseSuscription';

// Definir el tipo de datos que se espera en onSubmitSuccess
interface FormData {
  fullName: string;
  email: string;
  dateTime: string;
}

const Home = () => {
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [isBasicSuscriptionModalOpen, setIsBasicSuscriptionModalOpen] =
    useState(false);
  const [isPremiumSuscriptionModalOpen, setIsPremiumSuscriptionModalOpen] =
    useState(false);
  const [isGrupalSuscriptionModalOpen, setIsGrupalSuscriptionModalOpen] =
    useState(false);
  const [isResponseSuscriptionModalOpen, setIsResponseSuscriptionModalOpen] =
    useState(false);

  // Nombre del usuario (puede ser dinámico según el formulario de suscripción)

  const [userName] = useState('Nombre de Usuario');

  // Estado para almacenar los datos del formulario
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    dateTime: '',
  });

  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      {/* Contenedor principal */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-[650px] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(/src/assets/img/hero.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Contenido del Hero */}
          <div className="absolute inset-0 bg-bluegreen-70 opacity-70"></div>
          <div className="relative z-10 text-center text-white-eske px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto w-full">
            <h1 className="text-30px leading-tight">Consultoría política</h1>
            <h2 className="mt-20 text-24px leading-tight">
              <span>Un ecosistema digital</span>
              <span className="block">para tu proyecto político</span>
            </h2>
            <div className="mt-[10vh] space-y-4 text-14px w-full">
              <p>Descubre tus ventajas competitivas.</p>
              <p>Te acompañamos con tecnología y datos.</p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          className="bg-gray-10 min-h-[580px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--Gray-10)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            <h2 className="text-20px font-bold text-center text-bluegreen-eske mb-12">
              Hoy en Eskemma
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="flex flex-col items-center text-center"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-contain rounded-lg mb-4"
                    style={{ aspectRatio: '16 / 9' }}
                  />
                  <h3 className="text-12px text-blue-70 font-medium mb-2">
                    {post.title}
                  </h3>
                  <p className="text-10px font-light text-gray mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    className="text-blue-eske hover:text-blue-60 font-medium text-10px"
                  >
                    Leer completo
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Información Relevante Section */}
        <section
          className="bg-white-eske min-h-[500px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--White-eske)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            {/* Título de la sección */}
            <h2 className="text-20px font-bold text-center text-bluegreen-eske mb-12">
              Información relevante
            </h2>

            {/* Entradas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Entrada 1 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="/src/assets/img/barras.gif" // Ruta de la imagen/gif
                  alt="Gráfica 1"
                  className="w-full h-auto object-contain rounded-lg mb-4"
                  style={{ aspectRatio: '16 / 9' }}
                />
                <p className="text-12px text-gray mb-4">
                  Tendencia positiva de participación electoral.
                </p>
                <a
                  href="/monitor/post1" // Enlace a la página Monitor
                  className="text-blue-eske hover:text-blue-60 font-medium text-8px"
                >
                  Consultar información
                </a>
              </div>

              {/* Entrada 2 */}
              <div className="flex flex-col items-center text-center">
                <img
                  src="/src/assets/img/box.gif" // Ruta de la imagen/gif
                  alt="Gráfica 2"
                  className="w-full h-auto object-contain rounded-lg mb-4"
                  style={{ aspectRatio: '16 / 9' }}
                />
                <p className="text-12px text-gray mb-4">
                  Análisis de la distribución demográfica por región.
                </p>
                <a
                  href="/monitor/post2" // Enlace a la página Monitor
                  className="text-blue-eske hover:text-blue-60 font-medium text-10px"
                >
                  Consultar información
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Sección - Propuesta */}
        <section
          className="bg-bluegreen-eske min-h-[500px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--Bluegreen-eske)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl flex flex-col md:flex-row items-center">
            {/* Mitad Izquierda - Gráfico GIF */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <img
                src="/src/assets/img/tiempo.gif" // Ruta del archivo GIF
                alt="Gráfico Propuesta"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Mitad Derecha - Texto */}
            <div className="w-full md:w-1/2 pl-0 md:pl-12 text-12px text-center text-white-eske">
              <p className=" font-light mb-4">
                <span>Nunca es demasiado pronto.</span>
                <span className="block">
                  Comencemos a planear tu estrategia.
                </span>
              </p>
              <p className="mt-24 font-light mb-4">
                <span>Haz que cada decisión sea efectiva</span>
                <span className="block">en el contexto de tu proyecto.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Sexta Sección - Sobre Nosotros */}
        <section className="bg-white-eske h-[1000px] py-20 px-4 sm:px-6 md:px-8">
          <div className="w-[90%] mx-auto max-w-screen-xl text-center">
            {/* Subtítulo */}
            <h2 className="text-20px font-bold text-bluegreen-eske mb-6">
              Sobre nosotros
            </h2>

            {/* Párrafo Principal */}
            <p className="text-12px font-normal text-gray-700 mb-6">
              Nuestro propósito es profesionalizar la vida pública.
            </p>

            {/* Recuadro para el Video */}
            <div className="relative w-full max-w-[680px] mx-auto h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://drive.google.com/file/d/1fUcRvFJJTxOTuCN1Nf725J0s8eglMM9O/preview"
                title="Video sobre nosotros"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Modal de Equipo */}
            <TeamModal />

            {/* Párrafo Adicional */}
            <p className="mt-16 text-12px font-normal text-gray-700 mb-8">
              Podemos colaborar desde ahora con una asesoría gratuita de 20
              minutos.
            </p>

            {/* Botón "AGENDAR ASESORÍA GRATUITA" */}
            <button
              onClick={() => setIsScheduleModalOpen(true)} // Abrir el modal
              className="inline-block bg-orange-eske text-white-eske text-10px font-bold uppercase px-8 py-4 rounded-lg shadow-md hover:bg-orange-70 transition-all duration-300 ease-in-out"
            >
              AGENDAR ASESORÍA GRATUITA
            </button>

            {/* Modal de Agendar Asesoría */}
            <ScheduleDate
              isOpen={isScheduleModalOpen} // Controlar la visibilidad del modal
              onClose={() => setIsScheduleModalOpen(false)} // Cerrar el modal
              onSubmitSuccess={(data) => {
                setFormData(data); // Almacenar los datos del formulario
                setIsResponseModalOpen(true); // Abrir el modal de confirmación
              }}
            />

            {/* Modal de Confirmación */}
            {isResponseModalOpen && (
              <ResponseDate
                isOpen={isResponseModalOpen} // Controlar la visibilidad del modal
                onClose={() => setIsResponseModalOpen(false)} // Cerrar el modal
                fullName={formData.fullName} // Pasar el nombre del usuario
                email={formData.email} // Pasar el correo electrónico
                dateTime={formData.dateTime} // Pasar la fecha y hora seleccionada
              />
            )}
          </div>
        </section>

        {/* Sección - Beneficios */}
        <section
          className="bg-bluegreen-eske min-h-[800px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--Bluegreen-eske)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl mt-4">
            {/* Contenedor Reducido en Anchura (10%) */}
            <div className="mx-auto w-[90%] max-w-[90%]">
              {/* Grilla de Tarjetas */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Fila 1 */}
                <div className="flex items-center justify-center bg-blue-60 p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-white-eske font-light text-center">
                    Acompañamiento profesional
                  </p>
                </div>
                <div className="flex items-center justify-center bg-white-eske p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-bluegreen-eske font-light text-center">
                    Resultados inmediatos
                  </p>
                </div>
                <div className="flex items-center justify-center bg-bluegreen-60 p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-white-eske font-light text-center">
                    Una inversión inteligente
                  </p>
                </div>

                {/* Fila 2 */}
                <div className="flex items-center justify-center bg-bluegreen-60 p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-white-eske font-light text-center">
                    No importa el tamaño de tu proyecto político
                  </p>
                </div>
                <div className="flex items-center justify-center bg-white-eske p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-bluegreen-eske font-light text-center">
                    Metodologías para hallar tus ventajas competitivas.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-blue-60 p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-white-eske font-light text-center">
                    Herramientas e información útil sin pagar más
                  </p>
                </div>

                {/* Fila 3 */}
                <div className="flex items-center justify-center bg-blue-60 p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-white-eske font-light text-center">
                    Te acompañamos con honestidad y profesionalismo.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-white-eske p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-bluegreen-eske font-light text-center">
                    Ejecuta acciones inmediatas.
                  </p>
                </div>
                <div className="flex items-center justify-center bg-bluegreen-60 p-6 rounded-lg shadow-lg h-48">
                  <p className="text-12px text-white-eske font-light text-center">
                    Asesoría de especialistas en todo momento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección - Testimonios */}
        <section
          className="bg-gray-10 min-h-[600px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--Gray-10)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            {/* Contenedor de Testimonios */}
            <div className="space-y-12">
              {/* Testimonio 1 */}
              <div className="flex items-center space-x-8">
                {/* Avatar (Primera Columna) */}
                <div className="w-16 h-16 rounded-full bg-blue-60 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://untitledui.com/images/avatars/brianna-ware" // Ruta de la imagen del usuario
                    alt="Usuario 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Texto (Segunda Columna) */}
                <blockquote className="text-12px text-gray-90 font-light max-w-[70%]">
                  "Cuando pensé que no había nada más que hacer en mi
                  candidatura decidí utilizar el <i>Moddulo</i> de Eskemma.
                  Descubrí que había muchas opciones para competir con fuerza."
                </blockquote>
              </div>

              {/* Testimonio 2 */}
              <div className="flex items-center justify-end space-x-8">
                {/* Texto (Primera Columna) */}
                <blockquote className="text-12px text-gray-90 font-light max-w-[70%] text-right">
                  "En los cursos de comunicación política siempre hablan de
                  estrategia, pero hasta ahora sé cómo hacerlo en territorio, no
                  sólo en teoría."
                </blockquote>
                {/* Avatar (Segunda Columna) */}
                <div className="w-16 h-16 rounded-full bg-orange-60 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://untitledui.com/images/avatars/drew-cano" // Ruta de la imagen del usuario
                    alt="Usuario 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Testimonio 3 */}
              <div className="flex items-center space-x-8">
                {/* Avatar (Primera Columna) */}
                <div className="w-16 h-16 rounded-full bg-green-60 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://untitledui.com/images/avatars/ethan-valdez" // Ruta de la imagen del usuario
                    alt="Usuario 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Texto (Segunda Columna) */}
                <blockquote className="text-12px text-gray-90 font-light max-w-[70%]">
                  "Con su ayuda logré analizar mejor la información y saber cómo
                  aventajar a los otros partidos. Lo mejor es que lo hice yo
                  mismo y me ahorré una lana."
                </blockquote>
              </div>

              {/* Testimonio 4 */}
              <div className="flex items-center justify-end space-x-8">
                {/* Texto (Primera Columna) */}
                <blockquote className="text-12px text-gray-90 font-light max-w-[70%] text-right">
                  "Pensé que estos servicios sóo eran para grandes campañas.
                  Participé en una elección local en 2024 y pude utilizar mucha
                  de la ayuda que me brindaron."
                </blockquote>
                {/* Avatar (Segunda Columna) */}
                <div className="w-16 h-16 rounded-full bg-red-60 flex items-center justify-center overflow-hidden">
                  <img
                    src="https://untitledui.com/images/avatars/ava-bentley" // Ruta de la imagen del usuario
                    alt="Usuario 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección - Planes de suscripción */}
        <section
          className="bg-white-eske min-h-[800px] py-18 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--White-eske)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            {/* Título de la Sección */}
            <h2 className="text-20px font-bold text-center text-bluegreen-eske mb-6">
              Selecciona el mejor plan para tu proyecto político
            </h2>
            {/* Párrafo Descriptivo */}
            <p className="text-14px font-light text-center text-gray mb-18 max-w-[600px] mx-auto">
              <span>Suscríbete y accede al</span>
              <br />
              <span>ecosistema digital de Eskemma</span>
            </p>
            {/* Contenedor de las Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 - Sólo un producto */}
              <div className="bg-white-10 rounded-lg shadow-lg p-6 text-center relative overflow-visible w-full max-w-[350px] mx-auto">
                {/* Encabezado con fondo white-eske */}
                <div
                  className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white-eske px-6 py-2 border border-bluegreen-eske text-black text-10px font-medium z-10 whitespace-nowrap"
                  style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}
                >
                  Sólo un producto
                </div>

                {/* Contenido de la card */}
                <div className="relative z-0">
                  {/* Título del Plan */}
                  <h3 className="text-12px font-medium text-bluegreen-eske mt-6 mb-4">
                    Plan Básico
                  </h3>

                  {/* Detalles del Plan */}
                  <div className="text-left text-10px text-gray space-y-2">
                    <p>Mensual</p>
                    <p>Para 1 persona</p>
                    <p className="mt-4 text-10px">
                      <strong>Obtienes:</strong>
                    </p>
                    <p>
                      Acceso a la plataforma de formación, Sefix, Moddulo o
                      Monitor
                    </p>
                    <p>Asistencia online 24/7</p>
                    <p>Acceso total a eBooks y plantillas</p>
                  </div>

                  {/* Bandera y Precio */}
                  <div className="flex items-center justify-start mt-6 mb-6">
                    {/* Bandera */}
                    <div className="w-8 h-8 rounded-full bg-gray-20 flex items-center justify-center mr-4">
                      <img
                        src="https://www.banderas-mundo.es/data/flags/w1160/mx.webp" // Ruta de la imagen de la bandera
                        alt="Bandera de México"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Precio */}
                    <p className="text-12px font-bold text-black">
                      $ 2,000 MX / mes
                    </p>
                  </div>

                  {/* Botón Suscribirme */}
                  <button
                    onClick={() => setIsBasicSuscriptionModalOpen(true)} // Abrir el modal
                    className="mt-8 w-full bg-white-eske text-gray text-10px font-bold uppercase py-3 rounded-lg shadow-md border border-bluegreen-eske hover:bg-bluegreen-eske hover:text-white-eske transition-all duration-300 ease-in-out"
                  >
                    SUSCRIBIRME
                  </button>
                </div>
              </div>

              {/* Card 2 - Todo Eskemma */}
              <div className="bg-white-10 rounded-lg shadow-lg p-6 text-center relative overflow-visible w-full max-w-[350px] mx-auto">
                {/* Encabezado con fondo black-eske */}
                <div
                  className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-black-eske px-6 py-2 border border-bluegreen-eske text-white-eske text-10px font-medium z-10 whitespace-nowrap"
                  style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}
                >
                  Todo Eskemma
                </div>

                {/* Contenido de la card */}
                <div className="relative z-0">
                  {/* Título del Plan */}
                  <h3 className="text-12px font-medium text-bluegreen-eske mt-6 mb-4">
                    Plan Premium
                  </h3>

                  {/* Detalles del Plan */}
                  <div className="text-left text-10px text-gray space-y-2">
                    <p>Mensual</p>
                    <p>Para 1 persona</p>
                    <p className="mt-4 text-10px">
                      <strong>Obtienes Plan Básico +</strong>
                    </p>
                    <p>Acceso total al ecosistema de Eskemma</p>
                    <p>
                      Acceso a recursos exclusivos para tu proyecto pollítico
                    </p>
                    <p>1 sesión de asesoría gratuita al mes</p>
                  </div>

                  {/* Bandera y Precio */}
                  <div className="flex items-center justify-start mt-6 mb-6">
                    {/* Bandera */}
                    <div className="w-8 h-8 rounded-full bg-gray-20 flex items-center justify-center mr-4">
                      <img
                        src="https://www.banderas-mundo.es/data/flags/w1160/mx.webp" // Ruta de la imagen de la bandera
                        alt="Bandera de México"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Precio */}
                    <p className="text-12px font-bold text-black">
                      $ 4,000 MX / mes
                    </p>
                  </div>

                  {/* Botón Suscribirme */}
                  <button
                    className="mt-8 w-full bg-orange-eske text-white-eske text-10px font-bold uppercase py-3 rounded-lg shadow-md border border-bluegreen-eske hover:bg-bluegreen-eske hover:text-white-eske transition-all duration-300 ease-in-out"
                    onClick={() => setIsPremiumSuscriptionModalOpen(true)}
                  >
                    SUSCRIBIRME
                  </button>
                </div>
              </div>

              {/* Card 3 - Trabajo colaborativo */}
              <div className="bg-white-10 rounded-lg shadow-lg p-6 text-center relative overflow-visible w-full max-w-[350px] mx-auto">
                {/* Encabezado con fondo white-eske */}
                <div
                  className="absolute top-[-15px] left-1/2 transform -translate-x-1/2 bg-white-eske px-6 py-2 border border-bluegreen-eske text-black text-10px font-medium z-10 whitespace-nowrap"
                  style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)' }}
                >
                  Trabajo Colaborativo
                </div>

                {/* Contenido de la card */}
                <div className="relative z-0">
                  {/* Título del Plan */}
                  <h3 className="text-12px font-medium text-bluegreen-eske mt-6 mb-4">
                    Plan Grupal
                  </h3>

                  {/* Detalles del Plan */}
                  <div className="text-left text-10px text-gray space-y-2">
                    <p>Mensual</p>
                    <p>Para 6 personas</p>
                    <p className="mt-4 text-10px">
                      <strong>Obtienes Plan Premium +</strong>
                    </p>
                    <p>Versión colaborativa</p>
                    <p>Acceso a recursos exclusivos para grupos</p>
                    <p>2 sesiones de asesoría gratuita al mes</p>
                  </div>

                  {/* Bandera y Precio */}
                  <div className="flex items-center justify-start mt-6 mb-6">
                    {/* Bandera */}
                    <div className="w-8 h-8 rounded-full bg-gray-20 flex items-center justify-center mr-4">
                      <img
                        src="https://www.banderas-mundo.es/data/flags/w1160/mx.webp" // Ruta de la imagen de la bandera
                        alt="Bandera de México"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    {/* Precio */}
                    <p className="text-12px font-bold text-black">
                      $ 20,000 MX / mes
                    </p>
                  </div>

                  {/* Botón Suscribirme */}
                  <button
                    onClick={() => setIsGrupalSuscriptionModalOpen(true)} // Abrir el modal
                    className="mt-8 w-full bg-white-eske text-gray text-10px font-bold uppercase py-3 rounded-lg shadow-md border border-bluegreen-eske hover:bg-bluegreen-eske hover:text-white-eske transition-all duration-300 ease-in-out"
                  >
                    SUSCRIBIRME
                  </button>

                  {/* Modal de Suscripción (Plan Básico) */}
                  <BasicSuscriptionModal
                    isOpen={isBasicSuscriptionModalOpen}
                    onClose={() => setIsBasicSuscriptionModalOpen(false)}
                    onPaymentSuccess={() => {
                      setIsBasicSuscriptionModalOpen(false); // Cerrar el modal de suscripción
                      setIsResponseSuscriptionModalOpen(true); // Abrir el modal de respuesta
                    }}
                  />
                </div>
              </div>
            </div>{' '}
            {/* end contenedor cards planes */}
          </div>
        </section>

        {/* MODALES (FUERA DE LA SECCIÓN PLANES) */}
        {/* Modal de Suscripción (Plan Básico) */}
        <BasicSuscriptionModal
          isOpen={isBasicSuscriptionModalOpen}
          onClose={() => setIsBasicSuscriptionModalOpen(false)}
          onPaymentSuccess={() => {
            setIsBasicSuscriptionModalOpen(false); // Cerrar el modal de suscripción
            setIsResponseSuscriptionModalOpen(true); // Abrir el modal de respuesta
          }}
        />

        {/* Modal de Suscripción (Plan Premium) */}
        <PremiumSuscriptionModal
          isOpen={isPremiumSuscriptionModalOpen}
          onClose={() => setIsPremiumSuscriptionModalOpen(false)}
          onPaymentSuccess={() => {
            setIsPremiumSuscriptionModalOpen(false); // Cerrar el modal de suscripción
            setIsResponseSuscriptionModalOpen(true); // Abrir el modal de respuesta
          }}
        />

        {/* Modal de Suscripción (Plan Grupal) */}
        <GrupalSuscriptionModal
          isOpen={isGrupalSuscriptionModalOpen}
          onClose={() => setIsGrupalSuscriptionModalOpen(false)}
          onPaymentSuccess={() => {
            setIsGrupalSuscriptionModalOpen(false); // Cerrar el modal de suscripción
            setIsResponseSuscriptionModalOpen(true); // Abrir el modal de respuesta
          }}
        />

        {/* Modal de Respuesta después de la suscripción */}
        <ResponseSuscription
          isOpen={isResponseSuscriptionModalOpen}
          onClose={() => setIsResponseSuscriptionModalOpen(false)}
          userName={userName} // Pasar el nombre del usuario
        />

        {/* Sección - FAQ */}
        <FaqSection />

        {/* Enlaces Rápidos Section */}
        <section
          className="bg-white-eske min-h-[500px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: 'var(--white-eske)' }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            <h2 className="text-20px font-bold text-center text-bluegreen-eske mb-14">
              Enlaces rápidos
            </h2>
            {/* Grilla de enlaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Moddulo */}
              <a
                href="./moddulo"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/src/assets/img/icons/icon_Moddulo.svg" // Ruta del ícono
                  alt="Moddulo"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-12px font-medium hover:text-blue-80">
                  Moddulo
                </span>
              </a>

              {/* Sefix */}
              <a
                href="/sefix"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/src/assets/img/icons/icon_Sefix.svg" // Ruta del ícono
                  alt="Sefix"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-12px font-medium hover:text-blue-80">
                  Sefix
                </span>
              </a>

              {/* Consultoría */}
              <a
                href="/consultoria"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/src/assets/img/icons/icon_Consultoría.svg" // Ruta del ícono
                  alt="Consultoría"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-12px font-medium hover:text-blue-80">
                  Consultoría
                </span>
              </a>

              {/* Cursos */}
              <a
                href="/cursos"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Cursos.svg" // Ruta del ícono
                  alt="Cursos"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-12px font-medium hover:text-blue-80">
                  Cursos
                </span>
              </a>

              {/* Monitor */}
              <a
                href="/monitor"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Monitor.svg" // Ruta del ícono
                  alt="Monitor"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-12px font-medium hover:text-blue-80">
                  Monitor
                </span>
              </a>

              {/* Software */}
              <a
                href="/software"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Software.svg" // Ruta del ícono
                  alt="Software"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-12px font-medium hover:text-blue-80">
                  Software
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;

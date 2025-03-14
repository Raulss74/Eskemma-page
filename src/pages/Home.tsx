
import blogPosts from "../data/blogData";

const Home = () => {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      {/* Contenedor principal */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-[650px] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: "url(/src/assets/img/hero.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Contenido del Hero */}
          <div className="absolute inset-0 bg-bluegreen-90 opacity-80"></div>
          <div className="relative z-10 text-center text-white-eske px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto w-full">            
            <h1 className="text-[clamp(24px,5vw,48px)] leading-tight">
              Consultoría política
            </h1>
            <h2 className="mt-20 text-[clamp(18px,4vw,36px)] leading-tight">
              <span>Un ecosistema digital</span>
              <span className="block">para tu proyecto político</span>
            </h2>
            <div className="mt-[10vh] space-y-4 text-[clamp(18px,3vw,20px)] w-full">
              <p>Descubre tus ventajas competitivas.</p>
              <p>Te acompañamos con tecnología y datos.</p>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section
          className="bg-gray-10 min-h-[580px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: "var(--Gray-10)" }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            <h2 className="text-24px font-bold text-center text-bluegreen-eske mb-12">
              Hoy en Eskemma 
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="flex flex-col items-center text-center">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-auto object-contain rounded-lg mb-4"
                    style={{ aspectRatio: "16 / 9" }}
                  />
                  <h3 className="text-14px text-blue-70 font-bold mb-2">{post.title}</h3>
                  <p className="text-12px text-gray-70 mb-4">{post.excerpt}</p>
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
          style={{ backgroundColor: "var(--White-eske)" }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            {/* Título de la sección */}
            <h2 className="text-24px font-bold text-center text-bluegreen-eske mb-12">
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
                  style={{ aspectRatio: "16 / 9" }}
                />
                <p className="text-12px text-gray-70 mb-4">
                  Tendencia positiva de participación electoral.
                </p>
                <a
                  href="/monitor/post1" // Enlace a la página Monitor
                  className="text-blue-eske hover:text-blue-60 font-medium text-10px"
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
                  style={{ aspectRatio: "16 / 9" }}
                />
                <p className="text-12px text-gray-70 mb-4">
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

        {/* Enlaces Rápidos Section */}
        <section
          className="bg-gray-10 min-h-[500px] py-24 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: "var(--Gray-10)" }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
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
                <span className="text-14px font-medium hover:text-blue-80">Moddulo</span>
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
                <span className="text-14px font-medium hover:text-blue-80">Sefix</span>
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
                <span className="text-14px font-medium hover:text-blue-80">Consultoría</span>
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
                <span className="text-14px font-medium hover:text-blue-80">Cursos</span>
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
                <span className="text-14px font-medium hover:text-blue-80">Monitor</span>
              </a>

              {/* Software */}
              <a
                href="/software"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-80 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Producción.svg" // Ruta del ícono
                  alt="Software"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110" // Aumento de tamaño
                />
                <span className="text-14px font-medium hover:text-blue-80">Software</span>
              </a>
            </div>
          </div>
        </section>

        {/* Sección - Propuesta */}
        <section          
          className="bg-bluegreen-eske min-h-[500px] py-20 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: "var(--Bluegreen-eske)" }}
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
            <div className="w-full md:w-1/2 pl-0 md:pl-12 text-14px text-center text-white-eske">
              <p className=" font-light mb-4">
                <span>Nunca es demasiado pronto.</span>
                <span className="block">Comencemos a planear tu estrategia.</span>
              </p>
              <p className="mt-24 font-light mb-4">
                <span>Haz que cada decisión sea efectiva</span>
                <span className="block">en el contexto de tu proyecto.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Sexta Sección - Sobre Nosotros */}
        <section className="bg-white-eske h-[1000px] py-24 px-4 sm:px-6 md:px-8">
          <div className="w-[90%] mx-auto max-w-screen-xl text-center">
            {/* Subtítulo */}
            <h2 className="text-24px font-medium text-blue-eske mb-6">Sobre nosotros</h2>

            {/* Párrafo Principal */}
            <p className="text-14px font-normal text-gray-700 mb-6">
              Nuestro propósito es profesionalizar la vida pública.
            </p>

            {/* Recuadro para el Video */}
            <div className="relative w-full max-w-[700px] mx-auto h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-8">
              <iframe
                src="https://drive.google.com/file/d/1fUcRvFJJTxOTuCN1Nf725J0s8eglMM9O/preview"
                title="Video sobre nosotros"
                className="absolute top-0 left-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Enlace "Ver más" */}
            <button
              className="text-12px font-medium text-blue-eske hover:text-blue-80  focus:outline-none"
              onClick={() => {
                // Aquí puedes agregar la lógica para abrir el modal
                console.log("Abrir modal con más información");
              }}
            >
              Ver más
            </button>

            {/* Párrafo Adicional */}
            <p className="mt-16 text-14px font-normal text-gray-700 mb-8">
              Podemos colaborar desde ahora con una asesoría gratuita de 20 minutos.
            </p>

            {/* Botón "AGENDAR ASESORÍA GRATUITA" */}
            <a
              href="#"
              className="inline-block bg-orange-eske text-white-eske text-12px font-bold uppercase px-8 py-4 rounded-lg shadow-md hover:bg-orange-70 transition-all duration-300 ease-in-out"
            >
              AGENDAR ASESORÍA GRATUITA
            </a>
          </div>
        </section>

        
        
      </div>
    </main>
  );
};

export default Home;
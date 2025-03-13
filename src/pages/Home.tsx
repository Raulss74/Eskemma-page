
import blogPosts from "../data/blogData";

const Home = () => {
  return (
    <main className="min-h-screen overflow-x-hidden w-full">
      {/* Contenedor principal */}
      <div className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section
          className="relative min-h-[600px] w-full bg-cover bg-center flex items-center justify-center overflow-hidden"
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
          className="bg-gray-10 min-h-[400px] py-24 px-4 sm:px-6 md:px-8"
          style={{ backgroundColor: "var(--Gray-10)" }}
        >
          <div className="w-[90%] mx-auto max-w-screen-xl">
            {/* Grilla de enlaces */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Moddulo */}
              <a
                href="./moddulo"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-60 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/src/assets/img/icons/icon_Moddulo.svg" // Ruta del ícono
                  alt="Moddulo"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" // Efecto hover
                />
                <span className="text-14px font-medium">Moddulo</span>
              </a>

              {/* Sefix */}
              <a
                href="/sefix"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-60 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/src/assets/img/icons/icon_Sefix.svg" // Ruta del ícono
                  alt="Sefix"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" // Efecto hover
                />
                <span className="text-14px font-medium">Sefix</span>
              </a>

              {/* Consultoría */}
              <a
                href="/consultoria"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-60 transition-all duration-300 ease-in-out"
              >
                <img
                  src="/src/assets/img/icons/icon_Consultoría.svg" // Ruta del ícono
                  alt="Consultoría"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" // Efecto hover
                />
                <span className="text-14px font-medium">Consultoría</span>
              </a>

              {/* Cursos */}
              <a
                href="/cursos"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-60 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Cursos.svg" // Ruta del ícono
                  alt="Cursos"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" // Efecto hover
                />
                <span className="text-14px font-medium">Cursos</span>
              </a>

              {/* Monitor */}
              <a
                href="/monitor"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-60 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Monitor.svg" // Ruta del ícono
                  alt="Monitor"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" // Efecto hover
                />
                <span className="text-14px font-medium">Monitor</span>
              </a>

              {/* Software */}
              <a
                href="/software"
                className="flex flex-col items-center text-center text-blue-eske hover:text-blue-60 transition-all duration-300 ease-in-out mt-12"
              >
                <img
                  src="/src/assets/img/icons/icon_Producción.svg" // Ruta del ícono
                  alt="Software"
                  className="w-48 h-48 mb-4 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg" // Efecto hover
                />
                <span className="text-14px font-medium">Software</span>
              </a>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  );
};

export default Home;
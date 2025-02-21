// src/pages/Home.tsx
const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Sección Hero */}
      <section className="text-center mb-8">
        <h1 className="font-brand-primary text-4xl font-bold text-brand-primary">Bienvenido a Mi Aplicación</h1>
        <p className="mt-4 text-lg text-gray-600">
          Descubre cómo nuestra plataforma puede ayudarte a alcanzar tus objetivos.
        </p>
        <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
          Comenzar Ahora
        </button>
      </section>

      {/* Sección Características */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Característica 1</h2>
          <p className="mt-2 text-gray-600">Descripción breve de la característica.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Característica 2</h2>
          <p className="mt-2 text-gray-600">Descripción breve de la característica.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-xl font-bold text-gray-800">Característica 3</h2>
          <p className="mt-2 text-gray-600">Descripción breve de la característica.</p>
        </div>
      </section>
    </main>
  );
};

export default Home;
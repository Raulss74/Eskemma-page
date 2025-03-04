// src/pages/Home.tsx
import React from "react";

const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/path-to-your-hero-image.jpg')", // Cambia esto por la ruta de tu imagen
        }}
      >
        {/* Overlay Azul */}
        <div className="absolute inset-0 bg-blue-eske opacity-80"></div>

        {/* Contenido del Hero */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-48px font-bold">Consultoría política</h1>
          <p className="mt-4 text-24px">Un ecosistema digital para tu proyecto político</p>
          <p className="mt-4 text-20px">Descubre tus ventajas competitivas.</p>
          <p className="mt-4 text-20px">Te acompañamos con tecnología y datos.</p>
        </div>
      </section>

      {/* Continuaremos aquí con las siguientes secciones */}
    </main>
  );
};

export default Home;
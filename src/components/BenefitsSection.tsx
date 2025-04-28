// src/components/BenefitsSection.tsx

import { useState, useEffect } from "react";

const BenefitsSection = () => {
  // Estado para controlar qué tarjeta está volteada
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // Datos de las tarjetas (frente y reverso)
  const cards = [
    {
      front: "Acompañamiento profesional",
      back: "Recibe guía especializada en cada paso de tu proyecto político, asegurando estrategias efectivas y resultados óptimos.",
      bg: "bg-blue-60", // Color de fondo para el frente
      text: "text-white-eske", // Color del texto
    },
    {
      front: "Impacto rápido",
      back: "Obtén resultados tangibles en poco tiempo gracias a herramientas y estrategias probadas para el éxito político.",
      bg: "bg-white-eske",
      text: "text-bluegreen-eske",
    },
    {
      front: "Valor garantizado",
      back: "Invierte en soluciones que maximizan tu presupuesto, ofreciendo un retorno favorable en términos de éxito y eficiencia.",
      bg: "bg-bluegreen-60",
      text: "text-white-eske",
    },
    {
      front: "Adaptabilidad",
      back: "Eskemma se ajusta a proyectos de cualquier escala, proporcionando herramientas y estrategias personalizadas para cada necesidad.",
      bg: "bg-bluegreen-60",
      text: "text-white-eske",
    },
    {
      front: "Ventajas competitivas",
      back: "Descubre y explota tus ventajas competitivas con metodologías que te diferencian en el campo político.",
      bg: "bg-white-eske",
      text: "text-bluegreen-eske",
    },
    {
      front: "Ahorra dinero",
      back: "Reduce costos en la contratación de personal o servicios. Nuestras herramientas te facilitan la obtención de información útil.",
      bg: "bg-blue-60",
      text: "text-white-eske",
    },
    {
      front: "Integridad y excelencia",
      back: "Trabaja con un equipo comprometido con la transparencia, la calidad y la lealtad, que te asegura un servicio honesto y profesional.",
      bg: "bg-blue-60",
      text: "text-white-eske",
    },
    {
      front: "Aplicación inmediata",
      back: "Implementa acciones estratégicas de inmediato, aprovechando oportunidades y resolviendo desafíos con agilidad.",
      bg: "bg-white-eske",
      text: "text-bluegreen-eske",
    },
    {
      front: "Disponibilidad",
      back: "Consulta con especialistas en cualquier momento. Recibe asesoría personalizada y soluciones adaptadas a tus necesidades.",
      bg: "bg-bluegreen-60",
      text: "text-white-eske",
    },
  ];

  // Manejador de clic para voltear una tarjeta
  const handleCardClick = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  // Manejador de clic global para cerrar tarjetas volteadas
  useEffect(() => {
    const handleClickOutside = () => {
      setFlippedCard(null); // Cerrar cualquier tarjeta volteada
    };

    // Agregar el evento de clic global
    document.addEventListener("click", handleClickOutside);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section
      className="bg-bluegreen-eske min-h-[800px] py-20 px-4 sm:px-6 md:px-8"
      style={{ backgroundColor: 'var(--Bluegreen-eske)' }}
    >
      <div className="w-[90%] mx-auto max-w-screen-xl mt-4">
        {/* Contenedor Reducido en Anchura (10%) */}
        <div className="mx-auto w-[90%] max-w-[90%]">
          {/* Grilla de Tarjetas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`relative w-full h-48 rounded-lg shadow-lg cursor-pointer transition-transform duration-500 ${
                  flippedCard === index ? 'rotate-y-180' : ''
                }`}
                onClick={(e) => {
                  e.stopPropagation(); // Evitar que el clic en la tarjeta active el clic global
                  handleCardClick(index);
                }}
                style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
              >
                {/* Frente de la tarjeta */}
                <div
                  className={`absolute w-full h-full rounded-lg flex items-center justify-center backface-hidden transition-transform duration-500 ${card.bg}`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(0deg)",
                  }}
                >
                  <p className={`text-12px font-light text-center ${card.text}`}>
                    {card.front}
                  </p>
                </div>

                {/* Reverso de la tarjeta */}
                <div
                  className={`absolute w-full h-full rounded-lg flex items-center justify-center backface-hidden transition-transform duration-500 bg-orange-eske p-5`}
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-12px font-light text-center text-white-eske">
                    {card.back}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
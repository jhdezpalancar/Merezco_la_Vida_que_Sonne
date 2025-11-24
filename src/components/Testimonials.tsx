import React from 'react';
import { IMAGES } from '../constants';
import Button from './Button';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="font-serif text-3xl md:text-5xl text-stone-900 mb-6">
          Personas reales que ya están transformando su vida
        </h2>
        <div className="w-24 h-1 bg-gold-400 mx-auto" />
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-6 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {IMAGES.testimonials.map((src, index) => (
            <div
              key={index}
              className="
                relative overflow-hidden rounded-xl shadow-md hover:shadow-xl 
                transition-shadow duration-300
                bg-white
              "
              style={{
                maxHeight: "260px",      // 🔥 Altura máxima controlada
                aspectRatio: "1 / 1",     // 🔥 Mantiene forma cuadrada sin deformar imágenes
              }}
            >
              <img
                src={src}
                alt={`Testimonio ${index + 1}`}
                className="
                  w-full h-full object-cover 
                  hover:scale-105 transition-transform duration-500
                "
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-6 text-center mt-12">
        <p className="text-lg text-stone-700 mb-6 max-w-2xl mx-auto">
          Tú también puedes vivir esta transformación.  
          Da el primer paso hacia la vida que mereces.
        </p>

        <div className="flex justify-center">
          <Button href="https://go.hotmart.com/R101103337F?ap=50eb" size="lg">
            QUIERO MI RITUAL DE TRANSFORMACIÓN
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

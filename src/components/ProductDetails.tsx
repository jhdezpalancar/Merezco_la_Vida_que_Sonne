import { BookOpen } from "lucide-react";
import { IMAGES } from "../constants";
import Button from "./Button";

export default function ProductDetails() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 text-center">
      <div className="flex justify-center mb-6">
        <BookOpen className="w-12 h-12 text-indigo-500" />
      </div>

      <h2 className="text-3xl font-bold mb-4">
        ¿Qué Obtienes Dentro del Ritual de la Abu?
      </h2>

      <p className="text-gray-300 leading-relaxed mb-12">
        Basado en enseñanza espiritual de Melissa Escobar, este ritual te guía paso a paso durante 21 días para transformar tu energía y manifestar una vida de abundancia, claridad y fe.
      </p>

      {/* Imagen principal del libro */}
      <img
        src={IMAGES.book}
        alt="Libro Merezco la Vida de Mis Sueños"
        className="w-full max-w-[300px] mx-auto rounded-lg shadow-lg mb-12"
      />

      {/* BONOS */}
      <h3 className="text-2xl font-semibold mb-6">🎁 Tus 3 Bonos Incluidos</h3>

      <div className="grid md:grid-cols-3 gap-10">

        {/* BONO 1 */}
        <div className="text-center">
          <span className="block text-indigo-400 font-bold mb-2">REGALO #1</span>
          <img
            src={IMAGES.bonuses.one}
            alt="Bono 1"
            className="w-full max-w-[220px] mx-auto rounded-lg shadow-md object-cover mb-4"
          />
          <p className="font-semibold">Mi Diario de Manifestación</p>
        </div>

        {/* BONO 2 */}
        <div className="text-center">
          <span className="block text-indigo-400 font-bold mb-2">REGALO #2</span>
          <img
            src={IMAGES.bonuses.two}
            alt="Bono 2"
            className="w-full max-w-[220px] mx-auto rounded-lg shadow-md object-cover mb-4"
          />
          <p className="font-semibold">Los Secretos de los Sonidos Mágicos</p>
        </div>

        {/* BONO 3 */}
        <div className="text-center">
          <span className="block text-indigo-400 font-bold mb-2">REGALO #3</span>
          <img
            src={IMAGES.bonuses.three}
            alt="Bono 3"
            className="w-full max-w-[220px] mx-auto rounded-lg shadow-md object-cover mb-4"
          />
          <p className="font-semibold">Números Mágicos para una Vida Abundante</p>
        </div>

      </div>

      {/* CTA PRINCIPAL */}
      <div className="mt-12">
        <Button
          pulse
          href="https://go.hotmart.com/R101103337F?ap=50eb"
        >
          Quiero Obtener el Libro y los 3 Bonos
        </Button>
      </div>
    </section>
  );
}

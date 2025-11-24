import React from "react";
import Button from "./Button";
import { Shield, Heart, Sparkles } from "lucide-react";

export default function Offer() {
  return (
    <section
      id="offer"
      className="bg-gradient-to-b from-white to-stone-100 py-28 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">

        {/* ICONO SUPERIOR */}
        <div className="flex justify-center mb-6">
          <Sparkles className="w-14 h-14 text-gold-500" />
        </div>

        {/* TÍTULO PRINCIPAL */}
        <h2 className="text-3xl md:text-5xl font-serif text-stone-900 mb-6 leading-tight">
          Estás a un paso de iniciar tu transformación en 21 días
        </h2>

        {/* SUBTÍTULO ESPIRITUAL */}
        <p className="text-stone-700 text-lg md:text-xl leading-relaxed mb-12">
          El universo ya escuchó tu llamado.  
          Lo único que falta es que tú des el primer paso.  
          <br />
          Este ritual no es solo un libro… es un acompañamiento energético  
          diseñado para elevar tu vibración, despertar tu fe  
          y ayudarte a manifestar la vida que sí mereces.
        </p>

        {/* BLOQUE DE PRECIO */}
        <div className="bg-white shadow-xl rounded-2xl py-12 px-6 mb-12 border border-gold-300">
          <p className="text-xl text-stone-900 font-semibold mb-2">
            Acceso inmediato al Ritual + 3 Bonos Exclusivos
          </p>
          <p className="text-5xl font-bold text-gold-600 mb-3">$14 USD</p>

          <p className="text-stone-500 text-base">
            (Pago único – acceso de por vida)
          </p>
        </div>

        {/* CTA PRINCIPAL */}
        <Button
          pulse
          href="https://go.hotmart.com/R101103337F?ap=50eb"
          external
          fullWidth
          className="text-xl py-6 font-semibold tracking-wide"
        >
          INICIAR MI RITUAL DE TRANSFORMACIÓN
        </Button>

        {/* GARANTÍA AMPLIADA */}
        <div className="flex flex-col items-center mt-14">
          <Shield className="w-12 h-12 text-gold-500 mb-4" />
          <p className="text-stone-700 text-base md:text-lg max-w-xl leading-relaxed">
            Tienes <strong>7 días completos</strong> para explorar el ritual.  
            Si por alguna razón no sientes conexión con la energía del proceso,  
            te devolvemos el dinero sin hacer preguntas.  
            Queremos que te sientas segura, tranquila y guiada.
          </p>
        </div>

        {/* DESPEDIDA DE LA ABU */}
        <div className="flex flex-col items-center mt-16">
          <Heart className="w-10 h-10 text-red-400 mb-4" />
          <p className="text-stone-600 italic text-lg leading-relaxed max-w-lg">
            Es tu momento.  
            La Abu te acompaña en cada paso.  
            Recuerda: el universo ya abrió la puerta…  
            solo necesitas atravesarla.
          </p>
        </div>
      </div>
    </section>
  );
}

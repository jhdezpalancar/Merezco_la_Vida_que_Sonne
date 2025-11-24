import React from "react";
import Button from "./Button";
import { Shield, Heart, Sparkles } from "lucide-react";

export default function Offer() {
  return (
    <section
      id="offer"
      className="bg-gradient-to-b from-white to-stone-100 py-24 px-6 text-center"
    >
      <div className="max-w-3xl mx-auto">

        {/* ICONO SUPERIOR */}
        <div className="flex justify-center mb-6">
          <Sparkles className="w-12 h-12 text-gold-500" />
        </div>

        {/* TITULO DE ALTO IMPACTO */}
        <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-6 leading-tight">
          Estás a un paso de iniciar tu transformación en 21 días
        </h2>

        {/* SUBTITULAR ESPIRITUAL */}
        <p className="text-stone-700 text-lg leading-relaxed mb-10">
          El universo ya escuchó tu llamado.  
          Lo único que falta es que tú des el primer paso.  
          <br />
          Este ritual no es solo un libro…  
          es un camino guiado para despertar tu fe, elevar tu vibración  
          y manifestar la vida que realmente mereces.
        </p>

        {/* BLOQUE DE PRECIO */}
        <div className="bg-white shadow-xl rounded-2xl py-10 px-6 mb-10 border border-gold-300">
          <p className="text-xl text-stone-900 font-semibold mb-2">
            Acceso inmediato al Ritual + 3 Bonos Exclusivos
          </p>
          <p className="text-4xl font-bold text-gold-600 mb-2">$14 USD</p>

          <p className="text-stone-500 text-sm">
            (Pago único – acceso de por vida)
          </p>
        </div>

        {/* CTA FINAL — REFORZADO */}
        <Button
          pulse
          href="https://go.hotmart.com/R101103337F?ap=50eb"
          external
          fullWidth
          className="text-lg py-5"
        >
          Iniciar Mi Ritual de Transformación
        </Button>

        {/* GARANTÍA */}
        <div className="flex flex-col items-center mt-10">
          <Shield className="w-10 h-10 text-gold-500 mb-3" />
          <p className="text-stone-700 text-sm max-w-md">
            Tienes <strong>7 días</strong> completos para explorar el ritual.
            Si por alguna razón no sientes conexión,  
            te devolvemos tu dinero sin preguntas.  
            Tu tranquilidad es parte del proceso.
          </p>
        </div>

        {/* DESPEDIDA FINAL */}
        <div className="flex flex-col items-center mt-12">
          <Heart className="w-8 h-8 text-red-400 mb-3" />
          <p className="text-stone-600 italic">
            Es tu momento.  
            La Abu te acompaña en cada paso.  
            El universo ya abrió la puerta.  
          </p>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fullWidth?: boolean;
  pulse?: boolean;
  href?: string;            // ⬅ Nuevo: soportar enlaces
  external?: boolean;       // ⬅ Por si quieres forzar target _blank
  scroll?: boolean;         // ⬅ Activar scroll opcional
}

const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth = false,
  pulse = false,
  href,
  external = true,
  scroll = false,
  className,
  ...props
}) => {
  
  // 🔽 Solo si scroll = true
  const handleScroll = () => {
    const element = document.getElementById('offer');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const commonClassNames = `
    relative group overflow-hidden px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300
    bg-gradient-to-r from-gold-400 to-gold-600 text-white shadow-lg hover:shadow-xl hover:scale-[1.02]
    flex items-center justify-center gap-2
    ${fullWidth ? 'w-full' : 'w-auto'}
    ${pulse ? 'animate-pulse' : ''}
    ${className || ''}
  `;

  // 🔗 Si existe HREF → Renderizamos <a>
  if (href) {
    return (
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className={commonClassNames}
      >
        <span className="relative z-10 text-lg uppercase font-sans">{children}</span>
        <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
      </a>
    );
  }

  // 🟡 Si NO hay href → renderizamos <button>
  return (
    <button
      onClick={scroll ? handleScroll : undefined}
      className={commonClassNames}
      {...props}
    >
      <span className="relative z-10 text-lg uppercase font-sans">{children}</span>
      <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
    </button>
  );
};

export default Button;

import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  external?: boolean;
  size?: "sm" | "md" | "lg";
  pulse?: boolean;
  fullWidth?: boolean; // ahora el ancho completo es OPCIONAL
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  external = false,
  size = "md",
  pulse = false,
  fullWidth = false,     // <--- por defecto NO ocupa todo el ancho
  className = "",
}) => {
  const sizeClasses =
    size === "sm"
      ? "text-sm px-4 py-2"
      : size === "lg"
      ? "text-lg px-8 py-4"
      : "text-md px-6 py-3";

  return (
    <a
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`
        inline-flex items-center justify-center gap-2
        bg-gradient-to-r from-gold-400 to-gold-600 text-white font-semibold rounded-full
        shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95
        ${pulse ? "animate-pulse-soft" : ""}
        ${sizeClasses}
        ${fullWidth ? "w-full" : "w-auto"}   /* ← YA NO SE ABRE A 100% */
        ${className}
      `}
    >
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};

export default Button;

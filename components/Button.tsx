"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Variantes du bouton
 */
export type ButtonVariant = "primary" | "secondary" | "ghost";

/**
 * Tailles du bouton
 */
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Composant Button réutilisable avec styles DESTROY optimisé mobile
 * @param variant - Style du bouton (primary, secondary, ghost)
 * @param size - Taille du bouton (sm, md, lg)
 */
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "btn-primary",
      secondary: "btn-secondary",
      ghost: "bg-transparent hover:bg-destroy-gray-200 text-destroy-black border-transparent",
    };

    const sizes = {
      sm: "px-4 py-3 text-sm min-h-[40px]",
      md: "px-6 py-4 text-base min-h-[44px]",
      lg: "px-8 py-5 text-lg min-h-[52px]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "btn-base",
          variants[variant],
          sizes[size],
          "tap-target", // Zone de tap élargie pour mobile
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button; 
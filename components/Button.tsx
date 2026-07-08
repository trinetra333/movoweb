"use client";

import { ButtonHTMLAttributes } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "light" | "danger";
  href?: string;
  size?: "sm" | "md" | "lg";
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  href,
  ...props
}: ButtonProps) {
  const variantStyles: Record<string, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_30px_-8px_rgba(37,99,235,0.5)]",
    secondary: "border border-white/15 text-white hover:border-white/35 hover:bg-white/5",
    light: "bg-white text-black hover:bg-gray-100",
    danger: "bg-red-600 text-white hover:bg-red-500",
  };

  const sizeStyles: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const base = `relative overflow-hidden rounded-full font-semibold transition-colors duration-150 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  const shine = (
    <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
  );

  if (href) {
    return (
      <Link href={href}>
        <motion.span
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 600, damping: 18 }}
          className={`group inline-block ${base}`}
        >
          <span className="relative z-10">{children}</span>
          {shine}
        </motion.span>
      </Link>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 600, damping: 18 }}
      className={`group ${base}`}
      {...(props as HTMLMotionProps<"button">)}
    >
      <span className="relative z-10">{children}</span>
      {shine}
    </motion.button>
  );
}

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost" | "ghost-white" | "text";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-brand-primary text-white rounded-full hover:bg-brand-mid hover:shadow-glow-btn active:scale-[0.98]",
  secondary:
    "bg-surface-elevated text-text-primary border border-surface-border rounded-full hover:border-brand-primary hover:text-text-primary active:scale-[0.98]",
  ghost:
    "bg-transparent text-text-secondary border border-surface-border-glow rounded-full hover:border-brand-primary hover:text-text-primary active:scale-[0.98]",
  "ghost-white":
    "bg-transparent text-white border border-white/30 rounded-full hover:bg-white/10 hover:border-white active:scale-[0.98]",
  text:
    "bg-transparent text-text-accent hover:text-text-primary rounded-none gap-1.5 group",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-sm",
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
  fullWidth,
}: ButtonProps) {
  const classes = [
    base,
    variants[variant],
    variant === "text" ? "" : sizes[size],
    fullWidth ? "w-full" : "",
    disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

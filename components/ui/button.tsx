import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost" | "outline" | "link";
  size?: "default" | "sm" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default:
        "bg-cosmic-purple/20 text-cosmic-purple hover:bg-cosmic-purple/30 border border-cosmic-purple/30",
      ghost: "hover:bg-white/5 text-foreground",
      outline:
        "border border-border hover:bg-white/5 text-foreground",
      link: "text-cosmic-purple underline-offset-4 hover:underline",
    };

    const sizes = {
      default: "h-10 px-6 py-2 text-sm",
      sm: "h-8 px-4 text-xs",
      lg: "h-12 px-8 text-base",
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
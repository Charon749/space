import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg bg-card border border-border/50 px-4 py-2 text-sm text-foreground placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-purple/50 focus-visible:border-cosmic-purple/50 transition-all duration-300",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
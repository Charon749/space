import * as React from "react";
import { cn } from "@/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-lg bg-card border border-border/50 px-4 py-3 text-sm text-foreground placeholder:text-muted/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cosmic-purple/50 focus-visible:border-cosmic-purple/50 transition-all duration-300 resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
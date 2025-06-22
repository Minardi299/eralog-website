import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"

export const InteractiveHoverButton = React.forwardRef(({ children, logo, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden border bg-background p-2 px-6 text-center text-accent-foreground font-semibold",
        className
      )}
      {...props}>
      <div className="flex items-center gap-2">
        <span className="transition-transform duration-500 ease-out group-hover:scale-100000">
            {logo}
        </span>
        <span
          className="inline-block group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div
        className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </Button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

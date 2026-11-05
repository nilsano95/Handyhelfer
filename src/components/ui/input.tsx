import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex min-h-14 w-full min-w-0 rounded-2xl border-2 border-border bg-card px-5 text-lg text-foreground shadow-sm transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-ring/25",
        className,
      )}
      {...props}
    />
  );
}

export { Input };

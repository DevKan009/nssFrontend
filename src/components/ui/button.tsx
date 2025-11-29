import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-bold tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 uppercase",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.98]",
        destructive: "bg-destructive text-destructive-foreground shadow-lg hover:shadow-xl hover:scale-[1.03]",
        outline: "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground shadow-md hover:shadow-lg hover:scale-[1.03]",
        secondary: "bg-secondary text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-[1.03] hover:-translate-y-0.5",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground hover:scale-105",
        link: "text-primary underline-offset-4 hover:underline",
        accent: "bg-gradient-accent text-accent-foreground shadow-lg shadow-accent/50 hover:shadow-xl hover:shadow-accent/60 hover:scale-[1.03] hover:-translate-y-0.5",
      },
      size: {
        default: "h-12 px-8 py-3 text-sm",
        sm: "h-10 rounded-xl px-5 text-xs",
        lg: "h-16 rounded-2xl px-12 text-base",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

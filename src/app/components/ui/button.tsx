"use client"

import * as React from "react"

import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "bg-background w-32 rounded-0 hover:bg-background hover:text-tertiary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded px-3",
        lg: "h-11 rounded px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  icon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <div className="relative inline-flex items-center group">
        {/* Circle Container */}
        <div className={`absolute left-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center transition-all duration-500 ease-in-out ${className}`}>
          <div className="w-10 h-10 rounded-full bg-white border-1 border-secondary overflow-hidden">
            {icon}
          </div>
        </div>

        {/* Button Content */}
        <Comp
          className={cn(buttonVariants({ variant, size, className }), "relative z-0")}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      </div>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }

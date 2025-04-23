import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { Loader2 } from "lucide-react"

import { cn } from "@/lib/utils"

// Define button hierarchy variants with clear visual distinction
const buttonVariants = cva(
  "relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      hierarchy: {
        primary:
          "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-primary/20 hover:shadow-xl font-semibold",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-secondary/20 hover:shadow-lg",
        tertiary: "bg-transparent hover:bg-accent hover:text-accent-foreground border border-input",
        link: "bg-transparent underline-offset-4 hover:underline p-0 h-auto font-normal text-primary",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        xl: "h-14 rounded-md px-10 text-lg",
        icon: "h-10 w-10",
        auto: "h-auto px-4 py-2",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      hierarchy: "primary",
      size: "default",
      fullWidth: false,
    },
  },
)

export interface ButtonHierarchyProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  isLoading?: boolean
  loadingText?: string
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
}

const ButtonHierarchy = React.forwardRef<HTMLButtonElement, ButtonHierarchyProps>(
  (
    {
      className,
      hierarchy,
      size,
      fullWidth,
      asChild = false,
      isLoading,
      loadingText,
      children,
      icon,
      iconPosition = "left",
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ hierarchy, size, fullWidth, className }))}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            {loadingText || children}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
            {children}
            {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
          </>
        )}
      </Comp>
    )
  },
)
ButtonHierarchy.displayName = "ButtonHierarchy"

export { ButtonHierarchy, buttonVariants }

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"

const sidebarVariants = cva(
  "fixed inset-0 z-50 bg-white/90 backdrop-blur-md shadow-xl transform transition-transform duration-300 ease-in-out",
  {
    variants: {
      side: {
        left: "left-0 top-0 bottom-0 w-80",
        right: "right-0 top-0 bottom-0 w-80",
        top: "left-0 right-0 top-0 h-60",
        bottom: "left-0 right-0 bottom-0 h-60",
      },
      isOpen: {
        true: "translate-x-0 translate-y-0",
        false: "translate-x-[-100%] translate-y-[-100%]",
      },
    },
    compoundVariants: [
      {
        side: ["left", "right"],
        isOpen: {
          false: "translate-y-0",
        },
      },
      {
        side: ["top", "bottom"],
        isOpen: {
          false: "translate-x-0",
        },
      },
      {
        side: "right",
        isOpen: {
          false: "translate-x-[100%]",
        },
      },
      {
        side: "bottom",
        isOpen: {
          false: "translate-y-[100%]",
        },
      },
    ],
    defaultVariants: {
      side: "left",
      isOpen: false,
    },
  }
)

export interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof sidebarVariants> {
  onClose?: () => void
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, side, isOpen, onClose, children, ...props }, ref) => {
    return (
      <div className={cn(sidebarVariants({ side, isOpen }), className)} ref={ref} {...props}>
        <div className="absolute top-4 right-4">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        {children}
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

export { Sidebar, sidebarVariants }

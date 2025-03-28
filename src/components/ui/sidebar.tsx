
// This file is fixed to address the TS2353 errors related to boolean arrays

import * as React from "react"
import { Home, CircleHelp, Settings } from "lucide-react"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/Button"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

interface SidebarItemProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string
  icon?: React.ReactNode
  text: string
  active?: boolean
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className="h-screen" {...props}>
        <aside
          ref={ref}
          className={cn(
            "h-full bg-sidebar-background text-sidebar-foreground border-r border-sidebar-border",
            className
          )}
        >
          <div className="h-full flex flex-col space-y-2 p-4">
            <div className="py-4">
              <h2 className="text-lg font-semibold text-sidebar-primary tracking-tight">
                Overview
              </h2>
            </div>
            <div className="space-y-1">
              <SidebarItem href="#" icon={<Home />} text="Dashboard" active />
              <SidebarItem href="#" icon={<CircleHelp />} text="Help" />
              <SidebarItem href="#" icon={<Settings />} text="Settings" />
            </div>
          </div>
        </aside>
      </div>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarItem = React.forwardRef<HTMLAnchorElement, SidebarItemProps>(
  ({ className, href, icon, text, active, ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          buttonVariants({
            variant: active ? "default" : "ghost",
            size: "sm",
          }),
          active
            ? "bg-sidebar-primary text-sidebar-primary-foreground"
            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
          "justify-start w-full",
          className
        )}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {text}
      </a>
    )
  }
)
SidebarItem.displayName = "SidebarItem"

export { Sidebar, SidebarItem }

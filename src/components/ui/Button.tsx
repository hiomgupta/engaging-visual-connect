
import { Button as ShadcnButton } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import type { ButtonProps as ShadcnButtonProps } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button = ({
  children,
  className,
  href,
  variant = "default",
  size = "default",
  icon,
  iconPosition = "right",
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size, className }));
  
  const content = (
    <>
      {icon && iconPosition === "left" && <span className="mr-1">{icon}</span>}
      {children}
      {icon && iconPosition === "right" && <span className="ml-1">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link to={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <ShadcnButton variant={variant} size={size} className={className} {...props}>
      {content}
    </ShadcnButton>
  );
};

// Re-export buttonVariants for other components that need it
export { buttonVariants };

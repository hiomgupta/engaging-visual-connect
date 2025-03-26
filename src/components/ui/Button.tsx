
import { Button as ShadcnButton, buttonVariants } from "./button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
}

export const Button = ({
  children,
  className,
  href,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) => {
  const classes = cn(buttonVariants({ variant, size, className }));

  if (href) {
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <ShadcnButton variant={variant} size={size} className={className} {...props}>
      {children}
    </ShadcnButton>
  );
};

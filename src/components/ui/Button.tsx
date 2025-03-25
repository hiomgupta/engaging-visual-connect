
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      children,
      href,
      external,
      icon,
      iconPosition = 'right',
      ...props
    },
    ref
  ) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      {
        // Variant styles
        'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-sm hover:shadow-md': variant === 'primary',
        'bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 shadow-sm hover:shadow-md': variant === 'secondary',
        'border border-slate-300 bg-transparent hover:bg-slate-50 text-slate-700': variant === 'outline',
        'bg-transparent hover:bg-slate-100 text-slate-700': variant === 'ghost',
        'bg-transparent text-blue-600 hover:text-blue-700 hover:underline p-0': variant === 'link',
        
        // Size styles
        'text-sm px-4 py-2 h-9': size === 'sm',
        'text-base px-5 py-2.5 h-11': size === 'md',
        'text-lg px-6 py-3 h-14': size === 'lg',
      },
      className
    );

    const content = (
      <>
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </>
    );

    if (href) {
      return external ? (
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={baseStyles}
        >
          {content}
        </a>
      ) : (
        <Link to={href} className={baseStyles}>
          {content}
        </Link>
      );
    }

    return (
      <button className={baseStyles} ref={ref} {...props}>
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };

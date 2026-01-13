'use client';

import React, { memo, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

const Button = memo<ButtonProps>(
  ({
    children,
    variant = 'primary',
    size = 'md',
    isLoading = false,
    className,
    disabled,
    ...props
  }) => {
    const baseStyles =
      'font-semibold rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center';

    const variants = {
      primary: 'bg-gold text-midnight hover:bg-gold/90 shadow-lg hover:shadow-xl',
      secondary: 'bg-steel text-pearl hover:bg-steel/90',
      outline: 'border-2 border-gold text-gold hover:bg-gold hover:text-midnight',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? 'Loading...' : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;

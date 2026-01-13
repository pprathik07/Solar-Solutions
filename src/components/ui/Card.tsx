'use client';

import React, { memo, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'hover' | 'bordered';
}

const Card = memo<CardProps>(
  ({ children, variant = 'default', className, ...props }) => {
    const variants = {
      default: 'bg-pearl rounded-lg p-6 shadow-md',
      hover:
        'bg-pearl rounded-lg p-6 shadow-md transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:-translate-y-2 border border-transparent hover:border-gold/20',
      bordered: 'bg-white rounded-lg p-6 border-2 border-steel/20 transition-all duration-300 hover:border-gold/50 hover:shadow-xl',
    };

    return (
      <div className={cn(variants[variant], className)} {...props}>
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
export default Card;

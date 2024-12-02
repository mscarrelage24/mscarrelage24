import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'default' | 'dark';
}

const Button = ({
  children,
  variant = 'default',
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        'inline-flex items-center gap-2 border border-black/15 px-6 h-12 rounded-xl cursor-pointer z-50',
        variant === 'dark' && 'bg-neutral-900/95 text-neutral-50',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

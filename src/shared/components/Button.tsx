import { ReactNode } from 'react';

import { cn } from '../lib/cn';

interface Props {
  children: ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  type = 'button',
  variant = 'primary',
  disabled = false,
  onClick,
}: Props) => {
  const getVariantStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-main text-white disabled:bg-black-700 disabled:text-gray-600 hover:bg-red';
      case 'secondary':
        return 'bg-transparent text-main border-1 border-main hover:border-red hover:text-red';
      case 'tertiary':
        return 'bg-transparent text-gray-600 border-1 border-gray-600 hover:border-gray-400 hover:text-gray-400 focus:border-red focus:text-red';
    }
  };

  return (
    <button
      className={cn(
        'xl:text-lg-semibold flex h-[50px] w-full max-w-[335px] cursor-pointer items-center justify-center rounded-md font-semibold whitespace-nowrap disabled:cursor-auto md:h-[55px] md:max-w-110 xl:h-[65px] xl:max-w-160',
        getVariantStyle(),
        className,
      )}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;

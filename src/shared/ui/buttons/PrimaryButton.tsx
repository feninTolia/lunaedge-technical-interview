import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/solid';
import { ButtonHTMLAttributes, ReactElement } from 'react';

interface IPrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  StartIcon?: ReactElement;
  EndIcon?: ReactElement;
}

const PrimaryButton = ({
  children,
  StartIcon = <StarIcon />,
  EndIcon = <ChevronDownIcon />,
  className,
  ...attr
}: IPrimaryButtonProps) => {
  return (
    <button
      className={`h-8 bg-accentClr text-white px-5 rounded-sm flex gap-2 items-center font-light ${className}`}
      {...attr}
    >
      <div className="w-4 h-4"> {StartIcon}</div>

      {children}

      <div className="w-4 h-4"> {EndIcon}</div>
    </button>
  );
};

export default PrimaryButton;

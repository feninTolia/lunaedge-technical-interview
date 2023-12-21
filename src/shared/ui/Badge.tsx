import React from 'react';
import { IBadgeProps } from '../types';
import { XMarkIcon } from '@heroicons/react/24/solid';

const Badge = ({ children, onClose }: IBadgeProps) => {
  return (
    <div className="flex gap-2 items-center w-fit bg-grayLight px-3 py-1 rounded-2xl">
      <span className="cursor-default"> {children}</span>
      <XMarkIcon
        className="w-5 h-5 text-grayMedium cursor-pointer hover:brightness-90 transition-all"
        onClick={onClose}
      />
    </div>
  );
};

export default Badge;

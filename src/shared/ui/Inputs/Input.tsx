import { InformationCircleIcon } from '@heroicons/react/24/solid';
import { InputHTMLAttributes, ReactElement } from 'react';
import InputBase from './InputBase';
import { useFormContext } from 'react-hook-form';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  label: string;
  TopRightSlot?: ReactElement;
  helperText?: string;
  InputIcon?: ReactElement;
}

const Input = ({
  width,
  label,
  TopRightSlot,
  helperText,
  InputIcon,
  name = '',
  ...attr
}: IInputProps) => {
  const methods = useFormContext();
  const errorMessage = methods?.formState.errors[name]?.message as string;
  return (
    <label className="flex flex-col gap-2">
      <div className="flex justify-between">
        <div className="font-medium flex gap-1 items-center">
          <span>{label}</span>
          <InformationCircleIcon className="w-4 h-4" />
        </div>
        <span className="text-grayDark">{TopRightSlot}</span>
      </div>
      <InputBase width={width} InputIcon={InputIcon} name={name} {...attr} />
      <span className={` ${errorMessage ? 'text-errorRed' : 'text-grayDark'}`}>
        {errorMessage ? errorMessage : helperText}
      </span>
    </label>
  );
};

export default Input;

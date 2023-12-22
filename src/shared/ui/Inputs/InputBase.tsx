import { EyeIcon } from '@heroicons/react/24/solid';
import { InputHTMLAttributes, ReactElement, useState } from 'react';
import { useFormContext } from 'react-hook-form';

interface IInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  InputIcon?: ReactElement;
}

const InputBase = ({
  width,
  type = 'text',
  InputIcon,
  disabled,
  className,
  name = '',
  ...attr
}: IInputBaseProps) => {
  const [isHideText, setIsHideText] = useState(type === 'password');
  const methods = useFormContext();
  const error = methods?.formState.errors[name]?.message as string;

  return (
    <div
      className={`relative ${disabled ? ' opacity-30' : ''} ${className}`}
      style={{ width: width ?? '384px' }}
    >
      <div
        className={`w-5 h-5 absolute bottom-1/2 left-4 translate-y-1/2 ${
          error ? 'text-errorRed' : ''
        }`}
      >
        {InputIcon}
      </div>
      <input
        {...methods?.register(name)}
        className={`password-input border ${
          error ? 'border-errorRed' : 'border-grayDark'
        }   bg-white  pr-12 px-3 ${
          InputIcon ? 'pl-12' : 'pl-2'
        } rounded-lg h-[42px] `}
        style={{ width: width ?? '384px' }}
        type={isHideText ? 'password' : type === 'password' ? 'text' : type}
        name={name}
        disabled={disabled}
        {...attr}
      />
      <EyeIcon
        onClick={() => setIsHideText(!isHideText)}
        className="w-5 h-5 absolute bottom-1/2 right-4 translate-y-1/2 cursor-pointer"
      />
      {disabled && (
        <div className="absolute top-0 bottom-0 w-full bg-blue rounded-lg"></div>
      )}
    </div>
  );
};

export default InputBase;

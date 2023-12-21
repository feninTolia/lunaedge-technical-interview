import { EyeIcon } from '@heroicons/react/24/solid';
import { InputHTMLAttributes, ReactElement, useState } from 'react';

interface IInputBaseProps extends InputHTMLAttributes<HTMLInputElement> {
  width?: string;
  InputIcon?: ReactElement;
}

const InputBase = ({
  width,
  type = 'text',
  InputIcon,
  disabled,
  ...attr
}: IInputBaseProps) => {
  const [isHideText, setIsHideText] = useState(type === 'password');

  return (
    <div className={`relative ${disabled ? ' opacity-30' : ''}`}>
      <div className="w-4 h-4 absolute bottom-1/2 left-4 translate-y-1/2">
        {InputIcon}
      </div>
      <input
        className={`password-input border border-grayDark  bg-white py-2 px-3 ${
          InputIcon ? 'pl-12' : ''
        } rounded-lg h-[42px] `}
        style={{ width: width ?? '384px' }}
        type={isHideText ? 'password' : type === 'password' ? 'text' : type}
        disabled={disabled}
        {...attr}
      />
      <EyeIcon
        onClick={() => setIsHideText(!isHideText)}
        className="w-4 h-4 absolute bottom-1/2 right-4 translate-y-1/2 cursor-pointer"
      />
      {disabled && (
        <div className="absolute top-0 bottom-0 w-full bg-blue rounded-lg"></div>
      )}
    </div>
  );
};

export default InputBase;

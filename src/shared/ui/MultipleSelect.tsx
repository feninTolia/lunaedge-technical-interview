import Badge from './Badge';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { IMultiSelectProps, ISelectedOption } from '../types';
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import InputBase from './Inputs/InputBase';
import { ChangeEvent, useState } from 'react';
import { AsyncDebounceFunction, asyncDebounce } from '../utils';

const MultipleSelect = ({
  label,
  helperText,
  availableOptions,
  TopRightSlot,
  filterSearchFn,
}: IMultiSelectProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<ISelectedOption[]>([]);

  console.log('selectedOptions', selectedOptions);

  const toggleOption = (option: ISelectedOption) => {
    const optionIndex = selectedOptions.indexOf(option);
    if (optionIndex !== -1) {
      setSelectedOptions((prev) =>
        prev.filter((_, idx) => idx !== optionIndex)
      );
      return;
    }
    setSelectedOptions([...selectedOptions, option]);
  };

  const handleInput: AsyncDebounceFunction = asyncDebounce(
    async (inputValue: string) => {
      filterSearchFn(inputValue);
    },
    600
  );

  const onFilterChange = async (e: ChangeEvent<HTMLInputElement>) => {
    await handleInput(e.target.value);
  };

  return (
    <div className="relative z-10">
      <div className="flex  flex-col gap-2 w-96 ">
        <div className="flex justify-between">
          <div className="font-medium flex gap-1 items-center">
            <span>{label}</span>
            <InformationCircleIcon className="w-4 h-4" />
          </div>
          {TopRightSlot}
        </div>
        <button
          className="relative text-grayDark focus:text-black"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <div className=" border border-grayDark  bg-white py-2 px-3 rounded-lg w-full h-[42px] ">
            <div className=" flex gap-2 items-center mr-8 w-[87%] overflow-scroll">
              {selectedOptions.length ? (
                selectedOptions.map((option) => (
                  <Badge key={option.name} onClose={() => toggleOption(option)}>
                    {option.name}
                  </Badge>
                ))
              ) : (
                <span>Select</span>
              )}
            </div>
          </div>
          <XMarkIcon
            className={
              'absolute w-4 h-4 transition-all bottom-1/2 right-9 translate-y-1/2 text-black'
            }
            onClick={() => setSelectedOptions([])}
          />
          <ChevronDownIcon
            className={`absolute w-4 h-4 transition-all bottom-1/2 right-4 translate-y-1/2 text-black ${
              isDropdownOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
        <span className="text-grayDark ">{helperText}</span>
      </div>

      <div className="absolute top-20 shadow-md rounded-md overflow-y-scroll max-h-48 bg-white w-96">
        {isDropdownOpen && (
          <div className="flex flex-col  items-start py-3">
            <div className="px-4  py-1 flex gap-4 items-center w-full">
              <span className="font-medium text-grayDark">Find</span>
              <InputBase
                width="100%"
                placeholder="Full pokemon name"
                onChange={onFilterChange}
              />
            </div>

            {availableOptions.map((option) => (
              <button
                key={option.name}
                onClick={() => toggleOption(option)}
                className={` hover:bg-grayMedium w-full text-left py-1 px-4 ${
                  selectedOptions.includes(option) ? 'bg-grayLight ' : ''
                } `}
              >
                {option.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleSelect;

import Badge from './Badge';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { IMultiSelectProps } from '../types';
import { XMarkIcon, InformationCircleIcon } from '@heroicons/react/24/solid';
import InputBase from './Inputs/InputBase';

const MultipleSelect = ({
  label,
  helperText,
  selectedOptions,
  setSelectedOptions,
  availableOptions,
  filteredOption,
  setFilteredOption,
  isDropdownOpen,
  setIsDropdownOpen,
  TopRightSlot,
}: IMultiSelectProps) => {
  const toggleOption = (option: string) => {
    const optionIndex = selectedOptions.indexOf(option);
    if (optionIndex !== -1) {
      setSelectedOptions((prev) =>
        prev.filter((_, idx) => idx !== optionIndex)
      );
      return;
    }
    setSelectedOptions([...selectedOptions, option]);
  };

  return (
    <div className="relative z-50">
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
                  <Badge key={option} onClose={() => toggleOption(option)}>
                    {option}
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
        {(filteredOption || isDropdownOpen) && (
          <div className="flex flex-col  items-start py-3">
            <div className="px-4  py-1 flex gap-4 items-center w-full">
              <span className="font-medium text-grayDark">Find</span>
              <InputBase
                width="100%"
                placeholder="Full pokemon name"
                onChange={(e) => {
                  setFilteredOption(e.target.value);
                }}
              />
            </div>

            {availableOptions.map((option) => (
              <button
                key={option}
                onClick={() => toggleOption(option)}
                className={` hover:bg-grayMedium w-full text-left py-1 px-4 ${
                  selectedOptions.includes(option) ? 'bg-grayLight ' : ''
                } `}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MultipleSelect;

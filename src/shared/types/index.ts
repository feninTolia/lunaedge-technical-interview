import {
  Dispatch,
  FC,
  PropsWithChildren,
  ReactElement,
  SetStateAction,
} from 'react';

export interface IBadgeProps extends PropsWithChildren {
  onClose?: () => void;
}

export interface IMultiSelectProps {
  label: string;
  helperText?: string;
  selectedOptions: string[];
  setSelectedOptions: Dispatch<SetStateAction<string[]>>;
  availableOptions: string[];
  filteredOption: string;
  setFilteredOption: Dispatch<SetStateAction<string>>;
  isDropdownOpen: boolean;
  setIsDropdownOpen: Dispatch<SetStateAction<boolean>>;
  TopRightSlot?: ReactElement;
}

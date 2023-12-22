import { Dispatch, PropsWithChildren, ReactElement } from 'react';

export interface IBadgeProps extends PropsWithChildren {
  onClose?: () => void;
}

export interface IMultiSelectProps {
  label: string;
  helperText?: string;
  availableOptions: { name: string; url: string }[];
  TopRightSlot?: ReactElement;
  filterSearchFn: (name: string) => Promise<void>;
}

export interface IRegistrationInputs {
  firstName: string;
  lastName: string;
}

export interface ISelectedOption {
  name: string;
  url: string;
}

export interface IModalDialog {
  title: string;
}

export interface IFullPokemon {
  name: string;
  sprites: { front_default: string };
}

export interface IRegistrationFormProps {
  onSuccess: Dispatch<React.SetStateAction<boolean>>;
}

export interface ISelectedOptionsContextProps {
  selectedOptions: ISelectedOption[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectedOption[]>>;
}
export interface IModalContextProps {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

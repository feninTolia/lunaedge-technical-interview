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
  isOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

export interface IFullPokemon {
  name: string;
  sprites: { front_default: string };
}

import { createContext } from 'react';
import { ISelectedOption } from '../types';

interface ISelectedOptionsContextProps {
  selectedOptions: ISelectedOption[];
  setSelectedOptions: React.Dispatch<React.SetStateAction<ISelectedOption[]>>;
}

const ModalContext = createContext('light');

export const SelectedOptionsContext = createContext<
  ISelectedOptionsContextProps | undefined
>(undefined);

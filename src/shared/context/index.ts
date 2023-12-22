import { createContext } from 'react';
import { IModalContextProps, ISelectedOptionsContextProps } from '../types';

export const ModalContext = createContext<IModalContextProps | undefined>(
  undefined
);

export const SelectedOptionsContext = createContext<
  ISelectedOptionsContextProps | undefined
>(undefined);

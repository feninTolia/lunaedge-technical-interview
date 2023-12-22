import { PropsWithChildren, useState } from 'react';
import { ModalContext, SelectedOptionsContext } from '../context';
import { ISelectedOption } from '../types';

const Providers = ({ children }: PropsWithChildren) => {
  const [selectedOptions, setSelectedOptions] = useState<ISelectedOption[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <SelectedOptionsContext.Provider
      value={{ selectedOptions, setSelectedOptions }}
    >
      <ModalContext.Provider value={{ isModalOpen, setIsModalOpen }}>
        {children}
      </ModalContext.Provider>
    </SelectedOptionsContext.Provider>
  );
};

export default Providers;

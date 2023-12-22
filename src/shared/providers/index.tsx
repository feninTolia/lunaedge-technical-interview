import React, { PropsWithChildren, useState } from 'react';
import { SelectedOptionsContext } from '../context';
import { ISelectedOption } from '../types';

const Providers = ({ children }: PropsWithChildren) => {
  const [selectedOptions, setSelectedOptions] = useState<ISelectedOption[]>([]);

  return (
    <SelectedOptionsContext.Provider
      value={{ selectedOptions, setSelectedOptions }}
    >
      {children}
    </SelectedOptionsContext.Provider>
  );
};

export default Providers;

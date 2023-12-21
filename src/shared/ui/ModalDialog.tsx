import React, { Dispatch } from 'react';
import PrimaryButton from './buttons/PrimaryButton';
import { XMarkIcon } from '@heroicons/react/24/solid';

interface IModalDialog {
  title: string;
  isOpen: boolean;
  setIsModalOpen: Dispatch<React.SetStateAction<boolean>>;
}

const ModalDialog = ({
  title,
  setIsModalOpen,
  isOpen,
  ...attr
}: IModalDialog) => {
  return (
    <>
      {isOpen && (
        <>
          <div
            className={`absolute top-20 right-1/2 translate-x-1/2 z-50 bg-white px-6 py-5  shadow-xl rounded-sm w-96 flex flex-col gap-5 `}
            {...attr}
          >
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">{title}</h2>
              <button onClick={() => setIsModalOpen(false)}>
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>
            <p>Modal Dialog</p>
            <div className=" self-end flex gap-4">
              <button
                onClick={() => setIsModalOpen(false)}
                className="font-medium"
              >
                Cancel
              </button>
              <PrimaryButton>Save</PrimaryButton>
            </div>
          </div>
          <div
            onClick={() => setIsModalOpen(false)}
            className=" absolute top-0 bottom-0 right-0  z-40 left-0 bg-blue brightness-50"
          />
        </>
      )}
    </>
  );
};

export default ModalDialog;

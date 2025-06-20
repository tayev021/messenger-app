import { useContext } from 'react';

import { ModalContext } from '../context/ModalContext';

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error('ModalContext was used outside of ModalProvider');

  return context;
}

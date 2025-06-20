import { useState } from 'react';

import { ModalContext } from '../../lib/context/ModalContext';
import { Open } from './Open';
import { Window } from './Window';

function Modal({ children }) {
  const [openName, setOpenName] = useState('');

  const open = setOpenName;
  const close = () => setOpenName('');

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export { Modal };

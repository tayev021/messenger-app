import { cloneElement } from 'react';

import { useModalContext } from '../../lib/hooks/useModalContext';

export function Open({ children, opens: opensWindowName }) {
  const { open } = useModalContext();

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

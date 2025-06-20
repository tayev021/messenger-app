import { useState } from 'react';

import { ShowUserPanelContext } from '../../shared/lib/context/ShowUserPanelContext';

export function ShowUserPanelProvider({ children }) {
  const [isShowUserPanel, setIsShowUserPanel] = useState(true);

  function toggleShowUserPanel() {
    setIsShowUserPanel((show) => !show);
  }

  return (
    <ShowUserPanelContext.Provider
      value={{ isShowUserPanel, toggleShowUserPanel }}
    >
      {children}
    </ShowUserPanelContext.Provider>
  );
}

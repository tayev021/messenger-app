import { useState } from 'react';

import { ShowSidebarContext } from '../../shared/lib/context/ShowSidebarContext';

function ShowSidebarProvider({ children }) {
  const [isShowSidebar, setIsShowSidebar] = useState(true);

  function toggleShowSideBar() {
    setIsShowSidebar((show) => !show);
  }

  return (
    <ShowSidebarContext.Provider value={{ isShowSidebar, toggleShowSideBar }}>
      {children}
    </ShowSidebarContext.Provider>
  );
}

export { ShowSidebarProvider };

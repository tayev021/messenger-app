import { useContext } from 'react';

import { ShowSidebarContext } from '../context/ShowSidebarContext';

function useShowSidebarContext() {
  const context = useContext(ShowSidebarContext);

  if (!context)
    throw new Error(
      'ShowSidebarContext was used outside of ShowSidebarProvider'
    );

  return context;
}

export { useShowSidebarContext };

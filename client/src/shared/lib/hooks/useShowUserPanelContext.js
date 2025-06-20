import { useContext } from 'react';
import { ShowUserPanelContext } from '../context/ShowUserPanelContext';

export function useShowUserPanelContext() {
  const context = useContext(ShowUserPanelContext);

  if (!context) {
    throw new Error(
      'ShowUserPanelContext was used outside of ShowUserPanelProvider'
    );
  }

  return context;
}

import { useContext } from 'react';

import { PartnersContext } from '../context/PartnersContext';

export function usePartnersContext() {
  const context = useContext(PartnersContext);

  if (!context)
    throw new Error('PartnersContext was used outside of PartnersProvider');

  return context;
}

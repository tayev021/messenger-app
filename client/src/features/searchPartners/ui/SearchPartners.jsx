import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';

import { useSearchPartners } from '../lib/hooks/useSearchPartners';
import { SearchInput } from '../../../shared/ui/SearchInput';
import { PartnersContext } from '../lib/context/PartnersContext';

const Main = styled.div`
  width: 30rem;
`;

export function SearchPartners({ children }) {
  const refTimerDebounce = useRef();
  const [search, setSearch] = useState('');
  const { isLoading, partners, searchPartners } = useSearchPartners();

  useEffect(
    function () {
      if (search.length > 0) {
        if (refTimerDebounce.current) clearTimeout(refTimerDebounce.current);

        refTimerDebounce.current = setTimeout(
          () => searchPartners({ search }),
          500
        );
      }
    },
    [search, searchPartners]
  );

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Main>
      <SearchInput value={search} onChange={handleChange} />
      <PartnersContext.Provider value={{ search, isLoading, partners }}>
        {children}
      </PartnersContext.Provider>
    </Main>
  );
}

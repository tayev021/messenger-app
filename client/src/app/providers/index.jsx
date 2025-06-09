import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '../../shared/api/queryClient';
import { ShowSidebarProvider } from './ShowSidebarProvider';
import { SearchConversationsProvider } from './SearchConversationsProvider';

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowSidebarProvider>
        <SearchConversationsProvider>{children}</SearchConversationsProvider>
      </ShowSidebarProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

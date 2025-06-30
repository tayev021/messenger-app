import { QueryClientProvider } from '@tanstack/react-query';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '../../shared/api/queryClient';
import { ThemeProvider } from './ThemeProvider';
import { ShowUserPanelProvider } from './ShowUserPanelProvider';
import { ShowSidebarProvider } from './ShowSidebarProvider';
import { SearchConversationsProvider } from './SearchConversationsProvider';

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ShowUserPanelProvider>
          <ShowSidebarProvider>
            <SearchConversationsProvider>
              {children}
            </SearchConversationsProvider>
          </ShowSidebarProvider>
        </ShowUserPanelProvider>
      </ThemeProvider>
      {/* <ReactQueryDevtools /> */}
    </QueryClientProvider>
  );
}

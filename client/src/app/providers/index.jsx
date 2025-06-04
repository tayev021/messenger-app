import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '../../shared/api/queryClient';
import { ShowSidebarProvider } from './ShowSidebarProvider';

export default function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ShowSidebarProvider>{children}</ShowSidebarProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

import { Providers } from './providers/';
import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from './routes/Router';
import { Toaster } from '../shared/ui/Toaster';

export function App() {
  return (
    <Providers>
      <GlobalStyles />
      <Router />
      <Toaster />
    </Providers>
  );
}

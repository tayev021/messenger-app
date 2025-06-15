import { BrowserRouter, Route, Routes } from 'react-router';

import { ProtectedRoute } from './ProtectedRoute';
import { AppLayout } from '../layouts/AppLayout';
import { HomePage } from '../../pages/home';
import { ChatPage } from '../../pages/chat';
import { HideRoute } from './HideRoute';
import { SigninPage } from '../../pages/signin';
import { SignupPage } from '../../pages/signup';
import { PageNotFound } from '../../pages/pageNotFound';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="chats/:chatId" element={<ChatPage />} />
        </Route>
        <Route element={<HideRoute />}>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

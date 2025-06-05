import { BrowserRouter, Route, Routes } from 'react-router';

import ProtectedRoute from './ProtectedRoute';
import AppLayout from '../layouts/AppLayout';
import { HomePage } from '../../pages/home';
import HideRoute from './HideRoute';
import { SigninPage } from '../../pages/signin';
import { SignupPage } from '../../pages/signup';
import { PageNotFound } from '../../pages/pageNotFound';

export default function Router() {
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

import { API_URL } from '../../../shared/constants/constants';

export async function signout() {
  await fetch(`${API_URL}/users/signout`, {
    method: 'GET',
    credentials: 'include',
  });
}

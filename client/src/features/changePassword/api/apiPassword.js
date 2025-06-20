import { API_URL } from '../../../shared/constants/constants';

export async function changePassword({ oldPassword, newPassword }) {
  const response = await fetch(`${API_URL}/users/password`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ oldPassword, newPassword }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
}

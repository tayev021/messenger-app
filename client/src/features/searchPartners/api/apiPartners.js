import { API_URL } from '../../../shared/constants/constants';

export async function getPartners({ search }) {
  const response = await fetch(`${API_URL}/users/partners`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ search }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const partners = json.data.partners;

  return partners;
}

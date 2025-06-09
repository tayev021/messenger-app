import { API_URL } from '../constants/constants';

export async function getConversations() {
  const response = await fetch(`${API_URL}/conversations`, {
    method: 'GET',
    credentials: 'include',
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data.conversations;
}

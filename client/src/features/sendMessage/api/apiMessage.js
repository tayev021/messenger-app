import { API_URL } from '../../../shared/constants/constants';

export async function sendMessage({ chatId, message }) {
  const response = await fetch(`${API_URL}/chats/${chatId}/message`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ message }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const chat = json.data.chat;

  return chat;
}

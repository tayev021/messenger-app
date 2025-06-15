import { API_URL } from '../../../shared/constants/constants';

export async function watchMessage({ chatId, messageId }) {
  const response = await fetch(
    `${API_URL}/chats/${chatId}/message/${messageId}/watch`,
    {
      method: 'POST',
      credentials: 'include',
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const chat = json.data.chat;

  return chat;
}

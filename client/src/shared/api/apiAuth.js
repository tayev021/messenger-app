import { API_URL } from '../constants/constants';

async function signin({ email, password }) {
  const response = await fetch(`${API_URL}/users/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const user = json.data.user;

  return user;
}

async function getCurrentUser() {
  const response = await fetch(`${API_URL}/users/me`, {
    credentials: 'include',
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const user = json.data.user;

  if (!user) return null;

  return user;
}

export { signin, getCurrentUser };

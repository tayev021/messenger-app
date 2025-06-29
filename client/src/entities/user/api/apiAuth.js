import { API_URL } from '../../../shared/constants/constants';

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

async function signup({ name, surname, email, password }) {
  const response = await fetch(`${API_URL}/users/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ name, surname, email, password }),
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  const user = json.data.user;

  return user;
}

export async function signout() {
  await fetch(`${API_URL}/users/signout`, {
    method: 'GET',
    credentials: 'include',
  });
}

async function getMe() {
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

export { signin, signup, getMe };

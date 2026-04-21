import { LoginPayload } from '../types';

export async function userLogin({ username, password }: LoginPayload): Promise<Record<string, unknown>> {
  const BASE_URL = 'http://10.0.2.2:8000';
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(BASE_URL + '/api/login', options);

  let data: any;
  try {
    data = await response.json();
  } catch {
    data = null;
  }

  if (response.ok) {
    console.log('Login success response:', data);
    return data;
  }

  const message =
    (data && (data.errors?.password || data.errors?.detail || data.detail)) || 'Login failed';
  throw new Error(String(message));
}

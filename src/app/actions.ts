import { LoginPayload } from './types';

export const USER_LOGIN = 'USER_LOGIN' as const;
export const USER_LOGIN_REQUEST = 'USER_LOGIN_REQUEST' as const;
export const USER_LOGIN_COMPLETE = 'USER_LOGIN_COMPLETE' as const;
export const USER_LOGIN_ERROR = 'USER_LOGIN_ERROR' as const;
export const RESET_USER_LOGIN = 'RESET_USER_LOGIN' as const;
export const AUTH_CLEAR_ERROR = 'AUTH_CLEAR_ERROR' as const;

export const authLogin = (payload: LoginPayload) => ({
  type: USER_LOGIN,
  payload,
});

export const authLogout = () => ({
  type: RESET_USER_LOGIN,
});

export const authClearError = () => ({
  type: AUTH_CLEAR_ERROR,
});

export type AuthAction =
  | ReturnType<typeof authLogin>
  | ReturnType<typeof authLogout>
  | ReturnType<typeof authClearError>
  | { type: typeof USER_LOGIN_REQUEST }
  | { type: typeof USER_LOGIN_COMPLETE; payload: Record<string, unknown> | null }
  | { type: typeof USER_LOGIN_ERROR; error: string };

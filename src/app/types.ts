export type LoginPayload = {
  username: string;
  password: string;
};

export type AuthState = {
  data: Record<string, unknown> | null;
  isLoading: boolean;
  isError: boolean;
  error: string | null;
};

export type RootState = {
  auth: AuthState;
};

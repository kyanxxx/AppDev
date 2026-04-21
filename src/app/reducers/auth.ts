import {
  AUTH_CLEAR_ERROR,
  AuthAction,
  RESET_USER_LOGIN,
  USER_LOGIN_COMPLETE,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
} from '../actions';
import { AuthState } from '../types';

const INITIALSTATE: AuthState = {
  data: null,
  isLoading: false,
  isError: false,
  error: null,
};

export default function reducer(state: AuthState = INITIALSTATE, action: AuthAction): AuthState {
  console.log(action.type);
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        data: null,
        isLoading: true,
        isError: false,
        error: null,
      };

    case USER_LOGIN_COMPLETE:
      return {
        ...state,
        data: action.payload || null,
        isLoading: false,
        isError: false,
        error: null,
      };

    case USER_LOGIN_ERROR:
      return {
        ...state,
        data: null,
        isLoading: false,
        isError: true,
        error: action.error || 'Login failed',
      };

    case AUTH_CLEAR_ERROR:
      return {
        ...state,
        isError: false,
        error: null,
      };

    case RESET_USER_LOGIN:
      return INITIALSTATE;

    default:
      return state;
  }
}

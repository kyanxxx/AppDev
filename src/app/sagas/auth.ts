import { call, put, takeLatest } from 'redux-saga/effects';

import { USER_LOGIN, USER_LOGIN_COMPLETE, USER_LOGIN_ERROR, USER_LOGIN_REQUEST } from '../actions';
import { userLogin as userLoginApi } from '../api/auth';
import { LoginPayload } from '../types';

type UserLoginAction = {
  type: typeof USER_LOGIN;
  payload: LoginPayload;
};

export function* userLoginAsync(action: UserLoginAction) {
  console.log('User login saga started: ', action);

  try {
    yield put({ type: USER_LOGIN_REQUEST });
    const data: Record<string, unknown> = yield call(userLoginApi, action.payload);
    yield put({
      type: USER_LOGIN_COMPLETE,
      payload: data,
    });
  } catch (error: any) {
    console.log('User login saga error: ', error);
    yield put({
      type: USER_LOGIN_ERROR,
      error: error?.message || 'Login failed',
    });
  }
}

export function* userLogin() {
  yield takeLatest(USER_LOGIN, userLoginAsync);
}

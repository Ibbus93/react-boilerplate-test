import { call, put, takeLatest } from 'redux-saga/effects';

import { registerUser } from 'api';
import { signUpResponse, signUpError } from './actions';
import { SIGN_UP_REQUEST } from './constants';

export function* requestSignUp({
  user: { name, surname, username, email, password },
}) {
  try {
    const userPost = { name, surname, username, email, password };

    const callDone = yield call(registerUser, userPost);
    const result = yield callDone.json();

    yield put(signUpResponse(result));
  } catch (error) {
    // console.error(error);
    yield put(signUpError(error));
  }
}

// Individual exports for testing
export default function* signUpSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(SIGN_UP_REQUEST, requestSignUp);
}

/*
 *
 * SignUp reducer
 *
 */
import produce from 'immer';
import { SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_ERROR } from './constants';

export const initialState = {
  loading: false,
  isError: false,
  response: null,
  error: null,
};

/* eslint-disable default-case, no-param-reassign */
const signUpReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SIGN_UP_REQUEST:
        draft.loading = true;
        draft.isError = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.loading = false;
        draft.response = action.response;
        break;
      case SIGN_UP_ERROR:
        draft.isError = true;
        draft.error = action.error;
        break;
    }
  });

export default signUpReducer;

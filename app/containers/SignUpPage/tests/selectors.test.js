import { selectSignUpDomain } from '../selectors';
import { defaultState } from './mocks';

describe('SignUp selector', () => {
  it('Expect to return the initial state', () => {
    const result = selectSignUpDomain(defaultState);

    expect(result).toEqual(defaultState);
  });
});

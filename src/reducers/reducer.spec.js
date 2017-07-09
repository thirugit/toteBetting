import { HANDLE_INPUT, PLACE_BET, INPUT_ERROR, VIEW_RESULT, CLEAR } from '../constants/actionsConstants';
import reducer, { initialState } from './reducer';

const actionPayload = {
  'bet': 'Bet:W:1:2',
  'betString': 'Bet:W:',
  'result': 'Result:1:2:3',
  'dividends': ['Win:1:$0.85']
};

describe('reducer', () => {
  it('should handle HANDLE_INPUT', () => {
    const state = reducer(initialState, {
      type: HANDLE_INPUT,
      ...actionPayload
    });
    const expectedState = {
      ...initialState,
      betString: actionPayload.betString,
      error: ''
    };
    expect(state).to.deep.equal(expectedState);
  });
  it('should handle PLACE_BET', () => {
    const state = reducer(initialState, {
      type: PLACE_BET,
      ...actionPayload
    });
    const expectedState = {
      ...initialState,
      bet: [actionPayload.bet],
      error: ''
    };
    expect(state).to.deep.equal(expectedState);
  });
  it('should handle CLEAR', () => {
    const state = reducer(initialState, {
      type: CLEAR
    });
    const expectedState = {
      ...initialState
    };
    expect(state).to.deep.equal(expectedState);
  });
  it('should handle INPUT_ERROR', () => {
    const state = reducer(initialState, {
      type: INPUT_ERROR
    });
    const expectedState = {
      ...initialState,
      error: 'Invalid input!'
    };
    expect(state).to.deep.equal(expectedState);
  });
  it('should handle VIEW_RESULT', () => {
    const state = reducer(initialState, {
      type: VIEW_RESULT,
      ...actionPayload
    });
    const expectedState = {
      ...initialState,
      result: actionPayload.result,
      dividends: actionPayload.dividends,
      error: ''
    };
    expect(state).to.deep.equal(expectedState);
  });
});

import * as types from '../constants/actionsConstants';
import { findDividend } from '../utils/dividendCalculator';

export function handleInputChange(value) {
  return (dispatch) => {
    dispatch({
      type: types.HANDLE_INPUT,
      betString: value
    });
  };
}
export function clear() {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR
    });
  };
}
/* Following function checks if it is a bet or result or invalid input and calls the appropriate reducer function */
export function placeBet(value) {
  const regexTestForBet = /^Bet:(([WP]\:\d*[1-9]+\d*\:\d*[1-9]+\d*)|([E]\:\d*[1-9]+\d*\,\d*[1-9]+\d*\:\d*[1-9]+\d*))$/;
  const regexTestForResult = /^Result:\d*[1-9]+\d*\:\d*[1-9]+\d*\:\d*[1-9]+\d*$/;
  if (value.match(regexTestForBet)) {
    return (dispatch) => {
      dispatch({
        type: types.PLACE_BET,
        bet: value
      });
    };
  } else if (value.match(regexTestForResult) && value.split(':')[3]!== value.split(':')[1]
    && value.split(':')[1]!== value.split(':')[2] && value.split(':')[2]!== value.split(':')[3]) {
    return (dispatch, getState) => {
      const dividends = findDividend(getState().bet, value);
      dispatch({
        type: types.VIEW_RESULT,
        result: value,
        dividends
      });
    };
  } return (dispatch) => {
    dispatch({
      type: types.INPUT_ERROR
    });
  };
}

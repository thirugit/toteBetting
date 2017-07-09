import { HANDLE_INPUT, PLACE_BET, INPUT_ERROR, VIEW_RESULT, CLEAR, ERROR_MSG } from '../constants/actionsConstants';

export const initialState = {
  betString: '',
  bet: [],
  error: '',
  result: '',
  dividends: []
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case HANDLE_INPUT: {
      return { ...state,
        betString: action.betString,
        error: ''
      };
    }
    case PLACE_BET: {
      return { ...state,
        bet: [...state.bet, action.bet],
        error: ''
      };
    }
    case INPUT_ERROR: {
      return { ...state,
        error: ERROR_MSG
      };
    }
    case VIEW_RESULT: {
      return { ...state,
        result: action.result,
        dividends: action.dividends,
        error: ''
      };
    }
    case CLEAR: return initialState;
    default: {
      return state;
    }
  }
}

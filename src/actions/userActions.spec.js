import { HANDLE_INPUT, CLEAR, PLACE_BET, INPUT_ERROR, VIEW_RESULT } from '../constants/actionsConstants';
import { betsTest } from '../test/mockdata';

const proxyquire = require('proxyquire').noCallThru();

const appState = {
  betString: '',
  bet: betsTest.bets,
  error: '',
  result: '',
  dividends: []
};

const sandbox = sinon.sandbox.create();
const { handleInputChange, clear, placeBet } = proxyquire('./userActions', {});
const dispatchSpy = sandbox.spy();
const getState = () => (appState);
describe('User actions', () => {
  it('should handle the input change on user input', () => {
    handleInputChange('Bet:W:2:45')(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({ type: HANDLE_INPUT,
      betString: 'Bet:W:2:45' });
  });
  it('should handle clear button click', () => {
    clear()(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({ type: CLEAR });
  });
  it('should call PLACE_BET reducer function on correct bet input', () => {
    placeBet('Bet:W:2:34')(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({ type: PLACE_BET,
      bet: 'Bet:W:2:34' });
  });
  it('should call INPUT_ERROR on incorrect input', () => {
    placeBet('BetW123')(dispatchSpy);
    expect(dispatchSpy).to.have.been.calledWith({ type: INPUT_ERROR });
  });
  it('should call VIEW_RESULT if result is entered', () => {
    placeBet('Result:1:2:3')(dispatchSpy, getState);
    expect(dispatchSpy).to.have.been.calledWith({ type: VIEW_RESULT,
      result: 'Result:1:2:3',
      dividends: betsTest.dividends
    });
  });
});


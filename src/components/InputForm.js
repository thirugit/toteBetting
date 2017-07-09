import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { placeBet, handleInputChange, clear } from '../actions/userActions';

export const InputForm = ({ betString, result, dispatchClear, dispatchPlaceBet, dispatchInputChange }) => <div>
  <label className="hidden" htmlFor="txtCmd">Enter your bets</label>
  <input type="text" id="txtCmd" onChange={e => dispatchInputChange(e.target.value)}
  placeholder="Enter the bet/result" className="input-box" value={betString} />
  {result === '' ? <button type="submit" aria-label="Place Bets" onClick={() => dispatchPlaceBet(betString)} className="go-butn">ENTER</button> : null}
  <button type="submit" aria-label="Clear" onClick={() => dispatchClear()} className="go-butn">CLEAR</button>
</div>;
InputForm.propTypes = {
  dispatchPlaceBet: PropTypes.func,
  betString: PropTypes.string,
  result: PropTypes.string,
  dispatchInputChange: PropTypes.func,
  dispatchClear: PropTypes.func
};
const mapStateToProps = state => ({
  betString: state.betString
});
export default connect(mapStateToProps, { dispatchPlaceBet: placeBet, dispatchClear: clear, dispatchInputChange: handleInputChange })(InputForm);

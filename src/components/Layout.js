import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Bets from './Bets';
import Dividends from './Dividends';
import InputForm from './InputForm';

export const Layout = props => <div className="grid">
  <h1>Tote Betting</h1>
  <InputForm {...props} />
  {props.error !== '' ? <p className="error">{props.error}</p> : <p className="error">&nbsp;</p>}
  <Bets {...props} />
  <Dividends {...props} />
</div>;

Layout.propTypes = {
  error: PropTypes.string
};
const mapStateToProps = state => ({
  error: state.error,
  bet: state.bet,
  betString: state.betString,
  result: state.result,
  dividends: state.dividends
});

export default connect(mapStateToProps, null)(Layout);


import React, { PropTypes } from 'react';

export function Dividends({ dividends }) {
  const finalDividends = dividends && dividends.map((a, i) => (a !== '' ? <div className="bets dividend" key={a.concat(i)}>{a}</div> : null));
  return (<div className="flex-box">{finalDividends}</div>);
}
Dividends.propTypes = {
  dividends: PropTypes.arrayOf(React.PropTypes.string)
};
export default Dividends;

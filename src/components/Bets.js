import React, { PropTypes } from 'react';

export const Bets = ({ bet, result }) => {
  const betsDivs = bet && bet.map((a, i) => <div className="bets" key={a.concat(i)}>{a}</div>);
  const resultsDiv = result !== '' ? <div className="result">{result}</div> : null;
  return (<div>
    <div className="flex-box">{betsDivs}</div>
    {resultsDiv}
  </div>);
};
Bets.propTypes = {
  bet: PropTypes.array,
  result: PropTypes.string
};
export default Bets;

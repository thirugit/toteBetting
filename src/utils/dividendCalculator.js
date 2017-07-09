export function getTotal(bets) {
  return bets.reduce((acc, cur) => acc += +cur.split(':')[3], 0);
}

export function filterByProduct(product, bets) {
  return bets.filter(cur => cur.split(':')[1] === product);
}
export function getTotalPoolByProduct(product, totalAmt, percent) {
  return product === 'Place' ? ((totalAmt * (100 - percent)) / 300) : (totalAmt * (100 - percent)) / 100;
}
export function findWinnersPool(arr, result) {
  return arr.reduce((acc, cur) => {
    if (cur.split(':')[2] === result) {
      return acc += +cur.split(':')[3];
    }
    return acc;
  }, 0);
}
export function getDividends(product, percent, arr, result) {
  if (arr.length > 0) {
    const totalAmt = getTotal(arr);
    const totalPool = getTotalPoolByProduct(product, totalAmt, percent);
    const winnersShare = findWinnersPool(arr, result);
    if (winnersShare > 0)
      return product + ':' + result + ':$' + (totalPool / winnersShare).toFixed(2);
  }
  return '';
}
export function findDividend(bets, result) {
  const finalResult = [];
  const winners = result.split(':');
  const firstPos = winners[1];
  const secondPos = winners[2];
  const thirdPos = winners[3];
  const winDividends = filterByProduct('W', bets);
  const exactaDividends = filterByProduct('E', bets, firstPos + ',' + secondPos);
  const placeDividends = filterByProduct('P', bets, firstPos);
  finalResult.push(getDividends('Win', 15, winDividends, firstPos));
  finalResult.push(getDividends('Place', 12, placeDividends, firstPos));
  finalResult.push(getDividends('Place', 12, placeDividends, secondPos));
  finalResult.push(getDividends('Place', 12, placeDividends, thirdPos));
  finalResult.push(getDividends('Exacta', 18, exactaDividends, firstPos + ',' + secondPos));
  return finalResult;
}

import {
  getTotal,
  filterByProduct,
  getTotalPoolByProduct,
  findWinnersPool,
  getDividends,
  findDividend
} from '../utils/dividendCalculator';

describe('Dividend Calculator', () => {
  describe('getTotal', () => {
    it('should return total stake in the array for the given index', () => {
      expect(getTotal(['Bet:W:1:2', 'Bet:W:1:3'])).to.equal(5);
    });
  });
  describe('filterByProduct', () => {
    it('should filter a given array of bets based on the product', () => {
      expect(filterByProduct('W', ['Bet:W:1:2', 'Bet:P:1:3'])).to.eql(['Bet:W:1:2']);
    });
  });
  describe('getTotalPoolByProduct', () => {
    it('should return the total amount in the pool based on the product and percentage', () => {
      expect(getTotalPoolByProduct('Place', 1000, 10)).to.equal(300);
    });
    it('should return the total amount in the pool based on the product and percentage', () => {
      expect(getTotalPoolByProduct('Win', 1000, 10)).to.equal(900);
    });
  });
  describe('findWinnersPool', () => {
    it('should filter a given array based on the result', () => {
      expect(findWinnersPool(['Bet:W:1:2', 'Bet:W:1:3'], '1')).to.equal(5);
    });
  });
  describe('getDividends', () => {
    it('should return dividends', () => {
      expect(getDividends('Win', 15, ['Bet:W:1:20', 'Bet:W:1:30'], '1')).to.equal('Win:1:$0.85');
    });
  });
  describe('findDividend', () => {
    it('should return final array containing all the results', () => {
      expect(findDividend(['Bet:W:1:20', 'Bet:W:1:30'], 'Result:1:2:3')).to.eql(['Win:1:$0.85', '', '', '', '']);
    });
  });
});

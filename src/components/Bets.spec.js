import React from 'react';
import { shallow } from 'enzyme';

const proxyquire = require('proxyquire').noCallThru();

const Bets = proxyquire('./Bets', {}).Bets;

let props;
let wrapper;

describe('Bets', () => {
  beforeEach(() => {
    const props = {
      bet: ['Bet:W:1:2'],
      result: 'Result:1:2:3'
    };
    wrapper = shallow(<Bets {...props} />);
  });

  context('contains bets and result', () => {
    it('should render bets', () => {
      expect(wrapper.find('.bets')).to.have.length(1);
    });
    it('should render result', () => {
      expect(wrapper.find('.result')).to.have.length(1);
    });
  });
});


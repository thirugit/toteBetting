import React from 'react';
import { shallow } from 'enzyme';

const proxyquire = require('proxyquire').noCallThru();

const Dividends = proxyquire('./Dividends', {}).Dividends;

let props;
let wrapper;

describe('Dividends', () => {
  beforeEach(() => {
    props = {
      dividends: ['test dividends']
    };
    wrapper = shallow(<Dividends {...props} />);
  });

  context('contains dividends', () => {
    it('should render dividends', () => {
      expect(wrapper.find('.dividend')).to.have.length(1);
    });
  });
});
describe('Dividends', () => {
  beforeEach(() => {
    props = {
      dividends: ['']
    };
    wrapper = shallow(<Dividends {...props} />);
  });

  context('should not contain dividends', () => {
    it('should not render dividends component', () => {
      expect(wrapper.find('.dividend')).to.have.length(0);
    });
  });
});

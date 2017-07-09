import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../reducers/reducer';
import Bets from './Bets';
import Dividends from './Dividends';
import InputForm from './InputForm';

const proxyquire = require('proxyquire').noCallThru();

const Layout = proxyquire('./Layout', {
  './Bets': Bets,
  './Dividends': Dividends,
  './InputForm': InputForm
}).default;

describe('Layout', () => {
  const store = createStore(reducer);
  const props = { 'error': 'Invalid Input',
    'bet': ['Bet:W:1:2'],
    'betString': 'Bet:W:',
    'result': '',
    'dividends': []
  };
  const wrapperFormError = mount(<Provider store={store}><Layout {...props} /></Provider>);
  it('should render layout with errors', () => {
    expect(wrapperFormError.find('.error').length).to.equal(1);
  });
  const propsWithoutError = { 'error': '',
    'bet': ['Bet:W:1:2'],
    'betString': 'Bet:W:',
    'result': '',
    'dividends': []
  };
  const wrapperForm = mount(<Provider store={store}><Layout {...propsWithoutError} /></Provider>);
  it('should render layout', () => {
    expect(wrapperForm.find('.grid').length).to.equal(1);
  });
});

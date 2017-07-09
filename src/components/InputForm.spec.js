import { mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/reducer';

const proxyquire = require('proxyquire').noCallThru();

const InputForm = proxyquire('./InputForm', {}).InputForm;

describe('InputForm', () => {
  const spy = sinon.spy();
  const onChangeSpy = sinon.spy();
  const clearSpy = sinon.spy();
  const store = createStore(reducer);
  const props = { result: '',
    betString: 'Bet:W:1:2'
  };
  const wrapperForm = mount(
    <Provider store={store}>
      <InputForm {...props} dispatchInputChange={onChangeSpy} dispatchClear={clearSpy} dispatchPlaceBet={spy} />
    </Provider>);
  it('should render form', () => {
    expect(wrapperForm.find('.input-box').length).to.equal(1);
  });
  it('should call dispatchClear on button click', () => {
    wrapperForm.find('[aria-label="Clear"]').simulate('click');
    expect(clearSpy.called).to.be.true;
  });
  it('should execute dispatchPlaceBet on button click', () => {
    wrapperForm.find('[aria-label="Place Bets"]').simulate('click');
    expect(spy.called).to.be.true;
  });
  it('should dispatch input change on user input', () => {
    wrapperForm.find('.input-box').simulate('change');
    expect(onChangeSpy.called).to.be.true;
  });
  const propsWithResult = { result: 'Result:1:2:3',
    betString: 'Bet:W:1:2'
  };
  const wrapper = mount(
    <Provider store={store}>
      <InputForm {...propsWithResult} />
    </Provider>);
  it('should render form without Bets button', () => {
    expect(wrapper.find('[aria-label="Place Bets"]').length).to.equal(0);
  });
});

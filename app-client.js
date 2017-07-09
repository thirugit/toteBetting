import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './src/components/Layout';	
import reducer from './src/reducers/reducer';
import { Provider } from 'react-redux';
import  thunk  from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
let store = compose(applyMiddleware(thunk))(createStore)(reducer);
ReactDOM.render((<Provider store={store}><Layout /></Provider>), document.getElementById('container'));


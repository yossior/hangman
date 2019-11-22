import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import hangmanReducers from './assets/redux/reducers/hangmanReducer';

//no need for redux-thunk, just for POC
import thunk from 'redux-thunk';
const store = createStore(hangmanReducers, applyMiddleware(thunk));
ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>,
    document.getElementById('root')
);
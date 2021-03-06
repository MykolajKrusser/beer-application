import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import DataReducer from './store/reducers/data';
import OptionsReducer from './store/reducers/options';

const composeEnhancers = compose;

const rootReducers = combineReducers({
    data: DataReducer,
    options: OptionsReducer
})

const stateStore = createStore(rootReducers, composeEnhancers(
    applyMiddleware(thunk)
));


const app = (
    <Provider store={stateStore}>
        <App />
    </Provider>
);


ReactDOM.render(app, document.getElementById('root'));
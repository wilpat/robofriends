import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';//Passes down the parts of the store that each component 
										//needs onstead of everything everytime
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {createLogger} from 'redux-logger';// Used to spit out redux dispatches on the console
import thunkMiddleware from 'redux-thunk';//Used for ajax requests that affects state in the store
//It waits and sees if any action returns a function instead of an object
import { searchRobots, requestRobots } from './reducers';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware,logger));
ReactDOM.render( 
				<Provider store = {store}>
					<App/>
				</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

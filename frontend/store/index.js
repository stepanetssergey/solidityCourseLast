import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import reducers from './reducers';

console.log(reducers)
const RootReducer = combineReducers(reducers);

export const store = createStore(RootReducer,  composeWithDevTools(applyMiddleware(thunk)));

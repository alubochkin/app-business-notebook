import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const createLocalStorageData = localStorage.getItem('reduxStateBusinesOk')
  ? JSON.parse(localStorage.getItem('reduxStateBusinesOk'))
  : {};

const composeEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store = createStore(rootReducer,createLocalStorageData, composeEnhancer);

store.subscribe(() => {
  localStorage.setItem('reduxStateBusinesOk', JSON.stringify(store.getState()))
});

export default store;
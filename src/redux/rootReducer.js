import { combineReducers } from 'redux';
import listTaskReducer from './reducers/listTaskReducer'



const rootReducer = combineReducers({
  listTaskReducer,
});

export default rootReducer;
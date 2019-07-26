import { combineReducers } from 'redux';
import { aptReducer } from './aptReducer';
import { hoodReducer } from './hoodReducer'


const rootReducer = combineReducers({
  apts: aptReducer,
  hood: hoodReducer
});

export default rootReducer; 
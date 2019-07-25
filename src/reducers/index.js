import { combineReducers } from 'redux';
import { aptReducer } from './AptReducer';
import { hoodReducer } from './hoodReducer'


const rootReducer = combineReducers({
  apartments: aptReducer,
  hood: hoodReducer
});

export default rootReducer; 
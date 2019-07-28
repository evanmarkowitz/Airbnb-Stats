import { combineReducers } from 'redux';
import { aptReducer } from './aptReducer';
import { hoodReducer } from './hoodReducer'
import {aptTypeReducer } from './aptTypeReducer'


const rootReducer = combineReducers({
  apts: aptReducer,
  hood: hoodReducer,
  aptType: aptTypeReducer
});

export default rootReducer; 
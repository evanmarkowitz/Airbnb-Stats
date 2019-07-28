import { combineReducers } from 'redux';
import { aptReducer } from './aptReducer';
import { hoodReducer } from './hoodReducer'
import {aptTypeReducer } from './aptTypeReducer'
import { currAptReducer } from './currAptReducer';


const rootReducer = combineReducers({
  apts: aptReducer,
  hood: hoodReducer,
  aptType: aptTypeReducer,
  currApt: currAptReducer
});

export default rootReducer; 
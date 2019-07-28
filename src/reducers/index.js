import { combineReducers } from 'redux';
import { aptReducer } from './aptReducer';
import { hoodReducer } from './hoodReducer'
import {aptTypeReducer } from './aptTypeReducer'
import { currAptReducer } from './currAptReducer';
// import { mapCenterReducer } from './mapCenterReducer';


const rootReducer = combineReducers({
  apts: aptReducer,
  hood: hoodReducer,
  aptType: aptTypeReducer,
  currApt: currAptReducer,
  // mapCenter: mapCenterReducer
});

export default rootReducer; 
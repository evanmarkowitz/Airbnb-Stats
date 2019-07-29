export const currAptReducer = ( state = {}, action ) => {
  switch(action.type) {
    case 'GET_CURR_APT':
      return action.currApt
    default:
      return state
  }
}
export const aptReducer = ( state =[], action ) => {
  switch(action.type) {
    case 'GET_APT':
      return action.apts
    default:
      return state
  }
}
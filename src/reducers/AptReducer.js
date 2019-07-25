export const aptReducer = (state =[], action ) => {
  switch(action.type) {
    case 'GET_APT':
      return action.apt
    default:
      return state
  }
}
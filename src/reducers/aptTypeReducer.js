export const aptTypeReducer = ( state =[], action ) => {
  switch(action.type) {
    case 'GET_TYPE':
      return action.aptType
    default:
      return state
  }
}
export const hoodReducer = (state = '', action ) => {
  switch(action.type) {
    case 'GET_HOOD':
      return action.hood
    default:
      return state
  }
}
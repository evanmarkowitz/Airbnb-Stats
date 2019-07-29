import { aptTypeReducer } from './aptTypeReducer'

describe('aptTypeReducer', () => {
  
  it('should return default state', () => {
    const expected = '';
    const result = aptTypeReducer(undefined, '');
    
    expect(result).toEqual(expected);
  })

  it('should set aptType to state on GET_FAVORITES', () => {
    const aptType = 'Private Room'
    const actionObject = {
      type: 'GET_TYPE',
      aptType: aptType
    }
    const result = aptTypeReducer(undefined, actionObject)
    expect(result).toEqual(aptType)
  })
})
import { hoodReducer } from './hoodReducer'

describe('hoodReducer', () => {
  
  it('should return default state', () => {
    const expected = '';
    const result = hoodReducer(undefined, ''); 
    expect(result).toEqual(expected);
  })

  it('should set apts to state on GET_APTS', () => {
    const hood = 'Williamsburg'
    const actionObject = {
      type: 'GET_HOOD',
      hood: hood
    }
    const result = hoodReducer(undefined, actionObject)
    expect(result).toEqual(hood)
  })
})
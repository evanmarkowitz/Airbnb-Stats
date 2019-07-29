import { currAptReducer } from './currAptReducer'

describe('currAptReducer', () => {
  
  it('should return default state', () => {
    const expected = {};
    const result = currAptReducer(undefined, {});
    
    expect(result).toEqual(expected);
  })

  it('should set apts to state on GET_APTS', () => {
    const currApt = {name: 'Sunny APT'}
    const actionObject = {
      type: 'GET_CURR_APT',
      currApt: currApt
    }
    const result = currAptReducer(undefined, actionObject)
    expect(result).toEqual(currApt)
  })
})
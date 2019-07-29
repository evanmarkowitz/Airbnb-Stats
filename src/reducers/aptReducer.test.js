import { aptReducer } from './aptReducer'

describe('aptReducer', () => {
  
  it('should return default state', () => {
    const expected = [];
    const result = aptReducer(undefined, {});
    
    expect(result).toEqual(expected);
  })

  it('should set apts to state on GET_APTS', () => {
    const apts = [{name: 'Sunny APT'}, {name:"Cloudy APT"}]
    const actionObject = {
      type: 'GET_APT',
      apts: apts
    }
    const result = aptReducer(undefined, actionObject)
    expect(result).toEqual(apts)
  })
})
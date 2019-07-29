import * as actions from './index';

describe('actions', () => {
  
  it('should get array of object', () => {
    const apts = [{aptType: "Entire Apt"}]
    const expectedAction = {
      type: 'GET_APT',
      apts: apts
    }
    const result = actions.getApts(apts);
    expect(result).toEqual(expectedAction)
  });

  it('should set the hood', () => {
    const hood = 'Williamsburg'
    const expectedAction = {
      type: 'GET_HOOD',
      hood: hood
    }
    const result = actions.getHood(hood);
    expect(result).toEqual(expectedAction)
  });

  it('should get the apartment type', () => {
    const aptType = 'Private Room'
    const expectedAction = {
      type: 'GET_TYPE',
      aptType: aptType
    }
    const result = actions.getAptType(aptType);
    expect(result).toEqual(expectedAction)
  });

  it('should get the current apartment', () => {
    const currApt = {hood: 'Williamsburg', aptType: 'Private Room'}
    const expectedAction = {
      type: 'GET_CURR_APT',
      currApt: currApt
    }
    const result = actions.getCurrApt(currApt);
    expect(result).toEqual(expectedAction)
  });

  it('should get the current apartment', () => {
    const currApt = {hood: 'Williamsburg', aptType: 'Private Room'}
    const expectedAction = {
      type: 'GET_CURR_APT',
      currApt: currApt
    }
    const result = actions.getCurrApt(currApt);
    expect(result).toEqual(expectedAction)
  });
})
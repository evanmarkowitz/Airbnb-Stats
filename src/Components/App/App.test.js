import {mapStateToProps, mapDispatchToProps, App} from './App'
import { getApts, getCurrApt } from '../../actions/index.js'
import {shallow} from 'enzyme'
import { fetchApartments, apartmentCleaner } from '../../ApiCalls/apiCall'
import React from 'react'



describe('App: Map Dispatch and StateTo Props', () => {
  let initialState;
  let mockDispatch
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />)
    initialState = {apts: [{name:'hi'}], hood: 'Williamsburg', aptType: 'Private Room'}
    mockDispatch = jest.fn();
    
  })
  it('should map snapshot', () =>{
    expect(wrapper).toMatchSnapshot()
  })

  it('should map getApt to props', () => {
    const mockAction = getApts(initialState.apts)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getApts(initialState.apts);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should map getCurrApt to props', () => {
    const mockAction = getCurrApt(initialState.currApt)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getCurrApt(initialState.currApt);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('Should map state to props', () => {
    let props= initialState
    const mappedProps = mapStateToProps(props);
    expect(mappedProps).toEqual(props);
  })

  it.skip('should call fetch on component did mount', () => {
    let mockEvent = { preventDefault: jest.fn() }
    apartmentCleaner = jest.fn()
    window.fetch = jest.fn()
    wrapper.instance().componentDidMount()
    expect(apartmentCleaner).toHaveBeenCalled()
  })
})

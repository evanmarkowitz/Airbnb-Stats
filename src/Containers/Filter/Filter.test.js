import {mapStateToProps, mapDispatchToProps, Filter} from './Filter'
import { getApts, getHood, getAptType } from '../../actions/index.js'
import {shallow} from 'enzyme'
import React from 'react'


describe('Filter', () => {
  let wrapper;
  let apts;
  let getApts; 
  let getHood;
  let getAptType;
  beforeEach(() => {
    wrapper = shallow(<Filter apts ={apts} getApts={getApts} getHood={getHood} getAptType={getAptType}/>)
    apts = []
    getApts = jest.fn()
    getHood = jest.fn()
    getAptType = jest.fn()
  })

  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should toggle state when toggleHood is called', () => {
    expect(wrapper.state('hoodsShow')).toEqual(false)
    wrapper.instance().toggleHood()
    expect(wrapper.state('hoodsShow')).toEqual(true)
  })

  it('should toggle state when toggleBorough is called', () => {
    expect(wrapper.state('boroughShow')).toEqual(false)
    wrapper.instance().toggleBorough()
    expect(wrapper.state('boroughShow')).toEqual(true)
  })

  it('should toggle state when toggleType is called', () => {
    expect(wrapper.state('typeOfAprtment')).toEqual(false)
    wrapper.instance().toggleType()
    expect(wrapper.state('typeOfAprtment')).toEqual(true)
  })

  it('should update state when a neighborhood is chosen', () => {
    const mockEvent = { target: { name: 'hood', value: 'Williamsburg'}}
    const expected = 'Williamsburg'
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('hood')).toEqual(expected);
  });

  it('should update state when a borough is choose is chosen', () => {
    const mockEvent = { target: { name: 'borough', value: 'Brooklyn'}}
    const expected = 'Brooklyn'
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state('borough')).toEqual(expected);
  });

  it.skip('should update state when a hood is chosen', async () => {
    const mockEvent = { target: { name: 'hood', value: 'Williamsburg'}}
    const mockEventHood = 'Williamsburg'
    wrapper.instance().getHood = jest.fn()
    await wrapper.instance().chooseHood(mockEvent)
    await expect(wrapper.instance().getHood).toHaveBeenCalled()
  });

  it('should map state to props', () => {
    let initialState = {apts: [{name:'hi'}]}
    wrapper = shallow(<Filter initialState = {initialState} getApts={getApts} getHood={getHood} getAptType={getAptType}/>)
    const mappedProps = mapStateToProps(initialState);
    expect(mappedProps).toEqual(initialState);
  })
  it('filters when the filter button is clicked', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.setState({boroughShow: true})
    wrapper.find('.filter-man').simulate('click')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })
  it('filters when the filter button is clicked', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.setState({boroughShow: true})
    wrapper.find('.filter-bk').simulate('click')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })
  it('filters when the filter button is clicked', () => {
    wrapper.instance().handleChange = jest.fn()
    wrapper.setState({boroughShow: true})
    wrapper.find('.filter-queens').simulate('click')
    expect(wrapper.instance().handleChange).toHaveBeenCalled()
  })
  it('filters when the filter button is clicked', () => {
    wrapper.instance().chooseAptType = jest.fn()
    wrapper.setState({typeOfAprtment: true})
    wrapper.find('.entire-home').simulate('click')
    expect(wrapper.instance().chooseAptType).toHaveBeenCalled()
  })
  it('filters when the filter button is clicked', () => {
    wrapper.instance().chooseAptType = jest.fn()
    wrapper.setState({typeOfAprtment: true})
    wrapper.find('.private-room').simulate('click')
    expect(wrapper.instance().chooseAptType).toHaveBeenCalled()
  })
  it.skip('should call getHood when chooseHood is called', () => {
    let mockEvent = { preventDefault: jest.fn() }
    wrapper.instance().props.getHood = jest.fn()
    wrapper.instance().chooseHood(mockEvent)
    expect(wrapper.instance().props.getHood).toHaveBeenCalled()
  })
})
  describe('Filter: Map Dispatch To Props', () => {
    let initialState;
    let mockDispatch
    beforeEach(() => {
      initialState = {apts: [{name:'hi'}], hood: 'Williamsburg', aptType: 'Private Room' }
      mockDispatch = jest.fn();
    })

  it('should map getApt to props', () => {
    const mockAction = getApts(initialState.apts)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getApts(initialState.apts);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should map getHood to props', () => {
    const mockAction = getHood(initialState.hood)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getHood(initialState.hood);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

  it('should map getHood to props', () => {
    const mockAction = getAptType(initialState.aptType)
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getAptType(initialState.aptType);
    expect(mockDispatch).toHaveBeenCalledWith(mockAction);
  })

})


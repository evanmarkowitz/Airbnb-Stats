import {mapStateToProps, Overview} from './Overview'
import {shallow} from 'enzyme'
import React from 'react'


describe('Overview', () => {
  let apts;
  let aptType;
  let hood;
  let wrapper;

  beforeEach(() => {  
    hood = 'Williamsburg'
    aptType = 'Private Room'
    apts = [{reviewsPerMonth: 1.5, id: 8252369, numReviews: 68,
      price: 85, aptType: "Private room", name: "APT 2",
      hood: "Williamsburg", lat: 40, long: -73},
      {reviewsPerMonth: 1.5, id: 8252369, numReviews: 68,
        price: 85, aptType: "Entire home/apt", name: "APT 1",
        hood: "Williamsburg", lat: 40, long: -73},
      {reviewsPerMonth: 1.5, id: 8252369, numReviews: 68,
        price: 85, aptType: "Entire home/apt", name: "APT 1",
        hood: "Greenpoint", lat: 40, long: -73}]
    wrapper = shallow(<Overview  hood={hood} aptType={aptType} apts={apts} />)
  })

  
  it('should match a snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should map state to props', () => {
    let initialState = {hood: hood, aptType: aptType, apts: apts}
    const mappedProps = mapStateToProps(initialState);
    expect(mappedProps).toEqual(initialState);
  })
 
})
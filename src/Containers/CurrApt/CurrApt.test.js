import React from 'react';
import { CurrApt, mapStateToProps } from './CurrApt';
import {shallow} from 'enzyme'


describe('Current Apartment', ()=> {
    let wrapper;
    let currApt
  beforeEach(() => {
    currApt = {aptType: "Entire home/apt",
      hood: "Long Island City",
      id: 21530562,
      lat: 40.75358595672167,
      long: -73.93849189432474,
      name: "Modern Cozy & Clean Private 3 Bedroom Mins to NYC",
      numReviews: 60,
      price: 300, 
      reviewsPerMonth:3.21}
    wrapper = shallow(<CurrApt currApt={currApt}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should map dispatch to props', () => {
    let props= {currApt: currApt}
    const mappedProps = mapStateToProps(props);
    expect(mappedProps).toEqual(props);
  })
})
import {Result} from './Results'
import {shallow} from 'enzyme'
import React from 'react'

describe('Result', () => {
  let wrapper;
  let apts
  beforeEach(() => {
  apts = [{reviewsPerMonth: 1.5,
    id: 8252369,
    numReviews: 68,
    price: 85,
    aptType: 'Private room',
    name: 'Cute Sunny Loft Space Williamsburg',
    hood: 'Williamsburg',
    lat: 40.71181346189293,
    long: -73.95663634549271}]
  wrapper = shallow(<Result apts ={apts} hood='Williamsburg' google={1} aptType={'Private room'} setCurrApt ={jest.fn()}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
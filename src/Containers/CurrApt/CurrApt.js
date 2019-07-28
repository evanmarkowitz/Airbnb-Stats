import React from 'react'
import { connect } from 'react-redux'
import { aptTypeReducer } from '../../reducers/aptTypeReducer';



const CurrApt = ({currApt}) => {

  return(
    <article>
      <h2>Selected Apartment</h2>
      <p>Name: {currApt.name}</p>
      <p>Price: {currApt.price}</p>
      <p>Number of Reviews: {currApt.numReviews}</p>
      <p>Link:<a href={`www.airbnb.com/rooms/${currApt.id}`}>AirBNB</a></p>
    </article>

  )

}

const mapStateToProps = (state) => ({
  currApt: state.currApt
})

export default connect(mapStateToProps)(CurrApt)
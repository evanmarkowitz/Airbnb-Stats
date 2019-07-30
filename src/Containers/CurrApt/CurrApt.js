import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const CurrApt = ({currApt}) => {

  return(
    <article className='curr-apt'>
      <h2>Selected Apartment</h2>
      <p><span className='key'>Name:</span> {currApt.name}</p>
      <p><span className='key'>Price:</span> {currApt.price}</p>
      <p><span className='key'>Number of Reviews:</span> {currApt.numReviews}</p>
      <p><span className='key'>Link:</span> <a href={`www.airbnb.com/rooms/${currApt.id}`}>AirBNB</a></p>
    </article>
  )
}

CurrApt.propTypes = {
  currApt: PropTypes.string
}
export const mapStateToProps = (state) => ({
  currApt: state.currApt
})

export default connect(mapStateToProps)(CurrApt)
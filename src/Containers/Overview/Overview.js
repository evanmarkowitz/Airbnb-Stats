import React from 'react'
import {connect} from 'react-redux'
import './Overview.css'


const Overview = ({hood, aptType}) => {
  let currentAptType = aptType === '' ? 'All' : aptType
  let currentHood = hood === '' ? 'All' : hood

  return (
    <section className='overview'>
      <p>Apartment Type: {currentAptType}</p>
      <p>Neighborhood: {currentHood}</p>

    </section>
  )
}

const mapStateToProps = (state) => ({
  hood: state.hood,
  aptType: state.aptType
})

export default connect(mapStateToProps)(Overview)




import React from 'react'
import { connect } from 'react-redux';

import './Results.css'

export const Result = ({ apts, hood}) => {


  return (
    <section className='results'>
      <p>{hood}</p>
      <iframe className='map' src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUjpj2w4odf15sphWyngSyGf8VLgPViy0&q=${hood},New+York,NY`}></iframe>


    </section>
  )
}

const mapStateToProps = (state) => ({
  apts: state.apts,
  hood: state.hood
})

export default connect(mapStateToProps)(Result)
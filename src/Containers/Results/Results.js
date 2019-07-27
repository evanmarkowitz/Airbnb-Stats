import React from 'react'
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import './Results.css'

export const Result = ({ apts, hood, google}) => {


  return (
    <section className='results'>
      <p>{hood}</p>
      {/* <iframe className='map' src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBUjpj2w4odf15sphWyngSyGf8VLgPViy0&q=${hood},New+York,NY`}></iframe> */}
      <Map
          google={google}
          zoom={8}
          // style={mapStyles}
          initialCenter={{ lat: 47.444, lng: -122.176}}
        />

    </section>
  )
}

// const mapStateToProps = (state) => ({
//   apts: state.apts,
//   hood: state.hood
// })

// export default connect(mapStateToProps)(Result)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUjpj2w4odf15sphWyngSyGf8VLgPViy0'
})(Result);
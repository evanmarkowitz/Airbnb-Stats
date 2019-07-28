import React from 'react'
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper , Marker, InfoWindow} from 'google-maps-react';


import './Results.css'

export const Result = ({ apts, hood, google}) => {
  
  const filterApartments = () => {
    let aptsByHood = apts
    if (hood !== ''){
      aptsByHood = apts.filter(apt => apt.hood === hood)
    }
    return aptsByHood
  }

  const buildApts = () => {
    const aptsToBould = filterApartments()
    return aptsToBould.map((apt,i) => {
      return <Marker key={i} id={i} position={{
        lat: apt.lat,
        lng: apt.long,
      }}
      >
      </Marker>
    })
  }

  const mapStyles = {
    width: '80%',
    height: '80%',
    margin: 'auto',
  };

  return (
    <section className='results'>
      <p>{hood}</p>
      <Map
          google={google}
          zoom={11}
          className='map'
          style={mapStyles}
          initialCenter={{ lat: 40.7527, lng: -73.9943}}
        >
      {buildApts()}
      </Map>
    </section>
  )
}

// const mapStateToProps = (state) => ({
//   apts: state.apts,
//   hood: state.hood
// })

// export  connect(mapStateToProps)(Result)

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBUjpj2w4odf15sphWyngSyGf8VLgPViy0'
})(Result);
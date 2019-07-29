import React from 'react'
import { connect } from 'react-redux';
import { Map, GoogleApiWrapper , Marker} from 'google-maps-react';
import './Results.css'


export const Result = ({ apts, hood, google, aptType, setCurrApt}) => {
  
  const filterApartments = () => {
    let aptsByHood = apts
    if (hood !== ''){
      aptsByHood = apts.filter(apt => apt.hood === hood)
    } 
    let aptsByRoomType = aptsByHood
    if (aptType !== '') {
      aptsByRoomType = aptsByRoomType.filter(apt => apt.aptType === aptType)
    }
    return aptsByRoomType
  }

  const buildApts = () => {
    const aptsToBould = filterApartments()
    return aptsToBould.map((apt,i) => {
      return <Marker key={i} id={i} position={{
        lat: apt.lat,
        lng: apt.long,
      }}
      onClick={() => setCurrApt(apt)}
      >
      </Marker>
    })
  }

  const getInitalCenter = () => {
   let fa = filterApartments()
    let startingPoint = {lat: 40.734184867531, lng: -73.99849589734207}
    let zoomNum = 11
    if(fa !== apts && fa.length !== 0) {
      startingPoint = {lat: fa[0].lat, lng: fa[0].long}
      zoomNum =13 
    }
    return <Map
    google={google}
    zoom={zoomNum}
    style={mapStyles}
    center={startingPoint}
    initialCenter={startingPoint}
      >
    {buildApts()}
    </Map>
  }



  const mapStyles = {
    width: '70%',
    height: '60%',
    margin: '0',
    boxShadow: '0px 20px 40px grey',
    filter: 'grayscale(1) contrast(120%)' 
   
  };

 
  return (
    <section className='results'>
      {getInitalCenter()}
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


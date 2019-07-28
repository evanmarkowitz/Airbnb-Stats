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
    if(fa !== apts) {
      startingPoint = {lat: fa[0].lat, lng: fa[0].long}
      zoomNum =13 
    }
    console.log(startingPoint)
    return <Map
    google={google}
    zoom={zoomNum}
    // className='map'
    style={mapStyles}
    center={startingPoint}
      >
    {buildApts()}
    </Map>
  }



  const mapStyles = {
    width: '70%',
    height: '60%',
    margin: '0',
    boxShadow: '0px 20px 40px grey',
  };

 
  return (
    <section className='results'>
      {getInitalCenter()}
      {/* <Map
          google={google}
          zoom={11}
          // className='map'
          style={mapStyles}
          initialCenter={getInitalCenter()}
        >
      {buildApts()}
      </Map> */}
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
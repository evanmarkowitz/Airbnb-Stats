import React from 'react'
import { connect } from 'react-redux'
import './Overview.css'


export const Overview = ({hood, aptType, apts}) => {
  let currentAptType = aptType === '' ? 'All' : aptType
  let currentHood = hood === '' ? 'All' : hood

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

  const calcAvgPrice = () => {
    let filteredApts = filterApartments()
    let total = filteredApts.reduce((total, apt) => {
      total = total + apt.price 
      return total 
    },0)
    let avg = Math.floor(total / filteredApts.length)
    if (isNaN(avg)) {
      avg = 'Not enough data'
    }
    return avg
  }

  return (
    <section className='overview'>
      <h3>Filtered By:</h3>
      <p><span className='key'>Apartment Type:</span> {currentAptType}</p>
      <p><span className='key'>Neighborhood:</span> {currentHood}</p>
      <p><span className='key'>Average Price:</span> {calcAvgPrice()}</p>
    </section>
  )
}

export const mapStateToProps = (state) => ({
  hood: state.hood,
  aptType: state.aptType,
  apts: state.apts
})

export default connect(mapStateToProps)(Overview)




import React, { Component } from 'react'
import './Filter.css'
import { fetchApartments, apartmentCleaner } from '../../ApiCalls/apiCall'
import {getApts, getHood, getAptType} from '../../actions/index.js'
import { connect } from 'react-redux';

export class Filter extends Component {
  constructor() {
    super()
    this.state = {
      city: "New-york-city",
      roomType: '',
      borough: '',
      Brooklyn: ['Williamsburg', 'Bedford-Stuyvesant', 'Bushwick', 'Crown Heights', 'Greenpoint', 'Financial District', 'Flatbush',
    'Clinton Hill', 'Park Slope', 'Fort Greene', 'Sunset Park'],
      Manhattan: ['Harlem', 'Upper West Side', 'Hell/s Kitchen', 'East Village', 'Upper East Side', 
      'Midtown', 'Chelsea',  'Lower East Side', 'West Village', 'Murray Hill', 'Greenwich Village', 'Soho', 'Chinatown', 'Gramercy'], 
      Queens: ['Astoria', 'Long Island City', 'Flushing', 'Ridgewood', 'Sunnyside', 'Ditmars Steinway' ],
      chosenHood: '',
      typeOfAprtment: false,
      boroughShow: false,
      hoodsShow: false,
    }
  }

  toggleType = () => {
    this.setState({typeOfAprtment: !this.state.typeOfAprtment})
  }
  toggleBorough= () => {
    this.setState({boroughShow: !this.state.boroughShow})
  }
  toggleHood = () => {
    this.setState({hoodsShow: !this.state.hoodsShow})
  }

  handleChange = async (event) => {
    await this.setState({[event.target.name]: event.target.value})
  }

  buildNeighborhood = () => {
    let hoods =  this.state[this.state.borough] || []
    return hoods.map(hood => {
      return <button
        name='hood'
        value={hood}
        onClick={event => this.chooseHood(event)}
        className='filter-button'>{hood}
      </button>
    })
  }

  chooseHood = async (event) => {
    let chosenHood =  [event.target.value][0]
    await this.props.getHood(chosenHood)
  }

  chooseAptType = (event) => {
    console.log([event.target.value][0])
    let chosenAptType =  [event.target.value][0]
    this.props.getAptType(chosenAptType)
  }
  
  render() {
  
    return (
      <section className = 'filter-section'>
        <section className ='type-of-apartment'>
          <h3 onClick={this.toggleType}>Type of apartment</h3>

         {this.state.typeOfAprtment && 
         <div className='buttons'>
            <button onClick={(event) => this.chooseAptType(event)}
            name='roomType'
            value='Entire home/apt'
            className='filter-button'>Entire Apartment</button>

            <button onClick={(event) => this.chooseAptType(event)}
            name='roomType'
            value='Private room'
            className='filter-button'>Room</button>
          </div>}
        </section>
        <section className='borough'>
          <h3 onClick={this.toggleBorough}>Borough</h3>
          {this.state.boroughShow && 
            <div className='buttons'>
              <button className='filter-button'
              onClick={(event) => this.handleChange(event)}
              name='borough'
              value='Manhattan'
              >Manhattan</button>

              <button className='filter-button'
              onClick={(event) => this.handleChange(event)}
              name='borough'
              value='Brooklyn'>
              Brooklyn</button>

              <button className='filter-button'
              onClick={(event) => this.handleChange(event)}
              name='borough'
              value='Queens'>
              Queens</button>
            </div>
          }
        </section>
        
        <section className='neighborhoods'>
          {this.state.borough &&
          <h3 onClick={this.toggleHood}>Neighborhoods</h3>}
          
          <div className='buttons'>
            {this.buildNeighborhood()}
          </div> 
        </section> 
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  apts: state.apts
})

export const mapDispatchToProps = (dispatch) => ({
  getApts: (apts) => dispatch(getApts(apts)),
  getHood: (hood) => dispatch(getHood(hood)),
  getAptType: room => dispatch(getAptType(room))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
import React, { Component } from 'react'
import './Filter.css'
import { fetchApartments, apartmentCleaner } from '../../ApiCalls/apiCall'
import {getApts, getHood} from '../../actions/index.js'
import { connect } from 'react-redux';
import { Redirect } from 'react-router'; 

export class Filter extends Component {
  constructor() {
    super()
    this.state = {
      apiKey: 'cb78dd3d7e5bf3d42454677afe5f7c591993e1bd9bbe4c716752bdbe',
      city: "New-york-city",
      roomType: '',
      borough: '',
      Brooklyn: ['Williamsburg', 'Bedford-Stuyvesant', 'Bushwick', 'Crown Heights', 'Greenpoint', 'Financial District', 'Flatbush',
    'Clinton Hill', 'Park Slope', 'Fort Greene', 'Sunset Park'],
      Manhattan: ['Harlem', 'Upper West Side', 'Hell/s Kitchen', 'East Village', 'Upper East Side', 
      'Midtown', 'Chelsea',  'Lower East Side', 'West Village', 'Murray Hill', 'Greenwich Village', 'Soho', 'Chinatown', 'Gramercy'], 
      Queens: ['Astoria', 'Long Island City', 'Flushing', 'Ridgewood', 'Sunnyside', 'Ditmars Steinway' ],
      chosenHood: ''
    }
  }
  handleChange = async (event) => {
    await this.setState({[event.target.name]: event.target.value})
  }

  buildNeighborhood = () => {
    let hoods =  this.state[this.state.borough]
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
    let data = await fetchApartments(this.state.apiKey, chosenHood, this.state.roomType)
    let cleanApartments = apartmentCleaner(data.records)
    await this.props.getApts(cleanApartments)
    await this.props.getHood(chosenHood)
  }
  


  render() {
  
    return (
      <section className = 'filter-section'>
        <article>
          <h3>Type of apartment</h3>
          <div className='buttons'>

            <button onClick={(event) => this.handleChange(event)}
            name='roomType'
            value='Entire+home%2Fapt'
            className='filter-button'>Entire Apartment</button>

            <button onClick={(event) => this.handleChange(event)}
            name='roomType'
            value='Private+room'
            className='filter-button'>Room</button>

          </div>
          <h3>Borough</h3>
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

            {/* <button className='filter-button'
            onClick={(event) => this.handleChange(event)}
            name='borough'
            value='Bronx'>
            Bronx</button>

            <button className='filter-button'
            onClick={(event) => this.handleChange(event)}
            name='borough'
            value='Staten Island'>
            Staten Island</button> */}

          </div>

        </article>
        {(this.state.roomType && this.state.borough) &&
        <article className='neighborhoods'>
          <h3>Neighborhoods</h3>
          <div className='buttons'>
            {this.buildNeighborhood()}
          </div>
        </article> }
        {this.props.apts.length > 0 && <Redirect to='/results'/>}
        
      </section>
    )
  }
}

export const mapStateToProps = (state) => ({
  apts: state.apts
})

export const mapDispatchToProps = (dispatch) => ({
  getApts: (apts) => dispatch(getApts(apts)),
  getHood: (hood) => dispatch(getHood(hood))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
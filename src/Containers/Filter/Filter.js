import React, { Component } from 'react'
import './Filter.css'

export class Filter extends Component {
  constructor() {
    super()
    this.state = {
      roomType: '',
      borough: ''
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
    
  }
  render() {
    return (
      <section className = 'filter-section'>
        <article>
          <h3>Type of apartment</h3>
          <div className='buttons'>

            <button onClick={(event) => this.handleChange(event)}
            name='roomType'
            value='entire_apartment'
            className='filter-button'>Entire Apartment</button>

            <button onClick={(event) => this.handleChange(event)}
            name='roomType'
            value='room'
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
            <button className='filter-button'
            onClick={(event) => this.handleChange(event)}
            name='borough'
            value='Bronx'>
            Bronx</button>
            <button className='filter-button'
            onClick={(event) => this.handleChange(event)}
            name='borough'
            value='Staten Island'>
            Staten Island</button>
          </div>
        </article>

      </section>
    )
  }
}

export default Filter
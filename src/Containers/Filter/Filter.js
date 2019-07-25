import React, { Component } from 'react'
import './Filter.css'

export class Filter extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <section className = 'filter-section'>
        <article>
          <h3>Type of apartment</h3>
          <div className='buttons'>
            <button>Entire Apartment</button>
            <button>Room</button>
          </div>
          <h3>Borough</h3>
          <div className='buttons'>
            <button>Manhattan</button>
            <button>Brooklyn</button>
            <button>Queens</button>
            <button>Bronx</button>
            <button>Staten Island</button>
          </div>
        </article>

      </section>
    )
  }
}

export default Filter
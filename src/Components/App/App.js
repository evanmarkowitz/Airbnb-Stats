import React, { Component } from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'
import Results from '../../Containers/Results/Results.js'
import { connect } from 'react-redux';
import statue from '../../Images/statue-of-liberty.svg'
import { fetchApartments, apartmentCleaner } from '../../ApiCalls/apiCall'
import {getApts, getCurrApt} from '../../actions/index.js'
import Overview  from '../../Containers/Overview/Overview'
import CurrApt from '../../Containers/CurrApt/CurrApt'
import PropTypes from 'prop-types'

export class App extends Component {
  constructor() {
    super()
    this.state ={
      error: ''
    }
  }
  
  async componentDidMount() {
    let data;
    try {
      data = await fetchApartments()
    } catch(error) {
      this.setState({ error: error.message})
    }  
    let cleanApartments = apartmentCleaner(data.records)
    await this.props.getApts(cleanApartments)
  }

  render() {
    return (
      <main className='app'>
      <header className='header'>
        <div>
          <h1 className='headline'>AirLytics</h1>
          <h2 className='headline'>Analytics for NYC <span className='airbnb'>Airbnb</span> Hosts</h2>
        </div>
        {this.state.error && <p>this.state.error</p>}
        <img className='statue' src={statue} alt='statue of liberty icon'></img>
      </header>
        <Filter />
        <section className= 'body'>
          <aside>
            <Overview />
            <CurrApt/>
          </aside>
          <Results apts={this.props.apts} hood={this.props.hood} 
          aptType={this.props.aptType} setCurrApt={this.props.getCurrApt} />
        </section>
      </main>
    );
  }
}

App.propTypes = {
  apts: PropTypes.array,
  hood: PropTypes.string,
  aptType: PropTypes.string,
  getApts: PropTypes.func,
  getCurrApt: PropTypes.func
}

export const mapStateToProps = (state) => ({
  apts: state.apts,
  hood: state.hood,
  aptType: state.aptType
})

export const mapDispatchToProps = (dispatch) => ({
  getApts: (apts) => dispatch(getApts(apts)),
  getCurrApt: (apt) => dispatch(getCurrApt(apt)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
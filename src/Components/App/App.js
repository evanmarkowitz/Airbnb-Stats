import React, { Component } from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'
import Results from '../../Containers/Results/Results.js'
import { connect } from 'react-redux';
import statue from '../../Images/statue-of-liberty.svg'
import { fetchApartments, apartmentCleaner } from '../../ApiCalls/apiCall'
import {getApts, getHood, getAptType} from '../../actions/index.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      apiKey: 'cb78dd3d7e5bf3d42454677afe5f7c591993e1bd9bbe4c716752bdbe',
    }

  }

  async componentDidMount() {
    let data = await fetchApartments(this.state.apiKey)
    let cleanApartments = apartmentCleaner(data.records)
    await this.props.getApts(cleanApartments)
  }

  render() {
    return (
      <main className='app'>
      <header className='header'>
        <h1 className='headline'>AIRBNB PRICES BY NEIGHBORHOOD</h1>
        <img className='statue' src={statue} alt='statue of liberty icon'></img>
      </header>
        <section className= 'body'>
          <Filter />
          <Results apts={this.props.apts} hood={this.props.hood} aptType={this.props.aptType}/>
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  apts: state.apts,
  hood: state.hood,
  aptType: state.aptType
})


export const mapDispatchToProps = (dispatch) => ({
  getApts: (apts) => dispatch(getApts(apts)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
import React from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'
import Results from '../../Containers/Results/Results.js'
import { Switch, Route } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import { connect } from 'react-redux';
import statue from '../../Images/statue-of-liberty.svg'


const App = (apts, hood) => {

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  return (
    
    <main className='app'>
    <header className='header'>
      <animated.h1 className='headline' style={fade}>AIRBNB PRICES BY NEIGHBORHOOD</animated.h1>
      <img className='statue' src={statue} alt='statue of liberty icon'></img>
    </header>
      <section className= 'body'>
        <Filter />
        <Results apts={apts}/>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({
  apts: state.apts,
  hood: state.hood
})

export default connect(mapStateToProps)(App)

// export default App;

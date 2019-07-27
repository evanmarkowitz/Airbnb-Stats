import React from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'
import Results from '../../Containers/Results/Results.js'
import { Switch, Route } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'
import { connect } from 'react-redux';


const App = (apts, hood) => {

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  return (
    
  <main className='app'>
    <animated.h1 className='headline' style={fade}>AIRBNB PRICES BY NEIGHBORHOOD</animated.h1>
      <Filter />
      <Results apts={apts}/>
    </main>
  );
}

const mapStateToProps = (state) => ({
  apts: state.apts,
  hood: state.hood
})

export default connect(mapStateToProps)(App)

// export default App;

import React from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'
import Results from '../../Containers/Results/Results.js'
import { Switch, Route } from 'react-router-dom';
import {useSpring, animated} from 'react-spring'

const App =() => {

  const fade = useSpring({
    from: { opacity: 0 }, opacity: 1
  })


  return (
    <Switch>
    <main className='app'>
      <animated.h1 className='headline' style={fade}>AIRBNB PRICES BY NEIGHBORHOOD</animated.h1>
      <Route exact path = '/' render={() => <Filter />} />
      <Route exact path = '/results' render={() => <Results />} />
  
      </main>
    </Switch>
  );
}

export default App;

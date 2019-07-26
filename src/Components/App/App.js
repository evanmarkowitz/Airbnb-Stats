import React from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'
import Results from '../../Containers/Results/Results.js'
import { Switch, Route } from 'react-router-dom';

const App =() => {
  return (
    <Switch>
    <main className='app'>
      <h1 className='headline'>AIRBNB PRICES BY NEIGHBORHOOD</h1>
      <Route exact path = '/' render={() => <Filter />} />
      <Route exact path = '/results' render={() => <Results />} />
  
      </main>
    </Switch>
  );
}

export default App;

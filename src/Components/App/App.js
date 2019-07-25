import React from 'react';
import './App.css';
import Filter from '../../Containers/Filter/Filter.js'

const App =() => {
  return (
    <main className='app'>
      <h1 className='headline'>AIRBNB PRICES BY NEIGHBORHOOD</h1>
      <Filter />
  
    </main>
  );
}

export default App;

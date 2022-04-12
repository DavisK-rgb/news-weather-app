import './App.css';
import { NewsList } from './components'
import Weather from './components/Weather'
import React, { useState } from 'react'
function App() {
  
  return (
    <div className='App'>
  <div className='content'>
  <NewsList  />
       <Weather/>

  </div>
       
    </div>
  );
}

export default App
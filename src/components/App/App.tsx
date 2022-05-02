import React from 'react';
import './App.scss';
import { Home } from '../Home/Home';

function App() {
  return (
    <div className="App">
      <section className='App__content'>
        <Home />
      </section>
      <section className='App__nav'>
        <h3>Navigation</h3>
      </section>
    </div>
  );
}

export default App;

import React from 'react';
import './App.scss';
import { Home } from '../components/Home/Home';
import  { Navigation } from "../components/Navigation/Navigation"

function App() {
  return (
    <div className="App">
      <section className='App__content'>
        <Home />
      </section>
      <section className='App__nav'>
        <Navigation />
      </section>
    </div>
  );
}

export default App;

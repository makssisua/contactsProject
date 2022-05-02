import React from 'react';
import './App.scss';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About'; 
import { Contacts } from '../components/Contacts/Contacts'; 
import  { Navigation } from "../components/Navigation/Navigation"
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <section className='App__content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/about' element={<About />}/>
          <Route
              path="*"
              element={
                <main style={{ padding: "1rem", fontWeight: "bold" }}>
                  <h1>Error 404</h1>
                </main>
              }
            />
        </Routes>
      </section>
      <section className='App__nav'>
        <Navigation />
      </section>
    </div>
  );
}

export default App;

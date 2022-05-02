import React from 'react';
import './App.scss';
import { Home } from '../components/Home/Home';
import { About } from '../components/About/About'; 
import { Contacts } from '../components/Contacts/Contacts'; 
import { Navigation } from "../components/Navigation/Navigation"
import { Page404 } from '../components/Error/404';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <section className='App__content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/about' element={<About />}/>
          <Route path="*" element={<Page404 />}/>
        </Routes>
      </section>
      <section className='App__nav'>
        <Navigation />
      </section>
    </div>
  );
}

export default App;

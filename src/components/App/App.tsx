import React from 'react';
import './App.scss';
import { Home } from '../Home/Home';
import { About } from '../About/About'; 
import { Contacts } from '../Contacts/ContactsList/ContactsList'; 
import { Navigation } from "../Navigation/Navigation"
import { Page404 } from '../Error/404';
import { Route, Routes } from 'react-router';
import { ContactItemPage } from '../Contacts/ContactItem/ContactItemPage';

function App() {
  return (
    <div className="App">
      <section className='App__content'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/contacts/:id' element={<ContactItemPage />}/>
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

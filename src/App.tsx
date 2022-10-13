import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Vacancies from './components/Vacancies';
import PostJob from './components/PostJob';
import Update from './components/Update';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/vacancies' element={<Vacancies/>}/>
              <Route path='/postjob' element={<PostJob/>}/>
              <Route path='vacancies/update/id=:id' element={<Update/>}/>
          </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;

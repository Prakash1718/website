import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './main/Home';
import Login from './main/Login';


import Register from './main/Register';


function App() {
  return (
    <div>
    
    <Router>
    
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route exact path='/register' element={<Register/>}/>
         <Route exact path='/login' element={<Login/>}/>
         
       </Routes>
     
     </Router>
     </div>
  );
}

export default App;

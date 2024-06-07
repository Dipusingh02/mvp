import React from 'react';
import "./App.css";
import { Home , PHealth, PEducation, GetFcraDetails } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div id='root'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Health' element={<PHealth />}></Route>
          <Route path='/Education' element={<PEducation />}></Route>
          <Route path='/FCRA-Details' element={<GetFcraDetails/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

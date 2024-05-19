import React from 'react';
import "./App.css";
import { Home , PHealth } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div id='root'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Health' element={<PHealth />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;

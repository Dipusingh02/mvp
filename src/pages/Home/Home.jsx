import React from 'react';
import './home.css';
import {Navbar} from "../../component"
import Header from '../../component/header/Header';
import H_Features from './H_Features';
import H_Medical from './H_Medical';
import H_wlcm from './H_wlcm';
const Home = () => {
  return (
    <div className='home-main-content'>
      <Navbar />
      <Header />
      <H_wlcm />
    </div>
  )
}

export default Home

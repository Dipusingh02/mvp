import React from 'react';
import './home.css';
import {Navbar} from "../../component"
import Header from '../../component/header/Header';
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

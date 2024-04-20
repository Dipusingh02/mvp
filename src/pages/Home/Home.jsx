import React from 'react';
import './home.css';
import {Navbar} from "../../component"
import Header from '../../component/header/Header';
import H_Features from './H_Features';
const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <H_Features />
    </div>
  )
}

export default Home

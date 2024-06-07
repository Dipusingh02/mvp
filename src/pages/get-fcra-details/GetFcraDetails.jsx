import React from 'react';
import "./getfcradetails.css";
import { Navbar } from '../../component';

const GetFcraDetails = () => {
  return (
    <div>
    <Navbar />
      <div className='frcacontainer'>
      <h1>Frca Details</h1>
      <h2> State Bank of India</h2>
      <p> Account Number : 1000000000</p>
      <p> Ifcs Code :         abcd000001</p>
      <p>Branch Name: benipur supaul</p>
      </div>
    </div>
  )
}

export default GetFcraDetails

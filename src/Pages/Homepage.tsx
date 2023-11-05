import React from 'react'
import Navbar from '../Components/Navbar'
import Landingpage from './Landingpage'
import { TransactionPage } from './TransactionPage';

function Homepage() {
  return (
    <div>
        <Navbar/>
        <TransactionPage/>
        {/* <Landingpage/> */}
    </div>
  )
}

export default Homepage;

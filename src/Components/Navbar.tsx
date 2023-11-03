import React from 'react'
// import styled from 'styled-components'

function Navbar() {
  return (
    <div className='navbox'>
      <div className='navbar'>
      <div className='logo'>
        <a href="/"><img src="" alt="Logo" /></a>
      </div>
        <div className='homepage'>
        <a href="/">Home</a>
        <a href="">Tranjactions</a>
        <a href="">Subscriptions</a>
        <a href="">Instructions</a>
        <a href="">About</a>
        </div>
        <div className='login'>
          <a href="/login">Login</a>
        </div>
      </div>

     
    </div>
  )
}

export default Navbar

// const DIV= styled.div`
//   .navbar {
//   height: 60px;
//   background-color: #89CFF3;
//   color: whitesmoke;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* padding-left: 160px; */
// }
// `
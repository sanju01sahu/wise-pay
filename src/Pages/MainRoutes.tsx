import React from 'react'
import { Route, Routes } from "react-router-dom"
import Homepage from './Homepage'
import Login from './Login'
import Subscriptions from './Subscriptions'

function MainRoutes() {
  return (
    <div>
       <Routes>
          <Route path="/" element = {<Homepage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/subscriptions' element={<Subscriptions/>}/>
        </Routes> 
    </div>
  )
}

export default MainRoutes
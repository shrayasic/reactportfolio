import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
  return (
    <div>
        <body>
            <Navbar/>
            <Outlet/>
            
        </body>
    </div>
  )
}

export default Layout
import React from 'react';
import NavBar from './nav-bar';


import { Outlet } from 'react-router-dom';
const Layout=()=>{

  return (
    <>
     
      <NavBar />
      
        
      
        <Outlet></Outlet>
     
    
    </>
  )
}
export default Layout
import React from 'react';
import NavBar from './nav-bar';

import ProductList from './product';
import { Container } from 'react-bootstrap';
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
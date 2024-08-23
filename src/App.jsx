import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './layout';
import ProductList from './product';
import Cart from './cart';
import ProductPage from './productPage';
import Searchproduct from './searchProduct';

const App=()=>{

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<ProductList/>}></Route>
        <Route path='product' element={<ProductList/>}></Route>
        <Route path='Cart' element={<Cart/>}></Route>
        <Route path='productPage' element={<ProductPage/>}></Route>
        <Route path='Searchproduct' element={<Searchproduct/>}></Route>
        </Route>
       </Routes>
     </BrowserRouter>
    </>
  )
}
export default App
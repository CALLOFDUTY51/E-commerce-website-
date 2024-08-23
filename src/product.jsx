import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCart1 } from './mySlice';
import { Carousel } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dis=useDispatch()
 

  useEffect(() => {

    axios.get("http://localhost:3000/product").then((res)=>{
        setProducts(res.data);
        
    })
    
  }, []);

  const add=(product)=>{
    
       dis(addCart1(product))
  }

  const navigate = useNavigate();

  const productClick = (key) => {
      
      navigate('/productPage', { state: key });
  };

  
  const ans =products.map((product)=>{
    return (
      <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
      <Card style={{textAlign:"center", width:"18rem"}} >
        <Card.Img className='mx-auto' variant="top" style={{ width: "200px", height: "200px" }} 
         src={product.image} />
        <Card.Body>
          <Card.Title onClick={()=>{productClick(product)}}>{product.name}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
          <Button variant="primary" onClick={()=>{add(product)}}>Add to cart</Button>
        </Card.Body>
      </Card>
      </Col>
    );
  })
  return (
   <>
   <div>
<Carousel >
  <Carousel.Item style={{ height: '600px' }}>
    <img
      style={{ height: '100%', width: '100%', objectFit: 'auto' }}
      className="d-block"
      src="https://shorturl.at/GTMwh"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First Slide Label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: '600px' }}>
    <img
      style={{ height: '100%', width: '100%', objectFit: 'auto' }}
      className="d-block"
      src="https://shorturl.at/YwGdp"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second Slide Label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item style={{ height: '600px' }}>
    <img
      style={{ height: '100%', width: '100%', objectFit: ' auto' }}
      className="d-block"
      src="https://shorturl.at/YCtfF"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third Slide Label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



<Row

      className="d-flex justify-content-around align-items-center w-100 "
      style={{
        backgroundImage: "url('https://shorturl.at/sNpaJ')",
        paddingLeft:"150px"
      }}>
        <h2 className="mt-4">Products</h2>
        {ans}
   </Row>
   </div>
   </> 
   
  );
};

export default ProductList;

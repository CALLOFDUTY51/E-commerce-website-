// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch } from 'react-redux';
// import { Card, Button, Row, Col } from 'react-bootstrap';
// import { addCart1 } from './mySlice';

// const Searchproduct=()=>{

//     const [val, setVal]= useState("");
//     const [mydata, setMydata] = useState([]);
    
  
//     const handleChange=(e)=>{
//        setVal(e.target.value);
//         let api="http://localhost:3000/product";
//        axios.get(api).then((res)=>{
//             setMydata(res.data);
//        })
//     }
    
//     const dis=useDispatch()

   

//     const add=(product)=>{
    
//         dis(addCart1(product))
//    }

   
//     const ans =mydata.map((product)=>{
    
//         let str= product.name;
//         let status=str.includes(val);
        

//         if (status==true)
//          { 

//         return (
//           <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
//           <Card style={{textAlign:"center", width:"18rem"}} >
//             <Card.Img className='mx-auto' variant="top" style={{ width: "200px", height: "200px" }} 
//              src={product.image} />
//             <Card.Body>
//               <Card.Title >{product.name}</Card.Title>
//               <Card.Text>
//                 {product.description}
//               </Card.Text>
//               <Button variant="primary" onClick={()=>{add(product)}}>Add to cart</Button>
//             </Card.Body>
//           </Card>
//           </Col>
//         );
//       }
      
//     })
  

    
// console.log(ans)
//     return (
//         <>
//         <center>
//           <h1 align="center"> Search Your Product</h1>
//           Enter Product : 
//           <input type="text"  value={val} onClick={handleChange} />

//           <hr />

//         </center>
//   <Row

//       className="d-flex justify-content-around align-items-center w-100 "
//       style={{
//         backgroundImage: "url('https://shorturl.at/sNpaJ')",
//         paddingLeft:"150px"
//       }}>
//         <h2 className="mt-4">Products</h2>
//         {ans}
//    </Row>

//         </>
//     )
// }

// export default Searchproduct;















import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { addCart1 } from './mySlice';

const Searchproduct=()=>{

    const [mydata,setMydata]=useState([]);
    const [val,setVal]=useState("")
    
    const dis=useDispatch()

    useEffect(()=>{
        let url="http://localhost:3000/product"
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    },[])

    const add=(product)=>{
    
        dis(addCart1(product))
   }

   console.log(mydata)
   var ans;
 let mainans;
   useEffect(()=>{
    ans=mydata.map((product)=>{
    
        let str= product.name;
        let status=str.includes(val);
        
console.log("run")
        if (status==true)
         { 

        return (
          <Col key={product.id} sm={12} md={6} lg={4} className="mb-4">
          <Card style={{textAlign:"center", width:"18rem"}} >
            <Card.Img className='mx-auto' variant="top" style={{ width: "200px", height: "200px" }} 
             src={product.image} />
            <Card.Body>
              <Card.Title >{product.name}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Button variant="primary" onClick={()=>{add(product)}}>Add to cart</Button>
            </Card.Body>
          </Card>
          </Col>
        );
      }
      
    })
    mainans=ans
   },[val])

    
console.log( "ans=",ans)
console.log( "mainans=",mainans)

return (
        <>
        <center>
          <h1 align="center"> Search Your Product</h1>
          Enter Product : 
          <input type="text"  value={val} onChange={(e)=>{setVal(e.target.value)}} />

          <hr />

        </center>
  <Row

      className="d-flex justify-content-around align-items-center w-100 "
      style={{
        backgroundImage: "url('https://shorturl.at/sNpaJ')",
        paddingLeft:"150px"
      }}>
        <h2 className="mt-4">Products</h2>
        {mainans}
   </Row>

        </>
    )
}

export default Searchproduct;
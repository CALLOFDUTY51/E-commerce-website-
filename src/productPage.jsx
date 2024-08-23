import { useLocation } from 'react-router-dom';
import {  myinc,mydec} from "./mySlice";
import { useDispatch, useSelector } from "react-redux";
import { Card, Button, Row, Col } from 'react-bootstrap';


const ProductPage = () => {
    const location = useLocation();
    const key = location.state; 
    console.log(location)

    const dis=useDispatch()
    

    const inc=(key)=>{
      dis(myinc(key))
    }

    const dec=(key)=>{
      dis(mydec(key))
    }

    return (
        <div>
            <img src={key.image} alt="" />
            <h1>{key.name}</h1>
            <p> {key.price}</p>
            <td style={{textAlign:"center",verticalAlign: "middle",fontSize:"20px"}}><i onClick={()=>{inc(key.id)}} className="fa-solid fa-circle-plus"></i>{key.quantity}
                <i onClick={()=>{dec(key.id)}} className="fa-solid fa-circle-minus"></i></td>
                <Button variant="primary" onClick={()=>{add(product)}}>Add to cart</Button>
            
        </div>
    );
};
export default ProductPage;
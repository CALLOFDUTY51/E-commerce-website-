import { useDispatch, useSelector } from "react-redux";
import Table from 'react-bootstrap/Table';
import { myDelete, myinc,mydec} from "./mySlice";



const Cart=()=>{

    const mydata=useSelector((state)=>state.myslice.cart)
    const dis=useDispatch()
    const del_pro=(cmp_id)=>{
       dis(myDelete(cmp_id));
    }

    const inc=(key)=>{
      dis(myinc(key))
    }

    const dec=(key)=>{
      dis(mydec(key))
    }

    let total_price=0;
    const ans=mydata.map((key)=>{
        total_price+=Number(key.price);
        return (
            
            <>
            <tr >
                <td><img style={{height:"150px", width:"150px"}} src={key.image}/></td>
                <td style={{textAlign:"center",verticalAlign: "middle",fontSize:"20px"}}>{key.name}</td>
                <td style={{textAlign:"center",verticalAlign: "middle",fontSize:"20px"}}>{key.price}</td>
                <td style={{textAlign:"center",verticalAlign: "middle",fontSize:"20px"}}><i onClick={()=>{inc(key.id)}} className="fa-solid fa-circle-plus"></i>{key.quantity}
                <i onClick={()=>{dec(key.id)}} className="fa-solid fa-circle-minus"></i></td>
                <td style={{textAlign:"center",verticalAlign: "middle"}} onClick={()=>{del_pro(key.id)}} ><img style={{ cursor: "pointer", width: "50px" }} src="/del.png" /></td>
            </tr>
            </>
        )
    })

    return (
        < >
        <div >
         <Table striped bordered hover  >
      <thead>
        <tr style={{backgroundImage:"url('https://shorturl.at/sNpaJ')"}}>
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>quantity</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>{ans}</tbody>
      
      </Table>
      
      </div>
        </>
    )
}

export default Cart;
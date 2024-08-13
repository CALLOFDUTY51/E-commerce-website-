import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let len;
axios.get("http://localhost:3000/product").then((res)=>{
     len=res.data.length;
})

const Slice=createSlice({
    name:"mySlice",
    initialState:{
        
        cart:[],
        
    },
    reducers:{
       myDelete:(state,actions)=>{
         state.cart=state.cart.filter((key)=>{
            if(key.id!=actions.payload){
                return key;
            }
         })
       },

        addCart1:(state,actions)=>{
            console.log(actions.payload)
            if(state.cart.length==0){
                state.cart.push(actions.payload)
            }
            else{
                let g=true
                for(let i=0;i<state.cart.length;i++){
                   if(actions.payload.id==state.cart[i].id){
                       g=false
                   }
                }
                if(g){
                    state.cart.push(actions.payload)
                }
                else{
                    alert("already posted")
                }
            }
          
        },

        myinc:(state,actions)=>{
           for(let i=0;i<state.cart.length;i++){
            if(state.cart[i].id==actions.payload){
                state.cart[i].quantity+=1
            }
           }
        },
        
        mydec:(state,actions)=>{
            for(let i=0;i<state.cart.length;i++){
                if(state.cart[i].id==actions.payload){
                    state.cart[i].quantity-=1
                }
               }
        }
        
    }
})

export default Slice.reducer

export const {addCart1,myDelete,myinc,mydec} =Slice.actions
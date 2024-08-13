import { configureStore } from "@reduxjs/toolkit";
import slice from "./mySlice"
const store=configureStore({
    reducer:{
        myslice:slice
    }
})

export default store
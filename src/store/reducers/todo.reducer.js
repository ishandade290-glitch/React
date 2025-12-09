import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name:"todos",
    initialState:{
        count:0
    },
    reducers:{
        increment:(state) => {
            state.count+=1
        },
        decrement:(state)=>{
            state.count -= 1
        },
    },
})
export const{increment, decrement} = todoSlice.actions
export default todoSlice.reducer

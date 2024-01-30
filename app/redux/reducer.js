import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'App',
    initialState:{
        dishes:null
    },
    reducers:{
        Add:(state,action)=>{
            state.dishes=action.payload
        }
    }
})

export const {Add} =appSlice.actions;
export default appSlice.reducer;
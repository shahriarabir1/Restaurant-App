import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
    name:'App',
    initialState:{
        dishes:[],
        favourite:[]
    },
    reducers:{
        Add:(state,action)=>{
            state.dishes.push(action.payload)
        },
        Add_fav:(state,action)=>{
            state.favourite.push(action.payload)
        },
        Remove_fav :(state, action) => {
            const updatedFavorites = state.favourite.filter((favDish) => favDish.id !== action.payload);
            return { ...state, favourite: updatedFavorites };
        }
    }
})

export const {Add,Add_fav,Remove_fav} =appSlice.actions;
export default appSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        isGPTSearch : false,
    },
    reducers:{
        showGPTSearchView:(state)=>{
            state.isGPTSearch = !state.isGPTSearch;
        }
    }
});


export const {showGPTSearchView} = gptSlice.actions;
export default gptSlice.reducer;
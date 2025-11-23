import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:'gpt',
    initialState:{
        isGPTSearch : false,
        movieResults : null,
        movieNames : null
    },
    reducers:{
        showGPTSearchView:(state)=>{
            state.isGPTSearch = !state.isGPTSearch;
        },
        addGPTMoviesResults:(state, actions)=>{
            const {movieNames, movieResults} = actions.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
});


export const {showGPTSearchView,addGPTMoviesResults} = gptSlice.actions;
export default gptSlice.reducer;
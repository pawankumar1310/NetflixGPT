import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        movieTrailer : null,
        popularMovie : null
    },
    reducers:{
        addNowPlayingMovies : (state, actions)=>{
            state.nowPlayingMovies = actions.payload;
        },

        addPopularMovie :(state, actions)=>{
            state.popularMovie = actions.payload;
        },

        addMovieTrailer : (state, actions)=>{
            state.movieTrailer = actions.payload;
        }
    }
});

export const {addNowPlayingMovies, addMovieTrailer,addPopularMovie} = movieSlice.actions;
export default movieSlice.reducer;
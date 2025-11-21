import { useEffect } from "react";
import { API_Options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovies = ()=>{
    const dispatch = useDispatch();
    const getPopularMovies = async ()=>{
     const popularMovie = await   fetch(
            "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
            API_Options
        )
        
    const data = await popularMovie.json();
    dispatch(addPopularMovie(data.results));
    
    }

    useEffect(()=>{
        getPopularMovies();
    }, []);
}

export default usePopularMovies;


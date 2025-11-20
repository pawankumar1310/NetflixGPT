import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const getMovies = async () => {
        const response = await fetch(
            'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
            API_Options
        );
        const json = await response.json();
        //console.log(json.results);

        dispatch(addNowPlayingMovies(json.results));

    }
    useEffect(() => {
        getMovies();
    }, []);
}

export default useNowPlayingMovies;
import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId)=>{
        // Fetching the trailer video and updating the store with trailer video data.
        const dispatch = useDispatch();
        const getMovie = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_Options
        );
        const jsonData = await data.json();
         console.log(jsonData.results);

         const filterTrailer = jsonData.results.filter((video) => video.type === "Trailer");
         const trailer = filterTrailer.length ? filterTrailer[0] : jsonData.results[0];
         console.log(trailer);
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
        getMovie();
    }, []);
}

export default useMovieTrailer;
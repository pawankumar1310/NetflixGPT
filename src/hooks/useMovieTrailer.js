import { useEffect } from "react";
import { API_Options } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/movieSlice";

const useMovieTrailer = (movieId)=>{
        // Fetching the trailer video and updating the store with trailer video data.
        const dispatch = useDispatch();
        const movieTrailer = useSelector(store => store.movie.movieTrailer);
        const getMovie = async () => {
        const data = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
            API_Options
        );
        const jsonData = await data.json();

         const filterTrailer = jsonData.results.filter((video) => video.type === "Trailer");
         const trailer = filterTrailer.length ? filterTrailer[0] : jsonData.results[0];
        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
      !movieTrailer && getMovie();
    }, []);
}

export default useMovieTrailer;
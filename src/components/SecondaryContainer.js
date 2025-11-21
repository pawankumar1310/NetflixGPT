import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movie);
    console.log(movies);
    return (
        <>
            <div className="bg-black">
                <div className="-mt-32 z-20 pl-3 relative">
                    <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
                    <MovieList title="Popular" movies={movies.popularMovie} />
                    <MovieList title="Romantic" movies={movies.nowPlayingMovies} />
                    <MovieList title="Comedy" movies={movies.nowPlayingMovies} />
                    <MovieList title="Popular" movies={movies.popularMovie} />
                </div>
            </div>
        </>
    )
}


export default SecondaryContainer;
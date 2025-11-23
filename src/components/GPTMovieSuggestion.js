import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
    const gpt = useSelector((store) => store.gpt);
    const { movieNames, movieResults } = gpt;
    if(!movieNames) return null;

    return (
        <>
            <div className="p-2 m-2 bg-black bg-opacity-60">
                <div>
                    {movieNames?.map((movieName, index) => (
                        <MovieList
                            key={movieName + index}
                            title={movieName}
                            movies={movieResults[index]} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default GPTMovieSuggestion;
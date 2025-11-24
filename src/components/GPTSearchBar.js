import { useDispatch, useSelector } from "react-redux";
import { API_Options} from "../utils/constants";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/openai";
import { addGPTMoviesResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.lang.languageName);
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch(
            "https://api.themoviedb.org/3/search/movie?query="+ movie +"&include_adult=false&language=en-US&page=1",
            API_Options
        );

        const json = await data.json();
        return json.results;
    }
    
    const handleGPTSearchClick = async () => {
        //Make API Call to GPT API and get movie results
        const gptQuery = "Act as a Movie Recommendation System and suggest some movies for the query : " + searchText.current.value + "only give me 5 movies , comma seprated like the example result given ahead. Example Result : Gadar,Sholay, Koi mil gaya, Golmaal, Don";
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const result = await model.generateContent(gptQuery);
        const getGPTMovies = result?.response.text().split(",");

        // For each movie i will search TMDB API
        const promiseArray = getGPTMovies?.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        dispatch(addGPTMoviesResults({movieNames : getGPTMovies, movieResults : tmdbResults}));
        console.log(tmdbResults);
    }
    return (
        <>
            <div className="pt-[35%] md:pt-[10%] flex justify-center ">
                <form className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e) => e.preventDefault()}>
                    <input
                        ref={searchText}
                        type="text"
                        className="p-2 m-2 col-span-9 rounded-lg"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                    />
                    <button
                        className="m-2 bg-red-500 rounded-lg px-4 py-2 col-span-3"
                        onClick={handleGPTSearchClick}
                    >
                        {lang[langKey].search}
                    </button>
                </form>
            </div>
        </>
    )
}

export default GPTSearchBar;
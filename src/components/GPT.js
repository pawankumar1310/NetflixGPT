import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPT = ()=>{
    return(
        <>
            <div>
                <GPTSearchBar/>
                <GPTMovieSuggestion/>
            </div>
        </>
    )
}

export default GPT;
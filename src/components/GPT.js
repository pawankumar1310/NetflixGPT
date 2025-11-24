import { BackgroundBody_Image } from "../utils/constants";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import GPTSearchBar from "./GPTSearchBar";

const GPT = () => {
    return (
        <>
            <div className="fixed -z-10">
                <img className="h-screen object-cover md:h-auto" src={BackgroundBody_Image}
                    alt="logo" />
            </div>
            <div >
                <GPTSearchBar />
                <GPTMovieSuggestion />
            </div>
        </>
    )
}

export default GPT;
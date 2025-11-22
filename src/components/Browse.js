
import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPT from "./GPT";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    const isGPTSearch = useSelector((store) => store.gpt.isGPTSearch);
    return (
        <>
            <Header />
            {
                isGPTSearch ? (<GPT />) : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </>
    )
}

export default Browse;

import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();

    const isGPTSearch = useSelector((store) => store.gpt.isGPTSearch);
    return (
        <>
            <Header />
            {
                isGPTSearch ? (<GPTSearch />) : <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </>
    )
}

export default Browse;
import { Poster_Movie_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    if(!posterPath) return null;
    return(
        <>
            <div className="w-24 md:w-40 pr-2">
                <img 
                    alt="logo"
                    src={Poster_Movie_URL + posterPath}
                />
            </div>
        </>
    )
}

export default MovieCard;
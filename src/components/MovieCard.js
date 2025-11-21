import { Poster_Movie_URL } from "../utils/constants";

const MovieCard = ({posterPath})=>{
    return(
        <>
            <div className="w-40 pr-2">
                <img 
                    alt="logo"
                    src={Poster_Movie_URL + posterPath}
                />
            </div>
        </>
    )
}

export default MovieCard;
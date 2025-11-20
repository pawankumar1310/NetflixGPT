import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
    useMovieTrailer(movieId);

    const trailerVideo = useSelector(store => store.movie?.movieTrailer);
    return (
        <>
            <div>
                <iframe 
                className="w-screen h-screen"
                src={"https://www.youtube.com/embed/"+ trailerVideo?.key+"?autoplay=1&mute=1" }
                title="Frankenstein | Guillermo del Toro | Official Trailer | Netflix" 
                ></iframe>
            </div>
        </>
    )
}

export default VideoBackground;
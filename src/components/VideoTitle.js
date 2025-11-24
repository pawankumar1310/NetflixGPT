const VideoTitle = ({title, description})=>{
    return(
        <>
            <div className="my-4 md:mt-0 md:pt-[20%] px-6 md:px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
                <h1 className="font-bold text-sm md:text-3xl">{title}</h1>
                <p className="hidden md:inline-block mt-2 text-sm w-4/12">{description}</p>
                <div className="my-4 md:mt-2">
                    <button className="bg-gray-400 md:bg-white text-black md:p-2 px-4 md:px-10  rounded-lg hover:bg-opacity-60">▶ Play</button>
                    <button className="bg-gray-400 md:bg-white text-black md:p-2 px-4 md:px-10 mx-1 rounded-lg hover:bg-opacity-60">More Info</button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle;
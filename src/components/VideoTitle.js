const VideoTitle = ({title, description})=>{
    return(
        <>
            <div className="pt-[20%] px-24 w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
                <h1 className="font-bold text-3xl">{title}</h1>
                <p className="mt-2 text-sm w-4/12">{description}</p>
                <div className="mt-2">
                    <button className="bg-white text-black p-2 px-10  rounded-lg hover:bg-opacity-60">▶ Play</button>
                    <button className="bg-white text-black p-2 px-10 mx-2  rounded-lg hover:bg-opacity-60">More Info</button>
                </div>
            </div>
        </>
    )
}

export default VideoTitle;
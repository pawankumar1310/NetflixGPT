import { useSelector } from "react-redux";
import { BackgroundBody_Image } from "../utils/constants";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
    const langKey = useSelector((store) => store.lang.languageName);
    return (
        <>
            <div className="absolute -z-10">
                <img src={BackgroundBody_Image}
                    alt="logo" />
            </div>
            <div className="pt-[10%] flex justify-center ">
                <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg">
                    <input
                        type="text"
                        className="p-2 m-2 col-span-9 rounded-lg"
                        placeholder={lang[langKey].gptSearchPlaceholder}
                    />
                    <button
                        className="m-2 bg-red-500 rounded-lg px-4 py-2 col-span-3"
                    >
                        {lang[langKey].search}
                    </button>
                </form>
            </div>
        </>
    )
}

export default GPTSearchBar;
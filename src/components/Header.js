import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect, useState } from "react";
import { LOGO_Header } from "../utils/constants";
import { showGPTSearchView } from "../utils/gptSlice";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const [isUserProfileClick, setIsUserProfileClick] = useState(false);
    const isGPTSearch = useSelector((store) => store.gpt.isGPTSearch);
    const handleUserProfile = () => {
        setIsUserProfileClick(!isUserProfileClick);
    }


    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        const subscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // const uid = user.uid;
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                navigate("/browse");
            } else {
                // User is signed out
                dispatch(removeUser());
                navigate("/");
            }
        });

        // Unsubscribe when component unmounts.
        return () => subscribe();
    }, []);

    const handleGPTSearch = ()=>{
       
        dispatch(showGPTSearchView(!isGPTSearch));
    }

    return (
        <>
            <div className="absolute px-2 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
                <img
                    className="w-40"
                    src={LOGO_Header}
                    alt="logo"
                />
                {user && <div className="flex cursor-pointer">
                    <button
                        onClick={handleGPTSearch}
                        className="h-10 px-5 mx-2 mt-2 bg-purple-800 rounded-lg text-white hover:bg-purple-400">
                        GPT Search
                    </button>
                    <img
                        onClick={handleUserProfile}
                        className="w-10 h-10 mt-2 rounded-sm"
                        src={user?.photoURL}
                        alt="logo"
                    />
                    {isUserProfileClick &&
                        <button
                            className="font-bold mx-2 text-white bg-red-500 h-10 px-5 mt-2 rounded-lg"
                            onClick={handleSignOut}
                        >
                            Sign Out
                        </button>}
                </div>}

            </div>
        </>
    )
}

export default Header;
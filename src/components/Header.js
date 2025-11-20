import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGO_Header } from "../utils/constants";

const Header = () => {

    const navigate = useNavigate();
    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.

        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
      const subscribe =   onAuthStateChanged(auth, (user) => {
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
        return ()=> subscribe();
    }, []);

    return (
        <>
            <div className="absolute px-4 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
                <img
                    className="w-40"
                    src= {LOGO_Header}
                    alt="logo"
                />
                {user && <div className="flex cursor-pointer">
                    <img className="w-12 h-12 m-1 "
                        src={user?.photoURL}
                        alt="logo" />
                    <button className="font-bold p-1 text-white" onClick={handleSignOut}>Sign Out</button>
                </div>}
            </div>
        </>
    )
}

export default Header;
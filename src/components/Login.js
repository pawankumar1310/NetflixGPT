import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BackgroundBody_Image, USER_AVATAR } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const dispatch = useDispatch();

    const [errorMessage, setErrorMessage] = useState(null);
    const handleIsSignForm = () => {
        setIsSignInForm(!isSignInForm);
        setErrorMessage(null);
    }

    const handleValidation = () => {
        const message = checkValidateData(email.current.value, password.current.value, isSignInForm ? null : name.current.value);
        setErrorMessage(message);

        // If email or password or name invalid
        if (message) return;

        // if email and password and name is valid
        if (!isSignInForm) {
            //Sign Up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                    }).then(() => {
                        // Profile updated!
                        console.log(user);
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                    }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                })
                .catch((error) => {

                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
        else {
            // Sign In logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                })
                .catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }
    }
    return (
        <>
            <div className="">
                <Header />
                <div className="absolute">
                    <img src={BackgroundBody_Image}
                        alt="logo" />
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="absolute p-12 bg-black w-3/12 mt-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-2xl py-3 px-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && <input
                        ref={name}
                        type="text"
                        placeholder="Full Name"
                        className="p-2 m-2 w-full rounded-lg bg-gray-700"
                    />}
                    <p className="text-red-700 font-bold p-2">{errorMessage?.includes("Name") ? errorMessage : ""}</p>
                    <input
                        ref={email}
                        type="text"
                        placeholder="Email Address"
                        className="p-2 m-2 w-full rounded-lg bg-gray-700"
                    />
                    <p className="text-red-700 font-bold p-2">{errorMessage?.includes("Email") ? errorMessage : ""}</p>
                    <input
                        ref={password}
                        type="password"
                        placeholder="Password"
                        className="p-2 m-2 w-full rounded-lg bg-gray-700"
                    />
                    <p className="text-red-700 font-bold p-2">{errorMessage?.includes("Password") ? errorMessage : ""}</p>
                    {/* Other errors (general errors) */}
                    <p className="text-red-700 font-bold p-2">
                        {
                            errorMessage &&
                                !errorMessage.includes("Name") &&
                                !errorMessage.includes("Email") &&
                                !errorMessage.includes("Password")
                                ? errorMessage
                                : ""
                        }
                    </p>
                    <button
                        className="p-2 m-2 bg-red-500 rounded-lg w-full cursor-pointer"
                        onClick={handleValidation}
                    >{isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="px-2 py-4 text-sm cursor-pointer" onClick={handleIsSignForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
                </form>
            </div>

        </>
    )
}

export default Login;
import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm, setIsSignInFormt] = useState(true);
    const handleIsSignForm = () => {
        setIsSignInFormt(!isSignInForm);
    }

    return (
        <>
            <div className="">
                <Header />
                <div className="absolute">
                    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg"
                        alt="logo" />
                </div>
                <form className="absolute p-12 bg-black w-3/12 mt-36 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                    <h1 className="font-bold text-2xl py-3 px-2">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {isSignInForm && <input type="text" placeholder="Full Name" className="p-2 m-2 w-full rounded-lg bg-gray-700" />}
                    <input
                        type="text"
                        placeholder="Email Address"
                        className="p-2 m-2 w-full rounded-lg bg-gray-700"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 m-2 w-full rounded-lg bg-gray-700"
                    />
                    <button
                        className="p-2 m-2 bg-red-500 rounded-lg w-full"
                        type="submit">{isSignInForm ? "Sign In" : "Sign Up"}
                    </button>
                    <p className="px-2 py-4 text-sm cursor-pointer" onClick={handleIsSignForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
                </form>
            </div>

        </>
    )
}

export default Login;
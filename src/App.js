import { Provider, useDispatch } from "react-redux";
import Body from "./components/Body";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { useEffect } from "react";


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        // const uid = user.uid;
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
        <Body />
    </div>
  );
}

export default App;

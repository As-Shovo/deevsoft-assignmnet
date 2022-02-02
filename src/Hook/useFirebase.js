import { useEffect, useState } from 'react';
import intializeFirebase from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,  signOut } from "firebase/auth";
import { getStorage, ref, uploadString } from "firebase/storage";

intializeFirebase();

function useFirebase() {

    const [user, setUser] = useState({});
    const [error, setError] = useState({});


    const auth = getAuth();
    const storage = getStorage();


    const handleGoogleSignIn = ( navigate ) => {

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // The signed-in user info.
                const user = result.user;
                setUser(user);
                navigate('/goal');
                // ...
                console.log(user);
            })
            .catch((error) => {

                setError(error.message);

                // ...
            });


    }


    const createEmailPasswordUser = (email, password) => {

        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                // ...
            })
    }


    const loginEmailPasswordUser = (email, password, navigate) => {

        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                setUser(result.user);
                navigate('/goal');
                // ...
            })
    }



    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser('')
        }).catch((error) => {
            // An error happened.
        });
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out

            }
        });
    }, [auth]);



    const handleStorage = (message) =>{
        const storageRef = ref(storage, message);
        uploadString(storageRef, message)
        .then((snapshot) => {
            console.log('Uploaded a raw string!', snapshot);
          });
    }

    return {
        user,
        handleGoogleSignIn,
        error,
        createEmailPasswordUser,
        loginEmailPasswordUser,
        handleSignOut,
        handleStorage,
    };
}

export default useFirebase;

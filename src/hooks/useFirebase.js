import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Login/Firebase/Firebase.init"
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();


    // Register User
    const registerUser = (email, password, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setError('');
                history.replace('/');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }


    // LogIn User
    const logInUser = (email, password, location, history) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }


    // Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);

        });
        return () => unsubscribe;
    }, [])


    // LogOut
    const logOut = () => {
        setLoading(true);
        signOut(auth).then(() => {
            setError('');
        }).catch(error => {
            setError(error.message);
        })
            .finally(() => setLoading(false));
    }

    return {
        user,
        registerUser,
        logInUser,
        logOut,
        loading,
        error
    }
}

export default useFirebase;
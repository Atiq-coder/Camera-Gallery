import { useEffect, useState } from "react";
import initializeFirebase from "../Login/Login/Firebase/Firebase.init"
import {
    getAuth, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, onAuthStateChanged,
    signOut, updateProfile
} from "firebase/auth";


initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();


    // Register User
    const registerUser = (email, password, name, history) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // Save user to database
                saveUser(email, name);
                // Send name to firebase
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    setError(error.message);
                });
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

    // Save user to database
    const saveUser = (email, displayName) => {
        const user = { email, displayName };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    // Admin data load
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin));
    }, [user?.email])

    return {
        user,
        registerUser,
        logInUser,
        logOut,
        loading,
        error,
        admin
    }
}

export default useFirebase;
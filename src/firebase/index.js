import React, { createContext } from 'react';
import app from 'firebase/app';

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
    if (!app.apps.length) {
        app.initializeApp({
            apiKey: "AIzaSyCkug7m6p6-kR5xfUsEXjGNqufwGpR5Vu8",
            authDomain: "react-sql-fcb6e.firebaseapp.com",
            databaseURL: "https://react-sql-fcb6e.firebaseio.com",
            projectId: "react-sql-fcb6e",
            storageBucket: "react-sql-fcb6e.appspot.com",
            messagingSenderId: "200790358512",
            appId: "1:200790358512:web:2dac76d6d4f0d83d358535"
        })
    }
    return (
        <FirebaseContext.Provider value={ app }>
            { children }
        </FirebaseContext.Provider>
    )
};

export {
    FirebaseContext
};

export default FirebaseProvider;
import { createContext } from "react";

export const firebaseContext = createContext(null)

const AuthProvider = ({children}) => {

    const values = {

    }

    return (
        <firebaseContext.Provider value={values}>
            {children}
        </firebaseContext.Provider>
    );
};

export default AuthProvider;
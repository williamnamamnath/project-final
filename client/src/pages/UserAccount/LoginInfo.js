import { createContext, useState } from "react";

export const LoginInfoContext = createContext();

const LoginInfoProvider = ({ children }) => {

const [signedIn, setSignedIn] = useState({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
});

const [isAuthenticated, setIsAuthenticated] = useState(false);
const [loginConfirmed, setLoginConfirmed] = useState(false);

const loggedIn = (userInfo) => {
    setSignedIn(userInfo);
    setLoginConfirmed(true);
    setIsAuthenticated(true);
};

const signedOut = () => {
    setSignedIn({
    _id: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
    });

    setLoginConfirmed(false);
};

return (
    <LoginInfoContext.Provider value={{ signedIn, loginConfirmed, loggedIn, signedOut, isAuthenticated }}>
        {children}
    </LoginInfoContext.Provider>
)};

export default LoginInfoProvider;
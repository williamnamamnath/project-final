import { createContext, useState } from "react";

export const LoginInfoContext = createContext();

const LoginInfoProvider = ({ children }) => {

const [loginConfirmed, setLoginConfirmed] = useState(false);
const [signedIn, setSignedIn] = useState({
    _id: "",
    fname: "",
    lname: "",
    email: "",
    phone: ""
});


const loggedIn = (userInfo) => {
    setSignedIn(userInfo);
    setLoginConfirmed(true);
};

const signedOut = () => {
    setSignedIn({
    fname: "",
    lastName: "",
    email: "",
    phone: ""
    });

    setLoginConfirmed(false);
    window.localStorage.removeItem("loginConfirmed");
};

return (
    <LoginInfoContext.Provider value={{ signedIn, loginConfirmed, loggedIn, signedOut }}>
        {children}
    </LoginInfoContext.Provider>
)};

export default LoginInfoProvider;
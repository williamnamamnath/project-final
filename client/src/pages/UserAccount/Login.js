import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "../Home/Home";
import { ContentWrapper } from "../TOS";
import { PageSpacing, H1 } from "../Contact";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { LoginInfoContext } from "./LoginInfo";

const Login = () => {

    useEffect(() => {
        document.title = "Login"
    }, []);

    const { loggedIn } = useContext(LoginInfoContext);
    const navigate = useNavigate();
    
    const [error, setError] = useState("");
    const [isLoggingIn, setIsLoggingIn] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const LIEmail = (event) => {
        setEmail(event.target.value);
      };

      const LIPassword = (event) => {
        setPassword(event.target.value);
      };

    const blankInput = () => {
        return (email && password !== "") && !isLoggingIn;
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        setIsLoggingIn(true)

        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password
                }),
            });

            if (response.ok) {
                const userInfo = await response.json();
                await loggedIn(userInfo); 
                window.localStorage.setItem("loginConfirmed", true);
                navigate("/");
            } else {
                const errorTriggered = await response.text();
                const errorMsg = JSON.parse(errorTriggered).message;
                setError(errorMsg);
              };

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
                <H1>Sign Into your Account</H1>
                <ContentWrapper>
                    <form className="form" onSubmit={handleLogin}>
                        <H3>Log back in and continue exploring!</H3>
                        <br />
                        <br />
                        <label>Email Address: </label>
                        <br />
                        <input
                        className="input-field"
                        type="text"
                        value={email}
                        name="email"
                        onChange={LIEmail}
                        placeholder="E.g. Your email address"
                        ></input>
                        <br />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input
                        className="input-field"
                        type="password"
                        value={password}
                        name="password"
                        onChange={LIPassword}
                        ></input>
                        <br />
                        <br />
                        <button type="submit" className="website-btn" disabled={!blankInput()}>
                        {isLoggingIn ? "Please wait..." : "Login"}
                        </button>
                        <br />
                        <br/>
                        <p>Don't have an account?
                        <br/>
                        Sign up <a href="/signup">here!</a>
                        </p>
                        {error && <p style={{color:"red"}}>{error}</p>}
                    </form>
                </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export const H3 = styled.h3`
    font-size: 20px;
`

export default Login;
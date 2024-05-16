import { useState, useEffect } from "react";

import { Wrapper } from "../Home/Home";
import { ContentWrapper } from "../TOS";
import { PageSpacing, H1 } from "../Contact";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Login = () => {

    useEffect(() => {
        document.title = "Login"
    }, []);

    const [userLogin, setUserLogin] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserLogin({ ...userLogin, [name]: value });
      };

    const blankInput = !userLogin.email || !userLogin.password;

    const handleLogin = (event) => {
        event.preventDefault();
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
                        value={userLogin.email}
                        name="email"
                        onChange={handleChange}
                        placeholder="E.g. Your email address"
                        ></input>
                        <br />
                        <br />
                        <label>Password: </label>
                        <br />
                        <input
                        className="input-field"
                        type="password"
                        value={userLogin.password}
                        name="password"
                        onChange={handleChange}
                        ></input>
                        <br />
                        <br />
                        <button className="website-btn" disabled={blankInput}>
                        Login
                        </button>
                        <br />
                        <br/>
                        <p>Don't have an account?
                        <br/>
                        Sign up <a href="/signup">here!</a>
                        </p>
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
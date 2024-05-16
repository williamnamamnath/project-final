import { useState, useEffect } from "react";

import { Wrapper } from "../Home/Home";
import { PageSpacing, H1 } from "../Contact";
import { ContentWrapper } from "../TOS";
import { H3 } from "./Login";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {

    useEffect(() => {
        document.title = "Signup"
    }, []);

    const [userSignup, setUserSignup] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        pwd: "",
        confirmPwd: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserSignup({ ...userSignup, [name]: value });
      };

    const blankInput = !userSignup.firstName || !userSignup.lastName || !userSignup.email || !userSignup.phone || !userSignup.pwd || !userSignup.confirmPwd;       

    const handleSignup = (event) => {
        event.preventDefault();
    };

    const passwordHandler = async (event) => {
        event.preventDefault();

    try {
      const {
        firstName,
        lastName,
        email,
        phone,
        pwd,
        confirmPwd,
      } = userSignup;
      const response = await fetch("/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          pwd,
          confirmPwd,
        }),
      });

      if (response.ok) {
        await response.json();

        setUserSignup({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          pwd: "",
          confirmPwd: "",
        });
      } else {
        const errorMessage = await response.text();
        console.log("Signup failed: ", errorMessage);
      }
    } catch (error) {
      console.log(error);
    }};

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>Create Your Account</H1>
            <ContentWrapper>
            <form className="form" onSubmit={handleSignup}>
                <H3>Sign up to make the most of our services!</H3>
                <br />
                <br />
                <label>First Name: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userSignup.firstName}
                    name="first-name"
                    onChange={handleChange}
                    placeholder="E.g. John"
                ></input>
                <br />
                <br />
                <label>Last Name: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userSignup.lastName}
                    name="last-name"
                    onChange={handleChange}
                    placeholder="E.g. Smith"
                ></input>
                <br/>
                <br/>
                <label>Email Address: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userSignup.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="E.g. johnsmith@email.com"
                ></input>
                <br/>
                <br/>
                <label>Email Address: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userSignup.email}
                    name="email"
                    onChange={handleChange}
                    placeholder="E.g. Your email address"
                ></input>
                <br />
                <br />
                <label>Phone: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userSignup.phone}
                    name="phone"
                    onChange={handleChange}
                    placeholder="E.g. 123-456-7890"
                ></input>
                <br />
                <br />
                <label>Password: </label>
                <br />
                <input
                    className="input-field"
                    type="password"
                    value={userSignup.password}
                    name="password"
                    onChange={passwordHandler}
                ></input>
                <br />
                <br />
                <label>Confirm Password: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userSignup.email}
                    name="confirm-password"
                    onChange={passwordHandler}
                ></input>
                <br />
                <br />
                <button className="website-btn" disabled={blankInput}>
                Sign Up
                </button>
            </form>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default Signup;
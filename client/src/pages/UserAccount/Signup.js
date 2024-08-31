import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { Wrapper } from "../Home/Home";
import { PageSpacing, H1 } from "../Contact";
import { ContentWrapper } from "../TOS";
import { H3 } from "./Login";

import { LoginInfoContext } from "./LoginInfo";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Signup = () => {

    useEffect(() => {
        document.title = "Signup"
    }, []);

    const [error, setError] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPwd, setConfirmPwd] = useState("");

    const { loggedIn } = useContext(LoginInfoContext);
    const navigate = useNavigate();

    const SUFname = (event) => {
        setFname(event.target.value);
      };

      const SULname = (event) => {
        setLname(event.target.value);
      };

      const SUEmail = (event) => {
        setEmail(event.target.value);
      };

      const SUPhone = (event) => {
        setPhone(event.target.value);
      };

      const SUPwd = (event) => {
        setPassword(event.target.value);
      };

      const SUConfirmPwd = (event) => {
        setConfirmPwd(event.target.value);
      };

    const blankInput = !fname || !lname || !email || !phone || !password || !confirmPwd;       

    const signupHandler = async (event) => {
        event.preventDefault();

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          phone,
          password,
          confirmPwd,
        }),
      });

      if (response.ok) {
        const userInfo = await response.json();
        await loggedIn(userInfo); 
        navigate("/");

      } else {
        const errorTriggered = await response.text();
        const errorMsg = JSON.parse(errorTriggered).message;
        setError(errorMsg);
        console.log(errorMsg);
      }
    } catch (error) {
      setError(error.message);
    }};


    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>Create Your Account</H1>
            <ContentWrapper>
            <form className="form" onSubmit={signupHandler}>
                <H3>Sign up to make the most of our services!</H3>
                <br />
                <br />
                <label>First Name: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={fname}
                    name="first-name"
                    onChange={SUFname}
                    placeholder="E.g. John"
                    required
                ></input>
                <br />
                <br />
                <label>Last Name: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={lname}
                    name="last-name"
                    onChange={SULname}
                    placeholder="E.g. Smith"
                    required
                ></input>
                <br/>
                <br/>
                <label>Email Address: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={email}
                    name="email"
                    onChange={SUEmail}
                    placeholder="E.g. johnsmith@email.com"
                    required
                ></input>
                <br/>
                <br/>
                <label>Phone: 
                <br/>
                <small>Format: 123-456-789</small>
                </label>
                <br />
                <input
                    className="input-field"
                    type="tel"
                    value={phone}
                    name="phone"
                    onChange={SUPhone}
                    required
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
                    onChange={SUPwd}
                    required
                ></input>
                <br />
                <br />
                <label>Confirm Password: </label>
                <br />
                <input
                    className="input-field"
                    type="password"
                    value={confirmPwd}
                    name="confirm-password"
                    onChange={SUConfirmPwd}
                    required
                ></input>
                <br />
                <br />
                <button type="submit" className="website-btn" onChange={signupHandler} disabled={blankInput}>
                Sign Up
                </button>
                {error && <p style={{color:"red"}}>{error}</p>}
            </form>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default Signup;
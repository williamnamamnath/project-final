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
    const [userFname, setUserFname] = useState("");
    const [userLname, setUserLname] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [userConfirmPwd, setUserConfirmPwd] = useState("");

    const { loggedIn } = useContext(LoginInfoContext);
    const navigate = useNavigate();

    const SUFname = (event) => {
        setUserFname(event.target.value);
      };

      const SULname = (event) => {
        setUserLname(event.target.value);
      };

      const SUEmail = (event) => {
        setUserEmail(event.target.value);
      };

      const SUPhone = (event) => {
        setUserPhone(event.target.value);
      };

      const SUPwd = (event) => {
        setUserPwd(event.target.value);
      };

      const SUConfirmPwd = (event) => {
        setUserConfirmPwd(event.target.value);
      };

    const blankInput = !userFname || !userLname || !userEmail || !userPhone || !userPwd || !userConfirmPwd;       

    const handleSignup = async (event) => {
        event.preventDefault();

    try {
      const response = await fetch("/signup", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userFname,
          userLname,
          userEmail,
          userPhone,
          userPwd,
          userConfirmPwd,
        }),
      });

      if (response.ok) {
        const userInfo = await response.json();
        await loggedIn(userInfo);

        setUserFname("");
        setUserLname("");
        setUserEmail("");
        setUserPhone("");
        setUserPwd("");
        setUserConfirmPwd("");

        navigate("/signup-success");

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
            <form className="form" onSubmit={handleSignup}>
                <H3>Sign up to make the most of our services!</H3>
                <br />
                <br />
                <label>First Name: </label>
                <br />
                <input
                    className="input-field"
                    type="text"
                    value={userFname}
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
                    value={userLname}
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
                    value={userEmail}
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
                    value={userPhone}
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
                    value={userPwd}
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
                    value={userConfirmPwd}
                    name="confirm-password"
                    onChange={SUConfirmPwd}
                    required
                ></input>
                <br />
                <br />
                <button className="website-btn" disabled={blankInput}>
                Sign Up
                </button>
                {error && <p>{error}</p>}
            </form>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default Signup;
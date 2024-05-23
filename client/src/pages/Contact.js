import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./Home/Home";
import { ContentWrapper } from "./TOS";
import { H3 } from "./UserAccount/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";

const Contact = () => {

    useEffect(() => {
        document.title = "Contact"
    }, []);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");


    const userFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const userLastName = (event) => {
        setLastName(event.target.value);
    };

    const userMessage = (event) => {
        setMessage(event.target.value);
    };

const blankInput = !firstName || !lastName || !message;


    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
                <H1>Contact Us</H1>
                <ContentWrapper>
                    <Form>
                        <H3>For any questions or inquiries, please feel free to write us a message.
                        <br/>
                        We're looking forward to hearing from you!
                        </H3>
                        <br/>
                        <label>First Name: </label>
                        <br/>
                        <input className="input-field" type="text" value={firstName} onChange={userFirstName}></input>
                        <br/>
                        <label>Last Name: </label>
                        <br/>
                        <input className="input-field" type="text" value={lastName} onChange={userLastName}></input>
                        <br/>
                        <label>Your Message: </label>
                        <br/>
                        <input className="msg-field" type="text" value={message} onChange={userMessage}></input>
                        <br/>
                        <br/>
                        <Link to="/contact-success" style={{color:"black", textDecoration:"none"}}>
                            <button className="website-btn" type="submit" disabled={blankInput}>Submit</button>
                        </Link> 
                        <br/>
                        <br/>
                    </Form>
                </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export const H1 = styled.h1`
    text-align: center;
    font-size: 40px;
`

export const PageSpacing = styled.div`
    margin: 100px 0 100px 0;
`

const Form = styled.form`
    text-align: center;
`

export default Contact;
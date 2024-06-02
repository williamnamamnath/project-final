import { useEffect } from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./Home/Home";
import { PageSpacing, H1 } from "./Contact";
import { ContentWrapper } from "./TOS";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const ContactSuccess = () => {

    useEffect(() => {
        document.title = "Message Sent!"
    }, []);

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>Thank you for your inquiry!</H1>
            <br/>
            <br/>
            <ContentWrapper>
            <h2 style={{textAlign:"center"}}>We will get back to you as soon as possible to assist you.</h2>
            <br/>
            <br/>
            <Link to="/">
            <div className="center-btn">
            <button className="website-btn" href="/">Back to HOME page</button>
            </div>
            </Link>
            <br/>
            <br/>
            <br/>
            <br/>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default ContactSuccess;
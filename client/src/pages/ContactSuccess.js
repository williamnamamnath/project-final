import { useEffect } from "react";

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
            <ContentWrapper>
            <h2>We will get back to you as soon as possible to assist you.</h2>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default ContactSuccess;
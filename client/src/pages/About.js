import { useEffect } from "react";

import { Wrapper } from "./Home/Home";
import { PageSpacing, H1 } from "./Contact";
import { ContentWrapper } from "./TOS";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const About = () => {

    useEffect(() => {
        document.title = "About Us"
    }, []);


    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
                <H1>NEUROFIBROMATOSIS</H1>
                <br/>
                <br/>
                <ContentWrapper>
                <p style={{textAlign:"center"}}>
                Temporary filler text.
                    </p>
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

export default About;
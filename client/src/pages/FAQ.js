import { useEffect } from "react";

import { Wrapper } from "./Home/Home";
import { PageSpacing, H1 } from "./Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const FAQ = () => {

    useEffect(() => {
        document.title = "FAQ"
    }, []);

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>Frequently Asked Questions</H1>
            <br/>
            <h2 style={{textAlign: "center"}}>Temporary filler text.</h2> 
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default FAQ;
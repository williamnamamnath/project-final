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
<<<<<<< HEAD
            <h2 style={{textAlign: "center"}}>Q: Where can I read the Terms of Service for Nutrissence?</h2> 
            <p style={{textAlign: "center"}}>A: You may read our conditions by visiting our <a href="/tos" target="_blank">Terms of Service</a> page to know more about our policies. </p>
            <br/>
            <br/>
            <h2 style={{textAlign: "center"}}>Q: How can I stay up-to-date with Nutrissence?</h2>
            <p style={{textAlign: "center"}}>A: We currently do not have an automatated infomail distributor. However, we are working on deploying a news subscription service by Fall 2024!</p>
            <p style={{textAlign: "center"}}>We will reveal when our subscription service has gone live on our HOME page so stay tuned!</p>
            <br/>
            <br/>
            <h2 style={{textAlign: "center"}}>Q: How can I reach you if I have a question, comment or concern?</h2>
            <p style={{textAlign: "center"}}>A: Please go to the <a href="/contact" target="_blank" style={{fontStyle:"italic"}}>Contact</a> page in order to communicate with us. You may also reach us at myhealth@nutrissence.com.</p>
=======
            <h2 style={{textAlign: "center"}}>Temporary filler text.</h2> 
>>>>>>> dadddcda7c1a86667d6b4d62a942e4378f78490e
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default FAQ;
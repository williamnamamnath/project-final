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
            <h2>Q: Where can I read the Terms of Service for Nutrissence?</h2> 
            <p>A: You may read our conditions by visiting our <a href="/tos" target="_blank">Terms of Service</a> page to know more about our policies. </p>
            <br/>
            <br/>
            <h2>Q: Are there other useful links that I can visit?</h2>
            <p>A: Yes, you may visit the links below. Please keep in mind we are NOT sponsored by these brands:</p>
            <ul>
            <li>”Insert link”</li>
            <li>”Insert link”</li>
            <li>”Insert link”</li>
            </ul>
            <br/>
            <br/>
            <h2>Q: How can I stay up-to-date with Nutrissence?</h2>
            <p>A: If you wish to subscribe to receive our latest updates, please enter your email address below:</p>
            ***Insert email label, input field and subscribe btn
            <h2>Q: How can I reach you if I have a question, comment or concern?</h2>
            <p>A: Please go to the <a href="/contact" target="_blank">Contact</a>page in order to communicate with us. You may also reach us at myhealth@nutrissence.com.</p>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default FAQ;
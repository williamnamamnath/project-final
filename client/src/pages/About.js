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
                <H1>NUTRISSENCE</H1>
                <br/>
                <br/>
                <ContentWrapper>
                <p style={{textAlign:"center"}}>
                <b>Founded in 1989 in Quebec, Canada</b> on the belief that nutrition is the most essential part to a healthy lifestyle, we hope Nutrissence can help you build your dream diet.
                <br/>
                <br/>
                At Nutrissence, we believe that information plays a key role in educating ourselves and understanding what to do and knowing what to avoid. That is why we decided to create a platform that delivers accurate information that you can use to your advantage. Of course, getting advice from a certified nutritionist can also help you get a better understanding of what our brand has to offer.
                <br/>
                <br/>
                As the creator of Nutrissence, I was always interested in learning how to imporve my diet. I understood around my early 20s that good nutrition can play an important factor and even so as we get older. This is something that I learned and I know that I'm not the only that has been looking for a platform that offers essential advice, which is why I'm hoping Nutrissence can help those in need for <b>free</b>.
                </p>
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

export default About;
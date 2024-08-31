import { useEffect } from "react";

import { Wrapper } from "./Home/Home";
import { PageSpacing, H1 } from "./Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import styled from "styled-components";

const TOS = () => {

    useEffect(() => {
        document.title = "Terms of Services"
    }, []);

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>Terms of Services</H1>
            <ContentWrapper>
            <p>
            These Terms of Service govern your use of the NUTRISSENCE website operated by NUTRISSENCE.
            <br/>
            <br/>
            Please read these Terms carefully before using the Website. Your access to and use of the Website is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Website.
            <br/>
            <br/>
            By accessing or using the Website, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access our website.
            <br/>
            <br/>
            <b>1. Use of NUTRISSENCE</b>
            <br/>
            <br/>
            1.1. NUTRISSENCE provides information on nutrition, diet, health, and related topics for educational and informational purposes only.
            <br/>
            <br/>
            <b>2. Intellectual Property</b>
            <br/>
            <br/>
            2.1. This website and its original content, features, and functionality are owned by NUTRISSENCE and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            <br/>
            <br/>
            2.2. You may not modify, reproduce, distribute, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on this website without our prior written consent.
            <br/>
            <br/>
            <b>3. Disclaimer of Warranties</b>
            <br/>
            <br/>
            3.1. This website is provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the accuracy, reliability, or completeness of any information on the Website. Please use the Nutrissence’s information to your discretion.
            <br/>
            <br/>
            3.2. We disclaim all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
            <br/>
            <br/>
            <b>4. Limitation of Liability</b>
            <br/>
            <br/>
            4.1. In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to lost profits, lost revenue, or loss of data, arising out of or in connection with your use of Nutrissence.
            <br/>
            <br/>
            4.2. Our total liability to you for all claims arising out of or related to our brand shall not exceed the amount paid by you, if any, for accessing Nutrissence.
            <br/>
            <br/>
            <b>5. Governing Law</b>
            <br/>
            <br/>
            5.1. These Terms shall be governed by and construed in accordance with the laws of your state or province, without regard to its conflict of law provisions.
            <br/>
            <br/>
            <b>6. Changes to Terms</b>
            <br/>
            <br/>
            6.1. We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
            <br/>
            <br/>
            6.2. By continuing to access or use Nutrissence after those revisions become effective, you agree to be bound by the revised Terms. If you do not agree to the new Terms, please stop using Nutrissence.
            <br/>
            <br/>
            <b>7. Contact Us</b>
            <br/>
            <br/>
            7.1. If you have any questions about these Terms, please contact us by using <a href="/contact">this form</a> or by emailing us at myhealth@nutrissence.com.
            <br/>
            <br/>
            <Disclaimer>
            By using Nutrissence’s information, you agree to abide by these Terms of Service. 
            </Disclaimer>
            </p>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export const ContentWrapper = styled.div`
    padding: 20px 40px;

    @media all and (min-width: 360px) {
    padding: 0;
    flex-wrap: wrap;
  }
`
const Disclaimer = styled.p`
    font-weight: bold;
    text-decoration: underline;
`

export default TOS;
import { Wrapper } from "../Home/Home";
import { ContentWrapper } from "../TOS";
import { PageSpacing, H1 } from "../Contact";
import { H3 } from "./Login"

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const SignupSuccess = () => {


    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>                
                <H1>CONGRATULATIONS!</H1>
                    <ContentWrapper>
                    <H3>Your account has been created! Please sign in to get started. 
                        <br/>
                        <br/>
                    Or, visit our HOME page to view our products!.</H3>
                    </ContentWrapper>
                    <div>
                        <button>Sign In</button>
                        <button>Explore Nutrissence first!</button>
                    </div>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
};

export default SignupSuccess;
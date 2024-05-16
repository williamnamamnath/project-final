import { useEffect } from "react";

import { Wrapper } from "./Home/Home";
import { PageSpacing, H1 } from "./Contact";
import { ContentWrapper } from "./TOS";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const MyFavorites = () => {

    useEffect(() => {
        document.title = "My Favorites"
    }, []);

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <H1>This is the Favorites page</H1>
            <ContentWrapper>
                <p>The user's Favorites content will be displayed here</p>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

export default MyFavorites;
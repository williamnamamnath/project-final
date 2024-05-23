import { useEffect } from "react";

import { PageSpacing } from "../Contact";
import { ContentWrapper } from "../TOS";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Home = () => {

  useEffect(() => {
    document.title = "NUTRISSENCE"
}, []);

    return (
        <>
        <Navbar />
        <PageSpacing>
            <Wrapper>
            <ContentWrapper>
            <Panel>
            <Brand>NUTRISSENCE</Brand>
            <Slogan>Take Control of Your Health</Slogan>
            <p>Click here to browse our foods and recipes and learn more about their nutritional values!</p>
            </Panel>
            <PageSpacing />
            <Panel>
              <p>Display a carousel of recipes and “MyNutrissence” page to be available soon?</p>
            </Panel>
            <PageSpacing />
            <Panel>
              <p>The information displayed on our website comes exclusively from Spoonacular API/Edamam’s API. Click here to learn more about them. Please note we are NOT sponsored by “Spoonacular API/Edamam.</p>
            </Panel>
            </ContentWrapper>
            </Wrapper>
        </PageSpacing>
        <Footer />
        </>
    )
}; 

const Brand = styled.h1`
  font-size: 60px;
`

export const Wrapper = styled.div`
  padding: 0 2rem;
  `

  const Panel = styled.div`
  text-align: center;
  background-color: #28502E;
  border-radius: 10px;
  padding: 20px 40px;
  color: white;
  `

  const Slogan = styled.h2`
  font-style: italic;
  `

export default Home;
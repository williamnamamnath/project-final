import { useEffect } from "react";

import { PageSpacing } from "../Contact";
import { ContentWrapper } from "../TOS";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";

const Home = () => {

  useEffect(() => {
    document.title = "NEUROFIBROMATOSIS"
}, []);

    return (
        <>
        <Navbar />
        <div className="body-space">
        <PageSpacing />
            <ContentWrapper>
            <Panel>
            <Brand>NEUROFIBROMATOSIS</Brand>
            <Slogan>
              Filler slogan.
            </Slogan>
            </Panel>
            <PageSpacing />
            </ContentWrapper>
        <PageSpacing />
        </div>
        <Footer />
        </>
    )
}; 

const Brand = styled.h1`
  font-size: 75px;

  @media all and (min-width: 360px) {
    padding: 0;
    font-size: 40px;
  }
`

export const Wrapper = styled.div`
  padding: 0 2rem;

  @media all and (min-width: 360px) {
    padding: 0 20px;
    flex-wrap: wrap;
  }
  `

  const Panel = styled.div`
  text-align: center;
  background-color: #28502E;
  border-radius: 10px;
  padding: 20px 60px;
  color: white;
  box-shadow: 0px 5px 15px 5px black;
  max-width: 100vw;
  flex-wrap: wrap;


  @media all and (min-width: 360px) {
    padding: 10px;
    box-shadow: 0px 5px 15px 5px black;
    flex-wrap: wrap;
    max-width: 100vw;
  }
  `

  const Slogan = styled.h2`
  font-style: italic;
  text-decoration: underline;
  `

export default Home;
import { useEffect, useContext } from "react";

import { H1, PageSpacing } from "../Contact";
import { ContentWrapper } from "../TOS";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import APIData from "./Recipes/APIData";

import { LoginInfoContext } from "../UserAccount/LoginInfo";
import { H3 } from "../UserAccount/Login";

const Home = () => {

  useEffect(() => {
    document.title = "NUTRISSENCE"
}, []);

const { loginConfirmed } = useContext(LoginInfoContext);

    return (
        <>
        <Navbar />
        <div className="body-space">
        <PageSpacing />
            <ContentWrapper>
              {loginConfirmed && (
                <>
                <H1>Welcome!</H1>
                <PageSpacing />
                </>
              )}
            <Panel>
            <Brand>NUTRISSENCE</Brand>
            <Slogan>
              Take Control of Your Health!
            </Slogan>
            </Panel>
            <PageSpacing />
            <Panel>
            <H1>Our Source of Information</H1>
              <p>The information displayed on our website comes exclusively from <a href="https://www.edamam.com/" target="_blank" rel="noopener noreferrer" style={{padding:"1px 5px 2px 5px", margin:"1px", backgroundColor:"white", borderRadius:"5px", color:"black", textDecoration:"none"}}>Edamam.</a> 
              <br/>
              Check them out!</p>
            </Panel>
            <PageSpacing />
            {loginConfirmed ? (
                <Panel>
                  <APIData />
                </Panel>
              ) : (
                <Panel>
                  <H1>Search Our Recipes</H1>
                  <H3><a href="/login" style={{color:"white"}}>Login</a> to use our search engine to find specific recipes!</H3>
                </Panel>
              )}
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
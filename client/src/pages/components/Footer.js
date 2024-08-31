import { Link } from "react-router-dom";

import { Wrapper } from "../Home/Home";
import styled from "styled-components";

// The footer of the page
const Footer = () => {

  return (
    <>
      <footer>
        <Wrapper>
        <div className="footer-main">
        <div className="brand-info">
          <h1 className="brand-name">NUTRISSENCE</h1>
          <h2>Based in Quebec, Canada</h2>
        </div>
          <div className="socials-links">
            <h2 style={{margin:"20px 0 0 40px", textDecoration:"underline"}}>Socials</h2>
            <ul>
                <li className="socials-link">Instagram</li>
                <li className="socials-link">Facebook</li>
                <li className="socials-link">Twitter</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="footer-links">
            <h2 style={{margin:"20px 0 0 34px", textDecoration:"underline"}}>Customer Service</h2>
            <ul>
              <FooterLink to="/contact" className="footer-link">
                <li>Contact</li>
              </FooterLink>
              <FooterLink to="/faq" className="footer-link">
                <li>FAQs</li>
              </FooterLink>
              <FooterLink to="/tos" className="footer-link">
                <li>Terms of Services</li>
              </FooterLink>
            </ul>
          </div>
        </div>
        </Wrapper>
      </footer>
    </>
  );
};

const FooterLink = styled(Link)`
  list-style-type: none;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline white;
  }
`

export default Footer;
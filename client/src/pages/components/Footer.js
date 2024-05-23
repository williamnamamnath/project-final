import { Link } from "react-router-dom";

import { Wrapper } from "../Home/Home";
import { H1 } from "../Contact";
import styled from "styled-components";

// The footer of the page
const Footer = () => {

  return (
    <>
      <footer>
        <Wrapper>
        <div className="footer-main">
          <div className="socials-links">
            <h2>Socials</h2>
            <ul>
                <li className="socials-link">Instagram</li>
                <li className="socials-link">Facebook</li>
                <li className="socials-link">Twitter</li>
                <li className="socials-link">LinkedIn</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="footer-links">
            <h2>Customer Service</h2>
            <ul>
              <FooterLink to="/about" className="footer-link">
                <li>About</li>
              </FooterLink>
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
          <br />
          <br />
        </div>
        <br />
        <hr/>
        <div className="footer-main">
        <div className="brand-info">
          <H1>NUTRISSENCE</H1>
          <h2>Based in Quebec, Canada</h2>
        </div>
          </div>
          <br/>
        </Wrapper>
      </footer>
    </>
  );
};

const FooterLink = styled(Link)`
  list-style-type: none;
  color: white;
  text-decoration: none;
  padding: 5px;

  &:hover {
    text-decoration: underline white;
  }
`

export default Footer;
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
          <h1 className="brand-name">NEUROFIBROMATOSIS</h1>
          <h2>Based in Quebec, Canada</h2>
        </div>
          <br />
          <br />
          <div className="footer-links">
            <h2 style={{margin:"20px 0 0 34px", textDecoration:"underline"}}>More Information On Us</h2>
            <ul>
              <FooterLink to="/contact" className="footer-link">
                <li>Contact</li>
              </FooterLink>
              <FooterLink to="/faq" className="footer-link">
                <li>FAQs</li>
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
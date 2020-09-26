import React from "react";
import { FooterWrapper } from "./Footer.Styled";
import Container from "@material-ui/core/Container";
import { FaFacebookSquare } from "react-icons/fa";

const links = [
  "Home",
  "College Profile",
  "Governing Body",
  "Non-Teaching Staff",
  "Infrastructure",
];

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="get-in-touch">
        <Container maxWidth="lg" className="container">
          <h2>Get in Touch With us</h2>
          <FaFacebookSquare
            color="#3b5998"
            style={{ height: "28px", width: "32px", marginRight: "10px" }}
          />
        </Container>
      </div>
      <div className="footer-mid">
        <Container className="container">
          <ul>
            <h2>The College</h2>
            {links.map((link) => (
              <p key="link">{link}</p>
            ))}
          </ul>
          <ul>
            <h2>Academics</h2>
            {links.map((link) => (
              <p key="link">{link}</p>
            ))}
          </ul>
          <ul>
            <h2>Quickly Find</h2>
            {links.map((link) => (
              <p key="link">{link}</p>
            ))}
          </ul>
          <ul>
            <h2>Reach Us</h2>
            {links.map((link) => (
              <p key="link">{link}</p>
            ))}
          </ul>
        </Container>
      </div>
      <div className="developed-by">
        Birpara College © 2020 All Rights Reserved | Developed In House
      </div>
    </FooterWrapper>
  );
};

export default Footer;
